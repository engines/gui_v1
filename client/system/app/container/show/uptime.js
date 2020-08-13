app.container.show.uptime = path => (a,x) => app.http(
  `${ path }/uptime`,
  ( result, el ) => {

    el.$nodes = [a.small(a({
      $tag: 'i',
      $nodes: ( el ) => app.secondsToWords( el.$state ),
      $state: result.uptime,
      title: 'Uptime',
      $init: el => setInterval( () => el.$state++, 1000),
    }))]

  }
)
