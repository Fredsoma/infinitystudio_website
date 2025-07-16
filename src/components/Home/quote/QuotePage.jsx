import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./quote.css";

const serviceOptions = [
  "Infographic Design",
  "Print on Any Media",
  "Modern Silk-Screen",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
];

export default function QuotePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    details: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Valid email required";
    if (!form.service) errs.service = "Please select a service";
    if (!form.details.trim()) errs.details = "Please provide project details";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: integrate API/email logic
    alert("Thank you! Your quote request has been submitted.");
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="inf-about__header">
        <h2 className="inf-about__title">
          <span className="inf-highlight">Quote</span>
        </h2>
        <nav aria-label="breadcrumb" className="inf-breadcrumb">
          <p className="quote-subtitle">
            Tell us about your project and we'll get back to you within 24
            hours.
          </p>
        </nav>
      </header>
      <div className="quote-container contact_box">
        <div className="contacts_item">
          <h2 className="Contact-heading">
            Request <span className="highlight">a Quote</span>
          </h2>

          <form onSubmit={handleSubmit} className="format">
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              value={form.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="form-error">{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="form-error">{errors.email}</span>}

            <input
              type="text"
              name="company"
              placeholder="COMPANY (optional)"
              value={form.company}
              onChange={handleChange}
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">— Select a Service —</option>
              {serviceOptions.map((srv, i) => (
                <option key={i} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
            {errors.service && (
              <span className="form-error">{errors.service}</span>
            )}

            <textarea
              name="details"
              placeholder="PROJECT DETAILS"
              rows="5"
              value={form.details}
              onChange={handleChange}
              required
            />

            {errors.details && (
              <span className="form-error">{errors.details}</span>
            )}

            <button
              type="submit"
              className="sign_btn primary_btn more_btn contact_btn"
            >
              SEND REQUEST
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
