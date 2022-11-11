import Bullet from "./bullet";

export default function Check() {




  return (
    <>
    <div className="check-wrap">
    <div className="personal-input">
      <Bullet text="사전등록자 본인 확인"/>
      <hr />

      <div className="personal-input-box">
      
      <label>
        <span className="label-title">성명<span id="star">*</span></span>
        <input type="text"
        className="label-input"
        placeholder="이름을 입력해 주세요." />
      </label>

      <label>
        <span className="label-title">휴대폰 번호<span id="star">*</span></span>
        <input type="text"
        className="label-input"
        placeholder="-를 빼고 기재해 주세요." />
      </label>

      </div>
      <div className="ask-box">
        <p>관련 문의 <span>네모전람 deco@nemofairs.com</span></p> <span>02-786-9231</span>
      </div>
      <div className="submit">
      <button onClick={checkBtn}>사전 등록 조회</button>
      </div>

      </div>
    </div>

    <style jsx>
      {`
      .check-wrap {
        display:flex;
        flex-direction:column;
        align-items:center;
        width:80%;
      }

      hr {
        width:100%;
      }

      .personal-input {
        display:flex;
        flex-direction:column;
        width:60%;
        gap:20px;
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

      }




      `}
    </style>
    </>
  )
}

export async function checkBtn() {
  const params = {
    "name" : "aa",
    "phone" : "aa"
  };

  await fetch('http://ljh45689.cafe24.com/api/regist/chk', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  }).then(Response => Response.json())
  .then(data => console.log(data.data));
}