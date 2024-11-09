

export const genPassword = (length,capitalcase,lowercase,numbers,symbols) => {

    let password = ""
    let characters = ""
    let status = ""
    if(capitalcase){
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(lowercase){
        characters += "abcdefghijklmnopqrstuvwxyz"
    }
    if(numbers){
        characters += "0123456789"
    }
    if(symbols){
        characters += "!@#$%^&*()_+"
    }
    for(let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    if(length > 12){
        status = "Very Strong"
    }
    if(length > 8 && length <= 12){
        status = "Strong"
    }
    if(length >= 6 && length <= 8){
        status = "Medium"
    }
    if(length < 6){
        status = "Weak"
    }
    return {password,status}
}



export const genPasswordV2 = (length, capitalcase, numbers, symbols, lowercase) => {
    let password = ""
    while (password.length <= length) {
        const no = Math.floor(Math.random() * 126) 
        if (capitalcase) {
            if (no >= 65 && no <= 90) {
                password = String.fromCharCode(no) + password
                continue
            }
        }if (lowercase) {
            if (no >= 97 && no <= 122) {
                password = String.fromCharCode(no) + password
                continue
            }
        }if (numbers) {
            if (no >= 48 && no <= 57) {
                password = String.fromCharCode(no) + password
                continue
            }
        }if (symbols) {
            if ((no >= 33 && no <= 47) || (no >= 58 && no <= 64) || (no >= 91 && no <= 96) || (no >= 123 && no <= 126)) {
                password = String.fromCharCode(no) + password
                continue
            }
        }
    }

    return password
}

