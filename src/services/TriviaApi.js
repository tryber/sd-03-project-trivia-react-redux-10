const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';

const getToken = () => fetch(TOKEN_URL)
  .then((response) => response.json()
  .then((json) => (response.response_code === 0 ? Promise.resolve(json) : Promise.reject(json))));

// const BASE_URL = 'https://opentdb.com/api.php?amount=5';

export default getToken;
