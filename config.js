System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: "typescript",
    typescriptOptions: {
        "emitDecoratorMetadata": true
    },
    packages: {
        "lessons": {
            defaultExtension: 'ts',
            format: 'es6'
        }
    }
});
