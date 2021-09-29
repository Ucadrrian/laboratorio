const httpFunctions = require("./index");
const context = require("../testing/context");

test("Http trigger example", async () => {
  const request = {
    query: { name: "schuc" },
  };

  await httpFunctions(context, request);
});
