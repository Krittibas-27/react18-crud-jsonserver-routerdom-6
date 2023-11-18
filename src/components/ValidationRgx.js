export const ValidationRgx = (value) => {
    const errMsg = {}
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const phonePattern = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(value.name.trim() ===""){
        errMsg.name = "Name is Require"
    }else if(value.name.length < 3){
        errMsg.name = "Name must be 2 character"
    }else if(value.name.length > 3){
        errMsg.name =""
    }
    if(value.email.trim() ===""){
        errMsg.email = "Email is Require"
    } else if(!emailPattern.test(value.email)){
        errMsg.email = "Email not correct"
    }
    if(value.phone.trim() ===""){
        errMsg.phone = "Phone is Require"
    } else if(!phonePattern.test(value.phone)){
        errMsg.email = "Email not correct"
    }
    if(value.password.trim() ===""){
        errMsg.password = "Password is Require"
    } else if(!passwordPattern.test(value.password)){
        errMsg.password = "Password not correct"
    }
    return errMsg
}