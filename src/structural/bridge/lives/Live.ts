import IPlatform from "../platforms/interfaces/IPlatform";
import ILive from "./interfaces/ILive";

export default class Live implements ILive {
  constructor(protected platform: IPlatform) {}

  broadcasting(): void {
    console.log("Iniciando a Transmissão!");
  }

  result(): void {
    console.log("**** ON AIR ****");
  }
}
