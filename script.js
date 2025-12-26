const text = `i just want to tell u. i dont like u anymore.
my crush era was end, cuz theres no chance for us to be "us" , right?
so, i dont want u anymore, i dont want to bother ur world.

i'll let u go, i am also ready if one day
i see u with the woman of ur choice.

thanks for being the reason i smile and
excited about going campus:)`;

let i = 0;
const speed = 100; // kecepatan ketik (ms)

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
