import { Link } from "react-router-dom";
import "../../styles/blog.css"

const BlogLinkCard = () => {
    return ( 
        <Link className="blog-card" to="/blog/2">
            <h2 className="blog-card-title"> Blog Title! </h2>

            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eos dicta illo quis aspernatur quam ab quo vitae, numquam hic. Non, dolorem.
            </p>


            <div className="blog-card-bottom">
                <ul className="tags">
                    <li className="tag"> Node JS </li>
                    <li className="tag"> Golang </li>
                </ul>
                <div className="date"> 12.04.2025 </div>
            </div>
        </Link>
     );
}
 
export default BlogLinkCard;