const service = require("./user.service");

module.exports = {
    create: (req, res, next) => {
        return service.create(req.body)
            .then(response => res.json({
                error: false,
                msg: response
            }))
            .catch(error => res.json({
                error: true,
                msg: error
            }))
    },

    info: (req, res, next) => {
        return service.info(req.params.id)
            .then(response => res.json({
                error: false,
                msg: response
            }))
            .catch(error => res.json({
                error: true,
                msg: error
            }))
    }
}

