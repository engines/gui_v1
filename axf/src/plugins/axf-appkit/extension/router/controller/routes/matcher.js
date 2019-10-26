ax.extension.router.controller.routes.
matcher = ( routesKey, scopedpath ) => {

  let params = {}
  let splat = []
  let slash

  let regexp = ax.x.router.controller.routes.regexp( routesKey )
  let routeRegex = new RegExp( regexp.string )
  let match = scopedpath.match( routeRegex )

  if ( match ) {

    let paramKeys = regexp.keys
    let remove = 0

    paramKeys.forEach( function( paramKey, i ) {

      let matched = match[ i + 1 ]

      if ( paramKey === '*' ) {
        splat.push( matched )
      } else if ( paramKey == '**' ) {
        remove = remove + matched.length
        splat.push( matched )
      } else if ( paramKey == '?' ) {
        remove = remove + matched.length
        slash = matched
      } else {
        params[paramKey] = matched
      }

    } )

    let keep = scopedpath.length - remove
    let scope = scopedpath.substring( 0, keep )

    return {
      params: params,
      splat: splat,
      slash: slash,
      scope: scope
    }

  } else {

    return null

  }

}
