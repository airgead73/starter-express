/* GENERAL ENVIRONMENT */
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

/* AUTH */
const authSecret = process.env.AUTH_SECRET;
const baseUrl = process.env.BASE_URL;
const clientId = process.env.CLIENT_ID;
const issuerBaseUrl = process.env.ISSUER_BASE_URL;

/* CLOUDINARY */
const cloudinaryName = process.env.CLOUDINARY_NAME;
const cloudinaryKey = process.env.CLOUDINARY_API_KEY;
const cloudinarySecret = process.env.CLOUDINARY_API_SECRET;

/* DB */
const mongoUri = process.env.MONGO_URI;

/* SESSION */
const rateLimit = process.env.RATE_LIMIT;
const sessionSecret = process.env.SESSION_SECRET;
const sessionExp = process.env.SESSION_EXP;

/* check variables */
if (!authSecret) {
  throw new Error(
    ".env is missing the definition of an AUTH_SECRET environmental variable",
  );
}

if (!baseUrl) {
  throw new Error(
    ".env is missing the definition of a BASE_URL environmental variable",
  );
}

if (!clientId) {
  throw new Error(
    ".env is missing the definition of a CLIENT_ID environmental variable",
  );
}

if (!cloudinaryName) {
  throw new Error(
    ".env is missing the definition of a CLOUDINARY_NAME environmental variable",
  );
}

if (!cloudinaryKey) {
  throw new Error(
    ".env is missing the definition of a CLOUDINARY_API_KEY environmental variable",
  );
}

if (!cloudinarySecret) {
  throw new Error(
    ".env is missing the definition of a CLOUDINARY_API_SECRET environmental variable",
  );
}

if (!issuerBaseUrl) {
  throw new Error(
    ".env is missing the definition of an ISSUER_BASE_URL environmental variable",
  );
}

if (!mongoUri) {
  throw new Error(
    ".env is missing the definition of a MONGO_URI environmental variable",
  );
}

if (!rateLimit) {
  throw new Error(
    ".env is missing the definition of a RATE_LIMIT environmental variable",
  );
}

if (!sessionExp) {
  throw new Error(
    ".env is missing the definition of a SESSION_EXP environmental variable",
  );
}

if (!sessionSecret) {
  throw new Error(
    ".env is missing the definition of a SESSION_SECRET environmental variable",
  );
}

/* export */
module.exports = {
  isDev,
  isTest,
  authSecret,
  baseUrl,
  clientId,
  cloudinaryName,
  cloudinaryKey,
  cloudinarySecret,  
  issuerBaseUrl,
  mongoUri,
  rateLimit,
  sessionExp,
  sessionSecret
}