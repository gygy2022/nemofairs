import Bullet from "./bullet";

export default function Parking() {

  const reduction = [
    {sort:"내용", target:"대상", condition:"감면 조건"},

    {sort:"무료", 
    target:"- 국가 유공자 \n - 중증장애인(기존1~3급)", 
    condition:"- 국가유공자 카드 확인 \n - 장애인 복지카드 확인"},

    {sort:"2시간 면제 후 50%", 
    target:"- 경증장애인 (기존4~6급) \n - 저공해자동차(1종)", 
    condition:"- 장애인 복지카드 확인 \n - 저공해 스티커 부착 차량"},

    {sort:"50% 감면", 
    target:"- 경차 (1,000cc 미만) \n - 저공해자동차 (2종, 3종) \n - 경기 I-Plus 카드 (3자녀)", 
    condition:"- 입차 시 자동인식 \n - 저공해 스티커 부착 차량 \n - 경기 I-Plus 카드 확인"},

    {sort:"30% 감면", 
    target:"- 경기 I-Plus 카드 (2자녀)", 
    condition:"- 경기 I-Plus 카드 확인"},
  ]

  return (
    <>
    <div className="parking-wrap">
      <Bullet text="주차 요금표" border="none"/>
      <table className="price">
        <tbody>
          <tr>
            <td>구분</td>
            <td colSpan={3}>1회 주차 요금</td>
          </tr>

          <tr>
            <td rowSpan={2}>승용 및 승합</td>
            <td>최초 30분까지</td>
            <td>30분 초과 후 (10분마다)</td>
            <td>1일</td>
          </tr>

          <tr>
            <td>900원</td>
            <td>400원</td>
            <td>9,500원</td>
          </tr>
        </tbody>
      </table>
      <p>
      ※ 위 표는 지하주차장 요금이며, <b>카드결제만 가능합니다. (신용/체크/교통/삼성페이)</b>
      <br/>
      ※ 15 인승 이상 25 인승 미만 승합자동차, 2.5톤 이상 4.5톤 미만 화물자동차 또는 크기가 이에 준하는 차량은 지하주차장 이용이 불가합니다.
      <br/>
      ※ 출구 정산 기준 20분 이내 회차시간 무료 (※ 경과 시 20분을 포함한 정상요금 부과)
      </p>

      <Bullet text="주차 요금 감면 안내" border="none" />

      <table className="reduction">
        <tbody>
          {reduction.map(list => (
            <>
            <tr>
              <td>{list.sort}</td>
              <td>{list.target}</td>
              <td>{list.condition}</td>
            </tr>
            </>
          ))}
        </tbody>
      </table>


    </div>

    <style jsx>
      {`

      .parking-wrap {
        width:80%;
        display:flex;
        flex-direction:column;
      }

      p {
        margin-bottom:60px;
      }

      .price tr:last-child td:first-child {
        background-color: #fff;
      }


      .reduction {
        white-space: pre-line;
      }

      .reduction tr:not(:first-child) td:not(:first-child) {
        text-align:left;
      }

      `}
    </style>
    </>
  )
}