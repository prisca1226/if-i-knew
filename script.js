const text = `Halo! Ini adalah halaman kertas digital.
Kamu bisa menulis apa saja di sini...

Tulisan ini muncul seperti sedang diketik :)`;

let i = 0;
const speed = 50; // kecepatan ketik (ms)

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
