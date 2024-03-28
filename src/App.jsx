// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       {/* <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import PreDSPage from './components/PreDSPage';

import './index.css'
// import './second.css'

function App() {
  return (
    <>
    <body>
  
    <div class='container'>
      <h1>Bella Karduck</h1>
   
    </div>
   

    <Router>
     
      <div class='container2'>
      <nav id="nav">
        
        
          <a><Link to="/">home (about me!)</Link></a>
          <a><Link to="/projects">technical experience & projects</Link></a>
          <a><Link to="/preDS">my non-technical journey</Link></a>
          <a><Link to="/contact">contact</Link></a>
  
      </nav>
     
      </div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/preDS" element={<PreDSPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
   
    </Router>


    <main>
     
    </main>
    <footer>
        <div class = 'container'>
          <div class = 'horizontal-line'></div>
        <p class='smallestprint'>&copy; 2024 Bella Karduck</p>
      </div>
      </footer>
    </body>
    
    </>
  );
}

export default App;
