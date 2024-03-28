import axios from "axios";

export const API_KEY = "78684310-850d-427a-8432-4a6487f6dbc4";
const BASE_URL = "http://95.217.134.12:4010";

const apiService = axios.create({
  baseURL: BASE_URL,
});

const generatePdf = async (text:string) => {
  try {
    const response = await apiService.post(
      `/create-pdf?apiKey=${API_KEY}`,
      { text },
      { responseType: "arraybuffer" }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to generate PDF");
  }
};

export { generatePdf };
