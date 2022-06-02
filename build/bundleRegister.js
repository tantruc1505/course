/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		5: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([211,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

var dataKhoaHoc = [{
  MaKhoaHoc: 'javascript',
  TenKhoaHoc: "Javascript",
  MoTa: "Hướng dẫn cơ bản đến nâng cao",
  NguoiTao: "test",
  LuotXem: 0,
  HinhAnh: "",
  UserDangKy: []
}, {
  MaKhoaHoc: 'angular',
  TenKhoaHoc: "Angular 4",
  MoTa: "Hướng dẫn cơ bản đến nâng cao",
  NguoiTao: "test",
  LuotXem: 0,
  HinhAnh: "",
  UserDangKy: []
}, {
  MaKhoaHoc: 'reactjs',
  TenKhoaHoc: "Reactjs",
  MoTa: "Hướng dẫn cơ bản đến nâng cao",
  NguoiTao: "test",
  LuotXem: 0,
  HinhAnh: "",
  UserDangKy: []
}, {
  MaKhoaHoc: 'nodejs',
  TenKhoaHoc: "Nodejs",
  MoTa: "Hướng dẫn cơ bản đến nâng cao",
  NguoiTao: "test",
  LuotXem: 0,
  HinhAnh: "",
  UserDangKy: []
}, {
  MaKhoaHoc: 'mongodb',
  TenKhoaHoc: "MongoDB",
  MoTa: "Hướng dẫn cơ bản đến nâng cao",
  NguoiTao: "test",
  LuotXem: 0,
  HinhAnh: "",
  UserDangKy: []
}, {
  MaKhoaHoc: 'sqlserver',
  TenKhoaHoc: "SQL Server",
  MoTa: "Hướng dẫn cơ bản đến nâng cao",
  NguoiTao: "test",
  LuotXem: 0,
  HinhAnh: "",
  UserDangKy: []
}, {
  MaKhoaHoc: 'vuejs',
  TenKhoaHoc: "Vue JS",
  MoTa: "Hướng dẫn cơ bản đến nâng cao",
  NguoiTao: "test",
  LuotXem: 0,
  HinhAnh: "",
  UserDangKy: []
}, {
  MaKhoaHoc: 'reactnative',
  TenKhoaHoc: "React Native",
  MoTa: "Hướng dẫn cơ bản đến nâng cao",
  NguoiTao: "test",
  LuotXem: 0,
  HinhAnh: "",
  UserDangKy: []
}];
var dataUser = [{
  Email: "admin@gmail.com",
  HoTen: "admin",
  MaLoaiNguoiDung: "GV",
  SoDT: "0909015594",
  TaiKhoan: "admin",
  TenLoaiNguoiDung: "Admin",
  MatKhau: 'admin'
}, {
  Email: "helloworld@gmail.com",
  HoTen: "helloworld",
  MaLoaiNguoiDung: "HV",
  SoDT: "0909015594",
  TaiKhoan: "helloworld",
  TenLoaiNguoiDung: "Học viên",
  MatKhau: '123'
}];
var apiURL = 'https://course.selflearning.app'; // const apiURL = 'http://localhost:3500'

var createData = function createData() {
  localStorage.getItem("DanhSachKhoaHoc") ? null : localStorage.setItem("DanhSachKhoaHoc", JSON.stringify(dataKhoaHoc));
  localStorage.getItem("DanhSachNguoiDung") ? null : localStorage.setItem("DanhSachNguoiDung", JSON.stringify(dataUser));
};

var getData = function getData(type) {
  switch (type) {
    case 'dskh':
      return JSON.parse(localStorage.getItem("DanhSachKhoaHoc"));

    case 'dsnd':
      return JSON.parse(localStorage.getItem("DanhSachNguoiDung"));

    case 'ctkh':
      return JSON.parse(localStorage.getItem("ChiTietKhoaHoc"));

    default:
      break;
  }
};

var updateData = function updateData(type, data) {
  switch (type) {
    case 'dskh':
      localStorage.removeItem("DanhSachKhoaHoc");
      localStorage.setItem("DanhSachKhoaHoc", JSON.stringify(data));
      break;

    case 'dsnd':
      localStorage.removeItem("DanhSachNguoiDung");
      localStorage.setItem("DanhSachNguoiDung", JSON.stringify(data));
      break;

    case 'ctkh':
      localStorage.removeItem("ChiTietKhoaHoc");
      localStorage.setItem("ChiTietKhoaHoc", JSON.stringify(data));

    default:
      break;
  }
};

module.exports = {
  dataKhoaHoc: dataKhoaHoc,
  createData: createData,
  updateData: updateData,
  getData: getData,
  apiURL: apiURL
};

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var HocVien = function HocVien(taikhoan, pass, hoten, email, sodt, maLoai, tenLoai) {
  this.TaiKhoan = taikhoan;
  this.MatKhau = pass;
  this.HoTen = hoten;
  this.Email = email;
  this.SoDT = sodt;
  this.MaLoaiNguoiDung = maLoai;
  this.TenLoaiNguoiDung = tenLoai;
};

/* harmony default export */ __webpack_exports__["a"] = (HocVien);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _DanhSachkhoaHoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _DanhSachHinhAnh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _ServiceKhoaHoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



var dskhSeach = new _DanhSachkhoaHoc__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
var dsha = _DanhSachHinhAnh__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
var serviceKhoaHoc = new _ServiceKhoaHoc__WEBPACK_IMPORTED_MODULE_2__[/* ServiceKhoaHoc */ "a"]();
getDSKH();
getAnh();

function getDSKH() {
  var json = localStorage.getItem("DanhSachKhoaHoc");
  var list = JSON.parse(json);
  dskhSeach.mangKhoaHoc = list;
}

function getAnh() {
  var jsonAnh = localStorage.getItem("HinhAnh");
  var listAnh = JSON.parse(jsonAnh);
  dsha.mangHinhAnh = listAnh;
} // Search popup in navbar


$("body").delegate(".searchInput", "keyup", function () {
  // Tạo Scroll Sidebar Left
  $(this).closest(".popover-body").niceScroll({
    cursorcolor: 'silver',
    cursorwidth: 4,
    cursorborder: 'none'
  });
  showloader2();
  $(".form-group").css("border-bottom", "1px solid #c0c0c052");
  $(".form-group").css("padding-bottom", "3px");
  var kqSearch = $(this).closest(".searchInput").val();
  var listkq = dskhSeach.TimKiemKhoaHoc2(kqSearch);
  var parent = $(this).closest(".popover-body").find("#oknha");
  parent.html("");

  if (listkq.mangKhoaHoc != null) {
    setTimeout(function () {
      hideloader2();
      var kq = "<p class=\"pt-1 pb-1\"> C\xF3 ".concat(listkq.mangKhoaHoc.length, " k\u1EBFt qu\u1EA3 t\xECm th\u1EA5y!</p>");
      parent.css("max-height", "400px");
      var stringKQ = "";

      for (var i = 0; i < listkq.mangKhoaHoc.length; i++) {
        for (var j = 0; j < dsha.mangHinhAnh.length; j++) {
          if (listkq.mangKhoaHoc[i].MaKhoaHoc == dsha.mangHinhAnh[j].ten) {
            var divSearch = "\n\t\t\t\t\t\t\t\t\t<a id=\"linkSearchCourse\" class=\"oktest\" data-id=\"".concat(listkq.mangKhoaHoc[i].MaKhoaHoc, "\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"searchKH\">\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" src=\"").concat(dsha.mangHinhAnh[j].src, "\">\n\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t").concat(listkq.mangKhoaHoc[i].TenKhoaHoc, " \n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t");
            stringKQ += divSearch;
          }
        }
      }

      kq += stringKQ;
      parent.html(kq);
      $('.oktest').click(function () {
        var id = $(this).attr('data-id');
        getCourseDetails(id);
      });
    }, 500);
  } else {
    hideloader2();
    parent.css("max-height", "69px");
    $(".form-group").css("border-bottom", "none");
    $(".form-group").css("padding-bottom", "0px");
  }
});

function getCourseDetails(id) {
  serviceKhoaHoc.ChiTietKhoaHoc(id);
} //


$("#XemAll").click(function () {
  window.location.href = "/course";
}); // Animation Sibar Collapse

var isAnimation = true;
$('#sidebarCollapse').click(function () {
  if (isAnimation == true) {
    $('#sidebarCollapse').addClass('active');
    isAnimation = false;
  } else {
    $('#sidebarCollapse').removeClass('active');
    isAnimation = true;
  }
}); // Popover Search

$('#popover-content').hide();
$("[data-toggle=popover]").popover({
  html: true,
  content: function content() {
    return $('#popover-content').html();
  }
}); //Scroll Down Smooth Body

$('a[href="#introduce"]').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

window.onscroll = function () {
  myFunction(), scrollFunction();
}; // Sticky top


var header = document.getElementById("myNav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    $('#myNav').css('background', '#333');
    $('#myNav').css('z-index', '1000');
  } else {
    header.classList.remove("sticky");
    $('#myNav').css('background', 'rgba(0, 0, 0, 0.2)');
  }
} //Up to Top


function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 200) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

$('#myBtn').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 800); //return false;
}); //Loader 

function showloader2() {
  $(".preloader2").css("display", "inline-block");
  $(".loader2").css("border-left", "3px solid #ffb606");
}

function hideloader2() {
  $(".preloader2").hide();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Public_js_niceScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _Public_js_niceScroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Public_js_niceScroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wow_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Public_js_jqueryValidate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34);
/* harmony import */ var _Public_js_jqueryValidate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Public_js_jqueryValidate__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Public_css_animate_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _Public_css_animate_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Public_css_animate_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Public_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _Public_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Public_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Public_css_preloader_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _Public_css_preloader_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Public_css_preloader_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Public_css_preloader2_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony import */ var _Public_css_preloader2_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Public_css_preloader2_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Public_css_validate_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35);
/* harmony import */ var _Public_css_validate_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Public_css_validate_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Public_css_Register_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(212);
/* harmony import */ var _Public_css_Register_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Public_css_Register_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Public_css_indexUser_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17);
/* harmony import */ var _Public_css_indexUser_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Public_css_indexUser_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _navPopover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38);
/* harmony import */ var _DangKy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(213);
/* harmony import */ var _ValidateRegister__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(214);
// Bootstrap + jquery 



 // Nicescroll

 // Wow


new wow_js__WEBPACK_IMPORTED_MODULE_5___default.a().init(); // Sweetalert

 // validate

 // Css







 // js






/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _DanhSachHinhAnh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var dsha = new _DanhSachHinhAnh__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
$("footer").hide();

function getAnh() {
  var jsonAnh = localStorage.getItem("HinhAnh");
  var listAnh = JSON.parse(jsonAnh);
  dsha.mangHinhAnh = listAnh;
} // $("#register").click(function(){
//     DangKy();
// });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var _Models_HocVien__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _DanhSachHocVien__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _ServiceHocVien__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _const_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _const_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_const_data__WEBPACK_IMPORTED_MODULE_3__);


var dshv = new _DanhSachHocVien__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();


var service = new _ServiceHocVien__WEBPACK_IMPORTED_MODULE_2__[/* ServiceHocVien */ "a"]();

$.validator.methods.email = function (value, element) {
  return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
};

