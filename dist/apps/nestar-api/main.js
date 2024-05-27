/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/nestar-api/src/app.controller.ts":
/*!***********************************************!*\
  !*** ./apps/nestar-api/src/app.controller.ts ***!
  \***********************************************/
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
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/nestar-api/src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./apps/nestar-api/src/app.module.ts":
/*!*******************************************!*\
  !*** ./apps/nestar-api/src/app.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/nestar-api/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/nestar-api/src/app.service.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const apollo_1 = __webpack_require__(/*! @nestjs/apollo */ "@nestjs/apollo");
const app_resolve_1 = __webpack_require__(/*! ./app.resolve */ "./apps/nestar-api/src/app.resolve.ts");
const components_module_1 = __webpack_require__(/*! ./components/components.module */ "./apps/nestar-api/src/components/components.module.ts");
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./apps/nestar-api/src/database/database.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: true,
                uploads: false,
                autoSchemaFile: true,
                formatError: (error) => {
                    const graphQLFormatedError = {
                        code: error?.extensions.code,
                        message: error?.extensions?.exception?.response?.message || error?.extensions?.response?.message || error?.message,
                    };
                    console.log('GRAPHQL GLOBAL ERR', graphQLFormatedError);
                    return graphQLFormatedError;
                },
            }),
            components_module_1.ComponentsModule,
            database_module_1.DatabaseModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, app_resolve_1.AppResolver],
    })
], AppModule);


/***/ }),

/***/ "./apps/nestar-api/src/app.resolve.ts":
/*!********************************************!*\
  !*** ./apps/nestar-api/src/app.resolve.ts ***!
  \********************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let AppResolver = class AppResolver {
    sayHello() {
        return 'GraphQL API SERVER';
    }
};
exports.AppResolver = AppResolver;
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppResolver.prototype, "sayHello", null);
exports.AppResolver = AppResolver = __decorate([
    (0, graphql_1.Resolver)()
], AppResolver);


/***/ }),

/***/ "./apps/nestar-api/src/app.service.ts":
/*!********************************************!*\
  !*** ./apps/nestar-api/src/app.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Welcom to nestar API server';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "./apps/nestar-api/src/components/auth/auth.module.ts":
/*!************************************************************!*\
  !*** ./apps/nestar-api/src/components/auth/auth.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/nestar-api/src/components/auth/auth.service.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            jwt_1.JwtModule.register({
                secret: `${process.env.SECRET_TOKEN}`,
                signOptions: { expiresIn: '30d' },
            })
        ],
        providers: [auth_service_1.AuthService],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),

/***/ "./apps/nestar-api/src/components/auth/auth.service.ts":
/*!*************************************************************!*\
  !*** ./apps/nestar-api/src/components/auth/auth.service.ts ***!
  \*************************************************************/
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
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! ../../libs/config */ "./apps/nestar-api/src/libs/config.ts");
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async hashPassword(memberPassword) {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(memberPassword, salt);
    }
    async cpmparePasswords(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
    async createToken(member) {
        console.log('member: ', member);
        const payload = {};
        Object.keys(member['_doc'] ? member['_doc'] : member).map((ele) => {
            payload[`${ele}`] = member[`${ele}`];
        });
        delete payload.memberPassword;
        console.log('payload', payload);
        return await this.jwtService.signAsync(payload);
    }
    async verifyToken(token) {
        const member = await this.jwtService.verifyAsync(token);
        member._id = (0, config_1.shapeIntoMongoObjectId)(member._id);
        return member;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthService);


/***/ }),

/***/ "./apps/nestar-api/src/components/auth/decoratots/authMember.decorator.ts":
/*!********************************************************************************!*\
  !*** ./apps/nestar-api/src/components/auth/decoratots/authMember.decorator.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthMember = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.AuthMember = (0, common_1.createParamDecorator)((data, context) => {
    let request;
    if (context.contextType === 'graphql') {
        request = context.getArgByIndex(2).req;
        if (request.body.authMember) {
            request.body.authMember.authorization = request.headers?.authorization;
        }
    }
    else
        request = context.switchToHttp().getRequest();
    const member = request.body.authMember;
    if (member)
        return data ? member?.[data] : member;
    else
        return null;
});


/***/ }),

/***/ "./apps/nestar-api/src/components/auth/decoratots/roles.decorator.ts":
/*!***************************************************************************!*\
  !*** ./apps/nestar-api/src/components/auth/decoratots/roles.decorator.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;


/***/ }),

/***/ "./apps/nestar-api/src/components/auth/guards/auth.guard.ts":
/*!******************************************************************!*\
  !*** ./apps/nestar-api/src/components/auth/guards/auth.guard.ts ***!
  \******************************************************************/
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
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./apps/nestar-api/src/components/auth/auth.service.ts");
const common_enum_1 = __webpack_require__(/*! apps/nestar-api/src/libs/enums/common.enum */ "./apps/nestar-api/src/libs/enums/common.enum.ts");
let AuthGuard = class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    async canActivate(context) {
        console.info('--- @guard() Authentication [AuthGuard] ---');
        if (context.contextType === 'graphql') {
            const request = context.getArgByIndex(2).req;
            const bearerToken = request.headers.authorization;
            if (!bearerToken)
                throw new common_1.BadRequestException(common_enum_1.Message.TOKEN_NOT_EXIT);
            const token = bearerToken.split(' ')[1], authMember = await this.authService.verifyToken(token);
            console.log('memberNick[auth] =>', authMember.memberNick);
            request.body.authMember = authMember;
            return true;
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthGuard);


/***/ }),

/***/ "./apps/nestar-api/src/components/auth/guards/roles.guard.ts":
/*!*******************************************************************!*\
  !*** ./apps/nestar-api/src/components/auth/guards/roles.guard.ts ***!
  \*******************************************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./apps/nestar-api/src/components/auth/auth.service.ts");
const common_enum_1 = __webpack_require__(/*! apps/nestar-api/src/libs/enums/common.enum */ "./apps/nestar-api/src/libs/enums/common.enum.ts");
let RolesGuard = class RolesGuard {
    constructor(reflector, authService) {
        this.reflector = reflector;
        this.authService = authService;
    }
    async canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles)
            return true;
        console.info(`--- @guard() Authentication [RolesGuard]: ${roles} ---`);
        if (context.contextType === 'graphql') {
            const request = context.getArgByIndex(2).req;
            const bearerToken = request.headers.authorization;
            if (!bearerToken)
                throw new common_1.BadRequestException(common_enum_1.Message.TOKEN_NOT_EXIT);
            const token = bearerToken.split(' ')[1], authMember = await this.authService.verifyToken(token), hasRole = () => roles.indexOf(authMember.memberType) > -1, hasPermission = hasRole();
            if (!authMember || !hasPermission)
                throw new common_1.ForbiddenException(common_enum_1.Message.ONLY_SPECIFIC_ROLES_ALLOWED);
            console.log('memberNick[roles] =>', authMember.memberNick);
            request.body.authMember = authMember;
            return true;
        }
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], RolesGuard);


/***/ }),

/***/ "./apps/nestar-api/src/components/auth/guards/without.guard.ts":
/*!*********************************************************************!*\
  !*** ./apps/nestar-api/src/components/auth/guards/without.guard.ts ***!
  \*********************************************************************/
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
exports.WithoutGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./apps/nestar-api/src/components/auth/auth.service.ts");
let WithoutGuard = class WithoutGuard {
    constructor(authService) {
        this.authService = authService;
    }
    async canActivate(context) {
        console.info('--- @guard() Authentication [WithoutGuard] ---');
        if (context.contextType === 'graphql') {
            const request = context.getArgByIndex(2).req, bearerToken = request.headers.authorization;
            if (bearerToken) {
                try {
                    const token = bearerToken.split(' ')[1], authMember = await this.authService.verifyToken(token);
                    request.body.authMember = authMember;
                }
                catch (err) {
                    request.body.authMember = null;
                }
            }
            else
                request.body.authMember = null;
            console.log('memberNick[without] =>', request.body.authMember?.memberNick ?? 'none');
            return true;
        }
    }
};
exports.WithoutGuard = WithoutGuard;
exports.WithoutGuard = WithoutGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], WithoutGuard);


/***/ }),

/***/ "./apps/nestar-api/src/components/board-article/board-article.module.ts":
/*!******************************************************************************!*\
  !*** ./apps/nestar-api/src/components/board-article/board-article.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoardArticleModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let BoardArticleModule = class BoardArticleModule {
};
exports.BoardArticleModule = BoardArticleModule;
exports.BoardArticleModule = BoardArticleModule = __decorate([
    (0, common_1.Module)({})
], BoardArticleModule);


/***/ }),

/***/ "./apps/nestar-api/src/components/comment/comment.module.ts":
/*!******************************************************************!*\
  !*** ./apps/nestar-api/src/components/comment/comment.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CommentModule = class CommentModule {
};
exports.CommentModule = CommentModule;
exports.CommentModule = CommentModule = __decorate([
    (0, common_1.Module)({})
], CommentModule);


/***/ }),

/***/ "./apps/nestar-api/src/components/components.module.ts":
/*!*************************************************************!*\
  !*** ./apps/nestar-api/src/components/components.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComponentsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const member_module_1 = __webpack_require__(/*! ./member/member.module */ "./apps/nestar-api/src/components/member/member.module.ts");
const property_module_1 = __webpack_require__(/*! ./property/property.module */ "./apps/nestar-api/src/components/property/property.module.ts");
const comment_module_1 = __webpack_require__(/*! ./comment/comment.module */ "./apps/nestar-api/src/components/comment/comment.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/nestar-api/src/components/auth/auth.module.ts");
const like_module_1 = __webpack_require__(/*! ./like/like.module */ "./apps/nestar-api/src/components/like/like.module.ts");
const view_module_1 = __webpack_require__(/*! ./view/view.module */ "./apps/nestar-api/src/components/view/view.module.ts");
const follow_module_1 = __webpack_require__(/*! ./follow/follow.module */ "./apps/nestar-api/src/components/follow/follow.module.ts");
const board_article_module_1 = __webpack_require__(/*! ./board-article/board-article.module */ "./apps/nestar-api/src/components/board-article/board-article.module.ts");
let ComponentsModule = class ComponentsModule {
};
exports.ComponentsModule = ComponentsModule;
exports.ComponentsModule = ComponentsModule = __decorate([
    (0, common_1.Module)({
        imports: [member_module_1.MemberModule, property_module_1.PropertyModule, comment_module_1.CommentModule, auth_module_1.AuthModule, like_module_1.LikeModule, view_module_1.ViewModule, follow_module_1.FollowModule, board_article_module_1.BoardArticleModule]
    })
], ComponentsModule);


