import Link from "next/link";
import Bullet from "./bullet";
import KakaoMap from "./kakao-map";


export default function Map() {

  const buttons = [
    {title:"카카오지도 연결", href:"https://place.map.kakao.com/1946823368"},
    {title:"네이버지도 연결", href:"https://naver.me/Goz5cKSr"},
    {title:"Tmap 연결", href:"https://surl.tmap.co.kr/1cca79b9"},

  ]

  return (
    <>
    <div className="map-wrap">
      <Bullet text="전시장 주소" border="none" />

      <table>
        <tbody>
          <tr>
            <td>전시 장소</td>
            <td>수원 컨벤션센터 
              <br />
              (신분당선 - 광교중앙역 4번 출구)
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              (도로명) 16514 경기도 수원시 영통구 광교중앙로 140
              <br />
              (지번) 16514 경기도 수원시 영통구 하동 864-10
            </td>
          </tr>
        </tbody>
      </table>

      <div className="kakao-map">
        <KakaoMap title="수원 컨벤션 센터" />
      </div>

      <div className="button-box">
        {buttons.map(btn => (
          <>
          
          <button><Link href={btn.href}
          target="_blank">{btn.title}</Link></button>
          
          </>
        ))}

      </div>
    </div>

    <style jsx>
      {`
      .map-wrap {
        width:75%;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:20px;
        height:80vh;
      }

      table {
        width:100%;
      }


      td:first-child {
        font-weight:bold;
      }

      span {
        font-weight:normal;
        font-size:1rem;
      }

      .kakao-map {
        width:100%;
        background-color:skyblue;
        aspect-ratio: 16/9;   
      }

      .button-box {
        display:flex;
        width: 50%;
        justify-content:space-between;
      }

      button {
        width:30%;
        height:40px;
        border-radius:10px;
      }

      @media only screen and (max-width:768px) {
          .map-wrap {
            width:80%;
          }
          .button-box {
            width:100%;
          }
        }


      `}
    </style>
    </>
  )
}