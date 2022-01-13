/**
 * @jest-environment jsdom
 */

import { createTodoItem } from "./createTodoItem.js";

test("createTodoItem('dom test 해보기')", () => {
  expect(createTodoItem("dom test 해보기")).toMatchSnapshot();
});
