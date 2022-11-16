import Image from "next/image"

import Bullet from "./bullet"

export default function VisitInfo() {

  const swonInfo = [
    {key:"행사명", value:"2022 수원가구박람회"},
    {key:"행사 기간", value:"2022.12(목)~12.18(일) / 4일간"},
    {key:"장소", value:`수원컨벤션센터(광교) \n (신분당선 광교중앙역 4번출구)`},
    {key:"관람 시간", value:"오전10:00~ 오후6:00(오후 5:30 입장마감)"}
  ]

  const admission = [
    {sort:"구분", price:"요금", note:"비고"},
    {sort:"현장구매", price:"5,000원", note:"티켓 지참시 재방문 무료"},
    {sort:"미성년자 \n 초청장 소지자", price:"무료", note:"고등학생은 학생증 지참"},
    {sort:"온라인 사전등록자", price:"무료", note:"사전 등록 기간: ~2022.12.14"}
  ]

  const admissionProcedures = [
      {sort:"사전등록자", img:"/visit-04.jpg"},
      {sort:"초대권 소지자", img:"/visit-05.jpg"},
      {sort:"현장 등록자", img:"/visit-06.jpg"}
  ]

  return (
    <>
    <div className="visit-wrap">
      <Bullet text="관람 안내" />
      <table>
        <tbody>
            {swonInfo.map(info => (
              <tr key={info.key}>
              <td>{info.key}</td>
              <td>{info.value}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <Bullet text="입장료" />

      <table>
        <tbody>
            {admission.map(text => (
              <tr key={text.sort}>
              <td>{text.sort}</td>
              <td>{text.price}</td>
              <td>{text.note}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <Bullet text="입장 절차 안내" />
      <div className="visit-box">
        {admissionProcedures.map(text => (
          <div key={text.sort} className="visit-div">
            <p className="visit-title">{text.sort}</p>
              <div className="visit-img">
              <Image src={text.img}
              layout="fill" 
              objectFit="contain"
              alt="입장 절차 이미지">
              </Image>
              </div>
          </div>
        ))}
      </div>


    </div>

    <style jsx>
      {`

      .visit-wrap {
        width:70%;
        display:flex;
        flex-direction:column;
        padding:20px 0;
      }

      .visit-box {
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
      }

      .visit-div {
        width:100%;
      }

      table {
        white-space: pre-line;
      }

      .visit-title {
        font-size:1.3rem;
        font-weight:bold;
        margin:20px 0;
      }
      .visit-img {
        position:relative;
        width:100%;
        aspect-ratio: 9 / 2;
      }

      @media only screen and (max-width:768px) {
        .visit-wrap {
          width:80%;
          padding:0;
        }
        }


      `}
    </style>
    </>
  )
}