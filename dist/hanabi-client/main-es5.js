(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <button class=\"btn btn-primary pull-right\"\n        routerLink=\"/\"><i class=\"fa fa-sign-in\"></i> Login</button>\n</div>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/game/game-options/game-options.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/game/game-options/game-options.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select Game Options</h1>\n<div mat-dialog-content>\n    <mat-form-field>\n        <input matInput placeholder=\"Game Name\" [(ngModel)]=\"gameOptions.gameName\">\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Select Number of Players</mat-label>\n        <mat-select (selectionChange)=\"selectNumPlayers($event)\">\n            <mat-option *ngFor=\"let p of numPlayers\"\n                [value]=\"p\">\n                {{p}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-label>Play Game With Rainbows</mat-label>\n        <mat-select (selectionChange)=\"selectWithRainbows($event)\">\n            <mat-option [value]=\"true\">\n                Yes\n            </mat-option>\n            <mat-option [value]=\"false\">\n                No\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button\n        color=\"primary\"\n        (click)=\"create()\">Create</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/game/game.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/game/game.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h2>Game Information</h2>\n            </div>\n            <div class=\"col-md-3\">\n                <button *ngIf=\"playerId\"\n                    class=\"btn btn-danger\"\n                    (click)=\"delete()\"><i class=\"fa fa-trash\"></i> Delete Game</button>\n                <button *ngIf=\"!playerId\"\n                    class=\"btn btn-warning\"\n                    (click)=\"delete()\"\n                    disabled><i class=\"fa fa-eye\"></i> Spectating</button>\n            </div>\n            <div class=\"col-md-2\">\n                <button *ngIf=\"userId\"\n                    class=\"btn btn-primary\"\n                    routerLink=\"/user/{{userId}}\"><i class=\"fa fa-list\"></i> My Games</button>\n                <button *ngIf=\"!userId\"\n                    class=\"btn btn-primary\"\n                    routerLink=\"/\"><i class=\"fa fa-sign-in\"></i> Sign In</button>\n            </div>\n            <div class=\"col-md-3\">\n                <button class=\"btn btn-primary pull-right\"\n                    routerLink=\"/game\"><i class=\"fa fa-home\"></i> Home</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <b>Game Name: {{game.name}}</b>\n            </div>\n            <div class=\"col-md-4\">\n                <b>Number of Errors Left: {{game.num_errors}}</b>\n            </div>\n            <div class=\"col-md-4\">\n                <b>Number of Hints Left: {{game.num_hints}}</b>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <mat-grid-list cols=\"2\"\n            rowHeight=\"2:1\">\n            <mat-grid-tile *ngFor=\"let player of game.players; let i=index;\"\n                [style.background]=\"bgs[i]\">\n                <mat-grid-tile-header>{{player.name}} | {{player.id}}</mat-grid-tile-header>\n                <div class=\"row\">\n                    <mat-card *ngFor=\"let piece of player.pieces\"\n                        [ngClass]=\"{\n                    'blue': piece.color == 'blue',\n                    'green': piece.color == 'green',\n                    'yellow': piece.color == 'yellow',\n                    'white': piece.color == 'white',\n                    'red': piece.color == 'red',\n                    'rainbow': piece.color == 'rainbow'\n                }\">\n                        <mat-card-content>\n                            <h2>{{piece.num_fireworks}}</h2>\n                        </mat-card-content>\n                    </mat-card>\n                </div>\n                <mat-grid-tile-footer>\n                    <button *ngIf=\"playerId\"\n                        mat-raised-button\n                        (click)=\"giveHint(player)\">Give Hint</button>\n                </mat-grid-tile-footer>\n            </mat-grid-tile>\n        </mat-grid-list>\n\n\n        <app-player *ngIf=\"playerId\"\n            [playerId]=\"playerId\"\n            [gameId]=\"game?.id\"\n            [changed]=\"changed\"></app-player>\n        <mat-grid-list cols=\"2\"\n            rowHeight=\"10:11\">\n            <mat-grid-tile [style.background]=\"'lightgrey'\">\n                <mat-grid-tile-header>Played Pieces</mat-grid-tile-header>\n                <div class=\"row overflow\">\n                    <div *ngFor=\"let piece of game.played_pieces\">\n                        <mat-card [ngClass]=\"{\n                        'blue': piece.color == 'blue',\n                        'green': piece.color == 'green',\n                        'yellow': piece.color == 'yellow',\n                        'white': piece.color == 'white',\n                        'red': piece.color == 'red',\n                        'rainbow': piece.color == 'rainbow'\n                    }\">\n                            <mat-card-content>\n                                <h2>{{piece.num_fireworks}}</h2>\n                            </mat-card-content>\n                        </mat-card>\n                    </div>\n                </div>\n            </mat-grid-tile>\n            <mat-grid-tile [style.background]=\"'lightgrey'\">\n                <mat-grid-tile-header>Binned Pieces</mat-grid-tile-header>\n                <div class=\"row overflow\">\n                    <div *ngFor=\"let piece of game.binned_pieces\">\n                        <mat-card [ngClass]=\"{\n                        'blue': piece.color == 'blue',\n                        'green': piece.color == 'green',\n                        'yellow': piece.color == 'yellow',\n                        'white': piece.color == 'white',\n                        'red': piece.color == 'red',\n                        'rainbow': piece.color == 'rainbow'\n                    }\">\n                            <mat-card-content>\n                                <h2>{{piece.num_fireworks}}</h2>\n                            </mat-card-content>\n                        </mat-card>\n                    </div>\n                </div>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/game/games/games.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/game/games/games.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-5\">\n            <h1>Hanabi Games</h1>\n        </div>\n        <div class=\"col-md-3\">\n            <button class=\"btn btn-primary\"\n                (click)=\"createGame()\"><i class=\"fa fa-edit\"></i>New Game!</button>\n        </div>\n    </div>\n    <div class=\"row cards\">\n        <div class=\"col-md-12\">\n            <ul *ngIf=\"games\"\n                class=\"list-group\">\n                <li *ngFor=\"let game of games\"\n                    [ngClass]=\"{'not_started': game.turn == 0, 'has_started': game.turn > 0, 'has_finished': game.has_finished > 0, 'list-group-item': true}\">\n                    <div *ngIf=\"game.owner[0]._id != userId\">\n                        <b>Spectate</b>: <a routerLink=\"/game/{{game.game_id}}\">{{game.game_name}}</a>\n                    </div>\n                    <div *ngIf=\"playerInGame(game)\">\n                        <b>Continue Game</b>: <a routerLink=\"/game/{{game.game_id}}/{{playerInGame(game)}}\">{{game.game_name}}</a>\n                    </div>\n                    &nbsp;\n                    <b>Owner</b>: <a routerLink=\"/user/{{game?.owner[0]._id}}\">{{game?.owner[0].name}}</a>\n                    &nbsp;\n                    <b>Players</b>: <a class=\"link\"\n                        [ngbPopover]=\"popContent\"\n                        placement=\"right\">{{game.num_players}}</a>\n\n                    <ng-template #popContent>\n                        <button class=\"btn btn-primary\"\n                            (click)=\"joinGame(game)\">Join Game</button>\n                    </ng-template>\n                </li>\n            </ul>\n            <div *ngIf=\"games.length == 0\">\n                <b>\n                    There are currently no active games.\n                </b>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/game/give-hint/give-hint.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/game/give-hint/give-hint.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Give hint to {{data.player.name}}</h1>\n<div mat-dialog-content>\n    <mat-form-field *ngIf=\"tellingColor\">\n        <mat-label>Pick Color</mat-label>\n        <mat-select (selectionChange)=\"select($event)\">\n            <mat-option *ngFor=\"let col of getUniqueNonRainbows(data.player.pieces)\"\n                [value]=\"col\">\n                {{col}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field *ngIf=\"tellingNumber\">\n        <mat-label>Pick Number</mat-label>\n        <mat-select (selectionChange)=\"select($event)\">\n            <mat-option *ngFor=\"let num of getUniqueNumbers(data.player.pieces)\"\n                [value]=\"num\">\n                {{num}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n    <div *ngIf=\"!tellingColor || !tellingNumber\">\n        Do you want to tell color or number?\n    </div>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button\n        color=\"primary\"\n        (click)=\"tellColor()\">Color</button>\n    <button mat-raised-button\n        color=\"primary\"\n        (click)=\"tellNumber()\">Number</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"login\">\n    <div class=\"container\">\n\n        <form #loginForm=\"ngForm\"\n            class=\"form-signin\">\n            <h2 class=\"form-signin-heading\">Please sign in</h2>\n            <small class=\"text-muted\">If you do not already have an account one will be created for you.</small>\n\n            <label for=\"inputUser\"\n                class=\"sr-only\">Username</label>\n            <input [(ngModel)]=\"username\"\n                name=\"username\"\n                class=\"form-control\"\n                placeholder=\"Enter a username...\"\n                required\n                autofocus>\n            <button class=\"btn btn-lg btn-primary btn-block\"\n                name=\"sign_in\"\n                type=\"submit\"\n                [disabled]=\"!loginForm.valid\"\n                (click)=\"login()\">Sign in</button>\n        </form>\n\n    </div>\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/player/piece-action/piece-action.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/player/piece-action/piece-action.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Play or Remove Piece</h1>\n<div mat-dialog-actions>\n    <button mat-raised-button\n        color=\"primary\"\n        (click)=\"play()\">Play</button>\n        <button mat-raised-button\n            color=\"primary\"\n            (click)=\"remove()\">Remove</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/player/player.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/player/player.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\"\n    rowHeight=\"4:1\">\n    <mat-grid-tile [style.background]=\"'grey'\">\n        <mat-grid-tile-header>{{player.name}} | {{player.id}}</mat-grid-tile-header>\n        <mat-card *ngFor=\"let piece of player.pieces\"\n            [ngClass]=\"{\n            'blue': (piece.color == 'blue' || piece.altcolor == 'blue') && piece.player_has_color,\n            'green': (piece.color == 'green' || piece.altcolor == 'green') && piece.player_has_color,\n            'yellow': (piece.color == 'yellow' || piece.altcolor == 'yellow') && piece.player_has_color,\n            'white': (piece.color == 'white' || piece.altcolor == 'white') && piece.player_has_color,\n            'red': (piece.color == 'red' || piece.altcolor == 'red') && piece.player_has_color\n            }\"\n            (click)=\"actionOnPiece(piece)\">\n            <mat-card-content>\n                <h2 *ngIf=\"piece.player_has_number\">{{piece.num_fireworks}}</h2>\n                <h2 *ngIf=\"!piece.player_has_number\">*</h2>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/user/user.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/user/user.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h1>{{user?.name}}</h1>\n        </div>\n        <div class=\"col-md-6\">\n            <button class=\"btn btn-primary pull-right\"\n                routerLink=\"/game\"><i class=\"fa fa-home\"></i> Home</button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n            <h2>Players Current Games</h2>\n            <ul *ngIf=\"usersGames.length > 0\"\n                class=\"list-group\">\n                <li *ngFor=\"let game of usersGames\"\n                    [ngClass]=\"{'not_started': game.game.turn == 0, 'has_started': game.game.turn > 0, 'has_finished': game.has_finished > 0, 'list-group-item': true}\">\n                    <div class=\"row\">\n                        <div *ngIf=\"userId != user._id\"\n                            class=\"col-md-4\">\n                            <b>Game</b>: <a routerLink=\"/game/{{game.game._id}}\">{{game.game.name}}</a>\n                        </div>\n                        <div *ngIf=\"userId == user._id\"\n                            class=\"col-md-4\">\n                            <b>Continue Game</b>: <a\n                                routerLink=\"/game/{{game.game._id}}/{{game.player_id}}\">{{game.game.name}}</a>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <b>Players</b>: <a class=\"link\"\n                                [ngbPopover]=\"popContent\"\n                                placement=\"right\">{{game.game.players.length}}</a>\n                        </div>\n                        <div class=\"col-md-4 pull-right\">\n                            <i *ngIf=\"game.owns\"\n                                matTooltip=\"{{user?.name}} is the owner of this game\"\n                                class=\"fa fa-key pull-right\"></i>\n                        </div>\n\n                        <ng-template #popContent>\n                            <button class=\"btn btn-primary\"\n                                (click)=\"joinGame(game)\"\n                                [disabled]=\"game.owns\">Join Game</button>\n                        </ng-template>\n                    </div>\n                </li>\n            </ul>\n            <div *ngIf=\"usersGames.length == 0\">\n                <b>\n                    {{user?.name}} is not currently part of any games.\n                </b>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_components_game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/game/game.component */ "./src/app/core/components/game/game.component.ts");
/* harmony import */ var _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/login/login.component */ "./src/app/core/components/login/login.component.ts");
/* harmony import */ var _core_components_game_games_games_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/game/games/games.component */ "./src/app/core/components/game/games/games.component.ts");
/* harmony import */ var _core_components_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/user/user.component */ "./src/app/core/components/user/user.component.ts");







