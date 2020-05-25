const routes = [
  {
    path: "/",
    component: () => import("@/views/Layout/Index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/Index.vue")
      },
      {
        path: "project/list",
        component: () => import("@/views/Project/List.vue")
      },
      {
        path: "project/pageDetail",
        component: () => import("@/views/Project/PageDetail.vue")
      },
      {
        path: "lang",
        component: () => import("@/views/Lang/Index.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue")
  }
];
export default routes;
