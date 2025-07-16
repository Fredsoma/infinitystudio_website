import React from "react";
import PropTypes from "prop-types";

const OrderForm = ({ selectedFile, onFileChange }) => (
  <section className="order-form">
    <h2>Get a personalized quote</h2>
    <form className="order-form__body">
      <label>
        Name
        <input type="text" name="name" placeholder="Votre nom" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" placeholder="Votre téléphone" required />
      </label>
      <label>
        Country
        <input type="text" name="country" placeholder="Votre pays" required />
      </label>
      <label>
        City
        <input type="text" name="city" placeholder="Votre ville" required />
      </label>
      <label className="order-form__file-label">
        Choose a file
        <input type="file" accept=".jpg, .png" onChange={onFileChange} />
      </label>
      <button type="submit" className="btn primary-btn order-form__submit">
        Get my quote
      </button>
    </form>
    {selectedFile && (
      <p className="order-form__file-name">File: {selectedFile.name}</p>
    )}
  </section>
);

OrderForm.propTypes = {
  selectedFile: PropTypes.object,
  onFileChange: PropTypes.func.isRequired,
};

export default OrderForm;