/***/ }),

/***/ "./apps/nestar-api/src/components/follow/follow.module.ts":
/*!****************************************************************!*\
  !*** ./apps/nestar-api/src/components/follow/follow.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FollowModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let FollowModule = class FollowModule {
};
exports.FollowModule = FollowModule;
exports.FollowModule = FollowModule = __decorate([
    (0, common_1.Module)({})
], FollowModule);


/***/ }),

/***/ "./apps/nestar-api/src/components/like/like.module.ts":
/*!************************************************************!*\
  !*** ./apps/nestar-api/src/components/like/like.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LikeModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let LikeModule = class LikeModule {
};
exports.LikeModule = LikeModule;
exports.LikeModule = LikeModule = __decorate([
    (0, common_1.Module)({})
], LikeModule);


/***/ }),

/***/ "./apps/nestar-api/src/components/member/member.module.ts":
/*!****************************************************************!*\
  !*** ./apps/nestar-api/src/components/member/member.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const member_resolver_1 = __webpack_require__(/*! ./member.resolver */ "./apps/nestar-api/src/components/member/member.resolver.ts");
const member_service_1 = __webpack_require__(/*! ./member.service */ "./apps/nestar-api/src/components/member/member.service.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const Member_model_1 = __webpack_require__(/*! ../../schemas/Member.model */ "./apps/nestar-api/src/schemas/Member.model.ts");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/nestar-api/src/components/auth/auth.module.ts");
const view_module_1 = __webpack_require__(/*! ../view/view.module */ "./apps/nestar-api/src/components/view/view.module.ts");
let MemberModule = class MemberModule {
};
exports.MemberModule = MemberModule;
exports.MemberModule = MemberModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Member', schema: Member_model_1.default }]), auth_module_1.AuthModule, view_module_1.ViewModule],
        providers: [member_resolver_1.MemberResolver, member_service_1.MemberService],
        exports: [member_service_1.MemberService],
    })
], MemberModule);


/***/ }),

/***/ "./apps/nestar-api/src/components/member/member.resolver.ts":
/*!******************************************************************!*\
  !*** ./apps/nestar-api/src/components/member/member.resolver.ts ***!
  \******************************************************************/
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const member_service_1 = __webpack_require__(/*! ./member.service */ "./apps/nestar-api/src/components/member/member.service.ts");
const member_input_1 = __webpack_require__(/*! ../../libs/dto/member/member.input */ "./apps/nestar-api/src/libs/dto/member/member.input.ts");
const member_1 = __webpack_require__(/*! ../../libs/dto/member/member */ "./apps/nestar-api/src/libs/dto/member/member.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_guard_1 = __webpack_require__(/*! ../auth/guards/auth.guard */ "./apps/nestar-api/src/components/auth/guards/auth.guard.ts");
const authMember_decorator_1 = __webpack_require__(/*! ../auth/decoratots/authMember.decorator */ "./apps/nestar-api/src/components/auth/decoratots/authMember.decorator.ts");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const roles_decorator_1 = __webpack_require__(/*! ../auth/decoratots/roles.decorator */ "./apps/nestar-api/src/components/auth/decoratots/roles.decorator.ts");
const member_enum_1 = __webpack_require__(/*! ../../libs/enums/member.enum */ "./apps/nestar-api/src/libs/enums/member.enum.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/guards/roles.guard */ "./apps/nestar-api/src/components/auth/guards/roles.guard.ts");
const member_update_1 = __webpack_require__(/*! ../../libs/dto/member/member.update */ "./apps/nestar-api/src/libs/dto/member/member.update.ts");
const config_1 = __webpack_require__(/*! ../../libs/config */ "./apps/nestar-api/src/libs/config.ts");
const without_guard_1 = __webpack_require__(/*! ../auth/guards/without.guard */ "./apps/nestar-api/src/components/auth/guards/without.guard.ts");
const graphql_upload_1 = __webpack_require__(/*! graphql-upload */ "graphql-upload");
const fs_1 = __webpack_require__(/*! fs */ "fs");
const common_enum_1 = __webpack_require__(/*! ../../libs/enums/common.enum */ "./apps/nestar-api/src/libs/enums/common.enum.ts");
let MemberResolver = class MemberResolver {
    constructor(memberService) {
        this.memberService = memberService;
    }
    async signup(input) {
        console.log('Mutation signup');
        return await this.memberService.signup(input);
    }
    async login(input) {
        console.log('Mutation login');
        return await this.memberService.login(input);
    }
    async checkAuth(memberNick) {
        console.log('Query checkAuth');
        console.log('memberNick');
        return `Hi ${memberNick}`;
    }
    async checkAuthRoles(authMember) {
        console.log('Query checkAuthRoles');
        return `Hi ${authMember.memberNick}, you are ${authMember.memberType} (memberId: ${authMember._id})`;
    }
    async getMember(input, memberId) {
        console.log('Query getMember');
        const targetId = (0, config_1.shapeIntoMongoObjectId)(input);
        return await this.memberService.getMember(memberId, targetId);
    }
    async getAgents(input, memberId) {
        console.log('Query getAgent');
        return await this.memberService.getAgents(memberId, input);
    }
    async updateMember(input, memberId) {
        console.log('Mutation updateMember');
        delete input._id;
        return await this.memberService.updateMember(memberId, input);
    }
    async getAllMembersByAdmin(input) {
        console.log('Query getAllMembersByAdmin');
        return await this.memberService.getAllMembersByAdmin(input);
    }
    async updateMemberByAdmin(input) {
        console.log('Mutation updateMemberByAdmin');
        return await this.memberService.updateMemberByAdmin(input);
    }
    async imageUploader({ createReadStream, filename, mimetype }, target) {
        console.log('Mutation: imageUploader');
        if (!filename)
            throw new Error(common_enum_1.Message.UPLOAD_FAILED);
        const validMime = config_1.validMimeTypes.includes(mimetype);
        if (!validMime)
            throw new Error(common_enum_1.Message.NOT_ALLOWED_FORMAT);
        const imageName = (0, config_1.getSerialForImage)(filename);
        const url = `uploads/${target}/${imageName}`;
        const stream = createReadStream();
        const result = await new Promise((resolve, reject) => {
            stream
                .pipe((0, fs_1.createWriteStream)(url))
                .on('finish', async () => resolve(true))
                .on('error', () => reject(false));
        });
        if (!result)
            throw new Error(common_enum_1.Message.UPLOAD_FAILED);
        return url;
    }
    async imagesUploader(files, target) {
        console.log('Mutation: imagesUploader');
        const uploadedImages = [];
        const promisedList = files.map(async (img, index) => {
            try {
                const { filename, mimetype, encoding, createReadStream } = await img;
                const validMime = config_1.validMimeTypes.includes(mimetype);
                if (!validMime)
                    throw new Error(common_enum_1.Message.PROVIDE_ALLOWED_FORMAT);
                const imageName = (0, config_1.getSerialForImage)(filename);
                const url = `uploads/${target}/${imageName}`;
                const stream = createReadStream();
                const result = await new Promise((resolve, reject) => {
                    stream
                        .pipe((0, fs_1.createWriteStream)(url))
                        .on('finish', () => resolve(true))
                        .on('error', () => reject(false));
                });
                if (!result)
                    throw new Error(common_enum_1.Message.UPLOAD_FAILED);
                uploadedImages[index] = url;
            }
            catch (err) {
                console.log('Error, file missing!');
            }
        });
        await Promise.all(promisedList);
        return uploadedImages;
    }
};
exports.MemberResolver = MemberResolver;
__decorate([
    (0, graphql_1.Mutation)(() => member_1.Member),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof member_input_1.MemberInput !== "undefined" && member_input_1.MemberInput) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], MemberResolver.prototype, "signup", null);
__decorate([
    (0, graphql_1.Mutation)(() => member_1.Member),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof member_input_1.LoginInput !== "undefined" && member_input_1.LoginInput) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], MemberResolver.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Query)(() => String),
    __param(0, (0, authMember_decorator_1.AuthMember)('memberNick')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], MemberResolver.prototype, "checkAuth", null);
__decorate([
    (0, roles_decorator_1.Roles)(member_enum_1.MemberType.USER, member_enum_1.MemberType.AGENT),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, graphql_1.Query)(() => String),
    __param(0, (0, authMember_decorator_1.AuthMember)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof member_1.Member !== "undefined" && member_1.Member) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], MemberResolver.prototype, "checkAuthRoles", null);
__decorate([
    (0, common_1.UseGuards)(without_guard_1.WithoutGuard),
    (0, graphql_1.Query)(() => member_1.Member),
    __param(0, (0, graphql_1.Args)('memberId')),
    __param(1, (0, authMember_decorator_1.AuthMember)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_j = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], MemberResolver.prototype, "getMember", null);
__decorate([
    (0, common_1.UseGuards)(without_guard_1.WithoutGuard),
    (0, graphql_1.Query)(() => member_1.Members),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, authMember_decorator_1.AuthMember)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof member_input_1.AgentsInquiry !== "undefined" && member_input_1.AgentsInquiry) === "function" ? _l : Object, typeof (_m = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], MemberResolver.prototype, "getAgents", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Mutation)(() => member_1.Member),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, authMember_decorator_1.AuthMember)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof member_update_1.MemberUpdate !== "undefined" && member_update_1.MemberUpdate) === "function" ? _p : Object, typeof (_q = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _q : Object]),
    __metadata("design:returntype", typeof (_r = typeof Promise !== "undefined" && Promise) === "function" ? _r : Object)
], MemberResolver.prototype, "updateMember", null);
__decorate([
    (0, roles_decorator_1.Roles)(member_enum_1.MemberType.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, graphql_1.Query)(() => member_1.Members),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_s = typeof member_input_1.MembersInquiry !== "undefined" && member_input_1.MembersInquiry) === "function" ? _s : Object]),
    __metadata("design:returntype", typeof (_t = typeof Promise !== "undefined" && Promise) === "function" ? _t : Object)
], MemberResolver.prototype, "getAllMembersByAdmin", null);
__decorate([
    (0, roles_decorator_1.Roles)(member_enum_1.MemberType.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, graphql_1.Mutation)(() => member_1.Member),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_u = typeof member_update_1.MemberUpdate !== "undefined" && member_update_1.MemberUpdate) === "function" ? _u : Object]),
    __metadata("design:returntype", typeof (_v = typeof Promise !== "undefined" && Promise) === "function" ? _v : Object)
], MemberResolver.prototype, "updateMemberByAdmin", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Mutation)((returns) => String),
    __param(0, (0, graphql_1.Args)({ name: 'file', type: () => graphql_upload_1.GraphQLUpload })),
    __param(1, (0, graphql_1.Args)('target')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_w = typeof graphql_upload_1.FileUpload !== "undefined" && graphql_upload_1.FileUpload) === "function" ? _w : Object, typeof (_x = typeof String !== "undefined" && String) === "function" ? _x : Object]),
    __metadata("design:returntype", typeof (_y = typeof Promise !== "undefined" && Promise) === "function" ? _y : Object)
], MemberResolver.prototype, "imageUploader", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Mutation)((returns) => [String]),
    __param(0, (0, graphql_1.Args)('files', { type: () => [graphql_upload_1.GraphQLUpload] })),
    __param(1, (0, graphql_1.Args)('target')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, typeof (_z = typeof String !== "undefined" && String) === "function" ? _z : Object]),
    __metadata("design:returntype", typeof (_0 = typeof Promise !== "undefined" && Promise) === "function" ? _0 : Object)
], MemberResolver.prototype, "imagesUploader", null);
exports.MemberResolver = MemberResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof member_service_1.MemberService !== "undefined" && member_service_1.MemberService) === "function" ? _a : Object])
], MemberResolver);


