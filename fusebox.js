const fsbx    = require('fuse-box')
    , FuseBox = fsbx.FuseBox
    , Stylus  = require('stylus')

let dev = FuseBox.init({
  homeDir: "src/"
, outFile: "./src/bundle.js"
, sourceMap: {
    bundleReference:  "bundle.js.map"
  , outFile:          "./src/bundle.js.map"
  }
, plugins:[
    // js transforms
    fsbx.BabelPlugin({
      config: {
        sourceMaps: true
      , presets: ["latest"]
      }
    })
    // css transforms
  , [
      fsbx.StylusPlugin()
    , fsbx.CSSPlugin()
    ]
  ]
})

// dev.bundle(">index.js")
dev.devServer("> index.js")