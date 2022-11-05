"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipes_controller_1 = require("../controllers/recipes.controller");
const router = (0, express_1.Router)();
router.get("/:user/your-recipes", recipes_controller_1.getRecipes);
router.post("/:user/your-recipes", recipes_controller_1.createRecipe);
router.put("/:user/your-recipes/:id", recipes_controller_1.updateRecipe);
router.delete("/:user/your-recipes/:id", recipes_controller_1.deleteRecipe);
// TODO arreglar este get
router.get("/:user/your-recipes/:id", recipes_controller_1.getRecipe);
router.get("/all-recipes", recipes_controller_1.getAllRecipes);
exports.default = router;
