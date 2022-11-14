import Image from "next/image"

import Slider from "react-slick";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

import Bullet from "./bullet"

export default function Gallery() {
  const GalleryTable = [
    {key:"행사명", value:"2022 수원리빙디자인가구쇼"},
    {key:"기간", value:"2022.08.12(금) ~ 2022.08.15(월)"},
    {key:"장소", value:"수원컨벤션센터"},
    
  ]

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows:true,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

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
      <Slider {...settings}>
      <div className="gallery-img">
          <Image src="/last-exhibition-img.jpg"
          layout="fill" 
          objectFit="cover"
          alt="지난 전시회 대표 이미지"
          />
        </div><div className="gallery-img">
          <Image src="/last-exhibition-img.jpg"
          layout="fill" 
          objectFit="cover"
          alt="지난 전시회 대표 이미지"
          />
        </div><div className="gallery-img">
          <Image src="/last-exhibition-img.jpg"
          layout="fill" 
          objectFit="cover"
          alt="지난 전시회 대표 이미지"
          />
        </div><div className="gallery-img">
          <Image src="/last-exhibition-img.jpg"
          layout="fill" 
          objectFit="cover"
          alt="지난 전시회 대표 이미지"
          />
        </div><div className="gallery-img">
          <Image src="/last-exhibition-img.jpg"
          layout="fill" 
          objectFit="cover"
          alt="지난 전시회 대표 이미지"
          />
        </div>
        </Slider>
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

      @media only screen and (max-width:768px) {
        .gallery-box {
        width:100%;
        flex-direction: column;
        gap:20px;
      }

      .gallery-img {
        width: 100%;
      }

      .gallery-table {
        width:100%;
        justify-content:center;
      }

      .gallery-slick {
        width:100%;
      }

  
        }

      `}
    </style>
    
    </>
  )
}