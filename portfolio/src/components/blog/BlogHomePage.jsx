import { Link } from "react-router-dom";
import BlogLinkCard from "./BlogLinkCard";
import "../../styles/blog.css"

const BlogHomePage = () => {

    // include links (as aesthetic cards) to all blogs sorted by date

    // fetch blogs from some sort of DB (Firebase ??)


    return ( 
        <div>
            <div className="link-container">
                <Link className="back-link" to="/"> Home </Link>
            </div>
            <div className="blog-container">   
                <BlogLinkCard />
                <BlogLinkCard />
                <BlogLinkCard />
                <BlogLinkCard />
                <BlogLinkCard />
                <BlogLinkCard />
            </div>
        </div>
     );
}
 
export default BlogHomePage;