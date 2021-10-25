import { useEffect, useState } from "react";

const useFoods = (category) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category)
      .then(resp => resp.json())
      .then((result) => {
        setLoading(false);
        setLaunches(result);
        console.log(result);
      }
      ).catch((err) => {
        if (err) {
          setError(true);
        }
      })
    }
  ,[category])

  return {loading, launches, error}
}

export default useFoods;
