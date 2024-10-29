import "dotenv/config";

export const Env = {
  host: "localhost",
  username: "root",
  password: "",
  port: Number(process.env.PORT) || 8000,
  dbPort: Number(process.env.DB_PORT) || 3307,
  dbName: "express",
  secretKey: "express",
  expiresIn: Number(process.env.EXPIRE_TIME) || 3600,
  emailAddress: process.env.EMAIL_ADDRESS,
  emailPassword: process.env.EMAIL_PASSWORD,
  serverAddress: process.env.SERVER_ADDRESS || "localhost",
  resetUrl: "/reset_password",
};
