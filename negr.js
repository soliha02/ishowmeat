let login_input = document.getElementById('login')
let password_input = document.getElementById('password')
let btn = document.getElementById('btn')
let wrapper = document.getElementById('wrapper')
let pls = document.getElementById('omg')

wrapper.style.display = 'none'

btn.addEventListener('click' , ()=>{
    if (login_input.value == 'username' && password_input.value == 'password'){
        alert('Saytga hush kelibsiz👏')
        wrapper.style.display = 'block'
    } else {
        alert('PAROL XATO! (username = username , password = password)')
    }
    })

    function processInput() {
        var input = document.getElementById('afina').value;
        document.getElementById('pSoliha').innerText = "Sizning savolingiz: " + input;
    }

