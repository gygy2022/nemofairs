import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FixedMenu from "./fixed-menu";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  
  const router = useRouter();
  const path =`${router.pathname}`

  const [home, setHome] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {

    if (path === "/") {
      setHome(true);


      window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };


    } else {
      setHome(false);
    }

  },[router])


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
    <div className="layout">
      <div className="fix">
      <FixedMenu />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="child">{children}</div>
      <Footer />

      <style jsx>
        {`
          .layout {
            display:flex;
            flex-direction:column;
            align-items:center;
          }

          .fix{
            display: flex;
            opacity: ${!home ? "1" : scroll ? "1" : "0"};
            -webkit-transition: opacity 0.5s linear 0.5s;
          }
          .navbar {
            width:100%;
            height:140px;
            z-index:99;
          }
          .child {
            position:relative;
            width:${home ? "100%" : "80%"};
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:${home ? "0" : "20px"};
            padding:${home ? "0" : "50px 0"};
          }

          .navi-bar {
            border:${home ? "none" : "border-bottom:2px solid #ccc"};
          }

          @media only screen and (max-width:768px) {

          .navbar {
            height:70px; 

          }
          .child {
            width:100%;
            padding:0 0 20px 0;
          }
          }
        }
        `}
      </style>
    </div>

  )
}