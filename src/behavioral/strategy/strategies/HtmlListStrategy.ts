import Buffer from "../types/Buffer";
import IListStrategy from "./IListStrategy";

export default class HtmlListStrategy implements IListStrategy {
  start(buffer: Buffer): void {
    buffer.push("<ul>");
  }

  end(buffer: Buffer): void {
    buffer.push("</ul>");
  }

  addListItem(buffer: Buffer, item: string) {
    buffer.push(`  <li>${item}</li>`);
  }
}
