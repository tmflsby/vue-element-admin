const esLocale = {
  route: {
    'Dashboard': 'Panel de control',
    'Documentation': 'Documentación',
    'Guide': 'Guía',
    'Permission': 'Permisos',
    'Role Permission': 'Permisos de rol',
    'Page Permission': 'Permisos de la página',
    'Directive Permission': 'Permisos de la directiva',
    'Icons': 'Iconos',
    'Components': 'Componentes',
    'Tinymce': 'Tinymce',
    'Markdown': 'Markdown',
    'JSON Editor': 'Editor JSON',
    'Dnd List': 'Lista Dnd',
    'SplitPane': 'Panel dividido',
    'Avatar Upload': 'Subir avatar',
    'Dropzone': 'Subir ficheros',
    'Sticky': 'Sticky',
    'Count To': 'Count To',
    'ComponentMixin': 'Mixin',
    'Back To Top': 'Ir arriba',
    'Drag Dialog': 'Drag Dialog',
    'Drag Select': 'Drag Select',
    'Drag Kanban': 'Drag Kanban',
    'Charts': 'Gráficos',
    'Keyboard Chart': 'Keyboard Chart',
    'Line Chart': 'Gráfico de líneas',
    'Mix Chart': 'Mix Chart',
    'Example': 'Ejemplo',
    'Nested Routes': 'Rutas anidadass',
    'Menu 1': 'Menu 1',
    'Menu 1-1': 'Menu 1-1',
    'Menu 1-2': 'Menu 1-2',
    'Menu 1-2-1': 'Menu 1-2-1',
    'Menu 1-2-2': 'Menu 1-2-2',
    'Menu 1-3': 'Menu 1-3',
    'Menu 2': 'Menu 2',
    'Table': 'Tabla',
    'Dynamic Table': 'Tabla dinámica',
    'Drag Table': 'Arrastrar tabla',
    'Inline Edit Table': 'Editor',
    'Complex Table': 'Complex Table',
    'Tab': 'Pestaña',
    'Form': 'Formulario',
    'Create Article': 'Crear artículo',
    'Edit Article': 'Editar artículo',
    'Article List': 'Listado de artículos',
    'Error Pages': 'Páginas de error',
    'Page401': '401',
    'Page404': '404',
    'Error Log': 'Registro de errores',
    'Excel': 'Excel',
    'Export Excel': 'Exportar a Excel',
    'Export Selected Excel': 'Export seleccionado',
    'Merge Header': 'Merge Header',
    'Upload Excel': 'Subir Excel',
    'Zip': 'Zip',
    'PDF': 'PDF',
    'Export Zip': 'Exportar a Zip',
    'Theme': 'Tema',
    'Clipboard': 'Clipboard',
    'I18n': 'I18n',
    'External Link': 'Enlace externo',
    'Profile': 'Profile'
  },
  navbar: {
    'LogOut': 'Salir',
    'Dashboard': 'Panel de control',
    'Github': 'Github',
    'Theme': 'Tema',
    'Size': 'Tamaño global',
    'Profile': 'Profile',
    'Docs': 'Documentación',
  },
  login: {
    'title': 'Formulario de acceso',
    'logIn': 'Acceso',
    'username': 'Usuario',
    'password': 'Contraseña',
    'any': 'nada',
    'thirdparty': 'Conectar con',
    'thirdpartyTips': 'No se puede simular en local, así que combine su propia simulación de negocios. ! !'
  },
  documentation: {
    'documentation': 'Documentación',
    'github': 'Repositorio Github'
  },
  permission: {
    'addRole': 'Nuevo rol',
    'editPermission': 'Permiso de edición',
    'roles': 'Tus permisos',
    'switchRoles': 'Cambiar permisos',
    'tips': 'In some cases it is not suitable to use v-permission, such as element Tab component or el-table-column and other asynchronous rendering dom cases which can only be achieved by manually setting the v-if.',
    'delete': 'Borrar',
    'confirm': 'Confirmar',
    'cancel': 'Cancelar'
  },
  guide: {
    'description': 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    'button': 'Ver guía'
  },
  components: {
    'documentation': 'Documentación',
    'tinymceTips': 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    'dropzoneTips': 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/DropZone.',
    'stickyTips': 'when the page is scrolled to the preset position will be sticky on the top.',
    'backToTopTips1': 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    'backToTopTips2': 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    'imageUploadTips': 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    'dynamicTips1': 'Fixed header, sorted by header order',
    'dynamicTips2': 'Not fixed header, sorted by click order',
    'dragTips1': 'Orden por defecto',
    'dragTips2': 'The after dragging order',
    'title': 'Título',
    'importance': 'Importancia',
    'type': 'Tipo',
    'remark': 'Remark',
    'search': 'Buscar',
    'add': 'Añadir',
    'export': 'Exportar',
    'reviewer': 'reviewer',
    'id': 'ID',
    'date': 'Fecha',
    'author': 'Autor',
    'readings': 'Lector',
    'status': 'Estado',
    'actions': 'Acciones',
    'edit': 'Editar',
    'publish': 'Publicar',
    'draft': 'Draft',
    'delete': 'Eliminar',
    'cancel': 'Cancelar',
    'confirm': 'Confirmar',
    'drag': 'Arrastrar'
  },
  example: {
    'warning': 'Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details'
  },
  errorLog: {
    'tips': 'Please click the bug icon in the upper right corner',
    'description': 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    'documentation': 'Documento de introducción'
  },
  excel: {
    'export': 'Exportar',
    'selectedExport': 'Exportar seleccionados',
    'placeholder': 'Por favor escribe un nombre de fichero'
  },
  zip: {
    'export': 'Exportar',
    'placeholder': 'Por favor escribe un nombre de fichero'
  },
  pdf: {
    'tips': 'Here we use window.print() to implement the feature of downloading pdf.',
    'clickDownload': 'Pulse para descargar PDF'
  },
  theme: {
    'change': 'Cambiar tema',
    'documentation': 'Documentación del tema',
    'tips': 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    'refresh': 'Actualizar',
    'close': 'Cerrar',
    'closeOthers': 'Cerrar otros',
    'closeAll': 'Cerrar todos'
  },
  settings: {
    'title': 'Page style setting',
    'theme': 'Theme Color',
    'tagsView': 'Open Tags-View',
    'fixedHeader': 'Fixed Header',
    'sidebarLogo': 'Sidebar Logo'
  }
};

export default esLocale;
