
topDisplay=document.querySelector('#top')
bottomDisplay=document.querySelector('#bottom')

function operate(operator,num1,num2){
    if(operator=='+')
        return num1+num2;
    else if(operator=='*')
        return num1*num2;
    else if(operator=='-')
        return num1-num2;
    else if(num2!=0) return num1/num2;

}
buttons=document.querySelectorAll('button')
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        let text=buttons[i].textContent;
        if(buttons[i].id=='clear'){
            topDisplay.textContent='';
            bottomDisplay.textContent='';
        }
        else if(buttons[i].id=='delete'){
            if((bottomDisplay.textContent).length!=0){
                let y=bottomDisplay.textContent;
                let l=y.length;
                let z=y.substr(0,(l-1));
                bottomDisplay.textContent=z;
            }
            else{
                bottomDisplay.textContent=topDisplay.textContent;
                topDisplay.textContent='';
                let y=bottomDisplay.textContent;
                let l=y.length;
                let z=y.substr(0,(l-1));
                bottomDisplay.textContent=z;
            }
        }

        else if(buttons[i].className=='num'){
            bottomDisplay.textContent+=buttons[i].textContent
        }
        else if(buttons[i].className=='operator'){
            topDisplay.textContent=bottomDisplay.textContent+buttons[i].textContent;
            bottomDisplay.textContent='';
        }
        else if(buttons[i].className=='solve'){
            let x=parseInt(bottomDisplay.textContent);
            let y=topDisplay.textContent
            let len=y.length;
            let z=parseInt(y.substr(0,len-1));
            let op=y.substr(len-1,len);
            if(op=='/'&&x==0){
            topDisplay.textContent='Nimga you are a damm fool';
            bottomDisplay.textContent='';
            }
            else{
                let ans=operate(op,z,x);
                topDisplay.textContent='';
                bottomDisplay.textContent=ans;
            }
        }

    })
}