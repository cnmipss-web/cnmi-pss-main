import axios from 'axios';

export async function getToken({
  host, username, password, secure,
}) {
  const protocol = secure ? 'https' : 'http';
  const result = await axios.post(`${protocol}://${host}/wp-json/jwt-auth/v1/token`, { username, password }, { headers: { 'Content-Type': 'application/json' } }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
  return result.data;
}

export default {};
