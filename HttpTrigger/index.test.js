const httpFunctions = require("./index");
const context = require("../testing/context");

test("Http trigger example", async () => {
  const request = {
    query: { name: "schuc" },
  };

  await httpFunctions(context, request);
  // expoct(context.res.body).toEqual("Hello, schuc");
  expect(context.res.body).toEqual("welcome, schuc");
  expect(context.log.mock.calls.length).toEqual(1);
});
