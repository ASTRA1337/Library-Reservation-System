const router = require("express").Router();

router.post("/user/authenticate", (req, res) => {
    console.log(req.body)
    res.json({
        "authenticated": true,
    })
});
module.exports = router;