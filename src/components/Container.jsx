import Textarea from "./Textarea";
import Stats from "./Stats";
import { useState } from "react";
import {
  FACEBOOK_CHARECTERS_MAX,
  INSTAGRAM_CHARECTERS_MAX,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharecters: text.length,
    instagramCharectersLeft: INSTAGRAM_CHARECTERS_MAX - text.length,
    facebookCharectersLeft: FACEBOOK_CHARECTERS_MAX - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
