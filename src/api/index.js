
import Fetch from '../utils/fetch'
const api = {
    user:{
        login:()=>Fetch.post('/api/login'),
        code:(data)=>Fetch.get('/api/msgCode',data),
        upload:(formData)=>Fetch.post('/api/base/upload',formData)
    },
   
}
export default api