/***/ }),

/***/ "./apps/nestar-api/src/components/member/member.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/nestar-api/src/components/member/member.service.ts ***!
  \*****************************************************************/
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const member_enum_1 = __webpack_require__(/*! ../../libs/enums/member.enum */ "./apps/nestar-api/src/libs/enums/member.enum.ts");
const common_enum_1 = __webpack_require__(/*! ../../libs/enums/common.enum */ "./apps/nestar-api/src/libs/enums/common.enum.ts");
const auth_service_1 = __webpack_require__(/*! ../auth/auth.service */ "./apps/nestar-api/src/components/auth/auth.service.ts");
const view_service_1 = __webpack_require__(/*! ../view/view.service */ "./apps/nestar-api/src/components/view/view.service.ts");
const view_enum_1 = __webpack_require__(/*! ../../libs/enums/view.enum */ "./apps/nestar-api/src/libs/enums/view.enum.ts");
let MemberService = class MemberService {
    constructor(memberModel, authService, viewService) {
        this.memberModel = memberModel;
        this.authService = authService;
        this.viewService = viewService;
    }
    async signup(input) {
        input.memberPassword = await this.authService.hashPassword(input.memberPassword);
        try {
            const result = await this.memberModel.create(input);
            result.accessToken = await this.authService.createToken(result);
            return result;
        }
        catch (err) {
            console.log('Error Service.modul:', err.message);
            throw new common_1.BadRequestException(common_enum_1.Message.USED_MEMBER_NICK_OR_PHONE);
        }
    }
    async login(input) {
        const { memberNick, memberPassword } = input;
        const response = await this.memberModel
            .findOne({ memberNick: memberNick })
            .select('+memberPassword')
            .exec();
        if (!response || response.memberStatus === member_enum_1.MemberStatus.DELETE) {
            throw new common_1.InternalServerErrorException(common_enum_1.Message.NO_MEMBER_NICK);
        }
        else if (response.memberStatus === member_enum_1.MemberStatus.BLOCK) {
            throw new common_1.InternalServerErrorException(common_enum_1.Message.BLOCKED_USER);
        }
        const isMatch = await this.authService.cpmparePasswords(input.memberPassword, response.memberPassword);
        if (!isMatch)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.WRONG_PASSWORD);
        response.accessToken = await this.authService.createToken(response);
        return response;
    }
    async updateMember(memberId, input) {
        const result = await this.memberModel
            .findOneAndUpdate({
            _id: memberId,
            memberStatus: member_enum_1.MemberStatus.ACTIVE,
        }, input, {
            new: true,
        })
            .exec();
        if (!result)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.UPDATE_FAILED);
        result.accessToken = await this.authService.createToken(result);
        return result;
    }
    async getMember(memberId, targetId) {
        const search = {
            _id: targetId,
            memberStatus: {
                $in: [member_enum_1.MemberStatus.ACTIVE, member_enum_1.MemberStatus.BLOCK],
            },
        };
        const targetMember = await this.memberModel.findOne(search).lean().exec();
        if (!targetMember)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.NO_DATA_FOUND);
        if (memberId) {
            const viewInput = { memberId: memberId, viewRefId: targetId, viewGroup: view_enum_1.ViewGroup.MEMBER };
            const newView = await this.viewService.recordView(viewInput);
            if (newView) {
                await this.memberModel.findOneAndUpdate(search, { $inc: { memberViews: 1 } }, { new: true }).exec();
                targetMember.memberViews++;
            }
        }
        return targetMember;
    }
    async getAgents(memberId, input) {
        const { text } = input.search;
        const match = {
            memberType: member_enum_1.MemberType.AGENT,
            memberStatus: member_enum_1.MemberStatus.ACTIVE,
        };
        const sort = { [input?.sort ?? 'createdAt']: input?.direction ?? common_enum_1.Direction.DESC };
        if (text)
            match.memberNick = { $regex: new RegExp(text, 'i') };
        console.log('match', match);
        const result = await this.memberModel.aggregate([
            { $match: match },
            { $sort: sort },
            {
                $facet: {
                    list: [{ $skip: (input.page - 1) * input.limit }, { $limit: input.limit }],
                    metaCounter: [{ $count: 'total' }],
                },
            },
        ]);
        if (!result.length)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.NO_DATA_FOUND);
        return result[0];
    }
    async getAllMembersByAdmin(input) {
        const { memberType, memberStatus, text } = input.search;
        const match = {};
        const sort = { [input?.sort ?? 'createdAt']: input?.direction ?? common_enum_1.Direction.DESC };
        if (memberStatus)
            match.memberStatus = memberStatus;
        if (memberType)
            match.memberType = memberType;
        if (text)
            match.memberNick = { $regex: new RegExp(text, 'i') };
        console.log('match', match);
        const result = await this.memberModel.aggregate([
            { $match: match },
            { $sort: sort },
            {
                $facet: {
                    list: [{ $skip: (input.page - 1) * input.limit }, { $limit: input.limit }],
                    metaCounter: [{ $count: 'total' }],
                },
            },
        ]);
        if (!result.length)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.NO_DATA_FOUND);
        return result[0];
    }
    async updateMemberByAdmin(input) {
        const result = await this.memberModel.findOneAndUpdate({ _id: input._id }, input, { new: true }).exec();
        if (!result)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.UPDATE_FAILED);
        return result;
    }
    async memberStatusEditor(input) {
        console.log('executed!');
        const { _id, targetKey, modifier } = input;
        return await this.memberModel.findOneAndUpdate(_id, { $inc: { [targetKey]: modifier } }, { new: true }).exec();
    }
};
exports.MemberService = MemberService;
exports.MemberService = MemberService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Member')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object, typeof (_c = typeof view_service_1.ViewService !== "undefined" && view_service_1.ViewService) === "function" ? _c : Object])
], MemberService);


/***/ }),

/***/ "./apps/nestar-api/src/components/property/property.module.ts":
/*!********************************************************************!*\
  !*** ./apps/nestar-api/src/components/property/property.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const property_resolver_1 = __webpack_require__(/*! ./property.resolver */ "./apps/nestar-api/src/components/property/property.resolver.ts");
const property_service_1 = __webpack_require__(/*! ./property.service */ "./apps/nestar-api/src/components/property/property.service.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const Property_model_1 = __webpack_require__(/*! ../../schemas/Property.model */ "./apps/nestar-api/src/schemas/Property.model.ts");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/nestar-api/src/components/auth/auth.module.ts");
const view_module_1 = __webpack_require__(/*! ../view/view.module */ "./apps/nestar-api/src/components/view/view.module.ts");
const member_module_1 = __webpack_require__(/*! ../member/member.module */ "./apps/nestar-api/src/components/member/member.module.ts");
let PropertyModule = class PropertyModule {
};
exports.PropertyModule = PropertyModule;
exports.PropertyModule = PropertyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Property', schema: Property_model_1.default }]),
            auth_module_1.AuthModule,
            view_module_1.ViewModule,
            member_module_1.MemberModule,
        ],
        providers: [property_resolver_1.PropertyResolver, property_service_1.PropertyService],
    })
], PropertyModule);


/***/ }),

