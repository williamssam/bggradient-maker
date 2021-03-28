const firstColor = document.getElementById('color1');
const secondColor = document.getElementById('color2');
const gradientCode = document.querySelector('.gradient-code');
const randomBtn = document.getElementById('random-btn');
const copy = document.getElementById('copy-btn');
const initialColor1 = '#d69cd8';
const initialColor2 = '#ac39ac';

function setGeneratedGradient(color1, color2) {
   document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

   gradientCode.textContent = document.body.style.background;
}

// randomly generate colors
function generateGradient() {
   let color1 = `#${(Math.random().toString(16) + '000000').substring(2, 8)}`;
   let color2 = `#${(Math.random().toString(16) + '000000').substring(2, 8)}`;
   setGeneratedGradient(color1, color2);
}

function setGradient() {
   document.body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;

   gradientCode.textContent = document.body.style.background;
}
firstColor.value = initialColor1;
secondColor.value = initialColor2;
gradientCode.textContent = `linear-gradient(to right, ${initialColor1}, ${initialColor2})`;

// copy to clipboard
const copyToClipboard = (str) => {
   const textarea = document.createElement('textarea');
   const code = gradientCode.innerText;

   textarea.value = code;
   document.body.appendChild(textarea);
   textarea.select();
   document.execCommand('copy');
   textarea.remove();
   copy.innerText = 'Code Copied';
   setTimeout(() => {
      copy.innerText = 'Copy Code';
   }, 1000);
   // alert('Gradient code copied');
};

firstColor.addEventListener('input', setGradient);
secondColor.addEventListener('input', setGradient);
randomBtn.addEventListener('click', generateGradient);
copy.addEventListener('click', copyToClipboard);
