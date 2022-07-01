import Buffer from "../types/Buffer";
import IListStrategy from "./IListStrategy";

export default class MarkdownListStrategy implements IListStrategy {
  start(buffer: Buffer): void {
    //
  }

  end(buffer: Buffer): void {
    //
  }

  addListItem(buffer: Buffer, item: string) {
    buffer.push(` * ${item}`);
  }
}
