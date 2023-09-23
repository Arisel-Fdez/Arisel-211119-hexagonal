"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBookController = exports.addBookUseCase = exports.pgsqlBookRepository = void 0;
const addBookUseCase_1 = require("../application/addBookUseCase");
const pgsqlBookRepository_1 = require("./pgsqlBookRepository");
const addBookController_1 = require("./controller/addBookController");
exports.pgsqlBookRepository = new pgsqlBookRepository_1.PgsqlBookRepository();
exports.addBookUseCase = new addBookUseCase_1.AddBookUseCase(exports.pgsqlBookRepository);
exports.addBookController = new addBookController_1.AddBookController(exports.addBookUseCase);
