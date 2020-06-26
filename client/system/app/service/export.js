app.service.export = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h3( `Export` ),
    app.close( controller ),
    app.link( {
      label: app.icon( 'fa fa-download', 'Download' ),
      href: `/-/download/service/${ name }`,
      target: '_blank',
      class: 'btn app-btn',
    } ),
    // app.link( { label: 'TEST DOWNLOAD', href: '/-/download/test', target: '_blank' } ),

  ]


}
