import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestDataId = (initialData, url) => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((res) => {
                setData(res.data.post);
            })
            .catch((err) => {
                console.log(err);
                alert("Ocorreu um erro, tente novamente");
            });
    }, [url]);
    return data;
};

export default useRequestDataId