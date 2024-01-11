import React from 'react';
import useDebounce from '../../hook/CustomHooks';



function Search({setkey}) {
    function change(e) {
        const value = e.target.value
        setkey(value)   
        console.log(value)
    }
    const valueDebounce = useDebounce(change,1000)
    return (
            <div>
            <div className="search">
                <form action="">
                    <input type="text" placeholder='search' onChange={valueDebounce}/>
                    <button>Search</button>
                </form>
            </div>
        </div>
        
       
    );
}

export default Search;