topDisplay=document.querySelector('#top')
bottomDisplay=document.querySelector('#bottom')

function operate(operator,num1,num2){
    if(operator=='+')
        return num1+num2;
    else if(operator=='*')
        return num1*num2;
    else if(operate=='-')
        return num1-num2;
    else return num1/num2;

}
const numArray=[];


buttons=document.querySelectorAll('button')
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        let text=buttons[i].textContent;
        if(text=='CLEAR'||text=="DELETE"){
            bottomDisplay.textContent="";
        }
        else{
            bottomDisplay.textContent=text;
        }
    })
}