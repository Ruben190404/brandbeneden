

export default function setConfig() {
    const token = localStorage.getItem('token');
    const config = {
        headers: { Authorization: token }
    };

    return (
        config
    )
}

export const apiUrl = "https://laravel-api.test"
