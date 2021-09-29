const httpFunctions = require("./index");
const context = require("../testing/context");

test("Http trigger example", async () => {
  const request = {
    query: { name: "schuc" },
  };

  await httpFunctions(context, request);
  // expoct(context.res.body).toEqual("Hello, schuc");
  expoct(context.res.body).toContain("example");
  expect(context.res.body).toEqual("welcome, schuc example");

  // expect(context.log.mock.calls.length).toEqual(1);
  expect(context.log.mock.calls.length).toBe(1);
});
