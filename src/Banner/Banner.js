import React , { useState } from 'react'
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from '../Search/Search';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className='banner__search'>
                {showSearch && <Search />}
                <button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </button>
            </div>
            <div className='banner__info'>
                <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
