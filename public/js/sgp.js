$(document).ready(function()
{
  $('#signup').click(function(e)
  {
    // e.preventDefault();
    var page=$(this).attr('href');
    console.log(page);
    loadpage(page)
  });

  $('#login').click(function(e)
  {
    // event.preventDefault();
    var page=$(this).attr('href');
    console.log(page);
    loadpage(page)
  });
  // $('#logOut').click(function(){
  //   var page=$(this).attr('href');
  //   // var email_id=sessionStorage.getItem("userEmail")
  //  sessionStorage.removeItem("userEmail");
  //   console.log(page);
  //   loadpage1(page);
  // });
  // $("#logOut").click(function(){
  //   sessionStorage.removeItem("userEmail");
  //   window.location.hash="";
  //   location.reload();
  //   return;
  // });
  $("#logOut").click(function(){
    var page =$(this).attr('href');
    $.ajax({
      url: "http://localhost:8081/logout",
      type: "GET",
      // dataType: 'JSON',
      // data:login,
      success: function(response) {

        if(response.status==false)
        {   //$("#")
          indexPage();
          // console.log(response.message);
            // alert(response.message);
            // $("#password").after("response.message");
        }

    }
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


});
function loadpage(page)
{
  $.ajax({
    url:page,
    type:"GET",
    dataType:'html',
    success:function(response)
    {
      console.log('page was loaded',response);
      $('.content').html(response);
    },
    error:function(error)
    {
      console.log("page was not loaded ",error);
    },
    complete:function(xhr,status)
    {
      console.log("the request is completed");
    }
  });
}
function loadpage1(page)
{
  $.ajax({
    url:page,
    type:"GET",
    dataType:'html',
    success:function(response)
    {
      console.log('page was loaded',response);
      $('body').html(response);
    },
    error:function(error)
    {
      console.log("page was not loaded ",error);
    },
    complete:function(xhr,status)
    {
      console.log("the request is completed");
    }
  });
}
