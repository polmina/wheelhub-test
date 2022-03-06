/**
 * @jest-environment jsdom
 */
import renderer from "react-test-renderer";

import { H3 } from "../components/h3";

describe("H3", () => {
  test("H3 children works", async () => {
    const component = renderer.create(<H3>Título H3</H3>);
    let tree = component.toJSON();
    expect(tree.children).toContain("Título H3");
  });
});
