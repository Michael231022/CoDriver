/** Confirm Password **/

const password = document.getElementById('Password')
const retype_password = document.getElementById('Confirm_Password')


function click_continue() {
    console.log(password.value)
    console.log(retype_password.value)

    if (retype_password.value != password.value) {
        alert("Password not matched.")
    }
}
