// src/pages/login.js
import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Login = () => {
  return (
    <div>
      
      <main className="container mx-auto p-4">
        <LoginForm />
      </main>
      
    </div>
  );
};

export default Login;
