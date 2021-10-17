import {useState,useEffect} from 'react';
import axios from '../../config/axios';

export default function Home() {

    const [posts, setPosts] = useState([]);
    // console.log(search);
    useEffect(() => {
      const fetchPost = async () => {
        // const res = await axios.get(`${BASE_URL}/posts`);
        const res = await axios.get(`/posts`);
        setPosts(res.data);
      }
      fetchPost();
    }, []);
  
    console.log(posts);

    return (
        <div>
            Home
        </div>
    )
}
