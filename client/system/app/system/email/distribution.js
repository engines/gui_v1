app.system.email.distribution = controller => (a,x) => [

  controller.nest({
    routes: {
      '/?': app.system.email.distribution.show,
      '/add': app.system.email.distribution.add,
      '/remove': app.system.email.distribution.remove,
      '/edit': app.system.email.distribution.edit,
      '/delete': app.system.email.distribution.delete,
    }
  })

]

// app.system.email.show.

// ########################################################################
// # Email
// ########################################################################
//
// def show_email
//   @system_api.get 'system/uadmin/email'
// end
//
// ########################################################################
// # Email > default domain
// ########################################################################
//
// def create_email_default_domain( default_domain )
//   @system_api.post 'system/uadmin/email/default_domain', default_domain: default_domain
// end
//
// def update_email_default_domain( default_domain )
//   @system_api.put 'system/uadmin/email/default_domain', default_domain: default_domain
// end
//
// ########################################################################
// # Email > domains
// ########################################################################
//
// def create_email_domain( domain )
//   @system_api.post 'system/uadmin/email/domains/', domain: domain
// end
//
// def delete_email_domain( name )
//   @system_api.delete 'system/uadmin/email/domains/', name: name
// end
//
// ########################################################################
// # Email > email addresses
// ########################################################################
//
// def index_email_email_addresses
//   @system_api.get 'system/uadmin/email/email_addresses'
// end
//
// ########################################################################
// # Email > distribution groups
// ########################################################################
//
// def index_email_distribution_groups
//   @system_api.get 'system/uadmin/email/distribution_groups'
// end
//
// def show_email_distribution_group( name )
//   @system_api.get 'system/uadmin/email/distribution_groups/', name: name
// end
//
// def new_email_distribution_group
//   @system_api.get 'system/uadmin/email/distribution_groups/new'
// end
//
// def create_email_distribution_group( distribution_group )
//   @system_api.post 'system/uadmin/email/distribution_groups/', distribution_group: distribution_group
// end
//
// def edit_email_distribution_group( name )
//   @system_api.get 'system/uadmin/email/distribution_groups/edit', name: name
// end
//
// def update_email_distribution_group( name, distribution_group )
//   @system_api.put 'system/uadmin/email/distribution_groups/', name: name, distribution_group: distribution_group
// end
//
// def delete_email_distribution_group( name )
//   @system_api.delete 'system/uadmin/email/distribution_groups/', name: name
// end
//
// ########################################################################
// # Email > distribution groups > email addresses
// ########################################################################
//
// def new_email_distribution_group_email_address( distribution_group_name )
//   @system_api.get 'system/uadmin/email/distribution_groups/email_addresses/new', distribution_group_name: distribution_group_name
// end
//
// def create_email_distribution_group_email_address( distribution_group_name, email_address )
//   @system_api.post 'system/uadmin/email/distribution_groups/email_addresses/', distribution_group_name: distribution_group_name, email_address: email_address
// end
//
// def delete_email_distribution_group_email_address( distribution_group_name, address )
//   @system_api.delete 'system/uadmin/email/distribution_groups/email_addresses/', distribution_group_name: distribution_group_name, address: address
// end
