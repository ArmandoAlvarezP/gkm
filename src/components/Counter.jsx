import CountUp from "react-countup";

// eslint-disable-next-line react/prop-types
export const Counter = ({number, title}) => {
  return (
    <div className="number">
        <CountUp duration={10} className="counter" end={number} />
        <span>{title}</span>
  </div>
  )
}
