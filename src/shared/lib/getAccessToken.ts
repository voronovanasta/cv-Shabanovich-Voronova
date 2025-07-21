export function getAccessToken(): string {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('Access token is missing');
  }
  return token;
}
