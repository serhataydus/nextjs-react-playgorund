"use client";

import React from "react";
import { IEmptyBasicElementProps } from "./EmptyBasicElement.model";

const EmptyBasicElement: React.FC<IEmptyBasicElementProps> = (props) => {
  return (
    <div data-testid={props.dataTestId} data-traceid={props.dataTraceId}>
      {props.children}
    </div>
  );
};

export default EmptyBasicElement;
