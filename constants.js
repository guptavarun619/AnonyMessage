const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const FETCH_MESSAGE = `${BASE_URL}/api/v1/`;
const ADD_USER = `${BASE_URL}/api/v1/user`;
const SEND_MESSAGE = `${BASE_URL}/api/v1/message`;
const GITHUB_USERINFO_API = `https://api.github.com/user/`;
export { SEND_MESSAGE, FETCH_MESSAGE, ADD_USER, GITHUB_USERINFO_API };
