import React, { useEffect } from "react";

const OrderForm2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="order-form">
      <h2>Get Your Order</h2>
      <form className="order-form__body">
        <label>
          Name
          <input type="text" name="name" placeholder="Votre nom" required />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            placeholder="Votre téléphone"
            required
          />
        </label>
        <label>
          Country
          <input type="text" name="country" placeholder="Votre pays" required />
        </label>
        <label>
          City
          <input type="text" name="city" placeholder="Votre ville" required />
        </label>
        <button type="submit" className="btn primary-btn order-form__submit">
          Get My Order
        </button>
      </form>
    </section>
  );
};

export default OrderForm2;
