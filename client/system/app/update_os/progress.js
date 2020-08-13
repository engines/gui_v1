app.update_os.progress = controller => (a,x) => [
  a.p( "Updating operating system." ),
  app.xterm( { label: 'Update OS log' } ),
  a({
    $init: (el) => {
      el.$eventsource = new EventSource( '/-/eventsource/os_update' )
      el.$eventsource.onmessage = function(e) {
        var line = e.data
        if ( line == String.fromCharCode(4) ) el.$complete()
        if ( line ) el.previousSibling.$write( `${ line }\r\n` )
      };
      el.$eventsource.onerror = function(e) {
        // Timeout to stop error when eventstream exits on new page load.
        setTimeout( () => {
          console.error( `Update OS log events stream ${ el.$started } - Unexpected error.` )
          el.$eventsource.close()
        }, 1000 )

      };
    },
    $complete: (el) => () => {
      el.$eventsource.close();
      el.nextSibling.$show()
    },
  }),
  a({
    style: {display: 'none'},
    $show: (el) => () => {
      x.lib.animate.fade.in(el)
    },
    $nodes: [
      a.br,
      a.p(a.strong('Update complete.')),
      app.btn(
        app.icon( "fas fa-check", "OK" ),
        () => controller.open('/')
      )
    ]
  }),


]
