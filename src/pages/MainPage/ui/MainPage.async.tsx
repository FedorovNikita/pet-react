import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise(res => {
  // @ts-ignore 
  // test loader Suspense
  setTimeout(() => res(import('./MainPage')), 2000);
}))