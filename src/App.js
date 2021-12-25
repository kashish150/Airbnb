import './App.css';
import Home from './Home';
import Header from './Header.js';
import Footer from'./Footer.js';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from'./SearchPage.js';
import { useState } from 'react';
import { SettingsEthernet } from '@material-ui/icons';
function App() {
  const [stdate,setst]=useState('');
  const [etdate,setet]=useState('');
  function setdates(st,et){
setst(st);
setet(et);
console.log(st);
console.log(et);
  }
  return (
    <div>
       <Router>

      <Header />
       <Switch>
        <Route path="/search"><SearchPage st={stdate} et={etdate}/></Route>
        <Route path="/"> <Home setdates={setdates}/></Route>
       </Switch>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
