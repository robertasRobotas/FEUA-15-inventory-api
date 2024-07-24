import express from "express";

import {
  LOGIN,
  CREATE_COMPANY,
  GET_COMPANY_BY_ID,
  DELETE_COMPANY_BY_ID,
} from "../controller/company.js";

const router = express.Router();

router.post("/company", CREATE_COMPANY);
router.post("/login", LOGIN);
router.get("/company/:id", GET_COMPANY_BY_ID);
router.delete("/company/:id", DELETE_COMPANY_BY_ID);

export default router;
