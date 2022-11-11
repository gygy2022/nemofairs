import Bullet from "./bullet";

export default function Map() {

  const buttons = [
    {title:"카카오지도 연결", href:"none"},
    {title:"네이버지도 연결", href:"none"},
    {title:"Tmap 연결", href:"none"},

  ]

  return (
    <>
    <div className="map-wrap">
      <Bullet text="전시장 주소" padding="5%" />

      <table>
        <tbody>
          <tr>
            <td>전시 장소</td>
            <td>수원 컨벤션센터 
              <br />
              <span>(신분당선 - 광교중앙역 4번 출구)</span>
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
        지도 들어갈 부분
      </div>

      <div className="button-box">
        {buttons.map(btn => (
          <>
          <button>{btn.title}</button>
          </>
        ))}

      </div>
    </div>

    <style jsx>
      {`
      .map-wrap {
        width:80%;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:20px;
      }

      table {
        width:90%;
      }

      tr:first-child {
        font-size:1.5rem;
      }

      td:first-child {
        font-weight:bold;
      }

      span {
        font-weight:normal;
        font-size:1rem;
      }

      .kakao-map {
        width:90%;
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
      `}
    </style>
    </>
  )
}