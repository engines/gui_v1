app.system.show.metrics.cpu = cpu => (a,x) => {

  return [
    a.hr,
    a.p( 'CPU' ),
    app.charts.cpu( cpu ),
  ]

}
