const BASE_URL = "/api/posts";

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

export function create(post) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body:JSON.stringify(post)
    }).then(res => res.json());
}