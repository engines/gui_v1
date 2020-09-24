app.application.installation = controller =>  {

  const name = controller.params.name

  return (a,x) => [

    a.h3( 'Installation' ),
    app.close( controller ),

    app.http(
      `/-/-/containers/engine/${ name }/build_report`,
      ( report, el ) => el.$nodes = [
        a.pre( report ),
        app.btn(
          app.icon('fa fa-window-maximize', 'Popup'),
          () => {
            // let html = '<pre style=\'font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; font-size: 14px; line-height: 1.42857143; color: #333;"\'>' + report + '</pre>';
            let html = '<pre>' + report + '</pre>';
						let newWindow = window.open('','Engines app installation report','width=600, height=600, location=no, toolbar=0, scrollbars=1');
						newWindow.document.title = name + " installation report"
						$(newWindow.document.body).html( html );
          },
          {
            title: 'Open installation report in new window'
          }
        ),
      ],
      {
        placeholder: app.hourglass( 'Loading installation' ),
      }
    ),

  ]

}
