"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReviewController = exports.updateReviewUseCase = exports.getInactiveReviewsController = exports.getInactiveReviewsUseCase = exports.deleteReviewController = exports.deleteReviewUseCase = exports.getReviewByUserIdController = exports.getReviewByUserIdUseCase = exports.listAllReviewsController = exports.listAllReviewsUseCase = exports.addReviewController = exports.addReviewUseCase = exports.pgsqlReviewRepository = void 0;
const pgsqlReviewRepository_1 = require("./pgsqlReviewRepository");
const addReviewUseCase_1 = require("../application/addReviewUseCase");
const addReviewController_1 = require("./controller/addReviewController");
const listAllReviewsController_1 = require("./controller/listAllReviewsController");
const listAllReviewsUseCase_1 = require("../application/listAllReviewsUseCase");
const getReviewByUserIdController_1 = require("./controller/getReviewByUserIdController");
const getReviewByUserIdUseCase_1 = require("../application/getReviewByUserIdUseCase");
const deleteReviewUseCase_1 = require("../application/deleteReviewUseCase");
const deleteReviewController_1 = require("./controller/deleteReviewController");
const getInactiveReviewsUseCase_1 = require("../application/getInactiveReviewsUseCase");
const getInactiveReviewsController_1 = require("./controller/getInactiveReviewsController");
const updateReviewUseCase_1 = require("../application/updateReviewUseCase");
const updateReviewController_1 = require("./controller/updateReviewController");
exports.pgsqlReviewRepository = new pgsqlReviewRepository_1.PgsqlReviewRepository();
exports.addReviewUseCase = new addReviewUseCase_1.AddReviewUseCase(exports.pgsqlReviewRepository);
exports.addReviewController = new addReviewController_1.AddReviewController(exports.addReviewUseCase);
exports.listAllReviewsUseCase = new listAllReviewsUseCase_1.ListAllReviewsUseCase(exports.pgsqlReviewRepository);
exports.listAllReviewsController = new listAllReviewsController_1.ListAllReviewsController(exports.listAllReviewsUseCase);
exports.getReviewByUserIdUseCase = new getReviewByUserIdUseCase_1.GetReviewByUserIdUseCase(exports.pgsqlReviewRepository);
exports.getReviewByUserIdController = new getReviewByUserIdController_1.GetReviewByUserIdController(exports.getReviewByUserIdUseCase);
exports.deleteReviewUseCase = new deleteReviewUseCase_1.DeleteReviewUseCase(exports.pgsqlReviewRepository);
exports.deleteReviewController = new deleteReviewController_1.DeleteReviewController(exports.deleteReviewUseCase);
exports.getInactiveReviewsUseCase = new getInactiveReviewsUseCase_1.GetInactiveReviewsUseCase(exports.pgsqlReviewRepository);
exports.getInactiveReviewsController = new getInactiveReviewsController_1.GetInactiveReviewsController(exports.getInactiveReviewsUseCase);
exports.updateReviewUseCase = new updateReviewUseCase_1.UpdateReviewUseCase(exports.pgsqlReviewRepository);
exports.updateReviewController = new updateReviewController_1.UpdateReviewController(exports.updateReviewUseCase);
