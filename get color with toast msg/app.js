// Project Requrment
// Change The Background color by generatin random rgb color clicking a button


// steps : 1 => creat onloader handler
// steps : 2 => generate random color
// steps : 3 => collect all nesessary refarence
// steps : 4 => handle the click event
// steps : 5 => add a button to copy the color code
// steps : 6 => activate toast massage
// steps : 7 => creat dynamic tost massage
// steps : 8 => animated dynamic toast massage



window.onload = () => {
    main()
};

function main (){
    const root = document.querySelector('#root');
    const changeBtn = document.querySelector('#change_btn');
    const copyBtn = document.querySelector('#copy-button');
    const outPut = document.querySelector('#input');
    

    changeBtn.addEventListener('click', function(){

        const bgColor = getRgbColor();
        outPut.value = bgColor ;
        root.style.backgroundColor = bgColor ;
    });
    copyBtn.addEventListener('click' , function(){
        navigator.clipboard.writeText(outPut.value)
        
        popUpMassage()
    })


//  popup massage 

function popUpMassage(){
    let oberlay = document.querySelector('.over_lay')
    let msgBody = document.querySelector('.msg_wrap')
    
    oberlay.style.height = '100vh'
    msgBody.style.transform = 'scale(1)'
    msgBody.style.transform = 'translate(-50%, 50%)'
}

const close = document.querySelector('.close img')
close.addEventListener('click' , function(){

    let oberlay = document.querySelector('.over_lay')
    let msgBody = document.querySelector('.msg_wrap')


    oberlay.style.height = '0vh'
    msgBody.style.transform = 'scale(0)'

})




function getRgbColor(){

    // rgb(0, 0, 0)

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
};
}



