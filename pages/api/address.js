const getIp = require('ipware')().get_ip;

export default function(req, res){
    
    try{
        const userIp = getIp(req)
        console.log(userIp)
        res.status(200).send(userIp)

    }
    catch(e){
        res.status(400).send(e)
        console.log(e)

    }
}