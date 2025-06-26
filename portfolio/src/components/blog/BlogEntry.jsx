import { Link } from "react-router-dom";
import "../../styles/blog.css"

const BlogEntry = () => {
    return ( 
        <>
        <div className="link-container">
            <Link className="back-link" to="/blog"> Back </Link>
        </div>    
        <div className="blog-entry">
            <div className="title-section">
                <h1> Main Title </h1>
                <h3> Subtitle blah blah blah </h3>
                <p> Date or some shit </p>
            </div>
            <div className="text-block-one">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt quasi natus dignissimos magni itaque incidunt, porro recusandae labore dolor similique quo adipisci non optio hic iusto repudiandae error, ducimus vitae tenetur sequi voluptates sit illum asperiores. Voluptatum, hic voluptatibus!</p>
            </div>
            <div className="image-part">
                <img src="" alt="" />
            </div>
            <div className="text-block-two">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, doloribus. Aliquam, autem quas cumque sint modi laborum? Similique perferendis ex quasi sed animi consequuntur sint architecto dolor dolores voluptates ratione ducimus officia in deleniti nemo, nesciunt corrupti numquam, quaerat quos dolorum deserunt? Facere reiciendis totam autem voluptas obcaecati nostrum delectus!</p>
            </div>
        </div>
        </>
    );
}
 
export default BlogEntry;