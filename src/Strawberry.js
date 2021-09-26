// import datas from "./data";

function Strawberry({ division, color, member }) {
  // console.log(datas);
  return (
    <li>
      {`${division} has color of ${color} and the captain is ${member[0].lastName} ${member[0].firstName}`}
      <img src={member[0].image} />
    </li>
  )
}

export default Strawberry;