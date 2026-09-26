import { useEffect, useState } from "react";
import ResumeUpload from "./pages/ResumeUpload";

import {
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import axios from "axios";

// ==================================================
// PROTECTED ROUTE
// ==================================================

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// ==================================================
// HOME PAGE
// ==================================================

function Home() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container py-2">

          <Link
            to="/"
            className="navbar-brand fw-bold text-primary"
          >
            AI Assist Job
          </Link>

          <div className="d-flex gap-2">

            <Link
              to="/login"
              className="btn btn-outline-primary"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-primary"
            >
              Register
            </Link>

          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="py-5">

        <div className="container">

          <div className="row align-items-center py-5">

            <div className="col-lg-6">

              <span className="badge bg-primary-subtle text-primary mb-3">
                AI-Powered Career Platform
              </span>

              <h1 className="display-4 fw-bold text-dark">

                Build Your Career With

                <span className="text-primary">
                  {" "}AI
                </span>

              </h1>

              <p className="lead text-secondary mt-3">

                Analyze your resume, discover matching jobs,
                generate cover letters and prepare for interviews
                with AI-powered career assistance.

              </p>

              <div className="d-flex gap-3 mt-4">

                <Link
                  to="/register"
                  className="btn btn-primary btn-lg px-4"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="btn btn-outline-dark btn-lg px-4"
                >
                  Login
                </Link>

              </div>

            </div>

            {/* Dashboard Preview */}
            <div className="col-lg-6 mt-5 mt-lg-0">

              <div className="dashboard-box shadow-sm">

                <div className="d-flex justify-content-between align-items-center mb-4">

                  <div>

                    <small className="text-secondary">
                      Career Dashboard
                    </small>

                    <h4 className="fw-bold mb-0">
                      Welcome Back 👋
                    </h4>

                  </div>

                  <div className="profile-circle">
                    A
                  </div>

                </div>

                <div className="row g-3">

                  <div className="col-6">

                    <div className="dashboard-stat-card">

                      <div className="stat-icon blue">
                        📄
                      </div>

                      <div>

                        <small className="text-secondary">
                          ATS Score
                        </small>

                        <h4 className="fw-bold mb-0">
                          84%
                        </h4>

                      </div>

                    </div>

                  </div>

                  <div className="col-6">

                    <div className="dashboard-stat-card">

                      <div className="stat-icon green">
                        💼
                      </div>

                      <div>

                        <small className="text-secondary">
                          Job Matches
                        </small>

                        <h4 className="fw-bold mb-0">
                          28
                        </h4>

                      </div>

                    </div>

                  </div>

                  <div className="col-6">

                    <div className="dashboard-stat-card">

                      <div className="stat-icon yellow">
                        📋
                      </div>

                      <div>

                        <small className="text-secondary">
                          Applications
                        </small>

                        <h4 className="fw-bold mb-0">
                          12
                        </h4>

                      </div>

                    </div>

                  </div>

                  <div className="col-6">

                    <div className="dashboard-stat-card">

                      <div className="stat-icon purple">
                        🎯
                      </div>

                      <div>

                        <small className="text-secondary">
                          Skill Match
                        </small>

                        <h4 className="fw-bold mb-0">
                          76%
                        </h4>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              Everything You Need For Your Job Search
            </h2>

            <p className="text-secondary">
              One platform to manage your complete career journey.
            </p>

          </div>

          <div className="row g-4">

            <div className="col-md-4">

              <div className="dashboard-box h-100">

                <div className="stat-icon blue mb-3">
                  🤖
                </div>

                <h5 className="fw-bold">
                  AI Resume Analysis
                </h5>

                <p className="text-secondary mb-0">

                  Analyze your resume and get an ATS score,
                  skill suggestions and improvement recommendations.

                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="dashboard-box h-100">

                <div className="stat-icon green mb-3">
                  💼
                </div>

                <h5 className="fw-bold">
                  Smart Job Matching
                </h5>

                <p className="text-secondary mb-0">

                  Find jobs based on your skills, experience
                  and career goals.

                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="dashboard-box h-100">

                <div className="stat-icon purple mb-3">
                  🎤
                </div>

                <h5 className="fw-bold">
                  AI Interview Preparation
                </h5>

                <p className="text-secondary mb-0">

                  Practice interview questions and improve
                  your technical and HR interview skills.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="py-5">

        <div className="container">

          <div className="row text-center">

            <div className="col-md-3 mb-4 mb-md-0">

              <h2 className="fw-bold text-primary">
                10K+
              </h2>

              <p className="text-secondary">
                Jobs Analyzed
              </p>

            </div>

            <div className="col-md-3 mb-4 mb-md-0">

              <h2 className="fw-bold text-primary">
                5K+
              </h2>

              <p className="text-secondary">
                Resumes Improved
              </p>

            </div>

            <div className="col-md-3 mb-4 mb-md-0">

              <h2 className="fw-bold text-primary">
                90%
              </h2>

              <p className="text-secondary">
                ATS Improvement
              </p>

            </div>

            <div className="col-md-3">

              <h2 className="fw-bold text-primary">
                24/7
              </h2>

              <p className="text-secondary">
                AI Career Support
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white">

        <div className="container text-center">

          <h2 className="fw-bold">
            Ready To Improve Your Career?
          </h2>

          <p className="mb-4">
            Start your AI-powered job search today.
          </p>

          <Link
            to="/register"
            className="btn btn-light btn-lg px-4"
          >
            Create Free Account
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="py-4 border-top">

        <div className="container text-center">

          <p className="text-secondary mb-0">
            © 2026 AI Assist Job. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

// ==================================================
// LOGIN PAGE
// ==================================================

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        {
          username: username,
          password: password,
        }
      );

      localStorage.setItem(
        "accessToken",
        response.data.access
      );

      localStorage.setItem(
        "refreshToken",
        response.data.refresh
      );

      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 500);

    } catch (error) {

      console.error(error);

      setError(
        error.response?.data?.detail ||
        "Invalid username or password."
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-vh-100 bg-light">

      <nav className="navbar bg-white border-bottom">

        <div className="container py-2">

          <Link
            to="/"
            className="navbar-brand fw-bold text-primary"
          >
            AI Assist Job
          </Link>

          <Link
            to="/register"
            className="btn btn-outline-primary"
          >
            Register
          </Link>

        </div>

      </nav>

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-md-6 col-lg-5">

            <div className="dashboard-box shadow-sm mt-5">

              <div className="text-center mb-4">

                <div className="ai-big-icon mx-auto mb-3">
                  AI
                </div>

                <h2 className="fw-bold">
                  Welcome Back
                </h2>

                <p className="text-secondary">
                  Login to your AI Assist Job account.
                </p>

              </div>

              {message && (
                <div className="alert alert-success">
                  {message}
                </div>
              )}

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin}>

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Username
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                    autoComplete="username"
                    required
                  />

                </div>

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    autoComplete="current-password"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2"
                  disabled={loading}
                >
                  {loading
                    ? "Logging in..."
                    : "Login"
                  }
                </button>

              </form>

              <p className="text-center text-secondary mt-4 mb-0">

                Don't have an account?{" "}

                <Link
                  to="/register"
                  className="text-primary fw-semibold"
                >
                  Register
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

// ==================================================
// REGISTER PAGE
// ==================================================

function Register() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {

    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {

      await axios.post(
        "http://127.0.0.1:8000/api/register/",
        {
          username: fullName,
          email: email,
          password: password,
        }
      );

      setMessage(
        "Registration successful! Redirecting to login..."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {

      console.error(error);

      if (error.response?.data) {

        const data = error.response.data;

        if (data.username) {
          setError(data.username[0]);
        } else if (data.email) {
          setError(data.email[0]);
        } else if (data.password) {
          setError(data.password[0]);
        } else {
          setError("Registration failed.");
        }

      } else {

        setError(
          "Unable to connect to the server."
        );

      }

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-vh-100 bg-light">

      <nav className="navbar bg-white border-bottom">

        <div className="container py-2">

          <Link
            to="/"
            className="navbar-brand fw-bold text-primary"
          >
            AI Assist Job
          </Link>

          <Link
            to="/login"
            className="btn btn-outline-primary"
          >
            Login
          </Link>

        </div>

      </nav>

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-md-6 col-lg-5">

            <div className="dashboard-box shadow-sm mt-5">

              <div className="text-center mb-4">

                <div className="ai-big-icon mx-auto mb-3">
                  AI
                </div>

                <h2 className="fw-bold">
                  Create Account
                </h2>

                <p className="text-secondary">
                  Start your AI-powered career journey.
                </p>

              </div>

              {message && (
                <div className="alert alert-success">
                  {message}
                </div>
              )}

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <form onSubmit={handleRegister}>

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Username
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    value={fullName}
                    onChange={(e) =>
                      setFullName(e.target.value)
                    }
                    autoComplete="username"
                    required
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    autoComplete="email"
                    required
                  />

                </div>

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    autoComplete="new-password"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2"
                  disabled={loading}
                >
                  {loading
                    ? "Creating Account..."
                    : "Create Account"
                  }
                </button>

              </form>

              <p className="text-center text-secondary mt-4 mb-0">

                Already have an account?{" "}

                <Link
                  to="/login"
                  className="text-primary fw-semibold"
                >
                  Login
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

// ==================================================
// DASHBOARD PAGE
// ==================================================

function Dashboard() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {

    const fetchProfile = async () => {

      const token = localStorage.getItem("accessToken");

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/profile/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProfile(response.data);

      } catch (error) {

        console.error(
          "Profile error:",
          error
        );

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        navigate("/login");

      } finally {

        setProfileLoading(false);

      }

    };

    fetchProfile();

  }, [navigate]);

  const handleLogout = () => {

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    navigate("/login");

  };

  if (profileLoading) {

    return (

      <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">

        <div className="text-center">

          <div
            className="spinner-border text-primary mb-3"
            role="status"
          />

          <p className="text-secondary mb-0">
            Loading your dashboard...
          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="dashboard-page">

      {/* Top Navbar */}
      <nav className="navbar bg-white border-bottom">

        <div className="container-fluid px-4">

          <Link
            to="/dashboard"
            className="navbar-brand fw-bold text-primary"
          >
            AI Assist Job
          </Link>

          <div className="d-flex align-items-center gap-3">

            <span className="text-secondary d-none d-md-block">

              {profile
                ? profile.email
                : "Career Dashboard"
              }

            </span>

            <div className="profile-circle">

              {profile
                ? profile.username
                  .charAt(0)
                  .toUpperCase()
                : "A"
              }

            </div>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

      </nav>

      <div className="container-fluid">

        <div className="row">

          {/* Sidebar */}
          <div className="col-lg-2 dashboard-sidebar">

            <div className="p-3">

              <div className="sidebar-title">
                MAIN
              </div>

              <Link
                to="/dashboard"
                className="sidebar-link active"
              >
                📊 Dashboard
              </Link>

              <Link
                to="/resume-upload"
                className="sidebar-link"
              >
                📄 Resume Upload
              </Link>

              <a
                href="#resume"
                className="sidebar-link"
              >
                📄 Resume Analysis
              </a>

              <a
                href="#jobs"
                className="sidebar-link"
              >
                💼 Job Matches
              </a>

              <a
                href="#applications"
                className="sidebar-link"
              >
                📋 Applications
              </a>

              <div className="sidebar-title mt-4">
                AI TOOLS
              </div>

              <a
                href="#assistant"
                className="sidebar-link"
              >
                🤖 Career Assistant
              </a>

              <a
                href="#interview"
                className="sidebar-link"
              >
                🎤 Interview Prep
              </a>

              <a
                href="#cover-letter"
                className="sidebar-link"
              >
                ✍️ Cover Letter
              </a>

              <div className="sidebar-title mt-4">
                ACCOUNT
              </div>

              <button
                className="sidebar-link w-100 text-start border-0 bg-transparent"
                onClick={handleLogout}
              >
                🚪 Logout
              </button>

            </div>

          </div>

          {/* Main Content */}
          <div className="col-lg-10 dashboard-content">

            <div className="p-4">

              {/* Header */}
              <div className="mb-4">

                <h2 className="fw-bold">

                  Good Morning 👋

                  {profile &&
                    ` ${profile.username}`
                  }

                </h2>

                <p className="text-secondary mb-0">
                  Here's what's happening with your career.
                </p>

              </div>

              {/* User Information */}
              <div className="dashboard-box mb-4">

                <div className="d-flex justify-content-between align-items-center">

                  <div>

                    <small className="text-secondary">
                      Logged in as
                    </small>

                    <h5 className="fw-bold mb-1">
                      {profile?.username}
                    </h5>

                    <p className="text-secondary mb-0">
                      {profile?.email}
                    </p>

                  </div>

                  <span className="badge bg-success">
                    JWT Authenticated
                  </span>

                </div>

              </div>

              {/* Stats */}
              <div className="row g-4 mb-4">

                <div className="col-md-6 col-xl-3">

                  <div className="dashboard-stat-card">

                    <div className="stat-icon blue">
                      📄
                    </div>

                    <div>

                      <small className="text-secondary">
                        ATS Score
                      </small>

                      <h3 className="fw-bold mb-0">
                        84%
                      </h3>

                    </div>

                  </div>

                </div>

                <div className="col-md-6 col-xl-3">

                  <div className="dashboard-stat-card">

                    <div className="stat-icon green">
                      💼
                    </div>

                    <div>

                      <small className="text-secondary">
                        Job Matches
                      </small>

                      <h3 className="fw-bold mb-0">
                        28
                      </h3>

                    </div>

                  </div>

                </div>

                <div className="col-md-6 col-xl-3">

                  <div className="dashboard-stat-card">

                    <div className="stat-icon yellow">
                      📋
                    </div>

                    <div>

                      <small className="text-secondary">
                        Applications
                      </small>

                      <h3 className="fw-bold mb-0">
                        12
                      </h3>

                    </div>

                  </div>

                </div>

                <div className="col-md-6 col-xl-3">

                  <div className="dashboard-stat-card">

                    <div className="stat-icon purple">
                      🎯
                    </div>

                    <div>

                      <small className="text-secondary">
                        Skill Match
                      </small>

                      <h3 className="fw-bold mb-0">
                        76%
                      </h3>

                    </div>

                  </div>

                </div>

              </div>

              {/* Resume + Jobs */}
              <div className="row g-4 mb-4">

                {/* Resume */}
                <div
                  className="col-lg-5"
                  id="resume"
                >

                  <div className="dashboard-box h-100">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                      <h5 className="fw-bold mb-0">
                        Resume Analysis
                      </h5>

                      <span className="resume-score">
                        84 / 100
                      </span>

                    </div>

                    <p className="text-secondary">

                      Your resume has a strong match for
                      frontend developer positions.

                    </p>

                    <div className="mb-3">

                      <div className="d-flex justify-content-between mb-1">

                        <small>
                          Skills
                        </small>

                        <small>
                          90%
                        </small>

                      </div>

                      <div className="progress">

                        <div
                          className="progress-bar"
                          style={{ width: "90%" }}
                        />

                      </div>

                    </div>

                    <div className="mb-3">

                      <div className="d-flex justify-content-between mb-1">

                        <small>
                          Experience
                        </small>

                        <small>
                          78%
                        </small>

                      </div>

                      <div className="progress">

                        <div
                          className="progress-bar"
                          style={{ width: "78%" }}
                        />

                      </div>

                    </div>

                    <div className="mb-3">

                      <div className="d-flex justify-content-between mb-1">

                        <small>
                          Keywords
                        </small>

                        <small>
                          82%
                        </small>

                      </div>

                      <div className="progress">

                        <div
                          className="progress-bar"
                          style={{ width: "82%" }}
                        />

                      </div>

                    </div>

                    <Link
                      to="/resume-upload"
                      className="btn btn-primary mt-3"
                    >
                      Upload Resume
                    </Link>

                  </div>

                </div>

                {/* Recommended Jobs */}
                <div
                  className="col-lg-7"
                  id="jobs"
                >

                  <div className="dashboard-box h-100">

                    <div className="d-flex justify-content-between align-items-center mb-2">

                      <h5 className="fw-bold mb-0">
                        Recommended Jobs
                      </h5>

                      <button className="btn btn-sm btn-outline-primary">
                        View All
                      </button>

                    </div>

                    <div className="job-card">

                      <div>

                        <h6 className="fw-bold mb-1">
                          React.js Developer
                        </h6>

                        <small className="text-secondary">
                          Tech Solutions • Pune
                        </small>

                        <br />

                        <small className="text-secondary">
                          ₹4 - ₹7 LPA
                        </small>

                      </div>

                      <span className="match-badge">
                        94% Match
                      </span>

                    </div>

                    <div className="job-card">

                      <div>

                        <h6 className="fw-bold mb-1">
                          Frontend Developer
                        </h6>

                        <small className="text-secondary">
                          Digital Labs • Pune
                        </small>

                        <br />

                        <small className="text-secondary">
                          ₹3.5 - ₹6 LPA
                        </small>

                      </div>

                      <span className="match-badge">
                        89% Match
                      </span>

                    </div>

                    <div className="job-card">

                      <div>

                        <h6 className="fw-bold mb-1">
                          Junior Software Developer
                        </h6>

                        <small className="text-secondary">
                          Innovation Tech • Pune
                        </small>

                        <br />

                        <small className="text-secondary">
                          ₹3 - ₹5 LPA
                        </small>

                      </div>

                      <span className="match-badge">
                        84% Match
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* AI Assistant */}
              <div
                className="row g-4 mb-4"
                id="assistant"
              >

                <div className="col-12">

                  <div className="ai-assistant-box">

                    <div className="d-flex align-items-center gap-3 mb-3">

                      <div className="ai-big-icon">
                        AI
                      </div>

                      <div>

                        <h5 className="fw-bold mb-1">
                          AI Career Assistant
                        </h5>

                        <p className="text-secondary mb-0">

                          Get personalized career guidance
                          from your AI assistant.

                        </p>

                      </div>

                    </div>

                    <div className="input-group">

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ask something like: How can I improve my resume?"
                      />

                      <button className="btn btn-primary">
                        Ask AI
                      </button>

                    </div>

                  </div>

                </div>

              </div>

              {/* Applications */}
              <div
                className="row g-4"
                id="applications"
              >

                <div className="col-lg-8">

                  <div className="dashboard-box">

                    <div className="d-flex justify-content-between align-items-center mb-3">

                      <h5 className="fw-bold mb-0">
                        Application Tracker
                      </h5>

                      <button className="btn btn-sm btn-outline-primary">
                        Add Application
                      </button>

                    </div>

                    <div className="application-row">

                      <div>

                        <strong>
                          React.js Developer
                        </strong>

                        <br />

                        <small className="text-secondary">
                          Tech Solutions
                        </small>

                      </div>

                      <span className="badge bg-warning text-dark">
                        Interview
                      </span>

                    </div>

                    <div className="application-row">

                      <div>

                        <strong>
                          Frontend Developer
                        </strong>

                        <br />

                        <small className="text-secondary">
                          Digital Labs
                        </small>

                      </div>

                      <span className="badge bg-primary">
                        Applied
                      </span>

                    </div>

                    <div className="application-row">

                      <div>

                        <strong>
                          Software Developer
                        </strong>

                        <br />

                        <small className="text-secondary">
                          Innovation Tech
                        </small>

                      </div>

                      <span className="badge bg-success">
                        Shortlisted
                      </span>

                    </div>

                  </div>

                </div>

                {/* Recommendation */}
                <div className="col-lg-4">

                  <div className="dashboard-box h-100">

                    <h5 className="fw-bold">
                      Career Recommendation
                    </h5>

                    <p className="text-secondary">

                      Based on your current skills,
                      improving your JavaScript and
                      DSA knowledge can increase your
                      developer job opportunities.

                    </p>

                    <button className="btn btn-primary">
                      View Learning Plan
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

// ==================================================
// APP ROUTES
// ==================================================

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Protected Resume Upload */}
      <Route
        path="/resume-upload"
        element={
          <ProtectedRoute>
            <ResumeUpload />
          </ProtectedRoute>
        }
      />

    </Routes>

  );
}

export default App;