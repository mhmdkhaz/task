import { http, HttpResponse, delay } from "msw";
import { mockUserProfile, mockBenefits, mockRewards } from "./data";

export const handlers = [
  http.get("/api/profile", async () => {
    await delay(150);
    return HttpResponse.json(mockUserProfile);
  }),

  http.get("/api/benefits", async () => {
    await delay(200);
    return HttpResponse.json(mockBenefits);
  }),

  http.get("/api/rewards", async () => {
    await delay(100);
    return HttpResponse.json(mockRewards);
  }),

  http.post("/api/benefits/claim", async () => {
    await delay(300);
    return HttpResponse.json({ success: true });
  }),
];
