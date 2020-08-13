app.form = ( options={} ) => (a,x) => cc.form( {
  ...options,
  catch: options.catch || ( ( error, el ) => {
    el.$send( 'app.disconnected' );
  } ),
  when: {
    401: (result, el) => {el.$send('app.unauthenticated'); return null},
    418: (result, el) => {el.$send('app.timeout'); return null},
    503: (result, el) => {el.$send('app.disconnected'); return null},
    'text/terminal': (result, el, response) => [
      app.xterm({
        text: result,
        label: response.status == 500 ? ax.a['.error']( 'Server error' ) : null,
        ...options.xterm,
      })
    ],
    ...options.when
  },
} )
