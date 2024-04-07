import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
