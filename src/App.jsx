import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Champions from './pages/Champions';
import Roles from './pages/Roles';
import ChampionForm from './pages/ChampionForm';
import ChampionPage from './pages/ChampionPage';
import RoleForm from './pages/RoleForm';
import UpdateChampionForm from './pages/UpdateChampionForm';

const baseurl = '12312321'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/champions' element={<Champions />} />
          <Route path='/roles' element={<Roles />} />
          <Route path='/role/create' element={<RoleForm />} />
          <Route path='/champion/create' element={<ChampionForm />} />
          <Route path='/champion/:id' element={<ChampionPage />} />
          <Route path='/champion/:id/update' element={<UpdateChampionForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
