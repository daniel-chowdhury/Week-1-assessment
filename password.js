let password = "UnitedStates1776$"
// Password must be equal to or greater than 10, equal to or less than 20, contain atlteast one uppercase letter, atleast one lowercase letter, atleast one number, atleast one special character, must contain no spaces, and must not be equal to any of the forbidden words


let primary_condition = false
let secondary_condition = false

// ***************** checking primary conditions **********************

let i = 0;
let j = 0;
let check_letter = 0
let check_number = 0

for (i = 0; i < password.length; i++) {
    if (isNaN(password.charAt(i)) === true) {
        check_letter++
    } else {
        check_number++
    }
}

if (password.length >= 10 && check_letter >= 1 && check_number >= 1) {
    primary_condition = true
} 

// ***************** checking secondary conditions **********************

const special_char = ['#', '!', '%', '$']
let spec_char_check = 0
let UC = 0
let LC = 0
let space_check = 0

for (i = 0; i <= password.length; i++) {
    if (isNaN(password.charAt(i))) {
        if(password.charAt(i) === password.charAt(i).toUpperCase()) {
        UC++
    } else {
        LC++
    }
    }
    
    
    if(password.charAt(i) === ' ') {
        space_check++
    }
    for (j = 0; j <= special_char.length; j++) {
        if (password.charAt(i) === special_char[j]) {
            spec_char_check++
        }
    }
}

let forbidden = ["password", "Password", "letmein", "Letmein"]
let forb_check = 0

for (i = 0; i <= forbidden.length; i++) {
    if (password.includes(forbidden[i])) {
        forb_check++
    }
}

// unfortunately special character is counted as upper case, so code below takes care for that
UC = UC - spec_char_check

if (UC >= 1 && LC >= 1 && space_check === 0 && spec_char_check >= 1 && password.length <= 20 && forb_check === 0) {
    secondary_condition = true
}

// ***************** password created or not created **********************

if (primary_condition && secondary_condition) {
    console.log("Password successfully created")
} else {
    console.log("Password creation failed")
}
