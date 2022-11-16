import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Bullet from "./bullet";

export default function Event() {


  const [List, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await
        (await fetch(`https://jackadmin.co.kr/api/event/list`)).json();

      console.log(data.data);
      setList(data.data);
    })();
  }, [])


  return (
    <>
      <div className="event-wrap">
        <Bullet text="이벤트" />
        <div className="event-box">

          {List.map(list => (
            <div className="event-div" key={list.id}>
              
              <div className="event-thum">
              <Link href={`/suwon/media_center/event/${list.id}`}>
                <Image src={`https://jackadmin.co.kr/api/file/EVENT/${list.id}`}
                layout="fill"
                objectFit="cover"
                alt="이벤트 썸네일"></Image>
                </Link>
              </div>
              
              <div className="event-title"><Link href={`/suwon/media_center/event/${list.id}`}>{list.title} </Link></div>
             
            </div>
          ))}




        </div>
      </div>

      <style jsx>
        {`
      .event-wrap{
        display: flex;
        flex-direction: column;
        width:80%;
        padding:20px 0;
      }

      .event-box {
        margin:20px 0;
        width:100%;
        display: flex;
        flex-wrap: wrap;
        gap:0.5%;
      }

      .event-div {
        width:33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        gap:10px;
      }

      .event-thum {
        position: relative;
        width:90%;
        aspect-ratio: 5 / 6;
      }

      .event-title {
        font-size: 1.4rem;
        font-weight: bold;
        width:90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        border-top: 2px solid #ccc;
        padding:10px 0;
      }

      `}
      </style>
    </>
  )
}