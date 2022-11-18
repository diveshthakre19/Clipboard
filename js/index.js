const copyButton = document.querySelector("button");
const textBox = document.querySelector("textarea");

const message = () => {
  let msg = document.createElement("div");
  if (textBox.value == "") {
    msg.innerHTML = "Text Box is Empty!";
  } else {
    msg.innerHTML = "Sucessfully copied Text to clipboard!";
  }
  msg.style.color = "#3DBE29";
  msg.className = "text-center";
  document.body.appendChild(msg);
  setTimeout(() => document.body.removeChild(msg), 1500);
};

copyButton.addEventListener("click", () => {
  textBox.focus();
  textBox.select();
  navigator.clipboard.writeText(textBox.value);
  message();
});
