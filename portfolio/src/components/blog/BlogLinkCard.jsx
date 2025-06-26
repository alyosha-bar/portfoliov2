import { Link } from "react-router-dom";
import "../../styles/blog.css"

const BlogLinkCard = ({id, title, description, date}) => {
    return ( 
        <Link className="blog-card" to={`/blog/${id}`}>
            <h2 className="blog-card-title"> {title} </h2>

            <p className="description">
                {description}
            </p>


            <div className="blog-card-bottom">
                <ul className="tags">
                    <li className="tag"> Node JS </li>
                    <li className="tag"> Golang </li>
                </ul>
                <div className="date"> {date.toDate().toDateString()} </div>
            </div>
        </Link>
     );
}
 
export default BlogLinkCard;