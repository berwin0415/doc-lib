import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Menu as AntdMenu } from "antd";

const { Item: AntdMenuItem } = AntdMenu;

export default function Menu({ routes }) {
  const renderMenuItem = (routes) =>
    routes.map((route) => {
      const { Icon = MenuOutlined, title = "Menu Title", hidden } =
        route?.meta || {};
      if (hidden) {
        return null;
      }
      return (
        <AntdMenuItem key={route.path} icon={<Icon />}>
          {title}
        </AntdMenuItem>
      );
    });
  return (
    <AntdMenu theme="dark" mode="inline">
      {renderMenuItem(routes)}
    </AntdMenu>
  );
}
