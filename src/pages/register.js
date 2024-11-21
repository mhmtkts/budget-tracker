// src/pages/register.js
import React from 'react';
import RegisterForm from '../components/Auth/RegisterForm';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Register = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
};

export default Register;
