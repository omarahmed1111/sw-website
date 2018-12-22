$(document).ready(function(){

  $("#generate").click(function(){
      var title = $("#book_title").val();
      var sub_title = $("#book_subtitle").val();
      var author = $("#author_name").val();
      var backcolor = $("#background_color").val();
      var publisher = $("#publisher").val();
      var date = $("#publishing_date").val();
      
      $("#header1").text(title);
      $("#header2").text(sub_title);
      $("#author").text(author);
      $("#publish").text(publisher);
      $("#year").text(date);
      $(".right_half").css("background-color",backcolor);
  });
                      
                      
                      
                      
                      

});