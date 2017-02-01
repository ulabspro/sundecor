$(document).ready(function() {
  $('.productCountMinus').click(function () {
    var count = parseInt($(this).parents('.productCount').find('.productCountValue').val());
    if (count != 1) {
      count--;
      $(this).parents('.productCount').find('.productCountValue').val(count);
    }
  });
  $('.productCountPlus').click(function () {
    var count = parseInt($(this).parents('.productCount').find('.productCountValue').val());
    count++;
    $(this).parents('.productCount').find('.productCountValue').val(count);
  });
});