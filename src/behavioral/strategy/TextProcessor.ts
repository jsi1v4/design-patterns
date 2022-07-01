import HtmlListStrategy from "./strategies/HtmlListStrategy";
import IListStrategy from "./strategies/IListStrategy";
import MarkdownListStrategy from "./strategies/MarkdownListStrategy";
import Buffer from "./types/Buffer";
import OutputFormat from "./types/OutputFormat";

export default class TextProcessor {
  private buffer: Buffer = [];
  private listStrategy!: IListStrategy;

  constructor(outputFormat: OutputFormat) {
    this.setOutputFormat(outputFormat);
  }

  setOutputFormat(format: OutputFormat) {
    switch (format) {
      case OutputFormat.Markdown:
        this.listStrategy = new MarkdownListStrategy();
        break;
      case OutputFormat.Html:
        this.listStrategy = new HtmlListStrategy();
        break;
    }
  }

  appendList(items: string[]) {
    this.listStrategy.start(this.buffer);
    for (let item of items) this.listStrategy.addListItem(this.buffer, item);
    this.listStrategy.end(this.buffer);
  }

  clear() {
    this.buffer = [];
  }

  toString() {
    return this.buffer.join("\n");
  }
}
