import Navbar from './Navbar';
import Header from './Header';
import Table from './Table';
import './index.css';
import { selectParams, setParams } from './features/search/paramsSlice';
import { useAppDispatch, useAppSelector } from './hooks';
import { getUsers } from './service/user-service';
import { setPolicies } from './features/search/policiesSlice';


const App = () => {
  const params = useAppSelector(selectParams);
  const dispatch = useAppDispatch();
  const clearFilter = () => {
    getUsers('')
      .then((response) => {
        dispatch(setPolicies(response.data));
        dispatch(setParams(''))
      })
      .catch((error) =>
        console.log('Error when fetching users from database: ' + error)
      );
  };

  const appliedFilter =
    params.search.length > 0
      ? `Showing results for '${params.search}' :`
      : false;
  return (
    <div>
      <Navbar />
      <div className='w-full p-8'>
        <Header />
        <div className='flex'>
          <p className='text-sm text-gray-500 px-2 my-3'>{appliedFilter}</p>
          {appliedFilter ? (
            <button onClick={clearFilter}> Remove filter </button>
          ) : null}
        </div>
        <Table />
      </div>
    </div>
  );
};

export default App;
