"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/enlarge", ctrl.output.enlarge);
router.post("/login", ctrl.process.login);
router.get("/video1",ctrl.output.video1);
router.get("/video2",ctrl.output.video2);
router.get("/enlarge",ctrl.output.enlarge);
router.get("/warning_log",ctrl.output.warning_log);


module.exports = router;