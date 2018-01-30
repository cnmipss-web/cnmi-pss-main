import axios from 'axios';

export async function getToken({ host, username, password }) {
  const result = await axios.post(`http://${host}/wp-json/jwt-auth/v1/token`, { username, password }, { headers: { 'Content-Type': 'application/json' } });
  return result.data;
}

export default {};
