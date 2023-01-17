

export default function setConfig() {
    const token = localStorage.getItem('token');
    const config = {
        headers: { Authorization: token }
        headers: { Authorization: token },
        validateStatus: function (status){return errorHandler(status)}
    };

    return (
        config
    )
}

export const apiUrl = "https://laravel-api.test"

export function errorHandler(e){
    if (e === 401){
        window.location.href = apiUrl + '/login/azure'
        return false
    }

    return e < 300 && e >= 200;
}
