export default function Bullet({text, padding, border}) {
  return (
  <>
    <div className="bullet-box">
      <div className="bullet"></div>
      <div className="bullet-text"><span>{text}</span></div>
      <div className="line" />
    </div>

    <style jsx>
      {`
        .bullet-box {
          position:relative;
          width:100%;
          height:${border ? "50px" : "60px"};
          margin:10px 0;
          padding-left:${padding ? padding : 0};
        }

        .line {
          position:absolute;
          background-color: #e5e5e5;
          height:1px;
          width:${padding ? "90%" : "100%"};
          bottom: 0;
          right:${padding ? "5%" : 0};
          display: ${border ? border : "block"};
        }

        .bullet {
          width:30px;
          height:30px;
          border-radius:30px;
          background-color:#fdc5a2;
          position:absolute;
        }

        .bullet-text {
          font-size:1.75rem;
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