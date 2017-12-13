$(document).ready(()=>{
  console.log("ready")
  let testimony_page=1
  let readmore_status=false
  $('#page2').hide()
  $(".pages-test").slice(0,1).show();
  $('.readmorecontent').hide()
  $(document).on('click','.container',()=>{
    $('.readmorecontent').hide()
    $('pointer').removeClass('up-arrow')
  })
  function switchPage(){
    console.log("Here")
    if(testimony_page%2!=0){
      $('#page2').hide()
      $('#page1').show()
    }
    else{
      $('#page1').hide()
      $('#page2').show()
    }
    for (let i=1; i<3; i++){
      if (i==testimony_page){
        console.log("Herrrr"+testimony_page)
        let str='#circle'+testimony_page
        $(str).addClass("chosen")

      }
      else{
        if($('#circle'+i).hasClass("chosen")){
          $('#circle'+i).removeClass('chosen')
        }
      }
    }
  }

  $(document).on('click','#rm1', (event)=>{
    console.log("Clicked")
    event.stopPropagation()
    $('#rc4').hide()
    $('#rc3').hide()
    $('#rc2').hide()
    $('#rc1').slideToggle('slow')
    $('#p1').toggleClass('up-arrow')
  })
  $(document).on('click','#rm2',(event)=>{
    console.log("Clicked")
    event.stopPropagation()
    $('#rc4').hide()
    $('#rc3').hide()
    $('#rc1').hide()
    $('#rc2').slideToggle('slow')
    $('#p2').toggleClass('up-arrow')
  })
  $(document).on('click','#rm3', (event)=>{
    console.log("Clicked")
    event.stopPropagation()
    $('#rc4').hide()
    $('#rc1').hide()
    $('#rc2').hide()
    $('#rc3').slideToggle('slow')
    $('#p3').toggleClass('up-arrow')
  })
  $(document).on('click','#rm4', (event)=>{
    console.log("Clicked")
    event.stopPropagation()
    $('#rc1').hide()
    $('#rc3').hide()
    $('#rc2').hide()
    $('#rc4').slideToggle('slow')
    $('#p4').toggleClass('up-arrow')
  })



  // $(".more").click(function() {
  //
  //     var items = $('#container .item:visible').hide().last();
  //
  //     var nextItems = items.nextAll().slice(0, 3);
  //
  //     if (nextItems.length === 0) {
  //         nextItems = $("#container .item").slice(0, 3);
  //     }
  //
  //     nextItems.show();
  // });








  $(document).on('click','.arrow-right',()=>{
    if(testimony_page<3){
      testimony_page++
    }
    switchPage()
  })
  $(document).on('click','.arrow-left',()=>{
    if(testimony_page>1){
      testimony_page--
      console.log('left')

    }
    switchPage()
  })

})
