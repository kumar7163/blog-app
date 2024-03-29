import { eventWrapper } from "@testing-library/user-event/dist/utils";
import "./styles.css";

function SearchBar({value, handleSearchKey, clearSearch, formSubmit}){

    return (
        <div className="searchbar-wrap">
            <form onSubmit={formSubmit}>
                <input type="text" onChange={handleSearchKey} 
                placeholder="Search by category" value={value}/>
                {value && <span onClick={clearSearch}>X</span>}
                <button>Go</button>
            </form>

            
        </div>

    );
}

export default SearchBar;
