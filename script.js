function validate() {
    let username = document.getElementById('username').
    value;
    let password = document.getElementById('password').
    value;

    if(username == 'Webdev' && password == 'learn'){
        alert('login successfuly!');
    } else {
        alert('login failed!');
    }
}