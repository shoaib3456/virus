let msg_inp  = document.querySelector('.msg-inp')
document.querySelector('.res-btn').onclick= ()=>{
    if(msg_inp.value ==""){
        document.querySelector('.msgErr').style.display="block"
    }
    else{
        console.log("sdsd")
        document.querySelector('.msgErr').style.display="none"
    }
    if(document.querySelector('.msgErr').style.display=="none"){
        alert("you feedback has been recorded")
    }
}