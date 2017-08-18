const Server_Url='http://localhost:8085/mock'

//登录
export const LOGIN = `${Server_Url}/api/login` ; //登录
export const TEST = `${Server_Url}/test` ; //登录

//公假单
export const ERRAND_APP_ADD =`${Server_Url}/oa/attend/errand/submitApp`;
export const ERRAND_APP_SAVE =`${Server_Url}`;
export const ERRAND_APP_APPROVE =`${Server_Url}`;
export const ERRAND_APP_LIST=`${Server_Url}/oa/attend/errand/queryApp`;

export const Errand_Approve_Batch_Init = `${Server_Url}/oa/attend/errand/queryInit`;
export const Errand_Approve_Batch_Current = `${Server_Url}/oa/attend/errand/queryCurrent`;
export const Errand_Approve_Batch_Submit = `${Server_Url}/oa/attend/errand/apvSubmit`;


//ATM公假
export const ATM_ERRAND_ADD =`${Server_Url}/oa/attend/errand/submitApp`;
export const ATM_ERRAND_SAVE =`${Server_Url}/oa/attend/errand/submitApp`;
export const ATM_ERRAND_APPROVE =`${Server_Url}/oa/attend/errand/submitApp`;
export const ATM_ERRAND_LIST=`${Server_Url}/oa/attend/errand/submitApp`;


//订票
export const AIR_APP_ADD = `${Server_Url}/oa/routine/air/addBookApp`;
export const AIR_APP_SAVE= `${Server_Url}/oa/routine/air/addBookApp`;
export const AIR_APP_APPROVE = `${Server_Url}/oa/routine/air/addBookApp`;
export const AIR_APP_LIST = `${Server_Url}/oa/routine/air/queryAirApp`;



//获取用户select
export const COMMON_SELECT_USER = `${Server_Url}/common/selectPerson`;
