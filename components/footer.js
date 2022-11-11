import Image from "next/image";

export default function Footer() {

  const FooterInfo = [
"상호: 네모전람㈜", "대표: 박준범", "사업자번호: 828-86-00509", "주소: 서울 영등포구 여의대방로67길 8 (여의도동) 510호", "이메일: deco@nemofairs.com", "전화번호: 02-786-9231", "FAX: 02-786-9233"
  ]
  
  return(
    <>
    <div className="footer-wrap">
      <div className="footer-box">
        <div className="logo-img">
        <Image src={`/suwon_logo.png`}
              layout="fill" 
              objectFit="cover"
              alt="로고 이미지"></Image>
        </div>
        <ul className="footer-text">
          {FooterInfo.map(foot => (
            <li key={foot}>
              {foot}
            </li>
          ))}
        </ul>
        </div>


      </div>
    <style jsx>
      {`
      .footer-wrap {
        width:100%;
        height:160px;
        background:#000;
        display:flex;
        flex-direction:column;
        align-items:center;
        overflow:hidden;
      }

      .footer-box {
        width:80%;
        display:flex;
        align-items:center;
      }

      .logo-img {
        width:30%;
        height:160px;
        position:relative;
        aspect-ratio: 9 / 5;
      }

      .footer-text {
        color:#fff;
        display:flex;
        flex-wrap:wrap;
        gap:10px;
        padding-right:20%;
      }
      `}
    </style>
    </>
  )
}