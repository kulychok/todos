const isValidEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email);
};

const isValidPassword = (pass: string): boolean => {
  return /^(?=.*[0-9])[a-zA-Z0-9]{6,}$/.test(pass);
};

const isValidTodoTitle = (string: string): boolean => {
  return /^[a-z0-9а-я ]*$/i.test(string);
};

export { isValidEmail, isValidPassword, isValidTodoTitle };
