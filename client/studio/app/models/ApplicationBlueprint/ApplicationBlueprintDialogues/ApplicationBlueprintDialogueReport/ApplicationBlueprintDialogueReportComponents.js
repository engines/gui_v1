class ApplicationBlueprintDialogueReportComponents {

  constructor(collection) {
    this.assign(collection || [])
  }

  assign(collection) {
    if (ax.is.object(collection)) collection = Object.values(collection)
    this.collection = collection.map((item) => {
      if (item.type == 'field') {
        return new ApplicationBlueprintDialogueReportField(item.field || {})
      } else if (item.type == 'row') {
        return new ApplicationBlueprintDialogueReportRow(item.row || {})
      } else if (item.type == 'fieldset') {
        return new ApplicationBlueprintDialogueReportFieldset(item.fieldset || {})
      } else if (item.type == 'template') {
        return new ApplicationBlueprintDialogueReportTemplate(item.template || {})
      } else if (item.type == 'navigation') {
        return new ApplicationBlueprintDialogueReportNavigation(item.navigation || {})
      }
    })
  }

  get formObject() {
    return this.collection.map((item) => ({
      type: item.type,
      [item.type]: item.formObject
    }))
  }

  output() {
    return this.collection.map((item) => ({
      type: item.type,
      [item.type]: item.output()
    }))
  }

}
