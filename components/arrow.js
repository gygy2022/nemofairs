import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ArrowBack(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrow-box">
      <div onClick={onClick}>
        <IoIosArrowBack />
      </div>
    </div>
  )
}

function ArrowForward(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrow-box">
      <div
        onClick={onClick}>
        <IoIosArrowForward />
      </div>
    </div>
  )
}
export { ArrowBack, ArrowForward };