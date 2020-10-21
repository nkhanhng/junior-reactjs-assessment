import { callApi } from 'utils/api';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'https://api.opendota.com';

export async function fetchHeroes() {
  try {
    const data = await callApi('get', API_ENDPOINT, '/heroStats');
    const convertedData = data.map((result) => Object.assign(result, { key: result.id }));
    localStorage.setItem('data', JSON.stringify(convertedData));
    return convertedData;
  } catch (error) {
    return [];
  }
}