/***/ "./apps/nestar-api/src/components/property/property.resolver.ts":
/*!**********************************************************************!*\
  !*** ./apps/nestar-api/src/components/property/property.resolver.ts ***!
  \**********************************************************************/
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const property_service_1 = __webpack_require__(/*! ./property.service */ "./apps/nestar-api/src/components/property/property.service.ts");
const property_1 = __webpack_require__(/*! ../../libs/dto/property/property */ "./apps/nestar-api/src/libs/dto/property/property.ts");
const property_input_1 = __webpack_require__(/*! ../../libs/dto/property/property.input */ "./apps/nestar-api/src/libs/dto/property/property.input.ts");
const roles_decorator_1 = __webpack_require__(/*! ../auth/decoratots/roles.decorator */ "./apps/nestar-api/src/components/auth/decoratots/roles.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const roles_guard_1 = __webpack_require__(/*! ../auth/guards/roles.guard */ "./apps/nestar-api/src/components/auth/guards/roles.guard.ts");
const member_enum_1 = __webpack_require__(/*! ../../libs/enums/member.enum */ "./apps/nestar-api/src/libs/enums/member.enum.ts");
const authMember_decorator_1 = __webpack_require__(/*! ../auth/decoratots/authMember.decorator */ "./apps/nestar-api/src/components/auth/decoratots/authMember.decorator.ts");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const without_guard_1 = __webpack_require__(/*! ../auth/guards/without.guard */ "./apps/nestar-api/src/components/auth/guards/without.guard.ts");
const config_1 = __webpack_require__(/*! ../../libs/config */ "./apps/nestar-api/src/libs/config.ts");
const property_update_1 = __webpack_require__(/*! ../../libs/dto/property/property.update */ "./apps/nestar-api/src/libs/dto/property/property.update.ts");
let PropertyResolver = class PropertyResolver {
    constructor(propertyService) {
        this.propertyService = propertyService;
    }
    async createProperty(input, memberId) {
        console.log('Mutation: createProperty');
        input.memberId = memberId;
        return await this.propertyService.createProperty(input);
    }
    async getProperty(input, memberId) {
        console.log('Query: getProperty');
        const propertyId = (0, config_1.shapeIntoMongoObjectId)(input);
        return await this.propertyService.getProperty(memberId, propertyId);
    }
    async updateProperty(input, memberId) {
        console.log('Mutation: updateProperty');
        input._id = (0, config_1.shapeIntoMongoObjectId)(input._id);
        return await this.propertyService.updateProperty(memberId, input);
    }
    async getProperties(input, memberId) {
        console.log('Query: getProperties');
        return await this.propertyService.getProperties(memberId, input);
    }
    async getAgentProperties(input, memberId) {
        console.log('Query: getAgentProperties');
        return await this.propertyService.getAgentProperties(memberId, input);
    }
    async getAllPropertiesByAdmin(input, memberId) {
        console.log('Query: getAllPropertiesByAdmin!');
        return await this.propertyService.getAllPropertiesByAdmin(input);
    }
    async updatePropertyByAdmin(input) {
        console.log('Mutation: updatePropertyByAdmin!');
        input._id = (0, config_1.shapeIntoMongoObjectId)(input._id);
        return await this.propertyService.updatePropertyByAdmin(input);
    }
    async removePropertyByAdmin(input) {
        console.log('Mutation: removePropertyByAdmin!');
        const propertyId = (0, config_1.shapeIntoMongoObjectId)(input);
        return await this.propertyService.removePropertyByAdmin(propertyId);
    }
};
exports.PropertyResolver = PropertyResolver;
__decorate([
    (0, roles_decorator_1.Roles)(member_enum_1.MemberType.AGENT),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, graphql_1.Mutation)(() => property_1.Property),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, authMember_decorator_1.AuthMember)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof property_input_1.PropertyInput !== "undefined" && property_input_1.PropertyInput) === "function" ? _b : Object, typeof (_c = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], PropertyResolver.prototype, "createProperty", null);
__decorate([
    (0, common_1.UseGuards)(without_guard_1.WithoutGuard),
    (0, graphql_1.Query)((returns) => property_1.Property),
    __param(0, (0, graphql_1.Args)('propertyId')),
    __param(1, (0, authMember_decorator_1.AuthMember)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], PropertyResolver.prototype, "getProperty", null);
__decorate([
    (0, roles_decorator_1.Roles)(member_enum_1.MemberType.AGENT),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, graphql_1.Mutation)((returns) => property_1.Property),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, authMember_decorator_1.AuthMember)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof property_update_1.PropertyUpdate !== "undefined" && property_update_1.PropertyUpdate) === "function" ? _g : Object, typeof (_h = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], PropertyResolver.prototype, "updateProperty", null);
__decorate([
    (0, common_1.UseGuards)(without_guard_1.WithoutGuard),
    (0, graphql_1.Query)((returns) => property_1.Properties),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, authMember_decorator_1.AuthMember)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof property_input_1.PropertiesInquiry !== "undefined" && property_input_1.PropertiesInquiry) === "function" ? _k : Object, typeof (_l = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], PropertyResolver.prototype, "getProperties", null);
__decorate([
    (0, roles_decorator_1.Roles)(member_enum_1.MemberType.AGENT),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, graphql_1.Query)((returns) => property_1.Properties),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, authMember_decorator_1.AuthMember)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof property_input_1.AgentPropertiesInquiry !== "undefined" && property_input_1.AgentPropertiesInquiry) === "function" ? _o : Object, typeof (_p = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], PropertyResolver.prototype, "getAgentProperties", null);
__decorate([
    (0, roles_decorator_1.Roles)(member_enum_1.MemberType.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, graphql_1.Query)((returns) => property_1.Properties),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, authMember_decorator_1.AuthMember)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof property_input_1.AllPropertiesInquiry !== "undefined" && property_input_1.AllPropertiesInquiry) === "function" ? _r : Object, typeof (_s = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _s : Object]),
    __metadata("design:returntype", typeof (_t = typeof Promise !== "undefined" && Promise) === "function" ? _t : Object)
], PropertyResolver.prototype, "getAllPropertiesByAdmin", null);
__decorate([
    (0, roles_decorator_1.Roles)(member_enum_1.MemberType.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, graphql_1.Mutation)((returns) => property_1.Property),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_u = typeof property_update_1.PropertyUpdate !== "undefined" && property_update_1.PropertyUpdate) === "function" ? _u : Object]),
    __metadata("design:returntype", typeof (_v = typeof Promise !== "undefined" && Promise) === "function" ? _v : Object)
], PropertyResolver.prototype, "updatePropertyByAdmin", null);
__decorate([
    (0, roles_decorator_1.Roles)(member_enum_1.MemberType.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, graphql_1.Mutation)((returns) => property_1.Property),
    __param(0, (0, graphql_1.Args)('propertyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_w = typeof Promise !== "undefined" && Promise) === "function" ? _w : Object)
], PropertyResolver.prototype, "removePropertyByAdmin", null);
exports.PropertyResolver = PropertyResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof property_service_1.PropertyService !== "undefined" && property_service_1.PropertyService) === "function" ? _a : Object])
], PropertyResolver);


/***/ }),

/***/ "./apps/nestar-api/src/components/property/property.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/nestar-api/src/components/property/property.service.ts ***!
  \*********************************************************************/
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const common_enum_1 = __webpack_require__(/*! ../../libs/enums/common.enum */ "./apps/nestar-api/src/libs/enums/common.enum.ts");
const member_service_1 = __webpack_require__(/*! ../member/member.service */ "./apps/nestar-api/src/components/member/member.service.ts");
const property_enum_1 = __webpack_require__(/*! ../../libs/enums/property.enum */ "./apps/nestar-api/src/libs/enums/property.enum.ts");
const view_enum_1 = __webpack_require__(/*! ../../libs/enums/view.enum */ "./apps/nestar-api/src/libs/enums/view.enum.ts");
const view_service_1 = __webpack_require__(/*! ../view/view.service */ "./apps/nestar-api/src/components/view/view.service.ts");
const moment = __webpack_require__(/*! moment */ "moment");
const config_1 = __webpack_require__(/*! ../../libs/config */ "./apps/nestar-api/src/libs/config.ts");
let PropertyService = class PropertyService {
    constructor(propertyModel, memberService, viewService) {
        this.propertyModel = propertyModel;
        this.memberService = memberService;
        this.viewService = viewService;
    }
    async createProperty(input) {
        try {
            const result = await this.propertyModel.create(input);
            await this.memberService.memberStatusEditor({ _id: result.memberId, targetKey: 'memberProperties', modifier: 1 });
            return result;
        }
        catch (err) {
            console.log('Error Service.modul:', err.message);
            throw new common_1.BadRequestException(common_enum_1.Message.CREATE_FAILED);
        }
    }
    async getProperty(memberId, propertyId) {
        const search = {
            _id: propertyId,
            propertyStatus: property_enum_1.PropertyStatus.ACTIVE,
        };
        const targetProperty = await this.propertyModel.findOne(search).lean().exec();
        if (!targetProperty)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.NO_DATA_FOUND);
        if (memberId) {
            const viewInput = { memberId: memberId, viewRefId: propertyId, viewGroup: view_enum_1.ViewGroup.PROPERTY };
            const newView = await this.viewService.recordView(viewInput);
            if (newView) {
                await this.propertyStatsEditor({ _id: propertyId, targetKey: 'propertyviews', modifier: 1 });
                targetProperty.propertyViews++;
            }
        }
        targetProperty.memberData = await this.memberService.getMember(null, targetProperty.memberId);
        return targetProperty;
    }
    async propertyStatsEditor(input) {
        const { _id, targetKey, modifier } = input;
        return await this.propertyModel
            .findByIdAndUpdate(_id, { $inc: { [targetKey]: modifier } }, {
            new: true,
        })
            .exec();
    }
    async updateProperty(memberId, input) {
        let { propertyStatus, soldAt, deletedAt } = input;
        const search = {
            _id: input._id,
            memberId: memberId,
            propertyStatus: property_enum_1.PropertyStatus.ACTIVE,
        };
        if (propertyStatus === property_enum_1.PropertyStatus.SOLD)
            soldAt = moment().toDate();
        else if (propertyStatus === property_enum_1.PropertyStatus.DELETE)
            deletedAt = moment().toDate();
        const result = await this.propertyModel.findOneAndUpdate(search, input, { new: true }).exec();
        if (!result)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.UPDATE_FAILED);
        if (soldAt || deletedAt) {
            await this.memberService.memberStatusEditor({
                _id: memberId,
                targetKey: 'memberProperties',
                modifier: -1,
            });
        }
        return result;
    }
    async getProperties(memberId, input) {
        const match = { propertyStatus: property_enum_1.PropertyStatus.ACTIVE };
        const sort = { [input?.sort ?? 'createdAt']: input?.direction ?? common_enum_1.Direction.DESC };
        this.shapeMatchQuery(match, input);
        console.log('match', match);
        const result = await this.propertyModel
            .aggregate([
            { $match: match },
            { $sort: sort },
            {
                $facet: {
                    list: [
                        { $skip: (input.page - 1) * input.limit },
                        { $limit: input.limit },
                        config_1.lookupMember,
                        { $unwind: '$memberData' },
                    ],
                    metaCounter: [{ $count: 'total' }],
                },
            },
        ])
            .exec();
        if (!result.length)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.NO_DATA_FOUND);
        return result[0];
    }
    shapeMatchQuery(match, input) {
        const { memberId, locationList, roomsList, bedsList, typeList, periodsRange, pricesRange, squaresRange, options, text, } = input.search;
        if (memberId)
            match.memberId = (0, config_1.shapeIntoMongoObjectId)(memberId);
        if (locationList)
            match.propertyLocation = { $in: locationList };
        if (roomsList)
            match.propertyRooms = { $in: roomsList };
        if (bedsList)
            match.propertyBeds = { $in: bedsList };
        if (typeList)
            match.propertyType = { $in: typeList };
        if (pricesRange)
            match.propertyPrice = { $gte: pricesRange.start, $lte: pricesRange.end };
        if (periodsRange)
            match.createdAt = { $gte: periodsRange.start, $lte: periodsRange.end };
        if (squaresRange)
            match.squaresRange = { $gte: squaresRange.start, $lte: squaresRange.end };
        if (text)
            match.propertyTitle = { $regex: new RegExp(text, 'i') };
        if (options) {
            match['$or'] = options.map((ele) => {
                return { [ele]: true };
            });
        }
    }
    async getAgentProperties(memberId, input) {
        const { propertyStatus } = input.search;
        if (propertyStatus === property_enum_1.PropertyStatus.DELETE)
            throw new common_1.BadRequestException(common_enum_1.Message.NOT_ALLOWED_REQUEST);
        const match = {
            memberId: memberId,
            propertyStatus: propertyStatus ?? { $ne: property_enum_1.PropertyStatus.DELETE },
        };
        const sort = { [input?.sort ?? 'createdAt']: input?.direction ?? common_enum_1.Direction.DESC };
        const result = await this.propertyModel
            .aggregate([
            { $match: match },
            { $sort: sort },
            {
                $facet: {
                    list: [
                        { $skip: (input.page - 1) * input.limit },
                        { $limit: input.limit },
                        config_1.lookupMember,
                        { $unwind: '$memberData' },
                    ],
                    metaCounter: [{ $count: 'total' }],
                },
            },
        ])
            .exec();
        if (!result.length)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.NO_DATA_FOUND);
        return result[0];
    }
    async getAllPropertiesByAdmin(input) {
        const { propertyStatus, propertyLocationList } = input.search;
        const match = {};
        const sort = { [input?.sort ?? 'createdAt']: input?.direction ?? common_enum_1.Direction.DESC };
        if (propertyStatus)
            match.propertyStatus = propertyStatus;
        if (propertyLocationList)
            match.propertyLocationList = { $in: propertyLocationList };
        const result = await this.propertyModel
            .aggregate([
            { $match: match },
            { $sort: sort },
            {
                $facet: {
                    list: [
                        { $skip: (input.page - 1) * input.limit },
                        { $limit: input.limit },
                        config_1.lookupMember,
                        { $unwind: '$memberData' },
                    ],
                    metaCounter: [{ $count: 'total' }],
                },
            },
        ])
            .exec();
        if (!result.length)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.NO_DATA_FOUND);
        return result[0];
    }
    async updatePropertyByAdmin(input) {
        let { propertyStatus, soldAt, deletedAt } = input;
        const search = {
            _id: input._id,
            propertyStatus: property_enum_1.PropertyStatus.ACTIVE,
        };
        if (propertyStatus === property_enum_1.PropertyStatus.SOLD)
            soldAt = moment().toDate();
        else if (propertyStatus === property_enum_1.PropertyStatus.DELETE)
            deletedAt = moment().toDate();
        const result = await this.propertyModel
            .findOneAndUpdate(search, input, {
            new: true,
        })
            .exec();
        if (!result)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.UPDATE_FAILED);
        if (soldAt || deletedAt) {
            await this.memberService.memberStatusEditor({
                _id: result.memberId,
                targetKey: 'memberProperties',
                modifier: -1,
            });
        }
        return result;
    }
    async removePropertyByAdmin(propertyId) {
        const search = { _id: propertyId, propertyStatus: property_enum_1.PropertyStatus.DELETE };
        const result = await this.propertyModel.findOneAndDelete(search).exec();
        if (!result)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.REMOVE_FAILED);
        return result;
    }
};
exports.PropertyService = PropertyService;
exports.PropertyService = PropertyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Property')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof member_service_1.MemberService !== "undefined" && member_service_1.MemberService) === "function" ? _b : Object, typeof (_c = typeof view_service_1.ViewService !== "undefined" && view_service_1.ViewService) === "function" ? _c : Object])
], PropertyService);


