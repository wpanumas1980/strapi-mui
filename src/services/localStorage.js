const setToken = (token) => {
    localStorage.setItem("ACCESS_TOKEN", token);
};

const getToken = () => {
    return localStorage.getItem("ACCESS_TOKEN");
};

const clearToken = () => {
    localStorage.clear();
};

const allLocal = {
    setToken,
    getToken,
    clearToken,
}

export default allLocal;
