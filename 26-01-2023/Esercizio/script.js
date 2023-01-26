const bodyEl = document.body;

let countdownStart = 10;

const timeoutEl = setTimeout(() => {
  const timerEL = setInterval(() => {
    const wrapperEl = document.createElement("div");
    const textEl = document.createElement("h1");
    const btnEl = document.createElement("button");
    btnEl.textContent = "STOP";
    textEl.textContent = countdownStart--;

    if (countdownStart === -1) {
      textEl.style.display = "none";
      btnEl.style.display = "none";
      bodyEl.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      clearTimeout(timerEL);
    }

    btnEl.addEventListener("click", () => {
      clearTimeout(timerEL);
    });

    //   if (document.querySelector("h1")) {
    document.querySelector("button")?.remove();
    document.querySelector("h1")?.remove();
    //   }
    wrapperEl.append(textEl, btnEl);
    bodyEl.appendChild(wrapperEl);
  }, 1000);
}, 2000);
