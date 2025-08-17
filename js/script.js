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

function gerarHistoria() {
    const nome = document.getElementById('input1').value;
    const idade = document.getElementById('input2').value;
    const cidade = document.getElementById('input3').value;
    const animal = document.getElementById('input4').value;
    const comida = document.getElementById('input5').value;

    if (!nome || !idade || !cidade || !animal || !comida) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const historia = `Era uma vez um(a) chamado(a) ${nome}, que tem ${idade} anos. 
                Ele(a) adorava viajar para ${cidade} e sempre levava seu(a) ${animal} favorito junto. 
                Depois de passear, nada melhor do que saborear ${comida}, seu prato preferido. 
                E assim, ${nome} viveu muitas aventuras divertidas e saborosas!`;

    document.getElementById('historia').innerText = historia;
}

window.onload = function () {
    const firstInput = document.querySelector("input[type='text']");
    if (firstInput) firstInput.focus();
}