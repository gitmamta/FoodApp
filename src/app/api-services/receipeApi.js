

import api from "../../lib/axios";


export const getReceipes = async () => {
    try {
        const res = await api.get();

        return res.data.foods || [];

    } catch (error) {
        console.log("Fetch Error:", error.message);
        return [];
    }
};

export const getSingleReceipe = async (id) => {
    try {
        const res = await api.get(`/${id}`);

        return res.data.food;

    } catch (error) {
        console.log("Single Recipe Error:", error.message);
        return null;
    }
};
