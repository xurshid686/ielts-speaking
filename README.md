# 🎤 Speak Up! — IELTS Speaking Practice

A colourful, friendly, **day-by-day** IELTS Speaking trainer. Built with plain
HTML, CSS and JavaScript — no build step, no dependencies. Just open it.

## Features
- 📅 **40 days** of structured Part 1 & Part 2 practice
- ✅ **Sample answers** (band 8–9 style) for every question
- 💡 **Ideas** to talk about + 📐 **grammar/structure** tips + 📚 **useful vocabulary**
- ⏱️ **Part 2 speaking timer** — 1 minute prep + 2 minutes talk, with a beep
- 🎙️ **Voice recorder** — record your answer and play it back (stays on your device)
- 🔍 Topic **search** and day-to-day navigation; remembers your last day

## Add or remove questions (easy!)
All content lives in **`questions.js`**. Each day is one `{ ... }` object in the
`SPEAKING_DATA` array. To add a day, copy an existing block, change the text, and
save. To remove one, delete its block. The shape is documented at the top of the file.

```js
{
  day: 41,
  topic: "Your Topic",
  part1: {
    title: "Part 1: Your Topic",
    questions: [
      { q: "A question?", sample: "A model answer.", ideas: ["..."], grammar: "...", vocab: ["..."] }
    ]
  },
  part2: { /* optional */ }
}
```

## Run locally
Just open `index.html` in a browser. (The microphone recorder works best when
served over `http://localhost` or `https://` — e.g. the live Vercel URL.)

## Files
| File | Purpose |
|------|---------|
| `index.html` | Page structure |
| `styles.css` | Colourful, friendly styling |
| `questions.js` | **The question bank — edit this to add content** |
| `app.js` | Rendering, search, timer, recorder |
