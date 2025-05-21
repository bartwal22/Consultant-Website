import { configureStore } from "@reduxjs/toolkit";
import { ContactApi } from "./Reducer/Contact";
import { BlogApi } from "./Reducer/Blog";
import { GalleryApi } from "./Reducer/Gallery";
import { IndustryApi } from "./Reducer/Industry";
import { ProjectApi } from "./Reducer/Project";
import { ServiceApi } from "./Reducer/Service";
import { TeamApi } from "./Reducer/Team";

export const store = configureStore({
  reducer: {
    [ContactApi.reducerPath]: ContactApi.reducer,
    [BlogApi.reducerPath]: BlogApi.reducer,
    [GalleryApi.reducerPath]: GalleryApi.reducer,
    [IndustryApi.reducerPath]: IndustryApi.reducer,
    [ProjectApi.reducerPath]: ProjectApi.reducer,
    [ServiceApi.reducerPath]: ServiceApi.reducer,
    [TeamApi.reducerPath]: TeamApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ContactApi.middleware)
      .concat(BlogApi.middleware)
      .concat(GalleryApi.middleware)
      .concat(IndustryApi.middleware)
      .concat(ProjectApi.middleware)
      .concat(ServiceApi.middleware)
      .concat(TeamApi.middleware),
});
