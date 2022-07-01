import TextProcessor from "./TextProcessor";
import OutputFormat from "./types/OutputFormat";

function main() {
  let tp = new TextProcessor(OutputFormat.Markdown);
  tp.appendList(["foo", "bar", "baz"]);
  console.log("Markdown:");
  console.log(tp.toString());

  tp.clear();
  tp.setOutputFormat(OutputFormat.Html);
  tp.appendList(["alpha", "beta", "gamma"]);
  console.log("\nHtml:");
  console.log(tp.toString());
}

main();
