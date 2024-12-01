import api from "../../../_service/axios";

interface SearchRepoResponse {
  items: Array<{
    id: number;
    name: string;
    full_name: string;
    description: string;
    stargazers_count: number;
  }>;
}

export const searchRepo = (
  searchKeyword: string
): Promise<SearchRepoResponse> => {
  return api.githubService
    .get<SearchRepoResponse>("/search/repositories", { q: searchKeyword })
    .then((response) => response && response.data);
};
