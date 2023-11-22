export const getApi = async (url) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const response = await res.json();

  if(!res.ok) {
    throw {error: true};
  }

  return response;
}