jQuery.validator.addMethod("taikhoan", function (value, element) {
  return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
}, 'Không được có kí tự đặc biệt!');
jQuery.validator.addMethod("hoten", function (value, element) {
  return this.optional(element) || /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value);
}, "Không đúng định dạng!");
$("#registerform").validate({
  rules: {
    taikhoan: {
      required: true
    },
    matkhau: {
      required: true,
      minlength: 5
    },
    rematkhau: {
      required: true,
      minlength: 5,
      equalTo: "#matkhau"
    },
    hoten: {
      required: true
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    taikhoan: {
      required: "Vui lòng nhập tài khoản!",
      minlength: "Chỉ được nhập 5 - 10 kí tự!"
    },
    matkhau: {
      required: "Vui lòng nhập mật khẩu!",
      minlength: "Tối thiểu 8 kí tự"
    },
    rematkhau: {
      required: "Vui lòng nhập mật khẩu",
      minlength: "Tối thiểu 8 kí tự",
      equalTo: "Nhập lại mật khẩu không chính xác!"
    },
    hoten: {
      required: "Vui lòng nhập họ tên",
      minlength: "Tối thiểu 4 kí tự"
    },
    email: {
      required: "Vui lòng nhập Email!",
      email: "Không đúng định vd: example@abc.com"
    },
    sodt: {
      minlength: "Chỉ được nhập 10 - 11 số",
      maxlength: "Chỉ được nhập 10 - 11 số"
    }
  },
  submitHandler: function submitHandler(form) {
    DangKy();
  }
});

function DangKy() {
  var dataHV = Object(_const_data__WEBPACK_IMPORTED_MODULE_3__["getData"])('dsnd');
  var user = $("#taikhoan").val();
  var pass = $("#matkhau").val();
  var fullname = $("#hoten").val();
  var email = $("#email").val();
  var phone = $("#sodt").val();
  var maLoai = "HV";
  var tenLoai = "Học viên";
  var check = dataHV.find(function (x) {
    return x.TaiKhoan == user || x.Email == email;
  });

  if (check) {
    swal({
      text: "Tài khoản đã được đăng ký!",
      icon: "error",
      button: "OK"
    }).then(function (value) {});
  }

  var hocvien = new _Models_HocVien__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](user, pass, fullname, email, phone, maLoai, tenLoai);
  dataHV.push(hocvien);
  Object(_const_data__WEBPACK_IMPORTED_MODULE_3__["updateData"])('dsnd', dataHV);
  swal({
    text: "Đăng ký thành công!",
    icon: "success",
    button: "OK"
  }).then(function (value) {
    location.href = "/login";
  }); // dshv.ThemHocVien(hocvien);
  // return service.DangKy(hocvien);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(2)))

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DanhSachHinhAnh = function DanhSachHinhAnh() {
  this.mangHinhAnh = [];

  this.ThemHinhAnh = function (hinhanh) {
    this.mangHinhAnh.push(hinhanh);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (DanhSachHinhAnh);

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 Jörn Zaefferer
 * Released under the MIT license
 */
(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.extend($.fn, {
    // https://jqueryvalidation.org/validate/
    validate: function validate(options) {
      // If nothing is selected, return nothing; can't chain anyway
      if (!this.length) {
        if (options && options.debug && window.console) {
          console.warn("Nothing selected, can't validate, returning nothing.");
        }

        return;
      } // Check if a validator for this form was already created


      var validator = $.data(this[0], "validator");

      if (validator) {
        return validator;
      } // Add novalidate tag if HTML5.


      this.attr("novalidate", "novalidate");
      validator = new $.validator(options, this[0]);
      $.data(this[0], "validator", validator);

      if (validator.settings.onsubmit) {
        this.on("click.validate", ":submit", function (event) {
          // Track the used submit button to properly handle scripted
          // submits later.
          validator.submitButton = event.currentTarget; // Allow suppressing validation by adding a cancel class to the submit button

          if ($(this).hasClass("cancel")) {
            validator.cancelSubmit = true;
          } // Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button


          if ($(this).attr("formnovalidate") !== undefined) {
            validator.cancelSubmit = true;
          }
        }); // Validate the form on submit

        this.on("submit.validate", function (event) {
          if (validator.settings.debug) {
            // Prevent form submit to be able to see console output
            event.preventDefault();
          }

          function handle() {
            var hidden, result; // Insert a hidden input as a replacement for the missing submit button
            // The hidden input is inserted in two cases:
            //   - A user defined a `submitHandler`
            //   - There was a pending request due to `remote` method and `stopRequest()`
            //     was called to submit the form in case it's valid

            if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
              hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
            }

            if (validator.settings.submitHandler) {
              result = validator.settings.submitHandler.call(validator, validator.currentForm, event);

              if (hidden) {
                // And clean up afterwards; thanks to no-block-scope, hidden can be referenced
                hidden.remove();
              }

              if (result !== undefined) {
                return result;
              }

              return false;
            }

            return true;
          } // Prevent submit for invalid forms or custom submit handlers


          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }

          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }

            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }

      return validator;
    },
    // https://jqueryvalidation.org/valid/
    valid: function valid() {
      var valid, validator, errorList;

      if ($(this[0]).is("form")) {
        valid = this.validate().form();
      } else {
        errorList = [];
        valid = true;
        validator = $(this[0].form).validate();
        this.each(function () {
          valid = validator.element(this) && valid;

          if (!valid) {
            errorList = errorList.concat(validator.errorList);
          }
        });
        validator.errorList = errorList;
      }

      return valid;
    },
    // https://jqueryvalidation.org/rules/
    rules: function rules(command, argument) {
      var element = this[0],
          settings,
          staticRules,
          existingRules,
          data,
          param,
          filtered; // If nothing is selected, return empty object; can't chain anyway

      if (element == null) {
        return;
      }

      if (!element.form && element.hasAttribute("contenteditable")) {
        element.form = this.closest("form")[0];
        element.name = this.attr("name");
      }

      if (element.form == null) {
        return;
      }

      if (command) {
        settings = $.data(element.form, "validator").settings;
        staticRules = settings.rules;
        existingRules = $.validator.staticRules(element);

        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument)); // Remove messages from rules, but allow them to be set separately

            delete existingRules.messages;
            staticRules[element.name] = existingRules;

            if (argument.messages) {
              settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
            }

            break;

          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }

            filtered = {};
            $.each(argument.split(/\s/), function (index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];
            });
            return filtered;
        }
      }

      data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element); // Make sure required is at front

      if (data.required) {
        param = data.required;
        delete data.required;
        data = $.extend({
          required: param
        }, data);
      } // Make sure remote is at back


      if (data.remote) {
        param = data.remote;
        delete data.remote;
        data = $.extend(data, {
          remote: param
        });
      }

      return data;
    }
  }); // Custom selectors

  $.extend($.expr.pseudos || $.expr[":"], {
    // '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support
    // https://jqueryvalidation.org/blank-selector/
    blank: function blank(a) {
      return !$.trim("" + $(a).val());
    },
    // https://jqueryvalidation.org/filled-selector/
    filled: function filled(a) {
      var val = $(a).val();
      return val !== null && !!$.trim("" + val);
    },
    // https://jqueryvalidation.org/unchecked-selector/
    unchecked: function unchecked(a) {
      return !$(a).prop("checked");
    }
  }); // Constructor for validator

  $.validator = function (options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  }; // https://jqueryvalidation.org/jQuery.validator.format/


  $.validator.format = function (source, params) {
    if (arguments.length === 1) {
      return function () {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    }

    if (params === undefined) {
      return source;
    }

    if (arguments.length > 2 && params.constructor !== Array) {
      params = $.makeArray(arguments).slice(1);
    }

    if (params.constructor !== Array) {
      params = [params];
    }

    $.each(params, function (i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
        return n;
      });
    });
    return source;
  };

  $.extend($.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: false,
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function onfocusin(element) {
        this.lastActive = element; // Hide error label and remove error class on focus if enabled

        if (this.settings.focusCleanup) {
          if (this.settings.unhighlight) {
            this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
          }

          this.hideThese(this.errorsFor(element));
        }
      },
      onfocusout: function onfocusout(element) {
        if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
          this.element(element);
        }
      },
      onkeyup: function onkeyup(element, event) {
        // Avoid revalidate the field when pressing one of the following keys
        // Shift       => 16
        // Ctrl        => 17
        // Alt         => 18
        // Caps lock   => 20
        // End         => 35
        // Home        => 36
        // Left arrow  => 37
        // Up arrow    => 38
        // Right arrow => 39
        // Down arrow  => 40
        // Insert      => 45
        // Num lock    => 144
        // AltGr key   => 225
        var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];

        if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
          return;
        } else if (element.name in this.submitted || element.name in this.invalid) {
          this.element(element);
        }
      },
      onclick: function onclick(element) {
        // Click on selects, radiobuttons and checkboxes
        if (element.name in this.submitted) {
          this.element(element); // Or option elements, check parent select in that case
        } else if (element.parentNode.name in this.submitted) {
          this.element(element.parentNode);
        }
      },
      highlight: function highlight(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function unhighlight(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      }
    },
    // https://jqueryvalidation.org/jQuery.validator.setDefaults/
    setDefaults: function setDefaults(settings) {
      $.extend($.validator.defaults, settings);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: $.validator.format("Please enter no more than {0} characters."),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format("Please enter a value less than or equal to {0}."),
      min: $.validator.format("Please enter a value greater than or equal to {0}."),
      step: $.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: false,
    prototype: {
      init: function init() {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();
        var groups = this.groups = {},
            rules;
        $.each(this.settings.groups, function (key, value) {
          if (typeof value === "string") {
            value = value.split(/\s/);
          }

          $.each(value, function (index, name) {
            groups[name] = key;
          });
        });
        rules = this.settings.rules;
        $.each(rules, function (key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });

        function delegate(event) {
          // Set form expando on contenteditable
          if (!this.form && this.hasAttribute("contenteditable")) {
            this.form = $(this).closest("form")[0];
            this.name = $(this).attr("name");
          }

          var validator = $.data(this.form, "validator"),
              eventType = "on" + event.type.replace(/^validate/, ""),
              settings = validator.settings;

          if (settings[eventType] && !$(this).is(settings.ignore)) {
            settings[eventType].call(validator, this, event);
          }
        }

        $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate) // Support: Chrome, oldIE
        // "select" is provided as event.target when clicking a option
        .on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

        if (this.settings.invalidHandler) {
          $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
        }
      },
      // https://jqueryvalidation.org/Validator.form/
      form: function form() {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);

        if (!this.valid()) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        }

        this.showErrors();
        return this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();

        for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
          this.check(elements[i]);
        }

        return this.valid();
      },
      // https://jqueryvalidation.org/Validator.element/
      element: function element(_element) {
        var cleanElement = this.clean(_element),
            checkElement = this.validationTargetFor(cleanElement),
            v = this,
            result = true,
            rs,
            group;

        if (checkElement === undefined) {
          delete this.invalid[cleanElement.name];
        } else {
          this.prepareElement(checkElement);
          this.currentElements = $(checkElement); // If this element is grouped, then validate all group elements already
          // containing a value

          group = this.groups[checkElement.name];

          if (group) {
            $.each(this.groups, function (name, testgroup) {
              if (testgroup === group && name !== checkElement.name) {
                cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));

                if (cleanElement && cleanElement.name in v.invalid) {
                  v.currentElements.push(cleanElement);
                  result = v.check(cleanElement) && result;
                }
              }
            });
          }

          rs = this.check(checkElement) !== false;
          result = result && rs;

          if (rs) {
            this.invalid[checkElement.name] = false;
          } else {
            this.invalid[checkElement.name] = true;
          }

          if (!this.numberOfInvalids()) {
            // Hide error containers on last error
            this.toHide = this.toHide.add(this.containers);
          }

          this.showErrors(); // Add aria-invalid status for screen readers

          $(_element).attr("aria-invalid", !rs);
        }

        return result;
      },
      // https://jqueryvalidation.org/Validator.showErrors/
      showErrors: function showErrors(errors) {
        if (errors) {
          var validator = this; // Add items to error list and map

          $.extend(this.errorMap, errors);
          this.errorList = $.map(this.errorMap, function (message, name) {
            return {
              message: message,
              element: validator.findByName(name)[0]
            };
          }); // Remove items from success list

          this.successList = $.grep(this.successList, function (element) {
            return !(element.name in errors);
          });
        }

        if (this.settings.showErrors) {
          this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
          this.defaultShowErrors();
        }
      },
      // https://jqueryvalidation.org/Validator.resetForm/
      resetForm: function resetForm() {
        if ($.fn.resetForm) {
          $(this.currentForm).resetForm();
        }

        this.invalid = {};
        this.submitted = {};
        this.prepareForm();
        this.hideErrors();
        var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(elements);
      },
      resetElements: function resetElements(elements) {
        var i;

        if (this.settings.unhighlight) {
          for (i = 0; elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
            this.findByName(elements[i].name).removeClass(this.settings.validClass);
          }
        } else {
          elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
        }
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(obj) {
        /* jshint unused: false */
        var count = 0,
            i;

        for (i in obj) {
          // This check allows counting elements with empty error
          // message as invalid elements
          if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
            count++;
          }
        }

        return count;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(errors) {
        errors.not(this.containers).text("");
        this.addWrapper(errors).hide();
      },
      valid: function valid() {
        return this.size() === 0;
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) {
          try {
            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus() // Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
            .trigger("focusin");
          } catch (e) {// Ignore IE throwing errors when focusing hidden elements
          }
        }
      },
      findLastActive: function findLastActive() {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function (n) {
          return n.element.name === lastActive.name;
        }).length === 1 && lastActive;
      },
      elements: function elements() {
        var validator = this,
            rulesCache = {}; // Select all valid inputs inside the form (no submit or reset buttons)

        return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var name = this.name || $(this).attr("name"); // For contenteditable

          if (!name && validator.settings.debug && window.console) {
            console.error("%o has no name assigned", this);
          } // Set form expando on contenteditable


          if (this.hasAttribute("contenteditable")) {
            this.form = $(this).closest("form")[0];
            this.name = name;
          } // Select only the first element for each name, and only those with rules specified


          if (name in rulesCache || !validator.objectLength($(this).rules())) {
            return false;
          }

          rulesCache[name] = true;
          return true;
        });
      },
      clean: function clean(selector) {
        return $(selector)[0];
      },
      errors: function errors() {
        var errorClass = this.settings.errorClass.split(" ").join(".");
        return $(this.settings.errorElement + "." + errorClass, this.errorContext);
      },
      resetInternals: function resetInternals() {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
      },
      reset: function reset() {
        this.resetInternals();
        this.currentElements = $([]);
      },
      prepareForm: function prepareForm() {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },
      elementValue: function elementValue(element) {
        var $element = $(element),
            type = element.type,
            val,
            idx;

        if (type === "radio" || type === "checkbox") {
          return this.findByName(element.name).filter(":checked").val();
        } else if (type === "number" && typeof element.validity !== "undefined") {
          return element.validity.badInput ? "NaN" : $element.val();
        }

        if (element.hasAttribute("contenteditable")) {
          val = $element.text();
        } else {
          val = $element.val();
        }

        if (type === "file") {
          // Modern browser (chrome & safari)
          if (val.substr(0, 12) === "C:\\fakepath\\") {
            return val.substr(12);
          } // Legacy browsers
          // Unix-based path


          idx = val.lastIndexOf("/");

          if (idx >= 0) {
            return val.substr(idx + 1);
          } // Windows-based path


          idx = val.lastIndexOf("\\");

          if (idx >= 0) {
            return val.substr(idx + 1);
          } // Just the file name


          return val;
        }

        if (typeof val === "string") {
          return val.replace(/\r/g, "");
        }

        return val;
      },
      check: function check(element) {
        element = this.validationTargetFor(this.clean(element));
        var rules = $(element).rules(),
            rulesCount = $.map(rules, function (n, i) {
          return i;
        }).length,
            dependencyMismatch = false,
            val = this.elementValue(element),
            result,
            method,
            rule,
            normalizer; // Prioritize the local normalizer defined for this element over the global one
        // if the former exists, otherwise user the global one in case it exists.

        if (typeof rules.normalizer === "function") {
          normalizer = rules.normalizer;
        } else if (typeof this.settings.normalizer === "function") {
          normalizer = this.settings.normalizer;
        } // If normalizer is defined, then call it to retreive the changed value instead
        // of using the real one.
        // Note that `this` in the normalizer is `element`.


        if (normalizer) {
          val = normalizer.call(element, val);

          if (typeof val !== "string") {
            throw new TypeError("The normalizer should return a string value.");
          } // Delete the normalizer from rules to avoid treating it as a pre-defined method.


          delete rules.normalizer;
        }

        for (method in rules) {
          rule = {
            method: method,
            parameters: rules[method]
          };

          try {
            result = $.validator.methods[method].call(this, val, element, rule.parameters); // If a method indicates that the field is optional and therefore valid,
            // don't mark it as valid when there are no other rules

            if (result === "dependency-mismatch" && rulesCount === 1) {
              dependencyMismatch = true;
              continue;
            }

            dependencyMismatch = false;

            if (result === "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }

            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            if (this.settings.debug && window.console) {
              console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
            }

            if (e instanceof TypeError) {
              e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
            }

            throw e;
          }
        }

        if (dependencyMismatch) {
          return;
        }

        if (this.objectLength(rules)) {
          this.successList.push(element);
        }

        return true;
      },
      // Return the custom message for the given element and validation method
      // specified in the element's HTML5 data attribute
      // return the generic message if present and no method specific message is present
      customDataMessage: function customDataMessage(element, method) {
        return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg");
      },
      // Return the custom message for the given element name and validation method
      customMessage: function customMessage(name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor === String ? m : m[method]);
      },
      // Return the first defined argument, allowing empty strings
      findDefined: function findDefined() {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) {
            return arguments[i];
          }
        }

        return undefined;
      },
      // The second parameter 'rule' used to be a string, and extended to an object literal
      // of the following form:
      // rule = {
      //     method: "method name",
      //     parameters: "the given method parameters"
      // }
      //
      // The old behavior still supported, kept to maintain backward compatibility with
      // old code, and will be removed in the next major release.
      defaultMessage: function defaultMessage(element, rule) {
        if (typeof rule === "string") {
          rule = {
            method: rule
          };
        }

        var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method), // 'title' is never undefined, so handle empty string as undefined
        !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
            theregex = /\$?\{(\d+)\}/g;

        if (typeof message === "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
        }

        return message;
      },
      formatAndAdd: function formatAndAdd(element, rule) {
        var message = this.defaultMessage(element, rule);
        this.errorList.push({
          message: message,
          element: element,
          method: rule.method
        });
        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },
      addWrapper: function addWrapper(toToggle) {
        if (this.settings.wrapper) {
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }

        return toToggle;
      },
      defaultShowErrors: function defaultShowErrors() {
        var i, elements, error;

        for (i = 0; this.errorList[i]; i++) {
          error = this.errorList[i];

          if (this.settings.highlight) {
            this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
          }

          this.showLabel(error.element, error.message);
        }

        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }

        if (this.settings.success) {
          for (i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }

        if (this.settings.unhighlight) {
          for (i = 0, elements = this.validElements(); elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
          }
        }

        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return $(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(element, message) {
        var place,
            group,
            errorID,
            v,
            error = this.errorsFor(element),
            elementID = this.idOrName(element),
            describedBy = $(element).attr("aria-describedby");

        if (error.length) {
          // Refresh error/success class
          error.removeClass(this.settings.validClass).addClass(this.settings.errorClass); // Replace message on existing label

          error.html(message);
        } else {
          // Create error element
          error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || ""); // Maintain reference to the element to be placed into the DOM

          place = error;

          if (this.settings.wrapper) {
            // Make sure the element is visible, even in IE
            // actually showing the wrapped element is handled elsewhere
            place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
          }

          if (this.labelContainer.length) {
            this.labelContainer.append(place);
          } else if (this.settings.errorPlacement) {
            this.settings.errorPlacement.call(this, place, $(element));
          } else {
            place.insertAfter(element);
          } // Link error back to the element


          if (error.is("label")) {
            // If the error is a label, then associate using 'for'
            error.attr("for", elementID); // If the element is not a child of an associated label, then it's necessary
            // to explicitly apply aria-describedby
          } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
            errorID = error.attr("id"); // Respect existing non-error aria-describedby

            if (!describedBy) {
              describedBy = errorID;
            } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
              // Add to end of list if not already present
              describedBy += " " + errorID;
            }

            $(element).attr("aria-describedby", describedBy); // If this element is grouped, then assign to all elements in the same group

            group = this.groups[element.name];

            if (group) {
              v = this;
              $.each(v.groups, function (name, testgroup) {
                if (testgroup === group) {
                  $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
                }
              });
            }
          }
        }

        if (!message && this.settings.success) {
          error.text("");

          if (typeof this.settings.success === "string") {
            error.addClass(this.settings.success);
          } else {
            this.settings.success(error, element);
          }
        }

        this.toShow = this.toShow.add(error);
      },
      errorsFor: function errorsFor(element) {
        var name = this.escapeCssMeta(this.idOrName(element)),
            describer = $(element).attr("aria-describedby"),
            selector = "label[for='" + name + "'], label[for='" + name + "'] *"; // 'aria-describedby' should directly reference the error element

        if (describer) {
          selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
        }

        return this.errors().filter(selector);
      },
      // See https://api.jquery.com/category/selectors/, for CSS
      // meta-characters that should be escaped in order to be used with JQuery
      // as a literal part of a name/id or any selector.
      escapeCssMeta: function escapeCssMeta(string) {
        return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function idOrName(element) {
        return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
      },
      validationTargetFor: function validationTargetFor(element) {
        // If radio/checkbox, validate first element in group instead
        if (this.checkable(element)) {
          element = this.findByName(element.name);
        } // Always apply ignore filter


        return $(element).not(this.settings.ignore)[0];
      },
      checkable: function checkable(element) {
        return /radio|checkbox/i.test(element.type);
      },
      findByName: function findByName(name) {
        return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
      },
      getLength: function getLength(value, element) {
        switch (element.nodeName.toLowerCase()) {
          case "select":
            return $("option:selected", element).length;

          case "input":
            if (this.checkable(element)) {
              return this.findByName(element.name).filter(":checked").length;
            }

        }

        return value.length;
      },
      depend: function depend(param, element) {
        return this.dependTypes[_typeof(param)] ? this.dependTypes[_typeof(param)](param, element) : true;
      },
      dependTypes: {
        "boolean": function boolean(param) {
          return param;
        },
        "string": function string(param, element) {
          return !!$(param, element.form).length;
        },
        "function": function _function(param, element) {
          return param(element);
        }
      },
      optional: function optional(element) {
        var val = this.elementValue(element);
        return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
      },
      startRequest: function startRequest(element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          $(element).addClass(this.settings.pendingClass);
          this.pending[element.name] = true;
        }
      },
      stopRequest: function stopRequest(element, valid) {
        this.pendingRequest--; // Sometimes synchronization fails, make sure pendingRequest is never < 0

        if (this.pendingRequest < 0) {
          this.pendingRequest = 0;
        }

        delete this.pending[element.name];
        $(element).removeClass(this.settings.pendingClass);

        if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
          $(this.currentForm).submit(); // Remove the hidden input that was used as a replacement for the
          // missing submit button. The hidden input is added by `handle()`
          // to ensure that the value of the used submit button is passed on
          // for scripted submits triggered by this method

          if (this.submitButton) {
            $("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
          }

          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },
      previousValue: function previousValue(element, method) {
        method = typeof method === "string" && method || "remote";
        return $.data(element, "previousValue") || $.data(element, "previousValue", {
          old: null,
          valid: true,
          message: this.defaultMessage(element, {
            method: method
          })
        });
      },
      // Cleans up all forms and elements, removes validator-specific events
      destroy: function destroy() {
        this.resetForm();
        $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: true
      },
      email: {
        email: true
      },
      url: {
        url: true
      },
      date: {
        date: true
      },
      dateISO: {
        dateISO: true
      },
      number: {
        number: true
      },
      digits: {
        digits: true
      },
      creditcard: {
        creditcard: true
      }
    },
    addClassRules: function addClassRules(className, rules) {
      if (className.constructor === String) {
        this.classRuleSettings[className] = rules;
      } else {
        $.extend(this.classRuleSettings, className);
      }
    },
    classRules: function classRules(element) {
      var rules = {},
          classes = $(element).attr("class");

      if (classes) {
        $.each(classes.split(" "), function () {
          if (this in $.validator.classRuleSettings) {
            $.extend(rules, $.validator.classRuleSettings[this]);
          }
        });
      }

      return rules;
    },
    normalizeAttributeRule: function normalizeAttributeRule(rules, type, method, value) {
      // Convert the value to a number for number inputs, and for text for backwards compability
      // allows type="date" and others to be compared as strings
      if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
        value = Number(value); // Support Opera Mini, which returns NaN for undefined minlength

        if (isNaN(value)) {
          value = undefined;
        }
      }

      if (value || value === 0) {
        rules[method] = value;
      } else if (type === method && type !== "range") {
        // Exception: the jquery validate 'range' method
        // does not test for the html5 'range' type
        rules[method] = true;
      }
    },
    attributeRules: function attributeRules(element) {
      var rules = {},
          $element = $(element),
          type = element.getAttribute("type"),
          method,
          value;

      for (method in $.validator.methods) {
        // Support for <input required> in both html5 and older browsers
        if (method === "required") {
          value = element.getAttribute(method); // Some browsers return an empty string for the required attribute
          // and non-HTML5 browsers might have required="" markup

          if (value === "") {
            value = true;
          } // Force non-HTML5 browsers to return bool


          value = !!value;
        } else {
          value = $element.attr(method);
        }

        this.normalizeAttributeRule(rules, type, method, value);
      } // 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs


      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }

      return rules;
    },
    dataRules: function dataRules(element) {
      var rules = {},
          $element = $(element),
          type = element.getAttribute("type"),
          method,
          value;

      for (method in $.validator.methods) {
        value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
        this.normalizeAttributeRule(rules, type, method, value);
      }

      return rules;
    },
    staticRules: function staticRules(element) {
      var rules = {},
          validator = $.data(element.form, "validator");

      if (validator.settings.rules) {
        rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      }

      return rules;
    },
    normalizeRules: function normalizeRules(rules, element) {
      // Handle dependency check
      $.each(rules, function (prop, val) {
        // Ignore rule when param is explicitly false, eg. required:false
        if (val === false) {
          delete rules[prop];
          return;
        }

        if (val.param || val.depends) {
          var keepRule = true;

          switch (_typeof(val.depends)) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;

            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }

          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            $.data(element.form, "validator").resetElements($(element));
            delete rules[prop];
          }
        }
      }); // Evaluate parameters

      $.each(rules, function (rule, parameter) {
        rules[rule] = $.isFunction(parameter) && rule !== "normalizer" ? parameter(element) : parameter;
      }); // Clean number parameters

      $.each(["minlength", "maxlength"], function () {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(["rangelength", "range"], function () {
        var parts;

        if (rules[this]) {
          if ($.isArray(rules[this])) {
            rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
          } else if (typeof rules[this] === "string") {
            parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
            rules[this] = [Number(parts[0]), Number(parts[1])];
          }
        }
      });

      if ($.validator.autoCreateRanges) {
        // Auto-create ranges
        if (rules.min != null && rules.max != null) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }

        if (rules.minlength != null && rules.maxlength != null) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }

      return rules;
    },
    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function normalizeRule(data) {
      if (typeof data === "string") {
        var transformed = {};
        $.each(data.split(/\s/), function () {
          transformed[this] = true;
        });
        data = transformed;
      }

      return data;
    },
    // https://jqueryvalidation.org/jQuery.validator.addMethod/
    addMethod: function addMethod(name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];

      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },
    // https://jqueryvalidation.org/jQuery.validator.methods/
    methods: {
      // https://jqueryvalidation.org/required-method/
      required: function required(value, element, param) {
        // Check if dependency is met
        if (!this.depend(param, element)) {
          return "dependency-mismatch";
        }

        if (element.nodeName.toLowerCase() === "select") {
          // Could be an array for select-multiple or a string, both are fine this way
          var val = $(element).val();
          return val && val.length > 0;
        }

        if (this.checkable(element)) {
          return this.getLength(value, element) > 0;
        }

        return value.length > 0;
      },
      // https://jqueryvalidation.org/email-method/
      email: function email(value, element) {
        // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
        // Retrieved 2014-01-14
        // If you have a problem with this implementation, report a bug against the above spec
        // Or use custom methods to implement your own email validation
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      // https://jqueryvalidation.org/url-method/
      url: function url(value, element) {
        // Copyright (c) 2010-2013 Diego Perini, MIT licensed
        // https://gist.github.com/dperini/729294
        // see also https://mathiasbynens.be/demo/url-regex
        // modified to allow protocol-relative URLs
        return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
      },
      // https://jqueryvalidation.org/date-method/
      date: function date(value, element) {
        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
      },
      // https://jqueryvalidation.org/dateISO-method/
      dateISO: function dateISO(value, element) {
        return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
      },
      // https://jqueryvalidation.org/number-method/
      number: function number(value, element) {
        return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },
      // https://jqueryvalidation.org/digits-method/
      digits: function digits(value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },
      // https://jqueryvalidation.org/minlength-method/
      minlength: function minlength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param;
      },
      // https://jqueryvalidation.org/maxlength-method/
      maxlength: function maxlength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= param;
      },
      // https://jqueryvalidation.org/rangelength-method/
      rangelength: function rangelength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param[0] && length <= param[1];
      },
      // https://jqueryvalidation.org/min-method/
      min: function min(value, element, param) {
        return this.optional(element) || value >= param;
      },
      // https://jqueryvalidation.org/max-method/
      max: function max(value, element, param) {
        return this.optional(element) || value <= param;
      },
      // https://jqueryvalidation.org/range-method/
      range: function range(value, element, param) {
        return this.optional(element) || value >= param[0] && value <= param[1];
      },
      // https://jqueryvalidation.org/step-method/
      step: function step(value, element, param) {
        var type = $(element).attr("type"),
            errorMessage = "Step attribute on input type " + type + " is not supported.",
            supportedTypes = ["text", "number", "range"],
            re = new RegExp("\\b" + type + "\\b"),
            notSupported = type && !re.test(supportedTypes.join()),
            decimalPlaces = function decimalPlaces(num) {
          var match = ("" + num).match(/(?:\.(\d+))?$/);

          if (!match) {
            return 0;
          } // Number of digits right of decimal point.


          return match[1] ? match[1].length : 0;
        },
            toInt = function toInt(num) {
          return Math.round(num * Math.pow(10, decimals));
        },
            valid = true,
            decimals; // Works only for text, number and range input types
        // TODO find a way to support input types date, datetime, datetime-local, month, time and week


        if (notSupported) {
          throw new Error(errorMessage);
        }

        decimals = decimalPlaces(param); // Value can't have too many decimals

        if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
          valid = false;
        }

        return this.optional(element) || valid;
      },
      // https://jqueryvalidation.org/equalTo-method/
      equalTo: function equalTo(value, element, param) {
        // Bind to the blur event of the target in order to revalidate whenever the target field is updated
        var target = $(param);

        if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
          target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
            $(element).valid();
          });
        }

        return value === target.val();
      },
      // https://jqueryvalidation.org/remote-method/
      remote: function remote(value, element, param, method) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }

        method = typeof method === "string" && method || "remote";
        var previous = this.previousValue(element, method),
            validator,
            data,
            optionDataString;

        if (!this.settings.messages[element.name]) {
          this.settings.messages[element.name] = {};
        }

        previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
        this.settings.messages[element.name][method] = previous.message;
        param = typeof param === "string" && {
          url: param
        } || param;
        optionDataString = $.param($.extend({
          data: value
        }, param.data));

        if (previous.old === optionDataString) {
          return previous.valid;
        }

        previous.old = optionDataString;
        validator = this;
        this.startRequest(element);
        data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          mode: "abort",
          port: "validate" + element.name,
          dataType: "json",
          data: data,
          context: validator.currentForm,
          success: function success(response) {
            var valid = response === true || response === "true",
                errors,
                message,
                submitted;
            validator.settings.messages[element.name][method] = previous.originalMessage;

            if (valid) {
              submitted = validator.formSubmitted;
              validator.resetInternals();
              validator.toHide = validator.errorsFor(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              validator.invalid[element.name] = false;
              validator.showErrors();
            } else {
              errors = {};
              message = response || validator.defaultMessage(element, {
                method: method,
                parameters: value
              });
              errors[element.name] = previous.message = message;
              validator.invalid[element.name] = true;
              validator.showErrors(errors);
            }

            previous.valid = valid;
            validator.stopRequest(element, valid);
          }
        }, param));
        return "pending";
      }
    }
  }); // Ajax mode: abort
  // usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
  // if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

  var pendingRequests = {},
      ajax; // Use a prefilter if available (1.5+)

  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function (settings, _, xhr) {
      var port = settings.port;

      if (settings.mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }

        pendingRequests[port] = xhr;
      }
    });
  } else {
    // Proxy ajax
    ajax = $.ajax;

    $.ajax = function (settings) {
      var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
          port = ("port" in settings ? settings : $.ajaxSettings).port;

      if (mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }

        pendingRequests[port] = ajax.apply(this, arguments);
        return pendingRequests[port];
      }

      return ajax.apply(this, arguments);
    };
  }

  return $;
});

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _DanhSachHinhAnh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _const_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _const_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_const_data__WEBPACK_IMPORTED_MODULE_1__);


