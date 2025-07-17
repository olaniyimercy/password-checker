function checkp() {
const passWord = document.getElementById('password').value;
const strength = document.getElementById('displayStrength')
const sent = document.getElementById('submit')

     if (passWord.length < 5) {
            displayStrength.value = 'Weak'
            displayStrength.style.color = 'red'
        } else if (passWord.length < 7) {
           displayStrength.value = 'Medium'
           displayStrength.style.color = 'yellow'
        } else {
            displayStrength.value = 'Strong'
            displayStrength.style.color = 'green'
        }
}
