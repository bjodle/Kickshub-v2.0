const { Router } = require("express");//we need the express router to plug into applications
const controller = require("../controllers/controller"); //exports our controller to get our functions
const router  = Router(); ///creates a new router

router.get("/", controller.home_get);
router.get("/login", controller.login_get);
router.post("/shoe", controller.shoe_post);
router.get("/admin", controller.admin_get);

module.exports = router;