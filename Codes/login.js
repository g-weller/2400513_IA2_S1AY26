const form = document.querySelector('form')

function encode(str){
    return ("spoo" + str + "ahctog").split('').reverse().join('');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const { username, password } = Object.fromEntries(formData);

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === username);

    if(!user){
        alert("User not found!");
        return;
    }

    if(user.password !== encode(password)){
        alert("Incorrect Login!");
        return;
    }

    alert("Login Successful!");

    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('currentUser', username);

    window.location.href = "index.html";
})