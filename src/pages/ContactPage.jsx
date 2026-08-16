import { useState } from "react";

const initialFormData = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  message: "",
};

// pulled this out of the component so handleSubmit doesn't get huge -
// just checks each field and builds up an object of error messages
function validate(data) {
  const errors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your name.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "That name looks a bit short.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "That doesn't look like a valid email.";
  }

  if (!data.password) {
    errors.password = "Please enter a password.";
  } else if (data.password.length < 6) {
    errors.password = "Password should be at least 6 characters.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[0-9+\-\s]{7,15}$/.test(data.phone.trim())) {
    errors.phone = "That doesn't look like a valid phone number.";
  }

  if (!data.message.trim()) {
    errors.message = "Let us know what this is about.";
  }

  return errors;
}

function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    // stops the browser from doing a full page reload on submit
    event.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialFormData);
    } else {
      setSubmitted(false);
    }
  }

  return (
    <section className="page-section">
      <h2>Contact / Register</h2>
      <p>Got a question, or want to sign up for updates? Fill this out.</p>

      {submitted && (
        <div className="form-success">
          Thanks! Your message has been sent - we'll get back to you soon.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form-control"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="field-error">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="field-error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="field-error">{errors.message}</span>}
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactPage;
