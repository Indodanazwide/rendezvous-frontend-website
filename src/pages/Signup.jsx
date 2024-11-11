import { useState } from 'react';
import { FiMail, FiLock, FiUser, FiArrowRight, FiUserCheck } from 'react-icons/fi';


// Password strength checker utility
const checkPasswordStrength = (password) => {
    if (!password) return { score: 0, text: '' };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const strengthMap = {
        0: { text: '', class: '' },
        1: { text: 'Weak', class: 'weak' },
        2: { text: 'Medium', class: 'medium' },
        3: { text: 'Medium', class: 'medium' },
        4: { text: 'Strong', class: 'strong' }
    };

    return strengthMap[score];
};

// Sign Up Component
export const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [passwordStrength, setPasswordStrength] = useState({ text: '', class: '' });
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'password') {
            setPasswordStrength(checkPasswordStrength(value));
        }
        
        if (name === 'confirmPassword' || name === 'password') {
            const otherField = name === 'password' ? 'confirmPassword' : 'password';
            setPasswordsMatch(value === formData[otherField]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        console.log('Sign up form submitted:', formData);
    };

    return (
        <div className="auth-page">
            <div className="container">
                <div className="hero">
                    <h1>Create Account</h1>
                    <p>Join us by creating your account</p>
                </div>

                <div className="auth-card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <div className="input-wrapper">
                                <FiUser className="icon" />
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="Enter your first name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <div className="input-wrapper">
                                <FiUser className="icon" />
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Enter your last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <div className="input-wrapper">
                                <FiUserCheck className="icon" />
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Choose a username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-wrapper">
                                <FiMail className="icon" />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <FiLock className="icon" />
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {formData.password && (
                                <div className="password-strength">
                                    <div className="strength-bar">
                                        <div className={`strength-fill ${passwordStrength.class}`} />
                                    </div>
                                    <span className={`strength-text ${passwordStrength.class}`}>
                                        {passwordStrength.text}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="input-wrapper">
                                <FiLock className="icon" />
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {!passwordsMatch && formData.confirmPassword && (
                                <span className="error-text" style={{ color: '#e74c3c', fontSize: '0.875rem' }}>
                                    Passwords do not match
                                </span>
                            )}
                        </div>

                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={!passwordsMatch}
                        >
                            Create Account
                            <FiArrowRight className="icon" />
                        </button>

                        <div className="auth-links">
                            Already have an account? <a href="/login">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup