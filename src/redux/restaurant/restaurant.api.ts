import { CustomAxiosInstance } from "../../utils/axios";
import { PaginatedApiResponse } from "../../utils/types";

import { Restaurant } from "./restaurant.types";

export const makeFetchRestaurant = async (
  fetchUrl?: string
): Promise<{
  restaurants: Array<Restaurant>;
  nextUrl: string | null;
}> => {
  const url = fetchUrl ? fetchUrl : "restaurants/";
  const axiosInstance = CustomAxiosInstance.getInstance();
  const rep = await axiosInstance.get(url);
  const response: PaginatedApiResponse<Restaurant> = rep.data;
  return {
    restaurants: response.results || [],
    nextUrl: CustomAxiosInstance.removeBaseUrlFromUrl(response.next)
  };
};
