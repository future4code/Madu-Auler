import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestDataId = (initialData, url) => {
    const [data, setData] = useState(initialData);
    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((res) => {
                setData(res.data.post);
                setPostComments(res.data.post.comments);

            })
            .catch((err) => {
                console.log(err);
                alert("Ocorreu um erro, tente novamente");
            });
    }, [url]);
    return data;
};

export default useRequestDataId