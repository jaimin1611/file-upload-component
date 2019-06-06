(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/file-upld-lib/fesm5/file-upld-lib.js":
/*!**************************************************************************************!*\
  !*** C:/Users/rathod.jaimin/Desktop/mylib/dist/file-upld-lib/fesm5/file-upld-lib.js ***!
  \**************************************************************************************/
/*! exports provided: FileUpldLibService, FileUpldLibComponent, FileUpldLibModule, ɵc, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpldLibService", function() { return FileUpldLibService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpldLibComponent", function() { return FileUpldLibComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpldLibModule", function() { return FileUpldLibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AllowedFTDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FileUpldLibBgComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ServerURLDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tabmenu */ "../../node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/progressbar */ "../../node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ "../../node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "../../node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ "../../node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUpldLibService = /** @class */ (function () {
    function FileUpldLibService() {
        this.fordisplay = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.cfordisplay = this.fordisplay.asObservable();
        this.triggerdisplay = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.ctriggerdisplay = this.triggerdisplay.asObservable();
        this.inprogress = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.cinprogress = this.inprogress.asObservable();
        this.url = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
        this.curl = this.url.asObservable();
        this.allowedFTv = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.callowedFTv = this.allowedFTv.asObservable();
        this.overallpgrs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.coverallpgrs = this.overallpgrs.asObservable();
    }
    /**
     * @param {?} xyz
     * @return {?}
     */
    FileUpldLibService.prototype.changefordisplay = /**
     * @param {?} xyz
     * @return {?}
     */
    function (xyz) {
        this.fordisplay.next(xyz);
        /** @type {?} */
        var sum = 0;
        /** @type {?} */
        var i;
        /** @type {?} */
        var fda;
        this.cfordisplay.source.subscribe((/**
         * @param {?} __values
         * @return {?}
         */
        function (__values) { return fda = __values; }));
        for (i = 0; i < fda.length; i++) {
            sum = sum + fda[i].progress;
        }
        sum = sum / fda.length;
        /** @type {?} */
        var intvalue = Math.round(sum);
        this.overallpgrs.next(intvalue);
    };
    /**
     * @return {?}
     */
    FileUpldLibService.prototype.showbox = /**
     * @return {?}
     */
    function () {
        this.triggerdisplay.next(true);
    };
    /**
     * @return {?}
     */
    FileUpldLibService.prototype.incInprogress = /**
     * @return {?}
     */
    function () {
        this.newnn = this.inprogress.value + 1;
        this.inprogress.next(this.newnn);
    };
    /**
     * @return {?}
     */
    FileUpldLibService.prototype.decInprogress = /**
     * @return {?}
     */
    function () {
        this.newnn = this.inprogress.value - 1;
        this.inprogress.next(this.newnn);
    };
    /**
     * @param {?} incomingurl
     * @return {?}
     */
    FileUpldLibService.prototype.passurl = /**
     * @param {?} incomingurl
     * @return {?}
     */
    function (incomingurl) {
        this.url.next(incomingurl);
    };
    /**
     * @param {?} incomingFT
     * @return {?}
     */
    FileUpldLibService.prototype.passAllowedFT = /**
     * @param {?} incomingFT
     * @return {?}
     */
    function (incomingFT) {
        this.allowedFTv.next(incomingFT);
    };
    FileUpldLibService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FileUpldLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ FileUpldLibService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["defineInjectable"])({ factory: function FileUpldLibService_Factory() { return new FileUpldLibService(); }, token: FileUpldLibService, providedIn: "root" });
    return FileUpldLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUpldLibComponent = /** @class */ (function () {
    function FileUpldLibComponent(bs, http) {
        this.bs = bs;
        this.http = http;
        this.hide = true;
        this.filesToUpload = [];
        this.pgrs = 0;
        this.currentchoosenfn = "";
    }
    /**
     * @return {?}
     */
    FileUpldLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.bs.callowedFTv.subscribe((/**
         * @param {?} ftfromdirective
         * @return {?}
         */
        function (ftfromdirective) { return _this.ftfromdirective = ftfromdirective; }));
    };
    /**
     * @param {?} xyz
     * @return {?}
     */
    FileUpldLibComponent.prototype.upload = /**
     * @param {?} xyz
     * @return {?}
     */
    function (xyz) {
        var _this = this;
        /** @type {?} */
        var flag = 0;
        this.bs.showbox();
        /** @type {?} */
        var formData = new FormData();
        /** @type {?} */
        var files = this.filesToUpload;
        console.log(files);
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        this.bs.curl.subscribe((/**
         * @param {?} urlfromdirective
         * @return {?}
         */
        function (urlfromdirective) { return _this.urlfromdirective = urlfromdirective; }));
        //alert(this.urlfromdirective);
        //'http://localhost:4000/upload'
        this.http.post(this.urlfromdirective, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress:
                    /** @type {?} */
                    var progress = Math.round(100 * event.loaded / event.total);
                    for (var i = 0; i < FileUpldLibComponent.fordisplay.length; i++) {
                        if (FileUpldLibComponent.fordisplay[i].name == xyz) {
                            FileUpldLibComponent.fordisplay[i].progress = progress;
                        }
                    }
                    _this.pgrs = progress;
                    _this.bs.changefordisplay(FileUpldLibComponent.fordisplay);
                    if (progress == 100 && flag == 0) {
                        _this.bs.decInprogress();
                        flag = 1;
                    }
            }
        }))).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        function (files) { return console.log('files', files); }));
    };
    /**
     * @param {?} fileInput
     * @return {?}
     */
    FileUpldLibComponent.prototype.fileChangeEvent = /**
     * @param {?} fileInput
     * @return {?}
     */
    function (fileInput) {
        this.dummyfileInput = fileInput;
        try {
            this.currentchoosenfn = this.dummyfileInput.target.files[0].name;
        }
        catch (_a) {
            this.currentchoosenfn = "";
            this.wrong_ft_flag = false;
            this.already_uploaded_flag = false;
            return;
        }
        //ALREADY UPLOADED VALIDATION
        this.already_uploaded = false;
        this.already_uploaded_flag = false;
        for (var i = 0; i < FileUpldLibComponent.fordisplay.length; i++) {
            if (FileUpldLibComponent.fordisplay[i].name == this.dummyfileInput.target.files[0].name) {
                this.already_uploaded = true;
                // alert("You already uploaded this file");
                // return;
            }
        }
        if (this.already_uploaded == true) {
            this.already_uploaded_flag = true;
            this.wrong_ft_flag = false;
            return;
        }
        else {
            this.already_uploaded_flag = false;
        }
        //WRONG FILE TYPE VALIDATION
        /** @type {?} */
        var f_name = this.dummyfileInput.target.files[0].name;
        /** @type {?} */
        var ext = "";
        if (f_name.lastIndexOf(".") > 0) {
            ext = f_name.substring(f_name.lastIndexOf(".") + 1, f_name.length);
        }
        /** @type {?} */
        var flag = 0;
        /** @type {?} */
        var i1;
        for (i1 = 0; i1 < this.ftfromdirective.length; i1++) {
            if ("." + ext.toLowerCase() == this.ftfromdirective[i1]) {
                flag = 1;
            }
        }
        if (flag == 0) {
            this.wrong_ft_flag = true;
        }
        else {
            this.wrong_ft_flag = false;
        }
    };
    /**
     * @return {?}
     */
    FileUpldLibComponent.prototype.xyz = /**
     * @return {?}
     */
    function () {
        this.bs.incInprogress();
        this.pgrs = 0;
        this.filesToUpload = (/** @type {?} */ (this.dummyfileInput.target.files));
        FileUpldLibComponent.fordisplay.push({ "name": this.dummyfileInput.target.files[0].name, "progress": 0 });
        this.upload(this.dummyfileInput.target.files[0].name);
        this.formclear.nativeElement.value = '';
        this.currentchoosenfn = "";
    };
    FileUpldLibComponent.fordisplay = [];
    FileUpldLibComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'lib-file-upld-lib',
                    template: "\n<div class=\"main-div\" >\n  \n  <p-card header=\"File Upload Section\"  [style]=\"{width: '360px','background-color':'#F3F3F3'}\"  class=\"example-card\" styleClass=\"ui-card-shadow\">\n <span [ngStyle]=\"{'font-weight':'bold','font-size':'15px'}\">Allowed File Types:-</span>\n   <!-- <span *ngFor=\"let x of ftfromdirective\" >-->\n        <span [ngStyle]=\"{'font-style':'italic','font-size':'15px'}\" >{{ftfromdirective.join(', ')}}</span>\n    \n    \n\n<br>\n<br><br>\n\n    <div>\n     \n      <button  type=\"button\" (click)=\"fileip.click()\" label=\"Choose File\" class=\"btn btn-primary\" [ngStyle]=\"{'float':'left'}\">Choose File</button>\n    \n      \n      <input type=\"file\" (change)=\"fileChangeEvent($event)\"  #fileip [ngStyle]=\"{'display':'none'}\">\n      <button  type=\"button\" (click)=\"xyz()\" label=\"Upload\" class=\"btn btn-secondary\"  [ngStyle]=\"{'float':'left'}\" [disabled]='currentchoosenfn==\"\" || already_uploaded_flag==true || wrong_ft_flag==true'>Upload</button>\n       \n      <br/><br/><br/><span [ngStyle]=\"{'margin-top':'10px','font-weight':'bold','clear':'both', 'word-break': 'break-all'}\">{{currentchoosenfn}}</span>\n      <br>\n      \n      <span *ngIf=\"already_uploaded_flag==true\" [ngStyle]=\"{'color':'red','font-weight':'bold','font-size':'11px'}\">You already uploaded this file.</span>\n      \n      <span *ngIf=\"wrong_ft_flag==true\" [ngStyle]=\"{'color':'red','font-weight':'bold','font-size':'11px'}\">Unsupported file type.</span>\n     <!-- <button  type=\"button\" (click)=\"xyz()\" label=\"Upload\" class=\"btn btn-secondary\">Upload</button>\n     -->\n    </div>\n    \n</p-card>\n\n    \n</div>\n\n\n",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.example-right-align{text-align:right}input.example-right-align::-webkit-inner-spin-button,input.example-right-align::-webkit-outer-spin-button{display:none}input.example-right-align{-moz-appearance:textfield}.example-margin{margin:0 10px}.example-card{max-width:400px;background-color:#faebd7}.main-div{display:flex;justify-content:center;align-items:center;margin-top:80px}.btn{font-family:HelveticaNeueBold,Roboto,Helvetica,Arial,sans-serif;font-weight:700;margin:.5rem}.example-spacing1 .btn{margin:.5rem}.example-spacing1{width:100%}.btn-primary{background-color:#fff;border-color:#dcdcdc;color:#1e8ae7}.btn-primary:hover{background-color:#fff;border-color:#1e8ae7;color:#1e8ae7}.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle,primary:not(:disabled):not(.disabled).active{background-color:#fff;border-color:#1e8ae7;color:#1e8ae7;box-shadow:inset 0 2px 3px 3px #eee}.btn-primary.disabled,.btn-primary:disabled{color:#7f7f7f;background-color:#dcdcdc;border-color:#dcdcdc}.btn-secondary{background-color:#555759;border-color:#555759;color:#fff}.btn-secondary:hover{background-color:#222;border-color:#222;color:#fff}.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle,secondary:not(:disabled):not(.disabled).active{background-color:#222;border-color:#222;color:#fff;box-shadow:inset 0 2px 3px 3px #000}"]
                }] }
    ];
    /** @nocollapse */
    FileUpldLibComponent.ctorParameters = function () { return [
        { type: FileUpldLibService },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    FileUpldLibComponent.propDecorators = {
        formclear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['fileip',] }]
    };
    return FileUpldLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUpldLibBgComponent = /** @class */ (function () {
    function FileUpldLibBgComponent(bs) {
        this.bs = bs;
        this.title = 'myapp';
        this.fordisplay1 = [];
        this.display = false;
        this.uploadrunning = 0;
        this.globlepgrs = 0;
    }
    /**
     * @return {?}
     */
    FileUpldLibBgComponent.prototype.showDialog = /**
     * @return {?}
     */
    function () {
        this.display = true;
    };
    /**
     * @return {?}
     */
    FileUpldLibBgComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.bs.cfordisplay.subscribe((/**
         * @param {?} fordisplay1
         * @return {?}
         */
        function (fordisplay1) { return _this.fordisplay1 = fordisplay1; }));
        this.bs.ctriggerdisplay.subscribe((/**
         * @param {?} display
         * @return {?}
         */
        function (display) { return _this.display = display; }));
        this.bs.cinprogress.subscribe((/**
         * @param {?} uploadrunning
         * @return {?}
         */
        function (uploadrunning) { return _this.uploadrunning = uploadrunning; }));
        this.bs.coverallpgrs.subscribe((/**
         * @param {?} globlepgrs
         * @return {?}
         */
        function (globlepgrs) { return _this.globlepgrs = globlepgrs; }));
        // Comp1Component.fordisplay.subscribe((fordisplay1: any)=>this.fordisplay1=fordisplay1);
    };
    FileUpldLibBgComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                    selector: 'file-upld-lib-bg',
                    template: "<!--The content below is only a placeholder and can be replaced.-->\n<div *ngIf=\"display\">\n  <p-dialog header=\"File Uploading Section\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '350px', minWidth: '200px'}\" [minY]=\"70\" \n        [maximizable]=\"true\" [baseZIndex]=\"10000\">\n        <div *ngIf=\"fordisplay1.length==0\">\n          No file Uploaded\n        </div>\n        <div *ngFor=\"let x of fordisplay1\" [ngStyle]=\"{'margin-top':'10px'}\">\n          Name:-{{\" \"+x.name}}\n          \n<!--<p-progressBar [value]=\"x.progress\"  [style]=\"{'height': '30px','color':'green'}\" class=\"customProgress\"></p-progressBar>\n-->      \n<div class=\"no-gutters\">\n  <div class=\"progress\" style=\"height: 3px;\">\n    <div class=\"progress-bar\" role=\"progressbar\" [style.width.%]=\"x.progress\"[style.height.px]=\"20\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n  </div>\n  <div class=\"page-overlay\"></div>\n</div>\n\n<span *ngIf=\"x.progress==100\">Completed</span>\n<span *ngIf=\"x.progress&lt;100\">{{x.progress+\"%\"}}</span>\n        </div>\n        <p-footer>\n          <button type=\"button\"  icon=\"pi pi-check\" (click)=\"display=false\" label=\"OK\" class=\"btn btn-primary\" >OK</button>\n       </p-footer>\n</p-dialog>\n</div>\n<!--<div *ngIf=\"uploadrunning>0\">-->\n<button type=\"button\" (click)=\"showDialog()\"  icon=\"pi pi-info-circle\" class=\"btn btn-primary\" label=\"File Uploading Section\" [ngStyle]=\"{'float':'right'}\">File Uploading Section\n<br>\n <span *ngIf=\"uploadrunning>=1\" [ngStyle]=\"{'font-size':'15px'}\">In progress - {{globlepgrs}}% , {{fordisplay1.length-uploadrunning}}/{{fordisplay1.length}} Files Uploaded</span>\n \n <span *ngIf=\"uploadrunning==0 && fordisplay1.length>=1\" [ngStyle]=\"{'font-size':'15px'}\"> {{fordisplay1.length-uploadrunning}}/{{fordisplay1.length}} Files Uploaded</span>\n\n\n\n</button>\n<div [ngStyle]=\"{'clear':'both'}\"></div>\n\n",
                    styles: ["::ng-deep .mat-progress-bar{border-radius:2px;background-color:green;color:green}.green-progress .mat-progress-bar-fill::after{background-color:green!important}.customProgress .ui-progressbar .ui-progressbar-label{color:#ff0}.customProgress .ui-progressbar .ui-progressbar-value{background:red}.btn{font-family:HelveticaNeueBold,Roboto,Helvetica,Arial,sans-serif;font-weight:700;margin:.5rem}.btn-primary{background-color:#fff;border-color:#dcdcdc;color:#1e8ae7}.btn-primary:hover{background-color:#fff;border-color:#1e8ae7;color:#1e8ae7}.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle,primary:not(:disabled):not(.disabled).active{background-color:#fff;border-color:#1e8ae7;color:#1e8ae7;box-shadow:inset 0 2px 3px 3px #eee}.btn-primary.disabled,.btn-primary:disabled{color:#7f7f7f;background-color:#dcdcdc;border-color:#dcdcdc}.progress-bar{background-color:#e71316}.progress{background-color:#eee}"]
                }] }
    ];
    /** @nocollapse */
    FileUpldLibBgComponent.ctorParameters = function () { return [
        { type: FileUpldLibService }
    ]; };
    return FileUpldLibBgComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ServerURLDirective = /** @class */ (function () {
    function ServerURLDirective(BS) {
        this.BS = BS;
    }
    /**
     * @return {?}
     */
    ServerURLDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.BS.passurl(this.libServerURL);
    };
    ServerURLDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"], args: [{
                    selector: '[libServerURL]'
                },] }
    ];
    /** @nocollapse */
    ServerURLDirective.ctorParameters = function () { return [
        { type: FileUpldLibService }
    ]; };
    ServerURLDirective.propDecorators = {
        libServerURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
    };
    return ServerURLDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AllowedFTDirective = /** @class */ (function () {
    function AllowedFTDirective(BS) {
        this.BS = BS;
    }
    /**
     * @return {?}
     */
    AllowedFTDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.BS.passAllowedFT(this.libAllowedFT);
    };
    AllowedFTDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"], args: [{
                    selector: '[libAllowedFT]'
                },] }
    ];
    /** @nocollapse */
    AllowedFTDirective.ctorParameters = function () { return [
        { type: FileUpldLibService }
    ]; };
    AllowedFTDirective.propDecorators = {
        libAllowedFT: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
    };
    return AllowedFTDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileUpldLibModule = /** @class */ (function () {
    function FileUpldLibModule() {
    }
    FileUpldLibModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                    declarations: [
                        FileUpldLibComponent,
                        FileUpldLibBgComponent,
                        ServerURLDirective,
                        AllowedFTDirective
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_4__["TabMenuModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressBarModule"],
                        primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
                        primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                        primeng_card__WEBPACK_IMPORTED_MODULE_10__["CardModule"]
                    ],
                    exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                        FileUpldLibComponent,
                        FileUpldLibBgComponent,
                        ServerURLDirective,
                        AllowedFTDirective
                    ],
                    providers: [FileUpldLibService, FileUpldLibComponent, FileUpldLibBgComponent, ServerURLDirective, AllowedFTDirective],
                    bootstrap: [FileUpldLibComponent, FileUpldLibBgComponent]
                },] }
    ];
    return FileUpldLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=file-upld-lib.js.map

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy90ZXN0YXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<file-upld-lib-bg ></file-upld-lib-bg>\n  <lib-file-upld-lib [libServerURL]=\"'http://localhost:4000/upload'\" \n  [libAllowedFT]=\"['.exe','.docx','.html','.php']\" ></lib-file-upld-lib>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'testapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var file_upld_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-upld-lib */ "../../dist/file-upld-lib/fesm5/file-upld-lib.js");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                file_upld_lib__WEBPACK_IMPORTED_MODULE_4__["FileUpldLibModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! C:\Users\rathod.jaimin\Desktop\mylib\projects\testapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map