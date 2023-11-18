"use client";

import React from "react";
import { I<%=componentname%>Props } from "./<%=componentname%>.model";
import { <%=componentname%>Styled } from "./<%=componentname%>.styled";

const <%=componentname%>: React.FC<I<%=componentname%>Props> = (props) => { 
  return (
    <<%=componentname%>Styled data-testid={props.dataTestId} data-traceid={props.dataTraceId}>
    </<%=componentname%>Styled>
  );
};

export default <%=componentname%>;
