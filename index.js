

let cl=document.querySelectorAll(`.key[data-key]`);


cl.forEach(element => {

element.addEventListener('mouseover', function() {
console.log('ok');

const key=this.getAttribute('data-key');
let audio=document.querySelector(`audio[data-key="${key}"]`);

if(audio){
audio.play();
}

});

});



let border=document.querySelectorAll('.key');

border.forEach(element=>{
let border=document.getElementsByClassName('key')

element.addEventListener('mouseover',function(){
    let border=document.querySelectorAll('.key');
border.forEach(el=>{
el.classList.remove('playing')
})

element.classList.add('playing');
})


})
