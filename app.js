const A = "assets/extracted/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  {
    "letter": "A",
    "title": "Look and write the words.",
    "note": "Quan sát tranh và dùng các từ trong khung: backpack, eraser, pen, pencil, ruler. Có một từ không dùng.",
    "points": 4,
    "sectionImage": "assets/extracted/page1-img2-968x454.png",
    "questions": [
      {
        "id": "A1",
        "type": "input",
        "prompt": "1. Write word 1.",
        "answers": [
          "pencil"
        ],
        "explanation": "Số 1 chỉ chiếc bút chì. Pencil nghĩa là bút chì.",
        "image": ""
      },
      {
        "id": "A2",
        "type": "input",
        "prompt": "2. Write word 2.",
        "answers": [
          "eraser"
        ],
        "explanation": "Số 2 chỉ cục tẩy. Eraser nghĩa là cục tẩy.",
        "image": ""
      },
      {
        "id": "A3",
        "type": "input",
        "prompt": "3. Write word 3.",
        "answers": [
          "pen"
        ],
        "explanation": "Số 3 chỉ chiếc bút mực. Pen nghĩa là bút mực.",
        "image": ""
      },
      {
        "id": "A4",
        "type": "input",
        "prompt": "4. Write word 4.",
        "answers": [
          "ruler"
        ],
        "explanation": "Số 4 chỉ chiếc thước kẻ. Ruler nghĩa là thước kẻ.",
        "image": ""
      }
    ]
  },
  {
    "letter": "B",
    "title": "Listen and complete the sentences.",
    "note": "Nghe audio rồi điền đúng từ hoặc số vào mỗi câu.",
    "points": 5,
    "audio": "assets/audio/Listening-B.mp3",
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1. My ___ is black and gray.",
        "answers": [
          "backpack"
        ],
        "explanation": "Đồ vật màu đen và xám là backpack - chiếc ba lô.",
        "image": ""
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2. There are ___ pencils on her bed.",
        "answers": [
          "twenty",
          "20"
        ],
        "explanation": "Audio nói twenty pencils, tức là hai mươi chiếc bút chì.",
        "image": ""
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3. My sister is ___ years old.",
        "answers": [
          "seventeen",
          "17"
        ],
        "explanation": "Audio nói seventeen years old, tức là mười bảy tuổi.",
        "image": ""
      },
      {
        "id": "B4",
        "type": "input",
        "prompt": "4. My ___ is very big.",
        "answers": [
          "notebook"
        ],
        "explanation": "Đồ vật được nhắc đến là notebook - quyển vở.",
        "image": ""
      },
      {
        "id": "B5",
        "type": "input",
        "prompt": "5. My brother is ___ years old.",
        "answers": [
          "fourteen",
          "14"
        ],
        "explanation": "Audio nói fourteen years old, tức là mười bốn tuổi.",
        "image": ""
      }
    ]
  },
  {
    "letter": "C",
    "title": "Look at the pictures. Look at the letters. Write the words.",
    "note": "Quan sát hình, sắp xếp các chữ cái gợi ý rồi viết đúng từ hoặc cụm từ.",
    "points": 4,
    "questions": [
      {
        "id": "C1",
        "type": "input",
        "prompt": "1. 9 + 9 = 18",
        "answers": [
          "answer"
        ],
        "explanation": "Kết quả của phép tính được gọi là answer - đáp án.",
        "image": ""
      },
      {
        "id": "C2",
        "type": "input",
        "prompt": "2. 1, 3, 5, 7",
        "answers": [
          "odd numbers"
        ],
        "explanation": "1, 3, 5, 7 là các số lẻ, tiếng Anh là odd numbers.",
        "image": ""
      },
      {
        "id": "C3",
        "type": "input",
        "prompt": "3. =",
        "answers": [
          "equals sign"
        ],
        "explanation": "Các chữ cái cho sẵn ghép thành equals sign. Em cần dùng đủ các chữ cái của đề, không thêm hoặc bớt chữ.",
        "image": ""
      },
      {
        "id": "C4",
        "type": "input",
        "prompt": "4. 2, 4, 6, 8",
        "answers": [
          "even numbers"
        ],
        "explanation": "2, 4, 6, 8 là các số chẵn, tiếng Anh là even numbers.",
        "image": ""
      }
    ]
  },
  {
    "letter": "D",
    "title": "Circle the correct words.",
    "note": "Chọn từ đúng để hoàn thành từng câu.",
    "points": 4,
    "questions": [
      {
        "id": "D1",
        "type": "choice",
        "prompt": "1. You ___ two rulers.",
        "options": [
          "has",
          "have"
        ],
        "answers": [
          "have"
        ],
        "explanation": "You đi với have: You have two rulers.",
        "image": ""
      },
      {
        "id": "D2",
        "type": "choice",
        "prompt": "2. I ___ have twenty erasers.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answers": [
          "don't"
        ],
        "explanation": "I đi với don't: I don't have twenty erasers.",
        "image": ""
      },
      {
        "id": "D3",
        "type": "choice",
        "prompt": "3. She ___ a ruler.",
        "options": [
          "has",
          "have"
        ],
        "answers": [
          "has"
        ],
        "explanation": "She là một người, ngôi thứ ba số ít, nên dùng has: She has a ruler.",
        "image": ""
      },
      {
        "id": "D4",
        "type": "choice",
        "prompt": "4. He ___ have two notebooks.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answers": [
          "doesn't"
        ],
        "explanation": "He là một người, ngôi thứ ba số ít, nên dùng doesn't. Sau doesn't dùng have: He doesn't have two notebooks.",
        "image": ""
      }
    ]
  },
  {
    "letter": "E",
    "title": "Write the words in the correct order to make sentences.",
    "note": "Sắp xếp toàn bộ từ gợi ý thành câu hoàn chỉnh.",
    "points": 4,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1. a / She / sister / have / doesn't",
        "answers": [
          "she doesn't have a sister"
        ],
        "explanation": "She đi với doesn't; sau doesn't dùng have: She doesn't have a sister.",
        "image": ""
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "2. have / twelve / don't / notebooks / We",
        "answers": [
          "we don't have twelve notebooks"
        ],
        "explanation": "We đi với don't have: We don't have twelve notebooks.",
        "image": ""
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "3. fifteen / They / pencils / have",
        "answers": [
          "they have fifteen pencils",
          "they have 15 pencils"
        ],
        "explanation": "They đi với have. Fifteen pencils là mười lăm chiếc bút chì.",
        "image": ""
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "4. goldfish / He / twenty / has",
        "answers": [
          "he has twenty goldfish",
          "he has 20 goldfish"
        ],
        "explanation": "He là ngôi thứ ba số ít nên dùng has: He has twenty goldfish.",
        "image": ""
      }
    ]
  },
  {
    "letter": "F",
    "title": "Look and complete the sentences. Use a form of have.",
    "note": "Quan sát tranh rồi dùng have, has, don't have hoặc doesn't have để hoàn thành câu.",
    "points": 4,
    "sectionImage": "assets/extracted/page2-img1-2847x1096.png",
    "questions": [
      {
        "id": "F1",
        "type": "input",
        "prompt": "1. He ___ a jacket.",
        "answers": [
          "doesn't have",
          "does not have"
        ],
        "explanation": "Trong tranh số 1, bạn nam không có áo khoác. He đi với doesn't have.",
        "image": ""
      },
      {
        "id": "F2",
        "type": "input",
        "prompt": "2. They ___ four rabbits.",
        "answers": [
          "don't have",
          "do not have"
        ],
        "explanation": "Trong tranh số 2 chỉ có ba con thỏ, không phải bốn. They đi với don't have.",
        "image": ""
      },
      {
        "id": "F3",
        "type": "input",
        "prompt": "3. She ___ a new sun hat.",
        "answers": [
          "has"
        ],
        "explanation": "Trong tranh số 3, cô bé có một chiếc mũ che nắng mới. She đi với has.",
        "image": ""
      },
      {
        "id": "F4",
        "type": "input",
        "prompt": "4. We ___ six flowers.",
        "answers": [
          "don't have",
          "do not have"
        ],
        "explanation": "Trong tranh số 4, hai bạn không có sáu bông hoa. We đi với don't have. Đáp án nguồn bị thiếu từ have; câu đầy đủ phải là We don't have six flowers.",
        "image": ""
      }
    ]
  },
  {
    "letter": "G",
    "title": "Look and circle the correct words.",
    "note": "Quan sát từng hình rồi chọn đúng tên thực phẩm.",
    "points": 5,
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "1. Choose the correct word.",
        "options": [
          "tomato",
          "mango"
        ],
        "answers": [
          "mango"
        ],
        "explanation": "Hình 1 là quả xoài - mango.",
        "image": "assets/extracted/page3-img1-525x375.png"
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "2. Choose the correct word.",
        "options": [
          "sausage",
          "cucumber"
        ],
        "answers": [
          "cucumber"
        ],
        "explanation": "Hình 2 là các lát dưa chuột; bản đáp án gốc khoanh cucumber.",
        "image": "assets/extracted/page3-img2-525x375.png"
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "3. Choose the correct word.",
        "options": [
          "peach",
          "potato"
        ],
        "answers": [
          "peach"
        ],
        "explanation": "Hình 3 là quả đào; bản đáp án gốc khoanh peach, không phải potato.",
        "image": "assets/extracted/page3-img5-525x375.png"
      },
      {
        "id": "G4",
        "type": "choice",
        "prompt": "4. Choose the correct word.",
        "options": [
          "onion",
          "tomato"
        ],
        "answers": [
          "tomato"
        ],
        "explanation": "Hình 4 là quả cà chua - tomato.",
        "image": "assets/extracted/page3-img3-525x375.png"
      },
      {
        "id": "G5",
        "type": "choice",
        "prompt": "5. Choose the correct word.",
        "options": [
          "avocado",
          "mango"
        ],
        "answers": [
          "avocado"
        ],
        "explanation": "Hình 5 là quả bơ - avocado.",
        "image": "assets/extracted/page3-img8-525x375.png"
      }
    ]
  },
  {
    "letter": "H",
    "title": "Look and complete the words.",
    "note": "Quan sát hình và điền các chữ cái còn thiếu để hoàn thành từ.",
    "points": 5,
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. c _ _ _ _ t _",
        "answers": [
          "carrots"
        ],
        "explanation": "Hình 1 là nhiều củ cà rốt, nên dùng dạng số nhiều carrots.",
        "image": "assets/extracted/page3-img4-525x375.png"
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. p _ _ a _ _ _ s",
        "answers": [
          "potatoes"
        ],
        "explanation": "Hình 2 là nhiều củ khoai tây, nên viết potatoes.",
        "image": "assets/extracted/page3-img5-525x375.png"
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. s _ _ _ _",
        "answers": [
          "stone"
        ],
        "explanation": "Hình 3 là một hòn đá - stone.",
        "image": "assets/extracted/page3-img9-525x375.png"
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4. s _ _ _",
        "answers": [
          "soup"
        ],
        "explanation": "Hình 4 là một bát súp - soup.",
        "image": "assets/extracted/page3-img6-525x375.png"
      },
      {
        "id": "H5",
        "type": "input",
        "prompt": "5. o _ _ _ _ _",
        "answers": [
          "onions"
        ],
        "explanation": "Hình 5 có nhiều củ hành, nên viết onions.",
        "image": "assets/extracted/page3-img10-525x375.png"
      }
    ]
  },
  {
    "letter": "I",
    "title": "Listen and complete the sentences.",
    "note": "Nghe audio rồi hoàn thành câu bằng đúng từ và cấu trúc em nghe được.",
    "points": 3,
    "audio": "assets/audio/Listening-I.mp3",
    "questions": [
      {
        "id": "I1",
        "type": "input",
        "prompt": "1. It's ___.",
        "answers": [
          "an orange"
        ],
        "explanation": "Orange bắt đầu bằng nguyên âm nên dùng an: It's an orange.",
        "image": ""
      },
      {
        "id": "I2",
        "type": "input",
        "prompt": "2. It's ___.",
        "answers": [
          "a pot"
        ],
        "explanation": "Pot là danh từ số ít bắt đầu bằng phụ âm nên dùng a: It's a pot.",
        "image": ""
      },
      {
        "id": "I3",
        "type": "input",
        "prompt": "3. They're ___.",
        "answers": [
          "sausages"
        ],
        "explanation": "They're nghĩa là They are. Hình có nhiều xúc xích nên dùng sausages.",
        "image": ""
      }
    ]
  },
  {
    "letter": "J",
    "title": "Circle the correct words.",
    "note": "Chọn Do hoặc Does phù hợp với chủ ngữ của câu hỏi.",
    "points": 4,
    "questions": [
      {
        "id": "J1",
        "type": "choice",
        "prompt": "1. What ___ she have?",
        "options": [
          "do",
          "does"
        ],
        "answers": [
          "does"
        ],
        "explanation": "She là ngôi thứ ba số ít nên câu hỏi dùng does: What does she have?",
        "image": ""
      },
      {
        "id": "J2",
        "type": "choice",
        "prompt": "2. ___ you have sausages?",
        "options": [
          "Do",
          "Does"
        ],
        "answers": [
          "Do"
        ],
        "explanation": "You đi với Do: Do you have sausages?",
        "image": ""
      },
      {
        "id": "J3",
        "type": "choice",
        "prompt": "3. What ___ he have?",
        "options": [
          "do",
          "does"
        ],
        "answers": [
          "does"
        ],
        "explanation": "He là ngôi thứ ba số ít nên dùng does. Sau does vẫn là have.",
        "image": ""
      },
      {
        "id": "J4",
        "type": "choice",
        "prompt": "4. ___ they have ten stones?",
        "options": [
          "Do",
          "Does"
        ],
        "answers": [
          "Do"
        ],
        "explanation": "They đi với Do: Do they have ten stones?",
        "image": ""
      }
    ]
  },
  {
    "letter": "K",
    "title": "Write the questions. Look at the pictures and complete the answers.",
    "note": "Câu a: viết câu hỏi đầy đủ. Câu 1b và 3b: chỉ điền phần còn thiếu trước potatoes/pots. Câu 2b và 4b: viết câu trả lời đầy đủ.",
    "points": 8,
    "questions": [
      {
        "id": "K1",
        "type": "input",
        "prompt": "1a. have / does / What / he",
        "answers": [
          "what does he have"
        ],
        "explanation": "Với he, câu hỏi bắt đầu bằng What does, sau đó dùng have: What does he have?",
        "image": "assets/extracted/page4-img2-271x286.png"
      },
      {
        "id": "K2",
        "type": "input",
        "prompt": "1b. ___ potatoes.",
        "answers": [
          "he has"
        ],
        "explanation": "Câu hỏi là What does he have? Đáp án gốc là He has potatoes, nên điền He has. Câu này không yêu cầu đếm số khoai tây.",
        "image": ""
      },
      {
        "id": "K3",
        "type": "input",
        "prompt": "2a. have / she / Does / sausages",
        "answers": [
          "does she have sausages"
        ],
        "explanation": "Với she, dùng Does ở đầu và have ở dạng nguyên mẫu: Does she have sausages?",
        "image": "assets/extracted/page4-img3-235x280.png"
      },
      {
        "id": "K4",
        "type": "input",
        "prompt": "2b. ___, she ___.",
        "answers": [
          "no she doesn't",
          "no she does not"
        ],
        "explanation": "Tranh cho thấy cô bé đang ăn súp, không phải xúc xích: No, she doesn't.",
        "image": ""
      },
      {
        "id": "K5",
        "type": "input",
        "prompt": "3a. they / What / have / do",
        "answers": [
          "what do they have"
        ],
        "explanation": "They đi với do: What do they have?",
        "image": "assets/extracted/page4-img1-235x174.png"
      },
      {
        "id": "K6",
        "type": "input",
        "prompt": "3b. ___ pots.",
        "answers": [
          "they have"
        ],
        "explanation": "Câu hỏi là What do they have? Đáp án gốc là They have pots, nên điền They have. Câu này không yêu cầu đếm số nồi.",
        "image": ""
      },
      {
        "id": "K7",
        "type": "input",
        "prompt": "4a. stones / we / Do / have",
        "answers": [
          "do we have stones"
        ],
        "explanation": "We đi với Do: Do we have stones?",
        "image": "assets/extracted/page4-img4-363x279.png"
      },
      {
        "id": "K8",
        "type": "input",
        "prompt": "4b. ___, we ___.",
        "answers": [
          "no we don't",
          "no we do not"
        ],
        "explanation": "Trong tranh hai bạn cầm cà rốt, không phải đá: No, we don't.",
        "image": ""
      }
    ]
  }
];

