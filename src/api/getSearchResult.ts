import API from "./api";

export const getSearchResult = async (
  keyword: string,
  nextPageToken: string = "",
) => {
  const params = {
    pageToken: nextPageToken,
    q: keyword,
  };
  const { data } = await API.get(`/search`, { params });

  return data;
};
