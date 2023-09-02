import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routePath } from './Components/constants/route';

//components
import Home from './Components/pages/Home';
import Categories from './Components/pages/Categories';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.categories} element={<Categories />} />
        <Route path={routePath.invalid} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
