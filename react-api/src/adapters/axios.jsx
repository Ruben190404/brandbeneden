

export default function setConfig() {
    const token = localStorage.getItem('token');
    const config = {
        headers: { Authorization: "Bearer "+token }
    };

    return (
        config
    )
}