var routes = [
    { path: 'game', component: _core_components_game_games_games_component__WEBPACK_IMPORTED_MODULE_5__["GamesComponent"] },
    { path: 'user/:id', component: _core_components_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"] },
    { path: 'game/:id/:playerId', component: _core_components_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"] },
    { path: 'game/:id', component: _core_components_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"] },
    { path: '**', component: _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXBoZXkxL0RvY3VtZW50cy9wcm9qZWN0cy9oYW5hYmkvaGFuYWJpLWNsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hanabi-client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _core_services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/game.service */ "./src/app/core/services/game.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _core_components_game_game_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/game/game.module */ "./src/app/core/components/game/game.module.ts");
/* harmony import */ var _core_services_player_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/services/player.service */ "./src/app/core/services/player.service.ts");
/* harmony import */ var _core_components_login_login_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/components/login/login.module */ "./src/app/core/components/login/login.module.ts");
/* harmony import */ var _core_components_game_games_games_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/components/game/games/games.module */ "./src/app/core/components/game/games/games.module.ts");
/* harmony import */ var _core_components_user_user_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/components/user/user.module */ "./src/app/core/components/user/user.module.ts");

















var config = { url: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl, options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__["SocketIoModule"].forRoot(config),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                _core_components_game_game_module__WEBPACK_IMPORTED_MODULE_12__["GameModule"],
                _core_components_game_games_games_module__WEBPACK_IMPORTED_MODULE_15__["GamesModule"],
                _core_components_user_user_module__WEBPACK_IMPORTED_MODULE_16__["UserModule"],
                _core_components_login_login_module__WEBPACK_IMPORTED_MODULE_14__["LoginModule"]
            ],
            providers: [
                _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
                _core_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"],
                _core_services_player_service__WEBPACK_IMPORTED_MODULE_13__["PlayerService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var AppService = /** @class */ (function () {
    function AppService(http, socket) {
        this.http = http;
        this.socket = socket;
        this.loadingWatcher = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
    }
    /**
     * returns a url to stream with an appended token
     * @param url the url
     * @needs [functions] http.get
     * @returns Observable<Blob>
     */
    AppService.prototype.getBlob = function (url) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/' + url, { responseType: 'blob' });
    };
    /**
     * sends an http get request to the provided url
     * @param url the url to get
     * @needs [functions] http.get, loadingWatcher.next
     * @returns Observable<any> (should have a list of objects in the response)
     */
    AppService.prototype.get = function (url) {
        var _this = this;
        this.loadingWatcher.next(true);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/' + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            _this.loadingWatcher.next(false);
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            _this.loadingWatcher.next(false);
            throw (err);
        }));
    };
    /**
     * sends an http put request to the provided url with the object in the body of the request
     * @param url the url to get
     * @param obj the object to update
     * @needs [functions] http.put, loadingWatcher.next
     * @returns Observable<any> (should have the object updated in the response)
     */
    AppService.prototype.put = function (url, obj) {
        var _this = this;
        if (obj === void 0) { obj = {}; }
        this.loadingWatcher.next(true);
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/' + url, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            _this.loadingWatcher.next(false);
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            _this.loadingWatcher.next(false);
            throw (err);
        }));
    };
    /**
     * sends an http post request to the provided url with the object in the body of the request
     * @param url the url to get
     * @param obj the object to update
     * @needs [functions] http.post, loadingWatcher.next
     * @returns Observable<any> (should have the object created in the response)
     */
    AppService.prototype.post = function (url, obj) {
        var _this = this;
        this.loadingWatcher.next(true);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/' + url, obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            _this.loadingWatcher.next(false);
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            _this.loadingWatcher.next(false);
            throw (err);
        }));
    };
    /**
     * sends an http delete request to the provided url
     * @param url the url to delete
     * @needs [functions] http.delete, loadingWatcher.next
     * @returns Observable<any> (should have the object deleted in the response)
     */
    AppService.prototype.delete = function (url) {
        var _this = this;
        this.loadingWatcher.next(true);
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/' + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            _this.loadingWatcher.next(false);
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            _this.loadingWatcher.next(false);
            throw (err);
        }));
    };
    /**
     * retrieves a local file (typically used for json data)
     * @param url the url to get (should be a local file)
     * @needs [functions] http.get
     */
    AppService.prototype.retrieveLocalFile = function (url) {
        return this.http.get(url);
    };
    /**
     * Emits message and data to server.
     * @param eventName message to emit to server.
     * @param data data to emit to server.
     * @emits socket
     */
    AppService.prototype.emitToServer = function (eventName, data) {
        this.socket.emit(eventName, data);
    };
    /**
     * Receives message and data from server.
     * @param message message from server.
     * @needs [functions] socket.on
     * @returns Observable<any> (with the data in the emission)
     */
    AppService.prototype.onMessage = function (message) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.socket.on(message, function (data) {
                observer.next(data);
            });
        });
    };
    AppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }
    ]; };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/core/components/game/game-options/game-options.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/components/game/game-options/game-options.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9nYW1lL2dhbWUtb3B0aW9ucy9nYW1lLW9wdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/game/game-options/game-options.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/components/game/game-options/game-options.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GameOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOptionsComponent", function() { return GameOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var GameOptionsComponent = /** @class */ (function () {
    function GameOptionsComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.gameOptions = {
            numPlayers: 3,
            withRainbows: false,
            gameName: null,
            userId: localStorage.getItem('user_id')
        };
        this.numPlayers = [2, 3, 4, 5, 6, 7];
    }
    GameOptionsComponent.prototype.ngOnInit = function () {
    };
    GameOptionsComponent.prototype.selectNumPlayers = function (event) {
        this.gameOptions.numPlayers = event.value;
    };
    GameOptionsComponent.prototype.selectWithRainbows = function (event) {
        this.gameOptions.withRainbows = event.value;
    };
    GameOptionsComponent.prototype.create = function () {
        console.log(this.gameOptions);
        this.dialogRef.close(this.gameOptions);
    };
    GameOptionsComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    GameOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-options',
            template: __webpack_require__(/*! raw-loader!./game-options.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/game/game-options/game-options.component.html"),
            styles: [__webpack_require__(/*! ./game-options.component.scss */ "./src/app/core/components/game/game-options/game-options.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], GameOptionsComponent);
    return GameOptionsComponent;
}());



