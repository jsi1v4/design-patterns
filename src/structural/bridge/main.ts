import IPlatform from "./platforms/interfaces/IPlatform";

import AdvancedLive from "./lives/AdvancedLive";
import Live from "./lives/Live";

import Facebook from "./platforms/Facebook";
import Twitch from "./platforms/Twitch";
import YouTube from "./platforms/YouTube";

function startLive(platform: IPlatform) {
  const live = new Live(platform);

  live.broadcasting();
  live.result();
}

function startAdvancedLive(platform: IPlatform) {
  const live = new AdvancedLive(platform);

  live.broadcasting();
  live.comments();
  live.subtitles();
  live.result();
}

function main() {
  startLive(new YouTube());
  startAdvancedLive(new Twitch());
  startLive(new Facebook());
}

main();
