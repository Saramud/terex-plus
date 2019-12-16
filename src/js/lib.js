$("#sendMail").on("click", function(){
    var name = $("#name").val();
    var technics = $("#technics").val();
    var rent = $("#rent").val();
    var phone = $("#phone").val();
    if (phone.length == 2) {
        $("#error").text("Поле обязательно для заполнения!");
        $("#phone").css("border", "2px solid red");
        return false;
    }
    if (phone.length !== 12) {
        $("#error").text("Введите номер телефона в формате +7123456789");
        $("#phone").val("+7");
        $("#phone").css("border", "2px solid red");
        return false;
    }
    $("#error").text("");
    $.ajax({
        url:'telegram.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'technics': technics, 'rent': rent, 'phone': phone},
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").text('Заявка отправлена');
            $("#sendMail").css({'background':'#28a745', 'border-color': '#28a745', 'color': 'white'});
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) { 
            console.log(`ia tut, data = ${data} `);
            // if (!data) {
            //     alert("Были ошибки, сообщение не отправлено!");
            // }
            // else {
                $("#requestform").trigger("reset");
                $("#sendMail").text('Отправка');
                $("#sendMail").css('background', '#007bff');
            $("#sendMail").prop("disabled", false);
            // }
    }
    })
    
});


