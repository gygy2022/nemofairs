import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCheckCircle, BsPencilSquare, BsQuestionCircle } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

export default function FixedMenu() {

  const sideMenu = [
    {title:"사전등록", icon:<BsCheckCircle />},
    {title:"참가신청", icon:<BsPencilSquare />},
    {title:"오시는길", icon:<FiMapPin />},
    {title:"상담문의", icon:<BsQuestionCircle />},
  ]
  
  return (
    <>
    <div className="fixed-wrap">
      <ul>
      {sideMenu.map(side => (
        <>
        <li>
          {side.icon}
          <p>{side.title}</p>

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
        background-color:#252525;
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
        color:#85B221;
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
      `}
    </style>
    </>
  )
}