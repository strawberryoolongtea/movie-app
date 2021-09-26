import Strawberry from "./Strawberry";
import datas from './data';

function App() {
  return (
    <section>
      <h1>Hello World! 🔮</h1>
      <ul>
        {datas.map(hypnosismic => <Strawberry id={hypnosismic.id} division={hypnosismic.division} color={hypnosismic.color} member={hypnosismic.member} />)}
      </ul>
      {/* <Strawberry division={datas[0].division} />
      <Strawberry division={datas[1].division} />
      <Strawberry division={datas[2].division} />
      <Strawberry division={datas[3].division} /> */}
    </section>
  );
}

export default App;
