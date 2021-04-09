(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\samue\Desktop\CodeReviews\FE21-CR6-Samuel-Tenschert\TravelAgencySamuel\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _employees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../employees */ "S/3i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AboutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis error reprehenderit itaque reiciendis perferendis rerum minima, quas quidem quaerat pariatur voluptatem id sunt suscipit quo sit iure vitae aperiam dolores in perspiciatis quos dolorum nihil. Excepturi, esse laboriosam? Minima accusantium sint recusandae. Omnis dolorum, repellendus culpa magnam ipsam doloremque alias, fuga, placeat harum suscipit molestias deleniti doloribus quidem ut vero asperiores perferendis ipsum qui neque quos provident! Porro exercitationem vel veritatis molestias. Fugiat quaerat assumenda corporis necessitatibus? Nulla fugit repellat praesentium commodi ipsum sed distinctio unde recusandae temporibus iste laboriosam, a aliquam, voluptatum tempore animi nemo porro corporis rem enim.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employee_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employee_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employee_r1.quote);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", employee_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class AboutComponent {
    constructor() {
        this.employees = _employees__WEBPACK_IMPORTED_MODULE_0__["employees"];
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "featurette-divider"], [1, "row", "featurette"], [1, "col-md-7"], [1, "featurette-heading"], [1, "badge", "text-wrap", "my-2"], [1, "text-muted", "fst-italic", "fw-light", "pt-2"], [1, "lead", "pt-3"], [1, "col-md-5"], ["id", "img-wrapper"], ["alt", "Employee", 2, "width", "30em", "height", "30em", "object-fit", "cover", 3, "src"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AboutComponent_div_0_Template, 15, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.employees);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".badge[_ngcontent-%COMP%] {\n  background-color: #ff5100;\n  font-size: 1em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDgxLCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _destinations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../destinations */ "ZA/Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "More Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const destination_r1 = ctx.$implicit;
    const destinationId_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", destination_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", destination_r1.city, ", ", destination_r1.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", destination_r1.startDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Duration: ", destination_r1.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Price: ", destination_r1.price, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "destination-details/", destinationId_r2, "");
} }
class HomeComponent {
    constructor() {
        this.destinations = _destinations__WEBPACK_IMPORTED_MODULE_0__["destinations"];
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 43, vars: 1, consts: [[1, "container"], [1, "text-center"], [1, "d-flex", "flex-wrap", "justify-content-center"], ["class", "m-3", 4, "ngFor", "ngForOf"], ["id", "myCarousel", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["id", "img1"], [1, "carousel-caption", "text-start"], [1, "carousel-item"], ["id", "img2"], [1, "carousel-caption"], ["id", "img3"], [1, "carousel-caption", "text-end"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "m-3"], [1, "card", "shadow", "border", "border-1", "border-dark", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", "border-bottom", "border-1", "border-dark", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "bi", "bi-calendar3"], [1, "bi", "bi-hourglass-split"], [1, "bi", "bi-cash"], [1, "btn", "btn-success", "border", "border-1", "border-dark", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Destinations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 19, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Relax on the beach.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Feel the freedom of the ocean.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Touch the clouds.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Leave your stress behind.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Don't get stuck at home.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "New adventures await you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.destinations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["#img1[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('hero1.jpeg');\n  height: 25vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n#img2[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('hero2.jpeg');\n  height: 25vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n#img3[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('hero3.jpeg');\n  height: 25vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFDQTtFQUNJLDRGQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUVKOztBQUFBO0VBQ0ksNEZBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBR0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbWcxIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSksIHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaGVybzEuanBlZ1wiKTtcclxuICAgIGhlaWdodDogMjV2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbiNpbWcyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSksIHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaGVybzIuanBlZ1wiKTtcclxuICAgIGhlaWdodDogMjV2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbiNpbWczIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSksIHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaGVybzMuanBlZ1wiKTtcclxuICAgIGhlaWdodDogMjV2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BkeJ":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CartService {
    constructor() {
        this.items = [];
    }
    addToCart(destination) {
        this.items.push(destination);
    }
    getItems() {
        return this.items;
    }
    clearCart() {
        this.items = [];
        return this.items;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 45, vars: 0, consts: [[1, "featurette-divider"], [1, "row", "featurette", "text-center"], [1, "col"], [1, "featurette-heading"], [1, "lead"], [1, "text-muted"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blog 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam repellendus laudantium in neque, laborum placeat obcaecati tempora rem odit debitis corporis necessitatibus repellat beatae facilis adipisci porro. Laborum sunt nisi eum necessitatibus quis, voluptates qui aperiam voluptas laboriosam veritatis cum autem eligendi eos amet illum ex neque consequatur. Illo repudiandae reprehenderit repellendus veniam incidunt in, similique, ratione provident officia natus numquam facilis! Consequatur quas aspernatur itaque earum officiis dignissimos a minima commodi, esse dicta. Velit quibusdam, dolorem magnam nostrum vero enim dolores esse quae sed unde, hic non ipsa consectetur accusantium quo quos! Odit neque aliquid quis veniam error. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "24.3.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Blog 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam repellendus laudantium in neque, laborum placeat obcaecati tempora rem odit debitis corporis necessitatibus repellat beatae facilis adipisci porro. Laborum sunt nisi eum necessitatibus quis, voluptates qui aperiam voluptas laboriosam veritatis cum autem eligendi eos amet illum ex neque consequatur. Illo repudiandae reprehenderit repellendus veniam incidunt in, similique, ratione provident officia natus numquam facilis! Consequatur quas aspernatur itaque earum officiis dignissimos a minima commodi, esse dicta. Velit quibusdam, dolorem magnam nostrum vero enim dolores esse quae sed unde, hic non ipsa consectetur accusantium quo quos! Odit neque aliquid quis veniam error. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "24.3.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Blog 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam repellendus laudantium in neque, laborum placeat obcaecati tempora rem odit debitis corporis necessitatibus repellat beatae facilis adipisci porro. Laborum sunt nisi eum necessitatibus quis, voluptates qui aperiam voluptas laboriosam veritatis cum autem eligendi eos amet illum ex neque consequatur. Illo repudiandae reprehenderit repellendus veniam incidunt in, similique, ratione provident officia natus numquam facilis! Consequatur quas aspernatur itaque earum officiis dignissimos a minima commodi, esse dicta. Velit quibusdam, dolorem magnam nostrum vero enim dolores esse quae sed unde, hic non ipsa consectetur accusantium quo quos! Odit neque aliquid quis veniam error. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "24.3.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Blog 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam repellendus laudantium in neque, laborum placeat obcaecati tempora rem odit debitis corporis necessitatibus repellat beatae facilis adipisci porro. Laborum sunt nisi eum necessitatibus quis, voluptates qui aperiam voluptas laboriosam veritatis cum autem eligendi eos amet illum ex neque consequatur. Illo repudiandae reprehenderit repellendus veniam incidunt in, similique, ratione provident officia natus numquam facilis! Consequatur quas aspernatur itaque earum officiis dignissimos a minima commodi, esse dicta. Velit quibusdam, dolorem magnam nostrum vero enim dolores esse quae sed unde, hic non ipsa consectetur accusantium quo quos! Odit neque aliquid quis veniam error. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "24.3.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Blog 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam repellendus laudantium in neque, laborum placeat obcaecati tempora rem odit debitis corporis necessitatibus repellat beatae facilis adipisci porro. Laborum sunt nisi eum necessitatibus quis, voluptates qui aperiam voluptas laboriosam veritatis cum autem eligendi eos amet illum ex neque consequatur. Illo repudiandae reprehenderit repellendus veniam incidunt in, similique, ratione provident officia natus numquam facilis! Consequatur quas aspernatur itaque earum officiis dignissimos a minima commodi, esse dicta. Velit quibusdam, dolorem magnam nostrum vero enim dolores esse quae sed unde, hic non ipsa consectetur accusantium quo quos! Odit neque aliquid quis veniam error. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "24.3.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "S/3i":
/*!******************************!*\
  !*** ./src/app/employees.ts ***!
  \******************************/
/*! exports provided: employees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employees", function() { return employees; });
const employees = [
    {
        name: "Jamila Osborn",
        position: "CEO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus, obcaecati quas ab deserunt quisquam soluta! Voluptatem at explicabo vitae.",
        img: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quote: "“Remember that happiness is a way of travel, not a destination.”"
    },
    {
        name: "Enzo Bernard",
        position: "Marketing Expert",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus, obcaecati quas ab deserunt quisquam soluta! Voluptatem at explicabo vitae.",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quote: "“My goal is to run out of pages in my passport.”"
    },
    {
        name: "Samuel Sanchez",
        position: "Webdeveloper",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus, obcaecati quas ab deserunt quisquam soluta! Voluptatem at explicabo vitae.",
        img: "assets/img/sanchez.jpeg",
        quote: "“It's not a bug; it's an undocumented feature.”"
    },
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'TravelAgencySamuel';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["id", "target"], ["id", "navbar"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#target[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(\"https://images.pexels.com/photos/2882660/pexels-photo-2882660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\");\n  height: 15vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-bottom: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csaU1BQUE7RUFDQyxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0YXJnZXQge1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLCB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yODgyNjYwL3BleGVscy1waG90by0yODgyNjYwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjBcIik7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAjbmF2YmFye1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZA/Y":
/*!*********************************!*\
  !*** ./src/app/destinations.ts ***!
  \*********************************/
/*! exports provided: destinations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destinations", function() { return destinations; });
const destinations = [
    {
        country: "Spain",
        city: "Madrid",
        price: 4500,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, accusamus!",
        img: "assets/img/madrid.jpeg",
        startDate: "23.4. - 30.4.2022",
        duration: "7 days",
        descriptionLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        tips: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        important: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus"
    },
    {
        country: "Spain",
        city: "Valencia",
        price: 3000,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, accusamus!",
        img: "assets/img/valencia.jpeg",
        startDate: "12.5. - 26.5.2022",
        duration: "14 days",
        descriptionLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        tips: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        important: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus"
    },
    {
        country: "Spain",
        city: "Malaga",
        price: 4000,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, accusamus!",
        img: "assets/img/malaga.jpeg",
        startDate: "02.4. - 16.4.2022",
        duration: "14 days",
        descriptionLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        tips: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        important: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus"
    },
    {
        country: "France",
        city: "Cannes",
        price: 4500,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, accusamus!",
        img: "assets/img/cannes.jpeg",
        startDate: "8.6. - 5.6.2022",
        duration: "7 days",
        descriptionLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        tips: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        important: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus"
    },
    {
        country: "France",
        city: "Nice",
        price: 4000,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, accusamus!",
        img: "assets/img/nice_france.jpg",
        startDate: "15.6. - 29.6.2022",
        duration: "14 days",
        descriptionLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        tips: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        important: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus"
    },
    {
        country: "Greece",
        city: "Athen",
        price: 3000,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, accusamus!",
        img: "assets/img/athenes.jpeg",
        startDate: "30.7. - 6.8.2022",
        duration: "7 days",
        descriptionLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        tips: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus",
        important: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat et voluptatem sint dolorem alias. Aliquid pariatur nisi mollitia quam exercitationem beatae illum vero. Eos perspiciatis aspernatur quod ex recusandae saepe veritatis? Distinctio placeat alias recusandae voluptates eius. Error dolores iusto sapiente quod repellat corporis et tempora illo? Ab, corrupti harum dolorem fugit delectus blanditiis architecto commodi ullam expedita iusto, eius nesciunt natus. Quasi nihil sint dolores. Labore nemo reprehenderit id, voluptatum rem unde non, quas possimus tenetur in eius expedita laudantium eos ab. Beatae excepturi, impedit qui commodi inventore nisi. Pariatur iste reprehenderit aperiam, a unde sint atque accusamus"
    }
];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _destinationdetails_destinationdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./destinationdetails/destinationdetails.component */ "jH42");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"],
        _destinationdetails_destinationdetails_component__WEBPACK_IMPORTED_MODULE_7__["DestinationdetailsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "BkeJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r4.city, ", ", item_r4.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.startDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Duration: ", item_r4.duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Price: ", item_r4.price, "\u20AC");
} }
function CartComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_template_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.emptyCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clear Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_template_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.buyCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "BUY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.priceArray = [];
    }
    ngOnInit() {
        this.items = this.cartService.getItems();
        console.log(this.items);
        //loop over my items.array to take the value of price and push it in my new priceArry to later sum up all the prices (reduce-function adds my numbers together in my priceArry), then I need to stringify my number because .innerHTML needs a string to print it out.
        for (let value of this.items) {
            value = value.price;
            console.log(value);
            this.priceArray.push(value);
            console.log(this.priceArray);
            this.sum = this.priceArray.reduce(function (a, b) {
                return a + b;
            });
            console.log(this.sum);
            //Check price if is above a certain amount to apply discount
            if (this.sum > 1 && this.sum <= 5000) {
                this.sumString = this.sum.toString();
                document.getElementById("price-target").innerHTML = `Total price: ` + this.sumString;
            }
            else if (this.sum > 5000 && this.sum < 7000) {
                this.sum = this.sum * 0.9;
                this.sumString = this.sum.toString();
                document.getElementById("price-target").innerHTML = `Total price: ` + this.sumString + ` + 10% Discount`;
            }
            else if (this.sum > 7000) {
                this.sum = this.sum * 0.8;
                this.sumString = this.sum.toString();
                document.getElementById("price-target").innerHTML = `Total price: ` + this.sumString + ` + 20% Discount`;
            }
        }
    }
    buyCart() {
        window.alert('Thank you for buying your vaccation on Traveli. Have a nice Trip!');
        this.items = this.cartService.clearCart();
        document.getElementById("price-target").innerHTML = "";
        // return this.items;
    }
    emptyCart() {
        this.items = this.cartService.clearCart();
        this.priceArray = [];
        document.getElementById("price-target").innerHTML = "";
        console.log(this.items);
        console.log(this.priceArray);
        // return this.items;
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 11, vars: 3, consts: [[1, "fs-3", "text-center", "mt-2"], [1, "container"], [1, "d-flex", "flex-wrap", "justify-content-center"], ["class", "m-3", 4, "ngFor", "ngForOf"], ["id", "price-target", 1, "text-center"], [1, "d-flex", "flex-column"], [3, "ngIf", "ngIfElse"], ["printButtons", ""], [1, "m-3"], [1, "card", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "bi", "bi-calendar3"], [1, "bi", "bi-hourglass-split"], [1, "bi", "bi-cash"], [1, "mx-auto", "my-5", "fw-bold"], [1, "mx-auto"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-success", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Shopping Cart:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_div_4_Template, 16, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartComponent_ng_template_8_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_ng_template_9_Template, 8, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length == 0)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "text-center", "text-dark", 2, "background-color", "#f1f1f1"], [1, "container", "pt-4"], [1, "mb-4", "d-flex", "justify-content-around"], [1, "bi", "bi-facebook"], [1, "bi", "bi-twitter"], [1, "bi", "bi-google"], [1, "bi", "bi-instagram"], [1, "bi", "bi-linkedin"], [1, "bi", "bi-github"], [1, "text-center", "text-dark", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A9 2021 Copyright: Traveli.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "jH42":
/*!********************************************************************!*\
  !*** ./src/app/destinationdetails/destinationdetails.component.ts ***!
  \********************************************************************/
/*! exports provided: DestinationdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationdetailsComponent", function() { return DestinationdetailsComponent; });
/* harmony import */ var _destinations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../destinations */ "ZA/Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "BkeJ");




class DestinationdetailsComponent {
    constructor(route, cartService) {
        this.route = route;
        this.cartService = cartService;
        this.destinations = _destinations__WEBPACK_IMPORTED_MODULE_0__["destinations"];
    }
    addToCart(destination) {
        window.alert('Your destination has been added to the cart!');
        this.cartService.addToCart(destination);
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let id = params.get("destinationId");
            if (id !== null) { //Überprüfen ob id !== null, sonst Compiler fehler
                this.destination = _destinations__WEBPACK_IMPORTED_MODULE_0__["destinations"][+id];
            }
            // this.product = id ? products[+id] : “” //Ternary Operator
        });
        console.log(this.destination);
    }
}
DestinationdetailsComponent.ɵfac = function DestinationdetailsComponent_Factory(t) { return new (t || DestinationdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
DestinationdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DestinationdetailsComponent, selectors: [["app-destinationdetails"]], decls: 19, vars: 7, consts: [["id", "bg"], [1, "d-flex"], [1, "btn", "btn-primary", "mx-auto", "mb-4", 3, "click"]], template: function DestinationdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Tips:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Important:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DestinationdetailsComponent_Template_button_click_17_listener() { return ctx.addToCart(ctx.destination); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Add to Shoppingcart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(", ctx.destination.img, "); height: 50vh; background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.destination.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.destination.descriptionLong, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.destination.tips, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.destination.important, "\n");
    } }, styles: ["#bg[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#bg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRlc3RpbmF0aW9uZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBUTtFQUNKLFlBQUE7RUFDQSxjQUFBO0FBRUoiLCJmaWxlIjoiZGVzdGluYXRpb25kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIDtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 17, vars: 0, consts: [[1, "nav", "justify-content-center", "navBar"], [1, "nav-item", "mx-2"], ["aria-current", "page", "routerLink", "/", 1, "nav-link", "text-white", "text-decoration-underline"], ["routerLink", "/about", 1, "nav-link", "text-white", "text-decoration-underline"], ["routerLink", "/cart", 1, "nav-link", "text-white", "text-decoration-underline"], ["routerLink", "/blog", 1, "nav-link", "text-white", "text-decoration-underline"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _destinationdetails_destinationdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./destinationdetails/destinationdetails.component */ "jH42");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [{
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
        path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
        path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
    }, {
        path: 'destination-details/:destinationId', component: _destinationdetails_destinationdetails_component__WEBPACK_IMPORTED_MODULE_4__["DestinationdetailsComponent"]
    }, {
        path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"]
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map