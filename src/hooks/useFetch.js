import { useEffect, useState } from "react";

// custom h0ook to fetch data from a provided URL insided container cakked baseURL in app.jsx
export const useFetch = (url) => {
  const [data, setData] = useState(null); // State to store the fetched data, initially null

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to perform side effects (data fetching in this case)
  useEffect(() => {
    const getData = async () => {
      //Async function to fetch data
      const response = await fetch(url); // Fetch data from the provided URl
      const jData = await response.json(); // Parse response JSON and keep inside jData

      setData(jData.tasks ? jData.tasks : jData.task);
      setLoading(false);
      console.log(jData); // Update the [data] state that was formally null with setData... updating data with fetched data
    };

    setTimeout(async () => {
      try {
        await getData(); // envoke the function
      } catch (error) {
        console.log(error);
        setError("Oooops something went wrong");
        setLoading(false);
      }
    }, 3000);
  }, []);

  return { data, setData, loading, error }; // return an object containing data
};
