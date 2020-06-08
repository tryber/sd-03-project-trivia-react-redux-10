export const getToken = () => fetch('https://opentdb.com/api_token.php?command=request')
  .then((response) => response.json()
  .then((json) => (response.response_code === 0 ? Promise.resolve(json) : Promise.reject(json))));

// const BASE_URL = 'https://opentdb.com/api.php?amount=5';

export const getAllTrivia = (token) => fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
  .then((response) => response.json()
  .then((json) => (response.response_code === 0 ? Promise.resolve(json) : Promise.reject(json))));
