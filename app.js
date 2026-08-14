const A = "assets/extracted/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  { letter: "A", title: "Look and write the words.", note: "Quan sát tranh và dùng các từ trong khung: backpack, eraser, pen, pencil, ruler. Có một từ không dùng.", points: 4, sectionImage: A + "page1-img2-968x454.png", questions: [
    input("A1", "1. Write word 1.", ["pencil"], "Số 1 chỉ chiếc bút chì. Pencil nghĩa là bút chì."),
    input("A2", "2. Write word 2.", ["eraser"], "Số 2 chỉ cục tẩy. Eraser nghĩa là cục tẩy."),
    input("A3", "3. Write word 3.", ["pen"], "Số 3 chỉ chiếc bút mực. Pen nghĩa là bút mực."),
    input("A4", "4. Write word 4.", ["ruler"], "Số 4 chỉ chiếc thước kẻ. Ruler nghĩa là thước kẻ.") ] },
  { letter: "B", title: "Listen and complete the sentences.", note: "Nghe audio rồi điền đúng từ hoặc số vào mỗi câu.", points: 5, audio: "assets/audio/Listening-B.mp3", questions: [
    input("B1", "1. My ___ is black and gray.", ["backpack"], "Đồ vật màu đen và xám là backpack - chiếc ba lô."),
    input("B2", "2. There are ___ pencils on her bed.", ["twenty", "20"], "Audio nói twenty pencils, tức là hai mươi chiếc bút chì."),
    input("B3", "3. My sister is ___ years old.", ["seventeen", "17"], "Audio nói seventeen years old, tức là mười bảy tuổi."),
    input("B4", "4. My ___ is very big.", ["notebook"], "Đồ vật được nhắc đến là notebook - quyển vở."),
    input("B5", "5. My brother is ___ years old.", ["fourteen", "14"], "Audio nói fourteen years old, tức là mười bốn tuổi.") ] },
  { letter: "C", title: "Look at the pictures. Look at the letters. Write the words.", note: "Quan sát hình, sắp xếp các chữ cái gợi ý rồi viết đúng từ hoặc cụm từ.", points: 4, questions: [
    input("C1", "1. 9 + 9 = 18", ["answer"], "Kết quả của phép tính được gọi là answer - đáp án."),
    input("C2", "2. 1, 3, 5, 7", ["odd numbers"], "1, 3, 5, 7 là các số lẻ, tiếng Anh là odd numbers."),
    input("C3", "3. =", ["equals sign", "equal sign"], "Dấu = được gọi là equals sign. Cách gọi equal sign cũng được chấp nhận."),
    input("C4", "4. 2, 4, 6, 8", ["even numbers"], "2, 4, 6, 8 là các số chẵn, tiếng Anh là even numbers.") ] },
  { letter: "D", title: "Circle the correct words.", note: "Chọn từ đúng để hoàn thành từng câu.", points: 4, questions: [
    choice("D1", "1. You ___ two rulers.", ["has", "have"], "have", "You đi với have: You have two rulers."),
    choice("D2", "2. I ___ have twenty erasers.", ["don't", "doesn't"], "don't", "I đi với don't: I don't have twenty erasers."),
    choice("D3", "3. She ___ a ruler.", ["has", "have"], "has", "She là một người, ngôi thứ ba số ít, nên dùng has: She has a ruler."),
    choice("D4", "4. He ___ have two notebooks.", ["don't", "doesn't"], "doesn't", "He là một người, ngôi thứ ba số ít, nên dùng doesn't. Sau doesn't dùng have: He doesn't have two notebooks.") ] },
  { letter: "E", title: "Write the words in the correct order to make sentences.", note: "Sắp xếp toàn bộ từ gợi ý thành câu hoàn chỉnh.", points: 4, questions: [
    input("E1", "1. a / She / sister / have / doesn't", ["she doesn't have a sister"], "She đi với doesn't; sau doesn't dùng have: She doesn't have a sister."),
    input("E2", "2. have / twelve / don't / notebooks / We", ["we don't have twelve notebooks"], "We đi với don't have: We don't have twelve notebooks."),
    input("E3", "3. fifteen / They / pencils / have", ["they have fifteen pencils", "they have 15 pencils"], "They đi với have. Fifteen pencils là mười lăm chiếc bút chì."),
    input("E4", "4. goldfish / He / twenty / has", ["he has twenty goldfish", "he has 20 goldfish"], "He là ngôi thứ ba số ít nên dùng has: He has twenty goldfish.") ] },
  { letter: "F", title: "Look and complete the sentences. Use a form of have.", note: "Quan sát tranh rồi dùng have, has, don't have hoặc doesn't have để hoàn thành câu.", points: 4, sectionImage: A + "page2-img1-2847x1096.png", questions: [
    input("F1", "1. He ___ a jacket.", ["doesn't have", "does not have"], "Trong tranh số 1, bạn nam không có áo khoác. He đi với doesn't have."),
    input("F2", "2. They ___ four rabbits.", ["don't have", "do not have"], "Trong tranh số 2 chỉ có ba con thỏ, không phải bốn. They đi với don't have."),
    input("F3", "3. She ___ a new sun hat.", ["has"], "Trong tranh số 3, cô bé có một chiếc mũ che nắng mới. She đi với has."),
    input("F4", "4. We ___ six flowers.", ["don't have", "do not have"], "Trong tranh số 4, hai bạn không có sáu bông hoa. We đi với don't have. Đáp án nguồn bị thiếu từ have; câu đầy đủ phải là We don't have six flowers.") ] },
  { letter: "G", title: "Look and circle the correct words.", note: "Quan sát từng hình rồi chọn đúng tên thực phẩm.", points: 5, questions: [
    choice("G1", "1. Choose the correct word.", ["tomato", "mango"], "mango", "Hình 1 là quả xoài - mango.", A + "page3-img1-525x375.png"),
    choice("G2", "2. Choose the correct word.", ["sausage", "cucumber"], "sausage", "Hình 2 là những lát xúc xích - sausage.", A + "page3-img2-525x375.png"),
    choice("G3", "3. Choose the correct word.", ["peach", "potato"], "potato", "Hình 3 là củ khoai tây - potato.", A + "page3-img5-525x375.png"),
    choice("G4", "4. Choose the correct word.", ["onion", "tomato"], "tomato", "Hình 4 là quả cà chua - tomato.", A + "page3-img3-525x375.png"),
    choice("G5", "5. Choose the correct word.", ["avocado", "mango"], "avocado", "Hình 5 là quả bơ - avocado.", A + "page3-img8-525x375.png") ] },
  { letter: "H", title: "Look and complete the words.", note: "Quan sát hình và điền các chữ cái còn thiếu để hoàn thành từ.", points: 5, questions: [
    input("H1", "1. c _ _ _ _ t _", ["carrots"], "Hình 1 là nhiều củ cà rốt, nên dùng dạng số nhiều carrots.", A + "page3-img4-525x375.png"),
    input("H2", "2. p _ _ a _ _ _ s", ["potatoes"], "Hình 2 là nhiều củ khoai tây, nên viết potatoes.", A + "page3-img5-525x375.png"),
    input("H3", "3. s _ _ _ _", ["stone"], "Hình 3 là một hòn đá - stone.", A + "page3-img9-525x375.png"),
    input("H4", "4. s _ _ _", ["soup"], "Hình 4 là một bát súp - soup.", A + "page3-img6-525x375.png"),
    input("H5", "5. o _ _ _ _ _", ["onions"], "Hình 5 có nhiều củ hành, nên viết onions.", A + "page3-img10-525x375.png") ] },
  { letter: "I", title: "Listen and complete the sentences.", note: "Nghe audio rồi hoàn thành câu bằng đúng từ và cấu trúc em nghe được.", points: 3, audio: "assets/audio/Listening-I.mp3", questions: [
    input("I1", "1. It's ___.", ["an orange"], "Orange bắt đầu bằng nguyên âm nên dùng an: It's an orange."),
    input("I2", "2. It's ___.", ["a pot"], "Pot là danh từ số ít bắt đầu bằng phụ âm nên dùng a: It's a pot."),
    input("I3", "3. They're ___.", ["sausages"], "They're nghĩa là They are. Hình có nhiều xúc xích nên dùng sausages.") ] },
  { letter: "J", title: "Circle the correct words.", note: "Chọn Do hoặc Does phù hợp với chủ ngữ của câu hỏi.", points: 4, questions: [
    choice("J1", "1. What ___ she have?", ["do", "does"], "does", "She là ngôi thứ ba số ít nên câu hỏi dùng does: What does she have?"),
    choice("J2", "2. ___ you have sausages?", ["Do", "Does"], "Do", "You đi với Do: Do you have sausages?"),
    choice("J3", "3. What ___ he have?", ["do", "does"], "does", "He là ngôi thứ ba số ít nên dùng does. Sau does vẫn là have."),
    choice("J4", "4. ___ they have ten stones?", ["Do", "Does"], "Do", "They đi với Do: Do they have ten stones?") ] },
  { letter: "K", title: "Write the questions. Look at the pictures and complete the answers.", note: "Sắp xếp từ thành câu hỏi, sau đó quan sát tranh và viết câu trả lời đầy đủ.", points: 8, questions: [
    input("K1", "1a. have / does / What / he", ["what does he have"], "Với he, câu hỏi bắt đầu bằng What does, sau đó dùng have: What does he have?", A + "page4-img2-271x286.png"),
    input("K2", "1b. He has ___ potatoes.", ["six", "6"], "Trong giỏ có sáu củ khoai tây, nên câu trả lời là He has six potatoes."),
    input("K3", "2a. have / she / Does / sausages", ["does she have sausages"], "Với she, dùng Does ở đầu và have ở dạng nguyên mẫu: Does she have sausages?", A + "page4-img3-235x280.png"),
    input("K4", "2b. ___, she ___.", ["no she doesn't", "no she does not"], "Tranh cho thấy cô bé đang ăn súp, không phải xúc xích: No, she doesn't."),
    input("K5", "3a. they / What / have / do", ["what do they have"], "They đi với do: What do they have?", A + "page4-img1-235x174.png"),
    input("K6", "3b. They have ___ pots.", ["two", "2"], "Trong tranh có hai bạn và mỗi bạn cầm một chiếc nồi: They have two pots."),
    input("K7", "4a. stones / we / Do / have", ["do we have stones"], "We đi với Do: Do we have stones?", A + "page4-img4-363x279.png"),
    input("K8", "4b. ___, we ___.", ["no we don't", "no we do not"], "Trong tranh hai bạn cầm cà rốt, không phải đá: No, we don't.") ] }
];