/***/ }),

/***/ "./apps/nestar-api/src/components/view/view.module.ts":
/*!************************************************************!*\
  !*** ./apps/nestar-api/src/components/view/view.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ViewModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const view_service_1 = __webpack_require__(/*! ./view.service */ "./apps/nestar-api/src/components/view/view.service.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const View_model_1 = __webpack_require__(/*! ../../schemas/View.model */ "./apps/nestar-api/src/schemas/View.model.ts");
let ViewModule = class ViewModule {
};
exports.ViewModule = ViewModule;
exports.ViewModule = ViewModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "View", schema: View_model_1.default }])],
        providers: [view_service_1.ViewService],
        exports: [view_service_1.ViewService],
    })
], ViewModule);


/***/ }),

/***/ "./apps/nestar-api/src/components/view/view.service.ts":
/*!*************************************************************!*\
  !*** ./apps/nestar-api/src/components/view/view.service.ts ***!
  \*************************************************************/
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
exports.ViewService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let ViewService = class ViewService {
    constructor(viewModule) {
        this.viewModule = viewModule;
    }
    async recordView(input) {
        const viewExist = await this.checkViewExistence(input);
        if (!viewExist) {
            console.log("-New View Insert -");
            return await this.viewModule.create(input);
        }
        else
            return null;
    }
    async checkViewExistence(input) {
        const { memberId, viewRefId } = input;
        const search = { memberId: memberId, viewRefId: viewRefId };
        return await this.viewModule.findOne(search).exec();
    }
};
exports.ViewService = ViewService;
exports.ViewService = ViewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("View")),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ViewService);


/***/ }),

/***/ "./apps/nestar-api/src/database/database.module.ts":
/*!*********************************************************!*\
  !*** ./apps/nestar-api/src/database/database.module.ts ***!
  \*********************************************************/
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

/***/ "./apps/nestar-api/src/libs/config.ts":
/*!********************************************!*\
  !*** ./apps/nestar-api/src/libs/config.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.lookupMember = exports.shapeIntoMongoObjectId = exports.getSerialForImage = exports.validMimeTypes = exports.availablePropertySorts = exports.availableOptions = exports.availbleMemberSorts = exports.availbleAgentSorts = void 0;
const bson_1 = __webpack_require__(/*! bson */ "bson");
exports.availbleAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews', 'memberRank'];
exports.availbleMemberSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews'];
exports.availableOptions = ['propertyBarter', 'propertyRent'];
exports.availablePropertySorts = [
    'createdAt',
    'updatedAt',
    'propertyLikes',
    'propertyViews',
    'propertyRank',
    'propertyPrice',
];
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const path = __webpack_require__(/*! path */ "path");
exports.validMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
const getSerialForImage = (filename) => {
    const ext = path.parse(filename).ext;
    return (0, uuid_1.v4)() + ext;
};
exports.getSerialForImage = getSerialForImage;
const shapeIntoMongoObjectId = (target) => {
    return typeof target === 'string' ? new bson_1.ObjectId(target) : target;
};
exports.shapeIntoMongoObjectId = shapeIntoMongoObjectId;
exports.lookupMember = {
    $lookup: {
        from: 'members',
        localField: 'memberId',
        foreignField: '_id',
        as: 'memberData',
    },
};


/***/ }),

/***/ "./apps/nestar-api/src/libs/dto/member/member.input.ts":
/*!*************************************************************!*\
  !*** ./apps/nestar-api/src/libs/dto/member/member.input.ts ***!
  \*************************************************************/
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MembersInquiry = exports.AgentsInquiry = exports.LoginInput = exports.MemberInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const member_enum_1 = __webpack_require__(/*! ../../enums/member.enum */ "./apps/nestar-api/src/libs/enums/member.enum.ts");
const config_1 = __webpack_require__(/*! ../../config */ "./apps/nestar-api/src/libs/config.ts");
const common_enum_1 = __webpack_require__(/*! ../../enums/common.enum */ "./apps/nestar-api/src/libs/enums/common.enum.ts");
let MemberInput = class MemberInput {
};
exports.MemberInput = MemberInput;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 12),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], MemberInput.prototype, "memberNick", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(5, 12),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], MemberInput.prototype, "memberPassword", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], MemberInput.prototype, "memberPhone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => member_enum_1.MemberType, { nullable: true }),
    __metadata("design:type", typeof (_a = typeof member_enum_1.MemberType !== "undefined" && member_enum_1.MemberType) === "function" ? _a : Object)
], MemberInput.prototype, "memberType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => member_enum_1.MemberAuthType, { nullable: true }),
    __metadata("design:type", typeof (_b = typeof member_enum_1.MemberAuthType !== "undefined" && member_enum_1.MemberAuthType) === "function" ? _b : Object)
], MemberInput.prototype, "memberAuthType", void 0);
exports.MemberInput = MemberInput = __decorate([
    (0, graphql_1.InputType)()
], MemberInput);
let LoginInput = class LoginInput {
};
exports.LoginInput = LoginInput;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 12),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginInput.prototype, "memberNick", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(5, 12),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginInput.prototype, "memberPassword", void 0);
exports.LoginInput = LoginInput = __decorate([
    (0, graphql_1.InputType)()
], LoginInput);
let AISearch = class AISearch {
};
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AISearch.prototype, "text", void 0);
AISearch = __decorate([
    (0, graphql_1.InputType)()
], AISearch);
let AgentsInquiry = class AgentsInquiry {
};
exports.AgentsInquiry = AgentsInquiry;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AgentsInquiry.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AgentsInquiry.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(config_1.availbleAgentSorts),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AgentsInquiry.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => common_enum_1.Direction, { nullable: true }),
    __metadata("design:type", typeof (_c = typeof common_enum_1.Direction !== "undefined" && common_enum_1.Direction) === "function" ? _c : Object)
], AgentsInquiry.prototype, "direction", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => AISearch),
    __metadata("design:type", AISearch)
], AgentsInquiry.prototype, "search", void 0);
exports.AgentsInquiry = AgentsInquiry = __decorate([
    (0, graphql_1.InputType)()
], AgentsInquiry);
let MISearch = class MISearch {
};
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => member_enum_1.MemberStatus, { nullable: true }),
    __metadata("design:type", typeof (_d = typeof member_enum_1.MemberStatus !== "undefined" && member_enum_1.MemberStatus) === "function" ? _d : Object)
], MISearch.prototype, "memberStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => member_enum_1.MemberType, { nullable: true }),
    __metadata("design:type", typeof (_e = typeof member_enum_1.MemberType !== "undefined" && member_enum_1.MemberType) === "function" ? _e : Object)
], MISearch.prototype, "memberType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MISearch.prototype, "text", void 0);
MISearch = __decorate([
    (0, graphql_1.InputType)()
], MISearch);
let MembersInquiry = class MembersInquiry {
};
exports.MembersInquiry = MembersInquiry;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], MembersInquiry.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], MembersInquiry.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(config_1.availbleMemberSorts),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MembersInquiry.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => common_enum_1.Direction, { nullable: true }),
    __metadata("design:type", typeof (_f = typeof common_enum_1.Direction !== "undefined" && common_enum_1.Direction) === "function" ? _f : Object)
], MembersInquiry.prototype, "direction", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => MISearch),
    __metadata("design:type", MISearch)
], MembersInquiry.prototype, "search", void 0);
exports.MembersInquiry = MembersInquiry = __decorate([
    (0, graphql_1.InputType)()
], MembersInquiry);


