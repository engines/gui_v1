app.system.orphans.index = controller => (a,x) => [

  app.close( controller ),

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

     const orphanGroups = groupBy(result.children.map(leaves).flat(), 'parent_engine')

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

     let parents = Object.keys(orphanGroups)

     el.$nodes = parents.length ?
     parents.map((parent) => a.div([
       a.hr,
       a.h5(parent),
       orphanGroups[parent].map((orphan) => orphanItem(orphan))
     ])) :
     a.i('None');

   }
 }),

]
