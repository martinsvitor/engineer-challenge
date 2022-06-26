import { useEffect, useState } from 'react';

import searchIcon from './assets/searchicon.svg';
import { getUsers } from './service/user-service';
import { useAppDispatch, useAppSelector } from './hooks';
import { selectParams, setParams } from './features/search/paramsSlice';
import { setPolicies } from './features/search/policiesSlice';

const UserSearch = () => {
  const params = useAppSelector(selectParams);

  let [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  let hasFilter = params.search.length > 0 || false;
  const appliedFilter = hasFilter
    ? `Showing results for '${params.search}' :`
    : false;

  useEffect(() => {
    getUsers(params.search.toUpperCase())
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
        hasFilter = search.length > 0;
        dispatch(setPolicies(response.data));
      })
      .catch((error) =>
        console.log('Error when fetching users from database: ', error)
      );
    setSearch('');
  };
  const clearFilter = () => {
    hasFilter = false;
    getUsers('')
      .then((response) => {
        dispatch(setPolicies(response.data));
        dispatch(setParams(''));
      })
      .catch((error) =>
        console.log('Error when fetching users from database: ' + error)
      );
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex items-center'>
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
      <div className='flex mb-10'>
        <p className='text-sm text-gray-500 px-2 my-3'>{appliedFilter}</p>
        {appliedFilter ? (
          <button className='text-sm' onClick={clearFilter}>
            {' '}
            Remove filter{' '}
          </button>
        ) : null}
      </div>
    </>
  );
};

export default UserSearch;
