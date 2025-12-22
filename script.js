const toggleText=document.getElementById('toggleText');
const toggleBtn=document.getElementById('togglrBtn');

let isOn=true;

toggleBtn.addEventListener('click',function(){
    isOn=!isOn
    toggleText.textContent=isOn?"ON":"OFF";
});
