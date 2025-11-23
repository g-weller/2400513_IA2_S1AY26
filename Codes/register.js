const form = document.querySelector('form')

function encode(str){
    return ("spoo" + str + "ahctog").split('').reverse().join('');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const ob = Object.fromEntries(formData);

    if(ob.password !== ob.confirmPassword){
        alert("Passwords do not match!");
        return;
    }

    const user = {
        email: ob.email,
        password: encode(ob.password),
        cart: []
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));
    alert("Registered Successfully");

    window.location.href = "login.html" 
})   