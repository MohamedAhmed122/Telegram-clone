
export const convertTimeStamp =(timeStamp)=>{
    let dateObject = new Date(timeStamp)

    let month = dateObject.getMonth()+1;
    let year = dateObject.getFullYear();
    let date = dateObject.getDate();
    const result=`${date}/${month}/${year}`
    return result;
}