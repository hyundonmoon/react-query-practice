import { BASE_URL } from "@/shared/api";

export default async function getHackerNewsStories(page: number) {
  const response = await fetch(
    `${BASE_URL}/search_by_date?tags=story&hitsPerPage=30&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}
