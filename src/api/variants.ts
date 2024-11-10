import { fetchFromApi } from "../helpers/fetch";
import { ResponseVariant, Variant } from "../types/types";

/**
 * Transform the response data into an array of objects 
 * with variant data and id
 */
const transformVariantsData = (variants: ResponseVariant): Variant[] => {
  return Object.entries(variants).map(([id, variant]) => ({ id, ...variant }));
}

export const getVariants = async (): Promise<Variant[]> => {
  const url = import.meta.env.VITE_VARIANT_BASE_API_URL ?? ''
  const { success, data } = await fetchFromApi(url);
  if (!success) return [];
  return transformVariantsData(data) ?? [];
}