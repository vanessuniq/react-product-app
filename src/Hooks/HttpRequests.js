import axios from 'axios';
import {useState, useEffect} from "react";

export default function useAxiosGet(url) {
    const [request, setrequest] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect(() => {
        setrequest({loading: true})
        axios.get(url)
            .then(resp => {
                setrequest({loading: false, data: resp.data})
            })
            .catch(() => setrequest({error: true}))
    }, [url]);

    return request

}
