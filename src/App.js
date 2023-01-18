import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Protected from './components/protected';
import Page from './components/404page';
// import './App.css';

function App() {
	return (
        <div className='App'>
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Protected Component={Dashboard}/>}></Route>
          <Route path="* " element={<Page />}></Route>
        </Routes>
        </BrowserRouter>
        </div>
);
}

export default App;
