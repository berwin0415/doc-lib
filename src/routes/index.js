import Root from "src/components/Root";
import Bundle from "src/components/Bundle";
import { HomeOutlined } from "@ant-design/icons";

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        meta: { title: "首页", Icon: HomeOutlined },
        component: Bundle(() => import("src/pages/Home")),
      },
    ],
  },
];

export default routes;
