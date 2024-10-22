import axios from "axios";
export const aiSuggestion = async ({ data }) => {
  try
  {
    let data1 = {
      metaDescription:
        "Testing.com is a trusted health resource designed to help patients and caregivers easily order and understand the many lab tests that are a vital part of medical care.",
      keywords: [
        "testing",
        "tests",
        "home",
        "test",
        "laboratory",
        "window",
        "your",
        "that",
        "data",
        "info",
      ],
      keywordsInTitleAndDescription: {
        titleKeywords: ["testing", "tests", "test"],
        descriptionKeywords: ["testing", "tests", "test", "that"],
      },

      seoTitle: {
        title: "Order Lab Tests and Blood Tests Online | Testing.com",
        titleLength: 52,
      },
    };
    const response = await axios.post(
      "http://localhost:3000/api/ai/Suggestions", data

    );
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};
