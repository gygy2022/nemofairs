import React, { useState } from "react";

export default function Notice() {

  const [list, setList] = useState([]);


  React.useEffect(() => {
    (async()=> {
      const data = await 
      (await fetch("http://ljh45689.cafe24.com/api/notice/list")).json();
      setList(data.data);
    })();
    console.log(list);
  },[])

  return (
    <>
    <div className="notice-wrap">
      공지사항 컴포넌트
      
      <table>
        <tbody>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
          </tr>

          {list.map((list, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{list.title}</td>
              <td>{list.regName}</td>
              <td>{list.regDate.substr(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <style jsx>
      {`
      .notice-wrap {
        width:80%;
        display:flex;
        flex-direction:column;
      }

      td:first-child {
        width:6%; 
      }

      td:nth-child(2) {
        width:70%;
      }

      `}
    </style>
    </>
  )
}
