import Link from "next/link"
import Image from "next/image"
import { Router, useRouter } from "next/router"
import { useState } from "react";

import useIsMobile from "./useIsMobile";

import { GiHamburgerMenu } from "react-icons/gi"; 
import { CgClose } from "react-icons/cg";

export default function Navbar() {

  const route = useRouter();
  // console.log(route.pathname);
  // const url = route.pathname.split("/");
  // url.shift();
  // console.log("콘솔 url", url)


  const naviList = [
    [{ nav: "전시회 소개", href: "/suwon/fair_info/intro", key: "nav1-1" }, { nav: "전시회 개요", href: "/suwon/fair_info/intro", key: "nav1-2" }, { nav: "지난 전시회", href: "/suwon/fair_info/gallery", key: "nav1-3" }],

    [{ nav: "관람 안내", href: "/suwon/visitors/visit_info", key: "nav2-1" },
    { nav: "관람 안내", href: "/suwon/visitors/visit_info", key: "nav2-2" },
    { nav: "무료 사전 등록", href: "/suwon/visitors/registration", key: "nav2-3" },
    { nav: "부스 배치도", href: "/suwon/visitors/booth_guide", key: "nav2-4" },
    { nav: "참가 업체 리스트", href: "/suwon/visitors/exhibitors_list", key: "nav2-5" }],

    [{ nav: "참가 안내", href: "", key: "nav3-1" },
    { nav: "참가 안내", href: "/suwon/exhibitors/participation_info", key: "nav3-2" },
    { nav: "참가 신청", href: "/suwon/exhibitors/participation_form", key: "nav3-3" }],

    [{ nav: "전시장 안내", href: "", key: "nav4-1" },
    { nav: "오시는 길", href: "/suwon/exhibition_info/directions", key: "nav4-2" },
    { nav: "주차 안내", href: "/suwon/exhibition_info/parking", key: "nav4-3" }],

    [{ nav: "미디어 센터", href: "", key: "nav5-1" },
    { nav: "공지 사항", href: "/suwon/media_center/notice_info", key: "nav5-2" },
    { nav: "이벤트", href: "/suwon/media_center/event", key: "nav5-3" },
    { nav: "상담 문의", href: "/suwon/media_center/contact", key: "nav5-4" }]
  ]

  const [nav0, setNav0] = useState(false);
  const [nav1, setNav1] = useState(false);
  const [nav2, setNav2] = useState(false);
  const [nav3, setNav3] = useState(false);
  const [nav4, setNav4] = useState(false);

  const [show, setShow] = useState(false);

  if (typeof window === "object") {

    if (show === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  

  }


  const openNav = (e) => {
    if (e === "nav1-1") {
      setNav0(!nav0);
    } else if (e === "nav2-1") {
      setNav1(!nav1);
    } else if (e === "nav3-1") {
      setNav2(!nav2);
    } else if (e === "nav4-1") {
      setNav3(!nav3);
    } else if (e === "nav5-1") {
      setNav4(!nav4);
    } else {
      setShow(false);
      setNav0(false);
      setNav1(false);
      setNav2(false);
      setNav3(false);
      setNav4(false);
    }

  }

  const isMobile = useIsMobile();

  return (
    <>

    {isMobile ?
    
    <>
        <div className="mobile-nav-top">
    <div className="logo">
      <Link href="/">
            <Image src={`/suwon_logo.png`}
              layout="fill" 
              objectFit="cover"
              alt="로고 이미지"></Image>
              </Link>
          </div>
          <div className="menu-icon" onClick={()=>setShow(!show)}>
          <GiHamburgerMenu />
          </div>
    </div>

      <div className="mobile-nav">

      <div className="logo" onClick={()=>setShow(!show)}>
      <Link href="/">
            <Image src={`/suwon_logo.png`}
              layout="fill" 
              objectFit="cover"
              alt="로고 이미지"></Image>
              </Link>
          </div>

          <div className="close-icon" onClick={()=>setShow(false)}>
            <CgClose />
          </div>

        {naviList.map((main, index) => (
          <>
            <ul className={`mobile-navi nav` + index}>
              {main.map(text => (
                <li key={text.key} onClick={() => openNav(text.key)}>
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
    </>
    
    :
    
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
            <li key={text.key}>
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
    </>}


    
      <style jsx>
        {`

        @media only screen and (max-width:768px) {

          .mobile-nav-top {
            width:100%;
            height:70px;
            background-color:var(--primary-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .mobile-nav-top>.logo {
            height:70px;
            
          }

          .menu-icon {
            font-size: 3rem;
            margin-top:5px;
            margin-right: 10px;
            cursor: pointer;
            color:#fff;
          }

          .mobile-nav {
            width:100%;
            background-color:#000;
            height:100vh;
            display: ${show ? "flex" : "none"};
            flex-direction: column;
            gap: 10px;
            z-index: 33;
            position: absolute;
            top:0;
            left:0;
            align-items: center;
          }

          .mobile-nav .logo {
            width:140px;
            height: 90px;
            background-color: #000;
          }

          .close-icon {
            position: absolute;
            right:10px;
            top:10px; 
            z-index: 44;
            font-size: 2rem;
            cursor: pointer;
            color:#fff;
          }

          .mobile-navi {
            width:100%;
            height:40px;
            overflow: hidden;
            transition: 1s;
            border-top:1px solid #fdc5a2;
            border-bottom:1px solid #fdc5a2;
          }

          .nav0 {
            height:${nav0 ? "120px" : "40px"};
          }

          .nav1 {
            height:${nav1 ? "200px" : "40px"};
          }

          .nav2 {
            height:${nav2 ? "120px" : "40px"};
          }

          .nav3 {
            height:${nav3 ? "120px" : "40px"};
          }

          .nav4 {
            height:${nav4 ? "160px" : "40px"};
          }

          .mobile-navi li {
            height:40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color:#fff;
          }

          .mobile-navi li:not(li:first-child) {
            background-color:var(--primary-color);
          }



        }
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
        cursor: default;
      }

      .local>li:not(li:first-child) {
        background-color: var(--primary-color);
        color:#fff;
      }

      .navi-bar {
        width:80%;
        display:flex;
        background-color:#fff;
        overflow:none;
        gap:2%;
        border-bottom:2px solid #ccc;
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