import axios from "axios";

const fetchAll = async () => {
    const url = "http://localhost:3000/api/image";
    return await axios.get(url);
}

export default fetchAll;