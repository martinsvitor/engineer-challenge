import TableRow from './TableRow';

import { useAppSelector } from './hooks';
import { selectPolicies } from './features/search/policiesSlice';

const Table = () => {

  const policies = useAppSelector(selectPolicies);
  console.log(policies, 'state from policies');

  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden rounded-lg shadow-sm'>
            <table className='min-w-full'>
              <thead className='border-b bg-gray-100'>
                <tr>
                  <th
                    scope='col'
                    className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    #
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Provider
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Type
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {policies.length === 0
                  ? 'No data found'
                  : policies
                      .map((policy: any, id) => (
                      <TableRow key={policy.id} policy={policy} id={id} />
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
