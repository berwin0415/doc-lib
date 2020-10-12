import React from "react";
import { renderRoutes } from "react-router-config";

export default function Root({ route }) {
  return <>{renderRoutes(route.routes)}</>;
}
