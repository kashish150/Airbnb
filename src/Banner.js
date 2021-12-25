import React, { useState } from 'react';
import './Banner.css';
import Search from './Search.js';
import {Link} from "react-router-dom";
function Banner(props) {
    const [showSearch,SetshowSearch]=useState(false);
  return (
    <div className="banner">
        <div className="banner_search">
            {showSearch && <Search setdates={props.setdates}/>}
            <button onClick={()=>{
                SetshowSearch(!showSearch)
            }} className="bannersearchbtn">Search Dates</button>
        </div>
   <div className="banner_info">
   <h1>Get out and stretch your imagination</h1>
<h5>Plan a different kind of gateway to uncober the hidden gems near you.</h5>
<Link to="/search"><button className="bannerbutton" >Explore Nearby</button></Link>
   </div>
  
    </div>
  );
}

export default Banner;
