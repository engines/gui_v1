app.form = ( options={} ) => cc.form( {
  ...options,
  catch: options.catch || ( ( error, el ) => alert( 'Server not responding.' ) ),
  when: {
    401: (result, el) => {el.$send('app.unauthenticated'); return null},
    418: (result, el) => {el.$send('app.timeout'); return null},
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
