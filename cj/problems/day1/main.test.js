/**
 * @jest-environment jsdom
 */

const createTodoItem = require("./main");

test("createTodoItem('dom test 해보기')", () => {
  expect(createTodoItem("dom test 해보기")).toMatchSnapshot();
});
