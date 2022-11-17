import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import Bullet from "./bullet";


export default function Application() {

  const compNameKr = useRef(null);
  const compNameEn = useRef(null);
  const address = useRef(null);
  const repName = useRef(null);
  const repEmail = useRef(null);
  const compRegNumber = useRef(null);
  const compHomepage = useRef(null);
  const exhManagerName = useRef(null);
  const exhManagerPosition = useRef(null);
  const exhManagerEmail = useRef(null);
  const exhManagerTel = useRef(null);
  const exhManagerFax = useRef(null);
  const exhManagerMob = useRef(null);
  const taxManagerName = useRef(null);
  const taxManagerTel = useRef(null);
  const taxManagerMob = useRef(null);
  const taxManagerEmail = useRef(null);
  const exhContents = useRef(null);


  

  const exhibitionInput = [
    {text:"성함", ref:exhManagerName},
    {text:"직위", ref:exhManagerPosition},
    {text:"E-mail", ref:exhManagerEmail},
    {text:"전화", ref:exhManagerTel},
    {text:"팩스", ref:exhManagerFax},
    {text:"휴대 전화", ref:exhManagerMob},
  ]

  const taxInput = [
    {text:"성함", ref:taxManagerName},
    {text:"전화", ref:taxManagerTel},
    {text:"휴대 전화", ref:taxManagerMob},
    {text:"E-mail", ref:taxManagerEmail},
  ]

  const homeFurnishing = [
    {text:"가구", num:"01"}, 
    {text:"조명", num:"02"},
    {text:"패브릭/침구", num:"03"},
    {text:"인테리어 소품", num:"04"},
    {text:"홈스타일", num:"05"},
    {text:"홈인테리어소재", num:"06"},
    {text:"갤러리", num:"07"},
    {text:"홈가드닝", num:"08"},
    {text:"키친", num:"09"},
    {text:"테이블웨어", num:"10"},
    {text:"테이블데코", num:"11"},
    {text:"바스(bath)", num:"12"},
    {text:"시공/컨설팅", num:"13"},
    {text:"디저트/음료", num:"14"},
    {text:"기타 관련제품", num:"15"},
  ]

  const homeAppliances = [
    {text:"생활가전", num:"01"}, 
    {text:"신혼가전", num:"02"}, 
    {text:"홈스튜디오", num:"03"}, 
    {text:"커피머신", num:"04"}, 
    {text:"소형가전", num:"05"}, 
    {text:"여행", num:"06"}, 
    {text:"홈디바이스", num:"07"}, 
    {text:"힐링", num:"08"}, 
    {text:"펫퍼니싱", num:"09"}, 
    {text:"공방아트", num:"10"}, 
    {text:"패션/의류", num:"11"}, 
    {text:"공기청정기", num:"12"}, 
    {text:"로봇청소기", num:"13"}, 
    {text:"환기시스템", num:"14"}, 
    {text:"방진망/창호", num:"15"}, 
  ]

  const homeCenter = [
    {text:"DIY", num:"01"}, 
    {text:"홈 임프루브먼트", num:"02"}, 
    {text:"전동공구", num:"03"}, 
    {text:"홈퍼니싱하드웨어",num:"04"},  
    {text:"파티웨어", num:"05"}, 
    {text:"플라워데코", num:"06"}, 
    {text:"파티용품", num:"07"}, 
    {text:"크리스마스장식", num:"08"}, 
    {text:"선물용품", num:"09"}, 
    {text:"여행상품", num:"10"}, 
    {text:"기타", num:"11"}, 
  ]

  const decoList = [];

  const decoChecked = (e) => {

    const num = e.target.value;

    if (decoList.indexOf(num) === -1) {
      decoList.push(num);
    } else {
      const idx = decoList.indexOf(num);
      decoList.splice(idx, 1);
    }
  }

  const partyList = [];

  const partyChecked = (e) => {

    const num = e.target.value;

    if (partyList.indexOf(num) === -1) {
      partyList.push(num);
    } else {
      const idx = partyList.indexOf(num);
      partyList.splice(idx, 1);
    }
  }

  const lifeList = [];

  const lifeChecked = (e) => {

    const num = e.target.value;

    if (lifeList.indexOf(num) === -1) {
      lifeList.push(num);
    } else {
      const idx = lifeList.indexOf(num);
      lifeList.splice(idx, 1);
    }
  }



  const Th = [
    "구분", "단가(1부스)", "신청량", "금액(단가x신청량)", "비고"
]

const [idpYn, setIdpYn] = useState(true);
const [nrmYn, setNrmYn] = useState(true);

const [idpApplyCnt, setIdpApplyCnt] =  useState(0);
const [nrmApplyCnt,setNrmApplyCnt] =  useState(0);

const [idpTotalAmount,setIdpTotalAmount] = useState(0);
const [nrmTotalAmount,setNrmTotalAmount] = useState(0);

const idp = (e) => {
  const idpCount = (e.target.value)*1500000;
  setIdpApplyCnt(e.target.value);
  setIdpTotalAmount(idpCount);
  console.log(idpTotalAmount);
}

const nrm = (e) => {
  const nrmCount = (e.target.value)*1000000;
  setNrmApplyCnt(e.target.value);
  setNrmTotalAmount(nrmCount);
}

// 단위 계산 정규식
const unit = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
useEffect(() => {
  if (idpTotalAmount === 0) {
    setIdpYn(false);
  } else if (Number.isNaN(idpTotalAmount)) {
    setIdpYn(false);
  } else {
    setIdpYn(true);
  }

  if (nrmTotalAmount === 0) {
    setNrmYn(false);
  } else if (Number.isNaN(nrmTotalAmount)) {
    setIdpYn(false);
  } else {
    setNrmYn(true);
  }

},[idpTotalAmount, nrmTotalAmount])

const submit = () => {



  const Data = {
"compNameKr" : compNameKr.current.value,
"compNameEn" : compNameEn.current.value,
"address" : address.current.value,
"repName" : repName.current.value,
"repEmail" : repEmail.current.value,
"compRegNumber" : compRegNumber.current.value,
"compHomepage" : compHomepage.current.value,
"exhManagerName" : exhManagerName.current.value,
"exhManagerPosition" : exhManagerPosition.current.value, 
"exhManagerEmail" : exhManagerEmail.current.value,
"exhManagerTel" : exhManagerTel.current.value,
"exhManagerFax" : exhManagerFax.current.value,
"exhManagerMob" : exhManagerMob.current.value,
"taxManagerName" : taxManagerName.current.value,
"taxManagerTel" : taxManagerTel.current.value,
"taxManagerMob" : taxManagerMob.current.value,
"taxManagerEmail" : taxManagerEmail.current.value,
"exhDecoChk" : decoList,
"exhLifeChk" : lifeList,
"exhPartyChk" : partyList,
"exhContents" : exhContents.current.value,
"idpYn" : idpYn,
"idpApplyCnt" : idpApplyCnt,
"idpTotalAmount" : idpTotalAmount,
"nrmYn" : nrmYn,
"nrmApplyCnt" : nrmApplyCnt,
"nrmTotalAmount" : nrmTotalAmount,
  }

  if(Data.compNameKr === "") {
    window.alert("회사명 국문을 입력하세요.");
    compNameKr.current.focus();
    return;
  }

  if(Data.compNameEn === "") {
    window.alert("회사명 영문을 입력하세요.");
    compNameEn.current.focus();
    return;
  }

  if(Data.address === "") {
    window.alert("주소를 입력하세요.");
    address.current.focus();
    return;
  }

  if(Data.repName === "") {
    window.alert("대표자를 입력하세요.");
    repName.current.focus();
    return;
  }

  if(Data.repEmail === "") {
    window.alert("대표자 이메일을 입력하세요.");
    repEmail.current.focus();
    return;
  }

  if(Data.compRegNumber === "") {
    window.alert("사업자등록번호를 입력하세요.");
    compRegNumber.current.focus();
    return;
  }

  if(Data.exhManagerName === "") {
    window.alert("전시회 담당자 이름을 입력하세요.");
    exhManagerName.current.focus();
    return;
  }

  if(Data.exhManagerPosition === "") {
    window.alert("전시회 담당자 직위를 입력하세요.");
    exhManagerPosition.current.focus();
    return;
  }

  if(Data.exhManagerEmail === "") {
    window.alert("전시회 담당자 이메일을 입력하세요.");
    exhManagerEmail.current.focus();
    return;
  }

  if(Data.exhManagerTel === "") {
    window.alert("전시회 담당자 전화를 입력하세요.");
    exhManagerTel.current.focus();
    return;
  }

  if(Data.exhManagerFax === "") {
    window.alert("전시회 담당자 팩스를 입력하세요.");
    exhManagerFax.current.focus();
    return;
  }

  if(Data.exhManagerMob === "") {
    window.alert("전시회 담당자 휴대 전화를 입력하세요.");
    exhManagerMob.current.focus();
    return;
  }

  if(Data.taxManagerName === "") {
    window.alert("세금계산서 담당자 이름을 입력하세요.");
    taxManagerName.current.focus();
    return;
  }

  if(Data.taxManagerTel === "") {
    window.alert("세금계산서 담당자 전화를 입력하세요.");
    taxManagerTel.current.focus();
    return;
  }

  if(Data.taxManagerMob === "") {
    window.alert("세금계산서 담당자 휴대 전화를 입력하세요.");
    taxManagerMob.current.focus();
    return;
  }

  if(Data.taxManagerEmail === "") {
    window.alert("세금계산서 담당자 이메일을 입력하세요.");
    taxManagerEmail.current.focus();
    return;
  }

  console.log(Data);

  fetch(`https://jackadmin.co.kr/api/join/create`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Data),
  }).then(Response => Response.json())
  .then(data => {

    console.log(data.data);
  });

  console.log("데이타 나아ㅗ랏", Data);
  
}


  return(
    <>
    <div className="apply-wrap">
      <Bullet text="신청서 작성" />
      <div className="apply-input">

        {/* 회사명 */}
        <label>
          <p>회사명<span id="star">*</span></p>
          <div className="input-box corporate-name">
          <input type="text" placeholder="국문" ref={compNameKr}/>
          <input type="text" placeholder="영문" ref={compNameEn} />
          </div>
        </label>

        {/* 주소 */}
        <label>
          <p>주소<span id="star">*</span></p>
          <div className="input-box" >
          <input type="text" ref={address} />
          </div>
        </label>

        <div className="apply-box">

         {/* 대표자 */}
        <label>
          <p>대표자<span id="star">*</span></p>
          <input type="text" ref={repName}/>
        </label>

         {/* 대표자E-mail */}
        <label>
          <p>대표자E-mail<span id="star">*</span></p>
          <input type="text" ref={repEmail}/>
        </label>

        </div>

        <div className="apply-box">

        {/* 사업자등록번호 */}
        <label>
          <p>사업자등록번호<span id="star">*</span></p>
          <input type="text" ref={compRegNumber}/>
        </label>

         {/* 회사 홈페이지 */}
        <label>
          <p>회사 홈페이지</p>
          <input type="text" ref={compHomepage}/>
        </label>
        </div>


        {/* 전시회 담당자 */}
        <label>
          <p>전시회 담당자<span id="star">*</span></p>
          <div className="input-box inputs">
            {exhibitionInput.map(text => (
              <>
              <input type="text"
              placeholder={text.text}
              ref={text.ref}/>
              </>
            ))}
          </div>
        </label>

        {/* 세금계산서 담당자 */}
        <label>
          <p>세금계산서 담당자</p>
          <div className="input-box inputs">
            {taxInput.map(text => (
              <>
              <input type="text"
              placeholder={text.text}
              ref={text.ref}/>
              </>
            ))}
          </div>
        </label>

        {/* 홈퍼니싱, 홈데코, 키친&바스 */}
        <label>
          <p>홈퍼니싱, 홈데코, 키친&바스<span id="star">*</span></p>
          <div className="check-box">
              {homeFurnishing.map(text => (
                <div key={text.text} className="check-div">
                <input type="checkbox" name="deco" value={text.num}
                onChange={decoChecked}/>
                <span>{text.text}</span>
                </div>
              ))}
          </div>
        </label>

        {/* 홈가전, 홈클리닝, 라이프 스타일 */}
        <label>
          <p>홈가전, 홈클리닝, 라이프 스타일<span id="star">*</span></p>
          <div className="check-box">
              {homeAppliances.map(text => (
                <div key={text.text} className="check-div">
                <input type="checkbox" name="life" value={text.num}
                onChange={lifeChecked}/>
                <span>{text.text}</span>
                </div>
              ))}
          </div>
        </label>

        {/* 홈센터, 파티/연회, 크리스마스 */}
        <label>
          <p>홈센터, 파티/연회, 크리스마스<span id="star">*</span></p>
          <div className="check-box">
              {homeCenter.map(text => (
                <div key={text.text} className="check-div">
                <input type="checkbox" name="party" value={text.num}
                onChange={partyChecked}/>
                <span>{text.text}</span>
                </div>
              ))}
          </div>
        </label>

        <label>
          <p>전시품 상세내역</p>
          <input type="text" ref={exhContents}></input>
          </label>        
      </div>

      <div className="table-box">

      <table>
        <tbody>
        
        {Th.map(th => (
          <th key={th}>{th}</th>
        ))}
        <tr>
          <td>독립부스</td>
          <td>1,500,000</td>
          <td><input type="text" onChange={idp}/> <span>부스</span></td>
          <td><input type="text" value={unit(idpTotalAmount)} readOnly/> <span>원</span></td>
          <td>부가가치세 별도</td>
        </tr>
        <tr>
          <td>기본부스</td>
          <td>1,000,000</td>
          <td><input type="text" onChange={nrm}/> <span>부스</span></td>
          <td><input type="text" value={unit(nrmTotalAmount)} readOnly/> <span>원</span></td>
          <td>부가가치세 별도</td>
        </tr>
        </tbody>
      </table>
      <div className="table-div">
        <p> - 1부스 크기는 3m X 3m = 9m² (약2.7평), 최소 신청규모 : 프리미엄부스는 1부스(9m²), <span className="primary-span">기본부스(옥타늄) 1부스(9m²)이상</span></p>
        <p>- 기본부스(옥타늄) 포함사항 : 벽면, 상호 간판, 카펫, 안내데스크 및 의자 1조, 스포트라이트 2개</p>
        <p>- 계약금(참가비 총액의 50%)은 신청서 제출시 같이 입금, 잔금은 2022년 11월 14일(월)까지 납부</p>
        <p>- <span className="primary-span">참가비 납입계좌 : 신한은행 140-011-316534 예금주 네모전람㈜</span></p>
      </div>
      </div>


      <p className="regulation">당 사는 2022 수원가구박람회에 참가규정(이면수록)에 동의하여 서약하며 <br/>상기의 내용과 같이 참가신청서를 제출합니다.</p>
    <p>2022 수원가구박람회 사무국 귀중</p>
    <p className="p-nemo">네모전람㈜ 서울시 강서구 공항대로 209(GMG엘스타), 816호 TEL (02)786-9231 FAX(02)786-9233 EMAIL deco@nemofairs.com
</p>
<div className="button-div">
<button>참가규정 펼쳐 보기</button>
<button onClick={submit}>참가신청서 제출하기</button>
</div>
    </div>


    <style jsx>
      {`
      .apply-wrap {
        width:80%;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:30px;
      }

      .apply-input {
        width:100%;
        display:flex;
        flex-direction:column;
        gap:20px;
      }

      label {
        width: 100%;
        display:flex;
      }

      label p{
        width: 10%;
        font-weight:bold;
        margin-right:20px;
      }

      label input {
        width:87%;
      }

      .input-box {
        width:88%;
      }

      .input-box input {
        width:100%;
      }

      .corporate-name {
        display:flex;
        justify-content:space-between;
      }

      .corporate-name input {
        width:49%;
      }

      .apply-box {
        display:flex;
        flex-wrap:wrap;
        gap:20px 0;
        justify-content:space-between;
      }

      .apply-box label {
        width:49%;
      }

      .apply-box label p{
        width: 20%;
        font-weight:bold;

      }

      .apply-box input {
        width:76%;
      }

      .inputs {
        display:flex;
        flex-wrap:wrap;
        gap:5px 1%;
        justify-content:space-between;
      }

      .inputs input {
        width:32%;
      }

      .check-box {
        width:88%;
        display:flex;
        gap:0.5%;
        flex-wrap:wrap;
      }

      .check-div {
        width:33%;
        display:flex;
        align-items:center;
      }

      .check-div input {
        width:20px;
        height:20px;
      }

      table {
        border:1px solid #ccc;
        border-collapse: collapse;
        width:100%;
        text-align:center;
        margin-bottom:10px;
      }

      th, tr, td {
        border:1px solid #ccc;
      }

      .table-div {
        width:100%;
      }

      .primary-span {
        color:var(--primary-color);
      }

      .regulation {
        font-size:2rem;
        text-align:center;
      }

      .p-nemo {
        font-size:0.8rem;
      }

      .button-div {
        display:flex;
        gap:20px;
        align-items:center;
      }

      button {
        width:200px;
        height:30px;
      }

      @media only screen and (max-width:768px) {
        label {
          flex-direction: column;
        } 

        label p {
          width:100%;
          margin-bottom:10px;
          margin-right:0;
        }

        label input {
          width:100%;
        }

        .input-box {
          width:100%;
        }

        .corporate-name {
        display:flex;
        flex-direction: column;
        gap:10px;
        justify-content:space-between;
      }

      .corporate-name input {
        width:100%;
      }

      .apply-box {
        display:flex;
        flex-wrap:wrap;
        gap:20px 0;
        justify-content:space-between;
      }

      .apply-box label {
        width:100%;
      }

      .apply-box label p{
        width: 100%;
        font-weight:bold;

      }

      .apply-box input {
        width:100%;
      }

      .inputs {
        display:flex;
        flex-wrap:wrap;
        gap:5px 1%;
        justify-content:space-between;
      }

      .inputs input {
        width:100%;
      }

      .check-box {
        width:100%;
      }

      .check-div {
        width:100%;
      }

      .table-box {
        width:100%;
        overflow-x: scroll;
      }

      .table-div {
        width:100%;
        font-size:0.8rem;
      }

      .regulation {
        font-size:1.5rem;
      }

      .p-nemo {
        font-size:0.8rem;
      }

      .button-div {
        width:100%;
        flex-direction: column;
        gap:20px;
      }

      button {
        width:80%;
        height:30px;
      }


        }


      `}
    </style>
    
    </>
  )
}