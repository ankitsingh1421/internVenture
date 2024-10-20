// import React from 'react';
// import Home from './components/HomePage/Home';
// import { Routes, Route } from 'react-router-dom';
// import Login from './Adminn/login/Login';





// const AllRoutes = () => {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/admin' element={<Login />} />

//       </Routes>
//     </>
//   );
// };

// export default AllRoutes;

import React from 'react';
import Home from './components/HomePage/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './Adminn/login/Login';
import Dashboard from './components/dashboard/dashboard';
import Verify from 'components/Verify/Verify';

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/verify' element={<Verify />} />


      </Routes>
    </>
  );
};

export default AllRoutes;
