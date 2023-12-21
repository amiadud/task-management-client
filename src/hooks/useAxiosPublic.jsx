import axios from 'axios';

const axiosOpen = axios.create({
    baseURL: '',
})
const useAxiosPublic = () => {
    return axiosOpen
};

export default useAxiosPublic;