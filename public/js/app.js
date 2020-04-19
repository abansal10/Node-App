console.log("Testing th js")

const getWeather=(location,messageOne,messageTwo)=>{
    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            console.log('Error happend')
            console.log(data);
            messageOne.textContent=data.error;
            messageTwo.textContent='';
            return data.error;
        }
        messageOne.textContent='';
        messageTwo.textContent=`${data.temp}, ${data.prep}`
       // messageTwo.textContent=data.prep;

    })
})

}

const weatherform=document.querySelector('form');
const search=document.querySelector('input');
const messageOne=document.querySelector('#message__1');
const messageTwo=document.querySelector('#message__2');
//messageTwo="sdsadasd";


weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    messageOne.textContent="Loading..."
    messageTwo.textContent="";
   // messageTwo='';
    const location=search.value;
    getWeather(location,messageOne,messageTwo);

})