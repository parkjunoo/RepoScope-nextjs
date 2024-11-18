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
interface QueryParams {
  user?: string;
  repoName?: string;
}

export const searchRepo = async (
  queryParams: QueryParams
): Promise<SearchRepoResponse> => {
  try {
    const response = await api.githubService.get<SearchRepoResponse>(
      "/search/repositories",
      {
        q:
          queryParams.user &&
          `user:${queryParams.user}` + queryParams.repoName &&
          `${encodeURIComponent(queryParams.repoName || "")}`,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching repositories:", error);
    throw error;
  }
};
