import { useEffect, useState } from 'react';
import ProfileArea from './ProfileArea';
// import useConnectionRequest from '../hooks/useConnect';
import { useParams } from 'react-router-dom';

const ProfileId = () => {
    let { userId } = useParams()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  // const { fetchConnectionStatus, status } = useConnectionRequest();
  useEffect(() => {
    console.log(userId)
    const fetchUserDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:5000/api/users/user-details/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const data = await response.json();
        console.log(data[0])
        setUser(data.user);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
    
  }, [userId]);


  return (
    <div className='flex items-center justify-center'>
    {user && <ProfileArea user={user}  />}
    </div>
  );
};

export default ProfileId;
