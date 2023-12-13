export const validateForm = (user) => {
  const { username, email, password } = user;
  let errors = {};

  if (!email) {
    errors.email = "Email is Required";
  } else if (
    !email.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)
  ) {
    errors.email = "Please enter a valid email address";
  } else {
    errors.email = "";
  }

  if (!password) {
    errors.password = "Password is Required";
  } else if (!password.match(/(?=.*?[A-Z])/)) {
    errors.password = "Your password must contain atleast one uppercase letter";
  } else if (!password.match(/(?=.*[a-z])/)) {
    errors.password = "Your password must contain atleast one lowercase letter";
  } else if (!password.match(/(?=.*[0-9])/)) {
    errors.password = "Your password must contain atleast one digit";
  } else if (!password.match(/(?=.*?[#?!@$%^&*-])/)) {
    errors.password =
      "Your password must contain atleast one special characters";
  } else if (password.length < 8 || password.length > 60) {
    errors.password = "Your password must contain between 8 and 60 characters.";
  } else {
    errors.password = "";
  }

  if (!username) {
    errors.username = "Please enter your name";
  } else if (!username.match(/^[a-zA-Z_\.]+$/)) {
    errors.username = "Please enter full name";
  } else {
    errors.username = "";
  }

  return Object.keys(errors).length === 0 ? null : errors;
};
