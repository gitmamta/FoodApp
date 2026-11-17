
import api from "../../lib/axios";

export const getReceipes = async () => {
    try {
        const res = await api.get("/");

        if (!res.data.success) {
            throw new Error("Failed to fetch recipes");
        }

        return res.data.foods;

    } catch (error) {
        console.error("Recipe Fetch Error:", error.message);
        throw error;
    }
};
