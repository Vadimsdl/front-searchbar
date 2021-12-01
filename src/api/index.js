import axios from 'axios';

const ENDPOINT = 'https://swapi.dev/api';

export async function getPersonages(name) {
  return await axios.get(`${ENDPOINT}/people/?search=${name}`);
}
