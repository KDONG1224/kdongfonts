import { lazy } from "react";

export * from "./font";

export const LazyHomePage = lazy(() => import("./HomePage"));
