app.system.orphans.index = controller => (a,x) => [

  app.close( controller ),

 //  - (true) delete('/v0/service_manager/orphan_service/:publisher_namespace/:type_path:/:parent_engine/:service_handle')
 //
 // remove underlying data and delete orphan.
 // - (octet-stream) get('/v0/service_manager/orphan_service/export/:publisher_namespace/:type_path:/:parent_engine/:service_handle')
 // - (Array) get('/v0/service_manager/orphan_services/')
 //
 // Orphan Service Hashes.
 // - (Hash) get('/v0/service_manager/orphan_service/:publisher_namespace/:type_path:/:parent_engine/:service_handle')
 //
 // Orphan Service Hash.
 // - (Array) get('/v0/service_manager/orphan_services/:publisher_namespace/:type_path:')
 //
 // Orphan Service Hashes.
 // - (Array) get('/v0/service_manager/orphan_lost_services')

 // def delete_orphan_data( orphan_path )
 //   @system_api.delete "service_manager/orphan_service/#{orphan_path}"
 // end

// :publisher_namespace/:type_path:/:parent_engine/:service_handle


 app.fetch({
   url: '/-/-/service_manager/orphan_services/',
   placeholder: app.hourglass('Loading orphans'),
   success: (result, el) => {

     const leaves = (branch) =>
     branch.children.length ?
     branch.children.map(leaves).flat() :
     branch.content

     const groupBy = (items, key) =>
     items.reduce((result, item) => ({
       ...result,
       [item[key]]: [
         ...(result[item[key]] || []),
         item,
       ],
     }), {});

     const orphanGroups = groupBy(leaves(result), 'parent_engine')

     const orphanItem = (orphan) => a['div.ml-2']([
       app.btn(
         app.icon('fa fa-caret-right', `${orphan.service_container_name}:${orphan.service_handle}`),
         () => controller.open('orphan', {
           parent: orphan.parent_engine,
           service: orphan.service_container_name,
           handle: orphan.service_handle,
           publisher: orphan.publisher_namespace,
           type: orphan.type_path,
         })
       )
     ])

     el.$nodes = Object.keys(orphanGroups).map((parent) => a.div(app.collapse({
       label: parent,
       body: orphanGroups[parent].map((orphan) => orphanItem(orphan))
     })));

   }
 }),





]
