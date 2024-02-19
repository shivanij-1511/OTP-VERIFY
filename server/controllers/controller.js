const textflow = require("textflow.js");
textflow.useKey("lqh93JH5hg1uNVxORJfS6Of6oUALcEbqQviGzsHeqbzPulKS7ksoekEmupUBV523"); 

const sendVerificationCode = async(req, res) =>{

    const {phone_number, password} = req.body;

    const verificationOptions ={
        service_name: 'Atithi-The Bharat BnB',
        seconds: 600,
    }

    const result = await textflow.sendVerificationSMS(phone_number, verificationOptions);
console.log(result);
    return res.status(result.status).json(result.message)

}

const verifyCode = async(req, res) =>{

    const {phone_number, code} = req.body;


    let result = await textflow.verifyCode(phone_number, code); 

    if(result.valid)
    {
        // your server logic
        return res.status(200).json(result.message)
    }
    return res.status(result.status).json(result.message)
    }

const temp=async(req,res)=>{
    res.send("hello")
}

module.exports={
    sendVerificationCode,
    verifyCode,
    temp
}