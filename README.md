# eve `.json` channel route repro

A channel route whose path ends in `.json` fails `eve build` with `[JSON_PARSE] expected value at line 1 column 1`.

```sh
npm install
npx eve build   # fails
```

Change the path in `agent/channels/card.ts` to `/.well-known/agent-card` and it builds.
