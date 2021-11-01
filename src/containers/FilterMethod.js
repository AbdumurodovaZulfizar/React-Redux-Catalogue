import {
  useEffect,
  useState
} from "react";

const useCategories = (category) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(resp => resp.json())
      .then((result) => {
        setCategories(result.categories);
        console.log(result.categories);
      }).catch((err) => {
        if (err) {}
      })
  }, [category])

  return (
    <div>
      Hello World
    </div>
  )
}

export default useCategories;