document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
});



$(document).ready(()=>{
    $('#signup-submit').click(()=>{
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val() ;
        console.log(name, email) ;
        var user = {
            "name" : name ,
            "email" : email,
            "password" : password
        } ;
        //  console.log(user) ;
        // db.usersDB.save(user) ;
    })
})