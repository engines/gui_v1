app.http = function( url, success, options={} ) {
  return ax.x.fetch( {
    url: url,
    success: success,
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
    ...options,
  } )
}
