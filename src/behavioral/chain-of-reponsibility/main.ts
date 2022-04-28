import readline from "readline";

import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import CheckWeakPasswordMiddleware from "./middlewares/CheckWeakPasswordMiddleware";
import Middleware from "./middlewares/Middleware";
import Server from "./server/Server";

function runPromptQuestions(server: Server) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Digite o seu e-mail:", (email) => {
    rl.question("Digite a sua senha:", (password) => {
      server.logIn(email, password);
      rl.close();
    });
  });

  rl.on("close", () => {
    runPromptQuestions(server);
  });
}

function main() {
  const server: Server = new Server();
  const middleware: Middleware = new CheckUserMiddleware();

  middleware.linkWith(new CheckPermissionMiddleware());
  middleware.linkWith(new CheckWeakPasswordMiddleware());

  server.setMiddleware(middleware);

  runPromptQuestions(server);
}

main();
