import React from "react";
import { Layout as AntdLayout } from "antd";
import Sider from "./Sider";
import Content from "./Content";
import style from './styles.module.scss'
const { Header } = AntdLayout;
export default function Layout({ routes }) {
  return (
    <AntdLayout className={style.layout}>
      <Sider></Sider>
      <AntdLayout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content routes={routes}></Content>
      </AntdLayout>
    </AntdLayout>
  );
}
