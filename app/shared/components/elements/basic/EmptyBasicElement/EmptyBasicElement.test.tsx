import { render, screen } from "@testing-library/react";
import EmptyBasicElement from "./EmptyBasicElement";

describe("EmptyBasicElement", () => {
  it("EmptyBasicElement should render without errors", () => {
    const testId = "EmptyBasicElementTestId";
    const traceId = "EmptyBasicElementTraceId";
    const { getByTestId } = render(
      <EmptyBasicElement dataTestId={testId} dataTraceId={traceId} />
    );

    const element = getByTestId(testId);
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("data-traceid", traceId);
  });
});
