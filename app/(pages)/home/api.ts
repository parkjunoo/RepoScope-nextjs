import service from "../../_service/axios";

export const searchRepo = async () => {
  return await service.githubService.get("/search/repositories?q=windows");
};
