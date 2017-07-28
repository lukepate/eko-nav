requirejs.config({
    baseUrl: './',
    paths: {
        app: '../app',
        text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
    }
});
// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['js/main']);
