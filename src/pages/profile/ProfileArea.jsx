// import useConnectionRequest from '../hooks/useConnect';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ProfileArea = ({user}) => {
//  const handleConnect = () => {
//     sendConnectionRequest(user._id); 
//   };
//  const navigate = useNa
//   const messagePage=()=>{

//   }
  // const handleConnect = async () => {
  //   // setLoading(true);
  //   sendConnectionReq("6693762c0d359e31d79bfa66", receiverId);
  //   // setLoading(false);
  // };

  return (
    <div className='p-4 h-screen'>    
      {user && (
      <div className='bg-white  w-[1000px] rounded-lg'>
        <div className="pb-12">
        <img width={400} height={400} 
        src={user.banner} 
        className='w-full relative rounded-t-lg '
        alt={`${user.fullName}'s banner`} />
        <img 
        
        src={user.profilePic} 
        className='rounded-full absolute top-56 ml-10 h-40 w-40 '
        alt={`${user.userName}'s profile`} />
</div>
<div className="p-4 flex flex-col gap-2">
   <h2 className='text-2xl font-semibold'>{user.userName}</h2>
        <p className=''>{user.bio}</p>
        <div className="flex gap-2">
        <span className='text-gray'>{user.location}</span>
        <button className='text-blue font-semibold'>Contact info</button>
        </div>
<div className="flex gap-2 ">
  {/* {
    status?.status === "accepted" ? ( */}
  <Link to={`/messaging/${user._id}`}>
         <button 
         className='bg-blue text-white p-1  rounded-3xl w-24 flex items-center justify-center'>
             Message     
           </button>
           </Link>
    {/* ):( */}
      <button
      // onClick={handleConnectReq}
      className={`${ "bg-blue"
      } text-white p-1 rounded-3xl w-24 flex items-center justify-center`}
    >   
         Connect
         </button>
        <button className='bg-white text-blue border-[1px] p-1 w-24 rounded-3xl'>follow</button>
      <button className='bg-white text-gray p-1 border-[1px] rounded-3xl w-20'>more</button>
     </div>
    </div>
       
  
      </div>
    )}</div>
  )
}

export default ProfileArea