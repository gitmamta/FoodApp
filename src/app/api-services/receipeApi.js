
import api from "../../lib/axios";

// GET ALL RECIPES
export const getReceipes = async () => {
    try {
        const res = await api.get("/");

        if (!res.data.success) {
            throw new Error("Failed to fetch recipes");
        }

        return res.data.foods || [];

    } catch (error) {
        console.error("Recipe Fetch Error:", error.message);
        throw error;
    }
};

// GET SINGLE RECIPE
export const getSingleReceipe = async (id) => {
    try {
        const res = await api.get(`/${id}`);

        return res.data.food;

    } catch (error) {
        console.error("Single Recipe Error:", error.message);
        throw error;
    }
};
