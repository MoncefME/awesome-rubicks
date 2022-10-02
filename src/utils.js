export const shuffle = (str) => {
    [...str].sort(() => Math.random() - .5).join('')
}


  // console.log(colors[faces.indexOf(randomCubeMatrix[0][0])]);
  // console.log(randomCubeMatrix);
  // const cube = new Cube();
  // console.log("cube as strign ", cube.asString());
  // console.log("random cube as string", randomCube.asString());
  // console.log("my random cube scramble", Cube.inverse(randomCube.solve()));