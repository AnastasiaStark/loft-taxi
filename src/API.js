export const serverLogin = async (email, password) => {
    return fetch('https://loft-taxi.glitch.me/auth', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email, password })
    }).then(res => res.json());
};
