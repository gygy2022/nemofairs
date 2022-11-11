import Bullet from "./bullet";

export default function Application() {

  const exhibitionInput = [
    "성함", "직위" ,"E-mail" ,"전화" ,"팩스" ,"휴대 전화"
  ]

  const taxInput = [
    "성함", "전화", "휴대 전화", "E-mail"
  ]

  const homeFurnishing = [
    "가구", "조명", "패브릭/침구", "인테리어 소품", "홈스타일", "홈인테리어소재",
    "갤러리", "홈가드닝", "키친", "테이블웨어", "테이블데코", "바스(bath)", "시공/컨설팅", "디저트/음료", "기타 관련제품"
  ]

  const homeAppliances = [
    "생활가전", "신혼가전", "홈스튜디오", "커피머신", "소형가전", "여행", "홈디바이스", "힐링", "펫퍼니싱", "공방아트", "패션/의류", "공기청정기", "로봇청소기", "환기시스템", "방진망/창호"
  ]

  const homeCenter = [
    "DIY", "홈 임프루브먼트", "전동공구", "홈퍼니싱하드웨어", "파티웨어", "플라워데코", "파티용품", "크리스마스장식", "선물용품", "여행상품", "기타"
  ]

  const Th = [
    "구분", "단가(1부스)", "신청량", "금액(단가x신청량)", "비고"
]



  return(
    <>
    <div className="apply-wrap">
      <Bullet text="신청서 작성" />
      <div className="apply-input">

        {/* 회사명 */}
        <label>
          <p>회사명<span id="star">*</span></p>
          <div className="input-box corporate-name">
          <input type="text" placeholder="국문" />
          <input type="text" placeholder="영문" />
          </div>
        </label>

        {/* 주소 */}
        <label>
          <p>주소<span id="star">*</span></p>
          <div className="input-box">
          <input type="text" />
          </div>
        </label>

        <div className="apply-box">

         {/* 대표자 */}
        <label>
          <p>대표자<span id="star">*</span></p>
          <input type="text" />
        </label>

         {/* 대표자E-mail */}
        <label>
          <p>대표자E-mail<span id="star">*</span></p>
          <input type="text" />
        </label>

        </div>

        <div className="apply-box">

        {/* 사업자등록번호 */}
        <label>
          <p>사업자등록번호<span id="star">*</span></p>
          <input type="text" />
        </label>

         {/* 회사 홈페이지 */}
        <label>
          <p>회사 홈페이지<span id="star">*</span></p>
          <input type="text" />
        </label>
        </div>


        {/* 전시회 담당자 */}
        <label>
          <p>전시회 담당자<span id="star">*</span></p>
          <div className="input-box inputs">
            {exhibitionInput.map(text => (
              <>
              <input type="text"
              placeholder={text}/>
              </>
            ))}
          </div>
        </label>

        {/* 세금계산서 담당자 */}
        <label>
          <p>세금계산서 담당자</p>
          <div className="input-box inputs">
            {taxInput.map(text => (
              <>
              <input type="text"
              placeholder={text}/>
              </>
            ))}
          </div>
        </label>

        {/* 홈퍼니싱, 홈데코, 키친&바스 */}
        <label>
          <p>홈퍼니싱, 홈데코, 키친&바스<span id="star">*</span></p>
          <div className="check-box">
              {homeFurnishing.map(text => (
                <div key={text} className="check-div">
                <input type="checkbox"/>
                <span>{text}</span>
                </div>
              ))}
          </div>
        </label>

        {/* 홈가전, 홈클리닝, 라이프 스타일 */}
        <label>
          <p>홈가전, 홈클리닝, 라이프 스타일<span id="star">*</span></p>
          <div className="check-box">
              {homeAppliances.map(text => (
                <div key={text} className="check-div">
                <input type="checkbox"/>
                <span>{text}</span>
                </div>
              ))}
          </div>
        </label>

        {/* 홈센터, 파티/연회, 크리스마스 */}
        <label>
          <p>홈센터, 파티/연회, 크리스마스<span id="star">*</span></p>
          <div className="check-box">
              {homeCenter.map(text => (
                <div key={text} className="check-div">
                <input type="checkbox"/>
                <span>{text}</span>
                </div>
              ))}
          </div>
        </label>

        <label>
          <p>전시품 상세내역</p>
          <input type="text"></input>
          </label>        
      </div>

      <table>
        <tbody>
        
        {Th.map(th => (
          <th key={th}>{th}</th>
        ))}
        <tr>
          <td>독립부스</td>
          <td>1,500,000</td>
          <td><input type="text"/> <span>부스</span></td>
          <td><input type="text"/> <span>원</span></td>
          <td>부가가치세 별도</td>
        </tr>
        <tr>
          <td>기본부스</td>
          <td>1,000,000</td>
          <td><input type="text"/> <span>부스</span></td>
          <td><input type="text"/> <span>원</span></td>
          <td>부가가치세 별도</td>
        </tr>
        </tbody>
      </table>

      <div className="table-div">
        <p> - 1부스 크기는 3m X 3m = 9m² (약2.7평), 최소 신청규모 : 프리미엄부스는 1부스(9m²), <span className="primary-span">기본부스(옥타늄) 1부스(9m²)이상</span></p>
        <p>- 기본부스(옥타늄) 포함사항 : 벽면, 상호 간판, 카펫, 안내데스크 및 의자 1조, 스포트라이트 2개</p>
        <p>- 계약금(참가비 총액의 50%)은 신청서 제출시 같이 입금, 잔금은 2022년 11월 14일(월)까지 납부</p>
        <p>- <span className="primary-span">참가비 납입계좌 : 신한은행 140-011-316534 예금주 네모전람㈜</span></p>
      </div>

      <p className="regulation">당 사는 2022 수원가구박람회에 참가규정(이면수록)에 동의하여 서약하며 <br/>상기의 내용과 같이 참가신청서를 제출합니다.</p>
    <p>2022 수원가구박람회 사무국 귀중</p>
    <p className="p-nemo">네모전람㈜ 서울시 강서구 공항대로 209(GMG엘스타), 816호 TEL (02)786-9231 FAX(02)786-9233 EMAIL deco@nemofairs.com
</p>
<div className="button-div">
<button>참가규정 펼쳐 보기</button>
<button>참가신청서 제출하기</button>
</div>
    </div>


    <style jsx>
      {`
      .apply-wrap {
        width:80%;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:30px;
      }

      .apply-input {
        width:100%;
        display:flex;
        flex-direction:column;
        gap:20px;
      }

      label {
        width: 100%;
        display:flex;
      }

      label p{
        width: 10%;
        font-weight:bold;
        margin-right:20px;
      }

      label input {
        width:87%;
      }

      .input-box {
        width:88%;
      }

      .input-box input {
        width:100%;
      }

      .corporate-name {
        display:flex;
        justify-content:space-between;
      }

      .corporate-name input {
        width:49%;
      }

      .apply-box {
        display:flex;
        flex-wrap:wrap;
        gap:20px 0;
        justify-content:space-between;
      }

      .apply-box label {
        width:49%;
      }

      .apply-box label p{
        width: 20%;
        font-weight:bold;

      }

      .apply-box input {
        width:76%;
      }

      .inputs {
        display:flex;
        flex-wrap:wrap;
        gap:5px 1%;
        justify-content:space-between;
      }

      .inputs input {
        width:32%;
      }

      .check-box {
        width:88%;
        display:flex;
        gap:0.5%;
        flex-wrap:wrap;
      }

      .check-div {
        width:33%;
        display:flex;
        align-items:center;
      }

      .check-div input {
        width:20px;
        height:20px;
      }

      table {
        border:1px solid #ccc;
        border-collapse: collapse;
        width:90%;
        text-align:center;
      }

      th, tr, td {
        border:1px solid #ccc;
      }

      .table-div {
        width:90%;
      }

      .primary-span {
        color:var(--primary-color);
      }

      .regulation {
        font-size:2rem;
        text-align:center;
      }

      .p-nemo {
        font-size:0.8rem;
      }

      .button-div {
        display:flex;
        gap:20px;
        align-items:center;
      }

      button {
        width:200px;
        height:30px;
      }


      `}
    </style>
    
    </>
  )
}