function checkInput(expectedId, inputId, resultId, nextInputId = null) {
    const expected = document.getElementById(expectedId).innerText.trim();
    const inputEl = document.getElementById(inputId);
    const typed = inputEl.value.trim();
    const result = document.getElementById(resultId);
    if (expected === typed) {
        result.innerHTML = "Parabéns!";
        result.className = "success";
        inputEl.style.backgroundColor = "#c8f7c5"; // verde claro
        if (nextInputId) {
            setTimeout(() => {
                document.getElementById(nextInputId).focus();
            }, 300);
        }
    } else {
        result.innerHTML = "Continue tentando...";
        result.className = "error";
        inputEl.style.backgroundColor = "#fff3cd"; // amarelo claro
    }
}

window.onload = function () {
    const firstInput = document.querySelector("input[type='text']");
    if (firstInput) firstInput.focus();
}