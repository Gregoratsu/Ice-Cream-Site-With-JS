$(document).ready(function () {

    $("input[name='type']").click(function () {
        if ($("#cone").is(":checked")) {
            $("#cone-image").show();
        } else { $("#cone-image").hide(); }
    });

    $("input[name='type']").click(function () {
        if ($("#cup").is(":checked")) {
            $("#cup-image").show();
        } else { $("#cup-image").hide(); }
    });

    $('#vanilla').click(function () {
        if (this.checked) {
            $('#vanillaquantity').show();
            $('#vanilla-img').show();
        } else {
            $('#vanillaquantity').hide();
            $('#vanilla-img').hide();
        }
    })

    $('#chocolate').click(function () {
        if (this.checked) {
            $('#chocolatequantity').show();
            $('#chocolate-img').show();
        } else {
            $('#chocolatequantity').hide();
            $('#chocolate-img').hide();
        }
    })

    $('#strawberry').click(function () {
        if (this.checked) {
            $('#strawberryquantity').show();
            $('#strawberry-img').show();
        } else {
            $('#strawberryquantity').hide();
            $('#strawberry-img').hide();
        }
    })

    $('#banana').click(function () {
        if (this.checked) {
            $('#bananaquantity').show();
            $('#banana-img').show();
        } else {
            $('#bananaquantity').hide();
            $('#banana-img').hide();
        }
    })

    $('#coffee').click(function () {
        if (this.checked) {
            $('#coffeequantity').show();
            $('#coffee-img').show();
        } else {
            $('#coffeequantity').hide();
            $('#coffee-img').hide();
        }
    })
})

