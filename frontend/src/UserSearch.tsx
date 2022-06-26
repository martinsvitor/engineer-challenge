import { useEffect, useState } from 'react';

import searchIcon from './assets/searchicon.svg';
import { getUsers } from './service/user-service';
import { useAppDispatch } from './hooks';
import { setParams } from './features/search/paramsSlice';
import { setPolicies } from './features/search/policiesSlice';

const UserSearch = () => {

  let [search, setSearch] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUsers(search.toUpperCase())
      .then((response) => {
        dispatch(setPolicies(response.data));
      })
      .catch((error) =>
        console.log('Error when fetching users from database: ' + error)
      );
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    dispatch(setParams(search));
    getUsers(search.toUpperCase())
      .then((response) => {
        dispatch(setPolicies(response.data));
      })
      .catch((error) =>
        console.log('Error when fetching users from database: ', error)
      );
    setSearch('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex items-center mb-10'>
        <input
          className='block bg-white w-2/5 border h-11 border-slate-300 rounded-l-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus: border-gray-600 sm:text-sm'
          type='search'
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p className=' text-center text-base font-medium text-gray-500'>
          <button
            className='w-20 h-11 flex items-center justify-center px-4 py-3 border border-transparent rounded-r-lg shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700'
            type='submit'
          >
            <img
              className='h-2 w-auto sm:h-4'
              src={searchIcon}
              alt='Magnifying glass'
            />
          </button>
        </p>
      </form>
    </>
  );
};

export default UserSearch;
