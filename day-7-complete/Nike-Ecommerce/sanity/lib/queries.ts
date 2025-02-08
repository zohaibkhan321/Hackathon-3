import { groq } from 'next-sanity';


export const sixProductsQuery = groq`*[_type == "product"][0..5]`;

export const allProductsQuery = groq`*[_type == "product"]`;

export const jordanNikeProductsQuery = groq`*[_type == "product" && "nike jordan" in tags]`;

export const jordanProductsQuery = groq`*[_type == "product" && "jordan" in tags]`;

export const airProductsQuery = groq`*[_type == "product" && "air" in tags]`;

export const womenProductsQuery = groq`*[_type == "product" && "women" in tags]`;

export const kidsProductsQuery = groq`*[_type == "product" && "kids" in tags]`;

export const newProductsQuery = groq`*[_type == "product" && "new" in tags]`;

export const menProductsQuery = groq`*[_type == "product" && "men" in tags]`;

export const bestsellerProductsQuery = groq`*[_type == "product" && "bestseller" in tags]`;

export const bannerQuery = groq`*[_type == 'banner' && "banner" in tags]`;

export const menBannerQuery = groq`*[_type == 'banner' && "men" in tags]`;

export const helpQuery =`*[_type == 'help']`

export const getEssentialsMensQuery = groq`*[_type == 'banner' && "essentials-mens" in tags]`;

export const getEssentialsWomensQuery = groq`*[_type == 'banner' && "essentials-womens" in tags]`;

export const getEssentialsKidsQuery = groq`*[_type == 'banner' && "essentials-kids" in tags]`;