var dsha = new _DanhSachHinhAnh__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
checkLogin();
$("footer").hide();
Object(_const_data__WEBPACK_IMPORTED_MODULE_1__["createData"])();

function checkLogin() {
  var json = localStorage.getItem('ThongTinDangNhap');

  if (json != null) {
    location.href = "/course";
  }
}

function getAnh() {
  var jsonAnh = localStorage.getItem("HinhAnh");
  var listAnh = JSON.parse(jsonAnh);
  dsha.mangHinhAnh = listAnh;
} // $("#loginUser").click(function(){
//     loginUser();  
// });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* unused harmony export load */
/* unused harmony export load2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceKhoaHoc; });
/* harmony import */ var _const_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _const_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_const_data__WEBPACK_IMPORTED_MODULE_0__);
 // const load = function () {
//     (function () {
//         if (window.localStorage) {
//             if (!localStorage.getItem('firstLoad')) {
//                 localStorage['firstLoad'] = true;
//                 window.location.reload();
//             }
//             else
//                 localStorage.removeItem('firstLoad');
//         }
//     })();
// }
// const load2 = function () {
//     window.onload = function () {
//         //considering there aren't any hashes in the urls already
//         if (!window.location.hash) {
//             //setting window location
//             window.location = window.location + '#loaded';
//             //using reload() method to reload web page
//             window.location.reload();
//         }
//     }
// }

