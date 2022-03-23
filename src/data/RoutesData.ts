import { RoutesData } from "../interfaces/route.interface"

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
        component : "User"
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