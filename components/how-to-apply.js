import Bullet from "./bullet";

import { ImArrowDown } from 'react-icons/im';
import { BsPencilSquare, BsCheckSquare } from 'react-icons/bs';
import Link from "next/link";
import Image from "next/image";

export default function HowApply() {

  const buttons = [
    {title:"전시회 참가 신청", href:"/", icons:<BsPencilSquare />},
    {title:"신청 내역 확인", href:"/", icons:<BsCheckSquare />},
    {title:"신청서 업로드", href:"/", icons:<BsPencilSquare />}
  ]


  return (

    <>
      <div className="apply-wrap">
        <Bullet text="참가 신청 방법" />
        <div className="apply-box">
          <div className="img-div">
        <Image src="/visit-info.jpg"
              layout="fill" 
              objectFit="cover"
              alt="입장 절차 이미지">
              </Image>
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
          font-size:2rem;
          text-align:center;
          padding:10px 0;
        }

        .apply-p {
          font-size:1.5rem;
          font-weight:bold;
          margin-bottom:5px;
        }

        .apply-sub {
          font-size:1rem;
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

        .img-div {
          position:relative;
          width:100%;
          aspect-ratio: 9 / 7;
        }

        @media only screen and (max-width:768px) {
          .apply-box {
            width:100%;
          }

          .apply-text div:not(#icon-div,#apply-title) {
          height:250px;
          width:100%;
        }

        #apply-title {
          width:100%;
          font-size:2rem;
          text-align:center;
          padding:10px 0;
        }

        .apply-p {
          font-size:1.5rem;
          font-weight:bold;
          margin-bottom:5px;
        }

        .apply-sub {
          font-size:0.9rem;
          text-align:center;
        }

        .button-div {
          width:100%;
        }



        }

        

      `}
      </style>
    </>
  )
}