/***/ }),

/***/ "./apps/nestar-api/src/libs/dto/member/member.ts":
/*!*******************************************************!*\
  !*** ./apps/nestar-api/src/libs/dto/member/member.ts ***!
  \*******************************************************/
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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Members = exports.TotalCounter = exports.Member = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const member_enum_1 = __webpack_require__(/*! ../../enums/member.enum */ "./apps/nestar-api/src/libs/enums/member.enum.ts");
let Member = class Member {
};
exports.Member = Member;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", typeof (_a = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _a : Object)
], Member.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => member_enum_1.MemberType),
    __metadata("design:type", typeof (_b = typeof member_enum_1.MemberType !== "undefined" && member_enum_1.MemberType) === "function" ? _b : Object)
], Member.prototype, "memberType", void 0);
__decorate([
    (0, graphql_1.Field)(() => member_enum_1.MemberStatus),
    __metadata("design:type", typeof (_c = typeof member_enum_1.MemberStatus !== "undefined" && member_enum_1.MemberStatus) === "function" ? _c : Object)
], Member.prototype, "memberStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => member_enum_1.MemberAuthType),
    __metadata("design:type", typeof (_d = typeof member_enum_1.MemberAuthType !== "undefined" && member_enum_1.MemberAuthType) === "function" ? _d : Object)
], Member.prototype, "memberAuthType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Member.prototype, "memberPhone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Member.prototype, "memberNick", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "memberFullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Member.prototype, "memberImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "memberAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "memberDesc", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "memberProperties", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "memberArticles", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "memberFollowers", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "memberFollowings", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "memberPoints", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "memberLikes", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "memberViews", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "memberComments", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "memberRank", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "memberWarnings", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "memberBlocks", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Member.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Member.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], Member.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "accessToken", void 0);
exports.Member = Member = __decorate([
    (0, graphql_1.ObjectType)()
], Member);
let TotalCounter = class TotalCounter {
};
exports.TotalCounter = TotalCounter;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], TotalCounter.prototype, "total", void 0);
exports.TotalCounter = TotalCounter = __decorate([
    (0, graphql_1.ObjectType)()
], TotalCounter);
let Members = class Members {
};
exports.Members = Members;
__decorate([
    (0, graphql_1.Field)(() => [Member]),
    __metadata("design:type", Array)
], Members.prototype, "list", void 0);
__decorate([
    (0, graphql_1.Field)(() => [TotalCounter], { nullable: true }),
    __metadata("design:type", Array)
], Members.prototype, "metaCounter", void 0);
exports.Members = Members = __decorate([
    (0, graphql_1.ObjectType)()
], Members);


/***/ }),

/***/ "./apps/nestar-api/src/libs/dto/member/member.update.ts":
/*!**************************************************************!*\
  !*** ./apps/nestar-api/src/libs/dto/member/member.update.ts ***!
  \**************************************************************/
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberUpdate = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const member_enum_1 = __webpack_require__(/*! ../../enums/member.enum */ "./apps/nestar-api/src/libs/enums/member.enum.ts");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
let MemberUpdate = class MemberUpdate {
};
exports.MemberUpdate = MemberUpdate;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", typeof (_a = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _a : Object)
], MemberUpdate.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => member_enum_1.MemberType, { nullable: true }),
    __metadata("design:type", typeof (_b = typeof member_enum_1.MemberType !== "undefined" && member_enum_1.MemberType) === "function" ? _b : Object)
], MemberUpdate.prototype, "memberType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => member_enum_1.MemberStatus, { nullable: true }),
    __metadata("design:type", typeof (_c = typeof member_enum_1.MemberStatus !== "undefined" && member_enum_1.MemberStatus) === "function" ? _c : Object)
], MemberUpdate.prototype, "memberStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MemberUpdate.prototype, "memberPhone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(3, 12),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MemberUpdate.prototype, "memberNick", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 12),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MemberUpdate.prototype, "memberPassword", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(3, 100),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MemberUpdate.prototype, "memberFullName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MemberUpdate.prototype, "memberImage", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MemberUpdate.prototype, "memberAddress", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(3, 100),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MemberUpdate.prototype, "memberDesc", void 0);
exports.MemberUpdate = MemberUpdate = __decorate([
    (0, graphql_1.InputType)()
], MemberUpdate);


/***/ }),

/***/ "./apps/nestar-api/src/libs/dto/property/property.input.ts":
/*!*****************************************************************!*\
  !*** ./apps/nestar-api/src/libs/dto/property/property.input.ts ***!
  \*****************************************************************/
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllPropertiesInquiry = exports.ALPISearch = exports.AgentPropertiesInquiry = exports.APISearch = exports.PropertiesInquiry = exports.PISearch = exports.PeriodsRange = exports.SquaresRange = exports.PricesRange = exports.PropertyInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const property_enum_1 = __webpack_require__(/*! ../../enums/property.enum */ "./apps/nestar-api/src/libs/enums/property.enum.ts");
const config_1 = __webpack_require__(/*! ../../config */ "./apps/nestar-api/src/libs/config.ts");
const common_enum_1 = __webpack_require__(/*! ../../enums/common.enum */ "./apps/nestar-api/src/libs/enums/common.enum.ts");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
let PropertyInput = class PropertyInput {
};
exports.PropertyInput = PropertyInput;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => property_enum_1.PropertyType),
    __metadata("design:type", typeof (_a = typeof property_enum_1.PropertyType !== "undefined" && property_enum_1.PropertyType) === "function" ? _a : Object)
], PropertyInput.prototype, "propertyType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => property_enum_1.PropertyLocation),
    __metadata("design:type", typeof (_b = typeof property_enum_1.PropertyLocation !== "undefined" && property_enum_1.PropertyLocation) === "function" ? _b : Object)
], PropertyInput.prototype, "propertyLocation", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 100),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PropertyInput.prototype, "propertyAddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 100),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PropertyInput.prototype, "propertyTitle", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], PropertyInput.prototype, "propertyPrice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], PropertyInput.prototype, "propertySquare", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PropertyInput.prototype, "propertyBeds", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PropertyInput.prototype, "propertyRooms", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], PropertyInput.prototype, "propertyImages", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 500),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PropertyInput.prototype, "propertyDesc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PropertyInput.prototype, "propertyBarter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PropertyInput.prototype, "propertyRent", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], PropertyInput.prototype, "constructedAt", void 0);
exports.PropertyInput = PropertyInput = __decorate([
    (0, graphql_1.InputType)()
], PropertyInput);
let PricesRange = class PricesRange {
};
exports.PricesRange = PricesRange;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PricesRange.prototype, "start", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PricesRange.prototype, "end", void 0);
exports.PricesRange = PricesRange = __decorate([
    (0, graphql_1.InputType)()
], PricesRange);
let SquaresRange = class SquaresRange {
};
exports.SquaresRange = SquaresRange;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], SquaresRange.prototype, "start", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], SquaresRange.prototype, "end", void 0);
exports.SquaresRange = SquaresRange = __decorate([
    (0, graphql_1.InputType)()
], SquaresRange);
let PeriodsRange = class PeriodsRange {
};
exports.PeriodsRange = PeriodsRange;
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], PeriodsRange.prototype, "start", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], PeriodsRange.prototype, "end", void 0);
exports.PeriodsRange = PeriodsRange = __decorate([
    (0, graphql_1.InputType)()
], PeriodsRange);
let PISearch = class PISearch {
};
exports.PISearch = PISearch;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", typeof (_f = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _f : Object)
], PISearch.prototype, "memberId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => [property_enum_1.PropertyLocation], { nullable: true }),
    __metadata("design:type", Array)
], PISearch.prototype, "locationList", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => [property_enum_1.PropertyType], { nullable: true }),
    __metadata("design:type", Array)
], PISearch.prototype, "typeList", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => [graphql_1.Int], { nullable: true }),
    __metadata("design:type", Array)
], PISearch.prototype, "roomsList", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => [graphql_1.Int], { nullable: true }),
    __metadata("design:type", Array)
], PISearch.prototype, "bedsList", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(config_1.availableOptions, { each: true }),
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], PISearch.prototype, "options", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => PricesRange, { nullable: true }),
    __metadata("design:type", PricesRange)
], PISearch.prototype, "pricesRange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => PeriodsRange, { nullable: true }),
    __metadata("design:type", PeriodsRange)
], PISearch.prototype, "periodsRange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => SquaresRange, { nullable: true }),
    __metadata("design:type", SquaresRange)
], PISearch.prototype, "squaresRange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PISearch.prototype, "text", void 0);
exports.PISearch = PISearch = __decorate([
    (0, graphql_1.InputType)()
], PISearch);
let PropertiesInquiry = class PropertiesInquiry {
};
exports.PropertiesInquiry = PropertiesInquiry;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PropertiesInquiry.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PropertiesInquiry.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(config_1.availablePropertySorts),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PropertiesInquiry.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => common_enum_1.Direction, { nullable: true }),
    __metadata("design:type", typeof (_g = typeof common_enum_1.Direction !== "undefined" && common_enum_1.Direction) === "function" ? _g : Object)
], PropertiesInquiry.prototype, "direction", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => PISearch),
    __metadata("design:type", PISearch)
], PropertiesInquiry.prototype, "search", void 0);
exports.PropertiesInquiry = PropertiesInquiry = __decorate([
    (0, graphql_1.InputType)()
], PropertiesInquiry);
let APISearch = class APISearch {
};
exports.APISearch = APISearch;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => property_enum_1.PropertyStatus, { nullable: true }),
    __metadata("design:type", typeof (_h = typeof property_enum_1.PropertyStatus !== "undefined" && property_enum_1.PropertyStatus) === "function" ? _h : Object)
], APISearch.prototype, "propertyStatus", void 0);
exports.APISearch = APISearch = __decorate([
    (0, graphql_1.InputType)()
], APISearch);
let AgentPropertiesInquiry = class AgentPropertiesInquiry {
};
exports.AgentPropertiesInquiry = AgentPropertiesInquiry;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AgentPropertiesInquiry.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AgentPropertiesInquiry.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(config_1.availablePropertySorts),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AgentPropertiesInquiry.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => common_enum_1.Direction, { nullable: true }),
    __metadata("design:type", typeof (_j = typeof common_enum_1.Direction !== "undefined" && common_enum_1.Direction) === "function" ? _j : Object)
], AgentPropertiesInquiry.prototype, "direction", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => APISearch),
    __metadata("design:type", APISearch)
], AgentPropertiesInquiry.prototype, "search", void 0);
exports.AgentPropertiesInquiry = AgentPropertiesInquiry = __decorate([
    (0, graphql_1.InputType)()
], AgentPropertiesInquiry);
let ALPISearch = class ALPISearch {
};
exports.ALPISearch = ALPISearch;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => property_enum_1.PropertyStatus, { nullable: true }),
    __metadata("design:type", typeof (_k = typeof property_enum_1.PropertyStatus !== "undefined" && property_enum_1.PropertyStatus) === "function" ? _k : Object)
], ALPISearch.prototype, "propertyStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => [property_enum_1.PropertyLocation], { nullable: true }),
    __metadata("design:type", Array)
], ALPISearch.prototype, "propertyLocationList", void 0);
exports.ALPISearch = ALPISearch = __decorate([
    (0, graphql_1.InputType)()
], ALPISearch);
let AllPropertiesInquiry = class AllPropertiesInquiry {
};
exports.AllPropertiesInquiry = AllPropertiesInquiry;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AllPropertiesInquiry.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AllPropertiesInquiry.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(config_1.availablePropertySorts),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AllPropertiesInquiry.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => common_enum_1.Direction, { nullable: true }),
    __metadata("design:type", typeof (_l = typeof common_enum_1.Direction !== "undefined" && common_enum_1.Direction) === "function" ? _l : Object)
], AllPropertiesInquiry.prototype, "direction", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => ALPISearch),
    __metadata("design:type", ALPISearch)
], AllPropertiesInquiry.prototype, "search", void 0);
exports.AllPropertiesInquiry = AllPropertiesInquiry = __decorate([
    (0, graphql_1.InputType)()
], AllPropertiesInquiry);


