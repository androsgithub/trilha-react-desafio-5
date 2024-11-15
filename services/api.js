import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://hqmvpeqyxqwowftdagnh.supabase.co/rest/v1',
  headers: {
    apikey: '',
    authorization: '',
  },
});
