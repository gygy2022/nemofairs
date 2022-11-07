import FixedMenu from "./fixed-menu";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <FixedMenu />
      <div className="navbar">
        <Navbar />
      </div>
      <div className="child">{children}</div>

      <style jsx>
        {`
          .layout {
            display:flex;
            flex-direction:column;
            align-items:center;
          }
          .navbar {
            width:80%;
            height:150px;
            z-index:99;
          }
          .child {
            position:relative;
            width:80%;
            background-color:skyblue;
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:20px;
          }
        `}
      </style>
    </div>

  )
}