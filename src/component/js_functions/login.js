import { apiRequest } from "./api";
export async function signup(name, email, password) {
    const data = await apiRequest("/auth/signup", "POST", {
        name,
        email,
        password,
    });

    localStorage.setItem("token", data.token);

    return data;
}

export async function login(email, password) {
    const data = await apiRequest("/auth/login", "POST", {
        email,
        password,
    });

    localStorage.setItem("token", data.token);

    return data;
}

