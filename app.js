/* ===================================================================
   Speak Up! — app logic
   Renders the day list + day content, handles search, the Part 2
   speaking timer, and the in-browser voice recorder.
   =================================================================== */

(function () {
  "use strict";

  const DATA = window.SPEAKING_DATA || [];
  const sidebar   = document.getElementById("sidebar");
  const dayList   = document.getElementById("dayList");
  const content   = document.getElementById("content");
  const searchEl  = document.getElementById("searchInput");
  const menuBtn   = document.getElementById("menuToggle");

  document.getElementById("dayCount").textContent = DATA.length;

  let activeDay = null;

  /* -------------------------------------------------- helpers */
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));

  /* -------------------------------------------------- sidebar */
  function renderDayList(filter) {
    const f = (filter || "").trim().toLowerCase();
    dayList.innerHTML = "";

    const matches = DATA.filter((d) => {
      if (!f) return true;
      const hay = (d.topic + " " +
        (d.part1 ? d.part1.title : "") + " " +
        (d.part2 ? d.part2.title : "")).toLowerCase();
      return hay.includes(f);
    });

    if (!matches.length) {
      dayList.innerHTML = '<p style="padding:10px;color:var(--ink-soft);font-weight:700;">No topics found 🤔</p>';
      return;
    }

    matches.forEach((d) => {
      const btn = document.createElement("button");
      btn.className = "day-link" + (d.day === activeDay ? " active" : "");
      btn.innerHTML =
        '<span class="day-badge">' + d.day + '</span>' +
        '<span class="day-topic">' + esc(d.topic) + '</span>';
      btn.addEventListener("click", () => {
        showDay(d.day);
        if (window.innerWidth <= 820) sidebar.classList.remove("show");
      });
      dayList.appendChild(btn);
    });
  }

  /* -------------------------------------------------- question block */
  function answerBlocks(item) {
    let html = "";
    if (item.sample) {
      html +=
        '<div class="block"><span class="block-label sample">✅ Sample answer</span>' +
        '<div class="sample-text">' + esc(item.sample) + "</div></div>";
    }
    if (item.ideas && item.ideas.length) {
      html +=
        '<div class="block"><span class="block-label ideas">💡 Ideas to talk about</span><ul class="ideas-list">' +
        item.ideas.map((i) => "<li>" + esc(i) + "</li>").join("") +
        "</ul></div>";
    }
    if (item.grammar) {
      html +=
        '<div class="block"><span class="block-label grammar">📐 Grammar / structure</span>' +
        '<div class="grammar-text">' + esc(item.grammar) + "</div></div>";
    }
    if (item.vocab && item.vocab.length) {
      html +=
        '<div class="block"><span class="block-label vocab">📚 Useful vocabulary</span><div class="vocab-chips">' +
        item.vocab.map((v) => '<span class="vocab-chip">' + esc(v) + "</span>").join("") +
        "</div></div>";
    }
    return html;
  }

  function renderPart1(p1) {
    let html =
      '<section class="part"><h3 class="part-title"><span class="tag p1">Part 1</span>' +
      esc(p1.title.replace(/^Part 1:\s*/i, "")) + "</h3>";
    p1.questions.forEach((q, i) => {
      html +=
        '<div class="q-item"><button class="q-header">' +
        '<span class="q-num">' + (i + 1) + "</span>" +
        "<span>" + esc(q.q) + "</span>" +
        '<span class="q-chevron">⌄</span></button>' +
        '<div class="q-body">' + answerBlocks(q) + "</div></div>";
    });
    html += "</section>";
    return html;
  }

  function renderPart2(p2) {
    let cue = "";
    if (p2.cue && p2.cue.length) {
      cue =
        '<div class="cue-card"><h4>You should say:</h4><ul>' +
        p2.cue.map((c) => "<li>" + esc(c) + "</li>").join("") +
        "</ul></div>";
    }

    // timer + recorder tools
    const tools =
      '<div class="tools">' +
        // timer
        '<div class="tool"><h4>⏱️ Speaking timer</h4>' +
          '<div id="timerPhase" class="timer-phase">Ready</div>' +
          '<div id="timerDisplay" class="timer-display">1:00</div>' +
          '<div class="btn-row">' +
            '<button id="timerStart" class="btn btn-primary">Start (1m prep + 2m talk)</button>' +
            '<button id="timerReset" class="btn btn-ghost">Reset</button>' +
          "</div>" +
        "</div>" +
        // recorder
        '<div class="tool"><h4>🎙️ Record your answer</h4>' +
          '<div id="recStatus" class="rec-status">Tap record and start speaking</div>' +
          '<div class="btn-row">' +
            '<button id="recBtn" class="btn btn-rec">● Record</button>' +
            '<button id="recStop" class="btn btn-ghost" disabled>■ Stop</button>' +
          "</div>" +
          '<audio id="recPlayer" controls hidden></audio>' +
          '<p class="rec-note">Audio stays on your device — nothing is uploaded.</p>' +
        "</div>" +
      "</div>";

    const answer = answerBlocks(p2);
    const sampleSection = answer
      ? '<div class="q-item open"><button class="q-header">' +
        '<span class="q-num">★</span><span>Model answer, ideas &amp; vocabulary</span>' +
        '<span class="q-chevron">⌄</span></button>' +
        '<div class="q-body">' + answer + "</div></div>"
      : "";

    return (
      '<section class="part"><h3 class="part-title"><span class="tag p2">Part 2</span>' +
      esc(p2.title.replace(/^Part 2:\s*/i, "")) + "</h3>" +
      cue + tools + sampleSection + "</section>"
    );
  }

  /* -------------------------------------------------- render a day */
  function showDay(dayNum) {
    const d = DATA.find((x) => x.day === dayNum);
    if (!d) return;
    activeDay = dayNum;

    let html =
      '<div class="day-head"><h2>Day ' + d.day + "</h2>" +
      '<span class="topic-pill">' + esc(d.topic) + "</span></div>";

    if (d.part1) html += renderPart1(d.part1);
    if (d.part2) html += renderPart2(d.part2);

    // prev / next nav
    const idx = DATA.findIndex((x) => x.day === dayNum);
    const prev = DATA[idx - 1];
    const next = DATA[idx + 1];
    html +=
      '<div class="day-nav">' +
      (prev
        ? '<button class="btn btn-ghost" data-go="' + prev.day + '">← Day ' + prev.day + "</button>"
        : "<span></span>") +
      (next
        ? '<button class="btn btn-primary" data-go="' + next.day + '">Day ' + next.day + " →</button>"
        : "<span></span>") +
      "</div>";

    content.innerHTML = html;
    window.scrollTo({ top: 0, behavior: "smooth" });

    wireAccordions();
    wireDayNav();
    if (d.part2) { wireTimer(); wireRecorder(); }
    renderDayList(searchEl.value);
    try { localStorage.setItem("speakup_lastDay", String(dayNum)); } catch (e) {}
  }

  /* -------------------------------------------------- interactions */
  function wireAccordions() {
    content.querySelectorAll(".q-header").forEach((btn) => {
      btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
    });
  }

  function wireDayNav() {
    content.querySelectorAll("[data-go]").forEach((btn) => {
      btn.addEventListener("click", () => showDay(Number(btn.dataset.go)));
    });
  }

  /* ---------------- Part 2 timer (1 min prep → 2 min talk) ---------------- */
  let timerId = null;
  function wireTimer() {
    const phaseEl = document.getElementById("timerPhase");
    const dispEl  = document.getElementById("timerDisplay");
    const startBtn= document.getElementById("timerStart");
    const resetBtn= document.getElementById("timerReset");
    const PREP = 60, TALK = 120;

    const fmt = (s) => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");

    function stop() { if (timerId) { clearInterval(timerId); timerId = null; } }

    function reset() {
      stop();
      phaseEl.textContent = "Ready";
      phaseEl.className = "timer-phase";
      dispEl.textContent = "1:00";
      startBtn.disabled = false;
      startBtn.textContent = "Start (1m prep + 2m talk)";
    }

    function beep() {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.frequency.value = 660; g.gain.value = 0.15;
        o.start(); setTimeout(() => { o.stop(); ctx.close(); }, 250);
      } catch (e) {}
    }

    function run(phase, secs, onDone) {
      let left = secs;
      phaseEl.textContent = phase === "prep" ? "🧠 Preparation" : "🗣️ Speaking";
      phaseEl.className = "timer-phase " + phase;
      dispEl.textContent = fmt(left);
      timerId = setInterval(() => {
        left--;
        dispEl.textContent = fmt(left);
        if (left <= 0) { stop(); beep(); onDone(); }
      }, 1000);
    }

    startBtn.addEventListener("click", () => {
      stop();
      startBtn.disabled = true;
      run("prep", PREP, () => {
        run("talk", TALK, () => {
          phaseEl.textContent = "✅ Time's up — well done!";
          phaseEl.className = "timer-phase done";
          dispEl.textContent = "0:00";
          startBtn.disabled = false;
        });
      });
    });
    resetBtn.addEventListener("click", reset);
  }

  /* ---------------- voice recorder ---------------- */
  let mediaRecorder = null, chunks = [], stream = null;
  function wireRecorder() {
    const status = document.getElementById("recStatus");
    const recBtn = document.getElementById("recBtn");
    const stopBtn= document.getElementById("recStop");
    const player = document.getElementById("recPlayer");

    if (!navigator.mediaDevices || !window.MediaRecorder) {
      status.textContent = "Recording isn't supported in this browser 😕";
      recBtn.disabled = true;
      return;
    }

    recBtn.addEventListener("click", async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        chunks = [];
        mediaRecorder.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/webm" });
          player.src = URL.createObjectURL(blob);
          player.hidden = false;
          if (stream) stream.getTracks().forEach((t) => t.stop());
        };
        mediaRecorder.start();
        recBtn.classList.add("recording");
        recBtn.disabled = true;
        stopBtn.disabled = false;
        status.textContent = "● Recording… speak now!";
        status.className = "rec-status live";
      } catch (err) {
        status.textContent = "Microphone access was blocked 🔒";
      }
    });

    stopBtn.addEventListener("click", () => {
      if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
      recBtn.classList.remove("recording");
      recBtn.disabled = false;
      stopBtn.disabled = true;
      status.textContent = "Here's your recording — play it back 👇";
      status.className = "rec-status";
    });
  }

  /* -------------------------------------------------- welcome screen */
  function showWelcome() {
    content.innerHTML =
      '<div class="welcome"><div class="big">🎤</div>' +
      "<h2>Welcome to Speak Up!</h2>" +
      "<p>Your friendly day-by-day IELTS Speaking trainer. Pick a day from the list to see the questions, model answers, ideas, grammar tips and useful vocabulary.</p>" +
      "<p>Every Part 2 comes with a <strong>speaking timer</strong> and a <strong>voice recorder</strong> so you can rehearse just like the real exam.</p>" +
      '<div class="feat"><span>📅 ' + DATA.length + " days</span><span>✅ Sample answers</span><span>💡 Ideas</span><span>📐 Grammar</span><span>📚 Vocabulary</span><span>⏱️ Timer</span><span>🎙️ Recorder</span></div>" +
      '<div class="btn-row" style="margin-top:22px;"><button class="btn btn-primary" id="startBtn">Start with Day 1 →</button></div></div>';
    document.getElementById("startBtn").addEventListener("click", () => showDay(1));
  }

  /* -------------------------------------------------- init */
  searchEl.addEventListener("input", () => renderDayList(searchEl.value));
  menuBtn.addEventListener("click", () => sidebar.classList.toggle("show"));

  renderDayList("");
  let last = null;
  try { last = Number(localStorage.getItem("speakup_lastDay")); } catch (e) {}
  if (last && DATA.find((d) => d.day === last)) showDay(last);
  else showWelcome();
})();
