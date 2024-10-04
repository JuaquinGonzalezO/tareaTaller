import axios from "axios";

export const getChistesApi = async () => {
  const apiChistes = "https://v2.jokeapi.dev/joke/Any?type=single&amount=10";
  try {
    const res = await axios.get(apiChistes);
    if (res.status === 200) {
      console.log("respuesta de api", res.data);
     console.log("respuesta de chistes", res.data.jokes);
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
