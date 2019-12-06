function login(user, pass){
    console.log(window.location.href)
    
    if(user === 'admin' && pass === 'admin123'){
        console.log('dentro');
        setTimeout(()=>{
            window.location.replace("https://douglaswender.github.io/logged.html");
        }, 3000);
    }

}