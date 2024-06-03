/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/nestar-batch/src/batch.controller.ts":
/*!***************************************************!*\
  !*** ./apps/nestar-batch/src/batch.controller.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const batch_service_1 = __webpack_require__(/*! ./batch.service */ "./apps/nestar-batch/src/batch.service.ts");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const config_1 = __webpack_require__(/*! ./lib/config */ "./apps/nestar-batch/src/lib/config.ts");
let BatchController = class BatchController {
    constructor(batchService) {
        this.batchService = batchService;
        this.logger = new common_1.Logger('BatchController');
    }
    handleTimeout() {
        this.logger.debug('BATCH SERVER READY!');
    }
    async batchRollback() {
        try {
            this.logger['context'] = config_1.BATCH_ROLLBACK;
            this.logger.debug('EXECUTED!');
            await this.batchService.batchRollback();
        }
        catch (err) {
            this.logger.error(err);
        }
    }
    async batchProperties() {
        try {
            this.logger['context'] = config_1.BATCH_TOP_PROPERTIES;
            this.logger.debug('EXECUTED!');
            await this.batchService.batchProperties();
        }
        catch (err) {
            this.logger.error(err);
        }
    }
    async batchAgents() {
        try {
            this.logger['context'] = config_1.BATCH_TOP_AGENTS;
            this.logger.debug('EXECUTED!');
            await this.batchService.batchAgents();
        }
        catch (err) {
            this.logger.error(err);
        }
    }
    getHello() {
        return this.batchService.getHello();
    }
};
exports.BatchController = BatchController;
__decorate([
    (0, schedule_1.Timeout)(1000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BatchController.prototype, "handleTimeout", null);
__decorate([
    (0, schedule_1.Cron)('00 * * * * * ', { name: config_1.BATCH_ROLLBACK }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "batchRollback", null);
__decorate([
    (0, schedule_1.Cron)('20 * * * * * ', { name: config_1.BATCH_TOP_PROPERTIES }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "batchProperties", null);
__decorate([
    (0, schedule_1.Cron)('40 * * * * * ', { name: config_1.BATCH_TOP_AGENTS }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BatchController.prototype, "batchAgents", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BatchController.prototype, "getHello", null);
exports.BatchController = BatchController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof batch_service_1.BatchService !== "undefined" && batch_service_1.BatchService) === "function" ? _a : Object])
], BatchController);


/***/ }),

/***/ "./apps/nestar-batch/src/batch.module.ts":
/*!***********************************************!*\
  !*** ./apps/nestar-batch/src/batch.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const batch_controller_1 = __webpack_require__(/*! ./batch.controller */ "./apps/nestar-batch/src/batch.controller.ts");
const batch_service_1 = __webpack_require__(/*! ./batch.service */ "./apps/nestar-batch/src/batch.service.ts");
const dist_1 = __webpack_require__(/*! @nestjs/config/dist */ "@nestjs/config/dist");
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./apps/nestar-batch/src/database/database.module.ts");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
let BatchModule = class BatchModule {
};
exports.BatchModule = BatchModule;
exports.BatchModule = BatchModule = __decorate([
    (0, common_1.Module)({
        imports: [dist_1.ConfigModule.forRoot(), database_module_1.DatabaseModule, schedule_1.ScheduleModule.forRoot()],
        controllers: [batch_controller_1.BatchController],
        providers: [batch_service_1.BatchService],
    })
], BatchModule);


/***/ }),

/***/ "./apps/nestar-batch/src/batch.service.ts":
/*!************************************************!*\
  !*** ./apps/nestar-batch/src/batch.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BatchService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let BatchService = class BatchService {
    getHello() {
        return 'Hello World!';
    }
    async batchRollback() {
        console.log("batchRollback");
    }
    async batchProperties() {
        console.log("batchProperties");
    }
    async batchAgents() {
        console.log("batchAgents");
    }
};
exports.BatchService = BatchService;
exports.BatchService = BatchService = __decorate([
    (0, common_1.Injectable)()
], BatchService);


/***/ }),

/***/ "./apps/nestar-batch/src/database/database.module.ts":
/*!***********************************************************!*\
  !*** ./apps/nestar-batch/src/database/database.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let DatabaseModule = class DatabaseModule {
    constructor(connection) {
        this.connection = connection;
        if (connection.readyState === 1) {
            console.log(`MongoDB is connected into ${process.env.NODE_ENV === 'production' ? 'production' : 'development'} db`);
        }
        else {
            console.log("DB is not connected!");
        }
    }
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: () => ({
                    uri: process.env.NODE_ENV === "production" ? process.env.MONGO_PROD : process.env.MONGO_DEV,
                }),
            }),
        ],
        exports: [mongoose_1.MongooseModule],
    }),
    __param(0, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _a : Object])
], DatabaseModule);


/***/ }),

/***/ "./apps/nestar-batch/src/lib/config.ts":
/*!*********************************************!*\
  !*** ./apps/nestar-batch/src/lib/config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BATCH_TOP_AGENTS = exports.BATCH_TOP_PROPERTIES = exports.BATCH_ROLLBACK = void 0;
exports.BATCH_ROLLBACK = 'BATCH_ROLLBACK';
exports.BATCH_TOP_PROPERTIES = 'BATCH_TOP_PROPERTIES';
exports.BATCH_TOP_AGENTS = 'BATCH_TOP_AGENTS';


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config/dist":
/*!**************************************!*\
  !*** external "@nestjs/config/dist" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@nestjs/config/dist");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***************************************!*\
  !*** ./apps/nestar-batch/src/main.ts ***!
  \***************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const batch_module_1 = __webpack_require__(/*! ./batch.module */ "./apps/nestar-batch/src/batch.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(batch_module_1.BatchModule);
    await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();

})();

/******/ })()
;