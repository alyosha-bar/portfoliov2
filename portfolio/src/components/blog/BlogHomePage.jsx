import { Link } from "react-router-dom";
import BlogLinkCard from "./BlogLinkCard";
import "../../styles/blog.css"
import { db } from "../../firebase/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";

const BlogHomePage = () => {

    // include links (as aesthetic cards) to all blogs sorted by date



    // fetch blogs from some sort of DB (Firebase ??)

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        const querySnapshot = await getDocs(collection(db, 'blogs')); // 'blogs' is your collection name
        const blogData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogData);
      };
  
      fetchBlogs();
    }, []);


    return ( 
        <div>
            <div className="link-container">
                <Link className="back-link" to="/"> Home </Link>
            </div>
            <div className="blog-container">  
                {blogs.map(blog => (
                    <BlogLinkCard 
                        key={blog.id} 
                        id={blog.id} 
                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                    />
                ))} 
            </div>
        </div>
     );
}
 
export default BlogHomePage;