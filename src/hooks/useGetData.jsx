import { useState, useEffect } from "react";

const useGetData = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      window
      .fetch(url)
      .then((req) => req.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    }, []);

    return{
      data, 
      loading,
    };
}

export default useGetData