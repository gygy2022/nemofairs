export default function Ask() {

  const nemoInfo = [
    { key: "Phone", value: "02-786-9231" },
    { key: "Email", value: "deco@nemofairs.com" },
    { key: "Address", value: "서울 강서구 공항대로 209 (마곡동) 816호" },
    { key: "Open", value: "월요일-금요일 10am-6pm" },
  ]

  const askInput = [
    { key: "Name", value: "이름을 입력해 주세요" },
    { key: "Phone", value: "연락처를 입력해 주세요" },
    { key: "Email", value: "이메일을 입력해 주세요" },
  ]

  return (
    <>
      <div className="ask-wrap">
        <div className="ask-title">
          <h1>상담 문의</h1>
          <h4>Home Furnishing & Deco Fair 2022</h4>
        </div>

        <div className="ask-box">

          {/* 네모전람 정보 div  */}

          <div className="ask-div nemo-info">
            {nemoInfo.map(nemo => (
              <>
                <div>
                  <h2>{nemo.key}</h2>
                  <h5>{nemo.value}</h5>
                </div>
              </>

            ))}
          </div>

          {/* 문의 정보 div  */}

          <div className="ask-div ask-input">
            {askInput.map(input => (
              <>
                <label>
                  <h2>{input.key}</h2>
                  <input type="text"
                    placeholder={input.value} />
                </label>
              </>
            ))}

            <div className="privacy-agree">
              <input type="checkbox" />
              <span>개인정보 취급방침 활용 동의</span>
              <span>[자세히 보기]</span>
            </div>

          </div>


          <div className="ask-div">
            <label>
              <h2>Content</h2>
              <textarea
                placeholder="문의 내용을 입력해 주세요" />
            </label>
            <button>Send Message</button>
          </div>

        </div>
      </div>

      <style jsx>
        {`
        .ask-wrap {
          width:100%;
          padding:40px 0;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:40px;
        }

        .ask-title {
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        h1 {
          font-size: 3rem;
        }

        h2 {
          font-size:1.3rem;
          margin-bottom:5px;
        }

        h4 {
          font-size:1.2rem;
        }

        .ask-box {
          display:flex;
          gap:20px;
          width:80%;
        }

        .ask-div {
          width:30%;
          display:flex;
          flex-direction:column;
        }

        .nemo-info {
          gap:20px;
        }

        .ask-input input[type=text] {
          width:100%;
          padding:15px;
          font-size:0.9rem;
          border-bottom:1px solid var(--primary-color);
        }

        .privacy-agree {
          display:flex;
          font-size:0.8rem;
        }

        .privacy-agree span {
          margin-right: 4px;
        }

        textarea {
          width:100%;
          height:200px;
          padding:15px;
        }

        button {
          height:30px;
          background-color:var(--primary-color);
          color:#fff;
          margin-top:10px;
        }


      `}
      </style>
    </>
  )
}