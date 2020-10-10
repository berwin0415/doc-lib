import React from "react";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const { Content: AntdContent } = Layout;

export default function Content({ routes = [] }) {
  return (
    <AntdContent style={{ margin: "24px 16px 0" }} routes={routes}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </div>
    </AntdContent>
  );
}
