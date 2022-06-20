import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:4000',
});

export const getUsers = (searchParams: string) => {
  return service.get('/policies?search=' + searchParams);
};
// const getUsers = (searchParams: string) => {
//   if(!searchParams) {
//     return fetch('http://localhost:4000/policies')
//   }
//   return fetch('http://localhost:4000/policies?search=' + searchParams)
// }

// export { getUsers };
