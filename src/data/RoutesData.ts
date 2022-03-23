import { RoutesData } from "./interface/route.interface";

export const routesData : RoutesData[] = [
    {
      path: "/",
      component: "Home",
    },
    {
      path: "/book",
      component: "Book",
    },
    {
        path: "/user",
        components : "User"
    },
    {
        path: "/user/[:id]",
        component: "UserDetails",
    },
    {
        path: "/book/[:id]",
        component: "BookDetails",
    },
  ]