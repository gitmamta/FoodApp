
import axios from "axios";

const API = "/api/food";

export const getReceipes = async () => {
    try {
        const res = await axios.get(API);

        return res.data.foods || [];

    } catch (error) {
        console.log("Fetch Error:", error.message);
        return [];
    }
};

export const getSingleReceipe = async (id) => {
    try {
        const res = await axios.get(`${API}/${id}`);

        return res.data.food;

    } catch (error) {
        console.log("Single Recipe Error:", error.message);
        return null;
    }
};
