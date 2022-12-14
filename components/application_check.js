import { useRef, useState } from "react";
import Bullet from "./bullet";

export default function ApplicationCheck (){

  
  const compRef = useRef("");
  const emailRef = useRef("");

  const [confirm, setConfirm] = useState(null);

  const checkBtn = () => {
    const userInfo = {
      "compNameKr" : compRef.current.value,
      "repEmail" : emailRef.current.value,
    };

    if (userInfo.compNameKr && userInfo.repEmail !== "") {

      fetch(`https://jackadmin.co.kr/api/join/chk`, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      }).then(Response => Response.json())
      .then(data => {
  
        if (data.errorCode === "200") {

          const Data = data.data[0];
          const comp = Data.compNameKr;
          const rep = Data.repName;
          const repEmail = Data.repEmail;

          const list = [
            {comp:"회사명", rep:"대표자명", repEmail:"대표자 E-mail"},
            {comp:comp, rep:rep, repEmail:repEmail}
          ]

          setConfirm(list);
          
        } else {
          setConfirm(null);
          window.alert("신청 되지 않은 정보입니다.")
        }
      });


    } else {
      return alert("정보를 모두 채워 주세요.")
    }
  

  }

  return(
    <>
    <div className="app-check-wrap">
    <div className="app-check-input">
      <Bullet text="신청 내역 확인" border="none"/>
      <hr />

      <div className="app-check-input-box">
      
      <label>
        <span className="label-title">회사명&#40;국문&#41;<span id="star">*</span></span>
        <input type="text"
        className="label-input"
        ref={compRef}
        placeholder="이름을 입력해 주세요." />
      </label>

      <label>
        <span className="label-title">E-MAIL<span id="star">*</span></span>
        <input type="text"
        className="label-input"
        ref={emailRef}
        placeholder="-를 빼고 기재해 주세요." />
      </label>

      </div>

      {confirm ? 
      <div className="check-div">
        <table>
          <tbody>
            {confirm.map(check => (
              <tr key={check.comp}>
                <td>{check.comp}</td>
                <td>{check.rep}</td>
                <td>{check.repEmail}</td>
              </tr>

            ))}
          </tbody>
        </table>
      </div> 
      
      : 
      
      <></>}
      <div className="ask-box">
        <p><span>관련 문의</span>
        <span>
        <span>네모전람 deco@nemofairs.com</span> <span>02-786-9231</span>
        </span></p>
      </div>
      <div className="submit">
      <button onClick={checkBtn}>사전 등록 조회</button>
      </div>

      </div>
    </div>

    <style jsx>
      {`
      .app-check-wrap {
        display:flex;
        flex-direction:column;
        align-items:center;
        width:80%;
      }

      hr {
        width:100%;
      }

      .app-check-input {
        display:flex;
        flex-direction:column;
        width:60%;
        gap:20px;
      }

      .app-check-input-box {
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

      .check-div {
        width:100%;
      }

      .check-div table {
        width: 100%;
      }

      .check-div table td {
        width:40%;
      }

      .check-div table td:nth-child(2) {
        width:20%;
      }

      .check-div table tr:last-child td:first-child {
        background-color: #fff;
        border:none;
      }

      
      .ask-box {
        display:flex;
        width:100%;

      }

      .ask-box p {
        width:100%;
        padding:0 20px;
        display: flex;
        justify-content: space-between;
      }
      
      .ask-box p>span:first-child {
        width:20%;
        font-size:1.1rem;
        font-weight:bold;
        color:#000;
      }

      .ask-box p>span:last-child {
        width:75%;
        font-size:1.1rem;
        font-weight:bold;
        color:#000;
        display: flex;
        justify-content: space-between;
      }

      .ask-box p>span:last-child>span {
        font-size: 0.9rem;
        display: flex;
        align-items: center;
      }

      .ask-box p>span:last-child>span:first-child {
        width:70%;
        border-right:2px solid #5e5e5e;
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

      @media only screen and (max-width:768px) {
          .app-check-input {
            width:100%;
          }
        }

      `}
    </style>
    </>
  )
}