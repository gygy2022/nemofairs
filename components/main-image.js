import Image from "next/image"

export default function MainImage() {
  return (
    <>
      <div className="cover">
        <div className="click"></div>
        <Image src={`https://t1.daumcdn.net/cafeattach/1Z8kN/2c5e4eb26eb4cf115396df3882e8194430d0b17d`}
          layout="fill"
          objectFit="cover"
          alt="메인 이미지"></Image>
      </div>
      <div className="main-explain">
      <Image src={`/fair_explain.jpg`}
          layout="fill"
          objectFit="cover"
          alt="메인 이미지"></Image>
      </div>

      <style jsx>
        {`
          .click {
            width:14%;
            height:6.5%;
            background-color:red;
            z-index:999;
            bottom:12.5%;
            left:12%;
            position:absolute;
            opacity:0.5;
          }
          .cover {
            width:100%;
            background-color:red;
            position:relative;
            aspect-ratio: 9 / 4.219;
          }
          .main-explain {
            margin-top:20px;
            width:100%;
            background-color:red;
            position:relative;
            aspect-ratio: 9 / 4.219;
          }
        `}
      </style>

    </>

  )

}