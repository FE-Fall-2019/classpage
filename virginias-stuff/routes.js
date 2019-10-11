const router = require("express").Router()
const Name = require("../db").Ntudent;

router.get("/name", async (req,res) => {
    let name = await Name.findByPk();

    res.render("Hello", { name });
});

module.exports = router;