ax.style( {

  '.placeholder, .form-control::placeholder, .CodeMirror-placeholder, .custom-select option[value=""]': {
    color: 'gray !important',
    fontStyle: 'italic',
  },

  'ax-appkit-form-control .error': {
    color: 'red',
    marginTop: '0.5rem',
  },
  'ax-appkit-form-nest-item': {
    padding: '0.5rem',
  },
  'ax-appkit-form-nest': {
  },

  'ax-appkit-form-nest-item:hover': {
    boxShadow: 'inset 0px 0px 2px #007bff',
  },
  'ax-appkit-form-nest-item[draggable]': {
    boxShadow: 'inset 0px 0px 2px #ffc107',
    cursor: 'grab',
  },
  'ax-appkit-form-nest-item[draggable]:active': {
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
