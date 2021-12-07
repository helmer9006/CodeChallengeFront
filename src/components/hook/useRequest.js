import axios from "axios";
import { useState, useEffect } from "react";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

function useRequest(endpoint) {
  const [requestData, setRequestData] = useState(initialState);
  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?${endpoint}`)
      .then((response) => {
        console.log(response.data);
        setRequestData({
          data: response.data,
          loading: false,
          error: undefined,
        });
      })
      .catch((error) => {
        setRequestData({
          data: undefined,
          loading: false,
          error: error.message,
        });
      });
  }, []);

  return requestData;
}

export default useRequest;
