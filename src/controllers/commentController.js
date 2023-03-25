import { CommentQuery, GetCommentQuery  } from '../repositories/commentRepository.js';
import { STATUS_CODE } from '../utils/statusCode.js';


export async function commentPost(req, res){
    const {postId, comment} = req.body
    const userId = res.locals.userId;
    try{
      const response = await CommentQuery({userId, postId, comment});
      res.status(STATUS_CODE.OK).send("Sucesso")
    } catch (err) {
        return res.status(STATUS_CODE.SERVER_ERROR).send(err)
    }
}

export async function getComment(req, res){
    const postId = req.params;
    try {
        const response = await GetCommentQuery(postId)
        res.status(STATUS_CODE.OK).send(response.rows)
    } catch (err) {
        return res.status(STATUS_CODE.SERVER_ERROR).send(err)
        
    }
}


