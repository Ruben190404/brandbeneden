
export default function TokenStorage() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('b');

        if (token) {
            localStorage.setItem('token', `Bearer ${token}`);
        }
    window.location.href = "/"
}