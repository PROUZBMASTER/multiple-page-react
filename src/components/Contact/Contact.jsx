// import React from "react";
// import PropTypes from "prop-types";
// import "./contact.css";

// class ContactForm extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     message: PropTypes.string.isRequired
//   };

//   state = {
//     name: "",
//     email: "",
//     message: ""
//   };

//   handleInputChange = event => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     console.log("Form submitted with values:", this.state);
//     // Submit form code here
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             required
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             value={this.state.email}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="messzage"
//             name="message"
//             required
//             value={this.state.message}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default ContactForm;



import { useState } from "react";
import "./contact.css";
import FormInput from "../FormInput";

  function Contact() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;