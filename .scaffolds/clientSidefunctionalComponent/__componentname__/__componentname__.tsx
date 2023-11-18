"use client";

import React from "react";
import { I<%=componentname%>Props } from "./<%=componentname%>.model";
import { use<%=componentname%> } from "./<%=componentname%>.hook";
import { <%=componentname%>Styled } from "./<%=componentname%>.styled";

const <%=componentname%>: React.FC<I<%=componentname%>Props> = (props) => {
  const { someValue } = use<%=componentname%>(props);

  return (
    <<%=componentname%>Styled data-testid={props.dataTestId} data-traceid={props.dataTraceId}>
      {someValue}
    </<%=componentname%>Styled>
  );
};

export default <%=componentname%>;