/***/ }),

/***/ "./apps/nestar-api/src/libs/dto/property/property.ts":
/*!***********************************************************!*\
  !*** ./apps/nestar-api/src/libs/dto/property/property.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Properties = exports.Property = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const property_enum_1 = __webpack_require__(/*! ../../enums/property.enum */ "./apps/nestar-api/src/libs/enums/property.enum.ts");
const member_1 = __webpack_require__(/*! ../member/member */ "./apps/nestar-api/src/libs/dto/member/member.ts");
let Property = class Property {
};
exports.Property = Property;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", typeof (_a = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _a : Object)
], Property.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => property_enum_1.PropertyType),
    __metadata("design:type", typeof (_b = typeof property_enum_1.PropertyType !== "undefined" && property_enum_1.PropertyType) === "function" ? _b : Object)
], Property.prototype, "propertyType", void 0);
__decorate([
    (0, graphql_1.Field)(() => property_enum_1.PropertyStatus),
    __metadata("design:type", typeof (_c = typeof property_enum_1.PropertyStatus !== "undefined" && property_enum_1.PropertyStatus) === "function" ? _c : Object)
], Property.prototype, "propertyStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => property_enum_1.PropertyLocation),
    __metadata("design:type", typeof (_d = typeof property_enum_1.PropertyLocation !== "undefined" && property_enum_1.PropertyLocation) === "function" ? _d : Object)
], Property.prototype, "propertyLocation", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Property.prototype, "propertyAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Property.prototype, "propertyTitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], Property.prototype, "propertyPrice", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], Property.prototype, "propertySquare", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Property.prototype, "propertyBeds", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Property.prototype, "propertyRooms", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Property.prototype, "propertyViews", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Property.prototype, "propertyLikes", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Property.prototype, "propertyComments", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Property.prototype, "propertyRank", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", String)
], Property.prototype, "propertyImages", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "propertyDesc", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Property.prototype, "propertyBarter", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Property.prototype, "propertyRent", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", typeof (_e = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _e : Object)
], Property.prototype, "memberId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Property.prototype, "soldAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], Property.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", typeof (_h = typeof Date !== "undefined" && Date) === "function" ? _h : Object)
], Property.prototype, "constructedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", typeof (_j = typeof Date !== "undefined" && Date) === "function" ? _j : Object)
], Property.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", typeof (_k = typeof Date !== "undefined" && Date) === "function" ? _k : Object)
], Property.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => member_1.Member, { nullable: true }),
    __metadata("design:type", typeof (_l = typeof member_1.Member !== "undefined" && member_1.Member) === "function" ? _l : Object)
], Property.prototype, "memberData", void 0);
exports.Property = Property = __decorate([
    (0, graphql_1.ObjectType)()
], Property);
let Properties = class Properties {
};
exports.Properties = Properties;
__decorate([
    (0, graphql_1.Field)(() => [Property]),
    __metadata("design:type", Array)
], Properties.prototype, "list", void 0);
__decorate([
    (0, graphql_1.Field)(() => [member_1.TotalCounter], { nullable: true }),
    __metadata("design:type", Array)
], Properties.prototype, "metaCounter", void 0);
exports.Properties = Properties = __decorate([
    (0, graphql_1.ObjectType)()
], Properties);


/***/ }),

/***/ "./apps/nestar-api/src/libs/dto/property/property.update.ts":
/*!******************************************************************!*\
  !*** ./apps/nestar-api/src/libs/dto/property/property.update.ts ***!
  \******************************************************************/
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyUpdate = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const property_enum_1 = __webpack_require__(/*! ../../enums/property.enum */ "./apps/nestar-api/src/libs/enums/property.enum.ts");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
let PropertyUpdate = class PropertyUpdate {
};
exports.PropertyUpdate = PropertyUpdate;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", typeof (_a = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _a : Object)
], PropertyUpdate.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => property_enum_1.PropertyType, { nullable: true }),
    __metadata("design:type", typeof (_b = typeof property_enum_1.PropertyType !== "undefined" && property_enum_1.PropertyType) === "function" ? _b : Object)
], PropertyUpdate.prototype, "propertyType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => property_enum_1.PropertyStatus, { nullable: true }),
    __metadata("design:type", typeof (_c = typeof property_enum_1.PropertyStatus !== "undefined" && property_enum_1.PropertyStatus) === "function" ? _c : Object)
], PropertyUpdate.prototype, "propertyStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => property_enum_1.PropertyLocation, { nullable: true }),
    __metadata("design:type", typeof (_d = typeof property_enum_1.PropertyLocation !== "undefined" && property_enum_1.PropertyLocation) === "function" ? _d : Object)
], PropertyUpdate.prototype, "propertyLocation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(3, 100),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PropertyUpdate.prototype, "propertyAddress", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(3, 100),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PropertyUpdate.prototype, "propertyTitle", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], PropertyUpdate.prototype, "propertyPrice", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], PropertyUpdate.prototype, "propertySquare", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], PropertyUpdate.prototype, "propertyBeds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], PropertyUpdate.prototype, "propertyRooms", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], PropertyUpdate.prototype, "propertyImages", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 500),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PropertyUpdate.prototype, "propertyDesc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PropertyUpdate.prototype, "propertyBarter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PropertyUpdate.prototype, "propertyRent", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], PropertyUpdate.prototype, "constructedAt", void 0);
exports.PropertyUpdate = PropertyUpdate = __decorate([
    (0, graphql_1.InputType)()
], PropertyUpdate);


/***/ }),

/***/ "./apps/nestar-api/src/libs/enums/common.enum.ts":
/*!*******************************************************!*\
  !*** ./apps/nestar-api/src/libs/enums/common.enum.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Direction = exports.Message = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
var Message;
(function (Message) {
    Message["SOMETHING_WENT_WRONG"] = "Something went wrong!";
    Message["NO_DATA_FOUND"] = "No data found!";
    Message["CREATE_FAILED"] = "Create failed!";
    Message["UPDATE_FAILED"] = "Update failed!";
    Message["REMOVE_FAILED"] = "Remove failed!";
    Message["UPLOAD_FAILED"] = "Upload failed!";
    Message["BAD_REQUEST"] = "Bad Request";
    Message["USED_MEMBER_NICK_OR_PHONE"] = "Already used member nick or phone!";
    Message["NO_MEMBER_NICK"] = "No member with that member nick!";
    Message["BLOCKED_USER"] = "You have been blocked!";
    Message["WRONG_PASSWORD"] = "Wrong password, please try again!";
    Message["NOT_AUTHENTICATED"] = "You are not authenticated, Place login first!";
    Message["TOKEN_NOT_EXIT"] = "Bearer Token is not provided!";
    Message["ONLY_SPECIFIC_ROLES_ALLOWED"] = "Allowed only for members with specific roles!";
    Message["NOT_ALLOWED_REQUEST"] = "Not Allowed Request!";
    Message["NOT_ALLOWED_FORMAT"] = "Please provide jpg, jpeg, or png images!";
    Message["PROVIDE_ALLOWED_FORMAT"] = "PROVIDE_ALLOWED_FORMAT";
    Message["SELF_SUBSCRIPTION_DENIED"] = "Self subsecription is denied!";
})(Message || (exports.Message = Message = {}));
var Direction;
(function (Direction) {
    Direction[Direction["ASC"] = 1] = "ASC";
    Direction[Direction["DESC"] = -1] = "DESC";
})(Direction || (exports.Direction = Direction = {}));
(0, graphql_1.registerEnumType)(Direction, {
    name: 'Direction',
});


/***/ }),

/***/ "./apps/nestar-api/src/libs/enums/member.enum.ts":
/*!*******************************************************!*\
  !*** ./apps/nestar-api/src/libs/enums/member.enum.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberAuthType = exports.MemberStatus = exports.MemberType = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
var MemberType;
(function (MemberType) {
    MemberType["USER"] = "USER";
    MemberType["AGENT"] = "AGENT";
    MemberType["ADMIN"] = "ADMIN";
})(MemberType || (exports.MemberType = MemberType = {}));
(0, graphql_1.registerEnumType)(MemberType, { name: 'MemberType' });
var MemberStatus;
(function (MemberStatus) {
    MemberStatus["ACTIVE"] = "ACTIVE";
    MemberStatus["BLOCK"] = "BLOCK";
    MemberStatus["DELETE"] = "DELETE";
})(MemberStatus || (exports.MemberStatus = MemberStatus = {}));
(0, graphql_1.registerEnumType)(MemberStatus, { name: 'MemberStatus' });
var MemberAuthType;
(function (MemberAuthType) {
    MemberAuthType["PHONE"] = "PHONE";
    MemberAuthType["EMAIL"] = "EMAIL";
    MemberAuthType["TELEGRAM"] = "TELEGRAM";
})(MemberAuthType || (exports.MemberAuthType = MemberAuthType = {}));
(0, graphql_1.registerEnumType)(MemberAuthType, { name: 'MemberAuthType' });


/***/ }),

