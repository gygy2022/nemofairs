import { useEffect, useState } from "react";
import Application from "./application-form";
import Bullet from "./bullet";
import { PrivacyRules, Regulation } from "./rule";

export default function ApplicationAgree() {

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [next, setNext] = useState(true);

  const agreeList = [
    {title:"전시회 참가 규정", text:<Regulation/>, key:"agree1", check:check1},
    {title:"개인정보취급방침", text:<PrivacyRules/>, key:"agree2", check:check2},
  ]

  useEffect(() => {
    if(check1 && check2 === true) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  },[check1, check2])


  const ChangeInput = (e) => {
    if (e.target.name === "agree1") {
      setCheck1(!check1);
    } else if (e.target.name === "agree2") {
      setCheck2(!check2);
    } else if (e.target.name === "all-agree") {
      setCheckAll(!checkAll);
      if (checkAll === true) {
        setCheck1(false);
        setCheck2(false);
      } else {
        setCheck1(true);
        setCheck2(true);
      }
    } 
  }

  const NextBtn = () => {
    if (checkAll === true) {
      setNext(false);
    } else {
      alert("약관에 모두 동의하셔야 신청서를 작성할 수 있습니다.")
    }
  }



  return(
    <>

    {next ?
    
    <div className="app-agree-wrap">
      {agreeList.map(list => (
        <>
        <Bullet text={list.title} />
      <div className="app-agree-box">
        <div className="app-agree-div">
          {list.text}
        </div>
        <div className="app-agree-input">
          <span>{list.title}</span>
          <input type="checkbox" 
          onChange={ChangeInput} 
          name={list.key}
          checked={list.check}/>
          <span>동의</span>
        </div>
      </div>
        </>
      ))}

      <div className="all-agree">
        <input type="checkbox" 
        className="all-input" 
        name="all-agree" 
        onChange={ChangeInput}
        checked={checkAll}/> 
        <p>모두 동의하기</p>
      </div>
      <button onClick={NextBtn}>신청서 작성하기</button>
    </div>
  :

  <Application/>
  }


    <style jsx>

      {`
      
      .app-agree-wrap {
        width:80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:20px;
        padding:20px 0;
      }

      .app-agree-box {
        width:95%;
        display: flex;
        flex-direction: column;
        gap:10px;
      }

      .app-agree-div {
        width:100%;
        height:20vh;
        overflow-y: scroll;
      }

      .app-agree-input {
        width:100%;
        display: flex;
        justify-content: flex-end;
        gap:5px;
      }

      .all-agree {
        width:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ccc;
        padding: 10px 0;
        font-size: 1.5rem;
        margin: 20px 0;
      }

      .all-input {
        width:20px;
        height:20px;
        margin-right: 5px;
      }

      button {
        width:200px;
        height:40px;
      }


      `}
    </style>
    </>
  )
}