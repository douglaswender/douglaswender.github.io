function login(user, pass){
    console.log(window.location.href)
    
    if(user === 'admin' && pass === 'admin123'){
        console.log('dentro');
        window.location.replace("https://douglaswender.github.io/logged.html");
    }

}