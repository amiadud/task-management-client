import axios from 'axios';

const axiosOpen = axios.create({
    baseURL: 'https://task-management-server-sable.vercel.app',
})
const useAxiosPublic = () => {
    return axiosOpen
};

export default useAxiosPublic;