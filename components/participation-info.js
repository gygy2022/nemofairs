import Bullet from "./bullet";
import Image from "next/image";

export default function Participation() {

  const BoothType = [
    {sort:"구분", basic:"기본 부스", one:"독립 부스"},
    {sort:"비용", basic:"1,200,000원/부스(VAT 별도)", one:"800,000원/부스(VAT 별도) *가구분야 = 4부스 이상 적용"},
    {sort:"제공 면적", basic:"벽체시공, 콘센트 1개, 전력 1kw, 스포트라이트 2개, 인포/의자 1세트(업체당 1세트) *1부스 부터 신청 가능", one:"전력, 콘센트 *바닥파이텍스,조명 불포함(필요 시 별도 신청)"},
  ]

  const Account = [
    {bank:"은행명", num:"계좌 번호", holder:"예금주"},
    {bank:"신한은행", num:"140-011-316534", holder:"네모전람(주)"},

  ] 

  return (
    <>
    <div className="participation-wrap">

    <div className="participation-box">
      <Bullet text="부스 타입" />
      <table>
        <tbody>
          {BoothType.map(type => (
            <tr key={type.sort}>
              <td>{type.sort}</td>
              <td>{type.basic}</td>
              <td>{type.one}</td>
            </tr>
          ))}
          <tr>
            <td>제공 내역</td>
            <td>
              <div className="booth-img">
            <Image src="/booth-01.jpg"
              layout="fill"
              objectFit="cover"
              alt="부스 이미지1"
            />
            </div>
            </td>
            <td>
            <div className="booth-img">
            <Image src="/booth-02.jpg"
              layout="fill"
              objectFit="cover"
              alt="부스 이미지2"
            />
            </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="participation-box">
      <Bullet text="부대 서비스 사양" />
      <table>
        <tbody>
          <tr>
            <td>구분</td>
            <td>비용</td>
            <td>비고</td>
          </tr>

          <tr>
            <td>바닥파이텍스</td>
            <td>30,000원/부스</td>
            <td rowSpan={3}>
              <div className="download">
                <p>기타 : 참가업체 메뉴얼 참조</p>
                <button>메뉴얼 다운로드</button>
              </div>
            </td>
          </tr>

          <tr>
            <td>조명</td>
            <td>10,000원/개</td>
          </tr>

          <tr>
            <td>목공판넬</td>
            <td>60,000원/m</td>
          </tr>
        </tbody>
      </table>
      <p className="booth-p">※ 부스배정 : 참가신청 면적, 참가품목, 전시장균형 등을 고려하여 주최자가 배정</p>
      </div>


    <div className="participation-box">
      <Bullet text="참가비 납입 계좌" />
      <table>
        <tbody>
          {Account.map(acc => (
            <tr key={acc.bank}>
              <td>{acc.bank}</td>
              <td>{acc.num}</td>
              <td>{acc.holder}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="participation-box">
      <Bullet text="출품 문의" />
        <div className="entry-ask">
          <div>
            <p className="ask-title">네모전람㈜ 전시팀</p>
            <p>서울시 강서구 공항대로 209 (GMG엘스타)<br/>816호 TEL : 02-786-9231 <br/>
            FAX : 02-786-9233 <br/>
            E-mail: deco@nemofairs.com</p>
          </div>
          <div>
            <p className="ask-title">수원가구박람회 사무국</p>
            <p>TEL : 02-786-9232 <br/>
            E-mail: deco@nemofairs.com
            </p>
          </div>
          </div>
        </div>
    </div>

    <style jsx>
      {`
      .participation-wrap {
        width:80%;
        display:flex;
        flex-direction:column;
        gap:100px;
      }

      table {
        width:100%;
      }

      td {
        width:45%;
      }

      td:first-child {
        width:10%;
        font-weight:bold;
      }
      

      .booth-img {
        position:relative;
        aspect-ratio: 9 / 7;
      }

      .download {
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:20px;
      }

      .download button {
        width:40%;
        height:30px;
        border-radius:10px;
      }

      .booth-p {
        font-size:0.9rem;
        color:grey;
        margin-bottom:20px;
      }

      .entry-ask {
        width:100%;
        display:flex;
        justify-content:space-between;
      }

      .entry-ask div {
        width:49%;
        padding:1%;
      }

      .entry-ask div:first-child {
        border-right:1px solid grey;
      }

      .ask-title {
        font-size:1.2rem;
        color:var(--primary-color);
        font-weight:bold;
        margin-bottom:10px;
      }

      @media only screen and (max-width:768px) {
          .download button {
            width:80%;
          }
        }


      `}
    </style>
    </>
  )

}