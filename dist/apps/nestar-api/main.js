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
        return "GraphQL API Server";
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
        return 'Hello World!';
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
                throw new common_1.BadRequestException(common_enum_1.Message.TOKEN_NOT_EXITS);
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
                throw new common_1.BadRequestException(common_enum_1.Message.TOKEN_NOT_EXITS);
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
let MemberModule = class MemberModule {
};
exports.MemberModule = MemberModule;
exports.MemberModule = MemberModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: "Member", schema: Member_model_1.default }]), auth_module_1.AuthModule
        ],
        providers: [member_resolver_1.MemberResolver, member_service_1.MemberService]
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const member_service_1 = __webpack_require__(/*! ./member.service */ "./apps/nestar-api/src/components/member/member.service.ts");
const member_input_1 = __webpack_require__(/*! ../../libs/dto/member/member.input */ "./apps/nestar-api/src/libs/dto/member/member.input.ts");
const member_1 = __webpack_require__(/*! ../../libs/dto/member/member */ "./apps/nestar-api/src/libs/dto/member/member.ts");
const auth_guard_1 = __webpack_require__(/*! ../auth/guards/auth.guard */ "./apps/nestar-api/src/components/auth/guards/auth.guard.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const authMember_decorator_1 = __webpack_require__(/*! ../auth/decoratots/authMember.decorator */ "./apps/nestar-api/src/components/auth/decoratots/authMember.decorator.ts");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const roles_decorator_1 = __webpack_require__(/*! ../auth/decoratots/roles.decorator */ "./apps/nestar-api/src/components/auth/decoratots/roles.decorator.ts");
const member_enum_1 = __webpack_require__(/*! ../../libs/enums/member.enum */ "./apps/nestar-api/src/libs/enums/member.enum.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/guards/roles.guard */ "./apps/nestar-api/src/components/auth/guards/roles.guard.ts");
const member_update_1 = __webpack_require__(/*! ../../libs/dto/member/member.update */ "./apps/nestar-api/src/libs/dto/member/member.update.ts");
const config_1 = __webpack_require__(/*! ../../libs/config */ "./apps/nestar-api/src/libs/config.ts");
let MemberResolver = class MemberResolver {
    constructor(memberService) {
        this.memberService = memberService;
    }
    async signup(input) {
        console.log('Mutation signup');
        console.log('input', input);
        return this.memberService.signup(input);
    }
    async login(input) {
        console.log('Mutation login');
        return this.memberService.login(input);
    }
    async updateMember(input, memberId) {
        console.log('Mutation updateMember');
        delete input._id;
        return this.memberService.updateMember(memberId, input);
    }
    async getMember(input) {
        console.log('Query getMember');
        const targetId = (0, config_1.shapeIntoMongoObjectId)(input);
        return this.memberService.getMember(targetId);
    }
    async getAllMembersByAdmin() {
        return this.memberService.getAllMembersByAdmin();
    }
    async updateMemberByAdmin() {
        console.log('Mutation updateMemberByAdmin');
        return this.memberService.updateMemberByAdmin();
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
    (0, graphql_1.Mutation)(() => member_1.Member),
    __param(0, (0, graphql_1.Args)("input")),
    __param(1, (0, authMember_decorator_1.AuthMember)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof member_update_1.MemberUpdate !== "undefined" && member_update_1.MemberUpdate) === "function" ? _f : Object, typeof (_g = typeof mongoose_1.ObjectId !== "undefined" && mongoose_1.ObjectId) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], MemberResolver.prototype, "updateMember", null);
__decorate([
    (0, graphql_1.Query)(() => member_1.Member),
    __param(0, (0, graphql_1.Args)("memberId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], MemberResolver.prototype, "getMember", null);
__decorate([
    (0, roles_decorator_1.Roles)(member_enum_1.MemberType.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, graphql_1.Mutation)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], MemberResolver.prototype, "getAllMembersByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], MemberResolver.prototype, "updateMemberByAdmin", null);
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemberService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const member_enum_1 = __webpack_require__(/*! ../../libs/enums/member.enum */ "./apps/nestar-api/src/libs/enums/member.enum.ts");
const common_enum_1 = __webpack_require__(/*! ../../libs/enums/common.enum */ "./apps/nestar-api/src/libs/enums/common.enum.ts");
const auth_service_1 = __webpack_require__(/*! ../auth/auth.service */ "./apps/nestar-api/src/components/auth/auth.service.ts");
let MemberService = class MemberService {
    constructor(memberModel, authService) {
        this.memberModel = memberModel;
        this.authService = authService;
    }
    async signup(input) {
        const result = this.authService.hashPassword(input.memberPassword);
        try {
            const result = await this.memberModel.create(input);
            const accessToken = await this.authService.createToken(result);
            console.log("accessToken", accessToken);
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
        const result = await this.memberModel.findByIdAndUpdate({ _id: memberId,
            memberStatus: member_enum_1.MemberStatus.ACTIVE,
        }, input, { new: true })
            .exec();
        if (!result)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.UPDATE_FAILED);
        result.accessToken = await this.authService.createToken(result);
        return result;
    }
    async getMember(targetId) {
        const search = {
            _id: targetId,
            memberStatus: {
                $in: [member_enum_1.MemberStatus.ACTIVE, member_enum_1.MemberStatus.BLOCK],
            },
        };
        const targetMember = await this.memberModel.findOne(search).exec();
        if (!targetMember)
            throw new common_1.InternalServerErrorException(common_enum_1.Message.NO_DATA_FOUND);
        return targetMember;
    }
    async getAllMembersByAdmin() {
        return 'updateMember executed';
    }
    async updateMemberByAdmin() {
        return 'getMember executed';
    }
};
exports.MemberService = MemberService;
exports.MemberService = MemberService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Member')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
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
let PropertyModule = class PropertyModule {
};
exports.PropertyModule = PropertyModule;
exports.PropertyModule = PropertyModule = __decorate([
    (0, common_1.Module)({})
], PropertyModule);


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
let ViewModule = class ViewModule {
};
exports.ViewModule = ViewModule;
exports.ViewModule = ViewModule = __decorate([
    (0, common_1.Module)({})
], ViewModule);


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
exports.shapeIntoMongoObjectId = void 0;
const bson_1 = __webpack_require__(/*! bson */ "bson");
const shapeIntoMongoObjectId = (target) => {
    return typeof target == "string" ? new bson_1.ObjectId(target) : target;
};
exports.shapeIntoMongoObjectId = shapeIntoMongoObjectId;


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginInput = exports.MemberInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const member_enum_1 = __webpack_require__(/*! ../../enums/member.enum */ "./apps/nestar-api/src/libs/enums/member.enum.ts");
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
exports.Member = void 0;
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
let MemberUpdate = class MemberUpdate {
};
exports.MemberUpdate = MemberUpdate;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", typeof (_a = typeof Object !== "undefined" && Object) === "function" ? _a : Object)
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
], MemberUpdate.prototype, "MemberStatus", void 0);
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
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MemberUpdate.prototype, "memberDesc", void 0);
exports.MemberUpdate = MemberUpdate = __decorate([
    (0, graphql_1.InputType)()
], MemberUpdate);


/***/ }),

/***/ "./apps/nestar-api/src/libs/enums/common.enum.ts":
/*!*******************************************************!*\
  !*** ./apps/nestar-api/src/libs/enums/common.enum.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = void 0;
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
    Message["TOKEN_NOT_EXITS"] = "Bearer Token is not provided!";
    Message["ONLY_SPECIFIC_ROLES_ALLOWED"] = "Allowed only for members with specific roles!";
    Message["NOT_ALLOWED_REQUEST"] = "Not Allowed Request!";
    Message["NOT_ALLOWED_FORMAT"] = "Please provide jpg, jpeg, or png images!";
    Message["SELF_SUBSCRIPTION_DENIED"] = "Self subsecription is denied!";
})(Message || (exports.Message = Message = {}));


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
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new Loggin_interceptor_1.LoggingInterceptor());
    await app.listen(process.env.PORT_API ?? 3000);
}
bootstrap();

})();

/******/ })()
;