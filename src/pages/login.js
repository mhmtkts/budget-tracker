// src/pages/login.js
import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Login = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
