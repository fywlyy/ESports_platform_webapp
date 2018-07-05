const baseUrl = 'http://www.troycd.com:8999/api';

module.exports = {
	/*登陆、注册、修改密码*/
	userLogin: `${baseUrl}/User/UserLogin`,
	sendRegisterUserMsg: `${baseUrl}/User/SendRegisterUserMsg`,
	registerUser: `${baseUrl}/User/RegisterUser`,
	sendResetPwdMsg: `${baseUrl}/User/SendResetPwdMsg`,
	resetPwd: `${baseUrl}/User/ResetPwd`,

	/*文件上传*/
	uploadFile: `${baseUrl}/Common/UploadFile`,

	/*圈子*/
	circleList: `${baseUrl}/Circle/GetUserCircle`,
	userPostMsgList: `${baseUrl}/Circle/QueryUserPostMessageList`,
	clickLike: `${baseUrl}/Circle/ClickLike`,
	getPostMsgDetail: `${baseUrl}/Circle/GetPostMessageDetail`,
	addCommentReply: `${baseUrl}/Circle/AddCommentReply`,
	reportApi: `${baseUrl}/Circle/SubmitComplainPostMessage`,
	addPostMessage: `${baseUrl}/Circle/AddPostMessage`,
	/*比赛*/
	getCompetitionList:`${baseUrl}/Competition/GetRecommendCompetitionList`,
	getVideoList:`${baseUrl}/Competition/GetAdvertisingList`,
	getNewsList:`${baseUrl}/Competition/GetRecommendNewsList`,
	getMatchDetailsInfo:`${baseUrl}/Competition/GetCompetitionDetail`,
	getAllMatchesList:`${baseUrl}/Competition/SearchCompetitionList`,
	/*新闻*/
	getAllNewsList:`${baseUrl}/Competition/SearchNewsList`,
	getNewsInfo:`${baseUrl}/Competition/GetNewsDetail`,
	/*课程*/
	getLiveList:`${baseUrl}/Lesson/QueryLessonHourList`,
	getLiveDetailsInfo:`${baseUrl}/Lesson/GetLesson`,
	getVideoList:`${baseUrl}/Lesson/QueryVideoList`,
	getVideoDetailsInfo:`${baseUrl}/Lesson/GetVideo`,
	/*游戏*/
	getGameInfoList:`${baseUrl}/GameOrder/GetGameInfoList`,
	seachAccountList:`${baseUrl}/GameOrder/SeachAccountList`,
	seachPlayWithList:`${baseUrl}/GameOrder/SeachPlayWithList`,
	/*用户*/
	submitAuthUser:`${baseUrl}/User/SubmitAuthUser`,
	getSchoolList:`${baseUrl}/User/GetSchoolList`,
};
