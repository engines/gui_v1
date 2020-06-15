app.http = function( route, success, options={} ) {

  return ax.x.http( {
    url: route,
    success: success,
    catch: options.catch || ( ( error, el ) => el.$send( 'app.disconnected' ) ),
    ...options,
    when: {
      401: ( response, el ) => el.$send( 'app.unauthenticated' ),
      418: ( response, el ) => el.$send( 'app.timeout' ),
      503: ( response, el ) => el.$send( 'app.disconnected' ),
      'text/terminal': ( response, el ) => response.text().then( result => {
        el.$nodes = [app.xterm( {
          text: result,
          label: response.status == 500 ? ax.a['.error']( 'Server error' ) : null,
          ...options.xterm,
        } )]
      } ),
      ...options.when
    },
  } )
}
