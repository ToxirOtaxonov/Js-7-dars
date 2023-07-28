let users = [
    {
        login: "Baxti vor",
        password: "2007"
    }
]
$(document).ready(function (){
    $(".btn-success").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        let num = false;
        if (users.length !=0){
            users.forEach(function (item){
                if (login == item.login){
                    if (
                        password == item.password){
                        num = true;
                        alert("Zo'r! Siz tizimga kirdingiz!")
                    }
                    else{
                        alert("Parolingiz noto'g'ri!");
                    }
                    }
            });
            if (!num){
                alert("Haliyam ro'yhatdan o'tmadingiz!")
            }
        }else{
            alert("Siz hali ro'yhatdan o'tmagansiz. Iltimos ro'yhatdan o'ting!")
        }
    });
    $(".btn-link").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        let num = false;
        else {
            if (users.length !=0){
                users.forEach(function (item){
                    if (login == item.login){
                        num = true;
                    }
                });
                if (num){
                    alert("Bunday user mavjud!");
                }else{
                    alert("Zo'r! Siz ro'yhatdan o'tdingiz!");
                    users.push({login: login, password: password})
                )}
            else{
                users.push({login: login, password: password});
            }
            console.log(users)
        }
    });
    $(".btn-light")
    let attr = $('#password').attr('type');
    $('#password').attr("type","text")
    $(".fa").toggleClass("fa-eye fa-eye-slash")
    $("#password").css('border-color: red')
})