/***/ }),

/***/ "./src/app/core/components/game/game.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/components/game/game.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXBoZXkxL0RvY3VtZW50cy9wcm9qZWN0cy9oYW5hYmkvaGFuYWJpLWNsaWVudC9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn0iLCJtYXQtY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/game/game.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/game/game.component.ts ***!
  \********************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/core/services/game.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _give_hint_give_hint_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./give-hint/give-hint.component */ "./src/app/core/components/game/give-hint/give-hint.component.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/core/services/player.service.ts");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");









var GameComponent = /** @class */ (function () {
    function GameComponent(activeRoute, router, gameService, playerService, appService, dialog, toastr) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.gameService = gameService;
        this.playerService = playerService;
        this.appService = appService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.bgs = ['lightblue', 'lightgreen', 'lightpink', '#DDBDF1'];
        this.game = {};
        this.gameUpdatedSub = null;
        this.changed = false;
        this.userId = localStorage.getItem('user_id');
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.getGame(params.id);
            _this.playerId = params.playerId;
            _this.gameId = params.id;
        });
        this.gameUpdated();
    };
    GameComponent.prototype.getGame = function (gameId) {
        var _this = this;
        this.game.id = gameId;
        this.gameService.getGame(gameId).subscribe(function (gameState) {
            _this.removePlayerFromGameState(gameState);
            _this.game = gameState;
            _this.game.id = _this.gameId;
        }, function (err) {
            _this.router.navigate(['']);
        });
    };
    GameComponent.prototype.gameUpdated = function () {
        var _this = this;
        this.gameUpdatedSub = this.appService.onMessage('game_updated').subscribe(function (res) {
            if (res.id === _this.game.id) {
                _this.removePlayerFromGameState(res.game);
                _this.game = res.game;
                _this.game.id = _this.gameId;
                _this.changed = !_this.changed;
            }
        });
    };
    GameComponent.prototype.removePlayerFromGameState = function (gameState) {
        var _this = this;
        gameState.players.forEach(function (pl, i) {
            if (pl.id === Number(_this.playerId)) {
                gameState.players.splice(i, 1);
            }
        });
    };
    GameComponent.prototype.giveHint = function (player) {
        var _this = this;
        var dialogRef = this.dialog.open(_give_hint_give_hint_component__WEBPACK_IMPORTED_MODULE_5__["GiveHintComponent"], {
            width: '250px',
            data: { player: player }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.playerService.notify({ playerId: _this.playerId, affected_player: player.id, hint: result }, _this.game.id).subscribe(function (res) {
                    _this.getGame(_this.game.id);
                }, function (err) {
                    _this.toastr.error(err.error.message);
                });
            }
        });
    };
    GameComponent.prototype.delete = function () {
        var _this = this;
        this.gameService.deleteGame(this.game.id).subscribe(function (res) {
            _this.router.navigate(['/']);
        });
    };
    GameComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
        { type: _services_player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"] },
        { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }
    ]; };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.scss */ "./src/app/core/components/game/game.component.scss")]
        })
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/core/components/game/game.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/components/game/game.module.ts ***!
  \*****************************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.component */ "./src/app/core/components/game/game.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _player_player_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../player/player.module */ "./src/app/core/components/player/player.module.ts");
