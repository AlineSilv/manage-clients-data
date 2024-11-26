import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './pages/loginscreen/loginscreen';
import HomeScreen from './pages/homescreen/homescreen'; 
import ScreenPeople from './pages/screenpeople/screenpeople';
import ScreenAddress from './pages/screenaddress/screenenaddress';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/homescreen" element={<HomeScreen/>} />
        <Route path="/screenpeople" element={<ScreenPeople />} />
        <Route path="/screenaddress" element={<ScreenAddress />} />
      </Routes>
    </Router>
  );
};

export default App;
