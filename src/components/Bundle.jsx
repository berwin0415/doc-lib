import React, { Suspense } from "react";
import { Spin } from "antd";

export default function Bundle(loader, { loading } = {}) {
  const AsyncComponent = React.lazy(loader);
  console.log(AsyncComponent);
  return (props) => {
    return (
      <Suspense fallback={<Spin spinning={true} delay={200}></Spin>}>
        <AsyncComponent {...props}></AsyncComponent>
      </Suspense>
    );
  };
}