var ServiceKhoaHoc = function ServiceKhoaHoc() {
  this.XoaKhoaHoc = function (id) {
    var mangKQXoa = [];
    var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/".concat(id);
    $.ajax({
      type: "DELETE",
      url: urlAPI,
      xhrFields: {
        withCredentials: false
      },
      success: function success(ketqua) {
        swal({
          text: "Xóa khóa học thành công!",
          icon: "success",
          button: "OK"
        }).then(function (value) {
          window.location.reload();
        });
        console.log(ketqua);
      },
      error: function error(ketqua) {
        alertFail("Khóa học đã ghi danh không thể xóa");
      }
    });
  };

  this.ChiTietKhoaHoc = function (id) {
    if (localStorage.getItem("DanhSachKhoaHoc")) {
      var data = JSON.parse(localStorage.getItem("DanhSachKhoaHoc"));
      var res = data.find(function (x) {
        return x.MaKhoaHoc === id;
      });
      var jsonCourseDetails = JSON.stringify(res);
      localStorage.setItem('ChiTietKhoaHoc', jsonCourseDetails);
      location.href = "/course/".concat(id);
    } else {
      var _res = _const_data__WEBPACK_IMPORTED_MODULE_0__["dataKhoaHoc"].find(function (x) {
        return x.MaKhoaHoc === id;
      });

      var jsonCourseDetails = JSON.stringify(_res);
      localStorage.setItem('ChiTietKhoaHoc', jsonCourseDetails);
      location.href = "/course/".concat(id);
    }
  };

  this.ThemKhoaHoc = function (khoahoc) {
    showloader();
    var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc";
    $.ajax({
      type: "POST",
      url: urlAPI,
      dataType: "json",
      data: khoahoc,
      xhrFields: {
        withCredentials: false
      },
      success: function success(ketqua) {
        setTimeout(function () {
          hideloader();
          swal({
            text: "Thêm khóa học thành công!",
            icon: "success",
            button: "OK"
          }).then(function (value) {
            window.location.reload();
          });
          console.log(ketqua);
          return true;
        }, 500);
      },
      error: function error(ketqua) {
        setTimeout(function () {
          hideloader();
          swal({
            text: "Trùng mã khóa học!",
            icon: "error",
            button: "OK"
          }).then(function (value) {});
        }, 500);
      }
    });
  };

  this.LayThongTinGhiDanhKhoaHoc = function (dskh, taikhoan) {
    var dskhdk = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = dskh[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var kh = _step.value;
        console.log(kh);

        if (kh.UserDangKy.length > 0) {
          var check = kh.UserDangKy.find(function (x) {
            return x == taikhoan;
          });

          if (check) {
            dskhdk.push(kh);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return dskhdk;
  };

  this.GhiDanhKhoaHoc = function (dskh, makh, tk) {
    showloader();
    var count = 0;
    var dataDSKH = dskh.find(function (x) {
      if (x.MaKhoaHoc == makh) {
        return true;
      }

      count++;
    });
    var check = true;
    var data = null;

    if (dataDSKH.UserDangKy.length > 0) {
      data = dataDSKH.UserDangKy.find(function (x) {
        return x == tk;
      });
      check = data ? false : true;
    }

    setTimeout(function () {
      hideloader();
      swal({
        text: check ? "Ghi danh khóa học thành công!" : 'Ghi danh thất bại!',
        icon: check ? "success" : 'error',
        button: "OK"
      }).then(function (value) {
        if (check) {
          dskh[count].UserDangKy.push(tk);
          console.log(dskh);
          Object(_const_data__WEBPACK_IMPORTED_MODULE_0__["updateData"])('dskh', dskh); // load();

          window.location.reload();
        }
      });
    }, 1000);
  };

  this.CapNhatThongTinKhoaHoc = function (id, name, des, luotxem, creater) {
    showloader();
    var ngd = JSON.stringify({
      MaKhoaHoc: id,
      TenKhoaHoc: name,
      MoTa: des,
      LuotXem: luotxem,
      NguoiTao: creater
    });
    var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/capnhatkhoahoc";
    $.ajax({
      type: "PUT",
      url: urlAPI,
      contentType: "application/json",
      dataType: "json",
      data: ngd,
      xhrFields: {
        withCredentials: false
      },
      success: function success(ketqua) {
        setTimeout(function () {
          hideloader();
          swal({
            text: "Cập nhật khóa học thành công!",
            icon: "success",
            button: "OK"
          }).then(function (value) {
            window.location.reload();
          });
          console.log(ketqua);
          return true;
        }, 500);
      },
      error: function error(ketqua) {
        setTimeout(function () {
          swal({
            text: "Cập nhật khóa học thành công!",
            icon: "success",
            button: "OK"
          }).then(function (value) {
            window.location.reload();
          });
        }, 500);
      }
    });
  };
}; //Loader 


var showloader = function showloader() {
  $(".preloader").css("display", "inline-block");
};

var hideloader = function hideloader() {
  $(".preloader").hide();
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DanhSachKhoaHoc = function DanhSachKhoaHoc() {
  this.mangKhoaHoc = [];

  this.ThemKhoaHoc = function (khoahoc) {
    this.mangKhoaHoc.push(khoahoc);
  };

  this.TimKiemKhoaHoc = function (name) {
    var mangDSKH = new DanhSachKhoaHoc();

    for (var i = 0; i < this.mangKhoaHoc.length; i++) {
      var value = this.mangKhoaHoc[i];

      if (value.TenKhoaHoc.toLowerCase().indexOf(name.toLowerCase()) > -1 || value.MaKhoaHoc.toLowerCase().indexOf(name.toLowerCase()) > -1) {
        mangDSKH.ThemKhoaHoc(value);
      }
    }

    return mangDSKH;
  };

  this.TimKiemKhoaHoc2 = function (name) {
    var mangDSKH = new DanhSachKhoaHoc();

    for (var i = 0; i < this.mangKhoaHoc.length; i++) {
      var value = this.mangKhoaHoc[i];

      if (value.TenKhoaHoc.toLowerCase().indexOf(name.toLowerCase()) > -1 || value.MaKhoaHoc.toLowerCase().indexOf(name.toLowerCase()) > -1) {
        mangDSKH.ThemKhoaHoc(value);

        if (name == "") {
          var mangTrong = [];
          return mangTrong;
        }
      }
    }

    return mangDSKH;
  };

  this.layThongTinKhoaHoc = function (id) {
    for (var i = 0; i < this.mangKhoaHoc.length; i++) {
      var value = this.mangKhoaHoc[i];

      if (value.MaKhoaHoc == id) {
        return value;
      }
    }
  };

  this.CapNhatThongTinKhoaHoc = function (mangKhoaHocUpdate) {
    for (var i = 0; i < this.mangKhoaHoc.length; i++) {
      var value = this.mangKhoaHoc[i];

      if (mangKhoaHocUpdate.MaKhoaHoc == value.MaKhoaHoc) {
        value.TenKhoaHoc = mangKhoaHocUpdate.TenKhoaHoc;
        value.MoTa = mangKhoaHocUpdate.MoTa;
        value.HinhAnh = mangKhoaHocUpdate.HinhAnh;
        value.LuotXem = mangKhoaHocUpdate.LuotXem;
      }
    }
  };

  this.XoaKhoaHoc = function (mangXoaKhoaHoc, mangKH) {
    for (var i = 0; i < mangXoaKhoaHoc.length; i++) {
      for (var j = 0; j < mangKH.length; j++) {
        var mangXoaKH = mangXoaKhoaHoc[i];

        if (mangXoaKH == mangKH[j].MaKhoaHoc) {
          mangKH.splice(j, 1);
        }
      }
    }

    return mangKH;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (DanhSachKhoaHoc);

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DanhSachHocVien = function DanhSachHocVien() {
  this.mangHocVien = [];

  this.ThemHocVien = function (hocvien) {
    this.mangHocVien.push(hocvien);
  };

  this.TimKiemHocVien = function (name) {
    var mangDSHV = new DanhSachHocVien();

    for (var _i = 0; _i < this.mangHocVien.length; _i++) {
      var value = this.mangHocVien[_i];

      if (value.TaiKhoan.toLowerCase().indexOf(name.toLowerCase()) > -1) {
        mangDSHV.ThemHocVien(value);
      }
    }

    return mangDSHV;
  };

  this.layThongTinHocVien = function (name) {
    for (i = 0; i < this.mangHocVien.length; i++) {
      var value = this.mangHocVien[i];

      if (value.TaiKhoan == name) {
        return value;
      }
    }
  };

  this.CapNhatThongTinHocVien = function (mangHocVienUpdate) {
    for (var _i2 = 0; _i2 < this.mangHocVien.length; _i2++) {
      var value = this.mangHocVien[_i2];

      if (mangHocVienUpdate.TaiKhoan == value.TaiKhoan) {
        value.TaiKhoan = mangHocVienUpdate.TaiKhoan;
        value.HoTen = mangHocVienUpdate.HoTen;
        value.Email = mangHocVienUpdate.Email;
        value.SoDT = mangHocVienUpdate.SoDT;
        value.MaLoaiNguoiDung = mangHocVienUpdate.MaLoaiNguoiDung;
        value.TenLoaiNguoiDung = mangHocVienUpdate.TenLoaiNguoiDung;
      }
    }
  };

  this.XoaHocVien = function (mangXoaHocVien) {
    for (var _i3 = 0; _i3 < mangXoaHocVien.length; _i3++) {
      for (var j = 0; j < this.mangHocVien.length; j++) {
        var mangXoaHV = mangXoaHocVien[_i3];

        if (mangXoaHV == this.mangHocVien[j].TaiKhoan) {
          this.mangHocVien.splice(j, 1);
        }
      }
    }

    return this.mangHocVien;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (DanhSachHocVien);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* jquery.nicescroll 3.6.8 InuYaksa*2015 MIT http://nicescroll.areaaperta.com */
(function (f) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (f) {
  var B = !1,
      F = !1,
      O = 0,
      P = 2E3,
      A = 0,
      J = ["webkit", "ms", "moz", "o"],
      v = window.requestAnimationFrame || !1,
      w = window.cancelAnimationFrame || !1;
  if (!v) for (var Q in J) {
    var G = J[Q];

    if (v = window[G + "RequestAnimationFrame"]) {
      w = window[G + "CancelAnimationFrame"] || window[G + "CancelRequestAnimationFrame"];
      break;
    }
  }

  var x = window.MutationObserver || window.WebKitMutationObserver || !1,
      K = {
    zindex: "auto",
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorcolor: "#424242",
    cursorwidth: "6px",
    cursorborder: "1px solid #fff",
    cursorborderradius: "5px",
    scrollspeed: 60,
    mousescrollstep: 24,
    touchbehavior: !1,
    hwacceleration: !0,
    usetransition: !0,
    boxzoom: !1,
    dblclickzoom: !0,
    gesturezoom: !0,
    grabcursorenabled: !0,
    autohidemode: !0,
    background: "",
    iframeautoresize: !0,
    cursorminheight: 32,
    preservenativescrolling: !0,
    railoffset: !1,
    railhoffset: !1,
    bouncescroll: !0,
    spacebarenabled: !0,
    railpadding: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    disableoutline: !0,
    horizrailenabled: !0,
    railalign: "right",
    railvalign: "bottom",
    enabletranslate3d: !0,
    enablemousewheel: !0,
    enablekeyboard: !0,
    smoothscroll: !0,
    sensitiverail: !0,
    enablemouselockapi: !0,
    cursorfixedheight: !1,
    directionlockdeadzone: 6,
    hidecursordelay: 400,
    nativeparentscrolling: !0,
    enablescrollonselection: !0,
    overflowx: !0,
    overflowy: !0,
    cursordragspeed: .3,
    rtlmode: "auto",
    cursordragontouch: !1,
    oneaxismousemode: "auto",
    scriptpath: function () {
      var f = document.getElementsByTagName("script"),
          f = f.length ? f[f.length - 1].src.split("?")[0] : "";
      return 0 < f.split("/").length ? f.split("/").slice(0, -1).join("/") + "/" : "";
    }(),
    preventmultitouchscrolling: !0,
    disablemutationobserver: !1
  },
      H = !1,
      R = function R() {
    if (H) return H;
    var f = document.createElement("DIV"),
        c = f.style,
        k = navigator.userAgent,
        l = navigator.platform,
        d = {
      haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document
    };
    d.isopera = "opera" in window;
    d.isopera12 = d.isopera && "getUserMedia" in navigator;
    d.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
    d.isie = "all" in document && "attachEvent" in f && !d.isopera;
    d.isieold = d.isie && !("msInterpolationMode" in c);
    d.isie7 = d.isie && !d.isieold && (!("documentMode" in document) || 7 == document.documentMode);
    d.isie8 = d.isie && "documentMode" in document && 8 == document.documentMode;
    d.isie9 = d.isie && "performance" in window && 9 == document.documentMode;
    d.isie10 = d.isie && "performance" in window && 10 == document.documentMode;
    d.isie11 = "msRequestFullscreen" in f && 11 <= document.documentMode;
    d.isieedge12 = navigator.userAgent.match(/Edge\/12\./);
    d.isieedge = "msOverflowStyle" in f;
    d.ismodernie = d.isie11 || d.isieedge;
    d.isie9mobile = /iemobile.9/i.test(k);
    d.isie9mobile && (d.isie9 = !1);
    d.isie7mobile = !d.isie9mobile && d.isie7 && /iemobile/i.test(k);
    d.ismozilla = "MozAppearance" in c;
    d.iswebkit = "WebkitAppearance" in c;
    d.ischrome = "chrome" in window;
    d.ischrome38 = d.ischrome && "touchAction" in c;
    d.ischrome22 = !d.ischrome38 && d.ischrome && d.haspointerlock;
    d.ischrome26 = !d.ischrome38 && d.ischrome && "transition" in c;
    d.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
    d.hasw3ctouch = (window.PointerEvent || !1) && (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints);
    d.hasmstouch = !d.hasw3ctouch && (window.MSPointerEvent || !1);
    d.ismac = /^mac$/i.test(l);
    d.isios = d.cantouch && /iphone|ipad|ipod/i.test(l);
    d.isios4 = d.isios && !("seal" in Object);
    d.isios7 = d.isios && "webkitHidden" in document;
    d.isios8 = d.isios && "hidden" in document;
    d.isandroid = /android/i.test(k);
    d.haseventlistener = "addEventListener" in f;
    d.trstyle = !1;
    d.hastransform = !1;
    d.hastranslate3d = !1;
    d.transitionstyle = !1;
    d.hastransition = !1;
    d.transitionend = !1;
    l = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];

    for (k = 0; k < l.length; k++) {
      if (void 0 !== c[l[k]]) {
        d.trstyle = l[k];
        break;
      }
    }

    d.hastransform = !!d.trstyle;
    d.hastransform && (c[d.trstyle] = "translate3d(1px,2px,3px)", d.hastranslate3d = /translate3d/.test(c[d.trstyle]));
    d.transitionstyle = !1;
    d.prefixstyle = "";
    d.transitionend = !1;

    for (var l = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "), q = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), t = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), k = 0; k < l.length; k++) {
      if (l[k] in c) {
        d.transitionstyle = l[k];
        d.prefixstyle = q[k];
        d.transitionend = t[k];
        break;
      }
    }

    d.ischrome26 && (d.prefixstyle = q[1]);
    d.hastransition = d.transitionstyle;

    a: {
      k = ["grab", "-webkit-grab", "-moz-grab"];
      if (d.ischrome && !d.ischrome38 || d.isie) k = [];

      for (l = 0; l < k.length; l++) {
        if (q = k[l], c.cursor = q, c.cursor == q) {
          c = q;
          break a;
        }
      }

      c = "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize";
    }

    d.cursorgrabvalue = c;
    d.hasmousecapture = "setCapture" in f;
    d.hasMutationObserver = !1 !== x;
    return H = d;
  },
      S = function S(h, c) {
    function k() {
      var b = a.doc.css(e.trstyle);
      return b && "matrix" == b.substr(0, 6) ? b.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1;
    }

    function l() {
      var b = a.win;
      if ("zIndex" in b) return b.zIndex();

      for (; 0 < b.length && 9 != b[0].nodeType;) {
        var g = b.css("zIndex");
        if (!isNaN(g) && 0 != g) return parseInt(g);
        b = b.parent();
      }

      return !1;
    }

    function d(b, g, u) {
      g = b.css(g);
      b = parseFloat(g);
      return isNaN(b) ? (b = z[g] || 0, u = 3 == b ? u ? a.win.outerHeight() - a.win.innerHeight() : a.win.outerWidth() - a.win.innerWidth() : 1, a.isie8 && b && (b += 1), u ? b : 0) : b;
    }

    function q(b, g, u, c) {
      a._bind(b, g, function (a) {
        a = a ? a : window.event;
        var c = {
          original: a,
          target: a.target || a.srcElement,
          type: "wheel",
          deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: function preventDefault() {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            return !1;
          },
          stopImmediatePropagation: function stopImmediatePropagation() {
            a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.cancelBubble = !0;
          }
        };
        "mousewheel" == g ? (a.wheelDeltaX && (c.deltaX = -.025 * a.wheelDeltaX), a.wheelDeltaY && (c.deltaY = -.025 * a.wheelDeltaY), c.deltaY || c.deltaX || (c.deltaY = -.025 * a.wheelDelta)) : c.deltaY = a.detail;
        return u.call(b, c);
      }, c);
    }

    function t(b, g, c) {
      var d, e;
      0 == b.deltaMode ? (d = -Math.floor(a.opt.mousescrollstep / 54 * b.deltaX), e = -Math.floor(a.opt.mousescrollstep / 54 * b.deltaY)) : 1 == b.deltaMode && (d = -Math.floor(b.deltaX * a.opt.mousescrollstep), e = -Math.floor(b.deltaY * a.opt.mousescrollstep));
      g && a.opt.oneaxismousemode && 0 == d && e && (d = e, e = 0, c && (0 > d ? a.getScrollLeft() >= a.page.maxw : 0 >= a.getScrollLeft()) && (e = d, d = 0));
      a.isrtlmode && (d = -d);
      d && (a.scrollmom && a.scrollmom.stop(), a.lastdeltax += d, a.debounced("mousewheelx", function () {
        var b = a.lastdeltax;
        a.lastdeltax = 0;
        a.rail.drag || a.doScrollLeftBy(b);
      }, 15));

      if (e) {
        if (a.opt.nativeparentscrolling && c && !a.ispage && !a.zoomactive) if (0 > e) {
          if (a.getScrollTop() >= a.page.maxh) return !0;
        } else if (0 >= a.getScrollTop()) return !0;
        a.scrollmom && a.scrollmom.stop();
        a.lastdeltay += e;
        a.synched("mousewheely", function () {
          var b = a.lastdeltay;
          a.lastdeltay = 0;
          a.rail.drag || a.doScrollBy(b);
        }, 15);
      }

      b.stopImmediatePropagation();
      return b.preventDefault();
    }

    var a = this;
    this.version = "3.6.8";
    this.name = "nicescroll";
    this.me = c;
    this.opt = {
      doc: f("body"),
      win: !1
    };
    f.extend(this.opt, K);
    this.opt.snapbackspeed = 80;
    if (h) for (var r in a.opt) {
      void 0 !== h[r] && (a.opt[r] = h[r]);
    }
    a.opt.disablemutationobserver && (x = !1);
    this.iddoc = (this.doc = a.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
    this.ispage = /^BODY|HTML/.test(a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName);
    this.haswrapper = !1 !== a.opt.win;
    this.win = a.opt.win || (this.ispage ? f(window) : this.doc);
    this.docscroll = this.ispage && !this.haswrapper ? f(window) : this.win;
    this.body = f("body");
    this.iframe = this.isfixed = this.viewport = !1;
    this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
    this.istextarea = "TEXTAREA" == this.win[0].nodeName;
    this.forcescreen = !1;
    this.canshowonmouseevent = "scroll" != a.opt.autohidemode;
    this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
    this.scroll = {
      x: 0,
      y: 0
    };
    this.scrollratio = {
      x: 0,
      y: 0
    };
    this.cursorheight = 20;
    this.scrollvaluemax = 0;

    if ("auto" == this.opt.rtlmode) {
      r = this.win[0] == window ? this.body : this.win;
      var p = r.css("writing-mode") || r.css("-webkit-writing-mode") || r.css("-ms-writing-mode") || r.css("-moz-writing-mode");
      "horizontal-tb" == p || "lr-tb" == p || "" == p ? (this.isrtlmode = "rtl" == r.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == p || "tb" == p || "tb-rl" == p || "rl-tb" == p, this.isvertical = "vertical-rl" == p || "tb" == p || "tb-rl" == p);
    } else this.isrtlmode = !0 === this.opt.rtlmode, this.isvertical = !1;

    this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;

    do {
      this.id = "ascrail" + P++;
    } while (document.getElementById(this.id));

    this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
    this.visibility = !0;
    this.hidden = this.locked = this.railslocked = !1;
    this.cursoractive = !0;
    this.wheelprevented = !1;
    this.overflowx = a.opt.overflowx;
    this.overflowy = a.opt.overflowy;
    this.nativescrollingarea = !1;
    this.checkarea = 0;
    this.events = [];
    this.saved = {};
    this.delaylist = {};
    this.synclist = {};
    this.lastdeltay = this.lastdeltax = 0;
    this.detected = R();
    var e = f.extend({}, this.detected);
    this.ishwscroll = (this.canhwscroll = e.hastransform && a.opt.hwacceleration) && a.haswrapper;
    this.hasreversehr = this.isrtlmode ? this.isvertical ? !(e.iswebkit || e.isie || e.isie11) : !(e.iswebkit || e.isie && !e.isie10 && !e.isie11) : !1;
    this.istouchcapable = !1;
    e.cantouch || !e.hasw3ctouch && !e.hasmstouch ? !e.cantouch || e.isios || e.isandroid || !e.iswebkit && !e.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0;
    a.opt.enablemouselockapi || (e.hasmousecapture = !1, e.haspointerlock = !1);

    this.debounced = function (b, g, c) {
      a && (a.delaylist[b] || (g.call(a), a.delaylist[b] = {
        h: v(function () {
          a.delaylist[b].fn.call(a);
          a.delaylist[b] = !1;
        }, c)
      }), a.delaylist[b].fn = g);
    };

    var I = !1;

    this.synched = function (b, g) {
      a.synclist[b] = g;

      (function () {
        I || (v(function () {
          if (a) {
            I = !1;

            for (var b in a.synclist) {
              var g = a.synclist[b];
              g && g.call(a);
              a.synclist[b] = !1;
            }
          }
        }), I = !0);
      })();

      return b;
    };

    this.unsynched = function (b) {
      a.synclist[b] && (a.synclist[b] = !1);
    };

    this.css = function (b, g) {
      for (var c in g) {
        a.saved.css.push([b, c, b.css(c)]), b.css(c, g[c]);
      }
    };

    this.scrollTop = function (b) {
      return void 0 === b ? a.getScrollTop() : a.setScrollTop(b);
    };

    this.scrollLeft = function (b) {
      return void 0 === b ? a.getScrollLeft() : a.setScrollLeft(b);
    };

    var D = function D(a, g, c, d, e, f, k) {
      this.st = a;
      this.ed = g;
      this.spd = c;
      this.p1 = d || 0;
      this.p2 = e || 1;
      this.p3 = f || 0;
      this.p4 = k || 1;
      this.ts = new Date().getTime();
      this.df = this.ed - this.st;
    };

    D.prototype = {
      B2: function B2(a) {
        return 3 * a * a * (1 - a);
      },
      B3: function B3(a) {
        return 3 * a * (1 - a) * (1 - a);
      },
      B4: function B4(a) {
        return (1 - a) * (1 - a) * (1 - a);
      },
      getNow: function getNow() {
        var a = 1 - (new Date().getTime() - this.ts) / this.spd,
            g = this.B2(a) + this.B3(a) + this.B4(a);
        return 0 > a ? this.ed : this.st + Math.round(this.df * g);
      },
      update: function update(a, g) {
        this.st = this.getNow();
        this.ed = a;
        this.spd = g;
        this.ts = new Date().getTime();
        this.df = this.ed - this.st;
        return this;
      }
    };

    if (this.ishwscroll) {
      this.doc.translate = {
        x: 0,
        y: 0,
        tx: "0px",
        ty: "0px"
      };
      e.hastranslate3d && e.isios && this.doc.css("-webkit-backface-visibility", "hidden");

      this.getScrollTop = function (b) {
        if (!b) {
          if (b = k()) return 16 == b.length ? -b[13] : -b[5];
          if (a.timerscroll && a.timerscroll.bz) return a.timerscroll.bz.getNow();
        }

        return a.doc.translate.y;
      };

      this.getScrollLeft = function (b) {
        if (!b) {
          if (b = k()) return 16 == b.length ? -b[12] : -b[4];
          if (a.timerscroll && a.timerscroll.bh) return a.timerscroll.bh.getNow();
        }

        return a.doc.translate.x;
      };

      this.notifyScrollEvent = function (a) {
        var g = document.createEvent("UIEvents");
        g.initUIEvent("scroll", !1, !0, window, 1);
        g.niceevent = !0;
        a.dispatchEvent(g);
      };

      var y = this.isrtlmode ? 1 : -1;
      e.hastranslate3d && a.opt.enabletranslate3d ? (this.setScrollTop = function (b, g) {
        a.doc.translate.y = b;
        a.doc.translate.ty = -1 * b + "px";
        a.doc.css(e.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
        g || a.notifyScrollEvent(a.win[0]);
      }, this.setScrollLeft = function (b, g) {
        a.doc.translate.x = b;
        a.doc.translate.tx = b * y + "px";
        a.doc.css(e.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
        g || a.notifyScrollEvent(a.win[0]);
      }) : (this.setScrollTop = function (b, g) {
        a.doc.translate.y = b;
        a.doc.translate.ty = -1 * b + "px";
        a.doc.css(e.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
        g || a.notifyScrollEvent(a.win[0]);
      }, this.setScrollLeft = function (b, g) {
        a.doc.translate.x = b;
        a.doc.translate.tx = b * y + "px";
        a.doc.css(e.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
        g || a.notifyScrollEvent(a.win[0]);
      });
    } else this.getScrollTop = function () {
      return a.docscroll.scrollTop();
    }, this.setScrollTop = function (b) {
      return setTimeout(function () {
        a && a.docscroll.scrollTop(b);
      }, 1);
    }, this.getScrollLeft = function () {
      return a.hasreversehr ? a.detected.ismozilla ? a.page.maxw - Math.abs(a.docscroll.scrollLeft()) : a.page.maxw - a.docscroll.scrollLeft() : a.docscroll.scrollLeft();
    }, this.setScrollLeft = function (b) {
      return setTimeout(function () {
        if (a) return a.hasreversehr && (b = a.detected.ismozilla ? -(a.page.maxw - b) : a.page.maxw - b), a.docscroll.scrollLeft(b);
      }, 1);
    };

    this.getTarget = function (a) {
      return a ? a.target ? a.target : a.srcElement ? a.srcElement : !1 : !1;
    };

    this.hasParent = function (a, g) {
      if (!a) return !1;

      for (var c = a.target || a.srcElement || a || !1; c && c.id != g;) {
        c = c.parentNode || !1;
      }

      return !1 !== c;
    };

    var z = {
      thin: 1,
      medium: 3,
      thick: 5
    };

    this.getDocumentScrollOffset = function () {
      return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
      };
    };

    this.getOffset = function () {
      if (a.isfixed) {
        var b = a.win.offset(),
            g = a.getDocumentScrollOffset();
        b.top -= g.top;
        b.left -= g.left;
        return b;
      }

      b = a.win.offset();
      if (!a.viewport) return b;
      g = a.viewport.offset();
      return {
        top: b.top - g.top,
        left: b.left - g.left
      };
    };

    this.updateScrollBar = function (b) {
      var g, c, e;
      if (a.ishwscroll) a.rail.css({
        height: a.win.innerHeight() - (a.opt.railpadding.top + a.opt.railpadding.bottom)
      }), a.railh && a.railh.css({
        width: a.win.innerWidth() - (a.opt.railpadding.left + a.opt.railpadding.right)
      });else {
        var f = a.getOffset();
        g = f.top;
        c = f.left - (a.opt.railpadding.left + a.opt.railpadding.right);
        g += d(a.win, "border-top-width", !0);
        c += a.rail.align ? a.win.outerWidth() - d(a.win, "border-right-width") - a.rail.width : d(a.win, "border-left-width");
        if (e = a.opt.railoffset) e.top && (g += e.top), e.left && (c += e.left);
        a.railslocked || a.rail.css({
          top: g,
          left: c,
          height: (b ? b.h : a.win.innerHeight()) - (a.opt.railpadding.top + a.opt.railpadding.bottom)
        });
        a.zoom && a.zoom.css({
          top: g + 1,
          left: 1 == a.rail.align ? c - 20 : c + a.rail.width + 4
        });

        if (a.railh && !a.railslocked) {
          g = f.top;
          c = f.left;
          if (e = a.opt.railhoffset) e.top && (g += e.top), e.left && (c += e.left);
          b = a.railh.align ? g + d(a.win, "border-top-width", !0) + a.win.innerHeight() - a.railh.height : g + d(a.win, "border-top-width", !0);
          c += d(a.win, "border-left-width");
          a.railh.css({
            top: b - (a.opt.railpadding.top + a.opt.railpadding.bottom),
            left: c,
            width: a.railh.width
          });
        }
      }
    };

    this.doRailClick = function (b, g, c) {
      var d;
      a.railslocked || (a.cancelEvent(b), g ? (g = c ? a.doScrollLeft : a.doScrollTop, d = c ? (b.pageX - a.railh.offset().left - a.cursorwidth / 2) * a.scrollratio.x : (b.pageY - a.rail.offset().top - a.cursorheight / 2) * a.scrollratio.y, g(d)) : (g = c ? a.doScrollLeftBy : a.doScrollBy, d = c ? a.scroll.x : a.scroll.y, b = c ? b.pageX - a.railh.offset().left : b.pageY - a.rail.offset().top, c = c ? a.view.w : a.view.h, g(d >= b ? c : -c)));
    };

    a.hasanimationframe = v;
    a.hascancelanimationframe = w;
    a.hasanimationframe ? a.hascancelanimationframe || (w = function w() {
      a.cancelAnimationFrame = !0;
    }) : (v = function v(a) {
      return setTimeout(a, 15 - Math.floor(+new Date() / 1E3) % 16);
    }, w = clearTimeout);

    this.init = function () {
      a.saved.css = [];
      if (e.isie7mobile || e.isoperamini) return !0;
      e.hasmstouch && a.css(a.ispage ? f("html") : a.win, {
        _touchaction: "none"
      });
      var b = e.ismodernie || e.isie10 ? {
        "-ms-overflow-style": "none"
      } : {
        "overflow-y": "hidden"
      };
      a.zindex = "auto";
      a.zindex = a.ispage || "auto" != a.opt.zindex ? a.opt.zindex : l() || "auto";
      !a.ispage && "auto" != a.zindex && a.zindex > A && (A = a.zindex);
      a.isie && 0 == a.zindex && "auto" == a.opt.zindex && (a.zindex = "auto");

      if (!a.ispage || !e.cantouch && !e.isieold && !e.isie9mobile) {
        var c = a.docscroll;
        a.ispage && (c = a.haswrapper ? a.win : a.doc);
        e.isie9mobile || a.css(c, b);
        a.ispage && e.isie7 && ("BODY" == a.doc[0].nodeName ? a.css(f("html"), {
          "overflow-y": "hidden"
        }) : "HTML" == a.doc[0].nodeName && a.css(f("body"), b));
        !e.isios || a.ispage || a.haswrapper || a.css(f("body"), {
          "-webkit-overflow-scrolling": "touch"
        });
        var d = f(document.createElement("div"));
        d.css({
          position: "relative",
          top: 0,
          "float": "right",
          width: a.opt.cursorwidth,
          height: 0,
          "background-color": a.opt.cursorcolor,
          border: a.opt.cursorborder,
          "background-clip": "padding-box",
          "-webkit-border-radius": a.opt.cursorborderradius,
          "-moz-border-radius": a.opt.cursorborderradius,
          "border-radius": a.opt.cursorborderradius
        });
        d.hborder = parseFloat(d.outerHeight() - d.innerHeight());
        d.addClass("nicescroll-cursors");
        a.cursor = d;
        var m = f(document.createElement("div"));
        m.attr("id", a.id);
        m.addClass("nicescroll-rails nicescroll-rails-vr");
        var k,
            h,
            p = ["left", "right", "top", "bottom"],
            L;

        for (L in p) {
          h = p[L], (k = a.opt.railpadding[h]) ? m.css("padding-" + h, k + "px") : a.opt.railpadding[h] = 0;
        }

        m.append(d);
        m.width = Math.max(parseFloat(a.opt.cursorwidth), d.outerWidth());
        m.css({
          width: m.width + "px",
          zIndex: a.zindex,
          background: a.opt.background,
          cursor: "default"
        });
        m.visibility = !0;
        m.scrollable = !0;
        m.align = "left" == a.opt.railalign ? 0 : 1;
        a.rail = m;
        d = a.rail.drag = !1;
        !a.opt.boxzoom || a.ispage || e.isieold || (d = document.createElement("div"), a.bind(d, "click", a.doZoom), a.bind(d, "mouseenter", function () {
          a.zoom.css("opacity", a.opt.cursoropacitymax);
        }), a.bind(d, "mouseleave", function () {
          a.zoom.css("opacity", a.opt.cursoropacitymin);
        }), a.zoom = f(d), a.zoom.css({
          cursor: "pointer",
          zIndex: a.zindex,
          backgroundImage: "url(" + a.opt.scriptpath + "zoomico.png)",
          height: 18,
          width: 18,
          backgroundPosition: "0px 0px"
        }), a.opt.dblclickzoom && a.bind(a.win, "dblclick", a.doZoom), e.cantouch && a.opt.gesturezoom && (a.ongesturezoom = function (b) {
          1.5 < b.scale && a.doZoomIn(b);
          .8 > b.scale && a.doZoomOut(b);
          return a.cancelEvent(b);
        }, a.bind(a.win, "gestureend", a.ongesturezoom)));
        a.railh = !1;
        var n;
        a.opt.horizrailenabled && (a.css(c, {
          overflowX: "hidden"
        }), d = f(document.createElement("div")), d.css({
          position: "absolute",
          top: 0,
          height: a.opt.cursorwidth,
          width: 0,
          backgroundColor: a.opt.cursorcolor,
          border: a.opt.cursorborder,
          backgroundClip: "padding-box",
          "-webkit-border-radius": a.opt.cursorborderradius,
          "-moz-border-radius": a.opt.cursorborderradius,
          "border-radius": a.opt.cursorborderradius
        }), e.isieold && d.css("overflow", "hidden"), d.wborder = parseFloat(d.outerWidth() - d.innerWidth()), d.addClass("nicescroll-cursors"), a.cursorh = d, n = f(document.createElement("div")), n.attr("id", a.id + "-hr"), n.addClass("nicescroll-rails nicescroll-rails-hr"), n.height = Math.max(parseFloat(a.opt.cursorwidth), d.outerHeight()), n.css({
          height: n.height + "px",
          zIndex: a.zindex,
          background: a.opt.background
        }), n.append(d), n.visibility = !0, n.scrollable = !0, n.align = "top" == a.opt.railvalign ? 0 : 1, a.railh = n, a.railh.drag = !1);
        a.ispage ? (m.css({
          position: "fixed",
          top: 0,
          height: "100%"
        }), m.align ? m.css({
          right: 0
        }) : m.css({
          left: 0
        }), a.body.append(m), a.railh && (n.css({
          position: "fixed",
          left: 0,
          width: "100%"
        }), n.align ? n.css({
          bottom: 0
        }) : n.css({
          top: 0
        }), a.body.append(n))) : (a.ishwscroll ? ("static" == a.win.css("position") && a.css(a.win, {
          position: "relative"
        }), c = "HTML" == a.win[0].nodeName ? a.body : a.win, f(c).scrollTop(0).scrollLeft(0), a.zoom && (a.zoom.css({
          position: "absolute",
          top: 1,
          right: 0,
          "margin-right": m.width + 4
        }), c.append(a.zoom)), m.css({
          position: "absolute",
          top: 0
        }), m.align ? m.css({
          right: 0
        }) : m.css({
          left: 0
        }), c.append(m), n && (n.css({
          position: "absolute",
          left: 0,
          bottom: 0
        }), n.align ? n.css({
          bottom: 0
        }) : n.css({
          top: 0
        }), c.append(n))) : (a.isfixed = "fixed" == a.win.css("position"), c = a.isfixed ? "fixed" : "absolute", a.isfixed || (a.viewport = a.getViewport(a.win[0])), a.viewport && (a.body = a.viewport, 0 == /fixed|absolute/.test(a.viewport.css("position")) && a.css(a.viewport, {
          position: "relative"
        })), m.css({
          position: c
        }), a.zoom && a.zoom.css({
          position: c
        }), a.updateScrollBar(), a.body.append(m), a.zoom && a.body.append(a.zoom), a.railh && (n.css({
          position: c
        }), a.body.append(n))), e.isios && a.css(a.win, {
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
          "-webkit-touch-callout": "none"
        }), e.isie && a.opt.disableoutline && a.win.attr("hideFocus", "true"), e.iswebkit && a.opt.disableoutline && a.win.css("outline", "none"));
        !1 === a.opt.autohidemode ? (a.autohidedom = !1, a.rail.css({
          opacity: a.opt.cursoropacitymax
        }), a.railh && a.railh.css({
          opacity: a.opt.cursoropacitymax
        })) : !0 === a.opt.autohidemode || "leave" === a.opt.autohidemode ? (a.autohidedom = f().add(a.rail), e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursor)), a.railh && (a.autohidedom = a.autohidedom.add(a.railh)), a.railh && e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "scroll" == a.opt.autohidemode ? (a.autohidedom = f().add(a.rail), a.railh && (a.autohidedom = a.autohidedom.add(a.railh))) : "cursor" == a.opt.autohidemode ? (a.autohidedom = f().add(a.cursor), a.railh && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "hidden" == a.opt.autohidemode && (a.autohidedom = !1, a.hide(), a.railslocked = !1);
        if (e.isie9mobile) a.scrollmom = new M(a), a.onmangotouch = function () {
          var b = a.getScrollTop(),
              c = a.getScrollLeft();
          if (b == a.scrollmom.lastscrolly && c == a.scrollmom.lastscrollx) return !0;
          var g = b - a.mangotouch.sy,
              d = c - a.mangotouch.sx;

          if (0 != Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(g, 2)))) {
            var e = 0 > g ? -1 : 1,
                f = 0 > d ? -1 : 1,
                u = +new Date();
            a.mangotouch.lazy && clearTimeout(a.mangotouch.lazy);
            80 < u - a.mangotouch.tm || a.mangotouch.dry != e || a.mangotouch.drx != f ? (a.scrollmom.stop(), a.scrollmom.reset(c, b), a.mangotouch.sy = b, a.mangotouch.ly = b, a.mangotouch.sx = c, a.mangotouch.lx = c, a.mangotouch.dry = e, a.mangotouch.drx = f, a.mangotouch.tm = u) : (a.scrollmom.stop(), a.scrollmom.update(a.mangotouch.sx - d, a.mangotouch.sy - g), a.mangotouch.tm = u, g = Math.max(Math.abs(a.mangotouch.ly - b), Math.abs(a.mangotouch.lx - c)), a.mangotouch.ly = b, a.mangotouch.lx = c, 2 < g && (a.mangotouch.lazy = setTimeout(function () {
              a.mangotouch.lazy = !1;
              a.mangotouch.dry = 0;
              a.mangotouch.drx = 0;
              a.mangotouch.tm = 0;
              a.scrollmom.doMomentum(30);
            }, 100)));
          }
        }, m = a.getScrollTop(), n = a.getScrollLeft(), a.mangotouch = {
          sy: m,
          ly: m,
          dry: 0,
          sx: n,
          lx: n,
          drx: 0,
          lazy: !1,
          tm: 0
        }, a.bind(a.docscroll, "scroll", a.onmangotouch);else {
          if (e.cantouch || a.istouchcapable || a.opt.touchbehavior || e.hasmstouch) {
            a.scrollmom = new M(a);

            a.ontouchstart = function (b) {
              if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
              a.hasmoving = !1;

              if (!a.railslocked) {
                var c;
                if (e.hasmstouch) for (c = b.target ? b.target : !1; c;) {
                  var g = f(c).getNiceScroll();
                  if (0 < g.length && g[0].me == a.me) break;
                  if (0 < g.length) return !1;
                  if ("DIV" == c.nodeName && c.id == a.id) break;
                  c = c.parentNode ? c.parentNode : !1;
                }
                a.cancelScroll();
                if ((c = a.getTarget(b)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return a.stopPropagation(b);
                !("clientX" in b) && "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY);
                a.forcescreen && (g = b, b = {
                  original: b.original ? b.original : b
                }, b.clientX = g.screenX, b.clientY = g.screenY);
                a.rail.drag = {
                  x: b.clientX,
                  y: b.clientY,
                  sx: a.scroll.x,
                  sy: a.scroll.y,
                  st: a.getScrollTop(),
                  sl: a.getScrollLeft(),
                  pt: 2,
                  dl: !1
                };
                if (a.ispage || !a.opt.directionlockdeadzone) a.rail.drag.dl = "f";else {
                  var g = f(window).width(),
                      d = f(window).height(),
                      d = Math.max(0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - d),
                      g = Math.max(0, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - g);
                  a.rail.drag.ck = !a.rail.scrollable && a.railh.scrollable ? 0 < d ? "v" : !1 : a.rail.scrollable && !a.railh.scrollable ? 0 < g ? "h" : !1 : !1;
                  a.rail.drag.ck || (a.rail.drag.dl = "f");
                }
                a.opt.touchbehavior && a.isiframe && e.isie && (g = a.win.position(), a.rail.drag.x += g.left, a.rail.drag.y += g.top);
                a.hasmoving = !1;
                a.lastmouseup = !1;
                a.scrollmom.reset(b.clientX, b.clientY);

                if (!e.cantouch && !this.istouchcapable && !b.pointerType) {
                  if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !a.ispage && e.hasmousecapture && c.setCapture(), a.opt.touchbehavior ? (c.onclick && !c._onclick && (c._onclick = c.onclick, c.onclick = function (b) {
                    if (a.hasmoving) return !1;

                    c._onclick.call(this, b);
                  }), a.cancelEvent(b)) : a.stopPropagation(b);
                  /SUBMIT|CANCEL|BUTTON/i.test(f(c).attr("type")) && (pc = {
                    tg: c,
                    click: !1
                  }, a.preventclick = pc);
                }
              }
            };

            a.ontouchend = function (b) {
              if (!a.rail.drag) return !0;

              if (2 == a.rail.drag.pt) {
                if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
                a.scrollmom.doMomentum();
                a.rail.drag = !1;
                if (a.hasmoving && (a.lastmouseup = !0, a.hideCursor(), e.hasmousecapture && document.releaseCapture(), !e.cantouch)) return a.cancelEvent(b);
              } else if (1 == a.rail.drag.pt) return a.onmouseup(b);
            };

            var q = a.opt.touchbehavior && a.isiframe && !e.hasmousecapture;

            a.ontouchmove = function (b, c) {
              if (!a.rail.drag || b.targetTouches && a.opt.preventmultitouchscrolling && 1 < b.targetTouches.length || b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;

              if (2 == a.rail.drag.pt) {
                if (e.cantouch && e.isios && void 0 === b.original) return !0;
                a.hasmoving = !0;
                a.preventclick && !a.preventclick.click && (a.preventclick.click = a.preventclick.tg.onclick || !1, a.preventclick.tg.onclick = a.onpreventclick);
                b = f.extend({
                  original: b
                }, b);
                "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY);

                if (a.forcescreen) {
                  var g = b;
                  b = {
                    original: b.original ? b.original : b
                  };
                  b.clientX = g.screenX;
                  b.clientY = g.screenY;
                }

                var d,
                    g = d = 0;
                q && !c && (d = a.win.position(), g = -d.left, d = -d.top);
                var u = b.clientY + d;
                d = u - a.rail.drag.y;
                var m = b.clientX + g,
                    k = m - a.rail.drag.x,
                    h = a.rail.drag.st - d;
                a.ishwscroll && a.opt.bouncescroll ? 0 > h ? h = Math.round(h / 2) : h > a.page.maxh && (h = a.page.maxh + Math.round((h - a.page.maxh) / 2)) : (0 > h && (u = h = 0), h > a.page.maxh && (h = a.page.maxh, u = 0));
                var l;
                a.railh && a.railh.scrollable && (l = a.isrtlmode ? k - a.rail.drag.sl : a.rail.drag.sl - k, a.ishwscroll && a.opt.bouncescroll ? 0 > l ? l = Math.round(l / 2) : l > a.page.maxw && (l = a.page.maxw + Math.round((l - a.page.maxw) / 2)) : (0 > l && (m = l = 0), l > a.page.maxw && (l = a.page.maxw, m = 0)));
                g = !1;
                if (a.rail.drag.dl) g = !0, "v" == a.rail.drag.dl ? l = a.rail.drag.sl : "h" == a.rail.drag.dl && (h = a.rail.drag.st);else {
                  d = Math.abs(d);
                  var k = Math.abs(k),
                      C = a.opt.directionlockdeadzone;

                  if ("v" == a.rail.drag.ck) {
                    if (d > C && k <= .3 * d) return a.rail.drag = !1, !0;
                    k > C && (a.rail.drag.dl = "f", f("body").scrollTop(f("body").scrollTop()));
                  } else if ("h" == a.rail.drag.ck) {
                    if (k > C && d <= .3 * k) return a.rail.drag = !1, !0;
                    d > C && (a.rail.drag.dl = "f", f("body").scrollLeft(f("body").scrollLeft()));
                  }
                }
                a.synched("touchmove", function () {
                  a.rail.drag && 2 == a.rail.drag.pt && (a.prepareTransition && a.prepareTransition(0), a.rail.scrollable && a.setScrollTop(h), a.scrollmom.update(m, u), a.railh && a.railh.scrollable ? (a.setScrollLeft(l), a.showCursor(h, l)) : a.showCursor(h), e.isie10 && document.selection.clear());
                });
                e.ischrome && a.istouchcapable && (g = !1);
                if (g) return a.cancelEvent(b);
              } else if (1 == a.rail.drag.pt) return a.onmousemove(b);
            };
          }

          a.onmousedown = function (b, c) {
            if (!a.rail.drag || 1 == a.rail.drag.pt) {
              if (a.railslocked) return a.cancelEvent(b);
              a.cancelScroll();
              a.rail.drag = {
                x: b.clientX,
                y: b.clientY,
                sx: a.scroll.x,
                sy: a.scroll.y,
                pt: 1,
                hr: !!c
              };
              var g = a.getTarget(b);
              !a.ispage && e.hasmousecapture && g.setCapture();
              a.isiframe && !e.hasmousecapture && (a.saved.csspointerevents = a.doc.css("pointer-events"), a.css(a.doc, {
                "pointer-events": "none"
              }));
              a.hasmoving = !1;
              return a.cancelEvent(b);
            }
          };

          a.onmouseup = function (b) {
            if (a.rail.drag) {
              if (1 != a.rail.drag.pt) return !0;
              e.hasmousecapture && document.releaseCapture();
              a.isiframe && !e.hasmousecapture && a.doc.css("pointer-events", a.saved.csspointerevents);
              a.rail.drag = !1;
              a.hasmoving && a.triggerScrollEnd();
              return a.cancelEvent(b);
            }
          };

          a.onmousemove = function (b) {
            if (a.rail.drag) {
              if (1 == a.rail.drag.pt) {
                if (e.ischrome && 0 == b.which) return a.onmouseup(b);
                a.cursorfreezed = !0;
                a.hasmoving = !0;

                if (a.rail.drag.hr) {
                  a.scroll.x = a.rail.drag.sx + (b.clientX - a.rail.drag.x);
                  0 > a.scroll.x && (a.scroll.x = 0);
                  var c = a.scrollvaluemaxw;
                  a.scroll.x > c && (a.scroll.x = c);
                } else a.scroll.y = a.rail.drag.sy + (b.clientY - a.rail.drag.y), 0 > a.scroll.y && (a.scroll.y = 0), c = a.scrollvaluemax, a.scroll.y > c && (a.scroll.y = c);

                a.synched("mousemove", function () {
                  a.rail.drag && 1 == a.rail.drag.pt && (a.showCursor(), a.rail.drag.hr ? a.hasreversehr ? a.doScrollLeft(a.scrollvaluemaxw - Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollLeft(Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollTop(Math.round(a.scroll.y * a.scrollratio.y), a.opt.cursordragspeed));
                });
                return a.cancelEvent(b);
              }
            } else a.checkarea = 0;
          };

          if (e.cantouch || a.opt.touchbehavior) a.onpreventclick = function (b) {
            if (a.preventclick) return a.preventclick.tg.onclick = a.preventclick.click, a.preventclick = !1, a.cancelEvent(b);
          }, a.bind(a.win, "mousedown", a.ontouchstart), a.onclick = e.isios ? !1 : function (b) {
            return a.lastmouseup ? (a.lastmouseup = !1, a.cancelEvent(b)) : !0;
          }, a.opt.grabcursorenabled && e.cursorgrabvalue && (a.css(a.ispage ? a.doc : a.win, {
            cursor: e.cursorgrabvalue
          }), a.css(a.rail, {
            cursor: e.cursorgrabvalue
          }));else {
            var r = function r(b) {
              if (a.selectiondrag) {
                if (b) {
                  var c = a.win.outerHeight();
                  b = b.pageY - a.selectiondrag.top;
                  0 < b && b < c && (b = 0);
                  b >= c && (b -= c);
                  a.selectiondrag.df = b;
                }

                0 != a.selectiondrag.df && (a.doScrollBy(2 * -Math.floor(a.selectiondrag.df / 6)), a.debounced("doselectionscroll", function () {
                  r();
                }, 50));
              }
            };

            a.hasTextSelected = "getSelection" in document ? function () {
              return 0 < document.getSelection().rangeCount;
            } : "selection" in document ? function () {
              return "None" != document.selection.type;
            } : function () {
              return !1;
            };

            a.onselectionstart = function (b) {
              a.ispage || (a.selectiondrag = a.win.offset());
            };

            a.onselectionend = function (b) {
              a.selectiondrag = !1;
            };

            a.onselectiondrag = function (b) {
              a.selectiondrag && a.hasTextSelected() && a.debounced("selectionscroll", function () {
                r(b);
              }, 250);
            };
          }
          e.hasw3ctouch ? (a.css(a.rail, {
            "touch-action": "none"
          }), a.css(a.cursor, {
            "touch-action": "none"
          }), a.bind(a.win, "pointerdown", a.ontouchstart), a.bind(document, "pointerup", a.ontouchend), a.bind(document, "pointermove", a.ontouchmove)) : e.hasmstouch ? (a.css(a.rail, {
            "-ms-touch-action": "none"
          }), a.css(a.cursor, {
            "-ms-touch-action": "none"
          }), a.bind(a.win, "MSPointerDown", a.ontouchstart), a.bind(document, "MSPointerUp", a.ontouchend), a.bind(document, "MSPointerMove", a.ontouchmove), a.bind(a.cursor, "MSGestureHold", function (a) {
            a.preventDefault();
          }), a.bind(a.cursor, "contextmenu", function (a) {
            a.preventDefault();
          })) : this.istouchcapable && (a.bind(a.win, "touchstart", a.ontouchstart), a.bind(document, "touchend", a.ontouchend), a.bind(document, "touchcancel", a.ontouchend), a.bind(document, "touchmove", a.ontouchmove));
          if (a.opt.cursordragontouch || !e.cantouch && !a.opt.touchbehavior) a.rail.css({
            cursor: "default"
          }), a.railh && a.railh.css({
            cursor: "default"
          }), a.jqbind(a.rail, "mouseenter", function () {
            if (!a.ispage && !a.win.is(":visible")) return !1;
            a.canshowonmouseevent && a.showCursor();
            a.rail.active = !0;
          }), a.jqbind(a.rail, "mouseleave", function () {
            a.rail.active = !1;
            a.rail.drag || a.hideCursor();
          }), a.opt.sensitiverail && (a.bind(a.rail, "click", function (b) {
            a.doRailClick(b, !1, !1);
          }), a.bind(a.rail, "dblclick", function (b) {
            a.doRailClick(b, !0, !1);
          }), a.bind(a.cursor, "click", function (b) {
            a.cancelEvent(b);
          }), a.bind(a.cursor, "dblclick", function (b) {
            a.cancelEvent(b);
          })), a.railh && (a.jqbind(a.railh, "mouseenter", function () {
            if (!a.ispage && !a.win.is(":visible")) return !1;
            a.canshowonmouseevent && a.showCursor();
            a.rail.active = !0;
          }), a.jqbind(a.railh, "mouseleave", function () {
            a.rail.active = !1;
            a.rail.drag || a.hideCursor();
          }), a.opt.sensitiverail && (a.bind(a.railh, "click", function (b) {
            a.doRailClick(b, !1, !0);
          }), a.bind(a.railh, "dblclick", function (b) {
            a.doRailClick(b, !0, !0);
          }), a.bind(a.cursorh, "click", function (b) {
            a.cancelEvent(b);
          }), a.bind(a.cursorh, "dblclick", function (b) {
            a.cancelEvent(b);
          })));
          e.cantouch || a.opt.touchbehavior ? (a.bind(e.hasmousecapture ? a.win : document, "mouseup", a.ontouchend), a.bind(document, "mousemove", a.ontouchmove), a.onclick && a.bind(document, "click", a.onclick), a.opt.cursordragontouch ? (a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mouseup", a.onmouseup), a.cursorh && a.bind(a.cursorh, "mousedown", function (b) {
            a.onmousedown(b, !0);
          }), a.cursorh && a.bind(a.cursorh, "mouseup", a.onmouseup)) : (a.bind(a.rail, "mousedown", function (a) {
            a.preventDefault();
          }), a.railh && a.bind(a.railh, "mousedown", function (a) {
            a.preventDefault();
          }))) : (a.bind(e.hasmousecapture ? a.win : document, "mouseup", a.onmouseup), a.bind(document, "mousemove", a.onmousemove), a.onclick && a.bind(document, "click", a.onclick), a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mouseup", a.onmouseup), a.railh && (a.bind(a.cursorh, "mousedown", function (b) {
            a.onmousedown(b, !0);
          }), a.bind(a.cursorh, "mouseup", a.onmouseup)), !a.ispage && a.opt.enablescrollonselection && (a.bind(a.win[0], "mousedown", a.onselectionstart), a.bind(document, "mouseup", a.onselectionend), a.bind(a.cursor, "mouseup", a.onselectionend), a.cursorh && a.bind(a.cursorh, "mouseup", a.onselectionend), a.bind(document, "mousemove", a.onselectiondrag)), a.zoom && (a.jqbind(a.zoom, "mouseenter", function () {
            a.canshowonmouseevent && a.showCursor();
            a.rail.active = !0;
          }), a.jqbind(a.zoom, "mouseleave", function () {
            a.rail.active = !1;
            a.rail.drag || a.hideCursor();
          })));
          a.opt.enablemousewheel && (a.isiframe || a.mousewheel(e.isie && a.ispage ? document : a.win, a.onmousewheel), a.mousewheel(a.rail, a.onmousewheel), a.railh && a.mousewheel(a.railh, a.onmousewheelhr));
          a.ispage || e.cantouch || /HTML|^BODY/.test(a.win[0].nodeName) || (a.win.attr("tabindex") || a.win.attr({
            tabindex: O++
          }), a.jqbind(a.win, "focus", function (b) {
            B = a.getTarget(b).id || !0;
            a.hasfocus = !0;
            a.canshowonmouseevent && a.noticeCursor();
          }), a.jqbind(a.win, "blur", function (b) {
            B = !1;
            a.hasfocus = !1;
          }), a.jqbind(a.win, "mouseenter", function (b) {
            F = a.getTarget(b).id || !0;
            a.hasmousefocus = !0;
            a.canshowonmouseevent && a.noticeCursor();
          }), a.jqbind(a.win, "mouseleave", function () {
            F = !1;
            a.hasmousefocus = !1;
            a.rail.drag || a.hideCursor();
          }));
        }

        a.onkeypress = function (b) {
          if (a.railslocked && 0 == a.page.maxh) return !0;
          b = b ? b : window.e;
          var c = a.getTarget(b);
          if (c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) && (!c.getAttribute("type") && !c.type || !/submit|button|cancel/i.tp) || f(c).attr("contenteditable")) return !0;

          if (a.hasfocus || a.hasmousefocus && !B || a.ispage && !B && !F) {
            c = b.keyCode;
            if (a.railslocked && 27 != c) return a.cancelEvent(b);
            var g = b.ctrlKey || !1,
                d = b.shiftKey || !1,
                e = !1;

            switch (c) {
              case 38:
              case 63233:
                a.doScrollBy(72);
                e = !0;
                break;

              case 40:
              case 63235:
                a.doScrollBy(-72);
                e = !0;
                break;

              case 37:
              case 63232:
                a.railh && (g ? a.doScrollLeft(0) : a.doScrollLeftBy(72), e = !0);
                break;

              case 39:
              case 63234:
                a.railh && (g ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-72), e = !0);
                break;

              case 33:
              case 63276:
                a.doScrollBy(a.view.h);
                e = !0;
                break;

              case 34:
              case 63277:
                a.doScrollBy(-a.view.h);
                e = !0;
                break;

              case 36:
              case 63273:
                a.railh && g ? a.doScrollPos(0, 0) : a.doScrollTo(0);
                e = !0;
                break;

              case 35:
              case 63275:
                a.railh && g ? a.doScrollPos(a.page.maxw, a.page.maxh) : a.doScrollTo(a.page.maxh);
                e = !0;
                break;

              case 32:
                a.opt.spacebarenabled && (d ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h), e = !0);
                break;

              case 27:
                a.zoomactive && (a.doZoom(), e = !0);
            }

            if (e) return a.cancelEvent(b);
          }
        };

        a.opt.enablekeyboard && a.bind(document, e.isopera && !e.isopera12 ? "keypress" : "keydown", a.onkeypress);
        a.bind(document, "keydown", function (b) {
          b.ctrlKey && (a.wheelprevented = !0);
        });
        a.bind(document, "keyup", function (b) {
          b.ctrlKey || (a.wheelprevented = !1);
        });
        a.bind(window, "blur", function (b) {
          a.wheelprevented = !1;
        });
        a.bind(window, "resize", a.lazyResize);
        a.bind(window, "orientationchange", a.lazyResize);
        a.bind(window, "load", a.lazyResize);

        if (e.ischrome && !a.ispage && !a.haswrapper) {
          var t = a.win.attr("style"),
              m = parseFloat(a.win.css("width")) + 1;
          a.win.css("width", m);
          a.synched("chromefix", function () {
            a.win.attr("style", t);
          });
        }

        a.onAttributeChange = function (b) {
          a.lazyResize(a.isieold ? 250 : 30);
        };

        a.isie11 || !1 === x || (a.observerbody = new x(function (b) {
          b.forEach(function (b) {
            if ("attributes" == b.type) return f("body").hasClass("modal-open") && f("body").hasClass("modal-dialog") && !f.contains(f(".modal-dialog")[0], a.doc[0]) ? a.hide() : a.show();
          });
          if (document.body.scrollHeight != a.page.maxh) return a.lazyResize(30);
        }), a.observerbody.observe(document.body, {
          childList: !0,
          subtree: !0,
          characterData: !1,
          attributes: !0,
          attributeFilter: ["class"]
        }));
        a.ispage || a.haswrapper || (!1 !== x ? (a.observer = new x(function (b) {
          b.forEach(a.onAttributeChange);
        }), a.observer.observe(a.win[0], {
          childList: !0,
          characterData: !1,
          attributes: !0,
          subtree: !1
        }), a.observerremover = new x(function (b) {
          b.forEach(function (b) {
            if (0 < b.removedNodes.length) for (var c in b.removedNodes) {
              if (a && b.removedNodes[c] == a.win[0]) return a.remove();
            }
          });
        }), a.observerremover.observe(a.win[0].parentNode, {
          childList: !0,
          characterData: !1,
          attributes: !1,
          subtree: !1
        })) : (a.bind(a.win, e.isie && !e.isie9 ? "propertychange" : "DOMAttrModified", a.onAttributeChange), e.isie9 && a.win[0].attachEvent("onpropertychange", a.onAttributeChange), a.bind(a.win, "DOMNodeRemoved", function (b) {
          b.target == a.win[0] && a.remove();
        })));
        !a.ispage && a.opt.boxzoom && a.bind(window, "resize", a.resizeZoom);
        a.istextarea && (a.bind(a.win, "keydown", a.lazyResize), a.bind(a.win, "mouseup", a.lazyResize));
        a.lazyResize(30);
      }

      if ("IFRAME" == this.doc[0].nodeName) {
        var N = function N() {
          a.iframexd = !1;
          var c;

          try {
            c = "contentDocument" in this ? this.contentDocument : this.contentWindow.document;
          } catch (g) {
            a.iframexd = !0, c = !1;
          }

          if (a.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
          a.forcescreen = !0;
          a.isiframe && (a.iframe = {
            doc: f(c),
            html: a.doc.contents().find("html")[0],
            body: a.doc.contents().find("body")[0]
          }, a.getContentSize = function () {
            return {
              w: Math.max(a.iframe.html.scrollWidth, a.iframe.body.scrollWidth),
              h: Math.max(a.iframe.html.scrollHeight, a.iframe.body.scrollHeight)
            };
          }, a.docscroll = f(a.iframe.body));

          if (!e.isios && a.opt.iframeautoresize && !a.isiframe) {
            a.win.scrollTop(0);
            a.doc.height("");
            var d = Math.max(c.getElementsByTagName("html")[0].scrollHeight, c.body.scrollHeight);
            a.doc.height(d);
          }

          a.lazyResize(30);
          e.isie7 && a.css(f(a.iframe.html), b);
          a.css(f(a.iframe.body), b);
          e.isios && a.haswrapper && a.css(f(c.body), {
            "-webkit-transform": "translate3d(0,0,0)"
          });
          "contentWindow" in this ? a.bind(this.contentWindow, "scroll", a.onscroll) : a.bind(c, "scroll", a.onscroll);
          a.opt.enablemousewheel && a.mousewheel(c, a.onmousewheel);
          a.opt.enablekeyboard && a.bind(c, e.isopera ? "keypress" : "keydown", a.onkeypress);
          if (e.cantouch || a.opt.touchbehavior) a.bind(c, "mousedown", a.ontouchstart), a.bind(c, "mousemove", function (b) {
            return a.ontouchmove(b, !0);
          }), a.opt.grabcursorenabled && e.cursorgrabvalue && a.css(f(c.body), {
            cursor: e.cursorgrabvalue
          });
          a.bind(c, "mouseup", a.ontouchend);
          a.zoom && (a.opt.dblclickzoom && a.bind(c, "dblclick", a.doZoom), a.ongesturezoom && a.bind(c, "gestureend", a.ongesturezoom));
        };

        this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
          N.call(a.doc[0], !1);
        }, 500);
        a.bind(this.doc, "load", N);
      }
    };

    this.showCursor = function (b, c) {
      a.cursortimeout && (clearTimeout(a.cursortimeout), a.cursortimeout = 0);

      if (a.rail) {
        a.autohidedom && (a.autohidedom.stop().css({
          opacity: a.opt.cursoropacitymax
        }), a.cursoractive = !0);
        a.rail.drag && 1 == a.rail.drag.pt || (void 0 !== b && !1 !== b && (a.scroll.y = Math.round(1 * b / a.scrollratio.y)), void 0 !== c && (a.scroll.x = Math.round(1 * c / a.scrollratio.x)));
        a.cursor.css({
          height: a.cursorheight,
          top: a.scroll.y
        });

        if (a.cursorh) {
          var d = a.hasreversehr ? a.scrollvaluemaxw - a.scroll.x : a.scroll.x;
          !a.rail.align && a.rail.visibility ? a.cursorh.css({
            width: a.cursorwidth,
            left: d + a.rail.width
          }) : a.cursorh.css({
            width: a.cursorwidth,
            left: d
          });
          a.cursoractive = !0;
        }

        a.zoom && a.zoom.stop().css({
          opacity: a.opt.cursoropacitymax
        });
      }
    };

    this.hideCursor = function (b) {
      a.cursortimeout || !a.rail || !a.autohidedom || a.hasmousefocus && "leave" == a.opt.autohidemode || (a.cursortimeout = setTimeout(function () {
        a.rail.active && a.showonmouseevent || (a.autohidedom.stop().animate({
          opacity: a.opt.cursoropacitymin
        }), a.zoom && a.zoom.stop().animate({
          opacity: a.opt.cursoropacitymin
        }), a.cursoractive = !1);
        a.cursortimeout = 0;
      }, b || a.opt.hidecursordelay));
    };

    this.noticeCursor = function (b, c, d) {
      a.showCursor(c, d);
      a.rail.active || a.hideCursor(b);
    };

    this.getContentSize = a.ispage ? function () {
      return {
        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      };
    } : a.haswrapper ? function () {
      return {
        w: a.doc.outerWidth() + parseInt(a.win.css("paddingLeft")) + parseInt(a.win.css("paddingRight")),
        h: a.doc.outerHeight() + parseInt(a.win.css("paddingTop")) + parseInt(a.win.css("paddingBottom"))
      };
    } : function () {
      return {
        w: a.docscroll[0].scrollWidth,
        h: a.docscroll[0].scrollHeight
      };
    };

    this.onResize = function (b, c) {
      if (!a || !a.win) return !1;

      if (!a.haswrapper && !a.ispage) {
        if ("none" == a.win.css("display")) return a.visibility && a.hideRail().hideRailHr(), !1;
        a.hidden || a.visibility || a.showRail().showRailHr();
      }

      var d = a.page.maxh,
          e = a.page.maxw,
          f = a.view.h,
          k = a.view.w;
      a.view = {
        w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth),
        h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight)
      };
      a.page = c ? c : a.getContentSize();
      a.page.maxh = Math.max(0, a.page.h - a.view.h);
      a.page.maxw = Math.max(0, a.page.w - a.view.w);

      if (a.page.maxh == d && a.page.maxw == e && a.view.w == k && a.view.h == f) {
        if (a.ispage) return a;
        d = a.win.offset();
        if (a.lastposition && (e = a.lastposition, e.top == d.top && e.left == d.left)) return a;
        a.lastposition = d;
      }

      0 == a.page.maxh ? (a.hideRail(), a.scrollvaluemax = 0, a.scroll.y = 0, a.scrollratio.y = 0, a.cursorheight = 0, a.setScrollTop(0), a.rail && (a.rail.scrollable = !1)) : (a.page.maxh -= a.opt.railpadding.top + a.opt.railpadding.bottom, a.rail.scrollable = !0);
      0 == a.page.maxw ? (a.hideRailHr(), a.scrollvaluemaxw = 0, a.scroll.x = 0, a.scrollratio.x = 0, a.cursorwidth = 0, a.setScrollLeft(0), a.railh && (a.railh.scrollable = !1)) : (a.page.maxw -= a.opt.railpadding.left + a.opt.railpadding.right, a.railh && (a.railh.scrollable = a.opt.horizrailenabled));
      a.railslocked = a.locked || 0 == a.page.maxh && 0 == a.page.maxw;
      if (a.railslocked) return a.ispage || a.updateScrollBar(a.view), !1;
      a.hidden || a.visibility ? !a.railh || a.hidden || a.railh.visibility || a.showRailHr() : a.showRail().showRailHr();
      a.istextarea && a.win.css("resize") && "none" != a.win.css("resize") && (a.view.h -= 20);
      a.cursorheight = Math.min(a.view.h, Math.round(a.view.h / a.page.h * a.view.h));
      a.cursorheight = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorheight);
      a.cursorwidth = Math.min(a.view.w, Math.round(a.view.w / a.page.w * a.view.w));
      a.cursorwidth = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorwidth);
      a.scrollvaluemax = a.view.h - a.cursorheight - a.cursor.hborder - (a.opt.railpadding.top + a.opt.railpadding.bottom);
      a.railh && (a.railh.width = 0 < a.page.maxh ? a.view.w - a.rail.width : a.view.w, a.scrollvaluemaxw = a.railh.width - a.cursorwidth - a.cursorh.wborder - (a.opt.railpadding.left + a.opt.railpadding.right));
      a.ispage || a.updateScrollBar(a.view);
      a.scrollratio = {
        x: a.page.maxw / a.scrollvaluemaxw,
        y: a.page.maxh / a.scrollvaluemax
      };
      a.getScrollTop() > a.page.maxh ? a.doScrollTop(a.page.maxh) : (a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y)), a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)), a.cursoractive && a.noticeCursor());
      a.scroll.y && 0 == a.getScrollTop() && a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
      return a;
    };

    this.resize = a.onResize;
    this.hlazyresize = 0;

    this.lazyResize = function (b) {
      a.haswrapper || a.hide();
      a.hlazyresize && clearTimeout(a.hlazyresize);
      a.hlazyresize = setTimeout(function () {
        a && a.show().resize();
      }, 240);
      return a;
    };

    this.jqbind = function (b, c, d) {
      a.events.push({
        e: b,
        n: c,
        f: d,
        q: !0
      });
      f(b).bind(c, d);
    };

    this.mousewheel = function (b, c, d) {
      b = "jquery" in b ? b[0] : b;
      if ("onwheel" in document.createElement("div")) a._bind(b, "wheel", c, d || !1);else {
        var e = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        q(b, e, c, d || !1);
        "DOMMouseScroll" == e && q(b, "MozMousePixelScroll", c, d || !1);
      }
    };

    e.haseventlistener ? (this.bind = function (b, c, d, e) {
      a._bind("jquery" in b ? b[0] : b, c, d, e || !1);
    }, this._bind = function (b, c, d, e) {
      a.events.push({
        e: b,
        n: c,
        f: d,
        b: e,
        q: !1
      });
      b.addEventListener(c, d, e || !1);
    }, this.cancelEvent = function (a) {
      if (!a) return !1;
      a = a.original ? a.original : a;
      a.cancelable && a.preventDefault();
      a.stopPropagation();
      a.preventManipulation && a.preventManipulation();
      return !1;
    }, this.stopPropagation = function (a) {
      if (!a) return !1;
      a = a.original ? a.original : a;
      a.stopPropagation();
      return !1;
    }, this._unbind = function (a, c, d, e) {
      a.removeEventListener(c, d, e);
    }) : (this.bind = function (b, c, d, e) {
      var f = "jquery" in b ? b[0] : b;

      a._bind(f, c, function (b) {
        (b = b || window.event || !1) && b.srcElement && (b.target = b.srcElement);
        "pageY" in b || (b.pageX = b.clientX + document.documentElement.scrollLeft, b.pageY = b.clientY + document.documentElement.scrollTop);
        return !1 === d.call(f, b) || !1 === e ? a.cancelEvent(b) : !0;
      });
    }, this._bind = function (b, c, d, e) {
      a.events.push({
        e: b,
        n: c,
        f: d,
        b: e,
        q: !1
      });
      b.attachEvent ? b.attachEvent("on" + c, d) : b["on" + c] = d;
    }, this.cancelEvent = function (a) {
      a = window.event || !1;
      if (!a) return !1;
      a.cancelBubble = !0;
      a.cancel = !0;
      return a.returnValue = !1;
    }, this.stopPropagation = function (a) {
      a = window.event || !1;
      if (!a) return !1;
      a.cancelBubble = !0;
      return !1;
    }, this._unbind = function (a, c, d, e) {
      a.detachEvent ? a.detachEvent("on" + c, d) : a["on" + c] = !1;
    });

    this.unbindAll = function () {
      for (var b = 0; b < a.events.length; b++) {
        var c = a.events[b];
        c.q ? c.e.unbind(c.n, c.f) : a._unbind(c.e, c.n, c.f, c.b);
      }
    };

    this.showRail = function () {
      0 == a.page.maxh || !a.ispage && "none" == a.win.css("display") || (a.visibility = !0, a.rail.visibility = !0, a.rail.css("display", "block"));
      return a;
    };

    this.showRailHr = function () {
      if (!a.railh) return a;
      0 == a.page.maxw || !a.ispage && "none" == a.win.css("display") || (a.railh.visibility = !0, a.railh.css("display", "block"));
      return a;
    };

    this.hideRail = function () {
      a.visibility = !1;
      a.rail.visibility = !1;
      a.rail.css("display", "none");
      return a;
    };

    this.hideRailHr = function () {
      if (!a.railh) return a;
      a.railh.visibility = !1;
      a.railh.css("display", "none");
      return a;
    };

    this.show = function () {
      a.hidden = !1;
      a.railslocked = !1;
      return a.showRail().showRailHr();
    };

    this.hide = function () {
      a.hidden = !0;
      a.railslocked = !0;
      return a.hideRail().hideRailHr();
    };

    this.toggle = function () {
      return a.hidden ? a.show() : a.hide();
    };

    this.remove = function () {
      a.stop();
      a.cursortimeout && clearTimeout(a.cursortimeout);

      for (var b in a.delaylist) {
        a.delaylist[b] && w(a.delaylist[b].h);
      }

      a.doZoomOut();
      a.unbindAll();
      e.isie9 && a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
      !1 !== a.observer && a.observer.disconnect();
      !1 !== a.observerremover && a.observerremover.disconnect();
      !1 !== a.observerbody && a.observerbody.disconnect();
      a.events = null;
      a.cursor && a.cursor.remove();
      a.cursorh && a.cursorh.remove();
      a.rail && a.rail.remove();
      a.railh && a.railh.remove();
      a.zoom && a.zoom.remove();

      for (b = 0; b < a.saved.css.length; b++) {
        var c = a.saved.css[b];
        c[0].css(c[1], void 0 === c[2] ? "" : c[2]);
      }

      a.saved = !1;
      a.me.data("__nicescroll", "");
      var d = f.nicescroll;
      d.each(function (b) {
        if (this && this.id === a.id) {
          delete d[b];

          for (var c = ++b; c < d.length; c++, b++) {
            d[b] = d[c];
          }

          d.length--;
          d.length && delete d[d.length];
        }
      });

      for (var k in a) {
        a[k] = null, delete a[k];
      }

      a = null;
    };

    this.scrollstart = function (b) {
      this.onscrollstart = b;
      return a;
    };

    this.scrollend = function (b) {
      this.onscrollend = b;
      return a;
    };

    this.scrollcancel = function (b) {
      this.onscrollcancel = b;
      return a;
    };

    this.zoomin = function (b) {
      this.onzoomin = b;
      return a;
    };

    this.zoomout = function (b) {
      this.onzoomout = b;
      return a;
    };

    this.isScrollable = function (a) {
      a = a.target ? a.target : a;
      if ("OPTION" == a.nodeName) return !0;

      for (; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
        var c = f(a),
            c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
        if (/scroll|auto/.test(c)) return a.clientHeight != a.scrollHeight;
        a = a.parentNode ? a.parentNode : !1;
      }

      return !1;
    };

    this.getViewport = function (a) {
      for (a = a && a.parentNode ? a.parentNode : !1; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
        var c = f(a);
        if (/fixed|absolute/.test(c.css("position"))) return c;
        var d = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
        if (/scroll|auto/.test(d) && a.clientHeight != a.scrollHeight || 0 < c.getNiceScroll().length) return c;
        a = a.parentNode ? a.parentNode : !1;
      }

      return !1;
    };

    this.triggerScrollEnd = function () {
      if (a.onscrollend) {
        var b = a.getScrollLeft(),
            c = a.getScrollTop();
        a.onscrollend.call(a, {
          type: "scrollend",
          current: {
            x: b,
            y: c
          },
          end: {
            x: b,
            y: c
          }
        });
      }
    };

    this.onmousewheel = function (b) {
      if (!a.wheelprevented) {
        if (a.railslocked) return a.debounced("checkunlock", a.resize, 250), !0;
        if (a.rail.drag) return a.cancelEvent(b);
        "auto" == a.opt.oneaxismousemode && 0 != b.deltaX && (a.opt.oneaxismousemode = !1);
        if (a.opt.oneaxismousemode && 0 == b.deltaX && !a.rail.scrollable) return a.railh && a.railh.scrollable ? a.onmousewheelhr(b) : !0;
        var c = +new Date(),
            d = !1;
        a.opt.preservenativescrolling && a.checkarea + 600 < c && (a.nativescrollingarea = a.isScrollable(b), d = !0);
        a.checkarea = c;
        if (a.nativescrollingarea) return !0;
        if (b = t(b, !1, d)) a.checkarea = 0;
        return b;
      }
    };

    this.onmousewheelhr = function (b) {
      if (!a.wheelprevented) {
        if (a.railslocked || !a.railh.scrollable) return !0;
        if (a.rail.drag) return a.cancelEvent(b);
        var c = +new Date(),
            d = !1;
        a.opt.preservenativescrolling && a.checkarea + 600 < c && (a.nativescrollingarea = a.isScrollable(b), d = !0);
        a.checkarea = c;
        return a.nativescrollingarea ? !0 : a.railslocked ? a.cancelEvent(b) : t(b, !0, d);
      }
    };

    this.stop = function () {
      a.cancelScroll();
      a.scrollmon && a.scrollmon.stop();
      a.cursorfreezed = !1;
      a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
      a.noticeCursor();
      return a;
    };

    this.getTransitionSpeed = function (b) {
      b = Math.min(Math.round(10 * a.opt.scrollspeed), Math.round(b / 20 * a.opt.scrollspeed));
      return 20 < b ? b : 0;
    };

    a.opt.smoothscroll ? a.ishwscroll && e.hastransition && a.opt.usetransition && a.opt.smoothscroll ? (this.prepareTransition = function (b, c) {
      var d = c ? 20 < b ? b : 0 : a.getTransitionSpeed(b),
          f = d ? e.prefixstyle + "transform " + d + "ms ease-out" : "";
      a.lasttransitionstyle && a.lasttransitionstyle == f || (a.lasttransitionstyle = f, a.doc.css(e.transitionstyle, f));
      return d;
    }, this.doScrollLeft = function (b, c) {
      var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
      a.doScrollPos(b, d, c);
    }, this.doScrollTop = function (b, c) {
      var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
      a.doScrollPos(d, b, c);
    }, this.doScrollPos = function (b, c, d) {
      var f = a.getScrollTop(),
          k = a.getScrollLeft();
      (0 > (a.newscrolly - f) * (c - f) || 0 > (a.newscrollx - k) * (b - k)) && a.cancelScroll();
      0 == a.opt.bouncescroll && (0 > c ? c = 0 : c > a.page.maxh && (c = a.page.maxh), 0 > b ? b = 0 : b > a.page.maxw && (b = a.page.maxw));
      if (a.scrollrunning && b == a.newscrollx && c == a.newscrolly) return !1;
      a.newscrolly = c;
      a.newscrollx = b;
      a.newscrollspeed = d || !1;
      if (a.timer) return !1;
      a.timer = setTimeout(function () {
        var d = a.getScrollTop(),
            f = a.getScrollLeft(),
            k = Math.round(Math.sqrt(Math.pow(b - f, 2) + Math.pow(c - d, 2))),
            k = a.newscrollspeed && 1 < a.newscrollspeed ? a.newscrollspeed : a.getTransitionSpeed(k);
        a.newscrollspeed && 1 >= a.newscrollspeed && (k *= a.newscrollspeed);
        a.prepareTransition(k, !0);
        a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
        0 < k && (!a.scrollrunning && a.onscrollstart && a.onscrollstart.call(a, {
          type: "scrollstart",
          current: {
            x: f,
            y: d
          },
          request: {
            x: b,
            y: c
          },
          end: {
            x: a.newscrollx,
            y: a.newscrolly
          },
          speed: k
        }), e.transitionend ? a.scrollendtrapped || (a.scrollendtrapped = !0, a.bind(a.doc, e.transitionend, a.onScrollTransitionEnd, !1)) : (a.scrollendtrapped && clearTimeout(a.scrollendtrapped), a.scrollendtrapped = setTimeout(a.onScrollTransitionEnd, k)), a.timerscroll = {
          bz: new D(d, a.newscrolly, k, 0, 0, .58, 1),
          bh: new D(f, a.newscrollx, k, 0, 0, .58, 1)
        }, a.cursorfreezed || (a.timerscroll.tm = setInterval(function () {
          a.showCursor(a.getScrollTop(), a.getScrollLeft());
        }, 60)));
        a.synched("doScroll-set", function () {
          a.timer = 0;
          a.scrollendtrapped && (a.scrollrunning = !0);
          a.setScrollTop(a.newscrolly);
          a.setScrollLeft(a.newscrollx);
          if (!a.scrollendtrapped) a.onScrollTransitionEnd();
        });
      }, 50);
    }, this.cancelScroll = function () {
      if (!a.scrollendtrapped) return !0;
      var b = a.getScrollTop(),
          c = a.getScrollLeft();
      a.scrollrunning = !1;
      e.transitionend || clearTimeout(e.transitionend);
      a.scrollendtrapped = !1;

      a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);

      a.prepareTransition(0);
      a.setScrollTop(b);
      a.railh && a.setScrollLeft(c);
      a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
      a.timerscroll = !1;
      a.cursorfreezed = !1;
      a.showCursor(b, c);
      return a;
    }, this.onScrollTransitionEnd = function () {
      a.scrollendtrapped && a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);
      a.scrollendtrapped = !1;
      a.prepareTransition(0);
      a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
      a.timerscroll = !1;
      var b = a.getScrollTop(),
          c = a.getScrollLeft();
      a.setScrollTop(b);
      a.railh && a.setScrollLeft(c);
      a.noticeCursor(!1, b, c);
      a.cursorfreezed = !1;
      0 > b ? b = 0 : b > a.page.maxh && (b = a.page.maxh);
      0 > c ? c = 0 : c > a.page.maxw && (c = a.page.maxw);
      if (b != a.newscrolly || c != a.newscrollx) return a.doScrollPos(c, b, a.opt.snapbackspeed);
      a.onscrollend && a.scrollrunning && a.triggerScrollEnd();
      a.scrollrunning = !1;
    }) : (this.doScrollLeft = function (b, c) {
      var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
      a.doScrollPos(b, d, c);
    }, this.doScrollTop = function (b, c) {
      var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
      a.doScrollPos(d, b, c);
    }, this.doScrollPos = function (b, c, d) {
      function e() {
        if (a.cancelAnimationFrame) return !0;
        a.scrollrunning = !0;
        if (p = 1 - p) return a.timer = v(e) || 1;
        var b = 0,
            c,
            d,
            f = d = a.getScrollTop();

        if (a.dst.ay) {
          f = a.bzscroll ? a.dst.py + a.bzscroll.getNow() * a.dst.ay : a.newscrolly;
          c = f - d;
          if (0 > c && f < a.newscrolly || 0 < c && f > a.newscrolly) f = a.newscrolly;
          a.setScrollTop(f);
          f == a.newscrolly && (b = 1);
        } else b = 1;

        d = c = a.getScrollLeft();

        if (a.dst.ax) {
          d = a.bzscroll ? a.dst.px + a.bzscroll.getNow() * a.dst.ax : a.newscrollx;
          c = d - c;
          if (0 > c && d < a.newscrollx || 0 < c && d > a.newscrollx) d = a.newscrollx;
          a.setScrollLeft(d);
          d == a.newscrollx && (b += 1);
        } else b += 1;

        2 == b ? (a.timer = 0, a.cursorfreezed = !1, a.bzscroll = !1, a.scrollrunning = !1, 0 > f ? f = 0 : f > a.page.maxh && (f = Math.max(0, a.page.maxh)), 0 > d ? d = 0 : d > a.page.maxw && (d = a.page.maxw), d != a.newscrollx || f != a.newscrolly ? a.doScrollPos(d, f) : a.onscrollend && a.triggerScrollEnd()) : a.timer = v(e) || 1;
      }

      c = void 0 === c || !1 === c ? a.getScrollTop(!0) : c;
      if (a.timer && a.newscrolly == c && a.newscrollx == b) return !0;
      a.timer && w(a.timer);
      a.timer = 0;
      var f = a.getScrollTop(),
          k = a.getScrollLeft();
      (0 > (a.newscrolly - f) * (c - f) || 0 > (a.newscrollx - k) * (b - k)) && a.cancelScroll();
      a.newscrolly = c;
      a.newscrollx = b;
      a.bouncescroll && a.rail.visibility || (0 > a.newscrolly ? a.newscrolly = 0 : a.newscrolly > a.page.maxh && (a.newscrolly = a.page.maxh));
      a.bouncescroll && a.railh.visibility || (0 > a.newscrollx ? a.newscrollx = 0 : a.newscrollx > a.page.maxw && (a.newscrollx = a.page.maxw));
      a.dst = {};
      a.dst.x = b - k;
      a.dst.y = c - f;
      a.dst.px = k;
      a.dst.py = f;
      var h = Math.round(Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2)));
      a.dst.ax = a.dst.x / h;
      a.dst.ay = a.dst.y / h;
      var l = 0,
          n = h;
      0 == a.dst.x ? (l = f, n = c, a.dst.ay = 1, a.dst.py = 0) : 0 == a.dst.y && (l = k, n = b, a.dst.ax = 1, a.dst.px = 0);
      h = a.getTransitionSpeed(h);
      d && 1 >= d && (h *= d);
      a.bzscroll = 0 < h ? a.bzscroll ? a.bzscroll.update(n, h) : new D(l, n, h, 0, 1, 0, 1) : !1;

      if (!a.timer) {
        (f == a.page.maxh && c >= a.page.maxh || k == a.page.maxw && b >= a.page.maxw) && a.checkContentSize();
        var p = 1;
        a.cancelAnimationFrame = !1;
        a.timer = 1;
        a.onscrollstart && !a.scrollrunning && a.onscrollstart.call(a, {
          type: "scrollstart",
          current: {
            x: k,
            y: f
          },
          request: {
            x: b,
            y: c
          },
          end: {
            x: a.newscrollx,
            y: a.newscrolly
          },
          speed: h
        });
        e();
        (f == a.page.maxh && c >= f || k == a.page.maxw && b >= k) && a.checkContentSize();
        a.noticeCursor();
      }
    }, this.cancelScroll = function () {
      a.timer && w(a.timer);
      a.timer = 0;
      a.bzscroll = !1;
      a.scrollrunning = !1;
      return a;
    }) : (this.doScrollLeft = function (b, c) {
      var d = a.getScrollTop();
      a.doScrollPos(b, d, c);
    }, this.doScrollTop = function (b, c) {
      var d = a.getScrollLeft();
      a.doScrollPos(d, b, c);
    }, this.doScrollPos = function (b, c, d) {
      var e = b > a.page.maxw ? a.page.maxw : b;
      0 > e && (e = 0);
      var f = c > a.page.maxh ? a.page.maxh : c;
      0 > f && (f = 0);
      a.synched("scroll", function () {
        a.setScrollTop(f);
        a.setScrollLeft(e);
      });
    }, this.cancelScroll = function () {});

    this.doScrollBy = function (b, c) {
      var d = 0,
          d = c ? Math.floor((a.scroll.y - b) * a.scrollratio.y) : (a.timer ? a.newscrolly : a.getScrollTop(!0)) - b;

      if (a.bouncescroll) {
        var e = Math.round(a.view.h / 2);
        d < -e ? d = -e : d > a.page.maxh + e && (d = a.page.maxh + e);
      }

      a.cursorfreezed = !1;
      e = a.getScrollTop(!0);
      if (0 > d && 0 >= e) return a.noticeCursor();
      if (d > a.page.maxh && e >= a.page.maxh) return a.checkContentSize(), a.noticeCursor();
      a.doScrollTop(d);
    };

    this.doScrollLeftBy = function (b, c) {
      var d = 0,
          d = c ? Math.floor((a.scroll.x - b) * a.scrollratio.x) : (a.timer ? a.newscrollx : a.getScrollLeft(!0)) - b;

      if (a.bouncescroll) {
        var e = Math.round(a.view.w / 2);
        d < -e ? d = -e : d > a.page.maxw + e && (d = a.page.maxw + e);
      }

      a.cursorfreezed = !1;
      e = a.getScrollLeft(!0);
      if (0 > d && 0 >= e || d > a.page.maxw && e >= a.page.maxw) return a.noticeCursor();
      a.doScrollLeft(d);
    };

    this.doScrollTo = function (b, c) {
      a.cursorfreezed = !1;
      a.doScrollTop(b);
    };

    this.checkContentSize = function () {
      var b = a.getContentSize();
      b.h == a.page.h && b.w == a.page.w || a.resize(!1, b);
    };

    a.onscroll = function (b) {
      a.rail.drag || a.cursorfreezed || a.synched("scroll", function () {
        a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
        a.railh && (a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)));
        a.noticeCursor();
      });
    };

    a.bind(a.docscroll, "scroll", a.onscroll);

    this.doZoomIn = function (b) {
      if (!a.zoomactive) {
        a.zoomactive = !0;
        a.zoomrestore = {
          style: {}
        };
        var c = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
            d = a.win[0].style,
            k;

        for (k in c) {
          var h = c[k];
          a.zoomrestore.style[h] = void 0 !== d[h] ? d[h] : "";
        }

        a.zoomrestore.style.width = a.win.css("width");
        a.zoomrestore.style.height = a.win.css("height");
        a.zoomrestore.padding = {
          w: a.win.outerWidth() - a.win.width(),
          h: a.win.outerHeight() - a.win.height()
        };
        e.isios4 && (a.zoomrestore.scrollTop = f(window).scrollTop(), f(window).scrollTop(0));
        a.win.css({
          position: e.isios4 ? "absolute" : "fixed",
          top: 0,
          left: 0,
          zIndex: A + 100,
          margin: 0
        });
        c = a.win.css("backgroundColor");
        ("" == c || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c)) && a.win.css("backgroundColor", "#fff");
        a.rail.css({
          zIndex: A + 101
        });
        a.zoom.css({
          zIndex: A + 102
        });
        a.zoom.css("backgroundPosition", "0px -18px");
        a.resizeZoom();
        a.onzoomin && a.onzoomin.call(a);
        return a.cancelEvent(b);
      }
    };

    this.doZoomOut = function (b) {
      if (a.zoomactive) return a.zoomactive = !1, a.win.css("margin", ""), a.win.css(a.zoomrestore.style), e.isios4 && f(window).scrollTop(a.zoomrestore.scrollTop), a.rail.css({
        "z-index": a.zindex
      }), a.zoom.css({
        "z-index": a.zindex
      }), a.zoomrestore = !1, a.zoom.css("backgroundPosition", "0px 0px"), a.onResize(), a.onzoomout && a.onzoomout.call(a), a.cancelEvent(b);
    };

    this.doZoom = function (b) {
      return a.zoomactive ? a.doZoomOut(b) : a.doZoomIn(b);
    };

    this.resizeZoom = function () {
      if (a.zoomactive) {
        var b = a.getScrollTop();
        a.win.css({
          width: f(window).width() - a.zoomrestore.padding.w + "px",
          height: f(window).height() - a.zoomrestore.padding.h + "px"
        });
        a.onResize();
        a.setScrollTop(Math.min(a.page.maxh, b));
      }
    };

    this.init();
    f.nicescroll.push(this);
  },
      M = function M(f) {
    var c = this;
    this.nc = f;
    this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
    this.snapy = this.snapx = !1;
    this.demuly = this.demulx = 0;
    this.lastscrolly = this.lastscrollx = -1;
    this.timer = this.chky = this.chkx = 0;

    this.time = function () {
      return +new Date();
    };

    this.reset = function (f, h) {
      c.stop();
      var d = c.time();
      c.steptime = 0;
      c.lasttime = d;
      c.speedx = 0;
      c.speedy = 0;
      c.lastx = f;
      c.lasty = h;
      c.lastscrollx = -1;
      c.lastscrolly = -1;
    };

    this.update = function (f, h) {
      var d = c.time();
      c.steptime = d - c.lasttime;
      c.lasttime = d;
      var d = h - c.lasty,
          q = f - c.lastx,
          t = c.nc.getScrollTop(),
          a = c.nc.getScrollLeft(),
          t = t + d,
          a = a + q;
      c.snapx = 0 > a || a > c.nc.page.maxw;
      c.snapy = 0 > t || t > c.nc.page.maxh;
      c.speedx = q;
      c.speedy = d;
      c.lastx = f;
      c.lasty = h;
    };

    this.stop = function () {
      c.nc.unsynched("domomentum2d");
      c.timer && clearTimeout(c.timer);
      c.timer = 0;
      c.lastscrollx = -1;
      c.lastscrolly = -1;
    };

    this.doSnapy = function (f, h) {
      var d = !1;
      0 > h ? (h = 0, d = !0) : h > c.nc.page.maxh && (h = c.nc.page.maxh, d = !0);
      0 > f ? (f = 0, d = !0) : f > c.nc.page.maxw && (f = c.nc.page.maxw, d = !0);
      d ? c.nc.doScrollPos(f, h, c.nc.opt.snapbackspeed) : c.nc.triggerScrollEnd();
    };

    this.doMomentum = function (f) {
      var h = c.time(),
          d = f ? h + f : c.lasttime;
      f = c.nc.getScrollLeft();
      var q = c.nc.getScrollTop(),
          t = c.nc.page.maxh,
          a = c.nc.page.maxw;
      c.speedx = 0 < a ? Math.min(60, c.speedx) : 0;
      c.speedy = 0 < t ? Math.min(60, c.speedy) : 0;
      d = d && 60 >= h - d;
      if (0 > q || q > t || 0 > f || f > a) d = !1;
      f = c.speedx && d ? c.speedx : !1;

      if (c.speedy && d && c.speedy || f) {
        var r = Math.max(16, c.steptime);
        50 < r && (f = r / 50, c.speedx *= f, c.speedy *= f, r = 50);
        c.demulxy = 0;
        c.lastscrollx = c.nc.getScrollLeft();
        c.chkx = c.lastscrollx;
        c.lastscrolly = c.nc.getScrollTop();
        c.chky = c.lastscrolly;

        var p = c.lastscrollx,
            e = c.lastscrolly,
            v = function v() {
          var d = 600 < c.time() - h ? .04 : .02;
          c.speedx && (p = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = p, 0 > p || p > a) && (d = .1);
          c.speedy && (e = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = e, 0 > e || e > t) && (d = .1);
          c.demulxy = Math.min(1, c.demulxy + d);
          c.nc.synched("domomentum2d", function () {
            c.speedx && (c.nc.getScrollLeft(), c.chkx = p, c.nc.setScrollLeft(p));
            c.speedy && (c.nc.getScrollTop(), c.chky = e, c.nc.setScrollTop(e));
            c.timer || (c.nc.hideCursor(), c.doSnapy(p, e));
          });
          1 > c.demulxy ? c.timer = setTimeout(v, r) : (c.stop(), c.nc.hideCursor(), c.doSnapy(p, e));
        };

        v();
      } else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop());
    };
  },
      y = f.fn.scrollTop;

  f.cssHooks.pageYOffset = {
    get: function get(h, c, k) {
      return (c = f.data(h, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : y.call(h);
    },
    set: function set(h, c) {
      var k = f.data(h, "__nicescroll") || !1;
      k && k.ishwscroll ? k.setScrollTop(parseInt(c)) : y.call(h, c);
      return this;
    }
  };

  f.fn.scrollTop = function (h) {
    if (void 0 === h) {
      var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
      return c && c.ishwscroll ? c.getScrollTop() : y.call(this);
    }

    return this.each(function () {
      var c = f.data(this, "__nicescroll") || !1;
      c && c.ishwscroll ? c.setScrollTop(parseInt(h)) : y.call(f(this), h);
    });
  };

  var z = f.fn.scrollLeft;
  f.cssHooks.pageXOffset = {
    get: function get(h, c, k) {
      return (c = f.data(h, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : z.call(h);
    },
    set: function set(h, c) {
      var k = f.data(h, "__nicescroll") || !1;
      k && k.ishwscroll ? k.setScrollLeft(parseInt(c)) : z.call(h, c);
      return this;
    }
  };

  f.fn.scrollLeft = function (h) {
    if (void 0 === h) {
      var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
      return c && c.ishwscroll ? c.getScrollLeft() : z.call(this);
    }

    return this.each(function () {
      var c = f.data(this, "__nicescroll") || !1;
      c && c.ishwscroll ? c.setScrollLeft(parseInt(h)) : z.call(f(this), h);
    });
  };

  var E = function E(h) {
    var c = this;
    this.length = 0;
    this.name = "nicescrollarray";

    this.each = function (d) {
      f.each(c, d);
      return c;
    };

    this.push = function (d) {
      c[c.length] = d;
      c.length++;
    };

    this.eq = function (d) {
      return c[d];
    };

    if (h) for (var k = 0; k < h.length; k++) {
      var l = f.data(h[k], "__nicescroll") || !1;
      l && (this[this.length] = l, this.length++);
    }
    return this;
  };

  (function (f, c, k) {
    for (var l = 0; l < c.length; l++) {
      k(f, c[l]);
    }
  })(E.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (f, c) {
    f[c] = function () {
      var f = arguments;
      return this.each(function () {
        this[c].apply(this, f);
      });
    };
  });

  f.fn.getNiceScroll = function (h) {
    return void 0 === h ? new E(this) : this[h] && f.data(this[h], "__nicescroll") || !1;
  };

  f.expr[":"].nicescroll = function (h) {
    return void 0 !== f.data(h, "__nicescroll");
  };

  f.fn.niceScroll = function (h, c) {
    void 0 !== c || "object" != _typeof(h) || "jquery" in h || (c = h, h = !1);
    c = f.extend({}, c);
    var k = new E();
    void 0 === c && (c = {});
    h && (c.doc = f(h), c.win = f(this));
    var l = !("doc" in c);
    l || "win" in c || (c.win = f(this));
    this.each(function () {
      var d = f(this).data("__nicescroll") || !1;
      d || (c.doc = l ? f(this) : c.doc, d = new S(c, f(this)), f(this).data("__nicescroll", d));
      k.push(d);
    });
    return 1 == k.length ? k[0] : k;
  };

  window.NiceScroll = {
    getjQuery: function getjQuery() {
      return f;
    }
  };
  f.nicescroll || (f.nicescroll = new E(), f.nicescroll.options = K);
});

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceHocVien; });
/* unused harmony export alertFail */
/* unused harmony export showloader */
/* unused harmony export hideloader */
/* harmony import */ var _DanhSachHocVien__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _const_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _const_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_const_data__WEBPACK_IMPORTED_MODULE_1__);


