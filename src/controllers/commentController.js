import { CommentRepository } from '../repositories/commentRepository.js';
import { STATUS_CODE } from '../utils/statusCode.js';


export async function commentPost(req, res){
    const {user_id, post_id, content} = req.body
    try{
      await CommentRepository(user_id, post_id, content)

        res.status(STATUS_CODE.OK).send()
    } catch (err) {
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }
}


