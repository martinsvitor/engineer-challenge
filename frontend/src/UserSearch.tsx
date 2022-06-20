import React, { useEffect, useState } from 'react';

import { getUsers } from './service/user-service';
import { useAppSelector, useAppDispatch } from './hooks';
import { setParams, selectParams } from './features/search/paramsSlice';
// import { createSearchParams, useNavigate } from 'react-router-dom';
import { useGetDelayedPoliciesMutation, useGetPoliciesQuery } from './service/policies';
import { setPolicies, selectPolicies } from './features/search/policiesSlice';

const UserSearch = () => {
  // let [searchParams, setSearchParams] = useSearchParams();
  let [search, setSearch] = useState('');
  let [user, setUsers] = useState([]);
  const dispatch = useAppDispatch();
  const params = useAppSelector(selectParams);
  const [triggerFetch] = useGetDelayedPoliciesMutation()
  
  // const { data, error, isLoading} = useGetPoliciesQuery(`${params.search}`)
  
  // console.log(`${createSearchParams(params)}`)
  // useEffect(() => {
    
    // dispatch(setParams(search))
  //   console.log(params, 'state from redux inside useEffect')
  // }, [dispatch, params])
  // console.log(result)
  
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const result = await triggerFetch(search)
    console.log(result, 'await return', search)
    dispatch(setParams(search))
    // getUsers(search)
    //   .then((response) => console.log(response, 'axios call'))
    //   .catch((error) =>
    //     console.log('Error when fetching users from database: ' + error)
    //   );
    setSearch('');
  
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='search'
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default UserSearch;
