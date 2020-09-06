class ApplicationBlueprintDialogueFormFieldValidation {

  constructor(object) {
    this.assign(object)
  }

  assign(object) {
    this.object = {
      required: object.required ? true : undefined,
      minlength: object.minlength ? Number(object.minlength) : undefined,
      maxlength: object.maxlength ? Number(object.maxlength) : undefined,
      step: object.step ? Number(object.step) : undefined,
      min: object.min ? Number(object.min) : undefined,
      max: object.max ? Number(object.max) : undefined,
      pattern: object.pattern,
      message: object.message,
    }
  }


  get formObject() {
    return this.object
  }

  output() {
    return this.object
  }

}
