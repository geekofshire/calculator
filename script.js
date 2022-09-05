
topDisplay=document.querySelector('#top')
bottomDisplay=document.querySelector('#bottom')

function operate(operator,num1,num2){
    if(operator=='+')
        return num1+num2;
    else if(operator=='*')
        return num1*num2;
    else if(operator=='-')
        return num1-num2;
    else return num1/num2;

}
let numArray=[];
let operation;


function push(q){
    numArray.push(q);
    let l =numArray.length;
    let sum=0;
    for(let k=0;k<l;k++){
        sum=sum+numArray[k]*Math.pow(10,l-k-1);
    }
    bottomDisplay.textContent=sum;
}
function half(operator){
    if(topDisplay.textContent!=''){
        let x=parseInt(bottomDisplay.textContent);
        let y=topDisplay.textContent
        let len=y.length;
        let z=parseInt(y.substr(0,len-1));
        let op=y.substr(len-1,len);
        let ans=operate(op,z,x);
        bottomDisplay.textContent='';
        topDisplay.textContent=ans+operator;
    }
    else{
        let y=bottomDisplay.textContent;
        bottomDisplay.textContent='';
        topDisplay.textContent=y+operator;
        numArray.length=0;
    }
    numArray.length=0;
}
buttons=document.querySelectorAll('button')
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        let text=buttons[i].textContent;
        if(buttons[i].id=='clear'||buttons[i].id=='delete'){
            topDisplay.textContent='';
            bottomDisplay.textContent='';
        }

        else if(buttons[i].className=='num'){
            push(buttons[i].textContent);
        }
        else if(buttons[i].className=='operator'){
            half(buttons[i].textContent)
        }
        else if(buttons[i].className=='solve'){
            let x=parseInt(bottomDisplay.textContent);
            let y=topDisplay.textContent
            let len=y.length;
            let z=parseInt(y.substr(0,len-1));
            let op=y.substr(len-1,len);
            let ans=operate(op,z,x);
            topDisplay.textContent='';
            bottomDisplay.textContent=ans;
            numArray.length=0;
        }

    })
}