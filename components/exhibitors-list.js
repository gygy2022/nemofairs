import Bullet from "./bullet";

export default function Exhibitors() {

  const Logo = [
    ["로고1", "로고2", "로고3", "로고4", "로고5"],
    ["로고1", "로고2", "로고3", "로고4", "로고5"],
    ["로고3", "로고4", "로고5"]
  ]

  const ExhibitorList = [
    {num:"NO.", title:"참가업체명",booth:"부스NO", item:"품목"},
    {num:"1", title:"예시1",booth:"B01", item:"품목1"},
    {num:"2", title:"예시2",booth:"B02", item:"품목2"},
    {num:"3", title:"예시3",booth:"B04", item:"품목3"},
  ]

  return(
    <>
    <div className="exhibitor-wrap">
      <div className="exhibitor-box">
      <Bullet text="참가 기업" padding="5%" />
      <div className="exhibitor-logo">
        로고 들어갈 곳
        <table>
          <tbody>
        {Logo.map(logo => (
          <tr key={logo}>
            {logo.map(list=> (
              <td key={list}>
                {list}
              </td>
            ))}

          </tr>
        ))}
        </tbody>
        </table>
      </div>
      <div className="exhibitor-table">
        <table>
          <tbody>
            {ExhibitorList.map(list => (
              <tr key={list.num}>
                <td>{list.num}</td>
                <td>{list.title}</td>
                <td>{list.booth}</td>
                <td>{list.item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>

    <style jsx>
      {`
      .exhibitor-wrap {
        width:80%;
        display:flex;
        flex-direction:column;
        align-items:center;
      }

      .exhibitor-box {
        width:100%;
      }

      .exhibitor-logo {
        width:80%;
      }

      .exhibitor-logo table {
        width:100%;
        border:none;
      }

      .exhibitor-logo table tr {
        border:none;
      }

      .exhibitor-logo table td {
        width:20%;
        height:50px;
        background-color:skyblue;
        border:5px solid #fff;
      }

      .exhibitor-table {
        width:80%;
      }

      .exhibitor-table table {
        width:100%;
      }

      .exhibitor-table td {
        border:1px solid #ccc;
      }

      @media only screen and (max-width:768px) {

        .exhibitor-logo {
          width: 100%;
        }

        .exhibitor-table {
        width:100%;
      }

        }



      `}
    </style>
    </>
  )
}