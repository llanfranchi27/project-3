const BASE_URL = '/api/playlists';
// import { getToken } from './users-service';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}