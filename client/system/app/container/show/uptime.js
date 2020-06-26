app.container.show.uptime = path => (a,x) => app.http(
  `${ path }/uptime`,
  ( result, el ) => {

    el.$nodes = [a.small( a.i (
      a({
        $nodes: ( el, seconds ) => app.secondsToWords( seconds ),
        $state: result.uptime,
        title: 'Uptime',
        $init: el => setInterval( () => el.$state++, 1000),
      })
    ) )]

  }
)
