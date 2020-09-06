class ApplicationBlueprintDialogueReportField {

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
    if (object.parse) this.object.parse = object.parse
    if (object.boolean) this.object.boolean = object.boolean
    if (object.code) this.object.code = object.code
    this.dependent = new ApplicationBlueprintDialogueFormFieldDependent(object.dependent || [])
    this.components = new ApplicationBlueprintDialogueReportFieldComponents(object.components || [])
    this.selections = new ApplicationBlueprintDialogueFormFieldSelections(object.selections || [])
    this.validation = new ApplicationBlueprintDialogueFormFieldValidation(object.validation || {})
  }

  get formObject() {
    return {
      ...this.object,
      dependent: this.dependent.formObject,
      validation: this.validation.formObject,
      components: this.components.formObject,
      selections: this.selections.formObject,
    }
  }

  output() {
    return {
      ...this.object,
      dependent: this.dependent.output(),
      validation: this.validation.output(),
      components: this.components.output(),
      selections: this.selections.output(),
    }
  }

}
