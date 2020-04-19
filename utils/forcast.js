const request =require('request');

const forcast=(state,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=55efd18aff66e13dc2e00a68c5ef67e5&query=${state.latitute},${state.longitute}`;
        request({url:url, json:true},(error, response)=>{
            //console.log(response.body);
                if(error)
                {
                    callback('Unable to connect','undefined');
        
                }
                else if(response.body.error){
                    callback('Unable to find location','undefined');
                }
                else{
                    //console.log(`The temperature of ${response.body.location.name} is ${response.body.current.temperature}`);
                    //console.log(`change of precipitation is ${response.body.current.precip}% today`);
                    callback('undefined',{
                        temp:`The temperature of ${response.body.location.name} is ${response.body.current.temperature}`,
                        prep:`change of precipitation is ${response.body.current.precip}% today`
                    })
                    
                }
            
            })
};

module.exports=forcast;