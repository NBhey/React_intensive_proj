import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {LogState} from './Providers/LogState';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <LogState>
      
      <Router>
      <Header/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path='/SignInPage' element = {<SignInPage/>}/>
          <Route path='/SignUpPage' element = {<SignUpPage/>}/>
        </Routes>
      </Router>
    </LogState>

export default App;
