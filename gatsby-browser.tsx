import { PluginOptions, WrapPageElementBrowserArgs } from "gatsby";
import React, { FC } from "react";
import Layout from "./src/components/Layout";

export const wrapPageElement: FC<{
  element: WrapPageElementBrowserArgs;
  props: PluginOptions;
}> = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
