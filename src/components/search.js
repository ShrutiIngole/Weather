const SearchBar = () => {
    const handleClick = (e) => {
        console.log(document.getElementById('city').value)
    }
    return(
        <span id="searchbar">
            <input type="text" placeholder="Enter City" id="city" /><button onClick={e=>handleClick(e)}>Search</button>
        </span>
    )
}

export default SearchBar;