/* harmony import */ var _give_hint_give_hint_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./give-hint/give-hint.component */ "./src/app/core/components/game/give-hint/give-hint.component.ts");
/* harmony import */ var _game_options_game_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-options/game-options.component */ "./src/app/core/components/game/game-options/game-options.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], _give_hint_give_hint_component__WEBPACK_IMPORTED_MODULE_6__["GiveHintComponent"], _game_options_game_options_component__WEBPACK_IMPORTED_MODULE_7__["GameOptionsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _player_player_module__WEBPACK_IMPORTED_MODULE_5__["PlayerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]
            ],
            exports: [_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]],
            entryComponents: [_give_hint_give_hint_component__WEBPACK_IMPORTED_MODULE_6__["GiveHintComponent"], _game_options_game_options_component__WEBPACK_IMPORTED_MODULE_7__["GameOptionsComponent"]]
        })
    ], GameModule);
    return GameModule;
}());



/***/ }),

/***/ "./src/app/core/components/game/games/games.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/components/game/games/games.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXBoZXkxL0RvY3VtZW50cy9wcm9qZWN0cy9oYW5hYmkvaGFuYWJpLWNsaWVudC9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9nYW1lL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZ2FtZS9nYW1lcy9nYW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZ2FtZS9nYW1lcy9nYW1lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDsgXG59IiwiLmNhcmRzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/game/games/games.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/components/game/games/games.component.ts ***!
  \***************************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/meta.service */ "./src/app/core/services/meta.service.ts");
