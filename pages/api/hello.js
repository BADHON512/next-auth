// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CreateUser } from './../../utils/hellper';
import ConnectDB from './../../utils/connectDB';


export default async function handler(req, res) {
    
  const {method}=req
  switch (method) {
    case "GET":

 
      break;
      case "POST":
        await ConnectDB()
          CreateUser(req,res)
      break;
  
    default:
      break;
  }
  
           
 
}
