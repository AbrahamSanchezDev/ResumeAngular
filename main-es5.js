function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/resume/resume.component */
    "./src/app/components/resume/resume.component.ts");
    /* harmony import */


    var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/projects/projects.component */
    "./src/app/components/projects/projects.component.ts");

    var routes = [{
      path: '',
      component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"]
    }, {
      path: 'projects',
      component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_nav_control_nav_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/nav-control/nav-control.component */
    "./src/app/components/nav-control/nav-control.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Resume';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [[1, "intro", 2, "text-align", "center"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Abraham Sanchez Fonseca ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Unity 3d ,C# Developer & Video Games Fan\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-nav-control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        }
      },
      directives: [_components_nav_control_nav_control_component__WEBPACK_IMPORTED_MODULE_1__["NavControlComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/intro/intro.component */
    "./src/app/components/intro/intro.component.ts");
    /* harmony import */


    var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/todos/todos.component */
    "./src/app/components/todos/todos.component.ts");
    /* harmony import */


    var _components_todos_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/todos/todo-item/todo-item.component */
    "./src/app/components/todos/todo-item/todo-item.component.ts");
    /* harmony import */


    var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/layout/header/header.component */
    "./src/app/components/layout/header/header.component.ts");
    /* harmony import */


    var _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/add-todo/add-todo.component */
    "./src/app/components/add-todo/add-todo.component.ts");
    /* harmony import */


    var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/resume/resume.component */
    "./src/app/components/resume/resume.component.ts");
    /* harmony import */


    var _components_nav_control_nav_control_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/nav-control/nav-control.component */
    "./src/app/components/nav-control/nav-control.component.ts");
    /* harmony import */


    var _components_input_area_input_area_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/input-area/input-area.component */
    "./src/app/components/input-area/input-area.component.ts");
    /* harmony import */


    var _components_text_to_json_text_to_json_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/text-to-json/text-to-json.component */
    "./src/app/components/text-to-json/text-to-json.component.ts");
    /* harmony import */


    var _components_Input_add_text_add_text_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/Input/add-text/add-text.component */
    "./src/app/components/Input/add-text/add-text.component.ts");
    /* harmony import */


    var _components_Input_multi_line_to_json_multi_line_to_json_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/Input/multi-line-to-json/multi-line-to-json.component */
    "./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.ts");
    /* harmony import */


    var _components_Input_experience_obj_experience_obj_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/Input/experience-obj/experience-obj.component */
    "./src/app/components/Input/experience-obj/experience-obj.component.ts");
    /* harmony import */


    var _components_display_exp_obj_display_exp_obj_display_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/display/exp-obj-display/exp-obj-display.component */
    "./src/app/components/display/exp-obj-display/exp-obj-display.component.ts");
    /* harmony import */


    var _components_resume_intro_resume_intro_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/resume-intro/resume-intro.component */
    "./src/app/components/resume-intro/resume-intro.component.ts");
    /* harmony import */


    var _components_display_list_display_list_display_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/display/list-display/list-display.component */
    "./src/app/components/display/list-display/list-display.component.ts");
    /* harmony import */


    var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/projects/projects.component */
    "./src/app/components/projects/projects.component.ts");
    /* harmony import */


    var _components_Project_flip_game_flip_game_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/Project/flip-game/flip-game.component */
    "./src/app/components/Project/flip-game/flip-game.component.ts");
    /* harmony import */


    var _components_display_images_grid_display_images_grid_display_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/display/images-grid-display/images-grid-display.component */
    "./src/app/components/display/images-grid-display/images-grid-display.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"], _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_7__["TodosComponent"], _components_todos_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__["TodoItemComponent"], _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_10__["AddTodoComponent"], _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"], _components_nav_control_nav_control_component__WEBPACK_IMPORTED_MODULE_12__["NavControlComponent"], _components_input_area_input_area_component__WEBPACK_IMPORTED_MODULE_13__["InputAreaComponent"], _components_text_to_json_text_to_json_component__WEBPACK_IMPORTED_MODULE_14__["TextToJsonComponent"], _components_Input_add_text_add_text_component__WEBPACK_IMPORTED_MODULE_15__["AddTextComponent"], _components_Input_multi_line_to_json_multi_line_to_json_component__WEBPACK_IMPORTED_MODULE_16__["MultiLineToJsonComponent"], _components_Input_experience_obj_experience_obj_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceObjComponent"], _components_display_exp_obj_display_exp_obj_display_component__WEBPACK_IMPORTED_MODULE_18__["ExpObjDisplayComponent"], _components_resume_intro_resume_intro_component__WEBPACK_IMPORTED_MODULE_19__["ResumeIntroComponent"], _components_display_list_display_list_display_component__WEBPACK_IMPORTED_MODULE_20__["ListDisplayComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_21__["ProjectsComponent"], _components_Project_flip_game_flip_game_component__WEBPACK_IMPORTED_MODULE_22__["FlipGameComponent"], _components_display_images_grid_display_images_grid_display_component__WEBPACK_IMPORTED_MODULE_23__["ImagesGridDisplayComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"], _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_7__["TodosComponent"], _components_todos_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__["TodoItemComponent"], _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_10__["AddTodoComponent"], _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"], _components_nav_control_nav_control_component__WEBPACK_IMPORTED_MODULE_12__["NavControlComponent"], _components_input_area_input_area_component__WEBPACK_IMPORTED_MODULE_13__["InputAreaComponent"], _components_text_to_json_text_to_json_component__WEBPACK_IMPORTED_MODULE_14__["TextToJsonComponent"], _components_Input_add_text_add_text_component__WEBPACK_IMPORTED_MODULE_15__["AddTextComponent"], _components_Input_multi_line_to_json_multi_line_to_json_component__WEBPACK_IMPORTED_MODULE_16__["MultiLineToJsonComponent"], _components_Input_experience_obj_experience_obj_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceObjComponent"], _components_display_exp_obj_display_exp_obj_display_component__WEBPACK_IMPORTED_MODULE_18__["ExpObjDisplayComponent"], _components_resume_intro_resume_intro_component__WEBPACK_IMPORTED_MODULE_19__["ResumeIntroComponent"], _components_display_list_display_list_display_component__WEBPACK_IMPORTED_MODULE_20__["ListDisplayComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_21__["ProjectsComponent"], _components_Project_flip_game_flip_game_component__WEBPACK_IMPORTED_MODULE_22__["FlipGameComponent"], _components_display_images_grid_display_images_grid_display_component__WEBPACK_IMPORTED_MODULE_23__["ImagesGridDisplayComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
          entryComponents: [_components_todos_todos_component__WEBPACK_IMPORTED_MODULE_7__["TodosComponent"], _components_Input_experience_obj_experience_obj_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceObjComponent"], _components_text_to_json_text_to_json_component__WEBPACK_IMPORTED_MODULE_14__["TextToJsonComponent"], _components_Project_flip_game_flip_game_component__WEBPACK_IMPORTED_MODULE_22__["FlipGameComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Input/add-text/add-text.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/Input/add-text/add-text.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AddTextComponent */

  /***/
  function srcAppComponentsInputAddTextAddTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTextComponent", function () {
      return AddTextComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddTextComponent = /*#__PURE__*/function () {
      function AddTextComponent() {
        _classCallCheck(this, AddTextComponent);

        this.addTextData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tempPlaceHolder = "Add...";
        this.addText = "Submit";
      }

      _createClass(AddTextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          //this would send the content of the input field only if there is a text
          if (this.myText) {
            this.addTextData.emit(this.myText);
            this.myText = null;
          }
        }
      }]);

      return AddTextComponent;
    }();

    AddTextComponent.ɵfac = function AddTextComponent_Factory(t) {
      return new (t || AddTextComponent)();
    };

    AddTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddTextComponent,
      selectors: [["app-add-text"]],
      inputs: {
        tempPlaceHolder: ["tempText", "tempPlaceHolder"],
        addText: "addText"
      },
      outputs: {
        addTextData: "addTextData"
      },
      decls: 3,
      vars: 3,
      consts: [[1, "inputForm", 3, "ngSubmit"], ["type", "text", "name", "myText", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "submit", 1, "btn", 3, "value"]],
      template: function AddTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddTextComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTextComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.myText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.tempPlaceHolder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.myText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.addText);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSW5wdXQvYWRkLXRleHQvYWRkLXRleHQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-text',
          templateUrl: './add-text.component.html',
          styleUrls: ['./add-text.component.css']
        }]
      }], function () {
        return [];
      }, {
        addTextData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        tempPlaceHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tempText']
        }],
        addText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['addText']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/Input/experience-obj/experience-obj.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/Input/experience-obj/experience-obj.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ExperienceObjComponent */

  /***/
  function srcAppComponentsInputExperienceObjExperienceObjComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceObjComponent", function () {
      return ExperienceObjComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _multi_line_to_json_multi_line_to_json_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../multi-line-to-json/multi-line-to-json.component */
    "./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.ts");
    /* harmony import */


    var src_app_library_download_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/library/download-tool.service */
    "./src/app/library/download-tool.service.ts");
    /* harmony import */


    var src_app_models_exp_obj_exp_obj_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/exp-obj/exp-obj.module */
    "./src/app/models/exp-obj/exp-obj.module.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../layout/header/header.component */
    "./src/app/components/layout/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _add_text_add_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../add-text/add-text.component */
    "./src/app/components/Input/add-text/add-text.component.ts");

    var _c0 = ["multiText"];

    var ExperienceObjComponent = /*#__PURE__*/function () {
      function ExperienceObjComponent(downloadTool) {
        _classCallCheck(this, ExperienceObjComponent);

        this.downloadTool = downloadTool;
        this.expObj = new src_app_models_exp_obj_exp_obj_module__WEBPACK_IMPORTED_MODULE_3__["ExpObjModule"]();
      }

      _createClass(ExperienceObjComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //Create the ExpObj description and save it as json

      }, {
        key: "createExp",
        value: function createExp(theText) {
          var theTextInArray = this.multiLineText.generateText();
          this.expObj.description = theTextInArray;
          this.downloadTool.DownloadTextToFileAsJson(this.expObj, theText);
        }
      }]);

      return ExperienceObjComponent;
    }();

    ExperienceObjComponent.ɵfac = function ExperienceObjComponent_Factory(t) {
      return new (t || ExperienceObjComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_library_download_tool_service__WEBPACK_IMPORTED_MODULE_2__["DownloadToolService"]));
    };

    ExperienceObjComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceObjComponent,
      selectors: [["app-experience-obj"]],
      viewQuery: function ExperienceObjComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLineText = _t.first);
        }
      },
      decls: 18,
      vars: 3,
      consts: [[1, "expObj"], ["title", "Experience Json Creation"], [1, "inputObj"], ["type", "text", 3, "ngModel", "ngModelChange"], ["cssClass", "expInputArea"], ["multiText", ""], ["title", "Download Experience File", "cssClass", "smallHeader"], ["tempText", "File name...", "addText", "Download File", 3, "addTextData"]],
      template: function ExperienceObjComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExperienceObjComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.expObj.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExperienceObjComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.expObj.link = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ImagePath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExperienceObjComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.expObj.img = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-multi-line-to-json", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-header", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-add-text", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addTextData", function ExperienceObjComponent_Template_app_add_text_addTextData_17_listener($event) {
            return ctx.createExp($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.expObj.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.expObj.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.expObj.img);
        }
      },
      directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _multi_line_to_json_multi_line_to_json_component__WEBPACK_IMPORTED_MODULE_1__["MultiLineToJsonComponent"], _add_text_add_text_component__WEBPACK_IMPORTED_MODULE_6__["AddTextComponent"]],
      styles: [".titleHeader[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: #666;\r\n    padding: 1px 5px;\r\n    border-radius: 30px; \r\n   color: #fff;\r\n   display: block;\r\n   margin: 5px 10px;\r\n}\r\n.expObj[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    text-align: center;    \r\n}\r\n.inputObj[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: #666;\r\n    padding: 1px 5px;   \r\n    border-radius: 30px;    \r\n    color: #fff;  \r\n    display: block;  \r\n    margin: 5px 10px;\r\n    display: flex;\r\n}\r\n.inputObj[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 0.5;\r\n    padding: 5px;\r\n    \r\n   \r\n   \r\n}\r\n.inputObj[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    flex: 3;\r\n    display: inline-block;\r\n    margin: 2px 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9JbnB1dC9leHBlcmllbmNlLW9iai9leHBlcmllbmNlLW9iai5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0dBQ3BCLFdBQVc7R0FDWCxjQUFjO0dBQ2QsZ0JBQWdCO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZOzs7O0FBSWhCO0FBQ0E7SUFDSSxPQUFPO0lBQ1AscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSW5wdXQvZXhwZXJpZW5jZS1vYmovZXhwZXJpZW5jZS1vYmouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDsgXHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWFyZ2luOiA1cHggMTBweDtcclxufVxyXG4uZXhwT2Jqe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmlucHV0T2Jqe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxuICAgIHBhZGRpbmc6IDFweCA1cHg7ICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAgICBcclxuICAgIGNvbG9yOiAjZmZmOyAgXHJcbiAgICBkaXNwbGF5OiBibG9jazsgIFxyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmlucHV0T2JqIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAwLjU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBcclxuICAgXHJcbiAgIFxyXG59XHJcbi5pbnB1dE9iaiBpbnB1dCB7XHJcbiAgICBmbGV4OiAzO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAycHggMjBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceObjComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-experience-obj',
          templateUrl: './experience-obj.component.html',
          styleUrls: ['./experience-obj.component.css']
        }]
      }], function () {
        return [{
          type: src_app_library_download_tool_service__WEBPACK_IMPORTED_MODULE_2__["DownloadToolService"]
        }];
      }, {
        multiLineText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['multiText']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/Input/multi-line-to-json/multi-line-to-json.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: MultiLineToJsonComponent */

  /***/
  function srcAppComponentsInputMultiLineToJsonMultiLineToJsonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiLineToJsonComponent", function () {
      return MultiLineToJsonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var MultiLineToJsonComponent = /*#__PURE__*/function () {
      function MultiLineToJsonComponent() {
        _classCallCheck(this, MultiLineToJsonComponent);

        this.createText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = "";
        this.cssClass = "";
      }

      _createClass(MultiLineToJsonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "generateText",
        value: function generateText() {
          if (this.content == null || this.content.length == 0) {
            return;
          }

          var textInArray = this.content.split("\n");
          console.log(textInArray);
          return textInArray;
        }
      }]);

      return MultiLineToJsonComponent;
    }();

    MultiLineToJsonComponent.ɵfac = function MultiLineToJsonComponent_Factory(t) {
      return new (t || MultiLineToJsonComponent)();
    };

    MultiLineToJsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MultiLineToJsonComponent,
      selectors: [["app-multi-line-to-json"]],
      inputs: {
        title: "title",
        cssClass: "cssClass",
        content: "content"
      },
      outputs: {
        createText: "createText"
      },
      decls: 4,
      vars: 5,
      consts: [["name", "content", 3, "ngModel", "ngModelChange"]],
      template: function MultiLineToJsonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiLineToJsonComponent_Template_textarea_ngModelChange_3_listener($event) {
            return ctx.content = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.content);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSW5wdXQvbXVsdGktbGluZS10by1qc29uL211bHRpLWxpbmUtdG8tanNvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiLineToJsonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-multi-line-to-json',
          templateUrl: './multi-line-to-json.component.html',
          styleUrls: ['./multi-line-to-json.component.css']
        }]
      }], function () {
        return [];
      }, {
        createText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/Project/flip-game/flip-game.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/Project/flip-game/flip-game.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FlipGameComponent */

  /***/
  function srcAppComponentsProjectFlipGameFlipGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlipGameComponent", function () {
      return FlipGameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _display_images_grid_display_images_grid_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../display/images-grid-display/images-grid-display.component */
    "./src/app/components/display/images-grid-display/images-grid-display.component.ts");

    function FlipGameComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlipGameComponent_div_4_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var arg_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onPreset(arg_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var arg_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"](" ", arg_r2.css, "");
      }
    }

    function FlipGameComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r5 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.getCss(img_r5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.getDisplay(img_r5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var FlipGameComponent = /*#__PURE__*/function () {
      function FlipGameComponent() {
        _classCallCheck(this, FlipGameComponent);

        this.presetsSelect = [{
          css: "preset animal_0",
          src: "",
          id: 0
        }, {
          css: "preset food_0",
          src: "",
          id: 1
        }, {
          css: "preset monster_0",
          src: "",
          id: 2
        }, {
          css: "fileImg",
          src: "",
          id: 3
        }]; //imgs to display

        this.loadedImgs = []; //imgs in the grid

        this.gameImgs = []; //indexs for the random generated imges

        this.usedIndex = []; //current game random generated images

        this.curGameImgs = []; //Other imgs

        this.animals = [];
        this.foods = [];
        this.monsters = [];
        this.usersImgs = []; //selected indexes  

        this.selectedImgs = [-1, -1];
        this.curLevel = 4;
        this.maxLevel = 10;
        this.imageWidth = 66;
        this.defaultcss = "fileSize";
        this.defaultImg = "assets/img/back.png";
        this.startText = "Start Game!";
        this.displayText = " ";
        this.inGame = false;
        this.wins = 0;
      }

      _createClass(FlipGameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Load default images from the presets
          var maxImgs = 10;

          for (var i = 0; i < maxImgs; i++) {
            this.animals.push({
              css: "preset" + " " + "animal_" + i,
              src: "",
              id: i
            });
            this.foods.push({
              css: "preset" + " " + "food_" + i,
              src: "",
              id: i
            });
            this.monsters.push({
              css: "preset" + " " + "monster_" + i,
              src: "",
              id: i
            });
          }

          this.onPreset(0);
          this.createGrid();
        } //On Select an img set the preset or the imgs from the users

      }, {
        key: "onPreset",
        value: function onPreset(id) {
          switch (id) {
            case 0:
              this.loadImgs(this.animals);
              break;

            case 1:
              this.loadImgs(this.foods);
              break;

            case 2:
              this.loadImgs(this.monsters);
              break;

            case 3:
              this.loadImgs(this.usersImgs);
              break;
          }
        } //set the given imgs to be display

      }, {
        key: "loadImgs",
        value: function loadImgs(imgs) {
          this.loadedImgs = imgs;
        } //Get the img src to display

      }, {
        key: "getDisplay",
        value: function getDisplay(img) {
          if (img.src != null) {
            return img.src;
          }

          return "";
        } //Get the css class to disply

      }, {
        key: "getCss",
        value: function getCss(img) {
          return img.css;
        } //On Selected imgs

      }, {
        key: "onChange",
        value: function onChange(event) {
          var _this = this;

          this.usersImgs.length = 0;
          var totalImgs = event.target.files.length;

          if (totalImgs > 10) {
            totalImgs = 10;
          }

          var _loop = function _loop(i) {
            var reader = new FileReader();

            reader.onload = function () {
              return _this.addToUsers(reader.result);
            };

            reader.readAsDataURL(event.target.files[i]);
          };

          for (var i = 0; i < totalImgs; i++) {
            _loop(i);
          }

          this.onPreset(3);
        } //Add img to the user images

      }, {
        key: "addToUsers",
        value: function addToUsers(data) {
          this.usersImgs.push({
            css: "fileSize",
            src: data,
            id: 0
          });
        } //Called to increase or decrease the difficulty

      }, {
        key: "increaseLevel",
        value: function increaseLevel(more) {
          if (more) {
            if (this.curLevel < this.maxLevel) this.curLevel++;
          } else {
            if (this.curLevel > 2) this.curLevel--;
          }

          this.createGrid();
        } //Create grid to display

      }, {
        key: "createGrid",
        value: function createGrid() {
          var totalWidth = this.curLevel * this.imageWidth;
          document.documentElement.style.setProperty('--gridX', totalWidth.toString() + "px");
          document.documentElement.style.setProperty('--gridY', totalWidth.toString() + "px"); //Set the data to a clean version

          var total = this.curLevel * this.curLevel;
          this.gameImgs.length = 0;

          for (var i = 0; i < total; i++) {
            this.gameImgs.push({
              css: "fileSize",
              src: this.defaultImg,
              id: i
            });
          }
        } //on selected an img in the grid display the img that was randomly generated

      }, {
        key: "onSelect",
        value: function onSelect(img) {
          var _this2 = this;

          if (this.inGame == false) {
            this.showOutput("Start the game first..");
            return;
          }

          var index = img.id; //dont select the same img if already selected

          if (index === this.selectedImgs[0] || index === this.selectedImgs[1]) {
            return;
          } //its in an already compleded index


          if (this.usedIndex.includes(index)) {
            return;
          } //display generated imgs


          img.css = this.curGameImgs[index].css;
          img.src = this.curGameImgs[index].src; //set the index that was click to the arrays

          if (this.selectedImgs[0] == -1) {
            this.selectedImgs[0] = index;
          } else if (this.selectedImgs[1] == -1) {
            this.selectedImgs[1] = index;
          }

          if (this.selectedImgs[0] != -1 && this.selectedImgs[1] != -1) {
            setTimeout(function () {
              //Check if selected
              if (_this2.curGameImgs[_this2.selectedImgs[0]] === _this2.curGameImgs[_this2.selectedImgs[1]]) {
                //couple was completed
                _this2.wins++; //add to already finished

                _this2.usedIndex.push(_this2.gameImgs[_this2.selectedImgs[0]].id);

                _this2.usedIndex.push(_this2.gameImgs[_this2.selectedImgs[1]].id); //when all couples was found


                if (_this2.wins >= _this2.curGameImgs.length / 2) {
                  _this2.onWin();
                }
              } else {
                //Reset to default data
                _this2.gameImgs[_this2.selectedImgs[0]].css = _this2.defaultcss;
                _this2.gameImgs[_this2.selectedImgs[0]].src = _this2.defaultImg; //Reset to default data

                _this2.gameImgs[_this2.selectedImgs[1]].css = _this2.defaultcss;
                _this2.gameImgs[_this2.selectedImgs[1]].src = _this2.defaultImg;
              } //Reset to non selected


              _this2.selectedImgs[0] = -1;
              _this2.selectedImgs[1] = -1;
            }, 200);
          }
        } //When finish the game

      }, {
        key: "onWin",
        value: function onWin() {
          this.showOutput("Congratulations you won!!!");
          this.startText = "New Game!";
        } //On Start Game 

      }, {
        key: "onStartPress",
        value: function onStartPress() {
          if (this.inGame) {
            this.inGame = false;
            this.resetGame();
            return;
          } // this.displayText = "Game Started!";


          this.showOutput("");

          if (this.loadedImgs.length == 0) {
            this.showOutput("Need to select items to use");
            return;
          }

          this.startText = "Reset Game";
          this.inGame = true;
          this.showGameObjs(!this.inGame);
          this.generateRandomImgs();
          this.wins = 0;
        } //show all the game options again

      }, {
        key: "resetGame",
        value: function resetGame() {
          this.showGameObjs(!this.inGame);
          this.startText = "Start Game!";
          this.createGrid();
        } //Generate what images will be in the game

      }, {
        key: "generateRandomImgs",
        value: function generateRandomImgs() {
          var imgIndex = 0;
          var curTotal = 0;
          var total = this.gameImgs.length;
          this.curGameImgs.length = total;
          var added = 0;
          var random = 0;
          this.usedIndex.length = 0;

          while (curTotal < total) {
            added = 0;
            random = 0;

            while (added < 2) {
              random = Math.floor(Math.random() * total);

              if (this.usedIndex.includes(random) == false) {
                this.usedIndex.push(random);
                this.curGameImgs[random] = this.loadedImgs[imgIndex];
                added++;
                curTotal++;

                if (added >= 2) {
                  break;
                }
              }

              if (curTotal >= total) {
                break;
              }
            }

            imgIndex++;

            if (imgIndex >= this.loadedImgs.length) {
              imgIndex = 0;
            }

            if (curTotal >= total) {
              break;
            }
          }

          this.usedIndex.length = 0;
        } //Show instructions to the user

      }, {
        key: "showOutput",
        value: function showOutput(text) {
          this.displayText = text;
        } //Show or hide objects that has to do with the game

      }, {
        key: "showGameObjs",
        value: function showGameObjs(show) {
          if (show) {
            document.documentElement.style.setProperty('--gameObjs', "block");
          } else {
            document.documentElement.style.setProperty('--gameObjs', "none");
          }
        }
      }]);

      return FlipGameComponent;
    }();

    FlipGameComponent.ɵfac = function FlipGameComponent_Factory(t) {
      return new (t || FlipGameComponent)();
    };

    FlipGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlipGameComponent,
      selectors: [["app-flip-game"]],
      decls: 34,
      vars: 6,
      consts: [[1, "flipBody"], [1, "topFlip"], [1, "presetsImgs"], ["class", "gameObj", 4, "ngFor", "ngForOf"], [1, "gameObj"], ["type", "file", "accept", "image/*", "name", "image", "id", "fileSelector", "multiple", "true", 3, "change"], [1, "inputArea", "gameObj"], [1, "smallButtons", 3, "click"], [1, "curLevel"], [1, "startBut", 3, "click"], [1, "mainCont"], [1, "leftFlip", "gameObj"], [1, "usingImgs"], [4, "ngFor", "ngForOf"], [1, "grid"], [3, "curImagesData", "onSelected"], [3, "click"], ["alt", "", 3, "src"]],
      template: function FlipGameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FlipGameComponent_div_4_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Max : 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FlipGameComponent_Template_input_change_9_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Difficulty : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlipGameComponent_Template_button_click_12_listener() {
            return ctx.increaseLevel(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlipGameComponent_Template_button_click_16_listener() {
            return ctx.increaseLevel(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlipGameComponent_Template_button_click_20_listener() {
            return ctx.onStartPress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Images To Display:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FlipGameComponent_div_28_Template, 2, 4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-images-grid-display", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelected", function FlipGameComponent_Template_app_images_grid_display_onSelected_32_listener($event) {
            return ctx.onSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.presetsSelect);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.curLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.startText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.loadedImgs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("curImagesData", ctx.gameImgs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _display_images_grid_display_images_grid_display_component__WEBPACK_IMPORTED_MODULE_2__["ImagesGridDisplayComponent"]],
      styles: [".gameObj[_ngcontent-%COMP%]{\r\n    display: var(--gameObjs);\r\n}\r\n.flipBody[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    align-content: center;\r\n}\r\n.topFlip[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;  \r\n    margin-left: 2px;\r\n    margin-right: 30px;\r\n    width: 100%;    \r\n}\r\n.startBut[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    width: 150px;\r\n    background-image: var(--introBg);\r\n    opacity: .9;\r\n    color: #ffffff;\r\n    text-shadow: 2px 2px rgb(15, 15, 15);\r\n    border-radius: 30px;\r\n    font-size: 20px;\r\n    background-size: 100%;\r\n    background-position: 50% 50%;\r\n    margin-top: 5px;\r\n    font-size: 1.5em;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n}\r\n.mainCont[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.leftFlip[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n    float: left;\r\n    width: 128px;\r\n}\r\n.usingImgs[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: left;\r\n    width: 128px;\r\n}\r\n.presetsImgs[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n    flex-wrap: wrap;\r\n\talign-items:left;\r\n    justify-content: left;\r\n}\r\n.defaultImg[_ngcontent-%COMP%]{\r\n    background-image: var(--defaultImg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    display: block;\r\n}\r\n.fileImg[_ngcontent-%COMP%]{\r\n    background-image: var(--fileImg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    display: block;\r\n    width: 64px;\r\n    height: 64px;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n.inputArea[_ngcontent-%COMP%]{\r\n\tjustify-content: center;\r\n\tpadding-bottom: 10px;\t\r\n}\r\n#StartGame[_ngcontent-%COMP%]{\r\n\tbackground-color: rgb(54, 54, 54);\r\n\tcolor: antiquewhite;\r\n\theight: 30px;\r\n\tmargin : auto;\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 15px;\r\n\tfont-size: 20px;\r\n}\r\n.smallButtons[_ngcontent-%COMP%]{\r\n    width: 30px;\r\n    height: 30px\r\n}\r\n.curLevel[_ngcontent-%COMP%]{\r\n    padding: 5px 10px;\r\n}\r\n.grid[_ngcontent-%COMP%]{\r\n    width: 100%; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0L2ZsaXAtZ2FtZS9mbGlwLWdhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNFQUFzRTtBQUMxRTtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0NBQ0MsYUFBYTtJQUNWLGVBQWU7Q0FDbEIsZ0JBQWdCO0lBQ2IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtBQUNyQjtBQUNBO0NBQ0MsaUNBQWlDO0NBQ2pDLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osYUFBYTtDQUNiLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0L2ZsaXAtZ2FtZS9mbGlwLWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lT2Jqe1xyXG4gICAgZGlzcGxheTogdmFyKC0tZ2FtZU9ianMpO1xyXG59XHJcbi5mbGlwQm9keXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udG9wRmxpcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlOyAgICBcclxufVxyXG4uc3RhcnRCdXR7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbnRyb0JnKTtcclxuICAgIG9wYWNpdHk6IC45O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoMTUsIDE1LCAxNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tYWluQ29udHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmxlZnRGbGlwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG59XHJcbi51c2luZ0ltZ3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG59XHJcbi5wcmVzZXRzSW1nc3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cdGFsaWduLWl0ZW1zOmxlZnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuLmRlZmF1bHRJbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1kZWZhdWx0SW1nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmZpbGVJbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1maWxlSW1nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5pbnB1dEFyZWF7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XHRcclxufVxyXG4jU3RhcnRHYW1le1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcclxuXHRjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRtYXJnaW4gOiBhdXRvO1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc21hbGxCdXR0b25ze1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHhcclxufVxyXG4uY3VyTGV2ZWx7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4uZ3JpZHtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flip-game',
          templateUrl: './flip-game.component.html',
          styleUrls: ['./flip-game.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/add-todo/add-todo.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/add-todo/add-todo.component.ts ***!
    \***********************************************************/

  /*! exports provided: AddTodoComponent */

  /***/
  function srcAppComponentsAddTodoAddTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function () {
      return AddTodoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddTodoComponent = /*#__PURE__*/function () {
      function AddTodoComponent() {
        _classCallCheck(this, AddTodoComponent);

        this.addTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tempPlaceHolder = "Add...";
        this.addText = "Submit";
      }

      _createClass(AddTodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.title) {
            var todo = {
              title: this.title,
              completed: false
            };
            this.addTodo.emit(todo);
          }
        }
      }]);

      return AddTodoComponent;
    }();

    AddTodoComponent.ɵfac = function AddTodoComponent_Factory(t) {
      return new (t || AddTodoComponent)();
    };

    AddTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddTodoComponent,
      selectors: [["app-add-todo"]],
      inputs: {
        tempPlaceHolder: ["tempText", "tempPlaceHolder"],
        addText: "addText"
      },
      outputs: {
        addTodo: "addTodo"
      },
      decls: 3,
      vars: 3,
      consts: [[1, "form", 3, "ngSubmit"], ["type", "text", "name", "title", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "submit", 1, "btn", 3, "value"]],
      template: function AddTodoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddTodoComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTodoComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.tempPlaceHolder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.addText);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: [".form[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.form[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]{\r\n    flex: 10;\r\n    padding: 5px;\r\n}\r\n.form[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%]{\r\n    flex: 2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdG9kby9hZGQtdG9kby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFDQTtJQUNJLE9BQU87QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRvZG8vYWRkLXRvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J117XHJcbiAgICBmbGV4OiAxMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXXtcclxuICAgIGZsZXg6IDI7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-todo',
          templateUrl: './add-todo.component.html',
          styleUrls: ['./add-todo.component.css']
        }]
      }], function () {
        return [];
      }, {
        addTodo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        tempPlaceHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['tempText']
        }],
        addText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['addText']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/display/exp-obj-display/exp-obj-display.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/display/exp-obj-display/exp-obj-display.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ExpObjDisplayComponent */

  /***/
  function srcAppComponentsDisplayExpObjDisplayExpObjDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpObjDisplayComponent", function () {
      return ExpObjDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_exp_obj_exp_obj_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/exp-obj/exp-obj.module */
    "./src/app/models/exp-obj/exp-obj.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExpObjDisplayComponent_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var expObj_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", expObj_r1, "");
      }
    }

    var ExpObjDisplayComponent = /*#__PURE__*/function () {
      function ExpObjDisplayComponent() {
        _classCallCheck(this, ExpObjDisplayComponent);

        this.expObj = new src_app_models_exp_obj_exp_obj_module__WEBPACK_IMPORTED_MODULE_1__["ExpObjModule"]();
        this.imgPath = "assets/img/";
      }

      _createClass(ExpObjDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.des = this.expObj.description;
        }
      }]);

      return ExpObjDisplayComponent;
    }();

    ExpObjDisplayComponent.ɵfac = function ExpObjDisplayComponent_Factory(t) {
      return new (t || ExpObjDisplayComponent)();
    };

    ExpObjDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExpObjDisplayComponent,
      selectors: [["app-exp-obj-display"]],
      inputs: {
        expObj: "expObj"
      },
      decls: 6,
      vars: 4,
      consts: [[1, "expObj"], ["target", "_blanck", 3, "href"], [1, "image_1", 3, "src"], ["class", "expText", 4, "ngFor", "ngForOf"], [1, "expText"]],
      template: function ExpObjDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExpObjDisplayComponent_p_5_Template, 2, 1, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.expObj.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.expObj.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgPath + ctx.expObj.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.des);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".expObj[_ngcontent-%COMP%] {\r\n\tcolor: rgb(235, 235, 235);\r\n\tfont-size: 15px;\r\n\tpadding-top: 5px;\r\n\ttext-align: center;\r\n\tmargin: 3px 5px;\r\n\tbackground-color: #648ecc38;\r\n\tborder: 1px white solid;\r\n\tborder-radius: 15px;\t\r\n}\t\r\n.expObj[_ngcontent-%COMP%]:hover{\r\n\t-webkit-animation: scaleUp 0.5s;\r\n\t        animation: scaleUp 0.5s; \r\n\ttransform: scale(1.2);\r\n}\t\r\n.expText[_ngcontent-%COMP%]{\r\n\t-webkit-animation: fadeInText 4s;\r\n\t        animation: fadeInText 4s; \r\n\tmargin: 0 10px;\r\n}\t\r\n.image_1[_ngcontent-%COMP%] {\r\n\twidth: 90%;\r\n\theight: 100px;\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n\t -webkit-animation: fadeIn 2s;\r\n\t         animation: fadeIn 2s; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5L2V4cC1vYmotZGlzcGxheS9leHAtb2JqLWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsMkJBQTJCO0NBQzNCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLCtCQUF1QjtTQUF2Qix1QkFBdUI7Q0FDdkIscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxnQ0FBd0I7U0FBeEIsd0JBQXdCO0NBQ3hCLGNBQWM7QUFDZjtBQUNBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixzQkFBbUI7SUFBbkIsbUJBQW1CO0VBQ2xCLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rpc3BsYXkvZXhwLW9iai1kaXNwbGF5L2V4cC1vYmotZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cE9iaiB7XHJcblx0Y29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0cGFkZGluZy10b3A6IDVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAzcHggNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM2NDhlY2MzODtcclxuXHRib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1x0XHJcbn1cdFxyXG4uZXhwT2JqOmhvdmVye1xyXG5cdGFuaW1hdGlvbjogc2NhbGVVcCAwLjVzOyBcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuLmV4cFRleHR7XHJcblx0YW5pbWF0aW9uOiBmYWRlSW5UZXh0IDRzOyBcclxuXHRtYXJnaW46IDAgMTBweDtcclxufVxyXG4uaW1hZ2VfMSB7XHJcblx0d2lkdGg6IDkwJTtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblx0IGFuaW1hdGlvbjogZmFkZUluIDJzOyBcclxufVx0Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpObjDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-exp-obj-display',
          templateUrl: './exp-obj-display.component.html',
          styleUrls: ['./exp-obj-display.component.css']
        }]
      }], function () {
        return [];
      }, {
        expObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/display/images-grid-display/images-grid-display.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/display/images-grid-display/images-grid-display.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ImagesGridDisplayComponent */

  /***/
  function srcAppComponentsDisplayImagesGridDisplayImagesGridDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesGridDisplayComponent", function () {
      return ImagesGridDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["containerObj"];

    function ImagesGridDisplayComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesGridDisplayComponent_div_2_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var img_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onSelect(img_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.getCss(img_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.getDisplay(img_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ImagesGridDisplayComponent = /*#__PURE__*/function () {
      function ImagesGridDisplayComponent() {
        _classCallCheck(this, ImagesGridDisplayComponent);

        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.curImages = [];
        this.defaultSrc = "";
        this.curImagesData = [{
          css: "preset animal_1",
          src: "",
          id: 0
        }, {
          css: "preset animal_3",
          src: "",
          id: 1
        }];
      }

      _createClass(ImagesGridDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //shows or hides all images on the grid

      }, {
        key: "ShowCurImages",
        value: function ShowCurImages(show) {
          var _this3 = this;

          this.curImages.forEach(function (img) {
            _this3.ShowComponent(img, show);
          });
        } //Set the src of the object to default

      }, {
        key: "SetSrcToDefault",
        value: function SetSrcToDefault(index) {
          this.curImages[index].src = this.defaultSrc;
        } //controls the visibility of the given component

      }, {
        key: "ShowComponent",
        value: function ShowComponent(img, show) {
          if (show) {
            img.style.display = "block";
          } else {
            img.style.display = "none";
          }
        } //Sets the sre to the images at the given index

      }, {
        key: "SetSrcTo",
        value: function SetSrcTo(index, src) {
          this.curImages[index].src = src;
        }
      }, {
        key: "onSelect",
        value: function onSelect(img) {
          this.onSelected.emit(img);
        }
      }, {
        key: "getDisplay",
        value: function getDisplay(img) {
          return img.src;
        }
      }, {
        key: "getCss",
        value: function getCss(img) {
          return img.css;
        }
      }]);

      return ImagesGridDisplayComponent;
    }();

    ImagesGridDisplayComponent.ɵfac = function ImagesGridDisplayComponent_Factory(t) {
      return new (t || ImagesGridDisplayComponent)();
    };

    ImagesGridDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImagesGridDisplayComponent,
      selectors: [["app-images-grid-display"]],
      viewQuery: function ImagesGridDisplayComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      inputs: {
        curImagesData: "curImagesData"
      },
      outputs: {
        onSelected: "onSelected"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "gridParent"], [1, "gridObj"], [4, "ngFor", "ngForOf"], [3, "click"], ["alt", "", 3, "src"]],
      template: function ImagesGridDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImagesGridDisplayComponent_div_2_Template, 3, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.curImagesData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".gridParent[_ngcontent-%COMP%]{\r\n\tline-height : 1;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.gridObj[_ngcontent-%COMP%]{ \r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\talign-items:center;\r\n\tjustify-content: center;\r\n\tflex-basis: 10%;\r\n\tmargin: 10px 10px;\r\n\theight: var(--gridX);\r\n\twidth: var(--gridY);\r\n}\r\n.gridObj[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.gridObj[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\tcursor: pointer;\r\n\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5L2ltYWdlcy1ncmlkLWRpc3BsYXkvaW1hZ2VzLWdyaWQtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLGVBQWU7Q0FDZixTQUFTO0NBQ1QsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxlQUFlOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS9pbWFnZXMtZ3JpZC1kaXNwbGF5L2ltYWdlcy1ncmlkLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZ3JpZFBhcmVudHtcclxuXHRsaW5lLWhlaWdodCA6IDE7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuLmdyaWRPYmp7IFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LWJhc2lzOiAxMCU7XHJcblx0bWFyZ2luOiAxMHB4IDEwcHg7XHJcblx0aGVpZ2h0OiB2YXIoLS1ncmlkWCk7XHJcblx0d2lkdGg6IHZhcigtLWdyaWRZKTtcclxufVxyXG4uZ3JpZE9iaiBhIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG4uZ3JpZE9iaiBpbWd7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFxyXG59XHJcbiAgICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesGridDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-images-grid-display',
          templateUrl: './images-grid-display.component.html',
          styleUrls: ['./images-grid-display.component.css']
        }]
      }], function () {
        return [];
      }, {
        onSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["containerObj"]
        }],
        curImagesData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/display/list-display/list-display.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/display/list-display/list-display.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ListDisplayComponent */

  /***/
  function srcAppComponentsDisplayListDisplayListDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListDisplayComponent", function () {
      return ListDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/Data/resume-data.service */
    "./src/app/services/Data/resume-data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListDisplayComponent_div_6_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", list_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function ListDisplayComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListDisplayComponent_div_6_ul_3_Template, 2, 1, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var arg_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", arg_r1.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arg_r1.list);
      }
    }

    var ListDisplayComponent = /*#__PURE__*/function () {
      function ListDisplayComponent(resumeData) {
        _classCallCheck(this, ListDisplayComponent);

        this.resumeData = resumeData;
        this.title = "title";
      }

      _createClass(ListDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.skills = this.resumeData.getSkills();
        }
      }]);

      return ListDisplayComponent;
    }();

    ListDisplayComponent.ɵfac = function ListDisplayComponent_Factory(t) {
      return new (t || ListDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_1__["ResumeDataService"]));
    };

    ListDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListDisplayComponent,
      selectors: [["app-list-display"]],
      inputs: {
        title: "title"
      },
      decls: 7,
      vars: 2,
      consts: [[1, "skills"], [1, "h2Header"], [1, "hrDotted"], [1, "split"], [1, "skillsMain"], ["class", "skillsObj", 4, "ngFor", "ngForOf"], [1, "skillsObj"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]],
      template: function ListDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListDisplayComponent_div_6_Template, 4, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".skills[_ngcontent-%COMP%] {\r\n\tbackground-color: #648ecc38;\r\n\ttext-align: left;\r\n    padding-top:5px;\t\r\n\tpadding-bottom: 5px;\t\r\n\tborder-radius: 40px;\r\n}\t\r\n.skillsObj[_ngcontent-%COMP%]{\r\n\t-webkit-animation: fadeInText 3s;\r\n\t        animation: fadeInText 3s; \r\n}\t\r\n.skillsObj[_ngcontent-%COMP%]:hover{\r\n\t-webkit-animation: scaleUp 0.5s;\r\n\t        animation: scaleUp 0.5s; \r\n    transform: scale(1.2);\r\n}\t\r\n.skillsObj[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\t\r\n.skillsObj[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{ \r\n    margin-left: 30px;\r\n}\t\r\n.split[_ngcontent-%COMP%]{\r\n\theight: 7px;\r\n\twidth: 100%;\r\n\tbackground-origin: padding-box;\t\r\n}\t\r\n.skillsMain[_ngcontent-%COMP%]{\t\r\n\tpadding-left: 20px;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\talign-items: flex-start;\r\n\tjustify-content: space-around;\r\n\t-webkit-animation: fadeIn 1s;\r\n\t        animation: fadeIn 1s; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5L2xpc3QtZGlzcGxheS9saXN0LWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDJCQUEyQjtDQUMzQixnQkFBZ0I7SUFDYixlQUFlO0NBQ2xCLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGdDQUF3QjtTQUF4Qix3QkFBd0I7QUFDekI7QUFDQTtDQUNDLCtCQUF1QjtTQUF2Qix1QkFBdUI7SUFDcEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLDhCQUE4QjtBQUMvQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtDQUM3Qiw0QkFBb0I7U0FBcEIsb0JBQW9CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5L2xpc3QtZGlzcGxheS9saXN0LWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbHMge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM2NDhlY2MzODtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1x0XHJcblx0cGFkZGluZy1ib3R0b206IDVweDtcdFxyXG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cdFxyXG4uc2tpbGxzT2Jqe1xyXG5cdGFuaW1hdGlvbjogZmFkZUluVGV4dCAzczsgXHJcbn1cclxuLnNraWxsc09iajpob3ZlcntcclxuXHRhbmltYXRpb246IHNjYWxlVXAgMC41czsgXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuLnNraWxsc09iaiBoNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnNraWxsc09iaiB1bHsgXHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uc3BsaXR7XHJcblx0aGVpZ2h0OiA3cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1vcmlnaW46IHBhZGRpbmctYm94O1x0XHJcbn1cclxuLnNraWxsc01haW57XHRcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0YW5pbWF0aW9uOiBmYWRlSW4gMXM7IFxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list-display',
          templateUrl: './list-display.component.html',
          styleUrls: ['./list-display.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_1__["ResumeDataService"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/input-area/input-area.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/input-area/input-area.component.ts ***!
    \***************************************************************/

  /*! exports provided: InputAreaComponent */

  /***/
  function srcAppComponentsInputAreaInputAreaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputAreaComponent", function () {
      return InputAreaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InputAreaComponent = /*#__PURE__*/function () {
      function InputAreaComponent() {
        _classCallCheck(this, InputAreaComponent);

        this.onDeleteText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.text = "add text...";
      }

      _createClass(InputAreaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onDelete",
        value: function onDelete() {
          //this would send the content of the input field only if there is a text
          if (this.text) {
            this.onDeleteText.emit(this.text);
          }
        }
      }]);

      return InputAreaComponent;
    }();

    InputAreaComponent.ɵfac = function InputAreaComponent_Factory(t) {
      return new (t || InputAreaComponent)();
    };

    InputAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputAreaComponent,
      selectors: [["app-input-area"]],
      inputs: {
        text: "text"
      },
      outputs: {
        onDeleteText: "onDeleteText"
      },
      decls: 5,
      vars: 1,
      consts: [[1, "textToAdd"], [1, "inpuTextObj"], [1, "deleteBut", 3, "click"]],
      template: function InputAreaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputAreaComponent_Template_button_click_3_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQtYXJlYS9pbnB1dC1hcmVhLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-input-area',
          templateUrl: './input-area.component.html',
          styleUrls: ['./input-area.component.css']
        }]
      }], function () {
        return [];
      }, {
        onDeleteText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/intro/intro.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/intro/intro.component.ts ***!
    \*****************************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppComponentsIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IntroComponent = /*#__PURE__*/function () {
      function IntroComponent() {
        _classCallCheck(this, IntroComponent);
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroComponent;
    }();

    IntroComponent.ɵfac = function IntroComponent_Factory(t) {
      return new (t || IntroComponent)();
    };

    IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntroComponent,
      selectors: [["app-intro"]],
      decls: 2,
      vars: 0,
      template: function IntroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "intro works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-intro',
          templateUrl: './intro.component.html',
          styleUrls: ['./intro.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/layout/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/layout/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.title = 'Title';
        this.cssClass = "header";
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        title: "title",
        cssClass: "cssClass"
      },
      decls: 3,
      vars: 4,
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      styles: [".header[_ngcontent-%COMP%]{\r\n    background: #333;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5oZWFkZXIgYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/nav-control/nav-control.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/nav-control/nav-control.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NavControlComponent */

  /***/
  function srcAppComponentsNavControlNavControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavControlComponent", function () {
      return NavControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavControlComponent = /*#__PURE__*/function () {
      function NavControlComponent() {
        _classCallCheck(this, NavControlComponent);
      }

      _createClass(NavControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavControlComponent;
    }();

    NavControlComponent.ɵfac = function NavControlComponent_Factory(t) {
      return new (t || NavControlComponent)();
    };

    NavControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavControlComponent,
      selectors: [["app-nav-control"]],
      decls: 5,
      vars: 0,
      consts: [[1, "mainNav"], ["routerLink", "/"], ["routerLink", "/projects"]],
      template: function NavControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".mainNav[_ngcontent-%COMP%]{\r\n    background: #333;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n.mainNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtY29udHJvbC9uYXYtY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWNvbnRyb2wvbmF2LWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluTmF2e1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubWFpbk5hdiBhe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-control',
          templateUrl: './nav-control.component.html',
          styleUrls: ['./nav-control.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/projects/projects.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/projects/projects.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppComponentsProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_projects_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/projects-data.service */
    "./src/app/services/projects-data.service.ts");
    /* harmony import */


    var _todos_todos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../todos/todos.component */
    "./src/app/components/todos/todos.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["container"];

    function ProjectsComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_8_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var arg_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onSelect(arg_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var arg_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", arg_r2.title, " ");
      }
    }

    function ProjectsComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 10);
      }
    }

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(projectsData, viewContainerRef, resolver) {
        _classCallCheck(this, ProjectsComponent);

        this.projectsData = projectsData;
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.componentToLoad = _todos_todos_component__WEBPACK_IMPORTED_MODULE_2__["TodosComponent"];
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.projects = this.projectsData.getProjects();

          if (this.projects.length > 0) {
            this.onSelect(this.projects[0]);
          }
        }
      }, {
        key: "onSelect",
        value: function onSelect(project) {
          this.description = project.description;
          this.componentToLoad = project.component;
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_projects_data_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      viewQuery: function ProjectsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.entry = _t.first);
        }
      },
      decls: 13,
      vars: 3,
      consts: [[1, "infoList", "projectsInfo"], [1, "projects"], [1, "projectSelector"], [1, "allProjects"], [4, "ngFor", "ngForOf"], [1, "projectArea"], [1, "des"], [3, "innerHtml"], ["class", "project", 4, "ngComponentOutlet"], [3, "click"], [1, "project"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Projects and Practices for web development ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 3, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectsComponent_ng_container_12_Template, 1, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx.componentToLoad);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgComponentOutlet"]],
      styles: [".projectsInfo[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family:  \"San Francisco\",\"Helvetica Neue\",Helvetica,Arial;\r\n     font-size: 20px;\r\n}\r\n.projects[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    \r\n    justify-content:  space-between;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n.projectSelector[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column; \r\n    height: auto;  \r\n    text-align: center;\r\n    background-color: rgba(37, 37, 37, 0.164);\r\n    border-radius: 30px;\r\n}\r\n.allProjects[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    padding: 10px 20px;\r\n \r\n}\r\n.allProjects[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n\r\n    background-image: var(--liBg);\r\n     opacity: .9; \r\n   width: 200px;\r\n    height: 30px;\r\n    color: #e2e2e2;    \r\n    background-size: 100%;\r\n    background-position: 50% 50%;\r\n    margin-top: 5px;    \r\n}\r\n.projectArea[_ngcontent-%COMP%]{\r\n    background-color: #4e4e4e4b;\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 20px;\r\n    left: 12%;    \r\n    margin-top: 5px;\r\n    margin-right: 1%;   \r\n    border-radius: 30px;\r\n    border: 2px solid rgba(240, 240, 240, 0.534);\r\n}\r\n.des[_ngcontent-%COMP%]{ \r\n    margin: 10px 10px;\r\n    height: 15%; \r\n    width: 98%;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    background-color: #4e4e4e4b;\r\n}\r\n.des[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%; \r\n    font-size: 1.5vh;\r\n}\r\n.project[_ngcontent-%COMP%]{\r\n    top: 25%;\r\n    height: 75%;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhEQUE4RDtLQUM3RCxlQUFlO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isa0JBQWtCOztBQUV0QjtBQUNBOztJQUVJLDZCQUE2QjtLQUM1QixXQUFXO0dBQ2IsWUFBWTtJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0c0luZm97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogIFwiU2FuIEZyYW5jaXNjb1wiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWw7XHJcbiAgICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5wcm9qZWN0c3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIHdpZHRoOiA5NSU7ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnByb2plY3RTZWxlY3RvcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGhlaWdodDogYXV0bzsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjE2NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbi5hbGxQcm9qZWN0c3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiBcclxufVxyXG4uYWxsUHJvamVjdHMgYnV0dG9ue1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWxpQmcpO1xyXG4gICAgIG9wYWNpdHk6IC45OyBcclxuICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6ICNlMmUyZTI7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDsgICAgXHJcbn1cclxuLnByb2plY3RBcmVhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGU0ZTRiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbGVmdDogMTIlOyAgICBcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7ICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUzNCk7XHJcbn1cclxuLmRlc3sgXHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIGhlaWdodDogMTUlOyBcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGU0ZTRiO1xyXG59XHJcbi5kZXMgcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGZvbnQtc2l6ZTogMS41dmg7XHJcbn1cclxuLnByb2plY3R7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_projects_data_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsDataService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        entry: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['container']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/resume-intro/resume-intro.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/resume-intro/resume-intro.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ResumeIntroComponent */

  /***/
  function srcAppComponentsResumeIntroResumeIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeIntroComponent", function () {
      return ResumeIntroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/Data/resume-data.service */
    "./src/app/services/Data/resume-data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResumeIntroComponent_a_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var info_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", info_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", info_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", info_r1.altText);
      }
    }

    var ResumeIntroComponent = /*#__PURE__*/function () {
      function ResumeIntroComponent(resumeData) {
        _classCallCheck(this, ResumeIntroComponent);

        this.resumeData = resumeData;
      }

      _createClass(ResumeIntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contactMedia = this.resumeData.getMediaData();
        }
      }]);

      return ResumeIntroComponent;
    }();

    ResumeIntroComponent.ɵfac = function ResumeIntroComponent_Factory(t) {
      return new (t || ResumeIntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_1__["ResumeDataService"]));
    };

    ResumeIntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeIntroComponent,
      selectors: [["app-resume-intro"]],
      decls: 14,
      vars: 1,
      consts: [[1, "infoList"], [1, "media"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [3, "src", "alt"]],
      template: function ResumeIntroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email: abraham_gto@hotmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Skype: lholykillerl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "From : Salamanca, Guanajuato in Mexico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I'm a single mexican 31 years old.I'm willing to relocate. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Some of my good points would be that i'm honest, good-natured,open-minded and determined. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResumeIntroComponent_a_13_Template, 2, 3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactMedia);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lLWludHJvL3Jlc3VtZS1pbnRyby5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeIntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume-intro',
          templateUrl: './resume-intro.component.html',
          styleUrls: ['./resume-intro.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_1__["ResumeDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/resume/resume.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/resume/resume.component.ts ***!
    \*******************************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppComponentsResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/Data/resume-data.service */
    "./src/app/services/Data/resume-data.service.ts");
    /* harmony import */


    var _resume_intro_resume_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../resume-intro/resume-intro.component */
    "./src/app/components/resume-intro/resume-intro.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _display_list_display_list_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../display/list-display/list-display.component */
    "./src/app/components/display/list-display/list-display.component.ts");
    /* harmony import */


    var _display_exp_obj_display_exp_obj_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../display/exp-obj-display/exp-obj-display.component */
    "./src/app/components/display/exp-obj-display/exp-obj-display.component.ts");

    function ResumeComponent_app_exp_obj_display_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-exp-obj-display", 9);
      }

      if (rf & 2) {
        var expObj_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expObj", expObj_r2);
      }
    }

    function ResumeComponent_p_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var arg_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](arg_r3);
      }
    }

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent(resumeData) {
        _classCallCheck(this, ResumeComponent);

        this.resumeData = resumeData;
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resumeData.getExperience();
          this.expObjs = this.resumeData.allExpObjs;
          this.summeryAndEducation = this.resumeData.getSummeryAndEducationText();
        }
      }]);

      return ResumeComponent;
    }();

    ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_1__["ResumeDataService"]));
    };

    ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      decls: 16,
      vars: 2,
      consts: [[1, "mainBg"], [1, "bg-1"], [1, "h2Header"], [1, "hrDotted"], [1, "expArea"], [3, "expObj", 4, "ngFor", "ngForOf"], ["title", "Technical Skills"], [1, "summery", "bg-1"], [4, "ngFor", "ngForOf"], [3, "expObj"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-resume-intro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResumeComponent_app_exp_obj_display_8_Template, 1, 1, "app-exp-obj-display", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-list-display", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Summary and Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResumeComponent_p_15_Template, 2, 1, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expObjs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.summeryAndEducation);
        }
      },
      directives: [_resume_intro_resume_intro_component__WEBPACK_IMPORTED_MODULE_2__["ResumeIntroComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _display_list_display_list_display_component__WEBPACK_IMPORTED_MODULE_4__["ListDisplayComponent"], _display_exp_obj_display_exp_obj_display_component__WEBPACK_IMPORTED_MODULE_5__["ExpObjDisplayComponent"]],
      styles: [".mainBg[_ngcontent-%COMP%]{\r\n    border-radius: 15px;\r\n\tmargin: 1px 35px;\r\n}\t\r\n.skillsMain[_ngcontent-%COMP%]{\t\r\n\tpadding-left: 20px;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\talign-items: flex-start;\r\n\tjustify-content: space-around;\r\n\t-webkit-animation: fadeIn 1s;\r\n\t        animation: fadeIn 1s; \r\n}\t\r\n.summery[_ngcontent-%COMP%] {\r\n\tmargin-top: 10px;\r\n\tborder-radius: 5px;\r\n\ttext-align: center;\r\n\tfont-size: 16px;\r\n\tfont-family: serif;\r\n\tmin-height: 100px;\r\n\tpadding-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsNkJBQTZCO0NBQzdCLDRCQUFvQjtTQUFwQixvQkFBb0I7QUFDckI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5CZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0bWFyZ2luOiAxcHggMzVweDtcclxufVx0XHJcbi5za2lsbHNNYWlue1x0XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdGFuaW1hdGlvbjogZmFkZUluIDFzOyBcclxufVxyXG4uc3VtbWVyeSB7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LWZhbWlseTogc2VyaWY7XHJcblx0bWluLWhlaWdodDogMTAwcHg7XHJcblx0cGFkZGluZy10b3A6IDVweDtcclxufVx0Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume',
          templateUrl: './resume.component.html',
          styleUrls: ['./resume.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_Data_resume_data_service__WEBPACK_IMPORTED_MODULE_1__["ResumeDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/text-to-json/text-to-json.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/text-to-json/text-to-json.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TextToJsonComponent */

  /***/
  function srcAppComponentsTextToJsonTextToJsonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextToJsonComponent", function () {
      return TextToJsonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _library_download_tool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../library/download-tool.service */
    "./src/app/library/download-tool.service.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../layout/header/header.component */
    "./src/app/components/layout/header/header.component.ts");
    /* harmony import */


    var _Input_add_text_add_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Input/add-text/add-text.component */
    "./src/app/components/Input/add-text/add-text.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _input_area_input_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../input-area/input-area.component */
    "./src/app/components/input-area/input-area.component.ts");

    function TextToJsonComponent_app_input_area_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-input-area", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDeleteText", function TextToJsonComponent_app_input_area_3_Template_app_input_area_onDeleteText_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.deleteTextData($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var theText_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", theText_r1);
      }
    }

    var TextToJsonComponent = /*#__PURE__*/function () {
      function TextToJsonComponent(downloadTool) {
        _classCallCheck(this, TextToJsonComponent);

        this.downloadTool = downloadTool;
      }

      _createClass(TextToJsonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //TODO remove this and get the data from json
          this.myText = ["Add this text", "And This too!", "One More!", "And another one!"];
        }
      }, {
        key: "addData",
        value: function addData(theText) {
          this.myText.push(theText);
        }
      }, {
        key: "deleteTextData",
        value: function deleteTextData(theText) {
          this.myText = this.myText.filter(function (t) {
            return t !== theText;
          });
        }
      }, {
        key: "createJson",
        value: function createJson(fileName) {
          if (this.myText != null && this.myText.length > 0) {
            this.downloadTool.DownloadTextToFileAsJson(this.myText, fileName);
          }
        }
      }]);

      return TextToJsonComponent;
    }();

    TextToJsonComponent.ɵfac = function TextToJsonComponent_Factory(t) {
      return new (t || TextToJsonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_library_download_tool_service__WEBPACK_IMPORTED_MODULE_1__["DownloadToolService"]));
    };

    TextToJsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TextToJsonComponent,
      selectors: [["app-text-to-json"]],
      decls: 6,
      vars: 1,
      consts: [["title", "Text To Json"], ["tempText", "Add Text To Json", "addText", "Add", 3, "addTextData"], [3, "text", "onDeleteText", 4, "ngFor", "ngForOf"], ["title", "Download File", "cssClass", "smallHeader"], ["tempText", "File name...", "addText", "Download", 3, "addTextData"], [3, "text", "onDeleteText"]],
      template: function TextToJsonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-add-text", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addTextData", function TextToJsonComponent_Template_app_add_text_addTextData_2_listener($event) {
            return ctx.addData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextToJsonComponent_app_input_area_3_Template, 1, 1, "app-input-area", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-add-text", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addTextData", function TextToJsonComponent_Template_app_add_text_addTextData_5_listener($event) {
            return ctx.createJson($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myText);
        }
      },
      directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _Input_add_text_add_text_component__WEBPACK_IMPORTED_MODULE_3__["AddTextComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _input_area_input_area_component__WEBPACK_IMPORTED_MODULE_5__["InputAreaComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dC10by1qc29uL3RleHQtdG8tanNvbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextToJsonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-text-to-json',
          templateUrl: './text-to-json.component.html',
          styleUrls: ['./text-to-json.component.css']
        }]
      }], function () {
        return [{
          type: _library_download_tool_service__WEBPACK_IMPORTED_MODULE_1__["DownloadToolService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/todos/todo-item/todo-item.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/todos/todo-item/todo-item.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TodoItemComponent */

  /***/
  function srcAppComponentsTodosTodoItemTodoItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function () {
      return TodoItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Todo */
    "./src/app/models/Todo.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var TodoItemComponent = /*#__PURE__*/function () {
      function TodoItemComponent() {
        _classCallCheck(this, TodoItemComponent);

        this.deleteTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(TodoItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //Set dunamic Classes

      }, {
        key: "setClasses",
        value: function setClasses() {
          var classes = {
            todo: true,
            'isComplete': this.todo.completed
          };
          return classes;
        }
      }, {
        key: "onToggle",
        value: function onToggle(todo) {
          todo.completed = !todo.completed;
        }
      }, {
        key: "onDelete",
        value: function onDelete(todo) {
          this.deleteTodo.emit(todo);
        }
      }]);

      return TodoItemComponent;
    }();

    TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) {
      return new (t || TodoItemComponent)();
    };

    TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoItemComponent,
      selectors: [["app-todo-item"]],
      inputs: {
        todo: "todo"
      },
      outputs: {
        deleteTodo: "deleteTodo"
      },
      decls: 6,
      vars: 2,
      consts: [[3, "ngClass"], ["type", "checkbox", 3, "change"], [1, "theTittle"], [1, "del", 3, "click"]],
      template: function TodoItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoItemComponent_Template_input_change_1_listener() {
            return ctx.onToggle(ctx.todo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_4_listener() {
            return ctx.onDelete(ctx.todo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.title);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".del[_ngcontent-%COMP%]{\r\n    background: #ff0000;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 5px 9px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    float: right;\r\n}\r\n.todo[_ngcontent-%COMP%]{\r\n    background: #5c5c5c;\r\n    padding: 10px;\r\n    border-bottom: 1px #ccc dotted;\r\n}\r\n.isComplete[_ngcontent-%COMP%]{\r\n    text-decoration: line-through;\r\n}\r\n.theTittle[_ngcontent-%COMP%]{\r\n    display: inline;\r\n    text-decoration: none;\r\n}\r\n.is-Notcomplete[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2Rvcy90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZG9zL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWx7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHggOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi50b2Rve1xyXG4gICAgYmFja2dyb3VuZDogIzVjNWM1YztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggI2NjYyBkb3R0ZWQ7XHJcbn1cclxuLmlzQ29tcGxldGV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4udGhlVGl0dGxle1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5pcy1Ob3Rjb21wbGV0ZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-item',
          templateUrl: './todo-item.component.html',
          styleUrls: ['./todo-item.component.css']
        }]
      }], function () {
        return [];
      }, {
        todo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deleteTodo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/todos/todos.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/todos/todos.component.ts ***!
    \*****************************************************/

  /*! exports provided: TodosComponent */

  /***/
  function srcAppComponentsTodosTodosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosComponent", function () {
      return TodosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../layout/header/header.component */
    "./src/app/components/layout/header/header.component.ts");
    /* harmony import */


    var _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../add-todo/add-todo.component */
    "./src/app/components/add-todo/add-todo.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todo-item/todo-item.component */
    "./src/app/components/todos/todo-item/todo-item.component.ts");

    function TodosComponent_app_todo_item_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-todo-item", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteTodo", function TodosComponent_app_todo_item_2_Template_app_todo_item_deleteTodo_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.deleteTodo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var todo_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r1);
      }
    }

    var TodosComponent = /*#__PURE__*/function () {
      function TodosComponent(todoService) {
        _classCallCheck(this, TodosComponent);

        this.todoService = todoService;
      }

      _createClass(TodosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.todos = this.todoService.getTodos();
        }
      }, {
        key: "deleteTodo",
        value: function deleteTodo(todo) {
          this.todos = this.todos.filter(function (t) {
            return t !== todo;
          });
        }
      }, {
        key: "addTodo",
        value: function addTodo(todo) {
          this.todos.push(todo);
        }
      }]);

      return TodosComponent;
    }();

    TodosComponent.ɵfac = function TodosComponent_Factory(t) {
      return new (t || TodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]));
    };

    TodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodosComponent,
      selectors: [["app-todos"]],
      decls: 3,
      vars: 1,
      consts: [["title", "Todos"], ["tempText", "Add TODO....", 3, "addTodo"], [3, "todo", "deleteTodo", 4, "ngFor", "ngForOf"], [3, "todo", "deleteTodo"]],
      template: function TodosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-todo", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addTodo", function TodosComponent_Template_app_add_todo_addTodo_1_listener($event) {
            return ctx.addTodo($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodosComponent_app_todo_item_2_Template, 1, 1, "app-todo-item", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);
        }
      },
      directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_3__["AddTodoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__["TodoItemComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todos',
          templateUrl: './todos.component.html',
          styleUrls: ['./todos.component.css']
        }]
      }], function () {
        return [{
          type: _services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/library/download-tool.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/library/download-tool.service.ts ***!
    \**************************************************/

  /*! exports provided: DownloadToolService */

  /***/
  function srcAppLibraryDownloadToolServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadToolService", function () {
      return DownloadToolService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DownloadToolService = /*#__PURE__*/function () {
      function DownloadToolService() {
        _classCallCheck(this, DownloadToolService);

        this.a = document.createElement('a');
      }

      _createClass(DownloadToolService, [{
        key: "DownloadTextToFileAsJson",
        value: function DownloadTextToFileAsJson(theText, fileName) {
          if (theText == null) {
            console.log("No Data");
            return;
          }

          var blob = new Blob([JSON.stringify(theText, null, 2)], {
            type: 'application/json'
          });
          var url = window.URL.createObjectURL(blob);
          this.a.href = url;
          this.a.download = fileName + '.json';
          this.a.click();
          window.URL.revokeObjectURL(url);
        }
      }]);

      return DownloadToolService;
    }();

    DownloadToolService.ɵfac = function DownloadToolService_Factory(t) {
      return new (t || DownloadToolService)();
    };

    DownloadToolService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DownloadToolService,
      factory: DownloadToolService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadToolService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/Todo.ts":
  /*!********************************!*\
    !*** ./src/app/models/Todo.ts ***!
    \********************************/

  /*! exports provided: Todo */

  /***/
  function srcAppModelsTodoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Todo", function () {
      return Todo;
    });

    var Todo = function Todo() {
      _classCallCheck(this, Todo);
    };
    /***/

  },

  /***/
  "./src/app/models/exp-obj/exp-obj.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/models/exp-obj/exp-obj.module.ts ***!
    \**************************************************/

  /*! exports provided: ExpObjModule */

  /***/
  function srcAppModelsExpObjExpObjModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpObjModule", function () {
      return ExpObjModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ExpObjModule = function ExpObjModule() {
      _classCallCheck(this, ExpObjModule);
    };

    ExpObjModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExpObjModule
    });
    ExpObjModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExpObjModule_Factory(t) {
        return new (t || ExpObjModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExpObjModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpObjModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/Data/resume-data.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/Data/resume-data.service.ts ***!
    \******************************************************/

  /*! exports provided: ResumeDataService */

  /***/
  function srcAppServicesDataResumeDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeDataService", function () {
      return ResumeDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _json_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../json-loader.service */
    "./src/app/services/json-loader.service.ts");

    var ResumeDataService = /*#__PURE__*/function () {
      function ResumeDataService(jsonLoader) {
        _classCallCheck(this, ResumeDataService);

        this.jsonLoader = jsonLoader;
        this.allExpObjs = [];
        this.allExpNames = ["expObj_1.json", "expObj_2.json", "expObj_3.json"]; //Skills by list of objs

        this.skills = [{
          title: "General:",
          list: ["C#,HTML,CSS,JavaScript", "Unity 3d", "Steam SDK  <br> (Steam Workshop , etc)", "Game Development in general", "Basics knowledge in some <br> productions pipelines for game development"]
        }, {
          title: "Programing in unity:",
          list: ["Game-play Features", "Mechanic Systems", "Modding Support", "Multi Language Support", "Flexible Ui build at runtime<br>(working on ui mod support)"]
        }, {
          title: "Unity Editor Tools for:",
          list: ["Speed up workflow in unity", "Manage data", "Handle existing content", "Adding new content", "Multi Language editor tools", "Json creation and editing", "Automatization tools for level design", "Random generated buildings", "Modding support Tools"]
        }, {
          title: "Game Development Pipelines:",
          list: ["3d modeling <br> (Blender, Maya, Zbrush)", "Texturing <br> (Substance painter , Photoshop, Gimp)", "Rigging and Animation<br>(Blender)"]
        }]; //Data for the media images with links

        this.contactMedia = [{
          link: "https://www.linkedin.com/in/abraham-sanchez-374236102/",
          src: "assets/img/linkedin.png",
          altText: "LinkedIn"
        }, {
          link: "https://connect.unity.com/u/abraham-sanchez",
          src: "assets/img/unity.jpg",
          altText: "Unity"
        }, {
          link: "https://www.indiedb.com/games/mobsworlds",
          src: "https://media.indiedb.com/images/global/indiedb.png",
          altText: "IndieDb"
        }, {
          link: "https://www.facebook.com/MobsWorlds/",
          src: "assets/img/facebook.png",
          altText: "Facebook"
        }, {
          link: "https://twitter.com/WorldsDev",
          src: "assets/img/twitter.png",
          altText: "Twitter"
        }, {
          link: "https://store.steampowered.com/app/826930/The_Capture_Worlds/",
          src: "assets/img/steam.png",
          altText: "Steam"
        }, {
          link: "https://www.youtube.com/channel/UCCS0uX_JDG_3OBPt2jYQsfw",
          src: "assets/img/youtube.png",
          altText: "YouTube"
        }];
        this.summeryAndEducation = ["I been learning and working on Unity3d for more than 6 years focusing in programming(c#) for pc games.I been a self-taught person more than 11 years.", "-", "Right now I'm studying on a government open education system so i can get my Bachelor's Degree , learning Unreal 4 Engine, c++, python and asp.net mvc ,while working in my video game The Capture Worlds.", "I also have been learning Japanese in my free time because i would love to visit Japan in the future , i realy like the culture ,its morals and all it has to offer."];
      } //Get the Skills


      _createClass(ResumeDataService, [{
        key: "getSkills",
        value: function getSkills() {
          return this.skills;
        } //Get Experience

      }, {
        key: "getExperience",
        value: function getExperience() {
          if (this.allExpObjs != null && this.allExpObjs.length > 0) {
            return;
          }

          for (var i = 0; i < this.allExpNames.length; i++) {
            this.getExpObjWithName(this.allExpNames[i]);
          }
        } //Get the data from the json loader

      }, {
        key: "getExpObjWithName",
        value: function getExpObjWithName(expName) {
          var _this4 = this;

          this.jsonLoader.getExpObjs(expName).subscribe(function (data) {
            _this4.allExpObjs.push(data);
          });
        } //Get Media data from local data

      }, {
        key: "getMediaData",
        value: function getMediaData() {
          return this.contactMedia;
        } //get education and summery text from local data

      }, {
        key: "getSummeryAndEducationText",
        value: function getSummeryAndEducationText() {
          return this.summeryAndEducation;
        }
      }]);

      return ResumeDataService;
    }();

    ResumeDataService.ɵfac = function ResumeDataService_Factory(t) {
      return new (t || ResumeDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_json_loader_service__WEBPACK_IMPORTED_MODULE_1__["JsonLoaderService"]));
    };

    ResumeDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ResumeDataService,
      factory: ResumeDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _json_loader_service__WEBPACK_IMPORTED_MODULE_1__["JsonLoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/json-loader.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/json-loader.service.ts ***!
    \*************************************************/

  /*! exports provided: JsonLoaderService */

  /***/
  function srcAppServicesJsonLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonLoaderService", function () {
      return JsonLoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var JsonLoaderService = /*#__PURE__*/function () {
      function JsonLoaderService(http) {
        _classCallCheck(this, JsonLoaderService);

        this.http = http;
        this.jsonsPath = "assets/json/";
      }

      _createClass(JsonLoaderService, [{
        key: "getExpObjs",
        value: function getExpObjs(jsonName) {
          var thePath = this.jsonsPath + jsonName;
          return this.http.get(thePath);
        }
      }]);

      return JsonLoaderService;
    }();

    JsonLoaderService.ɵfac = function JsonLoaderService_Factory(t) {
      return new (t || JsonLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    JsonLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JsonLoaderService,
      factory: JsonLoaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/projects-data.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/projects-data.service.ts ***!
    \***************************************************/

  /*! exports provided: ProjectsDataService */

  /***/
  function srcAppServicesProjectsDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsDataService", function () {
      return ProjectsDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/todos/todos.component */
    "./src/app/components/todos/todos.component.ts");
    /* harmony import */


    var _components_text_to_json_text_to_json_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/text-to-json/text-to-json.component */
    "./src/app/components/text-to-json/text-to-json.component.ts");
    /* harmony import */


    var _components_Input_experience_obj_experience_obj_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/Input/experience-obj/experience-obj.component */
    "./src/app/components/Input/experience-obj/experience-obj.component.ts");
    /* harmony import */


    var _components_Project_flip_game_flip_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/Project/flip-game/flip-game.component */
    "./src/app/components/Project/flip-game/flip-game.component.ts");

    var ProjectsDataService = /*#__PURE__*/function () {
      function ProjectsDataService() {
        _classCallCheck(this, ProjectsDataService);

        this.projects = [{
          title: "Flip Game",
          description: "<h2>Find them All!</h2>(Work in progress)<br> This will be a Concentration (card game) where you have to find pairs and when you find them all you win. <br>You will be able to upload your own images and use them in the game, or select from a list of preset group of images.This is to practice and learn JavaScript,HTML and CSS. <br>Select Images to use ,select the level of difficulty , the Start Game Button will be display when you have at least two (2) images to use. ",
          component: _components_Project_flip_game_flip_game_component__WEBPACK_IMPORTED_MODULE_4__["FlipGameComponent"]
        }, {
          title: "Todos",
          description: "Simple Todo List where you can add, remove and check if it is completed.",
          component: _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_1__["TodosComponent"]
        }, {
          title: "Text To Json",
          description: "You can add text to the list and delete them if needed <br> Then you can save them as a json is downloaded with the given name<br> You have to give it a name else you won't be able to download the file",
          component: _components_text_to_json_text_to_json_component__WEBPACK_IMPORTED_MODULE_2__["TextToJsonComponent"]
        }, {
          title: "Multi Line To Json",
          description: "You can save to json and download it with the given name all the text in multiple lines <br> I used this to create the Experience objects that are in the resume page <br> and loaded the json files that i created with this tool to build the Ui and fill the data.",
          component: _components_Input_experience_obj_experience_obj_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceObjComponent"]
        }];
      }

      _createClass(ProjectsDataService, [{
        key: "getProjects",
        value: function getProjects() {
          return this.projects;
        }
      }]);

      return ProjectsDataService;
    }();

    ProjectsDataService.ɵfac = function ProjectsDataService_Factory(t) {
      return new (t || ProjectsDataService)();
    };

    ProjectsDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectsDataService,
      factory: ProjectsDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/todo.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/todo.service.ts ***!
    \******************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppServicesTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TodoService = /*#__PURE__*/function () {
      function TodoService() {
        _classCallCheck(this, TodoService);
      } //Get TODO LIst


      _createClass(TodoService, [{
        key: "getTodos",
        value: function getTodos() {
          //Example of a combined text
          var url = "dir".concat("/", "path"); //TODO get from a local Json file or from json in google drive

          return [{
            id: 0,
            title: "Finish TODOs tutorial",
            completed: false
          }, {
            id: 1,
            title: "Migrate Resume to Angular",
            completed: false
          }, {
            id: 2,
            title: "Migrate Projects to Angular",
            completed: false
          }, {
            id: 3,
            title: "Create the text to json component",
            completed: false
          }];
        }
      }]);

      return TodoService;
    }();

    TodoService.ɵfac = function TodoService_Factory(t) {
      return new (t || TodoService)();
    };

    TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TodoService,
      factory: TodoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\HTML\Angular\Resume\Resume\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map