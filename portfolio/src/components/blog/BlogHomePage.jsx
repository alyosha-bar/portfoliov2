import { Link } from "react-router-dom";
import BlogLinkCard from "./BlogLinkCard";


const BlogHomePage = () => {

    // include links (as aesthetic cards) to all blogs sorted by date

    // fetch blogs from some sort of DB (Firebase ??)


    return ( 
        <div>
            <BlogLinkCard />
            <BlogLinkCard />
            <BlogLinkCard />
            <BlogLinkCard />
            <BlogLinkCard />
            <BlogLinkCard />
            <Link to="/"> Home </Link>
        </div>
     );
}
 
export default BlogHomePage;