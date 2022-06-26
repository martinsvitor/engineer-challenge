import Badge from './Badge';

const DetailCard = ({ policy }: any) => {
  return (
    <div className='border-b min-w-full flex-row flex-wrap items-center mx-10 my-10 rounded shadow-sm'>
      <div className='flex flex-row items-center justify-center text-center border-b-2 border-gray-100'>
        <h3 className='flex-1 w-50 text-sm font-medium text-gray-900 px-6 py-4 text-left'>
          POLICY ID
        </h3>
        <p className='flex-1 px-10 py-4 text-sm font-medium text-gray-900 text-left justify-center'>
          {policy.id ? policy.id : 'No data yet'}
        </p>
      </div>
      <div className='flex flex-row items-center justify-center text-center border-b-2 border-gray-100'>
        <h3 className='flex-1 w-50 text-sm font-medium text-gray-900 px-6 py-4 text-left'>
          POLICY OWNER
        </h3>
        <p className='flex-1 px-10 py-4 text-sm font-medium text-gray-900 text-left justify-center'>
          {policy.customer
            ? `${policy.customer.firstName} ${policy.customer.lastName}`
            : 'No data yet'}
        </p>
      </div>
      <div className='flex flex-row items-center justify-center text-center border-b-2 border-gray-100'>
        <h3 className='flex-1 w-50 text-sm font-medium text-gray-900 px-6 py-4 text-left'>
          POLICY STATUS
        </h3>
        <p className='flex-1 px-10 py-4 text-sm font-medium text-gray-900 text-left justify-center'>
          {policy.status ? <Badge status={policy.status} /> : 'No data yet'}
        </p>
      </div>
      <div className='flex flex-row items-center justify-center text-center border-b-2 border-gray-100'>
        <h3 className='flex-1 w-50 text-sm font-medium text-gray-900 px-6 py-4 text-left'>
          INSURANCE TYPE
        </h3>
        <p className='flex-1 px-10 py-4 text-sm font-medium text-gray-900 text-left'>
          {policy.id
            ? `${
                policy?.insuranceType.charAt(0) +
                policy.insuranceType.slice(1).toLowerCase()
              }`
            : 'No data yet'}
        </p>
      </div>
      <div className='flex flex-row items-center justify-center text-center border-b-2 border-gray-100'>
        <h3 className='flex-1 w-50 text-sm font-medium text-gray-900 px-6 py-4 text-left'>
          INSURANCE PROVIDER
        </h3>
        <p className='flex-1 px-10 py-4 text-sm font-medium text-gray-900 text-left justify-center'>
          {policy.status ? policy.provider : 'No data yet'}
        </p>
      </div>
      {policy.customer.family ? (
        policy.customer.family.map((member: any) => (
          <div className='flex flex-row items-center justify-center text-center border-b-2 border-gray-100'>
            <h3 className='flex-1 w-100 text-sm font-medium text-gray-900 px-6 py-4 text-left'>
              FAMILY MEMBER
            </h3>
            <p className='flex-1 px-10 py-4 text-sm font-medium text-gray-900 text-left justify-center'>
              {member.firstName
                ? `${member.firstName} ${member.lastName}`
                : 'No data yet'}
            </p>
          </div>
        ))
      ) : (
        <p>'No family Members'</p>
      )}
    </div>
  );
};

export default DetailCard;
