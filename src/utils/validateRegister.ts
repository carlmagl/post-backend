import { UsernamePasswordInput } from "src/resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  console.log(options);
  console.log(options.email);
  console.log(options.email.includes("@"));
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "Invalid email",
      },
    ];
  }

  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "Length must be greater than 2",
      },
    ];
  }
  //TODO: Make this better
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "Cannot include an @",
      },
    ];
  }

  if (options.password.length <= 5) {
    return [
      {
        field: "password",
        message: "Length must be greater than 5",
      },
    ];
  }
  return null;
};
