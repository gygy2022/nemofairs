import Slider from "react-slick";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import Image from "next/image";


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
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:true,
    rows:2,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };
  return (
    <>
  
    <div className="brand-wrap">
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


    <style jsx>
      {`

      .brand-wrap {
        background-color:pink;
        width:70%;
      }

      `}
    </style>
    </>
  )

}