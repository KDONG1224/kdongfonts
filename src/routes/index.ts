import * as paths from "./const";
import * as pages from "pages";

interface Routes {
  public: RoutesOption[];
  // private?: RoutesOption[];
}

interface RoutesOption {
  path: string;
  component: React.FunctionComponent;
}

export const routes: Routes = {
  public: [
    {
      path: paths.ROUTE_PAGES,
      component: pages.LazyHomePage,
    },
    {
      path: paths.ROUTE_FONT_PAGE,
      component: pages.LazyFontPage,
    },
  ],
  // private: [
  //   {
  //     path: paths.ROUTE_PAGES,
  //     component: pages.LazyHomePage
  //   }
  // ]
};
