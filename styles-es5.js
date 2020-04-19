(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, ":root{\n\t--bodyBg : url('header-bg.jpg');\n\t--introBg : url('bg_3.jpg');\n\t--liBg : url('button_3.png');\n\t--mainBg : url('bg_7.png');\n\t--infoListBg : url('pattern.png');\n\t--selected : url('button_5.png');\n    --projectsBg : url('bg_7_3.png');\n\n    --spriteSheet : url('spritesheet.png');\n    --defaultImg : url('back.png');\n    --fileImg : url('fileIcon.png');    \n\n    --gridX : 150px;\n    --gridY: 200px;\n    --sizeX : 64px;\n    --sizeY : 64px;\n\n    --gameObjs : block; \n}\n/* You can add global styles to this file, and also import other style files */\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\nbody{\n    background-image: var(--bodyBg);\n    font-family: Arial, Helvetica, sans-serif;\n    line-height: 1.4;\n    color: rgb(235, 235, 235);\n\tfont-size: 14px;\n}\na{\n    color: #333;\n    text-decoration: none;\n}\n.container{\n    padding: 0 1rem;\n}\n.btn{\n    display: inline-block;\n    border: none;\n    background-color: #555;\n    padding: 7px 20px;\n    cursor: pointer;\n}\n.btn:hover{\n    background: #666;\n}\n.intro {\n\tbackground-image: var(--introBg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tbackground-origin: content-box;\n\tmin-height: 50px;\n\tline-height: 1.7em;\n\ttext-align: center;\n\tfont-family: cursive;\n\tfont-size: 100%;\n\t-webkit-text-decoration: orange;\n\t        text-decoration: orange;\n    color: white;\n    padding: 5px 0px ;\n}\n.intro h1{\n    padding-bottom: 5px;\n}\n.infoList {\n\tborder: 1px white solid;\n\tborder-radius: 15px;\n\tcolor: #f6efe8;\n\tmargin: 5px 10%;\n    background-image: var(--infoListBg);\n    padding: 10px 0px;\n}\n.blackBg{\n    background-image: var(--infoListBg);\n    color: #f6efe8;\n    border-radius: 15px;\n    border: 1px white solid;\n}\n.infoList ul {\n    text-align: center;\n    list-style: none;\n}\n.media {\n    text-align: center;\n}\n.media img {\n    width: 27px;\n    height: 27px;\n}\n.titleName {\n\tpadding-top: 15px;\n}\n.deleteBut{\n    background: #ff0000;\n    color: #fff;\n    border: none;\n    padding: 3px 7px;    \n    border-radius: 50%;\n    cursor: pointer;\n    float: right;\n}\n.inpuTextObj{  \n    display: inline;\n}\n.singleLine{\n    display: inline;\n    text-decoration: none;\n}\n.textToAdd{\n    background: rgb(77, 77, 77);\n    padding: 5px;\n    border-bottom: 1px #ccc dotted;\n}\n.inputForm{\n    display: flex;\n}\n.inputForm input[type='text']{\n    flex: 10;\n    padding: 5px;\n}\n.inputForm input[type='submit']{\n    flex: 2;\n    color:#f4f4f4;\n}\n.smallHeader{\n    background: rgb(12, 71, 148);\n    color: #f4f4f4;\n    text-align: center;\n    border-radius: 30px;\n     margin: 5px 10%;\n}\n.smallHeader a{\n    color: #fff;\n    text-decoration: none;\n}\n.expInputArea{\n    height: 150px;\n    width: 98%;\n    resize: none;\n}\n.expArea {\n\tborder-radius: 5px;\n\ttext-align: left;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n}\n@-webkit-keyframes fadeIn{\n\tfrom{\n\t\topacity: 0;\n\t\twidth: 25%;\n\t}\n\tto{\n \t\topacity: 1; \n\t\twidth: 100%;\n\t}\n}\n@keyframes fadeIn{\n\tfrom{\n\t\topacity: 0;\n\t\twidth: 25%;\n\t}\n\tto{\n \t\topacity: 1; \n\t\twidth: 100%;\n\t}\n}\n@-webkit-keyframes scaleUp{\n\tfrom{\n\t\ttransform: scale(1);\n\t}\n\tto{\n        transform: scale(1.2);\n\t}\n}\n@keyframes scaleUp{\n\tfrom{\n\t\ttransform: scale(1);\n\t}\n\tto{\n        transform: scale(1.2);\n\t}\n}\n@-webkit-keyframes fadeInText{\n\tfrom{\n\t\topacity: 0.1;\n\t}\n\tto{\n \t\topacity: 1; \n\t}\n}\n@keyframes fadeInText{\n\tfrom{\n\t\topacity: 0.1;\n\t}\n\tto{\n \t\topacity: 1; \n\t}\n}\n.h2Header{\n    padding-top: 10px;\n    text-align: center;\n\tcolor: beige;\n\tfont-size: 13px;\n}\n.hrDotted{\n\tborder: 1px dotted rgba(175, 175, 175, 0.534);\n}\n.bg-1 {\n\tbackground-color: #347dec36;\n\tborder-radius: 40px;\n}\n.toCenter{\n    text-align: center;\n    justify-content: center;\n   margin: auto;\n}\n.preset {\n    background-image: var(--spriteSheet);\n    background-repeat: no-repeat;\n    display: block;\n    background-color: transparent;\n    border: none;\n}\n.fileSize{\n    width: 64px;\n    height: 64px;\n}\n.animal_0 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -5px -5px;\n}\n.midScale{\n    transform: scale(.6);\n}\n.animal_1 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -79px -5px;\n}\n.animal_2 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -153px -5px;\n}\n.animal_3 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -227px -5px;\n}\n.animal_4 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -301px -5px;\n}\n.animal_5 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -5px -79px;\n}\n.animal_6 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -79px -79px;\n}\n.animal_7 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -153px -79px;\n}\n.animal_8 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -227px -79px;\n}\n.animal_9 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -301px -79px;\n}\n.food_0 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -5px -153px;\n}\n.food_1 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -79px -153px;\n}\n.food_2 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -153px -153px;\n}\n.food_3 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -227px -153px;\n}\n.food_4 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -301px -153px;\n}\n.food_5 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -5px -227px;\n}\n.food_6 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -79px -227px;\n}\n.food_7 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -153px -227px;\n}\n.food_8 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -227px -227px;\n}\n.food_9 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -301px -227px;\n}\n.monster_0 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -5px -301px;\n}\n.monster_1 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -79px -301px;\n}\n.monster_2 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -153px -301px;\n}\n.monster_3 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -227px -301px;\n}\n.monster_4 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -301px -301px;\n}\n.monster_5 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -375px -5px;\n}\n.monster_6 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -375px -79px;\n}\n.monster_7 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -375px -153px;\n}\n.monster_8 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -375px -227px;\n}\n.monster_9 {\n    width: var(--sizeX);\n    height: var(--sizeY);\n    background-position: -375px -301px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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Ijoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdHtcblx0LS1ib2R5QmcgOiB1cmwoXCJhc3NldHMvaW1nL2hlYWRlci1iZy5qcGdcIik7XG5cdC0taW50cm9CZyA6IHVybCgnYXNzZXRzL2ltZy9iZ18zLmpwZycpO1xuXHQtLWxpQmcgOiB1cmwoJ2Fzc2V0cy9pbWcvYnV0dG9uXzMucG5nJyk7XG5cdC0tbWFpbkJnIDogdXJsKCdhc3NldHMvaW1nL2JnXzcucG5nJyk7XG5cdC0taW5mb0xpc3RCZyA6IHVybCgnYXNzZXRzL2ltZy9wYXR0ZXJuLnBuZycpO1xuXHQtLXNlbGVjdGVkIDogdXJsKCdhc3NldHMvaW1nL2J1dHRvbl81LnBuZycpO1xuICAgIC0tcHJvamVjdHNCZyA6IHVybCgnYXNzZXRzL2ltZy9iZ183XzMucG5nJyk7XG5cbiAgICAtLXNwcml0ZVNoZWV0IDogdXJsKCdhc3NldHMvaW1nL3ByZXNldHMvc3ByaXRlc2hlZXQucG5nJyk7XG4gICAgLS1kZWZhdWx0SW1nIDogdXJsKCdhc3NldHMvaW1nL2JhY2sucG5nJyk7XG4gICAgLS1maWxlSW1nIDogdXJsKCdhc3NldHMvaW1nL2ZpbGVJY29uLnBuZycpOyAgICBcblxuICAgIC0tZ3JpZFggOiAxNTBweDtcbiAgICAtLWdyaWRZOiAyMDBweDtcbiAgICAtLXNpemVYIDogNjRweDtcbiAgICAtLXNpemVZIDogNjRweDtcblxuICAgIC0tZ2FtZU9ianMgOiBibG9jazsgXG59XG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5ib2R5e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJvZHlCZyk7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xuXHRmb250LXNpemU6IDE0cHg7XG59XG5he1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZzogMCAxcmVtO1xufVxuLmJ0bntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjNjY2O1xufVxuLmludHJvIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW50cm9CZyk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG5cdGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcblx0bWluLWhlaWdodDogNTBweDtcblx0bGluZS1oZWlnaHQ6IDEuN2VtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdHRleHQtZGVjb3JhdGlvbjogb3JhbmdlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDtcbn1cbi5pbnRybyBoMXtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmluZm9MaXN0IHtcblx0Ym9yZGVyOiAxcHggd2hpdGUgc29saWQ7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cdGNvbG9yOiAjZjZlZmU4O1xuXHRtYXJnaW46IDVweCAxMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW5mb0xpc3RCZyk7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG4uYmxhY2tCZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1pbmZvTGlzdEJnKTtcbiAgICBjb2xvcjogI2Y2ZWZlODtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xufVx0ICBcbi5pbmZvTGlzdCB1bCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubWVkaWEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cdCAgXG4ubWVkaWEgaW1nIHtcbiAgICB3aWR0aDogMjdweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG59XHRcbi50aXRsZU5hbWUge1xuXHRwYWRkaW5nLXRvcDogMTVweDtcbn1cdCBcbi5kZWxldGVCdXR7XG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogM3B4IDdweDsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uaW5wdVRleHRPYmp7ICBcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uc2luZ2xlTGluZXtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRleHRUb0FkZHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzcsIDc3LCA3Nyk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCAjY2NjIGRvdHRlZDtcbn1cbi5pbnB1dEZvcm17XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5pbnB1dEZvcm0gaW5wdXRbdHlwZT0ndGV4dCdde1xuICAgIGZsZXg6IDEwO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5pbnB1dEZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J117XG4gICAgZmxleDogMjtcbiAgICBjb2xvcjojZjRmNGY0O1xufVxuLnNtYWxsSGVhZGVye1xuICAgIGJhY2tncm91bmQ6IHJnYigxMiwgNzEsIDE0OCk7XG4gICAgY29sb3I6ICNmNGY0ZjQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgIG1hcmdpbjogNXB4IDEwJTtcbn1cbi5zbWFsbEhlYWRlciBhe1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5leHBJbnB1dEFyZWF7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogOTglO1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cbi5leHBBcmVhIHtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVx0XHQgXG5Aa2V5ZnJhbWVzIGZhZGVJbntcblx0ZnJvbXtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHdpZHRoOiAyNSU7XG5cdH1cblx0dG97XG4gXHRcdG9wYWNpdHk6IDE7IFxuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIHNjYWxlVXB7XG5cdGZyb217XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0fVxuXHR0b3tcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblRleHR7XG5cdGZyb217XG5cdFx0b3BhY2l0eTogMC4xO1xuXHR9XG5cdHRve1xuIFx0XHRvcGFjaXR5OiAxOyBcblx0fVxufVxuLmgySGVhZGVye1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IGJlaWdlO1xuXHRmb250LXNpemU6IDEzcHg7XG59IFxuLmhyRG90dGVke1xuXHRib3JkZXI6IDFweCBkb3R0ZWQgcmdiYSgxNzUsIDE3NSwgMTc1LCAwLjUzNCk7XG59XG4uYmctMSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzNDdkZWMzNjtcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcbn1cdFxuLnRvQ2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIG1hcmdpbjogYXV0bztcbn1cblxuLnByZXNldCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tc3ByaXRlU2hlZXQpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmZpbGVTaXple1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbn1cbi5hbmltYWxfMCB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNXB4IC01cHg7XG59XG4ubWlkU2NhbGV7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNik7XG59XG4uYW5pbWFsXzEge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTc5cHggLTVweDtcbn1cbi5hbmltYWxfMiB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTUzcHggLTVweDtcbn1cbi5hbmltYWxfMyB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI3cHggLTVweDtcbn1cbi5hbmltYWxfNCB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzAxcHggLTVweDtcbn1cbi5hbmltYWxfNSB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNXB4IC03OXB4O1xufVxuLmFuaW1hbF82IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC03OXB4IC03OXB4O1xufVxuLmFuaW1hbF83IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNTNweCAtNzlweDtcbn1cbi5hbmltYWxfOCB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI3cHggLTc5cHg7XG59XG4uYW5pbWFsXzkge1xuICAgIHdpZHRoOiB2YXIoLS1zaXplWCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplWSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMwMXB4IC03OXB4O1xufVxuXG4uZm9vZF8wIHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC01cHggLTE1M3B4O1xufVxuLmZvb2RfMSB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzlweCAtMTUzcHg7XG59XG4uZm9vZF8yIHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNTNweCAtMTUzcHg7XG59XG4uZm9vZF8zIHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjdweCAtMTUzcHg7XG59XG4uZm9vZF80IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMDFweCAtMTUzcHg7XG59XG4uZm9vZF81IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC01cHggLTIyN3B4O1xufVxuLmZvb2RfNiB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzlweCAtMjI3cHg7XG59XG4uZm9vZF83IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNTNweCAtMjI3cHg7XG59XG4uZm9vZF84IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjdweCAtMjI3cHg7XG59XG4uZm9vZF85IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMDFweCAtMjI3cHg7XG59XG4ubW9uc3Rlcl8wIHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC01cHggLTMwMXB4O1xufVxuLm1vbnN0ZXJfMSB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzlweCAtMzAxcHg7XG59XG4ubW9uc3Rlcl8yIHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNTNweCAtMzAxcHg7XG59XG4ubW9uc3Rlcl8zIHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjdweCAtMzAxcHg7XG59XG4ubW9uc3Rlcl80IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zMDFweCAtMzAxcHg7XG59XG4ubW9uc3Rlcl81IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zNzVweCAtNXB4O1xufVxuLm1vbnN0ZXJfNiB7XG4gICAgd2lkdGg6IHZhcigtLXNpemVYKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemVZKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzc1cHggLTc5cHg7XG59XG4ubW9uc3Rlcl83IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zNzVweCAtMTUzcHg7XG59XG4ubW9uc3Rlcl84IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zNzVweCAtMjI3cHg7XG59XG4ubW9uc3Rlcl85IHtcbiAgICB3aWR0aDogdmFyKC0tc2l6ZVgpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZVkpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zNzVweCAtMzAxcHg7XG59XG4iXX0= */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\HTML\Angular\Resume\Resume\src\styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map