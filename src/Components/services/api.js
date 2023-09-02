import axios from 'axios'

export const categoryMovie = async (API_URL) => {
    try
    {
        let res = await axios.get(API_URL);
        return res.data;
    }
    catch(error)
    {
        console.log('Error while calling the API', error.message);
        return error.res.data;
    }
}