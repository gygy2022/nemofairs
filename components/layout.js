import FixedMenu from "./fixed-menu";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
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
            height:150px;
            z-index:99;
          }
          .child {
            position:relative;
            width:80%;
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:20px;
            padding:50px 0;
          }

          @media only screen and (max-width:768px) {
          .child {
            width:100%;
          }
          }
        }
        `}
      </style>
    </div>

  )
}