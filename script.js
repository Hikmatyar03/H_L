document.addEventListener("DOMContentLoaded", () => {
  const sceneText = document.getElementById("scene-text");
  const laiba = document.querySelector(".photo.laiba");
  const you = document.querySelector(".photo.you");
  const bgMusic = document.getElementById("bg-music");
  const leftLine = document.querySelector(".left-line");
  const rightLine = document.querySelector(".right-line");

  // Play music softly
  bgMusic.volume = 0.3;
  bgMusic.play().catch(e => console.log("Autoplay blocked:", e));

  // Grow glowing lines
  setTimeout(() => {
    leftLine.classList.add("grow");
    rightLine.classList.add("grow");
  }, 800);

  // === SCENE 1: "Abey..." ===
  setTimeout(() => {
    sceneText.innerHTML = '<span class="abey">Abey…</span>';
    sceneText.classList.add("visible");
    laiba.classList.add("active");
  }, 2500);

  // === SCENE 2: "My Bachaa" ===
  setTimeout(() => {
    sceneText.innerHTML = 'My <span class="name">Bachaa</span>…\nI can feel something’s wrong.';
    sceneText.classList.remove("visible");
    setTimeout(() => sceneText.classList.add("visible"), 100);
  }, 5000);

  // === SCENE 3: Cut to You ===
  setTimeout(() => {
    laiba.classList.remove("active");
    you.classList.add("active");
    sceneText.innerHTML = 'It’s me, <span class="name">Hammo</span>.\nI’m here.';
  }, 7500);

  // === SCENE 4: "Hat" ===
  setTimeout(() => {
    sceneText.innerHTML = 'You know me…\nI never say <span class="hat">Hat</span>\nunless I mean it.';
  }, 10000);

  // === SCENE 5: "Talk to me?" ===
  setTimeout(() => {
    sceneText.innerHTML = 'I won’t say “Hat” now.\nJust… talk to me?\nI care too much to pretend.';
  }, 13000);

  // === SCENE 6: Final Frame ===
  setTimeout(() => {
    sceneText.innerHTML = 'You call me <span class="name">Hammo</span>.\nI call you <span class="name">My Bachaa</span>.\nThat’s our world.\nI’m not letting go.';
    you.classList.add("active");
  }, 16000);
});