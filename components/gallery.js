import Image from "next/image"
import Bullet from "./bullet"

export default function Gallery() {
  const GalleryTable = [
    {key:"행사명", value:"2022 수원리빙디자인가구쇼"},
    {key:"기간", value:"2022.08.12(금) ~ 2022.08.15(월)"},
    {key:"장소", value:"수원컨벤션센터"},
    
  ]

  return(
    <>
    <div className="gallery-wrap">

      <Bullet text="지난 전시회 개요" padding="5%" />

      <div className="gallery-box">
        <div className="gallery-img">
          <Image src="/last-exhibition-img.jpg"
          layout="fill" 
          objectFit="cover"
          alt="지난 전시회 대표 이미지"
          />
        </div>
        <div className="gallery-table">
        <table>
          <tbody>
            {GalleryTable.map(text => (
              <tr key={text.key}>
                <td><b>{text.key}</b></td>
                <td>{text.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>


      <Bullet text="지난 전시회 갤러리"  padding="5%" />
      <div className="gallery-slick">
        슬라이드 들어가는 곳 
      </div>

    </div>

    <style jsx>

      {`
      .gallery-wrap {
        width:80%;
        display:flex;
        flex-direction:column;
        align-items:center;
      }

      .bullet {
        width:100%;
      }

      .gallery-box {
        width:80%;
        display:flex;
      }

      .gallery-img {
        position:relative;
        width:60%;
        background-color:skyblue;
        aspect-ratio: 16 / 9;
      }

      .gallery-table {
        width:40%;
        display:flex;
        align-items:center;
        justify-content:flex-end;
      }

      .gallery-table table {
        width:95%;
      }

      .gallery-slick {
        width:80%;
        background-color:skyblue;
        aspect-ratio: 3 / 1;
      }
      `}
    </style>
    
    </>
  )
}