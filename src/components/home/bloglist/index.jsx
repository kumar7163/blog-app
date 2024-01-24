import BlogItem from "./blogitem";
import "./styles.css";

const BlogList = ({blogs})=>{

    return (
        <div className="bloglist-wrap">
            {blogs.map(blog=>(
            <BlogItem blog={blog} key={blog.id}/>
            ))}
        
        </div>
    );

}


export default BlogList;