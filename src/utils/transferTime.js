const parseTime = (time) =>{
    let formTime = '';
    const seconds = parseInt(time/1000%60);
    const minutes = parseInt(time/60000%60);
    const hours = parseInt(time/3600000%24);
    const day = parseInt(time/(3600000*24));
    const data = [day,hours,minutes,seconds]
    const str = ['天','时','分','秒']
    data.forEach((item,idx)=>{
        if (item!=0){
            formTime+=item+str[idx]+' '
        }
    })
    return formTime
}
export default parseTime