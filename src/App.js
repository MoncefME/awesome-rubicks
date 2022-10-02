import './App.css';
import Face from './Componants/Face';
import FlatRubick from './Componants/FlatRubick';
import Piece from './Componants/Piece';
const Cube = require('cubejs');
const shuffle = str => [...str].sort(() => Math.random() - .5).join('');
const str = "UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB";
const faces = ['U', 'R', 'F', 'D', 'L', 'B'];

function App() {
  const utilArr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  // Cube.initSolver();
  // console.log(str.length);
  // const randomCube = Cube.random();
  // const cube = new Cube();
  // console.log("cube as strign ", cube.asString());
  // console.log("random cube as string", randomCube.asString());
  // console.log("my random cube scramble", Cube.inverse(randomCube.solve()));
  return (
    <div className='flex items-center justify-center h-screen'>

      <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout w-80 h-60'>
        <FlatRubick />
      </div>
    </div>
  );
}

export default App;
