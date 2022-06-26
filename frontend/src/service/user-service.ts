import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:4000',
});

export const getUsers = (searchParams: string) => {
  return service.get('/policies?search=' + searchParams);
};
