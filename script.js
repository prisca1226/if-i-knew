const textLines = [
  "i just want to tell u. i dont like u anymore.",
  "my crush era was end, cuz theres no chance for us to be us , right?",
  "so, i dont want u anymore, i dont want to bother ur world.",
  "i will let u go, i am also ready if one day",
  "i see u with the woman of ur choice.",
  "thanks for being the reason i smile and",
  "excited about going campus:)"
];

let currentLine = 0;
let i = 0;
const speed = 100; // kecepatan ketik (ms)

function typeWriter() {
  if (currentLine < textLines.length) {
    if (i < textLines[currentLine].length) {
      document.getElementById("typedText").innerHTML += textLines[currentLine].charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      // Tambahkan baris baru kecuali untuk baris terakhir
      if (currentLine < textLines.length - 1) {
        document.getElementById("typedText").innerHTML += "<br><br>";
      } else {
        document.getElementById("typedText").innerHTML += " "; // Spasi untuk baris terakhir
      }
      currentLine++;
      i = 0;
      setTimeout(typeWriter, speed);
    }
  } else {
    // Efek selesai, hapus cursor
    const typedElement = document.getElementById("typedText");
    typedElement.innerHTML = typedElement.innerHTML.replace(/\|$/, '');
  }
}

// Mulai efek ketik saat halaman dimuat
window.onload = function() {
  typeWriter();
};
