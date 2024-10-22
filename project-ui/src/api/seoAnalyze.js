import axios from "axios";
export const seoAnalyze = async (url) =>
{
  try {
    
    const response = await axios.get(
      `http://localhost:3000/api/seo/analyze?url=${url}`
    );
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};