/***/ "./apps/nestar-api/src/libs/enums/property.enum.ts":
/*!*********************************************************!*\
  !*** ./apps/nestar-api/src/libs/enums/property.enum.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyLocation = exports.PropertyStatus = exports.PropertyType = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
var PropertyType;
(function (PropertyType) {
    PropertyType["APARTMENT"] = "APARTMENT";
    PropertyType["VILLA"] = "VILLA";
    PropertyType["HOUSE"] = "HOUSE";
})(PropertyType || (exports.PropertyType = PropertyType = {}));
(0, graphql_1.registerEnumType)(PropertyType, {
    name: 'PropertyType',
});
var PropertyStatus;
(function (PropertyStatus) {
    PropertyStatus["ACTIVE"] = "ACTIVE";
    PropertyStatus["SOLD"] = "SOLD";
    PropertyStatus["DELETE"] = "DELETE";
})(PropertyStatus || (exports.PropertyStatus = PropertyStatus = {}));
(0, graphql_1.registerEnumType)(PropertyStatus, {
    name: 'PropertyStatus',
});
var PropertyLocation;
(function (PropertyLocation) {
    PropertyLocation["SEOUL"] = "SEOUL";
    PropertyLocation["BUSAN"] = "BUSAN";
    PropertyLocation["INCHEON"] = "INCHEON";
    PropertyLocation["DAEGU"] = "DAEGU";
    PropertyLocation["GYEONGJU"] = "GYEONGJU";
    PropertyLocation["GWANGJU"] = "GWANGJU";
    PropertyLocation["CHONJU"] = "CHONJU";
    PropertyLocation["DAEJON"] = "DAEJON";
    PropertyLocation["JEJU"] = "JEJU";
})(PropertyLocation || (exports.PropertyLocation = PropertyLocation = {}));
(0, graphql_1.registerEnumType)(PropertyLocation, {
    name: 'PropertyLocation',
});


/***/ }),

/***/ "./apps/nestar-api/src/libs/enums/view.enum.ts":
/*!*****************************************************!*\
  !*** ./apps/nestar-api/src/libs/enums/view.enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ViewGroup = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
var ViewGroup;
(function (ViewGroup) {
    ViewGroup["MEMBER"] = "MEMBER";
    ViewGroup["ARTICLE"] = "ARTICLE";
    ViewGroup["PROPERTY"] = "PROPERTY";
})(ViewGroup || (exports.ViewGroup = ViewGroup = {}));
(0, graphql_1.registerEnumType)(ViewGroup, {
    name: 'ViewGroup',
});


/***/ }),

/***/ "./apps/nestar-api/src/libs/interceptor/Loggin.interceptor.ts":
/*!********************************************************************!*\
  !*** ./apps/nestar-api/src/libs/interceptor/Loggin.interceptor.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggingInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let LoggingInterceptor = class LoggingInterceptor {
    constructor() {
        this.logger = new common_1.Logger();
    }
    intercept(context, next) {
        const recordTime = Date.now();
        const requestType = context.getType();
        if (requestType === 'http') {
        }
        else if (requestType === 'graphql') {
            const gqlContext = graphql_1.GqlExecutionContext.create(context);
            this.logger.log(`${this.stringify(gqlContext.getContext().req.body)}`, 'REQUEST');
            return next.handle().pipe((0, operators_1.tap)((context) => {
                const responseTime = Date.now() - recordTime;
                this.logger.log(`${this.stringify(context)} - ${responseTime}ms \n\n`, 'RESPONSE');
            }));
        }
    }
    stringify(context) {
        console.log(typeof context);
        return JSON.stringify(context).slice(0, 75);
    }
};
exports.LoggingInterceptor = LoggingInterceptor;
exports.LoggingInterceptor = LoggingInterceptor = __decorate([
    (0, common_1.Injectable)()
], LoggingInterceptor);


/***/ }),

/***/ "./apps/nestar-api/src/schemas/Member.model.ts":
/*!*****************************************************!*\
  !*** ./apps/nestar-api/src/schemas/Member.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const member_enum_1 = __webpack_require__(/*! ../libs/enums/member.enum */ "./apps/nestar-api/src/libs/enums/member.enum.ts");
const MemberSchema = new mongoose_1.Schema({
    memberType: {
        type: String,
        enum: member_enum_1.MemberType,
        default: member_enum_1.MemberType.USER,
    },
    memberStatus: {
        type: String,
        enum: member_enum_1.MemberStatus,
        default: member_enum_1.MemberStatus.ACTIVE,
    },
    memberAuthType: {
        type: String,
        enum: member_enum_1.MemberAuthType,
        default: member_enum_1.MemberAuthType.PHONE,
    },
    memberPhone: {
        type: String,
        index: { unique: true, sparse: true },
        required: true,
    },
    memberNick: {
        type: String,
        index: { unique: true, sparse: true },
        required: true,
    },
    memberPassword: {
        type: String,
        select: false,
        required: true,
    },
    memberFullName: {
        type: String,
    },
    memberImage: {
        type: String,
        default: '',
    },
    memberAddress: {
        type: String,
    },
    memberDesc: {
        type: String,
    },
    memberProperties: {
        type: Number,
        default: 0,
    },
    memberArticles: {
        type: Number,
        default: 0,
    },
    memberFollowers: {
        type: Number,
        default: 0,
    },
    memberFollowings: {
        type: Number,
        default: 0,
    },
    memberPoints: {
        type: Number,
        default: 0,
    },
    memberLikes: {
        type: Number,
        default: 0,
    },
    memberViews: {
        type: Number,
        default: 0,
    },
    memberComments: {
        type: Number,
        default: 0,
    },
    memberRank: {
        type: Number,
        default: 0,
    },
    memberWarnings: {
        type: Number,
        default: 0,
    },
    memberBlocks: {
        type: Number,
        default: 0,
    },
    deletedAt: {
        type: Date,
    },
}, { timestamps: true, collection: 'members' });
exports["default"] = MemberSchema;


/***/ }),

/***/ "./apps/nestar-api/src/schemas/Property.model.ts":
/*!*******************************************************!*\
  !*** ./apps/nestar-api/src/schemas/Property.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const property_enum_1 = __webpack_require__(/*! ../libs/enums/property.enum */ "./apps/nestar-api/src/libs/enums/property.enum.ts");
const PropertySchema = new mongoose_1.Schema({
    propertyType: {
        type: String,
        enum: property_enum_1.PropertyType,
        required: true,
    },
    propertyStatus: {
        type: String,
        enum: property_enum_1.PropertyStatus,
        default: property_enum_1.PropertyStatus.ACTIVE,
    },
    propertyLocation: {
        type: String,
        enum: property_enum_1.PropertyLocation,
        required: true,
    },
    propertyAddress: {
        type: String,
        required: true,
    },
    propertyTitle: {
        type: String,
        required: true,
    },
    propertyPrice: {
        type: Number,
        required: true,
    },
    propertySquare: {
        type: Number,
        required: true,
    },
    propertyBeds: {
        type: Number,
        required: true,
    },
    propertyRooms: {
        type: Number,
        required: true,
    },
    propertyViews: {
        type: Number,
        default: 0,
    },
    propertyLikes: {
        type: Number,
        default: 0,
    },
    propertyComments: {
        type: Number,
        default: 0,
    },
    propertyRank: {
        type: Number,
        default: 0,
    },
    propertyImages: {
        type: [String],
        required: true,
    },
    propertyDesc: {
        type: String,
    },
    propertyBarter: {
        type: Boolean,
        default: false,
    },
    propertyRent: {
        type: Boolean,
        default: false,
    },
    memberId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Member',
    },
    soldAt: {
        type: Date,
    },
    deletedAt: {
        type: Date,
    },
    constructedAt: {
        type: Date,
    },
}, { timestamps: true, collection: 'properties' });
PropertySchema.index({ propertyType: 1, propertyLocation: 1, propertyTitle: 1, propertyPrice: 1 }, { unique: true });
exports["default"] = PropertySchema;


/***/ }),

/***/ "./apps/nestar-api/src/schemas/View.model.ts":
/*!***************************************************!*\
  !*** ./apps/nestar-api/src/schemas/View.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const view_enum_1 = __webpack_require__(/*! ../libs/enums/view.enum */ "./apps/nestar-api/src/libs/enums/view.enum.ts");
const ViewSchema = new mongoose_1.Schema({
    viewGroup: {
        type: String,
        enum: view_enum_1.ViewGroup,
        required: true,
    },
    viewRefId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    memberId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Member',
    },
}, { timestamps: true, collection: 'views' });
ViewSchema.index({ memberId: 1, viewRefId: 1 }, { unique: true });
exports["default"] = ViewSchema;


/***/ }),

/***/ "@nestjs/apollo":
/*!*********************************!*\
  !*** external "@nestjs/apollo" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "bson":
/*!***********************!*\
  !*** external "bson" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("bson");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "graphql-upload":
/*!*********************************!*\
  !*** external "graphql-upload" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("graphql-upload");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/*!*************************************!*\
  !*** ./apps/nestar-api/src/main.ts ***!
  \*************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/nestar-api/src/app.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const Loggin_interceptor_1 = __webpack_require__(/*! ./libs/interceptor/Loggin.interceptor */ "./apps/nestar-api/src/libs/interceptor/Loggin.interceptor.ts");
const graphql_upload_1 = __webpack_require__(/*! graphql-upload */ "graphql-upload");
const express = __webpack_require__(/*! express */ "express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new Loggin_interceptor_1.LoggingInterceptor());
    app.enableCors({ origin: true, credentials: true });
    app.use((0, graphql_upload_1.graphqlUploadExpress)({ maxFileSize: 15000000, maxFiles: 10 }));
    app.use('/uploads', express.static('./uploads'));
    await app.listen(process.env.PORT_API ?? 3000);
}
bootstrap();

})();

/******/ })()
;