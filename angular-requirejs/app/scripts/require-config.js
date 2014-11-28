requirejs.config({
    baseUrl: 'scripts/',
    paths: {
        'angular-ui-tinymce':   '../libs/angular-ui-tinymce/src/tinymce',
        'tinymce':              '../libs/tinymce/tinymce.min',
        'modern-tinymce-theme': '../libs/tinymce/themes/modern/theme.min'
    },
    shim: {
        'modern-tinymce-theme': ['tinymce'],
        'angular-ui-tinymce':   ['tinymce', 'modern-tinymce-theme']
    }
});
