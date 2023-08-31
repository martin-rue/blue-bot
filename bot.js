import { move, layMine, runRadar } from "./turns.js";
import { readRadar } from "./radar.js";

// commit test
const state = {
  gridSize: 0,
  position: null,
  opponent: null,
  opponentUsedRadar: false,
  mineRemaining: 3,
  turn: 0,
  mines: [],
};

export const start = ({ radar }) => {
  const result = readRadar(radar);
  state.gridSize = result.gridSize;
  state.position = result.position;
};

export const turn = ({ minesRemaining, opponentUsedRadar }) => {
  state.turn += 1;
  state.minesRemaining = minesRemaining;
  state.opponentUsedRadar = opponentUsedRadar;

  state.position.x = Math.floor(Math.random()*10);
  state.position.y = Math.floor(Math.random()*10);

  let prev;

  if((state.position.x, state.position.y) === state.mines) {
    return move(state.position.x, state.position.y);
  }
  else if (opponentUsedRadar) {
    return move(state.position.x, state.position.y);
  }
  else if ((state.turn % 7) === 0) {
    prev=state.turn;
    return runRadar();
  } 
  else if (prev+1===state.turn) {
    return move(opponent);
  }
  else {
    return move(state.position.x, state.position.y);
  }
  
};

export const handleRadar = ({ radar }) => {
  const result = readRadar(radar);
  state.opponent = result.opponent;
  state.mines = result.mines;
};

export const stop = ({ result, turns }) => {
  console.log(`${result} after ${turns} turns`);
};
