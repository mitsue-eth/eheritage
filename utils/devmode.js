let inDevEnvironment = false;

if (process && process.env.NODE_ENV === "development") {
  inDevEnvironment = true;
}

module.exports = { inDevEnvironment };
