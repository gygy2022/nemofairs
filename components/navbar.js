import Link from "next/link"
import Image from "next/image"

export default function Navbar() {

  const naviList = [
    ["전시회 소개", "전시회 개요", "지난 전시회"],
    ["관람 안내", "관람 안내", "무료 사전 등록", "부스 배치도", "참가 업체 리스트"],
    ["참가 안내", "참가 안내", "참가 신청"],
    ["전시장 안내", "오시는 길", "주차 안내"],
    ["미디어 센터", "공지 사항", "이벤트", "상담 문의"]
  ]

  return (
    <>
      <nav>

        <ul className="local">
          <li>수원</li>
          <li>평창</li>
          <li>부산</li>
        </ul>
        <div className="navi-bar">
          <div className="logo">
            <Image src={`/suwon_logo.png`}
              layout="fill" 
              objectFit="cover"
              alt="로고 이미지"></Image>
          </div>
          <div className="navi-box">
            {naviList.map(main => (
              <>
                <ul className="navi">
                  {main.map(text => (
                    <li key={text}>
                      {text}
                    </li>
                  ))}
                </ul>
              </>
            )
            )}
          </div>
        </div>
      </nav>
      <style jsx>
        {`
      nav {
        width:100%;
        display:flex;
        align-items:center;
        flex-direction:column;
      }

    

      .local {
        width:100%;
        padding-top:10px;
        background-color:var(--primary-color);
        display:flex;
        gap:20px;
      }

      .local>li {
        width: 100px;
        height: 50px;
        background-color:#fff;
        color:var(--primary-color);
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:10px 10px 0 0;
        font-weight:bold;
      }

      .navi-bar {
        width:100%;
        display:flex;
        background-color:#fff;
        overflow:none;
        gap:2%;
        border-bottom:2px solid var(--primary-color);
      }

      .logo {
        background-color:var(--primary-color);
        color:#fff;
        position:relative;
        aspect-ratio: 9 / 5;
        height:90px;
      }

      .navi-box {
        background-color:bold;
        display:flex;
        width:80%;
        height:90px;
        overflow:hidden;
        gap:2%;
      }

      .navi-box:hover {
        height:300px;
      }

      .navi-box ul{
        display:flex;
        flex-direction:column;
        width:20%;
        height:290px;
        height:content;
        
        
      }

      .navi-box li{
        display:flex;
        width:100%;
        height:50px;
        align-items:center;
        justify-content:center;
        cursor:default;
        
      }

      .navi-box li:first-child {
        height:90px;
        font-weight:bold;
      }

      .navi-box li:hover:not(:first-child) {
        background-color:var(--primary-color);
        color:#fff;
      }

      `}
      </style>
    </>
  )
}