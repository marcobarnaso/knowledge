import React from 'react';
import './Register.css'; // Import the CSS file for styling

const Register = () => {
  return (
    <div className="form-container">
      <h1>Formulario</h1>
      <form className="form">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="pais">País:</label>
        <input type="text" id="pais" name="pais" />

        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Register;