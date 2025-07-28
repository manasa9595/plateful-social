import { mockRestaurants } from "../data/mockRestaurants";

export async function getRestaurants() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRestaurants);
    }, 500);
  });
}
