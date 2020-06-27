app.system.show.metrics.storage = storage => (a,x) => {

  return [
    a.hr,
    a.p( 'Storage' ),
    app.charts.storage( storage ),
  ]

}
