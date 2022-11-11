import Bullet from "./bullet";
import Image from "next/image";

export default function Booth() {


  return (
    <>
      <div className="booth-wrap">
        <Bullet text="부스 배치도" padding="5%" />
        <div className="booth-box">
          <p className="booth-text">※ 이미지를 클릭하시면 크게 보실 수 있습니다.<br />
            ※ 부스배치도는 행사 개최 전까지 지속적으로 업데이트 됩니다.</p>
          <div className="booth-img">
            <Image src="/dd"
              layout="fill"
              objectFit="cover"
              alt="부스 이미지"
            />
          </div>
        </div>
      </div>

      <style jsx>
        {`

        .booth-wrap {
          width:80%;
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        .booth-box {
          width:80%;
        }

        .booth-text {
          font-size:0.8rem;
          color:var(--primary-color);
        }

        .booth-img {
          position:relative;
          background-color:skyblue;
          aspect-ratio: 16 / 9;
          margin:20px 0;
        }
        
        `}
      </style>
    </>

  )
}