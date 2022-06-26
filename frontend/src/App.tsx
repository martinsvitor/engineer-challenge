import Navbar from './Navbar';
import Header from './Header';
import Table from './Table';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SinglePolicy from './SinglePolicy';
import UserSearch from './UserSearch';

const App = () => {
  return (
    <Router>
      <div>
        <div className='w-full p-8'>
          <Navbar />
          <div className='mt-5'>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <UserSearch />
                    <Header />
                  </>
                }
              />
            </Routes>
          </div>

          <Routes>
            <Route path='/' element={<Table />} />
          </Routes>
          <Routes>
            <Route path='/:lastName' element={<SinglePolicy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
