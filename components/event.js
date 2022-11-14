import Bullet from "./bullet";

export default function Event() {

  return (
    <>
    <div className="event-wrap">
      <Bullet text="이벤트" />
    </div>

    <style jsx>
      {`
      .event-wrap{
        height:500px;
        display: flex;
        flex-direction: column;
        width:90%;
        padding:200px;
      }
      `}
    </style>
    </>
  )
}