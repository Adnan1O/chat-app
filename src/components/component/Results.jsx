import { useNavigate } from 'react-router-dom';

const Result = ({closePopup, results, error, loading }) => {
 
  const nnavigate = useNavigate();

  const navigate =(id)=>{
   
    nnavigate(`profile/${id}`)
    //  closePopup()
  }

  return (
    <div className='relative shadow w-[400px] p-4 z-50'>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-600'>{error}</p>}
      <div className='space-y-2'>
        {results?.map((user) => (
          <div key={user._id} 
          onClick={()=>navigate(user._id)}
          className='flex items-center gap-4 bg-white p-2 rounded
           cursor-pointer hover:bg-sky-50 transition ease-in duration-200'>
            <img
              src={user.profilePic}
              alt={`${user.fullName}'s profile`}
              className='w-12 h-12 object-cover rounded-full'
              width={20}
              height={20}
            />
            <div>
              <h3 className='text-lg font-semibold'>{user.fullName}</h3>
              <p className='text-sm text-gray-600'>{user.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
