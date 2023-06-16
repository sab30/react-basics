import './search-box.styles.css'

const SearchBox=  ( {onSearchChange }) => (


            <input
                className='search-box monsters-search-box'
                type='search'
                placeholder='Search Monsters'
                onChange={onSearchChange}
            />
        
    
)

export default SearchBox;