// TODO Coverage ekle

import { render, screen } from "@testing-library/react";
import <%=componentname%> from "./<%=componentname%>";

describe("<%=componentname%>", () => {
  it("<%=componentname%> should render without errors", () => {
    const { getByTestId } = render(
      <<%=componentname%> {...{ datatestid: "<%=componentname%>" }} />
    );
    const element = getByTestId("<%=componentname%>");
    expect(element).toBeInTheDocument();
  });
});

// TODO Coverage ekle
