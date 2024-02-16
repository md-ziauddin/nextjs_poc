// src/LoginPage.js
import React from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

// import "styles.css";

function LoginPage() {
  const handleGithubLogin = () => {
    // Implement your GitHub login logic here
    // You can use the GitHub OAuth API for this: https://docs.github.com/en/developers/apps/building-oauth-apps
    console.log("GitHub login clicked");
  };

  return (
    <div className="login-page">
      <h1>Welcome!</h1>
      <Button
        variant="contained"
        // onClick={handleGithubLogin}
        startIcon={<GitHubIcon />}
      >
        Login with GitHub
      </Button>
    </div>
  );
}

export default LoginPage;
