import Slider from "react-slick";
import Image from "next/image";
import { ArrowBack, ArrowForward } from "./arrow";



export default function Brands (){

  const brandList = [
    "/sample-logo-01.jpg", "/sample-logo-02.jpg", "/sample-logo-03.jpg",
    "/sample-logo-01.jpg", "/sample-logo-02.jpg", "/sample-logo-03.jpg",
    "/sample-logo-01.jpg", "/sample-logo-02.jpg", "/sample-logo-03.jpg", 
    "/sample-logo-01.jpg", "/sample-logo-02.jpg", "/sample-logo-03.jpg", 
    "/sample-logo-01.jpg", "/sample-logo-02.jpg", "/sample-logo-03.jpg", 
    "/sample-logo-01.jpg", "/sample-logo-02.jpg", "/sample-logo-03.jpg", 
    "/sample-logo-01.jpg", "/sample-logo-02.jpg", "/sample-logo-03.jpg", 
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    rows:3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    nextArrow: <ArrowForward />,
    prevArrow: <ArrowBack />,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows:2,
        }
      }
    ]
  };
  return (
    <>
  
    <div className="brand-wrap">
      <h1>참가 브랜드</h1>
      <div className="slider-box">
    <Slider {...settings}>
      
        {brandList.map(name => (
          <div className="brand-box" key={name}>
          <div className="brand-div">
            <Image src={name}
            layout="fill"
            objectFit="cover"
            alt="로고 이미지"></Image>
          </div>
          </div>
        ))}

      </Slider>
      </div>
    </div>


    <style jsx>
      {`

      .brand-wrap {
        background-color:var(--secondary-color);
        width:100%;
        padding:150px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:50px;
      }

      h1 {
        font-size:2.5rem;
        color: #fff;
      }

      .slider-box {
        width:1000px;
        height:450px;
      }

      @media only screen and (max-width:768px) {
        .brand-wrap {
          padding:80px 0;
          gap:10px;
        }
        
        .slider-box {
          width:250px;
          height:125px;
        }

      }



      `}
    </style>
    </>
  )

}