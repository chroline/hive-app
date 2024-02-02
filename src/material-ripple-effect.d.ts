declare module "material-ripple-effects" {
  import * as React from "react";

  declare class Ripple {
    x: number;
    y: number;
    z: number;

    constructor();

    findFurthestPoint(
      clickPointX: number,
      elementWidth: number,
      offsetX: number,
      clickPointY: number,
      elementHeight: number,
      offsetY: number
    ): number;

    appyStyles(
      element: HTMLElement,
      color: "dark" | "light",
      rect: DOMRect,
      radius: number,
      event: React.MouseEvent
    ): void;

    applyAnimation(element: HTMLElement): void;

    create(event: React.MouseEvent, color: "dark" | "light"): void;
  }

  export = Ripple;
}
