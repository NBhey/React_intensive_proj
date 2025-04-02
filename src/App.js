import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {LogState} from './Providers/LogState';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Book from './components/Book/Book.jsx';
import History from './pages/History/History.jsx';
import SearchPage from './pages/SearchPage/SearchPage.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>

    <LogState>
      <Router>
      <Header/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path='/SignInPage' element = {<SignInPage/>}/>
          <Route path='/SignUpPage' element = {<SignUpPage/>}/>
          <Route path='/book/:id' element={<Book/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          
        </Routes>
      </Router>
    </LogState>
    </Provider>
  )}
  
export default App;
