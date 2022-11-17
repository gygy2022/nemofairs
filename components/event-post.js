import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function EventPost() {

  const router = useRouter();
  const id = router.query.id;

  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await
        (await fetch(`https://jackadmin.co.kr/api/event/detail/${id}`)).json();

      const sample = data.data;
      sample["regDate"] = (data.data.regDate.substr(0, 10));
      setList(sample);
    })();
  }, [])

  return (
    <>
      <div className="event-post-wrap">
        <table>
          <tbody>
            <tr>
              <td>{list.title}</td>
              <td>{list.regName}</td>
              <td>{list.regDate}</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <div dangerouslySetInnerHTML={{ __html: list.contents }} />
              </td>
            </tr>
          </tbody>
        </table>
        <button>
          <Link href="/suwon/media_center/event">

            목록

          </Link>
        </button>
      </div>

      <style jsx>
        {`
      .event-post-wrap {
        width:80%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      table {
        width:100%;
      }

      tr:first-child td:first-child  {
        width:75%;
      }

      tr:first-child td:not(td:last-child) {
        border-right:1px solid #ccc;
      }

      tr:last-child td {
        text-align: left;
        padding:20px;
        background-color: #fff !important;
        border-right: none !important;
      }

      button {
        width:5%;
        height:30px;
      }

      @media only screen and (max-width:768px) { .event-post-wrap {
        margin:30px 0;
      }

      button {
        width:20%;
        height:30px;
      }

}
      `}
      </style>

    </>
  )
}