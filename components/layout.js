import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FixedMenu from "./fixed-menu";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  
  const router = useRouter();
  const path =`${router.pathname}`

  const [home, setHome] = useState(true);

  useEffect(() => {

    if (path === "/") {
      setHome(true);
    } else {
      setHome(false);
      console.log(path, "홈 아닌 곳..")
    }

  },[router])

  
  
  return (
    <div className="layout">
      <FixedMenu />
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
          .navbar {
            width:100%;
            height:142px;
            z-index:99;
          }
          .child {
            position:relative;
            width:${home ? "100%" : "80%"};
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:${home ? "0" : "20px"};
            padding:${home ? "0" : "50px 0"}
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