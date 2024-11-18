import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Composition/Footer';
import Header from './Composition/Header';
import Signup from './AuthPages/Signup';
import Login from './AuthPages/Login';
import Home from './Pages/Home';
import CourseLists from './Pages/CourseList';
import Biodata from './Pages/Biodata';
import { AuthProvider } from './AuthPages/AuthContext';
// import { AuthContext } from './AuthPages/AuthContext';
function App() {
  const isUserSignedIn = !!localStorage.getItem('token');

  return (
    
    <>
    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/courses' element={<CourseLists/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        {isUserSignedIn && <Route path="/biodata" element={<Biodata />} />}
      </Routes>
      <Footer />
      </AuthProvider>
      </>
  );
}

export default App;
