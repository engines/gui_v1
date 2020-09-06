app.system.install.monitor = controller => (a,x) => [
  app.close( controller, {path: '/'}),

  a.h5( 'Monitor installation' ),
  app.http(
    '/-/-/engine_builder/params',
    ( installing, el ) => {

      if ( installing.engine_name ) {
        el.$nodes = [

          installing.engine_name, ' ',
          a.i( `${
            installing.host_name
          }.${
            installing.domain_name
          }` ),

          app.xterm( { label: 'Builder log' } ),
          a['appkit-event-source']( null, {
            $init: (el) => {
              el.$eventsource = new EventSource( '/-/eventsource/builder' )
              el.$eventsource.onmessage = function(e) {
                var line = e.data
                if ( line == String.fromCharCode(4) ) el.$complete()
                if ( line ) el.previousSibling.$write( `${ line }\r\n` )
              }
              el.$eventsource.onerror = function(e) {
                // Timeout to stop error when eventstream exits on new page load.
                setTimeout( () => {
                  console.error( `Builder log events stream ${ el.$started } - Unexpected error.` )
                  el.$eventsource.close()
                }, 1000 )

              }
            },
            $complete: (el) => () => {
              el.$eventsource.close()
              el.$nodes = [
                app.http(
                  '/-/-/engine_builder/status',
                  (builder, el) => {
                    el.$nodes = [
                      builder.did_build_fail ?
                      [
                        a.p( a['.error']('Installation failed.') ),
                        app.btn(
                          app.icon( 'fa fa-check', 'OK' ),
                          (e,el) => controller.open( '/' ),
                          { class: 'btn btn-primary' }
                        ),
                      ] : [
                        a.p( 'Installation complete.' ),
                        a.p( 'Please read the installation report.' ),
                        app.btn(
                          app.icon( 'fa fa-arrow-right', 'Installation report' ),
                          (e,el) => controller.open( `/applications/${ installing.engine_name }/installation` )
                        ),
                      ]
                    ]
                  },
                ),
              ]
            },
          } ),
        ]
      } else {
        el.$nodes = [
          a.p( a['.error']( 'Not installing.' ) ),
        ]
      }

    }
  ),

]
