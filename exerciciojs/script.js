const form = document.querySelector('.numeros')

form.addEventListener('submit', function(e){

    e.preventDefault();
    const campoA = parseInt(document.querySelector('.numeroA').value);
    const campoB = parseInt(document.querySelector('.numeroB').value);

    if (campoB > campoA) {
        document.getElementById("messageValid").style.display = "block";
        document.getElementById("messageInvalid").style.display = "none";
    } else {
        document.getElementById("messageInvalid").style.display = "block";
        document.getElementById("messageValid").style.display = "none";
    }
});
