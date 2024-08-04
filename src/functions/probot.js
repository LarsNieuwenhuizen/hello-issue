const { app } = require("@azure/functions");
const {
  createAzureFunctionV4,
  createProbot,
} = require("@probot/adapter-azure-functions");
const probotapp = require("../app");

app.http("probot", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: createAzureFunctionV4(probotapp, {
    probot: createProbot(),
  }),
});
