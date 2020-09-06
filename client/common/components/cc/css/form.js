ax.style( {

  '.placeholder, .form-control::placeholder, .CodeMirror-placeholder, .custom-select option[value=""]': {
    color: 'gray !important',
    fontStyle: 'italic',
  },

  'ax-appkit-form-control .error': {
    color: 'red',
    marginTop: '0.5rem',
  },

  'ul|ax-appkit-form-nest-items': {
      'padding': '0px',
      'list-style-type': 'none',
  },
  'ul|ax-appkit-form-nest-items li|ax-appkit-form-nest-item': {
      'border-left': '1px dotted black',
      'position': 'relative',
      'padding-bottom': '0.25rem',
  },
  'ul|ax-appkit-form-nest-items li|ax-appkit-form-nest-item:before': {
      'content': '""',
      'width': '4px',
      'position': 'absolute',
      'border-bottom': '1px dotted black',
      'top': '0.5rem',
  },
  'ul|ax-appkit-form-nest-items li|ax-appkit-form-nest-item:last-child:after': {
      'content': '""',
      'width': '4px',
      'position': 'absolute',
      'border-bottom': '1px dotted black',
      'margin-top': '0.2rem',
  },
  'ax-appkit-form-nest-many-footer': {
     'border-left': 'none',
  },
  'ax-appkit-form-nest-many-footer:before': {
     'border-left': '1px dotted black',
     'height': '0.5rem',
     'margin-top': 'calc(-0.5rem + 1px)',
  },
  'li|ax-appkit-form-nest-item > *': {
    'display': 'block',
    'margin': '0 5px',
  },

  '|ax-appkit-form-nest-item[draggable]': {
    boxShadow: '0px 0px 2px #ffc107',
    cursor: 'grab',
  },
  '|ax-appkit-form-nest-item[draggable]:active': {
    cursor: 'grabbing',
  },

  'option[disabled]': {
    color: 'lightgray',
  },

  'ax-appkit-form-multiselect-selected': {
    border: '1px solid #ced4da',
    borderTop: 'none',
    padding: '0.375rem 0 0.375rem 0.75rem',
    'ax-appkit-form-multiselect-selected-item-remove': {
      color: 'lightgray'
    },
    'ax-appkit-form-multiselect-selected-item-remove:hover': {
      color: '#333'
    },
  },


} )
