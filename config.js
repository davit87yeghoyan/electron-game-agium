module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "War and Peace - MMO",
                directories: {
                    buildResources: "resources",
                },
                win: {
                    icon: "resources/appx/storeLogo.png",
                    target: ["nsis", "appx"],
                },
                appx: {
                    identityName: "32433Agium.535836192F67B",
                    publisher: "CN=D56F5D3D-559A-4B74-A2A9-C442F3876383",
                    publisherDisplayName: "Agium",
                    backgroundColor: "#a0beeb"
                },
            },
        },
    },
};