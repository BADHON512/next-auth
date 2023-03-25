
import User from './../model/model';



export const CreateUser = async (req, res) => {
    try {
        const data = req.body
        console.log(data);
        if (!data) {
            return res.status(400).json({ message: "data not provided" })
        }
        const user = await User.create(data)
        return res.status(200).json(user)
    } catch (error) {
        console.log(error.message);

    }
}


export const PostData=async(data)=>{
    try {
        const Option={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }
        const response= await fetch("http://localhost:3000/api/hello",Option)
        return response.json()
    } catch (error) {
      console.log(error.message);  
    }
}
