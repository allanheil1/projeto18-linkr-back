export async function authValidation(req, res, next) {
    const auth=req.headers.authorization;
    const token= auth?.replace("Bearer ", "");

    if(!token) {
        return res.status()
    }

    try{

    }catch(err){
        return res.status(s.SERVER_ERROR).send(err.message);
    }
}