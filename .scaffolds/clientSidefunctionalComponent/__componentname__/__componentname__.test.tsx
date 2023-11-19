import { render, screen } from "@testing-library/react";
import <%=componentname%> from "./<%=componentname%>";

describe("<%=componentname%>", () => {
  it("<%=componentname%> should render without errors", () => {
    const testId = "<%=componentname%>TestId";
    const traceId = "<%=componentname%>TraceId";
    const { getByTestId } = render(
      <<%=componentname%> dataTestId={testId} dataTraceId={traceId} />
    );

    const element = getByTestId(testId);
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("data-traceid", traceId);
  });
});
