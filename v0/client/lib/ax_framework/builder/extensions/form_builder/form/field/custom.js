AxBuilderExtensionsFormBuilder.prototype.custom = function(
  fieldName,
  fieldCustomType,
  options ) {

  var customFieldBuilder = this.customFieldBuilder();

  if ( customFieldBuilder[fieldCustomType] ) {
    return customFieldBuilder[fieldCustomType]( fieldName, options );
  } else {
    console.error( "Ax error: Custom field type "+ fieldCustomType + " not defined." )
    return {};
  };

};