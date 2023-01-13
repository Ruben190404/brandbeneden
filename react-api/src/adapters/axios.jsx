
export default function setConfig() {
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const config = {
        headers: { Authorization: `Bearer ${params.get('b')}` }
    };

    return (
        config
    )
}

