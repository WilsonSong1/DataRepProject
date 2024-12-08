import './App.css';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/browse" element={<h1>Browse</h1>} />
        <Route path="/post" element={<h1>Post</h1>} />
        <Route path='/signIn' element={<h1>Sign In</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
