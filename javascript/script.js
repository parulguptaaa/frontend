// let helloworld= document.querySelector('button');
// helloworld.addEventListener('click',showMsg);
// function showMsg(){
//     alert("hello world");
// }
let rollno= document.querySelector('button');
rollno.addEventListener('click',inputMsg);
function inputMsg(){
    let name=prompt('enter name of student');
    rollno.textContent='roll no. 1.'+ name;
}