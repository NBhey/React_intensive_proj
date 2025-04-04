import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {LogState} from './Providers/LogState';
import {Provider} from 'react-redux'
import { store } from './store/store';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import BookPage from './pages/BookPage/BookPage.jsx';
import History from './pages/History/History.jsx';
import SearchPage from './pages/SearchPage/SearchPage.jsx';
import Favorites from './pages/Favorites/Favorites';
import { resources } from './resources/resourses.js';


function App() {
  return (
    <div className='App'>

    <Provider store={store}>
    <LogState>
      <Router>
      <Header/>
        <Routes>
          <Route path = '/' element = {<Home tittle={resources.pages.home.tittle}/>}/>
          <Route path='/SignInPage' element = {<SignInPage/>}/>
          <Route path='/SignUpPage' element = {<SignUpPage/>}/>
          <Route path ='/Favorites' element = {<Favorites/>}/>
          <Route path='/book/:id' element={<BookPage/>}/>
          <Route path='/history' element={<History tittle={resources.pages.history.tittle}/>}/>
          <Route path='/search' element={<SearchPage tittle={resources.pages.search.tittle}/>}/>
        </Routes>
      </Router>
    </LogState>
    </Provider>
    </div>
  )}
  
export default App;
