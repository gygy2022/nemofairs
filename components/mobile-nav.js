import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgClose } from "react-icons/cg";

export default function MobileNav({show, setShow}) {

  console.log(show)

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

  useEffect(() => {

    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return(
    <>
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

<style jsx>
  {`
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

          .logo {
            position: relative;
          }

  `}
</style>
    
    </>
  )
}