/* harmony import */ var _game_options_game_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-options/game-options.component */ "./src/app/core/components/game/game-options/game-options.component.ts");
/* harmony import */ var src_app_core_services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/game.service */ "./src/app/core/services/game.service.ts");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");










var GamesComponent = /** @class */ (function () {
    function GamesComponent(metaService, gameService, appService, router, dialog, userService, toastr) {
        this.metaService = metaService;
        this.gameService = gameService;
        this.appService = appService;
        this.router = router;
        this.dialog = dialog;
        this.userService = userService;
        this.toastr = toastr;
        this.games = [];
        this.gameCreatedSub = null;
        this.userId = localStorage.getItem('user_id');
    }
    GamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metaService.getGames().subscribe(function (res) {
            _this.games = res;
        });
        this.getGameMessages();
    };
    GamesComponent.prototype.getGameMessages = function () {
        var _this = this;
        this.gameCreatedSub = this.appService.onMessage('game_created').subscribe(function (res) {
            _this.games.push(res);
        });
    };
    GamesComponent.prototype.getGames = function () {
        var _this = this;
        this.gameService.getAll().subscribe(function (games) {
            _this.games = games;
        });
    };
    GamesComponent.prototype.playerInGame = function (game) {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](game.players.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 2), i = _d[0], player = _d[1];
                if (player._id === this.userId) {
                    return i;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    GamesComponent.prototype.createGame = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_game_options_game_options_component__WEBPACK_IMPORTED_MODULE_3__["GameOptionsComponent"], {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.gameService.createGame(result.numPlayers, result.userId, result.withRainbows, result.gameName).subscribe(function (gameId) {
                    _this.router.navigate(['/game/' + gameId + '/0']);
                }, function (err) {
                    _this.toastr.error('Must be signed in to create game.');
                });
            }
        });
    };
    GamesComponent.prototype.navToGame = function (event) {
        var playerId = 0;
        this.router.navigate(['game/' + event.value + '/' + playerId]);
    };
    GamesComponent.prototype.joinGame = function (game) {
        var _this = this;
        this.userService.joinGame(localStorage.getItem('user_id'), game._id).subscribe(function (res) {
            _this.toastr.success('You were successfully added to the game.');
            _this.router.navigate(['/game/' + game.game_id + '/' + game.players.length]);
        }, function (err) {
            console.log('here');
            _this.toastr.error(err.error.message);
        });
    };
    GamesComponent.ctorParameters = function () { return [
        { type: src_app_core_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"] },
        { type: src_app_core_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] },
        { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }
    ]; };
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! raw-loader!./games.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/game/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.scss */ "./src/app/core/components/game/games/games.component.scss")]
        })
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/core/components/game/games/games.module.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/game/games/games.module.ts ***!
  \************************************************************/
