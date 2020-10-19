import httpService from './httpService'


const resolveData = res => res.data

export const commentService = {
    query,
    getById,
    save,
}

function query(filterBy) {
    console.log("query -> filterBy", filterBy)
    const queryStr = `?filter=${filterBy}
    `;
    return httpService.get(`comment${queryStr}`);

}

function getById(commentId) {
    return httpService.get(`comment/${commentId}`)

}

function save(comment) {
    return httpService.post('comment', comment)
}


