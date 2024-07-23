import qs from "querystring";

export const API_URL = "http://10.20.10.121:1337/api";

async function fetcher({ path, query, signal, filter }) {
    const querystring = qs.stringify(query, {
        encode: false,
        addQueryPrefix: true,
    });

    try {
        const res = await fetch(`${API_URL}/${path}${querystring}`, { signal });
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

async function mutater({ method = "POST", path, query, payload, signal }) {
    const queryString = qs.stringify(query, {
        encode: false,
        addQueryPrefix: true,
    });
    try {
        const res = await fetch(`${API_URL}/api/${path}${queryString}`, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            signal,
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export async function createCampArea(payload) {
    return mutater({
        path: "camping-areas",
        payload: { data: payload },
    });
}
