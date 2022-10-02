import { useState } from 'react';
import './App.css';
import FlatRubick from './Componants/FlatRubick';
const Cube = require('cubejs');

function App() {
  Cube.initSolver();

  const [randomCube, setRandomCube] = useState(Cube.random());
  const [cubeSolve, setCubeSolve] = useState(Cube.inverse(randomCube.solve()));

  // const randomCube = Cube.random();
  const randomCubeScramble = randomCube.asString().split("");
  const randomCubeMatrix = [];

  while (randomCubeScramble.length) {
    randomCubeMatrix.push(randomCubeScramble.splice(0, 9));
  }

  const randomizeCube = () => {
    setRandomCube(Cube.random());
    setCubeSolve(Cube.inverse(randomCube.solve()));
    console.log("my random cube scramble", cubeSolve);
  }

  return (
    <div className='bg-slate-400 flex flex-col items-center justify-center h-screen'>
      <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout w-80 h-60'>
        <FlatRubick pattern={randomCubeMatrix} />
      </div>

      <div className='flex flex-row flex-wrap w-80 justify-center m-3'>
        {
          cubeSolve.split(" ").map(
            (move, index) =>
              <div className='m-1 font-bold' key={index}>
                {move}
              </div>
          )
        }
      </div>


      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={randomizeCube}>Scramble!
      </button>

    </div>
  );
}

export default App;
