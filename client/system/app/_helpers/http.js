app.http = ( route, success, options={} ) => app.fetch( {
  url: route,
  success: success,
  ...options,
} )
