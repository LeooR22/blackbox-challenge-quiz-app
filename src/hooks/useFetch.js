import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";

export const useFetch = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getData().then((data) => {
      setState({
        data: data,
        loading: false,
      });
    });
  }, []);
  return state;
};
