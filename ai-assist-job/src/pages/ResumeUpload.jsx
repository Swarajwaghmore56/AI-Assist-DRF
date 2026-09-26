import { useState } from "react";
import axios from "axios";

function ResumeUpload() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setMessage("");
    };

    const handleUpload = async (event) => {
        event.preventDefault();

        if (!file) {
            setMessage("Please select a resume first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        const token = localStorage.getItem("accessToken");

        try {
            setUploading(true);
            setMessage("");

            const response = await axios.post(
                "http://127.0.0.1:8000/api/resumes/upload/",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log(response.data);

            setMessage("Resume uploaded successfully!");
            setFile(null);
        } catch (error) {
            console.error(error);

            if (error.response) {
                setMessage(
                    error.response.data.detail ||
                    "Resume upload failed. Please try again."
                );
            } else {
                setMessage("Server connection failed.");
            }
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">

                    <div className="dashboard-box">
                        <h2 className="fw-bold mb-2">
                            Upload Your Resume
                        </h2>

                        <p className="text-muted mb-4">
                            Upload your resume and get AI-powered resume analysis.
                        </p>

                        <form onSubmit={handleUpload}>

                            <div className="mb-4">
                                <label className="form-label fw-semibold">
                                    Select Resume
                                </label>

                                <input
                                    type="file"
                                    className="form-control"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                />

                                <small className="text-muted">
                                    Supported formats: PDF, DOC, DOCX
                                </small>
                            </div>

                            {file && (
                                <div className="alert alert-info">
                                    Selected file: <strong>{file.name}</strong>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                disabled={uploading}
                            >
                                {uploading ? "Uploading..." : "Upload Resume"}
                            </button>

                            {message && (
                                <div className="alert alert-success mt-3">
                                    {message}
                                </div>
                            )}

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ResumeUpload;