const btn = document.querySelector('#add')
const istatus = document.querySelector('h5')

let check = 0;
btn.addEventListener('click', function(){
    if(check == 0){
     istatus.innerHTML = "Friends";
     istatus.style.color = "green";
     btn.style.backgroundColor = "grey"
     btn.style.color = "black"
     btn.innerHTML = 'Remove Friend'
     check = 1;
    }

    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = 'red';
        btn.style.backgroundColor = "green"
        btn.style.color = "white"
        btn.innerHTML = 'Add Friend'
        check = 0;
    }
    
})