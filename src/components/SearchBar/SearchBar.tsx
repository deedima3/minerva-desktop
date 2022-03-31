import { FileAddOutlined, SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
    return(
        <div className="flex mt-8">
          <input type="search" className="p-2 bg-brand-black-secondary text-white focus: outline-none"></input>
          <button className="bg-brand-primary w-10 flex items-center justify-center">
            <SearchOutlined sizes="20px"/>
          </button>
        </div>
    )
}

export default SearchBar;
