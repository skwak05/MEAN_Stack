let express = require("express");

let router = express.Router();

let contactController = require("../controllers/contact");

/* GET contact list page - READ */

router.get("/", contactController.displayContactList);

// GET the Add page for the Contact-List

router.get("/add", contactController.displayAddPage);

// POST - process the Add page for the Contact-List

router.post("/add", contactController.processAddPage);

/* GET the Edit Page */

router.get("/edit/:id", contactController.displayEditPage);

/* POST - process the information from Edit page */

router.post("/edit/:id", contactController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', contactController.performDelete);

module.exports = router;
