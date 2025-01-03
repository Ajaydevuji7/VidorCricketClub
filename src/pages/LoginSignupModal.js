// import React, { useState } from 'react';
// import '../styles/LoginSignupModal.css';

// function LoginSignupModal({ isOpen, onClose }) {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       // Handle login
//       alert(`Logging in as ${formData.email}`);
//     } else {
//       // Handle signup
//       if (formData.password !== formData.confirmPassword) {
//         alert('Passwords do not match!');
//         return;
//       }
//       alert(`Signing up as ${formData.email}`);
//     }
//     onClose();
//   };

//   return (
//     isOpen && (
//       <div className="modal-overlay">
//         <div className="modal-content">
//           <button className="close-button" onClick={onClose}>
//             &times;
//           </button>
//           <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//           <form onSubmit={handleFormSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//             />
//             {!isLogin && (
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 required
//               />
//             )}
//             <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
//           </form>
//           <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
//             {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
//           </p>
//         </div>
//       </div>
//     )
//   );
// }

// export default LoginSignupModal;