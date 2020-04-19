const request= require('request');

const geocode=(adress,callback)=>{
    const urlMapbox=`https://api.mapbox.com/geocoding/v5/mapbox.places/${adress}.json?access_token=pk.eyJ1IjoiYWthc2hrdW0iLCJhIjoiY2s4bmNzYTV6MGtmYzNlcXpqMmIxb3Z6cyJ9.wTGpTFnQAthigKrTT8PYyw&limit=1`;
    var state={};
    request({url:urlMapbox,json:true},(error,response)=>{
            if(error)
            {
                callback('Unable to connect','undefined');
            }
            else if(response.body.features.length==0){
                callback('Unable to find location','undefined');
            }
            else{
                state.latitute=response.body.features[0].center[1];
              
                state.longitute=response.body.features[0].center[0];
                callback('undefined',state);
              
                //console.log(`The latitute of ${city}  is ${response.body.features[0].center[1]}`);
            }
        })
       


}


module.exports=geocode;