const form = document.querySelector("#testForm"), root = document.querySelector("#sections"), jumpRoot = document.querySelector("#sectionJump"), progressText = document.querySelector("#progressText"), progressBar = document.querySelector("#progressBar"), results = document.querySelector("#results"), answerReview = document.querySelector("#answerReview"), scoreValue = document.querySelector("#scoreValue"), scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test5-v1-source-audit-v2";
render(); restore(); update();

form.addEventListener("click", e => { const b = e.target.closest("[data-choice]"); if (!b) return; const q = b.closest(".question"); q.querySelectorAll("[data-choice]").forEach(x => { x.classList.toggle("is-selected", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); q.dataset.value = b.dataset.value; q.classList.remove("is-missing"); save(); update(); });
form.addEventListener("input", e => { if (!e.target.matches("input")) return; e.target.closest(".question")?.classList.remove("is-missing"); save(); update(); });
form.addEventListener("submit", e => { e.preventDefault(); document.querySelectorAll(".is-missing").forEach(x => x.classList.remove("is-missing")); const m = missing(); if (m.length) { m.forEach(x => x.closest(".question").classList.add("is-missing")); document.querySelector("#submitHelp").textContent = `Bài còn thiếu ${m.length} ý. Em hoàn thành phần được đánh dấu trước khi xem đáp án.`; m[0].closest(".question").scrollIntoView({ behavior: "smooth", block: "center" }); return; } grade(); });
document.querySelector("#restartTest").onclick = () => { if (confirm("Em muốn xoá toàn bộ câu trả lời và làm lại từ đầu?")) { localStorage.removeItem(STORAGE_KEY); location.reload(); } };
document.querySelector("#reviewMistakes").onclick = () => (document.querySelector(".review-card.is-wrong") || answerReview).scrollIntoView({ behavior: "smooth" });

function render() { sections.forEach(s => { const j = document.createElement("button"); j.type = "button"; j.textContent = s.letter; j.dataset.jump = s.letter; j.onclick = () => document.querySelector("#section-" + s.letter).scrollIntoView({ behavior: "smooth" }); jumpRoot.appendChild(j); const el = document.createElement("section"); el.className = "test-section"; el.id = "section-" + s.letter; el.innerHTML = `<header class="section-heading"><span class="section-letter">${s.letter}</span><div><h2>${s.title}</h2><p>${s.note}</p></div><span class="section-points">/${s.points}</span></header>${s.audio ? `<div class="audio-panel"><p>Audio phần ${s.letter}</p><audio controls preload="metadata" src="${s.audio}"></audio></div>` : ""}${sectionImage(s)}<div class="question-list">${s.questions.map((q,i) => question(s,q,i)).join("")}</div>`; root.appendChild(el); }); }
function question(s,q,i) { const label = s.letter + (i + 1); const control = q.type === "choice" ? `<div class="choice-grid">${q.options.map((o,n) => `<button type="button" class="choice" data-choice data-value="${esc(o)}" aria-pressed="false"><span class="choice-key">${String.fromCharCode(65+n)}</span><span>${o}</span></button>`).join("")}</div>` : `<input class="answer-input" autocomplete="off" spellcheck="false" placeholder="Nhập câu trả lời">`; return `<article class="question" data-id="${q.id}"><span class="question-number">${label}</span><div class="question-copy">${q.image ? `<img class="question-image" src="${q.image}" alt="Hình minh hoạ câu ${label}">` : ""}<p class="question-prompt">${q.prompt}</p>${control}</div></article>`; }
function sectionImage(s) { return s.sectionImage ? `<img class="source-image" src="${s.sectionImage}" alt="Hình minh hoạ phần ${s.letter}">` : ""; }
function norm(v) { return String(v||"").toLowerCase().replace(/[’‘`]/g,"'").replace(/[?.!,]/g,"").replace(/-/g," ").replace(/\s+/g," ").trim(); }
function matches(value, accepted) { return DiscoverAnswerMatcher.matches(value, accepted); }

function missing() { const out=[]; sections.forEach(s => s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`); if(q.type==="choice"){if(!el.dataset.value) out.push(el.querySelector(".choice"));} else {const f=el.querySelector("input"); if(!f.value.trim()) out.push(f);} })); return out; }
function grade() { let score=0, reviews=[]; sections.forEach(s => s.questions.forEach((q,i) => { const el=document.querySelector(`[data-id="${q.id}"]`), value=q.type==="choice" ? el.dataset.value||"" : el.querySelector("input").value, correct=matches(value,q.answers); if(correct) score++; reviews.push({section:s,q,label:s.letter+(i+1),value,correct}); })); scoreValue.textContent=score; scoreMessage.textContent=score===50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50-score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`; answerReview.innerHTML=reviews.map(r => `<article class="review-card ${r.correct?"":"is-wrong"}"><div class="review-head"><h3>Câu ${r.label}</h3><span class="review-status">${r.correct?"1/1":"0/1"} điểm</span></div><p class="review-question">${r.q.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${html(r.value||"(trống)")}</b></span><span>Đáp án: <b>${html(DiscoverAnswerDisplay.formatAnswer(r.q.answers[0], {section: r.section, question: r.q}))}</b></span></div><p class="explanation"><b>Giải thích:</b> ${html(DiscoverAnswerDisplay.formatExplanation(r.q.explanation))}</p></article>`).join(""); results.hidden=false; form.hidden=true; document.querySelector("#stickyProgress").hidden=true; results.scrollIntoView({behavior:"smooth"}); }
function update() { let total=0; sections.forEach(s => { let c=0; s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`), done=q.type==="choice" ? !!el.dataset.value : !!el.querySelector("input").value.trim(); if(done){total++;c++;} }); const j=document.querySelector(`[data-jump="${s.letter}"]`); j.classList.toggle("has-progress",c>0); j.classList.toggle("is-complete",c===s.questions.length); }); progressText.textContent=`${total} / 50`; progressBar.style.width=`${total*2}%`; }
function save(){const d={};sections.forEach(s=>s.questions.forEach(q=>{const el=document.querySelector(`[data-id="${q.id}"]`);d[q.id]=q.type==="choice"?el.dataset.value||"":el.querySelector("input").value;}));localStorage.setItem(STORAGE_KEY,JSON.stringify(d));}
function restore(){let d={};try{d=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");}catch{}sections.forEach(s=>s.questions.forEach(q=>{const v=d[q.id];if(!v)return;const el=document.querySelector(`[data-id="${q.id}"]`);if(q.type==="choice"){el.dataset.value=v;el.querySelectorAll("[data-choice]").forEach(b=>{const on=b.dataset.value===v;b.classList.toggle("is-selected",on);b.setAttribute("aria-pressed",on?"true":"false");});}else el.querySelector("input").value=v;}));}
function html(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));} function esc(v){return html(v);}
