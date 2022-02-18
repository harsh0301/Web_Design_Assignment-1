$(document).ready(function(){
    $(".favor").click(function(){
      $(".favor").toggleClass('favored');
    });
  });
  $(document).ready(function(){
$(".Checkout").click(function(){
alert("Value: " + $("#pname").text()+"\n"+"Value: " + $("#iceinput").val()+"\n"+"Value: " + $("#sugarinput").val()+"\n"+"Value: " + $("#sizeinput").val()+"\n"+"Value: " + $(".MyQuantity input").val()+"\n"+"Value: " + $("#totalprice").val()+"\n"+"Value: " + $("#MyMessage").val());
});
});
$(document).ready(function(){
    $("#add").click(function(){
        var n = $(".MyQuantity input").val();
        n++;
        $(".MyQuantity input").val(n);
        $("#quantityinput").val(n);
        var nn=$("#pprice").val();
        
        $("#totalprice").val(nn*n);
    });
});
$(document).ready(function(){
    $("#reduce").click(function(){
        var n = $(".MyQuantity input").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(".MyQuantity input").val(n);
        $("#quantityinput").val(n);
        var nn=$("#pprice").val();
        $("#totalprice").val(n*nn);
    });
});
$(document).ready(function(){
    $("#ssz").click(function(){
        $("#sizeinput").val("Short");
    });
});
$(document).ready(function(){
    $("#tsz").click(function(){
        $("#sizeinput").val("Tall");
    });
});
$(document).ready(function(){
    $("#gsz").click(function(){
        $("#sizeinput").val("Grande");
    });
});
$(document).ready(function(){
    $("#sf").click(function(){
        $("#sugarinput").val("sugar free");
    });
});
$(document).ready(function(){
    $("#ls").click(function(){
        $("#sugarinput").val("less sugar");
    });
});
$(document).ready(function(){
    $("#nms").click(function(){
        $("#sugarinput").val("Normal");
    });
});
$(document).ready(function(){
    $("#icf").click(function(){
        $("#iceinput").val("ice free");
    });
});
$(document).ready(function(){
    $("#lic").click(function(){
        $("#iceinput").val("less ice");
    });
});
$(document).ready(function(){
    $("#nic").click(function(){
        $("#iceinput").val("Normal");
    });
});
