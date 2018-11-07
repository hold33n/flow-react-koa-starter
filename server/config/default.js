module.exports = {
  // secret data can be moved to env variables
  // or a separate config
  // domain: "http://localhost:3000",
  host: "localhost",
  port: process.env.PORT || 3000,
  root: process.cwd()
};
