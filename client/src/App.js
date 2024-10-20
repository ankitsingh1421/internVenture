// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import Nav from './components/Nav';
// import AllRoutes from './AllRoutes';
// import { BrowserRouter as Router } from 'react-router-dom';

// const App = () => {
//   const theme = useSelector((state) => state.theme.theme);

//   useEffect(() => {
//     document.body.className = theme === 'light' ? 'light' : 'dark';
//   }, [theme]);

//   return (
//     <div className="app-container">
//       <Router>
//       <Nav /> 
//       <AllRoutes/>
//       </Router>
//     </div>
//   );
// };

// export default App;
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import AllRoutes from './AllRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : 'dark';
  }, [theme]);

  return (
    <div className="app-container">
      <Router>
        <Nav />
        <AllRoutes />
      </Router>
    </div>
  );
};

export default App;
