// app.service.environment = controller => (a,x) => {
//
//   const name = controller.params.name
//
//   return [
//
//     a.h3( `Envrionment` ),
//     app.close( controller ),
//     app.http(
//       `/-/-/containers/service/${ name }`,
//       ( container, el ) => el.$nodes = app.report( {
//         object: container,
//         report: (r) => [
//           r.field( {
//             key: 'environments',
//             as: 'many',
//             label: false,
//             vertical: true,
//             report: (rr) => rr.field( {
//               key: 'value',
//               label: rr.object.name,
//             } )
//           } )
//         ]
//       } ),
//       {
//         placeholder: app.hourglass( 'Loading environment' )
//       }
//
//     ),
//
//   ]
//
//
// }
