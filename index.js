$(function () {
  $("#fname_error_message").hide(); //initial state error msg akan dihide
  $("#email_error_message").hide();
  $("#password_error_message").hide();
  $("#retype_password_error_message").hide();
  $("#sex_error_message").hide();
  $("#country_error_message").hide();

  var error_fname = false; //initial state error akan false,
  var error_email = false;
  var error_password = false;
  var error_retype_password = false;
  var error_sex = false;
  var error_country = false;

  $("#form_fname").focusout(function () {
    //fungsi untuk mengecek apakah susuai validasi ketika selesai menginput
    check_fname();
  });
  $("#form_email").focusout(function () {
    check_email();
  });
  $("#form_password").focusout(function () {
    check_password();
  });
  $("#form_retype_password").focusout(function () {
    check_retype_password();
  });
  $("#form_male").focusout(function () {
    check_sex();
  });
  $("#country").focusout(function () {
    check_country();
  });

  function check_fname() {
    //fungsi untuk validasi fullname
    var pattern = /^[a-zA-Z]*$/;
    var fname = $("#form_fname").val();
    if (pattern.test(fname) && fname !== "") {
      $("#fname_error_message").hide();
      $("#form_fname").css("border-bottom", "2px solid #34F458");
    } else {
      $("#fname_error_message").html("Should contain only Characters");
      $("#fname_error_message").show();
      $("#form_fname").css("border-bottom", "2px solid #F90A0A");
      error_fname = true;
    }
  }

  function check_password() {
    //fungsi validasi untuk password
    var password_length = $("#form_password").val().length;
    if (password_length < 8) {
      $("#password_error_message").html("At least 8 Characters");
      $("#password_error_message").show();
      $("#form_password").css("border-bottom", "2px solid #F90A0A");
      error_password = true;
    } else {
      $("#password_error_message").hide();
      $("#form_password").css("border-bottom", "2px solid #34F458");
    }
  }

  function check_retype_password() {
    var password = $("#form_password").val(); //untuk mengecek value password
    var retype_password = $("#form_retype_password").val(); //untuk mengecek value re-type password
    if (retype_password === "") {
      $("#retype_password_error_message").html("Password Cannot be Empty");
      $("#retype_password_error_message").show();
      $("#form_retype_password").css("border-bottom", "2px solid #F90A0A");
    } else if (password !== retype_password) {
      //mengecek apakah value password dan re-type sama
      $("#retype_password_error_message").html("Passwords Did not Matched");
      $("#retype_password_error_message").show();
      $("#form_retype_password").css("border-bottom", "2px solid #F90A0A");
      error_retype_password = true; //jika tidak sama error akan true
    } else {
      $("#retype_password_error_message").hide(); //jika sama error msg akan di hide
      $("#form_retype_password").css("border-bottom", "2px solid #34F458");
    }
  }

  function check_email() {
    //validasi untuk cek email
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#form_email").val();
    if (pattern.test(email) && email !== "") {
      $("#email_error_message").hide();
      $("#form_email").css("border-bottom", "2px solid #34F458");
    } else {
      $("#email_error_message").html("Invalid Email");
      $("#email_error_message").show();
      $("#form_email").css("border-bottom", "2px solid #F90A0A");
      error_email = true;
    }
  }

  function check_sex() {
    //validasi untuk cek radio button apakah di checked
    if ($("input:radio[name='sex']").is(":checked")) {
      $("#sex_error_message").hide();
    } else {
      $("#sex_error_message").html("Choose one ");
      $("#sex_error_message").show();
      error_sex = true;
    }
  }

  function check_country() {
    //validasi untuk cek select ada yg dipilih atau tidak
    var country = $("#country").val();
    if (country === null) {
      $("#country_error_message").html("Choose one country ");
      $("#country_error_message").show();
      $("#country").css("border-bottom", "2px solid #F90A0A");
      $("#country_error_message").css("margin-left", "5px");
      error_country = true;
    } else {
      $("#country_error_message").hide();
    }
    console.log(country, "<<<<<<");
  }

  $("#registration_form").submit(function () {
    error_fname = false;
    error_email = false;
    error_password = false;
    error_retype_password = false;
    error_sex = false;
    error_country = false;

    check_fname();
    check_email();
    check_password();
    check_retype_password();
    check_sex();
    check_country();
    //untuk cek semua error false
    if (
      error_fname === false &&
      error_email === false &&
      error_password === false &&
      error_retype_password === false &&
      error_sex === false &&
      error_country === false
    ) {
      alert("Registration Successfull");
      return true;
    } else {
      alert("Please Fill the form Correctly");
      return false;
    }
  });
});
