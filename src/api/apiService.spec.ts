import axios from "axios";
import { API_KEY, generatePdf } from "./apiService";

jest.mock("axios");

test("generatePdf sends request to server", async () => {
  const mockAxios = jest.spyOn(axios, "post");

  const text = "This is some text for the PDF";
  const expectedUrl = `/create-pdf?apiKey=${API_KEY}`;
  const expectedRequestBody = { text };
  const expectedConfig = { responseType: "arraybuffer" };

  await generatePdf(text);

  expect(mockAxios).toHaveBeenCalledWith(expectedUrl, expectedRequestBody, expectedConfig);
});
