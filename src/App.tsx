import { useEffect} from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, About, Projects, Skills, Certificates, Contact} from './pages'
import Layout from './components/Layout/Layout';
import { useDispatch } from 'react-redux'
import { addUser } from './redux/userSlice';
import Objects from './components/objects/objects';

function App() {
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(addUser(Objects.Home));
  }, [dispatch]);



  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/certificates' element={<Certificates/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
