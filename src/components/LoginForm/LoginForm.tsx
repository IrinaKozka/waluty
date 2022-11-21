import React from "react";
import { useForm } from "react-hook-form";
import { Card, TextField, Button } from "@mui/material";
import { LoginFormData } from "../../helpers/interfaces"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";


const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const logUserIn = ({ email, password }: LoginFormData) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Logged in");
      })
      .catch((err) => console.error(err.message));
  };

  return (
  <form style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(logUserIn)}
    >
    <Card sx={{ p: "1rem" }}>
      <TextField
        variant="outlined"
        type="email"
        placeholder="email"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("email", { required: true })}
      />
      <TextField
        variant="outlined"
        type="password"
        placeholder="password"
        sx={{ display: "block", mx: "auto", my: ".8rem" }}
        {...register("password", { required: true })}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mb: "1rem", display: "block", mx: "auto" }}
      >
        Log in
      </Button>
      </Card>
    </form>
  );
};

export default LoginForm;