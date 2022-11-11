import Bullet from "./bullet";
import Image from "next/image";

export default function Intro() {

  const IntroTable = [
    {key:"명칭", value:"2022 수원가구박람회 Suwon Furniture Show 2022"},
    {key:"일시", value:"2022.12.15(목)~2022.12.18(일), 4일간"},
    {key:"장소", value:"수원 컨벤션 센터(광교중앙역)"},
    {key:"시간", value:"오전 10시 ~ 오후 6시"},
    {key:"주최", value:"㈜네모전람"},
    {key:"규모", value:"국내외 200여 가구 브랜드 참가, 500부스 규모"},
  ]

  const IntroInfo1 = [
    {img:"/intro-img01.jpg", title:"가정용 가구", text:["디자인 가구", "브랜드 가구", "주문 제작 가구", "원목 가구", "전통 가구", "이사, 입주 가구", "신혼 가구"]}
  ]

  const IntroInfo2 = [
    {img:"/intro-img02.jpg",title:"주방·욕실 욕품", text:["주방 가구", "조리 기구", "테이블웨어(식기)", "욕실 용품", "욕실 리모델링"]}
  ]

  const IntroInfo3 = [
    {img:"/intro-img03.jpg", title:"홈퍼니싱 제품", text:["인덕션", "패브릭", "인테리어 소품", "리빙 소품", "가전 제품"]}
  ]
  
  return (
    <>
    <div className="intro-wrap">
    <Bullet text="전시 개요"  padding="5%" />
    <div className="intro-box">
      <div className="youtube">홍보 영상 들어가는 곳</div>
      <table>
        <tbody>
          {IntroTable.map(table => (
            <tr key={table.key}>
              <td><b>{table.key}</b></td>
              <td>{table.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Bullet text="전시 품목"  padding="5%" />
    <div className="intro-box">
      {IntroInfo1.map(info => (
        <>
        <div className="intro-img">
          <Image src={info.img}
          layout="fill" 
          objectFit="cover"
          alt="전시 품목 이미지"
          ></Image>
        </div>
        <div className="intro-text">
          <p className="title">{info.title}</p>
          {info.text.map(text => (
            <p key={text}>- {text}</p>
          ))}
        </div>
        </>
      ))}
            {IntroInfo2.map(info => (
        <>
        <div className="intro-text">
          <p className="title">{info.title}</p>
          {info.text.map(text => (
            <p key={text}>- {text}</p>
          ))}
        </div>
        <div className="intro-img">
          <Image src={info.img}
          layout="fill" 
          objectFit="cover"
          alt="전시 품목 이미지"
          ></Image>
        </div>
        </>
      ))}
            {IntroInfo3.map(info => (
        <>
        <div className="intro-img">
          <Image src={info.img}
          layout="fill" 
          objectFit="cover"
          alt="전시 품목 이미지"
          ></Image>
        </div>
        <div className="intro-text">
          <p className="title">{info.title}</p>
          {info.text.map(text => (
            <p key={text}>- {text}</p>
          ))}
        </div>
        </>
      ))}
    </div>
    </div>

    <style jsx>
      {`

      .intro-wrap {
        width:80%;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:30px;
      }

      .intro-box {
        width:80%;
        display:flex;
        flex-wrap:wrap;
      }

      .youtube {
        width:100%;
        background-color:skyblue;
        aspect-ratio: 16 / 9;
        margin-bottom:20px;
      }

      table {
        width:100%;
      }
      

      .intro-img {
        position:relative;
        width:50%;
        aspect-ratio: 9 / 6;
      }

      .intro-text {
        width:50%;
        aspect-ratio: 9 / 6;
        padding:10%;
      }

      .title {
        font-size:1.5rem;
        font-weight:bold;
        margin-bottom:20px;
      }
      `}
    </style>
    </>
  )
}