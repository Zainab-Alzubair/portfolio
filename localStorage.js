const sessionObj={
  name:'',
  email:'',
  message:'',
}

let nameInput= document.getElementById('name')
let emailInput= document.getElementById('email')
let msgInput= document.getElementById('msg')

nameInput.addEventListener('input', ()=>{
  sessionObj.name= nameInput.value
  localStorage.setItem('data',JSON.stringify(sessionObj))
});

emailInput.addEventListener('input', ()=>{
  sessionObj.email= emailInput.value
  localStorage.setItem('data',JSON.stringify(sessionObj))
});

msgInput.addEventListener('input', ()=>{
  sessionObj.message= msgInput.value
  localStorage.setItem('data',JSON.stringify(sessionObj))
});

