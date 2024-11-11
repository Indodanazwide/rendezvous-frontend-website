import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

const Login = () => {
    return (
        <div className="login-page">
            <div className="container">
                <div className="hero">
                    <h1>Welcome Back</h1>
                    <p>Please sign in to your account</p>
                </div>

                <div className="login-card">
                    <div className="card-header">
                        <h2>Login</h2>
                    </div>

                    <form >
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-wrapper">
                                <FiMail className="icon" />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
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
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>

                        <a href="/forgot-password" className="forgot-password">
                            Forgot password?
                        </a>

                        <button type="submit" className="submit-button">
                            Sign In
                            <FiArrowRight className="icon" />
                        </button>

                        <div className="signup-prompt">
                            Don&apos;t have an account?{' '}
                            <a href="/signup">Sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;