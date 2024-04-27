import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4fdfe258eb614c7890a21a9ada7b4750',
    },
});
