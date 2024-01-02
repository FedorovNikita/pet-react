import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(res => {
  // @ts-ignore 
  // test loader Suspense
  setTimeout(() => res(import('./AboutPage')), 2000);
}))