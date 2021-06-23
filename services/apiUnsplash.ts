import axios from 'axios';

export const apiUnsplash = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
      'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
    }
})