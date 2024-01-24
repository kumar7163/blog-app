import { useState } from "react";
import BlogList from "../../components/home/bloglist";
import Header from "../../components/home/header";
import SearchBar from "../../components/home/searchbar/SearchBar";
import { blogList } from "../../config/data";
import EmptyList from "../../components/common/emptylist";

const Home = ()=>{
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState("");

    // Search submit
    const handleSearchSubmit = (event)=>{
        event.preventDefault();
        handleSearchResults();
    }

    // search for blogs by category

    const handleSearchResults = ()=>{
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog)=>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
        setBlogs(filteredBlogs);
        
    }

    // clear search
    const handleClearSearch = ()=>{
        setBlogs(blogList);
        setSearchKey("");
    }

    return (
        <div>
            {/* page Header */}
            <Header></Header>

            {/* search Bar */}
            <SearchBar value={searchKey} 
            clearSearch={handleClearSearch}
            formSubmit={handleSearchSubmit} 
            handleSearchKey={(e)=>setSearchKey(e.target.value)}></SearchBar>

            {/* Blog list and Empty list */}
            {blogs.length ? <BlogList blogs={blogs} />:<EmptyList/>}
            {/* {blogs.length===0? <img src="/assets/images/13525-empty.gif" />:<BlogList blogs={blogs}></BlogList>} */}
            
        </div>
    )
}

export default Home;