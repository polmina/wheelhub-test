/**
 * @jest-environment jsdom
 */
import renderer from "react-test-renderer";

import { Label } from "../components/label";

describe("Label", () => {
  test("Label children works", async () => {
    const component = renderer.create(<Label>Etiqueta</Label>);
    let tree = component.toJSON();
    expect(tree.children).toContain("Etiqueta");
  });
});
