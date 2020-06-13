export const QUESTION_ASWERED = 'QUESTION_ASWERED';

export const CORRECT_ANSWER = 'CORRECT_ANSWER';

export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';

export const questionAnswered = (index) => ({
  type: QUESTION_ASWERED,
  loading: true,
  index,
  notAnswered: true,
});

export const correctAnswer = () => ({
  type: CORRECT_ANSWER,
  loading: false,
  notAnswered: false,
});

export const incorrectAnswer = () => ({
  type: INCORRECT_ANSWER,
  loading: false,
  notAnswered: false,
});
