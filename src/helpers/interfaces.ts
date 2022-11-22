export interface LoginFormData {
  email: string;
  password: string;
}

export interface NavbarProps {
  loggedIn: boolean;
}

export interface RegisterFormData extends LoginFormData {
  password2: string;
}
