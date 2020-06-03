import axios from 'axios';

const url = '/api';
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

//Hämta poster
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

//Hämta post på id
export async function getPostById(
    id: string
) {
    const endpoint = `/posts/${id}`;
    const data = connection.get(endpoint)
        .then((result) => {
            return result.data;
        })
        .catch((err) => {
            return err;
        });
    return data;
}

//lägg till poster
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
//radera poster
export async function deletePost(
    id: string
) {
    const endpoint = `/posts/delete/${id}`;
    const data = connection.delete(endpoint, {
        data: {
            id
        },
        headers: {
            Authorization: '*'
        }
    })
        .then((result) => {
            return result.data.id;
        })
        .catch((err) => {
            return err;
        });
    return data;
}
//uppdatera poster
export async function updatePost(
    id: string,
    activity: string,
    date: string,
    time: number,
    text: string,
    intensity: string,
    distance: number
) {
    const endpoint = `/posts/update/${id}`;
    const data = connection.post(endpoint, {
        id,
        'activity': activity,
        'date': date,
        'distance': distance,
        'time': time,
        'text': text,
        'intensity': intensity
    })
        .then((result) => {
            return result.data.id;
        })
        .catch((err) => {
            return err;
        });
    return data;
}
