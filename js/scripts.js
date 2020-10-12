$(document).ready(function(){
    $("#design-icon").click(function(){
      $("#design-icon").show('1000');
      $("#design").hide('1500');
    });
    $("#design").click(function(){
      $("#design").show();
      $("#design-icon").hide('1500');
    });
  });

  $(document).ready(function(){
    $("#development-icon").click(function(){
      $("#development-icon").show('1000');
      $("#development").hide('1500');
    });
    $("#development").click(function(){
      $("#development").show('1500');
      $("#development-icon").hide('1500');
    });
  });


  $(document).ready(function(){
    $("#product-icon").click(function(){
      $("#product-icon").show('1000');
      $("#product").hide('1500');
    });
    $("#product").click(function(){
      $("#product").show('1500');
      $("#product-icon").hide('1500');
    });
    $("#submit").click(function(){
      submit();
      event.preventDefault();
  });
  });

  $(".work1").mouseover(function() {
    $(".port1").show()
    $(".work1").mouseout(function() {
      $(".port1").hide()
    })
  })



  $(".work2").mouseover(function() {
    $(".port2").show()
    $(".work2").mouseout(function() {
      $(".port2").hide()
    })
  })

  $(".work3").mouseover(function() {
    $(".port3").show()
    $(".work3").mouseout(function() {
      $(".port3").hide()
    })
  })

  $(".work4").mouseover(function() {
    $(".port4").show()
    $(".work4").mouseout(function() {
      $(".port4").hide()
    })
  })

  $(".work5").mouseover(function() {
    $(".port5").show()
    $(".work5").mouseout(function() {
      $(".port5").hide()
    })
  })

  $(".work6").mouseover(function() {
    $(".port6").show()
    $(".work6").mouseout(function() {
      $(".port6").hide()
    })
  })

  $(".work7").mouseover(function() {
    $(".port7").show()
    $(".work7").mouseout(function() {
      $(".port7").hide()
    })
  })

  $(".work8").mouseover(function() {
    $(".port8").show()
    $(".work8").mouseout(function() {
      $(".port8").hide()
    })
  })
  $("button").click(function(){
    var name=document.getElementById("name").value;
    var messages = document.getElementById("message").value;
    if(name,messages === ""){
        alert("Make sure all field are filled")
    }
    else{
    alert("Thank you for reaching out to us. We have received your message" + ' ' + name );
    }
    });