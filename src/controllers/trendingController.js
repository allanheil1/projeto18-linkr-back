export async function getTrending(req, res) {
    try {

    } catch (err) {
        console.log(err);
        return res.status(STATUS_CODE.SERVER_ERROR).send(err);
    }
}