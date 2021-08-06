import sendRequest from "@/apis/sendRequest";
import sendMultipart from "@/apis/sendMultipartRequest";

export default {
    getMemos() {
        return sendRequest({
            url:'/api/memos',
            method : 'get'
        })
    },
    getMemo(memoId) {
        return sendRequest({
            url : '/api/memos/' + memoId,
            method : 'get'
        })
    },
    addMemo(data) {
        return sendMultipart({
            url : '/api/memos/',
            method : 'post',
            data : data,
        })
    },
    deleteMemo(memoId) {
        return sendRequest({
            url : '/api/memos/' + memoId,
            method : 'delete'
        })
    },
    updateMemo(memoId, data) {
        return sendMultipart({
            url : '/api/memos/' + memoId,
            method : 'put',
            data : data
        })
    },
    leaveAuth(userid) {
        return sendRequest({
            url : '/api/users/' + userid,
            method : 'delete'
        })
    }
}