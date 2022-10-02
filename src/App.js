import './App.css';
import FlatRubick from './Componants/FlatRubick';
const Cube = require('cubejs');
const shuffle = str => [...str].sort(() => Math.random() - .5).join('');
const str = "UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB";
const faces = ['U', 'R', 'F', 'D', 'L', 'B'];
const colors = ['white', 'red-600', 'green-700', 'yellow-300', 'orange-500', 'blue-600'];

function App() {
  const utilArr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  // Cube.initSolver();
  // console.log(str.length);
  const randomCube = Cube.random();
  const randomCubeScramble = randomCube.asString().split("");
  const randomCubeMatrix = [];
  while (randomCubeScramble.length) {
    randomCubeMatrix.push(randomCubeScramble.splice(0, 9));
  }

  console.log(colors[faces.indexOf(randomCubeMatrix[0][0])]);
  console.log(randomCubeMatrix);

  // const cube = new Cube();
  // console.log("cube as strign ", cube.asString());
  // console.log("random cube as string", randomCube.asString());
  // console.log("my random cube scramble", Cube.inverse(randomCube.solve()));
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout w-80 h-60'>
        <FlatRubick pattern={randomCubeMatrix} />
      </div>
    </div>
  );
}

export default App;
