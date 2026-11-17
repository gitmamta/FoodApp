
import axios from "axios";

const baseURL =
    typeof window !== "undefined"
        ? ""
        : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const api = axios.create({
    baseURL: `${baseURL}/api/food`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
