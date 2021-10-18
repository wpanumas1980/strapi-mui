import React,{useEffect} from 'react'
import axios from '../../config/axios';

export default function Profile  () {
   // console.log(search);
   useEffect(() => {
    const fetchProfile = async () => {
      // const res = await axios.get(`${BASE_URL}/posts`);
      const res = await axios.get(`/posts/me`);
      console.log(res);
      
    }
    fetchProfile();
  }, []);


  return (
      <div>
          Profiles
      </div>
  )
}
