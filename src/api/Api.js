const baseUrl = 'http://www.troycd.com:8999/api';

module.exports = {
	/*登陆*/
	userLogin: `${baseUrl}/User/UserLogin`,
	/*圈子*/
	circleList: `${baseUrl}/Circle/GetUserCircle`,
	userPostMsgList: `${baseUrl}/Circle/QueryUserPostMessageList`,
	clickLike: `${baseUrl}/Circle/ClickLike`,
	getPostMsgDetail: `${baseUrl}/Circle/GetPostMessageDetail`,
	addCommentReply: `${baseUrl}/Circle/AddCommentReply`,
	reportApi: `${baseUrl}/Circle/SubmitComplainPostMessage`,
};
