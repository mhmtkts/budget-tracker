// src/pages/register.js
import React from "react";
import RegisterForm from "../components/Auth/RegisterForm";

const Register = () => {
  return (
    <div>
      <main className="container mx-auto p-4">
        <h2 className="mb-4"></h2>
        <RegisterForm />
      </main>
    </div>
  );
};

export default Register;
