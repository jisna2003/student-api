import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewStudent from './components/ViewStudent';
import LoginStudent from './components/LoginStudent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<AddStudent/>}/>
      <Route path="/LoginStudent" element={<LoginStudent/>}/>
      <Route path="/AddStudent" element={<AddStudent/>}/>
      <Route path="/SearchStudent" element={<SearchStudent/>}/>
      <Route path="/DeleteStudent" element={<DeleteStudent/>}/>
      <Route path="/ViewStudent" element={<ViewStudent/>}/>
      <Route path="/LoginStudent" element={<LoginStudent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
