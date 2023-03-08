import connection from "../database/database.js"
import { STATUS_CODE } from "../utils/statusCode.js"

const authUser = async (req, res, next)=>{
    const {id} = req.params
    try {
        const exist = await connection.query(`SELECT * FROM users WHERE id = $1`,[id])

        if(exist.rowCount === 0){
            res.status(STATUS_CODE.NOT_FOUND).send()
        }
        const result = exist.rows[0]
        res.locals.userId = result.id

    } catch (error) {
        res.status(STATUS_CODE.SERVER_ERROR).send(error.message)
    }

    next()
}

export default authUser;