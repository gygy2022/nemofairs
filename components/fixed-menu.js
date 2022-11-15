import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCheckCircle, BsPencilSquare, BsQuestionCircle } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

export default function FixedMenu() {

  const sideMenu = [
    {title:"사전등록", icon:<BsCheckCircle />, href:"/suwon/visitors/registration"},
    {title:"참가신청", icon:<BsPencilSquare />, href:"/suwon/exhibitors/participation_form"},
    {title:"오시는길", icon:<FiMapPin />, href:"/suwon/exhibition_info/directions"},
    {title:"상담문의", icon:<BsQuestionCircle />, href:"/suwon/media_center/contact"},
  ]

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

const handleScroll = () => {
	// 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if(window.scrollY >= 600){
      setScroll(true);
    }else{
    // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }

  };
  
  return (
    <>
    <div className="fixed-wrap">
      <ul>
      {sideMenu.map(side => (
        <>
        <li>
          <Link href={side.href}>
          {side.icon}
          <p>{side.title}</p>
          </Link>

        </li>
        
        </>
      ))}
      </ul>
    </div>

    <style jsx>
      {`
      .fixed-wrap {
        position:fixed;
        z-index:44;
        width:100px;
        height:500px;
        background-color:#fc6d19;
        right:2%;
        top:50%;
        transform: translateY(-50%);
        border-radius:10px;
        display:flex;
        align-items:center;
        justify-content:center;
      }

      li {
        font-size:4.5rem;
        text-align:center;
        margin:5px 0;
        color:#fff;
        padding-bottom:10px;
        border-bottom:1px solid rgba(255,255,255,0.5);
        transition:0.4s;
      }

      li:hover{
        color:#fff;
        font-weight:bold;
      }

      li:last-child {
        border:none;
      }

      p {
        font-size:1rem;
        margin-top:-15px;
        color:#fff;
      }

      @media only screen and (max-width:768px) {
        .fixed-wrap {
          display: none;
        }
      }
      `}
    </style>
    </>
  )
}