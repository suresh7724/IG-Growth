
var copyright=document.getElementById('copyright');
var date =new Date();
var year=date.getFullYear();
// console.log(year);
copyright.innerHTML=`Copyright &#169;${year} All Rights Reserved by Bravos Agency`

$('.burger').click(function()
{
  // console.log('clicked');
  $('#nav').toggleClass('nav-items-show')
  $('.burger').toggleClass('burger-translate')
  $('.logo').toggleClass('hide')
  
})