const form = document.querySelector("#testForm"), root = document.querySelector("#sections"), jumpRoot = document.querySelector("#sectionJump"), progressText = document.querySelector("#progressText"), progressBar = document.querySelector("#progressBar"), results = document.querySelector("#results"), answerReview = document.querySelector("#answerReview"), scoreValue = document.querySelector("#scoreValue"), scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test5-v1";
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
function matches(v,a) { const n = norm(v).replace(/does not/g,"doesn't").replace(/do not/g,"don't"); return a.some(x => norm(x).replace(/does not/g,"doesn't").replace(/do not/g,"don't") === n); }
function missing() { const out=[]; sections.forEach(s => s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`); if(q.type==="choice"){if(!el.dataset.value) out.push(el.querySelector(".choice"));} else {const f=el.querySelector("input"); if(!f.value.trim()) out.push(f);} })); return out; }
function grade() { let score=0, reviews=[]; sections.forEach(s => s.questions.forEach((q,i) => { const el=document.querySelector(`[data-id="${q.id}"]`), value=q.type==="choice" ? el.dataset.value||"" : el.querySelector("input").value, correct=matches(value,q.answers); if(correct) score++; reviews.push({q,label:s.letter+(i+1),value,correct}); })); scoreValue.textContent=score; scoreMessage.textContent=score===50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50-score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`; answerReview.innerHTML=reviews.map(r => `<article class="review-card ${r.correct?"":"is-wrong"}"><div class="review-head"><h3>Câu ${r.label}</h3><span class="review-status">${r.correct?"1/1":"0/1"} điểm</span></div><p class="review-question">${r.q.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${html(r.value||"(trống)")}</b></span><span>Đáp án: <b>${html(r.q.answers[0])}</b></span></div><p class="explanation"><b>Giải thích:</b> ${r.q.explanation}</p></article>`).join(""); results.hidden=false; form.hidden=true; document.querySelector("#stickyProgress").hidden=true; results.scrollIntoView({behavior:"smooth"}); }
function update() { let total=0; sections.forEach(s => { let c=0; s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`), done=q.type==="choice" ? !!el.dataset.value : !!el.querySelector("input").value.trim(); if(done){total++;c++;} }); const j=document.querySelector(`[data-jump="${s.letter}"]`); j.classList.toggle("has-progress",c>0); j.classList.toggle("is-complete",c===s.questions.length); }); progressText.textContent=`${total} / 50`; progressBar.style.width=`${total*2}%`; }
function save(){const d={};sections.forEach(s=>s.questions.forEach(q=>{const el=document.querySelector(`[data-id="${q.id}"]`);d[q.id]=q.type==="choice"?el.dataset.value||"":el.querySelector("input").value;}));localStorage.setItem(STORAGE_KEY,JSON.stringify(d));}
function restore(){let d={};try{d=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");}catch{}sections.forEach(s=>s.questions.forEach(q=>{const v=d[q.id];if(!v)return;const el=document.querySelector(`[data-id="${q.id}"]`);if(q.type==="choice"){el.dataset.value=v;el.querySelectorAll("[data-choice]").forEach(b=>{const on=b.dataset.value===v;b.classList.toggle("is-selected",on);b.setAttribute("aria-pressed",on?"true":"false");});}else el.querySelector("input").value=v;}));}
function html(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));} function esc(v){return html(v);}
