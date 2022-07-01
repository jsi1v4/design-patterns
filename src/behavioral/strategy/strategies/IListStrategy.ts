import Buffer from "../types/Buffer";

export default interface ListStrategy {
  start(buffer: Buffer): void;
  end(buffer: Buffer): void;
  addListItem(buffer: Buffer, item: string): void;
}
