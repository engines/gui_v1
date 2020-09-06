class ApplicationBlueprintDialogueFormComponents {

  constructor(collection) {
    this.assign(collection || [])
  }

  assign(collection) {
    if (ax.is.object(collection)) collection = Object.values(collection)
    this.collection = collection.map((item) => {
      if (item.type == 'field') {
        return new ApplicationBlueprintDialogueFormField(item.field || {})
      } else if (item.type == 'row') {
        return new ApplicationBlueprintDialogueFormRow(item.row || {})
      } else if (item.type == 'fieldset') {
        return new ApplicationBlueprintDialogueFormFieldset(item.fieldset || {})
      } else if (item.type == 'template') {
        return new ApplicationBlueprintDialogueFormTemplate(item.template || {})
      }
    });
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
