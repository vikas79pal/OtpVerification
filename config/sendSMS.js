const twilio=require('twilio')

const SendSMS=(accountSid,authToken,code,MobileNo)=>{
   
    console.log(MobileNo);
    const client = new twilio(accountSid, authToken,code);
    
    client.messages.create({
        body: `Your verification code is ${code}`,
        to: `+91 ${MobileNo}`, 
        from: `${process.env.MOBILE_NO}` 
    })
    .then((message) => console.log(message.sid,"message sent succesfully")).catch((err)=>{console.log(err);})
    
    
    }
module.exports=SendSMS    