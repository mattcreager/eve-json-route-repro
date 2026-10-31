import { defineChannel, GET } from "eve/channels";

export default defineChannel({
  routes: [GET("/.well-known/agent-card.json", () => Response.json({ name: "repro" }))],
});
