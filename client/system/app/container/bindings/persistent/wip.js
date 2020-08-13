// let name = controller.params.name
//
// let bindingIdentifier = `${
//   controller.params.publisher
// }/${
//   controller.params.type
// }/${
//   controller.params.handle
// }`
//
// let path = `/-/-/containers/${
//   type == 'application' ? 'engine' : 'service'
// }/${ name }/services/persistent/${ bindingIdentifier }`;
//
// let definitionPath = `/-/-/service_manager/service_definitions/${
//   controller.params.publisher
// }/${
//   controller.params.type
// }`;
// // let consumer_params = results[1].consumer_params
//
// // `service_manager/service_definitions/#{args[:publisher_namespace]}/#{args[:type_path]}`
//
//
// // `/-/-/containers/service/${ name }/service_definition`
//
// return a['app-container-binding']([
//   controller.params,
//   app.btn(
//     app.icon( 'fa fa-edit', 'Edit' ),
//     () => controller.open( 'edit' )
//   ),
//   a.hr,
//   app.http(path, (binding, el) => {
//     el.$nodes = [
//       binding,
//       app.report( {
//         object: binding,
//         report: (r) => [
//           r.field( {
//             key: 'variables',
//             as: 'one',
//             label: false,
//             report: (rr) => Object.keys(rr.object).map(
//               (key) => rr.field({
//                 key: key,
//                 horizontal: true,
//               })
//             ),
//           } )
//         ]
//       } ),
//     ]
//   }),
//
//   a.p( 'Subservices' ),
//   app.http(
//     `/-/-/containers/service/${ name }/sub_services`,
//     ( subservices, el ) => el.$nodes = x.out( subservices )
//   ),
//
//   app.link( {
//     label: app.icon( 'fa fa-download', 'Export' ),
//     href: `/-/download/binding/${ name }/${ bindingIdentifier }`,
//     target: '_blank',
//     class: 'btn app-btn',
//   } ),
//   a.br,
//   x.filepond({filepond: {
//     // onerror: (e) => alert(`aaa ${JSON.stringify(e)}`),
//     server: {
//       url: `/-/upload/service/${ name }/${ bindingIdentifier }`,
//       process: {
//         headers: {
//           'Content-Type': 'application/octet-stream'
//         }
//       }
//     }
//   }}),
// ])
//
//
// // const name = controller.params.name
// //
// // let path = `/-/-/containers/${
// //   type === 'service' ? 'service' : 'engine'
// // }/${ name }/services`
// //
// // return [
// //
// //   app.close( controller ),
// //   a.br,
// //   app.http(
// //     [
// //       `${ path }/persistent/`,
// //       `${ path }/non_persistent/`,
// //     ],
// //     ( [ persistent, nonpersistent ], el ) => {
// //
// //       let bindings = [
// //         ...persistent,
// //         ...nonpersistent
// //       ].sort( ( a, b ) => {
// //         if ( a.service_handle < b.service_handle ){
// //           return -1
// //         }
// //         if ( a.service_handle > b.service_handle ){
// //           return 1
// //         }
// //         return 0
// //       } ).sort( ( a, b ) => {
// //         if ( a.service_container_name < b.service_container_name ){
// //           return -1
// //         }
// //         if ( a.service_container_name > b.service_container_name ){
// //           return 1
// //         }
// //         return 0
// //       } )
// //
// //       el.$nodes = [
// //
// //         bindings.map( binding => a.div( app.btn (
// //           app.icon(
// //             'fa fa-caret-right',
// //             [
// //               binding.service_container_name,
// //               a.small( binding.service_handle ),
// //             ]
// //           ),
// //           () => controller.open(
// //             binding.persistent ?
// //             'persistent' :
// //             'nonpersistent',
// //             {
// //               type: binding.type_path,
// //               publisher: binding.publisher_namespace,
// //               handle: binding.service_handle,
// //             }
// //           )
// //         ) ) ),
// //
// //       ]
// //
// //     },
// //     {
// //       placeholder: app.hourglass( 'Loading service bindings' )
// //     }
// //
// //   ),
// //
// //   type === 'service' ? [
// //
// //     a.hr,
// //
// //     a.p( 'Consumers' ),
// //     app.http(
// //       `/-/-/containers/service/${ name }/consumers/`,
// //       ( consumers, el ) => el.$nodes = x.out( consumers )
// //     ),
// //
// //
// //     a.p( 'Subservices' ),
// //     app.http(
// //       `/-/-/containers/service/${ name }/sub_services`,
// //       ( subservices, el ) => el.$nodes = x.out( subservices )
// //     ),
// //
// //   ] : null,
// //
// // ]
