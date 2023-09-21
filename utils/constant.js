export const FEEDBACK = {
  ALL: "FEEDBACK.ALL",
  ERROR: "FEEDBACK.ERROR",
  SUCCESS: "FEEDBACK.SUCCESS",
  NONE: "FEEDBACK.NONE",
};

export const isDevEnvironment = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const users = [
  {
    id: "1",
    name: "Admin User",
    email: "user@example.com",
    password: "1Password",
  },
  {
    id: "1",
    name: "Adeyemo Rasheed",
    email: "rasheed@gmail.com",
    password: "1Password",
  },
];
