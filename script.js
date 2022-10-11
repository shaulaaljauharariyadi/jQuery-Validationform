$(document).ready(function() {
    $('#frm-mhs').validate({
        rules: {
            nim : {
                digits: true,
                minlength:10,
                maxlength:10
            },
            tgl: {
                indonesianDate:true
            },
            umur: {
                digits: true,
                range: [0, 100]
            }, 
            email: {
                email: true
            },
            situs: {
                url: true
            },
            pass2: {
                equalTo: "#pass1"
            }
        },
        messages: {
            nim: {
                required: "Kolom nim harus diisi",
                minlength: "Kolom nim harus terdiri dari 10 digit",
                maxlength: "Kolom nim harus terdiri dari 10 digit"
            },
            email: {
                required: "Alamat email harus diisi",
                email: "Format email tidak valid"
            },
            pass2: {
                equalTo: "Password tidak sama"
            }
        }
    });
});

$.validator.addMethod(
    "indonesianDate",
    function(value, element) {
        return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
    },
    "mohon masukkan tanggal sesuai format DD/MM/YYYY"
);