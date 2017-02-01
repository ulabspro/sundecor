var productArea = 1;

$('.productCartMetaSizesWidth, .productCartMetaSizesHeight').on('input', function(productArea) {
  var productWidth = $('.productCartMetaSizesWidth').val(),
      productHeight = $('.productCartMetaSizesHeight').val();

  if (productWidth != '' && productHeight != '') {
    productArea = (productWidth * productHeight) / 10000;
    $('.productAreaForm').val(productArea);
    $('.product-cart-meta-sizes__total span').html(productArea.toFixed(1) + 'м');
  }
});

$('.checkboxElectricDrive').click(function () {
  if (($(this)).hasClass('active')) {
    $('.productElectricForm').val('Да');
  } else {
    $('.productElectricForm').val('Нет');
  }
});

$('.checkboxSetting').click(function () {
  if (($(this)).hasClass('active')) {
    $('.productInstallForm').val('Да');
  } else {
    $('.productInstallForm').val('Нет');
  }
});