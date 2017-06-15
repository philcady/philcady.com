// site scripts 
  $(document).ready( function() {

      $(".main").onepage_scroll({
        sectionContainer: "section",
        easing: "ease",                  
        animationTime: 1000,             
        pagination: true
      });

      // $('a.contact').colorbox({href:"contact-us.html", width:"70%", height:"80%", closeButton:"false", overlayClose:"true"});

      // $('#track1').on('click',function(){
      //    document.getElementById('sound1').play();
      // });

      // // qTip custom tooltips for Our Team

      // // $('[data-tooltip!=""]').qtip({ // Grab all elements with a non-blank data-tooltip attr.
      // //     content: {
      // //         attr: 'data-tooltip' // Tell qTip2 to look inside this attr for its content
      // //     }
      // // })

      // // Grab all elements with the class "hasTooltip"
      // $('.hasTooltip').each(function() { // Notice the .each() loop, discussed below
      //     $(this).qtip({
      //         content: {
      //             text: $(this).next('div') // Use the "div" element next to this for the content
      //         },
      //         style: { 
      //           classes: 'qTip qtip-youtube',
      //           width: 500,
      //           height:250
      //         },
      //         position: {
      //             my: 'top left',  // Position my top left...
      //             at: 'right top', // at the bottom right of...
      //             // target: [100, 100, false]
      //             viewport: true
      //         }
      //     });
      // });

  });