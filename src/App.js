import Strawberry from "./Strawberry";
import datas from './data';

function App() {
  return (
    <section>
      <ul>
        {datas.map(hypnosismic => <Strawberry key={hypnosismic.id} division={hypnosismic.division} member={hypnosismic.member} />)}
      </ul>
    </section>
  );
}

export default App;
