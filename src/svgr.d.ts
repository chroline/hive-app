// https://github.com/pd4d10/vite-plugin-svgr/issues/3#issuecomment-787016954
declare module "*.svg?react" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

  export default ReactComponent;
}
