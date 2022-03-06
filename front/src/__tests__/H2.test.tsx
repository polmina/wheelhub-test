/**
 * @jest-environment jsdom
 */

import renderer from "react-test-renderer";

import { H2 } from "../components/h2";

describe("H2", () => {
  test("H2 children works", async () => {
    const component = renderer.create(<H2>Siguiente</H2>);
    let tree = component.toJSON();
    expect(tree.children).toContain("Siguiente");
  });
});
