(function($) {

  var quotes = [
    'does the needful',
    'internet superstar',
    'code monkey',
    'not a null pointer',
    'dead beef',
    'counts from zero',
    'catchphrase!',
    'wallet owner'
  ]

 function init() {
    /* Sidebar height set */
    $sidebarStyles = $('.sidebar').attr('style')
    $sidebarStyles += ' min-height: ' + $(document).height() + 'px;';
    $('.sidebar').attr('style', $sidebarStyles);

    /* Secondary contact links */
    var $scontacts = $('#contact-list-secondary');
    var $contactList = $('#contact-list');

    $scontacts.hide();
    $contactList.mouseenter(function(){ $scontacts.fadeIn(); });
    $contactList.mouseleave(function(){ $scontacts.fadeOut(); });

    /**
     * Tags & categories tab activation based on hash value. If hash is undefined then first tab is activated.
     */
    function activateTab() {
      if(['/tags.html', '/categories.html'].indexOf(window.location.pathname) > -1) {
        var hash = window.location.hash;
        if(hash)
          $('.tab-pane').length && $('a[href="' + hash + '"]').tab('show');
        else
          $('.tab-pane').length && $($('.cat-tag-menu li a')[0]).tab('show');
      }
    }

    // watch hash change and activate relevant tab
    $(window).on('hashchange', activateTab);

    // initial activation
    activateTab();

    //load random quote
    $('#bio').html(quotes[Math.floor(Math.random() * quotes.length)]);

    //load repo stats (but let anything else go first, because this is less important)
//    setTimeout(function(){
//      $('.repo').each(function(i,v){
//        $.get('https://api.github.com/repos/monitorjbl/'+$(v).attr('repo-id'), function(response){
//          $(v).children('.stats').html(
//            '<i class="fa fa-star"></i> '+response.watchers+
//            '&nbsp;&nbsp;<i class="fa fa-code-fork"></i> '+response.forks);
//        });
//      });
//    }, 50);
  }

  // run init on document ready
  $(document).ready(init);

})(jQuery);