var dshv = new _DanhSachHocVien__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();

var ServiceHocVien = function ServiceHocVien() {
  this.LayDanhSachHocVien = function () {
    var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung";
    return $.ajax({
      type: "GET",
      url: urlAPI,
      async: false,
      xhrFields: {
        withCredentials: false
      }
    });
  };

  this.ThongTinNguoiDung = function (taikhoan) {
    var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/ThongTinNguoiDung?taikhoan=".concat(taikhoan);
    $.ajax({
      type: "GET",
      url: urlAPI,
      async: false,
      xhrFields: {
        withCredentials: false
      },
      success: function success(ketqua) {
        //load();
        var jsonHocVien = JSON.stringify(ketqua);
        localStorage.setItem('ThongTinNguoiDung', jsonHocVien);
      },
      error: function error(_error) {}
    });
  };

  this.TaiKhoan = function (taikhoan, matkhau) {
    var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam?taikhoan=".concat(taikhoan, "&matkhau=").concat(matkhau);
    $.ajax({
      type: "GET",
      url: urlAPI,
      xhrFields: {
        withCredentials: false
      },
      success: function success(ketqua) {},
      error: function error(_error2) {}
    });
  };

  this.ThemHocVien = function (hocvien) {
    showloader();
    var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung";
    $.ajax({
      type: "POST",
      url: urlAPI,
      dataType: "json",
      async: false,
      data: hocvien,
      xhrFields: {
        withCredentials: false
      },
      success: function success(ketqua) {
        setTimeout(function () {
          hideloader();
          swal({
            text: "Thêm học viên thành công!",
            icon: "success",
            button: "OK"
          }).then(function (value) {
            window.location.reload();
          });
          return true;
        }, 500);
      },
      error: function error(_error3) {
        setTimeout(function () {
          hideloader();
          swal({
            text: "Tài khoản đã được đăng ký!",
            icon: "error",
            button: "OK"
          }).then(function (value) {});
        }, 500);
      }
    });
  };

  this.DangKy = function (hocvien) {
    showloader();
    var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/DangKy";
    $.ajax({
      type: "POST",
      url: urlAPI,
      dataType: "json",
      data: hocvien,
      xhrFields: {
        withCredentials: false
      },
      success: function success(ketqua) {
        if (ketqua) {
          setTimeout(function () {
            hideloader();
            swal({
              text: "Đăng ký thành công!",
              icon: "success",
              button: "OK"
            }).then(function (value) {
              location.href = "/login";
            });
            return true;
          }, 500);
        } else {
          setTimeout(function () {
            hideloader();
            swal({
              text: "Tài khoản đã được sử dụng",
              icon: "error",
              button: "OK"
            }).then(function (value) {});
            return false;
          }, 500);
        }
      },
      error: function error(ketqua) {}
    });
  };

  this.XoaHocVien = function (id) {
    var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/".concat(id);
    $.ajax({
      type: "DELETE",
      url: urlAPI,
      xhrFields: {
        withCredentials: false
      },
      success: function success(ketqua) {
        swal({
          text: "Xóa học viên thành công!",
          icon: "success",
          button: "OK"
        }).then(function (value) {
          window.location.reload();
        });
        console.log(ketqua);
      },
      error: function error(ketqua) {
        alertFail("Học viên đã ghi danh không thể xóa");
      }
    });
  };

  this.CapNhatHocVien = function (hocvien) {
    showloader();
    var urlAPI = "http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung";
    $.ajax({
      type: "put",
      url: urlAPI,
      dataType: "json",
      data: hocvien,
      xhrFields: {
        withCredentials: false
      },
      success: function success(ketqua) {
        setTimeout(function () {
          hideloader();
          swal({
            text: "Cập nhật thành công",
            icon: "success",
            button: "OK"
          }).then(function (value) {
            var jsonPass = JSON.stringify(hocvien.MatKhau);
            localStorage.setItem('Pass', jsonPass);
            window.location.reload();
          });
        }, 500);
      },
      error: function error(ketqua) {}
    });
  };

  this.DangNhap = function (taikhoan, pass) {
    showloader();
    setTimeout(function () {
      hideloader();
      var dataUser = Object(_const_data__WEBPACK_IMPORTED_MODULE_1__["getData"])('dsnd');
      console.log(dataUser, taikhoan, pass);
      var user = dataUser.find(function (x) {
        return x.TaiKhoan == taikhoan.trim() && x.MatKhau.trim() == pass.trim();
      });
      var dataCheck = user ? true : false;
      var error = false;

      if (!dataCheck) {
        alertFail("Sai tài khoản hoặc mật khẩu!");
        error = true;
        return error;
      } else {
        swal({
          text: "Đăng nhập thành công",
          icon: "success",
          button: "OK"
        }).then(function (value) {
          if (user.MaLoaiNguoiDung == "HV") {
            location.href = "/course";
          } else {
            location.href = "/admin";
          }

          var jsonUser = JSON.stringify(user);
          localStorage.setItem('ThongTinDangNhap', jsonUser);
          var jsonPass = JSON.stringify(pass);
          localStorage.setItem('Pass', jsonPass);
          error = false;
          return error;
        });
      }
    }, 500);
  };
}; // Alert 


var alertFail = function alertFail(text) {
  swal(text, {
    icon: "error"
  });
}; //Loader 


var showloader = function showloader() {
  $(".preloader").css("display", "inline-block");
};

var hideloader = function hideloader() {
  $(".preloader").hide();
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ })

/******/ });