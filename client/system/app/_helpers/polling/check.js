app.polling.check = ( route, success, options={} ) => (a,x) => a['app-polling-check'](
  [
    app.hourglass( 'Checking system status' ),
    a['app-polling-check-http']
  ],
  {
    $init: (el) => setTimeout(
      () => {
        el.$('app-polling-check-http').$nodes = [
          app.http(
            route,
            ( result, el ) => success( result, el ),
            {
              when: {
                404: ( result, el ) => {el.$('^app-polling').$wait(); return null},
                503: ( result, el ) => {el.$('^app-polling').$wait(); return null},
                ...options.when
              },
              catch: ( e, el ) => {
                console.log("Caught:", e)
                el.$('^app-polling').$wait()
              },
            }
          )
        ]
      },
      2000
    ),
  }
)
