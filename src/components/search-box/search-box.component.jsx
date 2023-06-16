import { Component } from 'react';
import './search-box.styles.css'

class SearchBox extends Component {

    render() {

        const { onSearchChange } = this.props;

        return (

            <input
                className='search-box monsters-search-box'
                type='search'
                placeholder='Search Monsters'
                onChange={onSearchChange}
            />
        )
    }
}

export default SearchBox;