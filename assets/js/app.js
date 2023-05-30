let cl = console.log;
const formContainer = document.getElementById('formContainer'),
    email = document.getElementById('email'),
    password = document.getElementById('password');

let Db =
{
    email: `ssjagdale974@gmail.com`,
    password: `shubham@123`
}

const OnSignupHandler = (e) => {
    e.preventDefault();
    return new Promise((resolve, reject) => {
        if (Db.email === email.value && Db.password === password.value) {
            resolve(`Sign Up Successfully`)
        } else {
            reject(`Something went wrong`)
        }
    })
        .then((res) => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: res,
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
                timer: 1500
            })
        })
        .finally(() => {
            e.target.reset()
        })
}

formContainer.addEventListener('submit', OnSignupHandler)