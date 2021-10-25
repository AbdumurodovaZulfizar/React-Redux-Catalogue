import { useEffect, useState } from "react";

const useCategories = (category) => {
  const [errorCategory, setErrorCategory] = useState(false);
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoadingCategory(true);
    setErrorCategory(false);

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(resp => resp.json())
      .then((result) => {
        setLoadingCategory(false);
        setCategories(result.categories);
        console.log(result.categories);
      }
      ).catch((err) => {
        if (err) {
          setErrorCategory(true);
        }
      })
    }
  ,[category])

  return {loadingCategory, categories, errorCategory}
}

export default useCategories;
