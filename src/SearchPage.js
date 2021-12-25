import React from 'react';
import './Searchpage.css';
import SearchResult from "./SearchResult.js" 

function SearchPage(props){ 
    return <div className="searchpage">
    <div className="searchpage__i">
     <h1>Flexible Plans</h1>
     <button>Cancellation Flex</button><button>Type Of Place</button><button>Price</button><button>Rooms And Beds</button><button>More Filters</button>
    <SearchResult src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" location="Bengaluru" s={new Date(props.st).toString()} p="Rs 7,124"/>
    <SearchResult src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80" location="Bengaluru" s={new Date(props.st).toString()} p="Rs 7,124"/>
    <SearchResult src="https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" location="Noida" s={new Date(props.st).toString()} p="Rs 10,124"/>
    <SearchResult  src="https://images.unsplash.com/photo-1519449556851-5720b33024e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" location="Mumbai" s={new Date(props.st).toString()} p="Rs 8,124"/>
    <SearchResult src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"  location="gurgaon"  s={new Date(props.st).toString()} p="Rs 2,124"/>
    </div>
</div>
}
export default SearchPage;