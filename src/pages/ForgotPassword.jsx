import { useState } from 'react';
import { FiMail, FiArrowRight } from 'react-icons/fi';


// Forgot Password Component
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Handle password reset logic here
        console.log('Password reset requested for:', email);
        setIsSubmitting(false);
    };

    return (
        <div className="auth-page">
            <div className="container">
                <div className="hero">
                    <h1>Reset Password</h1>
                    <p>Enter your email to receive reset instructions</p>
                </div>

                <div className="auth-card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-wrapper">
                                <FiMail className="icon" />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                            <FiArrowRight className="icon" />
                        </button>

                        <div className="auth-links">
                            Remember your password? <a href="/login">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword