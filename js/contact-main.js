let nameInput  = document.querySelector('.nameInput')
let mailInput  = document.querySelector('.mailInput')
let msgInput  = document.querySelector('.msgInput')
let validCount = 0
document.querySelector('.send-btn').onclick =()=>{
    validCount=0
    if(nameInput.value ==""){
        document.querySelector('.nameErr').style.display="block"
    }
    else{
        document.querySelector('.nameErr').style.display="none"
        validCount++
    }
    
    if(mailInput.value ==""){
        document.querySelector('.mailErr').style.display="block"
    }
    else if(mailInput.value.indexOf('@')==-1){
        document.querySelector('.mailErr').innerHTML = `<i class="fas fa-exclamation-circle"></i> Please Enter Valid Email Address (include @ ...) `
        document.querySelector('.mailErr').style.display="block"
    }
    else{
        document.querySelector('.mailErr').style.display="none"
        validCount++
    }
    if(msgInput.value ==""){
        document.querySelector('.msgErr').style.display="block"
    }
    else if(msgInput.value.length<20){
        document.querySelector('.msgErr').innerHTML=`<i class="fas fa-exclamation-circle"></i> Message contain atleast 20 characters `
        document.querySelector('.msgErr').style.display="block"
    }
    else{
        document.querySelector('.msgErr').style.display="none"
        validCount++
    }
    if(validCount ==3){
        nameInput.value=""
        mailInput.value=""
        msgInput.value=""
        alert("Your Message Send Successfully ")
    }
}