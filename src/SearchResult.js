import React from 'react';
import './searchresult.css';
function SearchResult(props){
    return <div className="searchResult">
     <img src={props.src}/>
     <div className="searchresultinfo">
      <div className="searchresultinfotop">
        <p>{props.location}</p>
      </div>
      <div className="searchresultinfobottom">
       <p>{props.s}</p>
       <p>{props.p}</p>
      </div></div>
    </div>
}export default SearchResult;
