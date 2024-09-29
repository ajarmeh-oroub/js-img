function bold(){
    let main=document.getElementById('main').classList.toggle('bold')
    
}
function italic(){
    let main=document.getElementById('main').classList.toggle('italic')
    
}
function right(){
    // console.log('right');
    let main=document.getElementById('main')
    main.classList.remove('left' ,'center')
    main.classList.add('right')
    
}
function left(){
    // console.log('left');
    let main=document.getElementById('main')
    main.classList.remove('right' ,'center')
    main.classList.add('left')
    
}
function center(){
    // console.log('center');
    let main=document.getElementById('main')
    main.classList.remove('right' ,'left')
    main.classList.add('center')
    
    
}
function italic(){
    let main=document.getElementById('main').classList.toggle('italic')
    
}
function upper(){
    let main = document.getElementById("main");
    main.innerText = main.innerText.toUpperCase();
}
function lower(){
    let main = document.getElementById('main')
    main.innerText=main.innerText.toLowerCase()
    }


    function capital(){
        let main=document.getElementById('main')
        let y = main.innerText.split('')
      
        for(let i =0; i<y.length; i++){
            if(y[i]==y[0]){
                y[0]=y[0].toUpperCase()
            }else{
        y[i]=y[i].toLowerCase()
            }
        main.innerText=y.join('')
        }}


        function dele(){
            // console.log("object");
            let main= document.getElementById('main').innerText=""
          
           
             }


             
          
            function color(){
                let col = document.getElementById('head')
                let y = col.value
                document.getElementById('main').style.color = y;
            }

function bgcolor(){
    let col = document.getElementById('bgcolor')
    let y = col.value
    document.getElementById('main').style.backgroundColor = y;
}

function size(){
    console.log("object");
    let col = document.getElementById('quantity')
    let  y = col.value
    document.getElementById('main').style.fontSize= y +'px'
}


function fontfam(){
    
    let text= document.getElementById('fontfam')
    let x=text.value
    document.getElementById('main').style.fontFamily = x;

   
}


function print(){
    
    console.log(document.getElementById('main').innerText)
}









        

