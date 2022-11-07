export default function Brands (){

  const brandList = [
    "브랜드1", "브랜드2", "브랜드3", "브랜드4", "브랜드5",
    "브랜드6", "브랜드7", "브랜드8", "브랜드9", "브랜드10"
  ]
  return (
    <>
    <div className="brand-wrap">
      <ul>
        {brandList.map(name => (
          <li key={name}>
            {name}
          </li>
        ))}
      </ul>
    </div>

    <style jsx>
      {`

      .brand-wrap {
        background-color:pink;
        width:70%;
      }

      ul {
        width:100%;
        display:flex;
        flex-wrap:wrap;
        gap:10px;
      }

      li {
        background-color:orange;
        width:17%;
        height:100px;
        display:flex;
        align-items:center;
        justify-content:center;
        
      }

      `}
    </style>
    </>
  )

}