/*! exports provided: GamesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesModule", function() { return GamesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games.component */ "./src/app/core/components/game/games/games.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var GamesModule = /** @class */ (function () {
    function GamesModule() {
    }
    GamesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_games_component__WEBPACK_IMPORTED_MODULE_3__["GamesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ]
        })
    ], GamesModule);
    return GamesModule;
}());



/***/ }),

/***/ "./src/app/core/components/game/give-hint/give-hint.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/core/components/game/give-hint/give-hint.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9nYW1lL2dpdmUtaGludC9naXZlLWhpbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/game/give-hint/give-hint.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/components/game/give-hint/give-hint.component.ts ***!
  \***********************************************************************/
/*! exports provided: GiveHintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiveHintComponent", function() { return GiveHintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var GiveHintComponent = /** @class */ (function () {
    function GiveHintComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.tellingColor = false;
        this.tellingNumber = false;
    }
    GiveHintComponent.prototype.ngOnInit = function () {
    };
    GiveHintComponent.prototype.getUniqueNonRainbows = function (pieces) {
        var ps = [];
        pieces.forEach(function (p) {
            if (p.color !== 'rainbow') {
                if (ps.indexOf(p.color) === -1) {
                    ps.push(p.color);
                }
            }
            else {
                ps = ['green', 'yellow', 'blue', 'red', 'white'];
            }
        });
        return ps;
    };
    GiveHintComponent.prototype.getUniqueNumbers = function (pieces) {
        var ps = [];
        pieces.forEach(function (p) {
            if (ps.indexOf(p.num_fireworks) === -1) {
                ps.push(p.num_fireworks);
            }
        });
        return ps;
    };
    GiveHintComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GiveHintComponent.prototype.tellColor = function () {
        this.tellingColor = true;
        this.tellingNumber = false;
    };
    GiveHintComponent.prototype.tellNumber = function () {
        this.tellingColor = false;
        this.tellingNumber = true;
    };
    GiveHintComponent.prototype.select = function (event) {
        this.dialogRef.close(event.value);
    };
    GiveHintComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    GiveHintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-give-hint',
            template: __webpack_require__(/*! raw-loader!./give-hint.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/game/give-hint/give-hint.component.html"),
            styles: [__webpack_require__(/*! ./give-hint.component.scss */ "./src/app/core/components/game/give-hint/give-hint.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], GiveHintComponent);
    return GiveHintComponent;
}());



/***/ }),

/***/ "./src/app/core/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/core/components/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  padding-top: 40px;\n}\n\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n\n.form-signin .checkbox {\n  font-weight: normal;\n}\n\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXBoZXkxL0RvY3VtZW50cy9wcm9qZWN0cy9oYW5hYmkvaGFuYWJpLWNsaWVudC9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDRTs7RUFFRSxtQkFBQTtBQ0VKOztBREFFO0VBQ0UsbUJBQUE7QUNHSjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUVRLHNCQUFBO0VBQ1IsYUFBQTtFQUNBLGVBQUE7QUNJSjs7QURGRTtFQUNFLFVBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gIH1cbiAgXG4gIC5mb3JtLXNpZ25pbiB7XG4gICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZyxcbiAgLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgIiwiLmxvZ2luIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tc2lnbmluLWhlYWRpbmcsXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, toastr, router) {
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.getUserByName(this.username).subscribe(function (res) {
            _this.toastr.success('Successfully logged you in.');
            localStorage.setItem('user_id', res._id);
            _this.navigate(res);
        }, function (err) {
            console.log(err);
            _this.createUser();
        });
    };
    LoginComponent.prototype.createUser = function () {
        var _this = this;
        this.userService.createUser(this.username).subscribe(function (res) {
            localStorage.setItem('user_id', res);
            _this.toastr.success('Successfully created user.');
            _this.router.navigate(['/game']);
        }, function (err) {
            _this.toastr.error(err.error.message);
        });
    };
    LoginComponent.prototype.navigate = function (user) {
        if (user.owns.length > 0) {
            var gameId = user.owns[user.owns.length - 1].game;
            var playerId = user.owns[user.owns.length - 1].player_id;
            this.router.navigate(['/game/' + gameId + '/' + playerId]);
        }
        else if (user.games.length > 0) {
            var gameId = user.games[user.games.length - 1].game;
            var playerId = user.games[user.games.length - 1].player_id;
            this.router.navigate(['/game/' + gameId + '/' + playerId]);
        }
        else {
            this.router.navigate(['/game']);
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/core/components/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/components/login/login.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/components/login/login.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/core/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/core/components/player/piece-action/piece-action.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/core/components/player/piece-action/piece-action.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wbGF5ZXIvcGllY2UtYWN0aW9uL3BpZWNlLWFjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/components/player/piece-action/piece-action.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/components/player/piece-action/piece-action.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PieceActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceActionComponent", function() { return PieceActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var PieceActionComponent = /** @class */ (function () {
    function PieceActionComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PieceActionComponent.prototype.ngOnInit = function () {
    };
    PieceActionComponent.prototype.play = function () {
        this.dialogRef.close('play');
    };
    PieceActionComponent.prototype.remove = function () {
        this.dialogRef.close('discard');
    };
    PieceActionComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    PieceActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-piece-action',
            template: __webpack_require__(/*! raw-loader!./piece-action.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/player/piece-action/piece-action.component.html"),
            styles: [__webpack_require__(/*! ./piece-action.component.scss */ "./src/app/core/components/player/piece-action/piece-action.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], PieceActionComponent);
    return PieceActionComponent;
}());



/***/ }),

