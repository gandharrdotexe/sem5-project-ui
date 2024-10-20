import axios from "axios";
export const aiSuggestion = async (data) => {
  try {
    const response = await axios.get(
        `http://localhost:3000/api/ai/Suggestion`,
        {
            data
        }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};
