app.system.users.user.mailbox = {}

//  controller => (a,x) => [
//
//   a['div.clearfix'](
//     a['div.float-right']( [
//       app.close( controller, {query: controller.query} ),
//     ] )
//   ),
//   a.h5('Mailbox'),
//
//   app.http(
//     '/-/-/system/uadmin/users/accounts/',
//     ( account, el ) => el.$nodes = [
//       a.div( a.strong( account.email.mailbox ), { class: 'pt-2' } ),
//       app.btn(
//         app.icon( 'fa fa-edit', 'Edit' ),
//         () => controller.open( 'edit', controller.query )
//       ),
//       a['div.float-right'](
//         app.btn(
//           app.icon( 'fas fa-times-circle', 'Disable' ),
//           () => controller.open('disable', controller.query)
//         )
//       ),
//     ],
//     {
//       query: { uid: controller.params.user_uid },
//       placeholder: app.hourglass( 'Loading account' ),
//     }
//   ),
//
// ]
