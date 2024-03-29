import "dotenv/config";
import { Headers } from "cross-fetch";

const authHeaders = new Headers();
authHeaders.append("api-key", process.env.DISCOURSE_API_KEY!);
authHeaders.append("api-username", process.env.DISCOURSE_API_USERNAME!);
authHeaders.append("Content-Type", "application/json");

const defaultHeaders = new Headers();
defaultHeaders.append("Content-Type", "application/json");

export { authHeaders, defaultHeaders };
