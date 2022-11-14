export default function Bullet({text, padding}) {
  return (
  <>
    <div className="bullet-box">
      <div className="bullet"></div>
      <div className="bullet-text"><span>{text}</span></div>
    </div>

    <style jsx>
      {`
        .bullet-box {
          position:relative;
          width:100%;
          height:50px;
          margin:20px 0;
          padding-left:${padding ? padding : 0};
        }

        .bullet {
          width:30px;
          height:30px;
          border-radius:30px;
          background-color:#fdc5a2;
          position:absolute;
        }

        .bullet-text {
          font-size:2rem;
          font-weight:bold;
          z-index:3;
          left:13px;
          top:3px;
          position:absolute;
          width:auto;
        }

        .bullet-text {
          position:relative;
        }

        @media only screen and (max-width:768px) {
          .bullet-text {
            font-size: 1.8rem;
        }


      `}
    </style>
  </>
  )
}