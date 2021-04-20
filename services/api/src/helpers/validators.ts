const isValidEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email);
};

const isValidPassword = (pass: string): boolean => {
  return /^(?=.*[0-9])[a-zA-Z0-9]{6,}$/.test(pass);
};

export { isValidEmail, isValidPassword };