/***/ "./src/app/core/components/player/player.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/player/player.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXBoZXkxL0RvY3VtZW50cy9wcm9qZWN0cy9oYW5hYmkvaGFuYWJpLWNsaWVudC9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcGxheWVyL3BsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcGxheWVyL3BsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn0iLCJtYXQtY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/player/player.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/player/player.component.ts ***!
  \************************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/core/services/player.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _piece_action_piece_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./piece-action/piece-action.component */ "./src/app/core/components/player/piece-action/piece-action.component.ts");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_piece_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/piece.service */ "./src/app/core/services/piece.service.ts");








var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(playerService, appService, pieceService, dialog, toastr) {
        this.playerService = playerService;
        this.appService = appService;
        this.pieceService = pieceService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.player = {};
        this.playerUpdatedSub = null;
    }
    PlayerComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.playerService.getPlayer(this.playerId, this.gameId).subscribe(function (player) {
            _this.player = player;
        }, function (err) {
            _this.toastr.error(err.error.message);
        });
        this.getPlayerMessages();
    };
    PlayerComponent.prototype.getPlayerMessages = function () {
        var _this = this;
        this.playerUpdatedSub = this.appService.onMessage('player_updated').subscribe(function (res) {
            if (_this.player.id === res.player.id) {
                _this.player = res.player;
                _this.toastr.info('Player ' + res.acting_player + ' gave you a hint.');
            }
        });
    };
    PlayerComponent.prototype.actionOnPiece = function (piece) {
        var _this = this;
        var dialogRef = this.dialog.open(_piece_action_piece_action_component__WEBPACK_IMPORTED_MODULE_4__["PieceActionComponent"], {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.pieceService.actionOnPiece(_this.gameId, piece.id, _this.playerId, result).subscribe(function (res) {
                    if (res.toLowerCase().includes('successfully')) {
                        _this.toastr.success(res);
                    }
                    else {
                        _this.toastr.error(res);
                    }
                }, function (err) {
                    console.log(err);
                    _this.toastr.error(err.error.message);
                });
            }
        });
    };
    PlayerComponent.ctorParameters = function () { return [
        { type: _services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] },
        { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _services_piece_service__WEBPACK_IMPORTED_MODULE_7__["PieceService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PlayerComponent.prototype, "playerId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PlayerComponent.prototype, "gameId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PlayerComponent.prototype, "changed", void 0);
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/core/components/player/player.component.scss")]
        })
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/core/components/player/player.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/components/player/player.module.ts ***!
  \*********************************************************/
/*! exports provided: PlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModule", function() { return PlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.component */ "./src/app/core/components/player/player.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _piece_action_piece_action_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piece-action/piece-action.component */ "./src/app/core/components/player/piece-action/piece-action.component.ts");






var PlayerModule = /** @class */ (function () {
    function PlayerModule() {
    }
    PlayerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"], _piece_action_piece_action_component__WEBPACK_IMPORTED_MODULE_5__["PieceActionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            exports: [_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"]],
            entryComponents: [_piece_action_piece_action_component__WEBPACK_IMPORTED_MODULE_5__["PieceActionComponent"]]
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ }),

/***/ "./src/app/core/components/user/user.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/components/user/user.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/user/user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/user/user.component.ts ***!
  \********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/core/services/game.service.ts");







var UserComponent = /** @class */ (function () {
    function UserComponent(activeRoute, userService, gameService, toastr, location, router) {
        this.activeRoute = activeRoute;
        this.userService = userService;
        this.gameService = gameService;
        this.toastr = toastr;
        this.location = location;
        this.router = router;
        this.usersGames = [];
        this.userId = localStorage.getItem('user_id');
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.getUser(params.id);
        });
    };
    UserComponent.prototype.getUser = function (userId) {
        var _this = this;
        this.userService.getUser(userId).subscribe(function (res) {
            _this.user = res;
            _this.user.id = userId;
            _this.user.games.forEach(function (game) {
                _this.gameService.getGame(game.game).subscribe(function (r) {
                    _this.usersGames.push({ owns: false, player_id: game.player_id, game: r });
                });
            });
            _this.user.owns.forEach(function (game) {
                _this.gameService.getGame(game.game).subscribe(function (r) {
                    _this.usersGames.push({ owns: true, player_id: game.player_id, game: r });
                });
            });
        }, function (err) {
            _this.toastr.error('Oops, there was an error retrieving the user');
            _this.location.back();
        });
    };
    UserComponent.prototype.joinGame = function (game) {
        var _this = this;
        this.userService.joinGame(localStorage.getItem('user_id'), game._id).subscribe(function (res) {
            _this.toastr.success('You were successfully added to the game.');
            _this.router.navigate(['/game/' + game.game_id + '/' + game.players.length]);
        }, function (err) {
            _this.toastr.error(err.error.message);
        });
    };
    UserComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/core/components/user/user.component.scss")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/core/components/user/user.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/components/user/user.module.ts ***!
  \*****************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/core/components/user/user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/core/services/game.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/game.service.ts ***!
  \***********************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");



var GameService = /** @class */ (function () {
    function GameService(appService) {
        this.appService = appService;
    }
    GameService.prototype.createGame = function (numPlayers, userId, withRainbow, gameName) {
        if (withRainbow === void 0) { withRainbow = false; }
        if (gameName === void 0) { gameName = null; }
        return this.appService.post('game?num_players=' + numPlayers + '&with_rainbows=' + withRainbow + '&game_name=' + gameName + '&user_id=' + userId, {});
    };
    GameService.prototype.getGame = function (gameId) {
        return this.appService.get('game/' + gameId);
    };
    GameService.prototype.deleteGame = function (gameId) {
        return this.appService.delete('game/' + gameId);
    };
    GameService.prototype.getAll = function () {
        return this.appService.get('game');
    };
    GameService.ctorParameters = function () { return [
        { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/core/services/meta.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/meta.service.ts ***!
  \***********************************************/
/*! exports provided: MetaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaService", function() { return MetaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");



var MetaService = /** @class */ (function () {
    function MetaService(appService) {
        this.appService = appService;
    }
    MetaService.prototype.getGames = function () {
        return this.appService.get('meta/game');
    };
    MetaService.prototype.getGame = function (gameId) {
        return this.appService.get('meta/game/' + gameId);
    };
    MetaService.ctorParameters = function () { return [
        { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    MetaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MetaService);
    return MetaService;
}());



/***/ }),

/***/ "./src/app/core/services/piece.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/piece.service.ts ***!
  \************************************************/
/*! exports provided: PieceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceService", function() { return PieceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");



var PieceService = /** @class */ (function () {
    function PieceService(appService) {
        this.appService = appService;
    }
    PieceService.prototype.getPiece = function (gameId, pieceId) {
        return this.appService.get('piece/' + pieceId + '?game_id=' + gameId);
    };
    PieceService.prototype.actionOnPiece = function (gameId, pieceId, playerId, action) {
        return this.appService.post('piece/' + pieceId + '?game_id=' + gameId + '&player_id=' + playerId + '&action=' + action, {});
    };
    PieceService.ctorParameters = function () { return [
        { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    PieceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PieceService);
    return PieceService;
}());



/***/ }),

/***/ "./src/app/core/services/player.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/player.service.ts ***!
  \*************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");



var PlayerService = /** @class */ (function () {
    function PlayerService(appService) {
        this.appService = appService;
    }
    PlayerService.prototype.getPlayer = function (playerId, gameId) {
        return this.appService.get('player/' + playerId + '?game_id=' + gameId);
    };
    PlayerService.prototype.notify = function (hint, gameId) {
        return this.appService.post('player/' + hint.playerId + '?hint=' + hint.hint + '&game_id=' + gameId + '&affected_player=' + hint.affected_player, {});
    };
    PlayerService.ctorParameters = function () { return [
        { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");



var UserService = /** @class */ (function () {
    function UserService(appService) {
        this.appService = appService;
    }
    UserService.prototype.getUser = function (userId) {
        return this.appService.get('user/' + userId);
    };
    UserService.prototype.getUserByName = function (username) {
        return this.appService.get('user?player_name=' + username);
    };
    UserService.prototype.createUser = function (username) {
        if (username === void 0) { username = ''; }
        return this.appService.post('user?player_name=' + username, {});
    };
    UserService.prototype.joinGame = function (userId, gameId) {
        return this.appService.put('user/' + userId + '?meta_game_id=' + gameId);
    };
    UserService.prototype.updateUser = function (userId, own, gameId) {
        if (own === void 0) { own = null; }
        if (gameId === void 0) { gameId = null; }
        var url = 'user/' + userId;
        if (own !== null) {
            url += '?own=' + own;
        }
        else if (gameId !== null) {
            url += '?game_id=' + own;
        }
        else {
            throw Error('own or gameId must be supplied to update a user');
        }
        return this.appService.put(url, {});
    };
    UserService.ctorParameters = function () { return [
        { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at http://angular.io/license
 */


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiUrl: 'http://maphey.cloud:5000'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maphey1/Documents/projects/hanabi/hanabi-client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map