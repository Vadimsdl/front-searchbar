const ENDPOINT = 'https://swapi.dev/api';

export async function getPersonages(name) {
  return await fetch(`${ENDPOINT}/people/?search=${name}`, {method: 'GET'}).then(rep => rep.json());
}
