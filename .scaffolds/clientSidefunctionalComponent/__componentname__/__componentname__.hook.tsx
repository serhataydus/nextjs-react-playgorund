import { I<%=componentname%>Props } from "./<%=componentname%>.model";

export const use<%=componentname%> = (props: I<%=componentname%>Props) => {
  // Logic and hooks go here.

  const someValue = "Hello from <%=componentname%> hook!";

  return {
    someValue,
  };
};
