import api from "../../_service/axios";

interface SearchRepoResponse {
  items: Array<{
    id: number;
    name: string;
    full_name: string;
    description: string;
    stargazers_count: number;
  }>;
}

export const searchRepo = async (
  query: string
): Promise<SearchRepoResponse> => {
  try {
    const response = await api.githubService.get<SearchRepoResponse>(
      "/search/repositories",
      {
        q: query,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching repositories:", error);
    throw error;
  }
};
