import axios, {AxiosInstance} from "axios";

const axiosIntance: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    }
})

/* Este archivo sirve para decirle a axios que cada peticion la envie al localhost3000 y que recibira un json*/

export default axiosIntance