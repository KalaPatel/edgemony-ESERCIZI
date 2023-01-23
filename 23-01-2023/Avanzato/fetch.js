const BASE_URL = "https://dummyjson.com/";

const GET = async(endpoint,) => {
    const res = await fetch (BASE_URL + endpoint + Math.floor(Math.random(1) * 30));
    const data = await res.json();
    return data;
}


export {GET}

