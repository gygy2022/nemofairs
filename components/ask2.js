import { useRouter } from "next/router";
import { useRef, useState } from "react"
import Bullet from "./bullet";

export default function Ask2() {
  const router = useRouter();

  const nemoInfo = [
    { key: "Phone", value: "02-786-9231" },
    { key: "Email", value: "deco@nemofairs.com" },
    { key: "Address", value: "서울 강서구 공항대로 209 (마곡동) 816호" },
    { key: "Open", value: "월요일-금요일 10am-6pm" },
  ]

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const contentsRef = useRef(null);
  const [privacyAgree,setPrivacyAgree] = useState(false);

  const askInput = [
    { key: "Name", value: "이름을 입력해 주세요", ref:nameRef},
    { key: "Phone", value: "연락처를 입력해 주세요", ref:phoneRef },
    { key: "Email", value: "이메일을 입력해 주세요", ref:emailRef },
  ]

  const agree = (e) => {
    if (e.target.checked === true) {
      setPrivacyAgree(true)
    } else {
      setPrivacyAgree(false)
    }

  }



  const submit = () => {

    const askInfo = {
      name : nameRef.current.value,
      phone : phoneRef.current.value,
      email : emailRef.current.value,
      contents : contentsRef.current.value,
      privacyAgree : privacyAgree
    }

    if (askInfo.name === "") {
      alert("이름을 입력해 주세요.");
      nameRef.current.focus();
      return;
    }

    if (askInfo.phone === "") {
      alert("전화번호를 입력해 주세요.");
      phoneRef.current.focus();
      return;
    }

    if (askInfo.email === "") {
      alert("이메일을 입력해 주세요.");
      emailRef.current.focus();
      return;
    }

    if (askInfo.contents === "") {
      alert("내용을 입력해 주세요.");
      contentsRef.current.focus();
      return;
    }

    if (askInfo.privacyAgree === false) {
      return alert("개인정보 취급방침 활용 동의를 체크해 주세요.");
    }

    fetch (`http://ljh45689.cafe24.com/api/consulting/create
    `, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(askInfo),
    }).then(Response => Response.json())
    .then(data => {
      if (data.data.code === "CO200") {
        alert("상담 문의가 접수 되었습니다.");
        router.replace("/");
      } else {
        alert("상담 문의가 실패하였습니다."); 
      }
    });
  }

  return (
    <>
      <div className="ask-wrap">
        <Bullet text="상담 문의" padding="44.5%"/>

        <div className="ask-box">

          {/* 네모전람 정보 div  */}

          <div className="ask-div nemo-info">
            {nemoInfo.map(nemo => (
              <>
                <div>
                  <h2>{nemo.key}</h2>
                  <h5>{nemo.value}</h5>
                </div>
              </>

            ))}
          </div>

          {/* 문의 정보 div  */}

          <div className="ask-div ask-input">
            {askInput.map(input => (
              <>
                <label>
                  <h2>{input.key}</h2>
                  <input type="text"
                    placeholder={input.value}
                    ref={input.ref} />
                </label>
              </>
            ))}

            <div className="privacy-agree">
              <input type="checkbox" onChange={agree} />
              <span>개인정보 취급방침 활용 동의</span>
              <span>[자세히 보기]</span>
            </div>

          </div>


          <div className="ask-div">
            <label>
              <h2>Content</h2>
              <textarea
                placeholder="문의 내용을 입력해 주세요" 
                ref={contentsRef}/>
            </label>
            <button onClick={submit}>Send Message</button>
          </div>

        </div>
      </div>

      <style jsx>
        {`
        .ask-wrap {
          width:100%;
          padding:90px 0;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:40px;
        }

        .ask-title {
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        h1 {
          font-size: 2.5rem;
        }

        h2 {
          font-size:1.3rem;
          margin-bottom:5px;
        }

        h4 {
          font-size:1.2rem;
        }

        .ask-box {
          display:flex;
          gap:20px;
          width:80%;
        }

        .ask-div {
          width:30%;
          display:flex;
          flex-direction:column;
        }

        .nemo-info {
          gap:20px;
        }

        .ask-input input[type=text] {
          width:100%;
          padding:15px;
          font-size:0.9rem;
          border-bottom:1px solid var(--primary-color);
        }

        textarea {
          border:1px solid #ccc;
        }

        .privacy-agree {
          display:flex;
          font-size:0.8rem;
          margin-top:10px;
        }

        .privacy-agree span {
          margin-right: 4px;
        }

        textarea {
          width:100%;
          height:200px;
          padding:15px;
        }

        button {
          height:30px;
          background-color:var(--primary-color);
          color:#fff;
          margin-top:10px;
        }

        @media only screen and (max-width:768px) {
          .ask-box {
            flex-direction: column;
          }

          .ask-div {
            width:100%;
          }

          h1 {
            font-size:2rem;
          }

          h4 {
            font-size:1rem;
          }
        }


      `}
      </style>
    </>
  )
}