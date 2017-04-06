
var temp = [];
$(document).ready(function() {

  $.ajax({
    url: "http://localhost:8081/welcome",
    type: "GET",
    success: function(response) {
      console.log('page was loaded', response.status);
      if(response.status==true)
      {
        welcomepage();
      }
    },
    error: function(error) {
      console.log("page was not loaded ", error);
    },
    complete: function(xhr, status) {
      console.log("the request is completed");
    }
    // welcomepage();
  });



  $("#login1").click(function() {
    //alert("hi");
    var flag = 0;
    var userEmail = $("#email_id").val();;
    var userPassword = $("#password").val();
    var login={
      email:userEmail,
      password:userPassword
    };

    $.ajax({
      url: "http://localhost:8081/login",
      type: "POST",
      dataType: 'JSON',
      data:login,
      success: function(response) {
        console.log('page was loaded', response);
        console.log(response.status);
        if(response.status==false)
        {   //$("#"
          console.log(response.message);
          //  alert(response.message);

            $("#password").after("response.message");
        }
        else
        {
        welcomepage();
      }
        //$('body').html(response);
      },
      error: function(error) {
        console.log("page was not loaded ", error);
      }
    });

  });

  $("#submit").click(function() {
  var Username = $("#name").val();
  var Useremail = $("#email_id").val();
  var Usermobile=$("#mobile_no").val();
  var password = $("#Password").val();
  var rPassword = $("#rPassword").val();

  var signup={
    name:Username,
    email:Useremail,
    mobile:Usermobile,
    password:password,
    confirmpassword:rPassword
  };
  $.ajax({
    url: "http://localhost:8081/signup",
    type: "POST",
    dataType: 'JSON',
    data:signup,
    success: function(response) {
      console.log('page was loaded', response);
      if(response.status==true)
      {
      welcomepage();
    }
    },
    error: function(error) {
      console.log("page was not loaded ", error);
    }
  });

   });
});
function indexPage() {

  $.ajax({
    url: "index.html",
    type: "GET",
    dataType: 'html',
    success: function(response) {
      //console.log('page was loaded', response);
       $('body').html(response);
    },
    error: function(error) {
      console.log("page was not loaded ", error);
    },
    complete: function(xhr, status) {
      console.log("the request is completed");
    }
  });
}



function welcomepage() {

  $.ajax({
    url: "template/home.html",
    type: "GET",
    dataType: 'html',
    success: function(response) {
      //console.log('page was loaded', response);
      $('body').html(response);
    },
    error: function(error) {
      console.log("page was not loaded ", error);
    },
    complete: function(xhr, status) {
      console.log("the request is completed");
    }
  });
}
