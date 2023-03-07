import Req from "../util/request";
import {setUserinfo} from "../redux/userSlice";

const userApi = {
    getUserInfo: ()=>{
        return dispatch=>{
            return new Promise(((resolve) => {
                setTimeout(()=>{
                    dispatch(setUserinfo({
                        name: '陈非',
                        age: 28,
                        id: 1
                    }));
                    resolve({
                        name: '陈非',
                        age: 28,
                        id: 1
                    })
                }, 2000)
            }))
        }
    }
}

export default userApi;