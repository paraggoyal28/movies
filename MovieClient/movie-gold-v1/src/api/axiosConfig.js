import axios from 'axios';

export default axios.create({
    baseURL: 'https://f0da-106-214-147-89.in.ngrok.io/',
    headers: {"ngrok-skip-browser-warning": "any"}
});