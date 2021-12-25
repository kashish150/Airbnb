import React from 'react';
import './Header.css';
import SearchIcon  from '@material-ui/icons/Search';
import {Link} from "react-router-dom";
function Header() {
  
    return (<div className="wrapheader">
      
      <div className="header">
       <div>
         <Link to="/"><img className="headericon" src="data:image/jpeg;base64,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"/></Link> </div>    
       <div className="header__center"><input type="text"/><SearchIcon/></div>
       <div className="header_right ">
           <p>Become a host</p>
           <img className="headeriicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofExdddhjjl3BvdukM8RrbnOEGcvIGckAPOEGz_Pm3SLtrMNmrWQI6oFzcgR0xAuXYf8&usqp=CAU"/>
           <img className="headeriicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOX4mkcW8pH9FbpI9rTBkokiMxSY2GJ3eyw&usqp=CAU"/>
            </div>
      </div>
     
      </div>
    );
  }
  
  export default Header;
  