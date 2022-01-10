/**
 * @jest-environment jsdom
 */

import { createTodoItem } from "./main.js";

test("createTodoItem('dom test 해보기')", () => {
  expect(createTodoItem("dom test 해보기")).toMatchSnapshot();
});
