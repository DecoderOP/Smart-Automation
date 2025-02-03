import React, { useState } from "react";
import emailjs from "emailjs-com";

// Initial state for the form fields
const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = ({ data }) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [feedbackMessage, setFeedbackMessage] = useState(""); // To store success or error messages

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Clear the form fields
  const clearState = () => setState({ ...initialState });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using emailjs
    emailjs
      .sendForm(
        "service_rvnhne5", // Your Service ID from EmailJS
        "template_glnq7fh", // Your Template ID from EmailJS
        e.target,           // The form element
        "Yvots6xmVsOYkzXNg" // Your Public Key from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text); // Log the success response
          clearState();              // Clear form fields after successful submission
          setFeedbackMessage("Your message has been sent successfully!"); // Success message
        },
        (error) => {
          console.log(error.text);  // Log the error response
          setFeedbackMessage("There was an error sending your message. Please try again."); // Error message
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                {/* Adding new text beside 'Get In Touch' */}
                <p style={{ display: "inline-block", marginLeft: "20px" }}>
                  We would love to hear from you. Fill out the form and we'll get back to you as soon as possible!
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>

              {/* Display feedback message */}
              {feedbackMessage && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: feedbackMessage.includes("error")
                      ? "#f8d7da" // Red for error
                      : "#d4edda",  // Green for success
                    color: feedbackMessage.includes("error")
                      ? "#721c24"   // Dark red for error
                      : "#155724",  // Dark green for success
                  }}
                >
                  {feedbackMessage}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {data ? data.address : "loading..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {data ? data.phone : "loading..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {data ? data.email : "loading..."}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={data ? data.facebook : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={data ? data.twitter : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={data ? data.youtube : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 Smart Automations. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
