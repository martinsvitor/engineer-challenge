import { useEffect, useState } from 'react';
import Badge from './Badge'; // remove if works
import TableRow from './TableRow';

import { useAppSelector } from './hooks';
import { selectParams } from './features/search/paramsSlice';
import { useGetPoliciesQuery } from './service/policies';

const Table = () => {
  // const [policies, setPolicies] = useState([]);

  const params = useAppSelector(selectParams);

  // const result = triggerFetch(params.search);
  // console.log(result, 'result on table component');

  const { data, error, isLoading } = useGetPoliciesQuery(`${params.search}`);

  // if(data.length > 0) {
  //   data.map(policy => {
  //     return(
  //       <TableRow key={policy.id} policy={policy} />
  //     )
  //   })
  // }
  // console.log(policies, data)
  console.log(data, 'data on Table Component');


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
                {isLoading
                  ? 'Fetching data'
                  : error
                  ? 'An error has occurred'
                  : data && data?.map((policy: any) => <TableRow key={policy.id} policy={policy} />)}

                <tr className='border-b'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    1
                  </td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    Brandy Harbour
                  </td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    BARMER
                  </td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    Liability
                  </td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    <Badge status='PENDING' />
                  </td>
                </tr>

                <tr className='border-b'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    1
                  </td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    Ailina Harber
                  </td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    BARMER
                  </td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    Liability
                  </td>
                  <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                    <Badge status='CANCELLED' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
