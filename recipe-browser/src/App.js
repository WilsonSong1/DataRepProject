import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import Browse from './Components/Browse';
import Post from './Components/Post';
import SignIn from './Components/SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/browse" element={<Browse/>} />
        <Route path="/post" element={<Post/>} />
        <Route path='/signIn' element={<SignIn/>} />
      </Routes>
    </Router>
  );
}

export default App;
