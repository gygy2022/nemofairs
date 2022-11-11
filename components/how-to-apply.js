import Bullet from "./bullet";

import { ImArrowDown } from 'react-icons/im';
import { BsPencilSquare, BsCheckSquare } from 'react-icons/bs';
import Link from "next/link";

export default function HowApply() {

  const buttons = [
    {title:"전시회 참가 신청", href:"/", icons:<BsPencilSquare />},
    {title:"신청 내역 확인", href:"/", icons:<BsCheckSquare />},
    {title:"신청서 업로드", href:"/", icons:<BsPencilSquare />}
  ]


  return (

    <>
      <div className="apply-wrap">
        <Bullet text="참가 신청 방법" padding="5%" />
        <div className="apply-box">
          <div className="apply-div">
            <dlv className="apply-text">
              <div id="apply-title">온라인</div>
              <div id="icon-div">
              <ImArrowDown />
              </div>
              <div>
                <p className="apply-p">01. 참가 신청서 작성</p>
                <p className="apply-sub">
                  *전시회 참가신청서 작성 완료 후 프린트
                  <br />
                  (프린트 불가한 경우, 신청 내역 확인란에서
                  <br />
                  기업명과 E-mail로 작성된 신청서 확인 가능)</p>
              </div>
              <div id="icon-div">
              <ImArrowDown />
              </div>
              <div>
                <p className="apply-p">02. 신청서 업로드</p>
                <p className="apply-sub">
                신청서 1부와 사업자등록증 1부 업로드
                <br />
                *신청서 내 직인 날인 필수</p>
              </div>
              <div id="icon-div">
              <ImArrowDown />
              </div>
            </dlv>

            <dlv className="apply-text">
              <div id="apply-title">오프라인</div>
              <div id="icon-div">
              <ImArrowDown />
              </div>
              <div>
                <p className="apply-p">01. 참가 신청서 작성</p>
                <p className="apply-sub">
                *실물 참가 신청서를 교부 받아 작성</p>
              </div>
              <div id="icon-div">
              <ImArrowDown />
              </div>

              <div>
                <p className="apply-p">02. 팩스 or E-MAIL</p>
                <p className="apply-sub">
                1) 팩스 (02-786-9233)
                <br />
                2) deco@nemofairs.components
                <br />
                <span className="red">*발송 시 사업자등록증 사본 첨부 필수</span></p>
              </div>
              <div id="icon-div">
              <ImArrowDown />
              </div>
            </dlv>
          </div>

          <div className="div-bottom">
          <div>
                <p className="apply-p">03. 계약금 납부(계약 체결)</p>
                <p className="apply-sub">
                계약금 : 총 참가비의 50%
                <br />
                <span className="red">*신청서 접수와 동시에 납부 필수</span></p>
              </div>

              <div id="icon-div">
              <ImArrowDown />
              </div>

              <div>
                <p className="apply-p">04. 잔금 납부</p>
                <p className="apply-sub">
                <span className="red">*2022. 11. 14 (월) 이전까지 잔금 납부 필수</span>
                </p>
              </div>
          </div>
        </div>
        <div className="button-div">
          {buttons.map(btn => (
            <>
            
              <button>
              <Link href={btn.href}>
                <div className="btn">
                {btn.icons}
                <p>{btn.title}</p>
                </div>
                </Link>
              </button>

            </>
          ))}
          
        </div>
      </div>

      <style jsx>
        {`

        .apply-wrap { 
          width:80%;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:20px;
        }

        .apply-box {
          width:90%;
          display:flex;
          flex-direction:column;
          gap:10px;
        }
        .apply-div {
          width:100%;
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          }
        
        .apply-text {
          width:45%;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:10px;
        }

        .apply-text div:not(#icon-div,#apply-title) {
          height:150px;
          width:100%;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          background-color:#ccc;
        }

        #apply-title {
          width:100%;
          background-color:#fcb58c;
          font-weight:bold;
          font-size:2.5rem;
          text-align:center;
          padding:10px 0;
        }

        .apply-p {
          font-size:2rem;
          font-weight:bold;
          margin-bottom:5px;
        }

        .apply-sub {
          font-size:1.1rem;
          text-align:center;
        }

        #icon-div {
          font-size:3rem;
          margin-bottom:-10px;
        }

        .div-bottom {
          width:100%;
          display:flex;
          flex-direction:column;
          gap:10px;
          align-items:center;
        }

        .div-bottom div:not(#icon-div){
          width:100%;
          height:120px;
          background-color:#ccc;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
        }

        .red {
          color:red;
        }

        .button-div {
          display:flex;
          flex-direction:row;
          gap:20px;
          width:50%;
          justify-content:space-between;
        }

        .button-div button {
          height:40px;
          width:30%;
        }

        .btn {
          display:flex;
          gap:10px;
          align-items:center;
          font-size:0.9rem;
        }

      `}
      </style>
    </>
  )
}