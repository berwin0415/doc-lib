import React from "react";
import { Layout } from "antd";
import style from "./styles.module.scss";
import Logo from "src/components/Logo";
import Menu from "./Menu";

const { Sider: AntdSider } = Layout;

export default function Sider({ routes }) {
  const menuRoutes = routes[0].routes;

  return (
    <AntdSider
      className={style.sider}
      breakpoint="lg"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Logo className="logo" />
      <Menu routes={menuRoutes}></Menu>
    </AntdSider>
  );
}
