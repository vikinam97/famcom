const router = require("express")().router(),
    upload  = require('multer')(),
    file = require("fs");

router.post("/v1/upload", upload.single('avatar'), (req, res, next) => {
    file.open(req.query.name, 'w', function (err, file) {
        try {
            if (err) throw err;
            res.json({
                error: false,
                msg: "saved"
            })
        } catch (error) {
            res.json({
                error: true,
                msg: error
            })
        }
      });
})