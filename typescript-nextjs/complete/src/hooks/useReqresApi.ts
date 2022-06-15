import axios from "axios";
import { useEffect, useState } from "react";
import { ReqresApiResponse } from "types/api";

function useReqresApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get<ReqresApiResponse<T>>(
        `https://reqres.in/api/${endpoint}`
      );

      setData(res.data.data);
    }

    fetchData();
  }, [endpoint]);

  return data;
}

export default useReqresApi;
