
import dbConn from "../../../utils/config";
import Cities from '../../../models/Cities'
dbConn();

const capitalizeFirstLetter = (str) => {
    let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

export default async function(req, res) {
    
    const {id} = req.query
    
    const city = await Cities.findOne({name: capitalizeFirstLetter(id)})
 
    if(!city) return res.status(400).send("City not found.")
    res.status(200).send(city.coord)
}