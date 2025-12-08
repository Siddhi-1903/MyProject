
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import Hero from './LandingPage/Hero';
import Navbar from './LandingPage/Navbar';
import TopBar from './LandingPage/Topbar';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import PageNotFound from './PageNotFound';
import LandingPage from './LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}>
            <Route path='/Hero' element={<Hero></Hero>}></Route>
            <Route path='/LoginPage' element={<LoginPage />} />
             <Route path='/LoginPageAdmin' element={<LoginPage />} />
            
            <Route path='/RegistrationPage' element={<RegistrationPage />} />


            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      <RegistrationPage></RegistrationPage>


      
      */}
