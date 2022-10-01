import './App.css';
const Cube = require('cubejs');
const shuffle = str => [...str].sort(() => Math.random() - .5).join('');
const str = "UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB";

function App() {
  const utilArr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  Cube.initSolver();
  console.log(str.length);
  const randomCube = Cube.random();
  const cube = new Cube();
  console.log("cube as strign ", cube.asString());
  console.log("random cube as string", randomCube.asString());
  console.log("my random cube scramble", Cube.inverse(randomCube.solve()));
  return (
    <div className='flex items-center justify-center h-screen'>

      <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout w-80 h-60'>
        <div className='grid-in-faceD w-auto h-auto  grid grid-cols-3 grid-rows-3'>
          {utilArr.map((cell, index) =>
            <div key={index} className='m-[1px] bg-yellow-300 border border-black'></div>
          )}
        </div>
        <div className='grid-in-faceR w-auto h-auto  grid grid-cols-3 grid-rows-3'>
          {utilArr.map((cell, index) =>
            <div key={index} className='m-[1px] bg-red-600 border border-black'></div>
          )}
        </div>
        <div className='grid-in-faceL w-auto h-auto  grid grid-cols-3 grid-rows-3'>
          {utilArr.map((cell, index) =>
            <div key={index} className='m-[1px] bg-orange-500 border border-black'></div>
          )}
        </div>
        <div className='grid-in-faceF w-auto h-auto  grid grid-cols-3 grid-rows-3'>
          {utilArr.map((cell, index) =>
            <div key={index} className='m-[1px] bg-green-700 border border-black'></div>
          )}
        </div>
        <div className='grid-in-faceB w-auto h-auto  grid grid-cols-3 grid-rows-3'>
          {utilArr.map((cell, index) =>
            <div key={index} className='m-[1px] bg-blue-600 border border-black'></div>
          )}
        </div>
        <div className='grid-in-faceU w-auto h-auto  grid grid-cols-3 grid-rows-3'>
          {utilArr.map((cell, index) =>
            <div key={index} className='m-[1px] bg-white border border-black'></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
