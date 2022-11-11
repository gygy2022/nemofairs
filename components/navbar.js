import Link from "next/link"
import Image from "next/image"
import { Router, useRouter } from "next/router"

export default function Navbar() {

  const route = useRouter();
  console.log(route.pathname);
  const url = route.pathname.split("/");
  url.shift();
  console.log("콘솔 url", url)


  const naviList = [
    [{nav:"전시회 소개", href:"/suwon/fair_info/intro"}, {nav:"전시회 개요", href:"/suwon/fair_info/intro"}, {nav:"지난 전시회", href:"/suwon/fair_info/gallery"}],

    [{nav:"관람 안내",href:"/suwon/visitors/visit_info"}, 
    {nav:"관람 안내", href:"/suwon/visitors/visit_info"}, 
    {nav:"무료 사전 등록", href:"/suwon/visitors/registration"}, 
    {nav:"부스 배치도", href:"/suwon/visitors/booth_guide"}, 
    {nav:"참가 업체 리스트", href:"/suwon/visitors/exhibitors_list"}],

    [{nav:"참가 안내", href:""},
    {nav:"참가 안내", href:"/suwon/exhibitors/participation_info"}, 
    {nav:"참가 신청", href:"/suwon/exhibitors/participation_form"}],

    [{nav:"전시장 안내", href:""}, 
    {nav:"오시는 길", href:"/suwon/exhibition_info/directions"}, 
    {nav:"주차 안내", href:"/suwon/exhibition_info/parking"}],

    [{nav:"미디어 센터", href:""}, 
    {nav:"공지 사항", href:"/suwon/media_center/notice_info"}, 
    {nav:"이벤트", href:"/suwon/media_center/event"}, 
    {nav:"상담 문의", href:"/suwon/media_center/contact"}]
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
          <Link href="/">
          <div className="logo">
            <Image src={`/suwon_logo.png`}
              layout="fill" 
              objectFit="cover"
              alt="로고 이미지"></Image>
          </div>
          </Link>
          <div className="navi-box">
            {naviList.map(main => (
              <>
                <ul className="navi">
                  {main.map(text => (
                    <li key={text.nav}>
                      <Link href={text.href}>
                      {text.nav}
                      </Link>
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
        padding:0 10%;
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
        width:80%;
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
        pointer-events:none;
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