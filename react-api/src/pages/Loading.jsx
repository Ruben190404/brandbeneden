import {AuthContext} from "../contexts/AuthContext";
import {useContext} from "react";

function Loading() {
    const {loading} = useContext(AuthContext);

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}