import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Bullet from "./bullet";
import { PrivacyRules, PrivacyRulesAgree } from "./rule";

export default function PreRegistraction() {

  const router = useRouter();

  const personAge = [
    {age:"20대", num:"01"}, 
    {age:"30대", num:"02"}, 
    {age:"40대", num:"03"}, 
    {age:"50대", num:"04"}, 
    {age:"60대", num:"05"}, 
  ]

  const personArea = [
    {area:"서울", num:"01"}, 
    {area:"수원", num:"02"}, 
    {area:"용인", num:"03"}, 
    {area:"안양", num:"04"}, 
    {area:"동탄", num:"05"}, 
    {area:"성남", num:"06"}, 
    {area:"안산", num:"07"}, 
    {area:"오산", num:"08"}, 
    {area:"평택", num:"09"}, 
    {area:"기타", num:"10"}, 
  ]

  const visitRoute = [
    {root:"TV 광고", num:"01"},
    {root:"카페 광고", num:"02"},
    {root:"블로그 광고", num:"03"},
    {root:"신문 광고", num:"04"},
    {root:"현수막", num:"05"},
    {root:"포털사이트 배너", num:"06"},
    {root:"지하철 광고", num:"07"},
    {root:"전광판", num:"08"},
    {root:"아파트 전단지", num:"09"},
    {root:"문자", num:"10"},
    {root:"지인 소개", num:"11"},
    {root:"초대장", num:"12"},
    {root:"SNS 광고", num:"13"},
    {root:"라디오 광고", num:"14"},
  ]



  const nameRef = useRef("");
  const [gender, setGender] = useState("");
  const phoneRef = useRef("");
  const [age, setAge] = useState("");
  const [area, setArea] = useState("");
  const [root, setRoot] = useState("");
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  

  const checkedGender = (e) => {
    setGender(e.target.value);
  }

  const checkedAge = (e) => {
    setAge(e.target.value);
  }

  const checkedArea = (e) => {
    setArea(e.target.value);
  }

  const checkedRoot = (e) => {
    setRoot(e.target.value);
  }

  const checkedAgree1 = (e) => {
    setAgree1(true);
  }

  const checkedAgree2 = (e) => {
    setAgree2(true);
  }

  const submit = () => {

    const userInfo = {
      "name" : nameRef.current.value,
      "gender" : gender,
      "phone" : phoneRef.current.value,
      "age" : age,
      "address" : area,
      "root" : root
    };

    if (agree1 && agree2 === true) {

      if (userInfo.name && userInfo.gender && userInfo.phone && userInfo.age && userInfo.address && userInfo.root !== "") {
        

        fetch(`https://jackadmin.co.kr/api/regist/create`, {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        }).then(Response => Response.json())
        .then(data => {
          if (data.data.code === "PR200") {
            window.alert("정상적으로 사전 등록이 완료되었습니다.");
            router.replace("/");
            
          }
        });

      } else {
        return window.alert("전부 채워 주세요.")
      }
      
    } else {

      return window.alert("개인정보 수집 약관에 동의해 주세요.")
      
    }

   


    
    console.log(userInfo);

  }



  return(
    <>
    <div className="personal-wrap">
      <div className="personal-info">
        <div className="rule">
        <Bullet text="개인정보 수집 및 이용규칙" border="none"/>
        <hr />
        <div className="div-scroll">
          <PrivacyRules />
        </div>
        <div className="agree-check">
        <input type="checkbox" onChange={checkedAgree1}></input>
        <span>동의</span>
        </div>
        </div>
        <div className="agree">
        <Bullet text="개인정보 수집 및 이용에 관한 동의" border="none"/>
        <hr />
        <div className="div-scroll">
          <PrivacyRulesAgree />
        </div>
        <div className="agree-check">
        <input type="checkbox" onChange={checkedAgree2}></input>
        <span>동의</span>
        </div>
        </div>
      </div>
      <div className="personal-input">
      <Bullet text="개인정보입력" border="none"/>
      <hr />

      <div className="personal-input-box">
      
      <label>
        <span className="label-title">성명<span id="star">*</span></span>
        <input type="text"
        className="label-input"
        ref={nameRef}
        placeholder="이름을 입력해 주세요." />
      </label>

      <label>
        <span className="label-title">성별<span id="star">*</span></span>
        <div className="check-box">
        <input type="radio" name="gender" value="01" onChange={checkedGender}/><span>남성</span>
        <input type="radio" name="gender" value="02" onChange={checkedGender}/><span>여성</span>
        </div>
      </label>

      <label>
        <span className="label-title">휴대폰 번호<span id="star">*</span></span>
        <input type="text"
        className="label-input"
        ref={phoneRef}
        maxLength="11"
        placeholder="-를 빼고 기재해 주세요." />
      </label>

      <label>
        <span className="label-title">연령대<span id="star">*</span></span>
        <div className="check-box">
        {personAge.map(age => (
          <>
          <div className="check-div">
          <input type="radio" name="age" value={age.num} onChange={checkedAge}/><span>{age.age}</span>
          </div>
          </>
        ))}
        </div>
      </label>

      <label>
        <span className="label-title">거주 지역<span id="star">*</span></span>
        <div className="check-box">
        {personArea.map(area => (
          <>
          <div className="check-div">
          <input type="radio" name="area" value={area.num} onChange={checkedArea}/><span>{area.area}</span>
          </div>
          </>
        ))}
        </div>
      </label>

      <label>
        <span className="label-title">방문 경로<span id="star">*</span></span>
        <div className="check-box">
        {visitRoute.map(route => (
          <>
          <div className="check-div">
          <input type="radio" name="root" value={route.num} onChange={checkedRoot}/><span>{route.root}</span>
          </div>
          </>
        ))}
        </div>
      </label>
      </div>
      <div className="ask-box">
        <p>관련 문의 <span>네모전람 deco@nemofairs.com</span></p> <span>02-786-9231</span>
      </div>
      <div className="submit">
      <button onClick={submit}>사전 등록 신청 (클릭)</button>
      <span>*이미 등록 하셨나요?</span>
      <Link href="/suwon/visitors/visit_check">
      <p>사전 등록 조회</p>
      </Link>
      </div>
      </div>
    </div>

    <style jsx>
      {`
      .personal-wrap {
        background-color:#fff;
        display:flex;
        justify-content:space-between;
        width:80%;
      }

      .personal-wrap>div {
        width:46%;
      }

      .personal-info {
        display:flex;
        flex-direction:column;
      }

      .rule {
        display:flex;
        flex-direction:column;
      }

      hr {
        width:100%;
      }

      .div-scroll {
        width:95%; 
        height:200px;
        overflow:auto;
        text-align:justify;
        margin:20px 20px;
      }

      .agree-check {
        display:flex;
        justify-content:end;
        gap:5px;
        padding-right:10px;
      }

      .personal-input {
        display:flex;
        flex-direction:column;
      }

      .personal-input-box {
        display:flex;
        flex-direction:column;
        align-content:space-between;
        gap:20px 0;
        padding:20px 20px 40px 20px;
        border-bottom:1px solid #ccc;
      }

      label {
        width:100%;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
      }

      .label-title {
        width:20%;
        font-size:1.1rem;
        font-weight:bold;
      }



      .label-input {
        width: 75%;
      }

      .check-box {
        width:75%;
        display:flex;
        flex-wrap:wrap;
      }

      .check-box span {
        margin:0 6px 0 1px;
      }

      input[type="text"] {
        height:40px;
        padding:10px;
        border:1px solid #ccc;
      }

      .ask-box {
        display:flex;
        width:100%;
        padding:20px 0;
      }

      .ask-box p {
        width:80%;
        border-right:2px solid #5e5e5e;
        font-weight:bold;
        margin-right:10px;
      }

      .ask-box span {
        font-weight:normal;
        color:#5e5e5e;
      }

      .submit {
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:20px;
        gap:5px;
      }

      button {
        width:60%;
        font-size:1.2rem;
        font-weight:bold;
        height:50px;
      }

      .submit span {
        color:#a2a2a2;
        font-size:0.8rem;
      }

      .submit p {
        text-decoration:underline;
        cursor:pointer;
        font-size:1.1rem;
        margin-top:10px;

      }

      @media only screen and (max-width:768px) {
          .personal-wrap {
            flex-direction: column;
          }

          .personal-wrap>div {
            width:100%;
          }
        }

      




      `}
    </style>


    </>
  )

}

export async function checkBtn() {


  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/regist/chk`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  }).then(Response => Response.json())
  .then(data => console.log(data.data));
}