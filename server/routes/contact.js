let express = require("express");

let router = express.Router();

let passport = require('passport');

let contactController = require("../controllers/contact");

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated() || (req.user.username != "admin")) {
        return res.redirect('/login');
    }
    next();
}

/* GET contact list page - READ */

router.get("/", requireAuth, contactController.displayContactList);

// GET the Add page for the Contact-List

router.get("/add", requireAuth, contactController.displayAddPage);

// POST - process the Add page for the Contact-List

router.post("/add", requireAuth, contactController.processAddPage);

/* GET the Edit Page */

router.get("/edit/:id", requireAuth, contactController.displayEditPage);

/* POST - process the information from Edit page */

router.post("/edit/:id", requireAuth, contactController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;
