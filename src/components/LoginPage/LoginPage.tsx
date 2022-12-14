import React from 'react'
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <Typography
        variant="h6"
        sx={{
          fontWeight: '100',
          my: '.8rem',
          color: 'red',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        Don't have an account yet? Register now!
      </Typography>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <Button sx={{ display: 'block', mx: 'auto' }}>Register</Button>
      </Link>
    </>
  );
};
export default LoginPage;














