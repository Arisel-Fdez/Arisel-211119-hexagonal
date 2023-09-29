"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookDto = void 0;
const class_validator_1 = require("class-validator");
class BookDto {
    constructor(title, author, code, url, status = "INACTIVE") {
        this.title = title;
        this.author = author;
        this.code = code;
        this.url = url;
        this.status = status;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Title is required' }),
    (0, class_validator_1.IsString)({ message: 'Title should be a string' })
], BookDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Author is required' }),
    (0, class_validator_1.IsString)({ message: 'Author should be a string' })
], BookDto.prototype, "author", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Code is required' }),
    (0, class_validator_1.IsString)({ message: 'Code should be a string' })
], BookDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({}, { message: 'URL should be a valid URL' })
], BookDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['ACTIVE', 'INACTIVE'], { message: 'Status should be either ACTIVE or INACTIVE' })
], BookDto.prototype, "status", void 0);
exports.BookDto = BookDto;
