import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="app__body">
              <Sidebar />
              <Content />
            </div>
          } extract />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
