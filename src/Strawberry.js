// import datas from "./data";
import './Strawberry.css';

function Strawberry({ division, member }) {
  // console.log(datas);
  return (
    <li>
      <span>{`${division} division`}</span>
      <img src={member[0].image} alt={member[0].firstName} />
      <img src={member[1].image} alt={member[1].firstName} />
      <img src={member[2].image} alt={member[2].firstName} />
    </li>
  )
}

export default Strawberry;