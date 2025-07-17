function checkp() {
const passWord = document.getElementById('password').value;
const strength = document.getElementById('displayStrength')

     if (passWord.length < 3) {
            displayStrength.value = 'Weak'
            displayStrength.style.color = 'red'
        } else if (passWord.length < 8) {
           displayStrength.value = 'Medium'
           displayStrength.style.color = 'yellow'
        } else {
            displayStrength.value = 'Strong'
            displayStrength.style.color = 'green'
        }
}

