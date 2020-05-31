import axios from 'axios';

const url = 'http://localhost:5000/api';
const connection = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        'Acces-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
        'Acces-Control-Allow-Headers': 'Content-Type'
    }
});

export default async function getPosts() {
    const data = connection.get('/posts')
        .then((result) => {
            return result.data;
        })
        .catch((err) => {
            return err;
        });
    return data;
}

export async function addPost(
    activity: string,
    date: string,
    time: number,
    text: string,
    intensity: string,
    distance: number
    ) {
    const data = connection.post('/posts', {
        'activity': activity,
        'date': date,
        'distance': distance,
        'time': time,
        'text': text,
        'intensity': intensity
    })
        .then((result) => {
            return result.data;
        })
        .catch((err) => {
            return err;
        });
    return data;
}
