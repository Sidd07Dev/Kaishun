import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import Layout from './Layout.jsx';

import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/SignUp.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Courses from './pages/Course.jsx';
import Gallery from './pages/Gallery.jsx';
import PlacedStudents from './pages/placedStudents.jsx';
import TestSection from './pages/TestSection.jsx';
import FacultyPage from './pages/FacultyPage.jsx';

// 👇 Add this line to import AuthProvider
import { AuthProvider } from './context/AuthContext.jsx';

import StudentMyProfile from './pages/student/StudentMyProfile.jsx';
import StudentMyTest from './pages/student/StudentMyTest.jsx';
import StudentResultDownload from './pages/student/StudentResultDownload.jsx';
import AttemptTestPro from './pages/test/attempttestpro.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='courses' element={<Courses />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='placements' element={<PlacedStudents />} />
      <Route path='test' element={<TestSection />} />
      <Route path='faculty' element={<FacultyPage />} />
      <Route path='test/attempt' element={<AttemptTestPro />} />
      <Route path='student/profile' element={<StudentMyProfile />} />
      <Route path='student/tests' element={<StudentMyTest />} />
      <Route path='student/downloads' element={<StudentResultDownload/>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* ✅ Wrap entire app */}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
