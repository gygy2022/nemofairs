import Image from "next/image"
import Link from "next/link"

export default function MainImage() {
  return (
    <>
    <div className="main-wrap">
      <div className="cover">
        <Link href="/suwon/visitors/visit_check">
        <div className="click"></div>
        </Link>
        <Image src="/main_img1.jpg"
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
      </div>

      <style jsx>
        {`

          .main-wrap {
            width:100%;
          }
          .click {
            width:14%;
            height:6.5%;
            z-index:999;
            bottom:12.5%;
            left:12%;
            position:absolute;
          }
          .cover {
            width:100%;
            position:relative;
            aspect-ratio: 9 / 4.219;
          }
          .main-explain {
            width:100%;
            position:relative;
            aspect-ratio: 9 / 4.219;
          }
        `}
      </style>

    </>

  )

}