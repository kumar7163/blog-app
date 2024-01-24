import { Link } from "react-router-dom";
import Chip from "../../../common/chip";
import "./styles.css";
import { FaArrowRight } from "react-icons/fa";

const BlogItem = ({
    blog:{
        id, description, title, createdAt, 
        authorName, authorAvatar, category, cover}
    })=>{

    return (
        <div className="blogitem-wrap">
            <img src={cover} alt="cover" className="blogitem-cover"/>
            <Chip label={category}/>
            <h3>{title}</h3>
            <p className="blogitem-desc">{description}</p>
            <footer>
                <div className="blogitem-author">
                    <img src={authorAvatar} alt="Avatar" />
                    <div>
                        <h6>{authorName}</h6>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <Link className="blogitem-link" to={`/blog/${id}`}><FaArrowRight /></Link>
            </footer>           
        </div>
    );

}


export default BlogItem;