const router = require("express").Router(),
    controller = require("./user.controller");
    userVersionV1 = "/v1/user";

router.post(userVersionV1, 
    controller.create);

router.get(userVersionV1  + "/:id",
    controller.info);

module.exports = router;