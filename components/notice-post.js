import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NoticePost() {
  const router = useRouter();
  const id = router.query.id;

  const [list, setList] = useState([]);


  useEffect(() => {
    (async () => {
      const data = await
        (await fetch(`http://ljh45689.cafe24.com/api/notice/detail/${id}`)).json();
      setList(data.data);
    })();
    console.log(list);
  }, [])


  return (
    <>
      <div className="post-wrap">
        <div className="post-box">
          <table>
            <tbody>
              <tr>
                <td>{list.title}</td>
                <td>{list.regName}</td>
                <td>{list.regDate}</td>
              </tr>
              <tr>
                <td colSpan={3}>{list.contents}</td>
              </tr>
            </tbody>
          </table>

        </div>
        <button>
          <Link href="/suwon/media_center/notice_info">
            목록
          </Link>
        </button>
      </div>

      <style jsx>
        {`

      .post-wrap {
        width:80%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      .post-box {
        width:100%;
        white-space: pre-line;
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
      }

      button {
        width:5%;
        height:30px;
      }

      @media only screen and (max-width:768px) {
        button {
          width:20%;

        }
          
        }
      
      `}
      </style>
    </>
  )
}