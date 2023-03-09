import axios from 'axios';

export default axios.create({
    baseURL: 'https://6679-106-214-147-89.in.ngrok.io/',
    headers: {"ngrok-skip-browser-warning": "any"}
});