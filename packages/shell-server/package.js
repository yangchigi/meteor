Package.describe({
  name: "shell-server",
  version: "0.3.0-beta.27",
  summary: "Server-side component of the `meteor shell` command.",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.use("ecmascript", "server");
  api.mainModule("main.js", "server");
});
