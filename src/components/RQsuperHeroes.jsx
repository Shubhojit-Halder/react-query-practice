import axios from "axios";
import { useState } from "react";
// import { useQuery } from "react-query";
import {useQuery} from "@tanstack/react-query"

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQsuperHeroes = () => {
  // const timeInterval = 3000;
  const [polling, setPolling] = useState(3000);
  const onSuccess = (data) => {
    if (data.data.length=== 4) setPolling(false);
    console.log("Perform side-effects after success!", data);
  };
  const onError = (error) => {
    setPolling(false);
    // console.log("")
    console.log(`Polling set to ${polling} after error! ${error}`);
  };

  const { isLoading, data, isError, error, refetch } = useQuery(
    {
      queryKey:"super-heroes",
      queryFn: fetchSuperHeros,
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <div>RQsuperHeroes</div>
      {data?.data.map((hero, key) => {
        return <div key={key}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQsuperHeroes;
