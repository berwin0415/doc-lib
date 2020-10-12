import React from "react";
import { ConfigProvider } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import "./index.css";
import ErrorBoundary from "../components/ErrorBoundary";

import Layout from "../layout";
import routes from "../routes";

moment.locale("zh-cn");

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <ErrorBoundary>
        <Layout routes={routes} />
      </ErrorBoundary>
    </ConfigProvider>
  );
};

export default App;
