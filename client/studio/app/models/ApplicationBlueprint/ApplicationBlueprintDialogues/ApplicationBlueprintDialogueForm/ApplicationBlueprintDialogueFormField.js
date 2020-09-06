class ApplicationBlueprintDialogueFormField {

  constructor(object) {
    this.type = 'field'
    this.assign(object || {})
  }

  assign(object) {
    this.object = {}
    if (object.key) this.object.key = object.key
    if (object.control) this.object.control = object.control
    if (object.label) this.object.label = object.label
    if (object.horizontal) this.object.horizontal = !!object.horizontal
    if (object.help) this.object.help = object.help
    if (object.hint) this.object.hint = object.hint
    if (object.placeholder) this.object.placeholder = object.placeholder
    if (object.selections) this.object.selections = object.selections
    if (object.collection) this.object.collection = !!object.collection
    if (object.singular) this.object.singular = object.singular
    if (object.confined) this.object.confined = !!object.confined
    if (object.stationary) this.object.stationary = !!object.stationary
    if (object.value) this.object.value = object.value
    this.dependent = new ApplicationBlueprintDialogueFormFieldDependent(object.dependent || [])
    this.components = new ApplicationBlueprintDialogueFormFieldComponents(object.components || [])
    this.selections = new ApplicationBlueprintDialogueFormFieldSelections(object.selections || [])
    this.datalist = new ApplicationBlueprintDialogueFormFieldDatalist(object.datalist || [])
    this.validation = new ApplicationBlueprintDialogueFormFieldValidation(object.validation || {})
  }

  get formObject() {
    return {
      ...this.object,
      dependent: this.dependent.formObject,
      validation: this.validation.formObject,
      datalist: this.datalist.formObject,
      components: this.components.formObject,
      selections: this.selections.formObject,
    }
  }

  output() {
    return {
      ...this.object,
      dependent: this.dependent.output(),
      validation: this.validation.output(),
      datalist: this.datalist.output(),
      components: this.components.output(),
      selections: this.selections.output(),
    }
  }

}
