export const START_TIMER = 'START_TIMER';

export const CHANGE_TIMER = 'CHANGE_TIMER';

export const RESET_TIMER = 'RESET_TIMER';

export const startTimer = (id) => ({
  type: START_TIMER,
  id,
});

export const changeTimer = () => ({
  type: CHANGE_TIMER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
  time: 30,
});
