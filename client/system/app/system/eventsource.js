app.system.eventsource = (a,x) => a['app-system-eventsource'](
  null,
  {
    $digest: (el) => (e) => {
      let serializedData = e.data
      console.info( `Container events stream ${ el.$started } - Container event data: '${ serializedData }'` )
      if ( serializedData ) {
        let data = JSON.parse( serializedData )
        if ( data.type == 'timeout' ) {
          el.$close()
          el.$send( 'app.timeout' )
        } else if ( data.type == 'error' ) {
          el.$close()
          console.warn( `Event error.\n\n${ data.error }` )
          el.$send( 'app.disconnected' )
        } else if ( data.type == 'container_status_update' ) {
          let container_status_update = data.container_status_update
          el.$send( 'app.container.status.update', { detail: container_status_update } )
        } else if ( data.type == 'system_status_update' ) {
          let system_status_update = data.system_status_update
          el.$send( 'app.system.status.update', { detail: system_status_update } )
        }
      }
    },
    $run: (el) => () => {
      if ( !el.$eventsource  ) {
        const now = new Date();
        el.$started = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        console.info( `Container events stream ${ el.$started } - Container events stream open.` )
        el.$eventsource = new EventSource( '/-/eventsource/containers' )
        el.$eventsource.onmessage = (e) => el.$digest(e)
        el.$eventsource.onerror = function(e) {
          // An event stream error is thrown when the page reloads.
          // The error is shown at the start of the console of freshly loaded page.
          // The timeout below gives a potential reload a moment to do its thing, which
          // will mean that timeout function will not be called and no error will be thrown.
          // If the error was not caused by page reload, the timeout will complete and the function will execute as normal.
          setTimeout( () => {
            console.error( `Container events stream ${ el.$started } - Unexpected error.` )
            el.$close()
            el.$send( 'app.disconnected' )
          }, 1000 )
        }
      }
    },
    $close: (el) => () => {
      if ( el.$eventsource ) {
        el.$eventsource.close()
        el.$eventsource = null
        console.info( `Container events stream ${ el.$started } - Container events stream closed.` )
      }
    },
  }
)
