const correctPassword = "vag2005";

document.addEventListener("DOMContentLoaded", () => {
  createHearts();
  const passwordInput = document.getElementById("passwordInput");
  const showPassword = document.getElementById("showPassword");
  passwordInput.addEventListener("keypress", e => { if (e.key === "Enter") unlockWebsite(); });
  showPassword.addEventListener("click", () => { passwordInput.type = passwordInput.type === "password" ? "text" : "password"; });
  const audio = document.getElementById("birthdayMusic");
  audio.addEventListener("error", () => console.error("Birthday audio failed to load:", audio.currentSrc));
  document.querySelectorAll(".photo-card img").forEach(img => img.addEventListener("error", () => console.error("Image failed to load:", img.src)));
});
function unlockWebsite() {
  const input = document.getElementById("passwordInput"), error = document.getElementById("wrongPassword");
  if (input.value === correctPassword) { document.getElementById("lockScreen").style.display = "none"; document.getElementById("mainWebsite").classList.remove("hidden"); celebrate(); }
  else { error.style.display = "block"; setTimeout(() => error.style.display = "none", 2500); }
}
function scrollToMemories(){ document.getElementById("memories").scrollIntoView({behavior:"smooth"}); }
function openGift(){ const gift=document.getElementById("giftBox"); gift.style.transform="scale(0)"; setTimeout(()=>{document.getElementById("surpriseSection").classList.remove("hidden");document.getElementById("surpriseSection").scrollIntoView({behavior:"smooth"});celebrate();},500); }
function celebrate(){const container=document.getElementById("confettiContainer"),symbols=["💗","✨","💕","🌸","🎉","💖","⭐"];for(let i=0;i<80;i++){const c=document.createElement("div");c.className="confetti";c.textContent=symbols[Math.floor(Math.random()*symbols.length)];c.style.left=Math.random()*100+"vw";c.style.fontSize=10+Math.random()*20+"px";c.style.animationDuration=2+Math.random()*3+"s";container.appendChild(c);setTimeout(()=>c.remove(),5000);}}
function toggleMusic(){const music=document.getElementById("birthdayMusic"),button=document.getElementById("musicButton");if(music.paused){music.play().then(()=>button.textContent="⏸").catch(err=>{console.error(err);alert("Please click the ▶ button once more. The birthday song could not start automatically.");});}else{music.pause();button.textContent="▶";}}
function createHearts(){const container=document.querySelector(".hearts");for(let i=0;i<15;i++){const heart=document.createElement("span");heart.textContent="♥";heart.style.position="fixed";heart.style.left=Math.random()*100+"vw";heart.style.top=Math.random()*100+"vh";heart.style.color="#ff6fa9";heart.style.opacity="0.25";heart.style.fontSize=10+Math.random()*20+"px";heart.style.pointerEvents="none";container.appendChild(heart);}}
