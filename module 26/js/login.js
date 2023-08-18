//step-1 : add event handeler with the soubmit button
document.getElementById('btn-submit').addEventListener('click',function(){
    
    // get the values from the input fields 
    const email = document.getElementById('user-email').value;
    // console.log(email);
    const password = document.getElementById('user-password').value;
    // console.log(password);

    if(password == "nai" && email == "habib@gmail.com"){
        window.location.href="./bank.html"
    }else{
        alert("saaala password mone nai...!!!!!!!");
    }
})