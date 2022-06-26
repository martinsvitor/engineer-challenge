import { useNavigate, useParams } from 'react-router-dom';
import DetailCard from './DetailCard';
import { selectPolicies } from './features/search/policiesSlice';
import { useAppSelector } from './hooks';


const SinglePolicy = () => {
  const navigate = useNavigate();
  const { lastName } = useParams();
  const [policy] = useAppSelector(selectPolicies).filter(
    (pol) => pol.customer.lastName === lastName
  );

  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden rounded-lg shadow-sm'>
            <div className='min-w-full'>
              <button
                className='w-20 h-11 flex items-center justify-center px-4 py-3 my-5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700'
                onClick={() => navigate('/')}
              >
                {' '}
                Back{' '}
              </button>
              <div className='border-b bg-gray-100 flex text-center justify-center rounded-md'>
                <h2 className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                  Details
                </h2>
              </div>
              <div className='flex flex-initial min-w-full wrap'>
                <DetailCard policy={policy} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePolicy;
