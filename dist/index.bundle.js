/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* We need the "bdo:-moz-has-dir-attr" bit because "bdo" has lower
    specificity than the ":-moz-has-dir-attr" selector above. */
bdo,
bdo:-moz-has-dir-attr {
    unicode-bidi: isolate-override;
}

textarea:-moz-dir-attr-like-auto,
pre:-moz-dir-attr-like-auto {
    unicode-bidi: plaintext;
}

/* blocks */

article,
aside,
details,
div,
dt,
figcaption,
footer,
form,
header,
hgroup,
html,
main,
nav,
search,
section,
summary {
    display: block;
}

body {
    display: block;
    margin: 0
}

p,
dl,
multicol {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
}

dd {
    display: block;
    margin-inline-start: 40px;
}

blockquote,
figure {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
}

address {
    display: block;
    font-style: italic;
}

center {
    display: block;
    text-align: -moz-center;
}

h1 {
    display: block;
    font-size: 2em;
    font-weight: bold;
    margin-block-start: .67em;
    margin-block-end: .67em;
}

h2,
:is(article, aside, nav, section) h1 {
    display: block;
    font-size: 1.5em;
    font-weight: bold;
    margin-block-start: .83em;
    margin-block-end: .83em;
}

h3,
:is(article, aside, nav, section) :is(article, aside, nav, section) h1 {
    display: block;
    font-size: 1.17em;
    font-weight: bold;
    margin-block-start: 1em;
    margin-block-end: 1em;
}

h4,
:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {
    display: block;
    font-size: 1.00em;
    font-weight: bold;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
}

h5,
:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {
    display: block;
    font-size: 0.83em;
    font-weight: bold;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
}

h6,
:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {
    display: block;
    font-size: 0.67em;
    font-weight: bold;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
}

listing {
    display: block;
    font-family: -moz-fixed;
    font-size: medium;
    white-space: pre;
    margin-block-start: 1em;
    margin-block-end: 1em;
}

xmp,
pre,
plaintext {
    display: block;
    font-family: -moz-fixed;
    white-space: pre;
    margin-block-start: 1em;
    margin-block-end: 1em;
}

/* tables */

table {
    display: table;
    border-spacing: 2px;
    border-collapse: separate;
    /* XXXldb do we want this if we're border-collapse:collapse ? */
    box-sizing: border-box;
    text-indent: 0;
}

table[align="left"] {
    float: left;
}

table[align="right"] {
    float: right;
    text-align: start;
}


/* border collapse rules */

/* Set hidden if we have 'frame' or 'rules' attribute.
      Set it on all sides when we do so there's more consistency
      in what authors should expect */

/* Put this first so 'border' and 'frame' rules can override it. */
table[rules] {
    border-width: thin;
    border-style: hidden;
}

/* 'border' before 'frame' so 'frame' overrides
       A border with a given value should, of course, pass that value
       as the border-width in pixels -> attr mapping */

/* :-moz-table-border-nonzero is like [border]:not([border="0"]) except it
      also checks for other zero-like values according to HTML attribute
      parsing rules */
table:-moz-table-border-nonzero {
    border-width: thin;
    border-style: outset;
}

table[frame] {
    border: thin hidden;
}

/* specificity must beat table:-moz-table-border-nonzero rule above */
table[frame="void"] {
    border-style: hidden;
}

table[frame="above"] {
    border-style: outset hidden hidden hidden;
}

table[frame="below"] {
    border-style: hidden hidden outset hidden;
}

table[frame="lhs"] {
    border-style: hidden hidden hidden outset;
}

table[frame="rhs"] {
    border-style: hidden outset hidden hidden;
}

table[frame="hsides"] {
    border-style: outset hidden;
}

table[frame="vsides"] {
    border-style: hidden outset;
}

table[frame="box"],
table[frame="border"] {
    border-style: outset;
}


/* Internal Table Borders */

/* 'border' cell borders first */

table:-moz-table-border-nonzero>*>tr>td,
table:-moz-table-border-nonzero>*>tr>th,
table:-moz-table-border-nonzero>*>td,
table:-moz-table-border-nonzero>*>th,
table:-moz-table-border-nonzero>td,
table:-moz-table-border-nonzero>th {
    border-width: thin;
    border-style: inset;
}

/* collapse only if rules are really specified */
table[rules]:not([rules="none"], [rules=""]) {
    border-collapse: collapse;
}

/* only specified rules override 'border' settings
   (increased specificity to achieve this) */
table[rules]:not([rules=""])>tr>td,
table[rules]:not([rules=""])>*>tr>td,
table[rules]:not([rules=""])>tr>th,
table[rules]:not([rules=""])>*>tr>th,
table[rules]:not([rules=""])>td,
table[rules]:not([rules=""])>th {
    border-width: thin;
    border-style: none;
}


table[rules][rules="none"]>tr>td,
table[rules][rules="none"]>*>tr>td,
table[rules][rules="none"]>tr>th,
table[rules][rules="none"]>*>tr>th,
table[rules][rules="none"]>td,
table[rules][rules="none"]>th {
    border-width: thin;
    border-style: none;
}

table[rules][rules="all"]>tr>td,
table[rules][rules="all"]>*>tr>td,
table[rules][rules="all"]>tr>th,
table[rules][rules="all"]>*>tr>th,
table[rules][rules="all"]>td,
table[rules][rules="all"]>th {
    border-width: thin;
    border-style: solid;
}

table[rules][rules="rows"]>tr,
table[rules][rules="rows"]>*>tr {
    border-block-start-width: thin;
    border-block-end-width: thin;
    border-block-start-style: solid;
    border-block-end-style: solid;
}


table[rules][rules="cols"]>tr>td,
table[rules][rules="cols"]>*>tr>td,
table[rules][rules="cols"]>tr>th,
table[rules][rules="cols"]>*>tr>th {
    border-inline-start-width: thin;
    border-inline-end-width: thin;
    border-inline-start-style: solid;
    border-inline-end-style: solid;
}

table[rules][rules="groups"]>colgroup {
    border-inline-start-width: thin;
    border-inline-end-width: thin;
    border-inline-start-style: solid;
    border-inline-end-style: solid;
}

table[rules][rules="groups"]>tfoot,
table[rules][rules="groups"]>thead,
table[rules][rules="groups"]>tbody {
    border-block-start-width: thin;
    border-block-end-width: thin;
    border-block-start-style: solid;
    border-block-end-style: solid;
}


/* caption inherits from table not table-outer */
caption {
    display: table-caption;
    text-align: center;
}

table[align="center"]>caption {
    margin-inline-start: auto;
    margin-inline-end: auto;
}

table[align="center"]>caption[align="left"]:dir(ltr) {
    margin-inline-end: 0;
}

table[align="center"]>caption[align="left"]:dir(rtl) {
    margin-inline-start: 0;
}

table[align="center"]>caption[align="right"]:dir(ltr) {
    margin-inline-start: 0;
}

table[align="center"]>caption[align="right"]:dir(rtl) {
    margin-inline-end: 0;
}

tr {
    display: table-row;
    vertical-align: inherit;
}

col {
    display: table-column;
}

colgroup {
    display: table-column-group;
}

tbody {
    display: table-row-group;
    vertical-align: middle;
}

thead {
    display: table-header-group;
    vertical-align: middle;
}

tfoot {
    display: table-footer-group;
    vertical-align: middle;
}

/* for XHTML tables without tbody */
table>tr {
    vertical-align: middle;
}

td {
    display: table-cell;
    vertical-align: inherit;
    text-align: unset;
    padding: 1px;
}

th {
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    padding: 1px;
    text-align: -moz-center-or-inherit;
}

:is(tr, tbody, thead, tfoot, table)>form:-moz-is-html {
    /* Important: don't show these forms in HTML */
    display: none !important;
}

table[bordercolor]>tbody,
table[bordercolor]>thead,
table[bordercolor]>tfoot,
table[bordercolor]>col,
table[bordercolor]>colgroup,
table[bordercolor]>tr,
table[bordercolor]>*>tr,
table[bordercolor]>tr>td,
table[bordercolor]>*>tr>td,
table[bordercolor]>tr>th,
table[bordercolor]>*>tr>th {
    border-color: inherit;
}

/* inlines */

q:before {
    content: open-quote;
}

q:after {
    content: close-quote;
}

b,
strong {
    font-weight: bolder;
}

i,
cite,
em,
var,
dfn {
    font-style: italic;
}

tt,
code,
kbd,
samp {
    font-family: -moz-fixed;
}

u,
ins {
    text-decoration: underline;
}

s,
strike,
del {
    text-decoration: line-through;
}

big {
    font-size: larger;
}

small {
    font-size: smaller;
}

sub {
    vertical-align: sub;
    font-size: smaller;
}

sup {
    vertical-align: super;
    font-size: smaller;
}

nobr {
    white-space: nowrap;
}

mark {
    background: Mark;
    color: MarkText;
}

/* titles */
abbr[title],
acronym[title] {
    text-decoration: dotted underline;
}

/* lists */

ul,
menu,
dir {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 40px;
}

ul,
ol,
menu {
    counter-reset: list-item;
}

ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 40px;
}

li {
    display: list-item;
    text-align: match-parent;
}

/* nested lists have no top/bottom margins */
:is(ul, ol, dir, menu, dl) ul,
:is(ul, ol, dir, menu, dl) ol,
:is(ul, ol, dir, menu, dl) dir,
:is(ul, ol, dir, menu, dl) menu,
:is(ul, ol, dir, menu, dl) dl {
    margin-block-start: 0;
    margin-block-end: 0;
}

/* 2 deep unordered lists use a circle */
:is(ol, ul, menu, dir) ul,
:is(ol, ul, menu, dir) menu,
:is(ol, ul, menu, dir) dir {
    list-style-type: circle;
}

/* 3 deep (or more) unordered lists use a square */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {
    list-style-type: square;
}


/* leafs */

/* <hr> noshade and color attributes are handled completely by
  * HTMLHRElement::MapAttributesIntoRule.
  * https://html.spec.whatwg.org/#the-hr-element-2
  */
hr {
    color: gray;
    border-width: 1px;
    border-style: inset;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;

    /* FIXME: This is not really per spec */
    display: block;
}

hr[size="1"] {
    border-style: solid none none none;
}

/* Note that we only intend for the alt content to show up if the image is
  * broken. But non-broken images/inputs will have a replaced box, and thus we
  * won't we don't generate the pseudo-element anyways. This prevents
  * unnecessary reframing when images become broken / non-broken. */
input[type=image]::before,
img::before {
    content: -moz-alt-content !important;
    unicode-bidi: isolate;
}

img[usemap],
object[usemap] {
    color: blue;
}

frameset {
    display: block ! important;
    overflow: clip;
    position: static ! important;
    float: none ! important;
    border: none ! important;
}

frame {
    border-radius: 0 ! important;
}

iframe {
    border: 2px inset;
}

spacer {
    position: static ! important;
    float: none ! important;
}

canvas {
    user-select: none;
}

iframe:focus-visible,
body:focus-visible,
html:focus-visible {
    /* These elements historically don't show outlines when focused by default.
    * We could consider changing that if needed. */
    outline-style: none;
}

/* hidden elements: https://html.spec.whatwg.org/#hidden-elements
  *
  * Exceptions:
  *
  *  * area declaration needs to be !important, see below / bug 135040.  That's
  *    hacky and broken.
  *
  *  * [hidden] is implemented as a presentation attribute to avoid a global
  *    selector in a UA sheet.
  */
base,
basefont,
datalist,
head,
link,
meta,
noembed,
noframes,
param,
rp,
script,
style,
template,
title {
    display: none;
}

area {
    /* Don't give it frames other than its imageframe */
    display: none ! important;
}

iframe:fullscreen {
    /* iframes in full-screen mode don't show a border. */
    border: none !important;
    padding: unset !important;
}

/* Details and summary
  * https://html.spec.whatwg.org/#the-details-and-summary-elements
  *
  * Note that these rules need to be duplicated in details.css for the anonymous
  * summary, which wouldn't match otherwise.
  *
  * The spec here says something different, see
  * https://github.com/whatwg/html/issues/8610
  */
details>summary:first-of-type {
    display: list-item;
    counter-increment: list-item 0;
    list-style: disclosure-closed inside;
}

details[open]>summary:first-of-type {
    list-style-type: disclosure-open;
}

/* media elements */
video {
    object-fit: contain;
}

video>img:-moz-native-anonymous {
    /* Video poster images should render with the video element's "object-fit" &
      "object-position" properties */
    object-fit: inherit !important;
    object-position: inherit !important;
}

audio:not([controls]) {
    display: none !important;
}

audio[controls] {
    /* This ensures that intrinsic sizing can reliably shrinkwrap our
       controls (which are also always horizontal) and produce a
       reasonable intrinsic size from them. */
    writing-mode: horizontal-tb !important;
}

*|*::-moz-html-canvas-content {
    display: block !important;
    /* we want to be an absolute and fixed container */
    transform: translate(0) !important;
}

video>.caption-box {
    width: 100%;
    height: 100%;
    position: relative;
}

/**
  * The pseudo element won't inherit CSS styles from its direct parent, \`::cue\`
  * would actually inherit styles from video because it's video's pseudo element.
  * Therefore, we have to explicitly set some styles which are already defined
  * in its parent element in vtt.jsm.
  */
::cue {
    color: rgba(255, 255, 255, 1);
    white-space: pre-line;
    background-color: rgba(0, 0, 0, 0.8);
    font: 10px sans-serif;
    font-size: var(--cue-font-size);
    writing-mode: var(--cue-writing-mode, inherit);
    overflow-wrap: break-word;
    /* TODO : enable unicode-bidi, right now enable it would cause incorrect
             display direction, maybe related with bug 1558431. */
}

/* <dialog> element styles */

dialog {
    position: absolute;
    display: block;
    inset-inline-start: 0;
    inset-inline-end: 0;
    margin: auto;
    border-width: initial;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    padding: 1em;
    background-color: Canvas;
    color: CanvasText;
    width: -moz-fit-content;
    height: -moz-fit-content;
}

dialog:not([open]) {
    display: none;
}

dialog:modal {
    -moz-top-layer: top !important;
    position: fixed;
    overflow: auto;
    visibility: visible;
    inset-block-start: 0;
    inset-block-end: 0;
    max-width: calc(100% - 6px - 2em);
    max-height: calc(100% - 6px - 2em);
}

/* https://html.spec.whatwg.org/#flow-content-3 */
dialog::backdrop {
    background: rgba(0, 0, 0, 0.1);
}

marquee {
    inline-size: -moz-available;
    display: inline-block;
    vertical-align: text-bottom;
    text-align: start;
}

marquee:is([direction="up"], [direction="down"]) {
    block-size: 200px;
}

/* Ruby */

ruby {
    display: ruby;
}

rb {
    display: ruby-base;
    white-space: nowrap;
}

rt {
    display: ruby-text;
}

rtc {
    display: ruby-text-container;
}

rtc,
rt {
    white-space: nowrap;
    font-size: 50%;
    -moz-min-font-size-ratio: 50%;
    line-height: 1;
}

@media not (-moz-platform: windows) {

    rtc,
    rt {
        /* The widely-used Windows font Meiryo doesn't work fine with this
     * setting, so disable this on Windows. We should re-enable it once
     * Microsoft fixes this issue. See bug 1164279. */
        font-variant-east-asian: ruby;
    }
}

rtc,
rt {
    text-emphasis: none;
}

rtc:lang(zh),
rt:lang(zh) {
    ruby-align: center;
}

rtc:lang(zh-TW),
rt:lang(zh-TW) {
    font-size: 30%;
    /* bopomofo */
    -moz-min-font-size-ratio: 30%;
}

rtc>rt {
    font-size: unset;
}

ruby,
rb,
rt,
rtc {
    unicode-bidi: isolate;
}

/* Shadow DOM v1
  * https://drafts.csswg.org/css-scoping/#slots-in-shadow-tree */
slot {
    display: contents;
}

/* Un-invert images and videos for users using inverted colors.
  * "User agents must add the following rule to their UA style sheet"
  * https://www.w3.org/TR/mediaqueries-5/#inverted
  */
@media (inverted-colors) {

    img:not(picture > img),
    picture,
    video {
        filter: invert(100%);
    }
}

/* Hide noscript elements if scripting is enabled */
@media (scripting) {
    noscript {
        display: none !important;
    }
}

@media print {

    input,
    textarea,
    select,
    button,
    details {
        -moz-user-input: none !important;
        pointer-events: none !important;
    }
}

/* Popover UA style, https://html.spec.whatwg.org/#flow-content-3 */
/* stylelint-disable-next-line media-query-no-invalid */
@media (-moz-bool-pref: "dom.element.popover.enabled") {
    [popover]:not(:popover-open):not(dialog[open]) {
        display: none;
    }

    dialog:popover-open {
        display: block;
    }

    [popover] {
        position: fixed;
        inset: 0;
        width: fit-content;
        height: fit-content;
        margin: auto;
        border: solid;
        padding: 0.25em;
        overflow: auto;
        color: CanvasText;
        background-color: Canvas;
    }

    :popover-open {
        -moz-top-layer: top;
    }

    :popover-open::backdrop {
        position: fixed;
        inset: 0;
        pointer-events: none !important;
        background-color: transparent;
    }
}






body {
    background-color: bisque;


}

.headerPage {
    background-color: rgba(45, 41, 41, 0.107);
    height: 3rem;
    font-size: 2rem;
    padding: 0.8rem 0;
    text-align: center;

}


.container {
    padding: 0;
    height: 633px;
    background-color: blue;
}

/* 
.container::after {
    content: "";
    display: table;
    clear: both;
} */


.leftSection {
    width: 35%;
    min-height: 100%;
    background-color: brown;
    display: inline-block;
}

.rightSection {
    width: 65%;

    float: right;

    background-color: blueviolet;
}


.projects {
    margin: 5rem auto;
    width: 60%;
    text-align: center;
    background-color: darksalmon;
    padding: 5px 3px 15px 0;
    position: relative;
}


#buttonProjectForm {
    display: block;
    margin: 18px;
}

#labelProject {
    margin: 5px;
}

#inputProject {
    width: 80%;
    margin: 10px 0 5px 0;
}

.tasks {
    margin: 5rem auto;
    width: 70%;
    text-align: center;
    background-color: darksalmon;
    padding: 5px 0 15px 0;
    /* z-index: 1; */
}

.tasksUnit {
    background-color: darkkhaki;
}

.taskUnitImportant {
    background-color: goldenrod
}

.taskUnitUrgent {
    background-color: chartreuse;
}



.projectsUnit {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    place-items: center;

}

.buttonProjects,
.activeProject {
    grid-column: 2 / span 5;
    place-self: stretch;
    background-color: cyan;
    margin: 8px;
    padding: 8px;

}

.removeProjects {
    grid-column: 7 / 8;
    background-color: red;
    border-radius: 50%;
    display: inline-block;

}

.activeProject {
    background-color: greenyellow;
    color: white;
}

#listProjects {
    text-align: center;
}


.hideRemoveButton {
    display: none;
}


#startProjectButton {
    display: block;
}




#addProjectDiv {

    padding: 5px;
    background-color: rgb(151, 151, 222);
    display: none;
    position: absolute;
    left: 1rem;
    top: 1rem;
}

#editTaskDiv {
    display: none;
    position: absolute;
    left: 40%;
    top: 4.2rem;
    min-width: 380px;
    background-color: darkseagreen
}

#addTaskDiv {
    padding: 5px;
    background-color: yellow;
    display: none;

    position: absolute;
    left: 45%;
    top: 4rem;
    min-width: 400px;
}

#editTaskForm {
    margin: 8px;
}

#addTaskForm {
    background-color: yellow;
    margin: 8px;
}


#addProjectForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(202, 251, 254);
    color: green;
    text-align: center;
    margin: 8px;
    min-width: 400px;
}

.taskContainerFirst {
    display: flex;
    clear: right;
    flex-direction: column;
    background-color: cadetblue;
    padding: 5px;
    justify-content: space-between;

}




.taskContainerFirst>div {
    margin: 5px;

}

span {
    margin: 0 5px;
}

.addTask {
    float: right;
}

.labelPriority {
    /* display: ; */
    background-color: rgb(0, 0, 0);
    color: white;
}


label[for="newTask"] {
    display: block;
    color: black;
}

label[for="textAreaTask"] {
    padding: 0;
    display: block;
}

#dateDiv,
#priorityDiv,
#notesDiv {
    margin: 10px;
}

#priority {
    padding: 0;
    margin: 0;
}

.myNotes {
    max-width: 100%;
    background-color: rgb(240, 80, 255);
    padding: 0.6rem;
    margin: 5px;
    text-align: justify;
}

.taskSettings {
    margin: 1rem auto 0.5rem auto;
}

.taskSettings>button {
    margin: 5px;
}

.taskCompleted {
    text-decoration: line-through;
    background-color: crimson;
}

.taskCompleted button {
    background-color: crimson;
}

.taskCompleted .buttonEditTask {
    display: none;
}


/* .removeTask {
    background-color: red;
    color: white;
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* We need the \"bdo:-moz-has-dir-attr\" bit because \"bdo\" has lower\n    specificity than the \":-moz-has-dir-attr\" selector above. */\nbdo,\nbdo:-moz-has-dir-attr {\n    unicode-bidi: isolate-override;\n}\n\ntextarea:-moz-dir-attr-like-auto,\npre:-moz-dir-attr-like-auto {\n    unicode-bidi: plaintext;\n}\n\n/* blocks */\n\narticle,\naside,\ndetails,\ndiv,\ndt,\nfigcaption,\nfooter,\nform,\nheader,\nhgroup,\nhtml,\nmain,\nnav,\nsearch,\nsection,\nsummary {\n    display: block;\n}\n\nbody {\n    display: block;\n    margin: 0\n}\n\np,\ndl,\nmulticol {\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\ndd {\n    display: block;\n    margin-inline-start: 40px;\n}\n\nblockquote,\nfigure {\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 40px;\n    margin-inline-end: 40px;\n}\n\naddress {\n    display: block;\n    font-style: italic;\n}\n\ncenter {\n    display: block;\n    text-align: -moz-center;\n}\n\nh1 {\n    display: block;\n    font-size: 2em;\n    font-weight: bold;\n    margin-block-start: .67em;\n    margin-block-end: .67em;\n}\n\nh2,\n:is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-block-start: .83em;\n    margin-block-end: .83em;\n}\n\nh3,\n:is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.17em;\n    font-weight: bold;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\nh4,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.00em;\n    font-weight: bold;\n    margin-block-start: 1.33em;\n    margin-block-end: 1.33em;\n}\n\nh5,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 0.83em;\n    font-weight: bold;\n    margin-block-start: 1.67em;\n    margin-block-end: 1.67em;\n}\n\nh6,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 0.67em;\n    font-weight: bold;\n    margin-block-start: 2.33em;\n    margin-block-end: 2.33em;\n}\n\nlisting {\n    display: block;\n    font-family: -moz-fixed;\n    font-size: medium;\n    white-space: pre;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\nxmp,\npre,\nplaintext {\n    display: block;\n    font-family: -moz-fixed;\n    white-space: pre;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\n/* tables */\n\ntable {\n    display: table;\n    border-spacing: 2px;\n    border-collapse: separate;\n    /* XXXldb do we want this if we're border-collapse:collapse ? */\n    box-sizing: border-box;\n    text-indent: 0;\n}\n\ntable[align=\"left\"] {\n    float: left;\n}\n\ntable[align=\"right\"] {\n    float: right;\n    text-align: start;\n}\n\n\n/* border collapse rules */\n\n/* Set hidden if we have 'frame' or 'rules' attribute.\n      Set it on all sides when we do so there's more consistency\n      in what authors should expect */\n\n/* Put this first so 'border' and 'frame' rules can override it. */\ntable[rules] {\n    border-width: thin;\n    border-style: hidden;\n}\n\n/* 'border' before 'frame' so 'frame' overrides\n       A border with a given value should, of course, pass that value\n       as the border-width in pixels -> attr mapping */\n\n/* :-moz-table-border-nonzero is like [border]:not([border=\"0\"]) except it\n      also checks for other zero-like values according to HTML attribute\n      parsing rules */\ntable:-moz-table-border-nonzero {\n    border-width: thin;\n    border-style: outset;\n}\n\ntable[frame] {\n    border: thin hidden;\n}\n\n/* specificity must beat table:-moz-table-border-nonzero rule above */\ntable[frame=\"void\"] {\n    border-style: hidden;\n}\n\ntable[frame=\"above\"] {\n    border-style: outset hidden hidden hidden;\n}\n\ntable[frame=\"below\"] {\n    border-style: hidden hidden outset hidden;\n}\n\ntable[frame=\"lhs\"] {\n    border-style: hidden hidden hidden outset;\n}\n\ntable[frame=\"rhs\"] {\n    border-style: hidden outset hidden hidden;\n}\n\ntable[frame=\"hsides\"] {\n    border-style: outset hidden;\n}\n\ntable[frame=\"vsides\"] {\n    border-style: hidden outset;\n}\n\ntable[frame=\"box\"],\ntable[frame=\"border\"] {\n    border-style: outset;\n}\n\n\n/* Internal Table Borders */\n\n/* 'border' cell borders first */\n\ntable:-moz-table-border-nonzero>*>tr>td,\ntable:-moz-table-border-nonzero>*>tr>th,\ntable:-moz-table-border-nonzero>*>td,\ntable:-moz-table-border-nonzero>*>th,\ntable:-moz-table-border-nonzero>td,\ntable:-moz-table-border-nonzero>th {\n    border-width: thin;\n    border-style: inset;\n}\n\n/* collapse only if rules are really specified */\ntable[rules]:not([rules=\"none\"], [rules=\"\"]) {\n    border-collapse: collapse;\n}\n\n/* only specified rules override 'border' settings\n   (increased specificity to achieve this) */\ntable[rules]:not([rules=\"\"])>tr>td,\ntable[rules]:not([rules=\"\"])>*>tr>td,\ntable[rules]:not([rules=\"\"])>tr>th,\ntable[rules]:not([rules=\"\"])>*>tr>th,\ntable[rules]:not([rules=\"\"])>td,\ntable[rules]:not([rules=\"\"])>th {\n    border-width: thin;\n    border-style: none;\n}\n\n\ntable[rules][rules=\"none\"]>tr>td,\ntable[rules][rules=\"none\"]>*>tr>td,\ntable[rules][rules=\"none\"]>tr>th,\ntable[rules][rules=\"none\"]>*>tr>th,\ntable[rules][rules=\"none\"]>td,\ntable[rules][rules=\"none\"]>th {\n    border-width: thin;\n    border-style: none;\n}\n\ntable[rules][rules=\"all\"]>tr>td,\ntable[rules][rules=\"all\"]>*>tr>td,\ntable[rules][rules=\"all\"]>tr>th,\ntable[rules][rules=\"all\"]>*>tr>th,\ntable[rules][rules=\"all\"]>td,\ntable[rules][rules=\"all\"]>th {\n    border-width: thin;\n    border-style: solid;\n}\n\ntable[rules][rules=\"rows\"]>tr,\ntable[rules][rules=\"rows\"]>*>tr {\n    border-block-start-width: thin;\n    border-block-end-width: thin;\n    border-block-start-style: solid;\n    border-block-end-style: solid;\n}\n\n\ntable[rules][rules=\"cols\"]>tr>td,\ntable[rules][rules=\"cols\"]>*>tr>td,\ntable[rules][rules=\"cols\"]>tr>th,\ntable[rules][rules=\"cols\"]>*>tr>th {\n    border-inline-start-width: thin;\n    border-inline-end-width: thin;\n    border-inline-start-style: solid;\n    border-inline-end-style: solid;\n}\n\ntable[rules][rules=\"groups\"]>colgroup {\n    border-inline-start-width: thin;\n    border-inline-end-width: thin;\n    border-inline-start-style: solid;\n    border-inline-end-style: solid;\n}\n\ntable[rules][rules=\"groups\"]>tfoot,\ntable[rules][rules=\"groups\"]>thead,\ntable[rules][rules=\"groups\"]>tbody {\n    border-block-start-width: thin;\n    border-block-end-width: thin;\n    border-block-start-style: solid;\n    border-block-end-style: solid;\n}\n\n\n/* caption inherits from table not table-outer */\ncaption {\n    display: table-caption;\n    text-align: center;\n}\n\ntable[align=\"center\"]>caption {\n    margin-inline-start: auto;\n    margin-inline-end: auto;\n}\n\ntable[align=\"center\"]>caption[align=\"left\"]:dir(ltr) {\n    margin-inline-end: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"left\"]:dir(rtl) {\n    margin-inline-start: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"right\"]:dir(ltr) {\n    margin-inline-start: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"right\"]:dir(rtl) {\n    margin-inline-end: 0;\n}\n\ntr {\n    display: table-row;\n    vertical-align: inherit;\n}\n\ncol {\n    display: table-column;\n}\n\ncolgroup {\n    display: table-column-group;\n}\n\ntbody {\n    display: table-row-group;\n    vertical-align: middle;\n}\n\nthead {\n    display: table-header-group;\n    vertical-align: middle;\n}\n\ntfoot {\n    display: table-footer-group;\n    vertical-align: middle;\n}\n\n/* for XHTML tables without tbody */\ntable>tr {\n    vertical-align: middle;\n}\n\ntd {\n    display: table-cell;\n    vertical-align: inherit;\n    text-align: unset;\n    padding: 1px;\n}\n\nth {\n    display: table-cell;\n    vertical-align: inherit;\n    font-weight: bold;\n    padding: 1px;\n    text-align: -moz-center-or-inherit;\n}\n\n:is(tr, tbody, thead, tfoot, table)>form:-moz-is-html {\n    /* Important: don't show these forms in HTML */\n    display: none !important;\n}\n\ntable[bordercolor]>tbody,\ntable[bordercolor]>thead,\ntable[bordercolor]>tfoot,\ntable[bordercolor]>col,\ntable[bordercolor]>colgroup,\ntable[bordercolor]>tr,\ntable[bordercolor]>*>tr,\ntable[bordercolor]>tr>td,\ntable[bordercolor]>*>tr>td,\ntable[bordercolor]>tr>th,\ntable[bordercolor]>*>tr>th {\n    border-color: inherit;\n}\n\n/* inlines */\n\nq:before {\n    content: open-quote;\n}\n\nq:after {\n    content: close-quote;\n}\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\ni,\ncite,\nem,\nvar,\ndfn {\n    font-style: italic;\n}\n\ntt,\ncode,\nkbd,\nsamp {\n    font-family: -moz-fixed;\n}\n\nu,\nins {\n    text-decoration: underline;\n}\n\ns,\nstrike,\ndel {\n    text-decoration: line-through;\n}\n\nbig {\n    font-size: larger;\n}\n\nsmall {\n    font-size: smaller;\n}\n\nsub {\n    vertical-align: sub;\n    font-size: smaller;\n}\n\nsup {\n    vertical-align: super;\n    font-size: smaller;\n}\n\nnobr {\n    white-space: nowrap;\n}\n\nmark {\n    background: Mark;\n    color: MarkText;\n}\n\n/* titles */\nabbr[title],\nacronym[title] {\n    text-decoration: dotted underline;\n}\n\n/* lists */\n\nul,\nmenu,\ndir {\n    display: block;\n    list-style-type: disc;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    padding-inline-start: 40px;\n}\n\nul,\nol,\nmenu {\n    counter-reset: list-item;\n}\n\nol {\n    display: block;\n    list-style-type: decimal;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    padding-inline-start: 40px;\n}\n\nli {\n    display: list-item;\n    text-align: match-parent;\n}\n\n/* nested lists have no top/bottom margins */\n:is(ul, ol, dir, menu, dl) ul,\n:is(ul, ol, dir, menu, dl) ol,\n:is(ul, ol, dir, menu, dl) dir,\n:is(ul, ol, dir, menu, dl) menu,\n:is(ul, ol, dir, menu, dl) dl {\n    margin-block-start: 0;\n    margin-block-end: 0;\n}\n\n/* 2 deep unordered lists use a circle */\n:is(ol, ul, menu, dir) ul,\n:is(ol, ul, menu, dir) menu,\n:is(ol, ul, menu, dir) dir {\n    list-style-type: circle;\n}\n\n/* 3 deep (or more) unordered lists use a square */\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {\n    list-style-type: square;\n}\n\n\n/* leafs */\n\n/* <hr> noshade and color attributes are handled completely by\n  * HTMLHRElement::MapAttributesIntoRule.\n  * https://html.spec.whatwg.org/#the-hr-element-2\n  */\nhr {\n    color: gray;\n    border-width: 1px;\n    border-style: inset;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n    margin-inline-start: auto;\n    margin-inline-end: auto;\n    overflow: hidden;\n\n    /* FIXME: This is not really per spec */\n    display: block;\n}\n\nhr[size=\"1\"] {\n    border-style: solid none none none;\n}\n\n/* Note that we only intend for the alt content to show up if the image is\n  * broken. But non-broken images/inputs will have a replaced box, and thus we\n  * won't we don't generate the pseudo-element anyways. This prevents\n  * unnecessary reframing when images become broken / non-broken. */\ninput[type=image]::before,\nimg::before {\n    content: -moz-alt-content !important;\n    unicode-bidi: isolate;\n}\n\nimg[usemap],\nobject[usemap] {\n    color: blue;\n}\n\nframeset {\n    display: block ! important;\n    overflow: clip;\n    position: static ! important;\n    float: none ! important;\n    border: none ! important;\n}\n\nframe {\n    border-radius: 0 ! important;\n}\n\niframe {\n    border: 2px inset;\n}\n\nspacer {\n    position: static ! important;\n    float: none ! important;\n}\n\ncanvas {\n    user-select: none;\n}\n\niframe:focus-visible,\nbody:focus-visible,\nhtml:focus-visible {\n    /* These elements historically don't show outlines when focused by default.\n    * We could consider changing that if needed. */\n    outline-style: none;\n}\n\n/* hidden elements: https://html.spec.whatwg.org/#hidden-elements\n  *\n  * Exceptions:\n  *\n  *  * area declaration needs to be !important, see below / bug 135040.  That's\n  *    hacky and broken.\n  *\n  *  * [hidden] is implemented as a presentation attribute to avoid a global\n  *    selector in a UA sheet.\n  */\nbase,\nbasefont,\ndatalist,\nhead,\nlink,\nmeta,\nnoembed,\nnoframes,\nparam,\nrp,\nscript,\nstyle,\ntemplate,\ntitle {\n    display: none;\n}\n\narea {\n    /* Don't give it frames other than its imageframe */\n    display: none ! important;\n}\n\niframe:fullscreen {\n    /* iframes in full-screen mode don't show a border. */\n    border: none !important;\n    padding: unset !important;\n}\n\n/* Details and summary\n  * https://html.spec.whatwg.org/#the-details-and-summary-elements\n  *\n  * Note that these rules need to be duplicated in details.css for the anonymous\n  * summary, which wouldn't match otherwise.\n  *\n  * The spec here says something different, see\n  * https://github.com/whatwg/html/issues/8610\n  */\ndetails>summary:first-of-type {\n    display: list-item;\n    counter-increment: list-item 0;\n    list-style: disclosure-closed inside;\n}\n\ndetails[open]>summary:first-of-type {\n    list-style-type: disclosure-open;\n}\n\n/* media elements */\nvideo {\n    object-fit: contain;\n}\n\nvideo>img:-moz-native-anonymous {\n    /* Video poster images should render with the video element's \"object-fit\" &\n      \"object-position\" properties */\n    object-fit: inherit !important;\n    object-position: inherit !important;\n}\n\naudio:not([controls]) {\n    display: none !important;\n}\n\naudio[controls] {\n    /* This ensures that intrinsic sizing can reliably shrinkwrap our\n       controls (which are also always horizontal) and produce a\n       reasonable intrinsic size from them. */\n    writing-mode: horizontal-tb !important;\n}\n\n*|*::-moz-html-canvas-content {\n    display: block !important;\n    /* we want to be an absolute and fixed container */\n    transform: translate(0) !important;\n}\n\nvideo>.caption-box {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n/**\n  * The pseudo element won't inherit CSS styles from its direct parent, `::cue`\n  * would actually inherit styles from video because it's video's pseudo element.\n  * Therefore, we have to explicitly set some styles which are already defined\n  * in its parent element in vtt.jsm.\n  */\n::cue {\n    color: rgba(255, 255, 255, 1);\n    white-space: pre-line;\n    background-color: rgba(0, 0, 0, 0.8);\n    font: 10px sans-serif;\n    font-size: var(--cue-font-size);\n    writing-mode: var(--cue-writing-mode, inherit);\n    overflow-wrap: break-word;\n    /* TODO : enable unicode-bidi, right now enable it would cause incorrect\n             display direction, maybe related with bug 1558431. */\n}\n\n/* <dialog> element styles */\n\ndialog {\n    position: absolute;\n    display: block;\n    inset-inline-start: 0;\n    inset-inline-end: 0;\n    margin: auto;\n    border-width: initial;\n    border-style: solid;\n    border-color: initial;\n    border-image: initial;\n    padding: 1em;\n    background-color: Canvas;\n    color: CanvasText;\n    width: -moz-fit-content;\n    height: -moz-fit-content;\n}\n\ndialog:not([open]) {\n    display: none;\n}\n\ndialog:modal {\n    -moz-top-layer: top !important;\n    position: fixed;\n    overflow: auto;\n    visibility: visible;\n    inset-block-start: 0;\n    inset-block-end: 0;\n    max-width: calc(100% - 6px - 2em);\n    max-height: calc(100% - 6px - 2em);\n}\n\n/* https://html.spec.whatwg.org/#flow-content-3 */\ndialog::backdrop {\n    background: rgba(0, 0, 0, 0.1);\n}\n\nmarquee {\n    inline-size: -moz-available;\n    display: inline-block;\n    vertical-align: text-bottom;\n    text-align: start;\n}\n\nmarquee:is([direction=\"up\"], [direction=\"down\"]) {\n    block-size: 200px;\n}\n\n/* Ruby */\n\nruby {\n    display: ruby;\n}\n\nrb {\n    display: ruby-base;\n    white-space: nowrap;\n}\n\nrt {\n    display: ruby-text;\n}\n\nrtc {\n    display: ruby-text-container;\n}\n\nrtc,\nrt {\n    white-space: nowrap;\n    font-size: 50%;\n    -moz-min-font-size-ratio: 50%;\n    line-height: 1;\n}\n\n@media not (-moz-platform: windows) {\n\n    rtc,\n    rt {\n        /* The widely-used Windows font Meiryo doesn't work fine with this\n     * setting, so disable this on Windows. We should re-enable it once\n     * Microsoft fixes this issue. See bug 1164279. */\n        font-variant-east-asian: ruby;\n    }\n}\n\nrtc,\nrt {\n    text-emphasis: none;\n}\n\nrtc:lang(zh),\nrt:lang(zh) {\n    ruby-align: center;\n}\n\nrtc:lang(zh-TW),\nrt:lang(zh-TW) {\n    font-size: 30%;\n    /* bopomofo */\n    -moz-min-font-size-ratio: 30%;\n}\n\nrtc>rt {\n    font-size: unset;\n}\n\nruby,\nrb,\nrt,\nrtc {\n    unicode-bidi: isolate;\n}\n\n/* Shadow DOM v1\n  * https://drafts.csswg.org/css-scoping/#slots-in-shadow-tree */\nslot {\n    display: contents;\n}\n\n/* Un-invert images and videos for users using inverted colors.\n  * \"User agents must add the following rule to their UA style sheet\"\n  * https://www.w3.org/TR/mediaqueries-5/#inverted\n  */\n@media (inverted-colors) {\n\n    img:not(picture > img),\n    picture,\n    video {\n        filter: invert(100%);\n    }\n}\n\n/* Hide noscript elements if scripting is enabled */\n@media (scripting) {\n    noscript {\n        display: none !important;\n    }\n}\n\n@media print {\n\n    input,\n    textarea,\n    select,\n    button,\n    details {\n        -moz-user-input: none !important;\n        pointer-events: none !important;\n    }\n}\n\n/* Popover UA style, https://html.spec.whatwg.org/#flow-content-3 */\n/* stylelint-disable-next-line media-query-no-invalid */\n@media (-moz-bool-pref: \"dom.element.popover.enabled\") {\n    [popover]:not(:popover-open):not(dialog[open]) {\n        display: none;\n    }\n\n    dialog:popover-open {\n        display: block;\n    }\n\n    [popover] {\n        position: fixed;\n        inset: 0;\n        width: fit-content;\n        height: fit-content;\n        margin: auto;\n        border: solid;\n        padding: 0.25em;\n        overflow: auto;\n        color: CanvasText;\n        background-color: Canvas;\n    }\n\n    :popover-open {\n        -moz-top-layer: top;\n    }\n\n    :popover-open::backdrop {\n        position: fixed;\n        inset: 0;\n        pointer-events: none !important;\n        background-color: transparent;\n    }\n}\n\n\n\n\n\n\nbody {\n    background-color: bisque;\n\n\n}\n\n.headerPage {\n    background-color: rgba(45, 41, 41, 0.107);\n    height: 3rem;\n    font-size: 2rem;\n    padding: 0.8rem 0;\n    text-align: center;\n\n}\n\n\n.container {\n    padding: 0;\n    height: 633px;\n    background-color: blue;\n}\n\n/* \n.container::after {\n    content: \"\";\n    display: table;\n    clear: both;\n} */\n\n\n.leftSection {\n    width: 35%;\n    min-height: 100%;\n    background-color: brown;\n    display: inline-block;\n}\n\n.rightSection {\n    width: 65%;\n\n    float: right;\n\n    background-color: blueviolet;\n}\n\n\n.projects {\n    margin: 5rem auto;\n    width: 60%;\n    text-align: center;\n    background-color: darksalmon;\n    padding: 5px 3px 15px 0;\n    position: relative;\n}\n\n\n#buttonProjectForm {\n    display: block;\n    margin: 18px;\n}\n\n#labelProject {\n    margin: 5px;\n}\n\n#inputProject {\n    width: 80%;\n    margin: 10px 0 5px 0;\n}\n\n.tasks {\n    margin: 5rem auto;\n    width: 70%;\n    text-align: center;\n    background-color: darksalmon;\n    padding: 5px 0 15px 0;\n    /* z-index: 1; */\n}\n\n.tasksUnit {\n    background-color: darkkhaki;\n}\n\n.taskUnitImportant {\n    background-color: goldenrod\n}\n\n.taskUnitUrgent {\n    background-color: chartreuse;\n}\n\n\n\n.projectsUnit {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    place-items: center;\n\n}\n\n.buttonProjects,\n.activeProject {\n    grid-column: 2 / span 5;\n    place-self: stretch;\n    background-color: cyan;\n    margin: 8px;\n    padding: 8px;\n\n}\n\n.removeProjects {\n    grid-column: 7 / 8;\n    background-color: red;\n    border-radius: 50%;\n    display: inline-block;\n\n}\n\n.activeProject {\n    background-color: greenyellow;\n    color: white;\n}\n\n#listProjects {\n    text-align: center;\n}\n\n\n.hideRemoveButton {\n    display: none;\n}\n\n\n#startProjectButton {\n    display: block;\n}\n\n\n\n\n#addProjectDiv {\n\n    padding: 5px;\n    background-color: rgb(151, 151, 222);\n    display: none;\n    position: absolute;\n    left: 1rem;\n    top: 1rem;\n}\n\n#editTaskDiv {\n    display: none;\n    position: absolute;\n    left: 40%;\n    top: 4.2rem;\n    min-width: 380px;\n    background-color: darkseagreen\n}\n\n#addTaskDiv {\n    padding: 5px;\n    background-color: yellow;\n    display: none;\n\n    position: absolute;\n    left: 45%;\n    top: 4rem;\n    min-width: 400px;\n}\n\n#editTaskForm {\n    margin: 8px;\n}\n\n#addTaskForm {\n    background-color: yellow;\n    margin: 8px;\n}\n\n\n#addProjectForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(202, 251, 254);\n    color: green;\n    text-align: center;\n    margin: 8px;\n    min-width: 400px;\n}\n\n.taskContainerFirst {\n    display: flex;\n    clear: right;\n    flex-direction: column;\n    background-color: cadetblue;\n    padding: 5px;\n    justify-content: space-between;\n\n}\n\n\n\n\n.taskContainerFirst>div {\n    margin: 5px;\n\n}\n\nspan {\n    margin: 0 5px;\n}\n\n.addTask {\n    float: right;\n}\n\n.labelPriority {\n    /* display: ; */\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n\nlabel[for=\"newTask\"] {\n    display: block;\n    color: black;\n}\n\nlabel[for=\"textAreaTask\"] {\n    padding: 0;\n    display: block;\n}\n\n#dateDiv,\n#priorityDiv,\n#notesDiv {\n    margin: 10px;\n}\n\n#priority {\n    padding: 0;\n    margin: 0;\n}\n\n.myNotes {\n    max-width: 100%;\n    background-color: rgb(240, 80, 255);\n    padding: 0.6rem;\n    margin: 5px;\n    text-align: justify;\n}\n\n.taskSettings {\n    margin: 1rem auto 0.5rem auto;\n}\n\n.taskSettings>button {\n    margin: 5px;\n}\n\n.taskCompleted {\n    text-decoration: line-through;\n    background-color: crimson;\n}\n\n.taskCompleted button {\n    background-color: crimson;\n}\n\n.taskCompleted .buttonEditTask {\n    display: none;\n}\n\n\n/* .removeTask {\n    background-color: red;\n    color: white;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTaskForm: () => (/* binding */ editTaskForm)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _taskContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskContainer.js */ "./src/taskContainer.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");




function submitEditTask() {
  // runs when the form is sub
  //console.clear();
  event.preventDefault();
  //console.log("Chosen task: ", chosenTask);
  //console.log(activeProject);
  //activeProject.modifyTask(chosenTask);
  //console.log("Chosen Task: ", chosenTask);

  // Edited data (the data that we submit as corrections)
  const formEdited = document.getElementById("editTaskForm");
  const taskDataEdit = (0,_taskContainer_js__WEBPACK_IMPORTED_MODULE_1__.getFormDataTask)(formEdited);

  // destructuring assignment (I want to avoid naming conflicts)
  const [
    {
      name: nameEdit,
      date: dateEdit,
      priority: priorityEdit,
      notes: notesEdit,
    },
  ] = taskDataEdit;

  // Original data
  const { name, date, priority, notes } = _projects_js__WEBPACK_IMPORTED_MODULE_0__.chosenTask;

  console.log("Edit:");
  console.log(nameEdit, dateEdit, priorityEdit, notesEdit);
  console.log("Original:");
  console.log(name, date, priority, notes);

  // Edit the data
  _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.modifyTask(_projects_js__WEBPACK_IMPORTED_MODULE_0__.chosenTask, taskDataEdit[0]);

  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)("localStorage")) {
    let idProject = _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.getProjectId();
    localStorage.setItem(idProject, JSON.stringify(_projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject));
  }

  document.getElementById("editTaskDiv").style.display = "none";
  (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.showTasks)(_projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject);
}

function editTaskForm() {
  // The form is added in the index.js

  const containerEdit = document.createElement("div");
  containerEdit.setAttribute("id", "editTaskDiv");

  const taskForm = document.createElement("form");

  // Name the Task
  const elementNameTask = document.createElement("div");
  const labelTask = document.createElement("label");

  labelTask.setAttribute("for", "editTask");

  const nameTask = document.createElement("input");
  nameTask.setAttribute("id", "editTask");
  nameTask.value = "Name the task";
  nameTask.type = "text";
  nameTask.name = "name";

  elementNameTask.appendChild(labelTask);
  elementNameTask.appendChild(nameTask);
  taskForm.appendChild(elementNameTask);

  // Due Date
  const elementDate = document.createElement("div");
  elementDate.setAttribute("id", "dateDiv");

  const labelDate = document.createElement("label");
  labelDate.textContent = "Date: ";
  labelDate.setAttribute("for", "dueDateEdit");

  const inputDateTask = document.createElement("input");
  inputDateTask.setAttribute("id", "dueDateEdit");
  inputDateTask.type = "date";
  inputDateTask.name = "date";
  taskForm.appendChild(labelDate);
  taskForm.appendChild(inputDateTask);

  elementDate.appendChild(labelDate);
  elementDate.appendChild(inputDateTask);
  taskForm.appendChild(elementDate);

  // Priority

  const priorityElement = document.createElement("div");
  priorityElement.setAttribute("id", "priorityDivEdit");

  const priorityTitle = document.createElement("p");
  priorityTitle.textContent = "Priority";
  priorityTitle.setAttribute("id", "priorityEdit");

  // HIGH
  const inputPriorityHigh = document.createElement("input");
  inputPriorityHigh.setAttribute("class", "inputPriorityEdit");
  inputPriorityHigh.setAttribute("id", "highPriorityEdit");
  inputPriorityHigh.setAttribute("value", "HIGH");

  inputPriorityHigh.type = "radio";
  inputPriorityHigh.name = "priority";

  const labelPriorityHigh = document.createElement("label");
  labelPriorityHigh.textContent = "HIGH";
  labelPriorityHigh.setAttribute("class", "labelPriorityEdit");
  labelPriorityHigh.setAttribute("for", "highPriorityEdit");

  // MEDIUM
  const inputPriorityMedium = document.createElement("input");
  inputPriorityMedium.setAttribute("class", "inputPriorityEdit");
  inputPriorityMedium.setAttribute("id", "mediumPriorityEdit");
  inputPriorityMedium.setAttribute("value", "MEDIUM");

  inputPriorityMedium.type = "radio";
  inputPriorityMedium.name = "priority";

  const labelPriorityMedium = document.createElement("label");
  labelPriorityMedium.textContent = "MEDIUM";
  labelPriorityMedium.setAttribute("class", "labelPriorityEdit");
  labelPriorityMedium.setAttribute("for", "mediumPriorityEdit");

  // LOW
  const inputPriorityLow = document.createElement("input");
  inputPriorityLow.setAttribute("class", "inputPriorityEdit");
  inputPriorityLow.setAttribute("id", "lowPriorityEdit");
  inputPriorityLow.setAttribute("value", "LOW");

  inputPriorityLow.type = "radio";
  inputPriorityLow.name = "priority";

  const labelPriorityLow = document.createElement("label");
  labelPriorityLow.textContent = "LOW";
  labelPriorityLow.setAttribute("class", "labelPriorityEdit");
  labelPriorityLow.setAttribute("for", "lowPriorityEdit");

  priorityElement.appendChild(priorityTitle);

  priorityElement.appendChild(inputPriorityHigh);
  priorityElement.appendChild(labelPriorityHigh);
  priorityElement.appendChild(inputPriorityMedium);
  priorityElement.appendChild(labelPriorityMedium);
  priorityElement.appendChild(inputPriorityLow);
  priorityElement.appendChild(labelPriorityLow);
  taskForm.appendChild(priorityElement);

  // Notes

  const notesElement = document.createElement("div");
  notesElement.setAttribute("id", "notesDiv");

  const notesTitle = document.createElement("label");
  notesTitle.textContent = "Notes";
  notesTitle.setAttribute("for", "textAreaTaskEdit");
  const taskTextArea = document.createElement("textarea");
  taskTextArea.setAttribute("id", "textAreaTaskEdit");
  taskTextArea.setAttribute("rows", "5");
  taskTextArea.setAttribute("cols", "50");
  taskTextArea.name = "textAreaTask";

  notesElement.appendChild(notesTitle);
  notesElement.appendChild(taskTextArea);
  taskForm.appendChild(notesElement);

  taskForm.setAttribute("id", "editTaskForm");
  containerEdit.appendChild(taskForm);

  // Button Edit
  const editButton = document.createElement("button");
  editButton.setAttribute("id", "buttonEditTask");
  editButton.textContent = "EDIT";
  editButton.addEventListener("click", submitEditTask, false);

  taskForm.appendChild(editButton);

  return containerEdit;
}




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeProject: () => (/* binding */ activeProject),
/* harmony export */   addProjectForm: () => (/* binding */ addProjectForm),
/* harmony export */   addProjectFunction: () => (/* binding */ addProjectFunction),
/* harmony export */   chosenTask: () => (/* binding */ chosenTask),
/* harmony export */   createNewId: () => (/* binding */ createNewId),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   myProjectMethods: () => (/* binding */ myProjectMethods),
/* harmony export */   myProjects: () => (/* binding */ myProjects),
/* harmony export */   setActiveProject: () => (/* binding */ setActiveProject),
/* harmony export */   setChosenTask: () => (/* binding */ setChosenTask),
/* harmony export */   showTasks: () => (/* binding */ showTasks)
/* harmony export */ });
/* harmony import */ var _projectsDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsDom.js */ "./src/projectsDom.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");



let activeProject;
let chosenTask;

function setChosenTask(task) {
  chosenTask = task;
}

function setActiveProject(setProject) {
  let projectId;
  let elementId;
  // We set the active project and change the color of the button
  if (activeProject !== undefined) {
    projectId = activeProject.getProjectId();
  }

  if (projectId !== undefined) {
    console.log("projectId", projectId);
    elementId = document.getElementById(projectId);
  }

  if (elementId !== null && elementId !== undefined) {
    elementId.classList.remove("activeProject");
  }

  activeProject = setProject;

  let new_projectId = setProject.getProjectId();
  let new_elementId = document.getElementById(new_projectId);
  if (new_elementId != null) {
    new_elementId.classList.add("activeProject");
  }

  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)("localStorage") && new_projectId !== undefined) {
    localStorage.setItem("ActiveProject", new_projectId);
  }
}

// All the projects names
const myProjects = [];

function createProject(name) {
  return { name, taskList: {}, id: "project" + assignProjectId() };
}

// The argument will be the instantiation of createProject
function myProjectMethods(myProject) {
  return {
    ...myProject,
    getProjectId: function () {
      return this.id;
    },
    getTaskId: function () {
      return this.taskId;
    },
    getProject: function () {
      return this;
    },
    getProjectName: function () {
      return this.name;
    },
    getTaskList: function () {
      return this.taskList;
    },
    endTask: function (taskInQuestion, isCompleted) {
      // It changes only the visual aspect of the task
      taskInQuestion["completed"] = isCompleted;
      let myElementTask = document.getElementById(chosenTask["nameId"]);
      if (isCompleted) {
        myElementTask.classList.add("taskCompleted");
      } else {
        myElementTask.classList.remove("taskCompleted");
      }
    },
    deleteTask: function (obsoleteTask) {
      console.clear();
      let idTask = obsoleteTask["nameId"];
      delete this.taskList[idTask];
      console.log(this.taskList);
      const myTasks = Object.values(this.taskList);
      (0,_projectsDom_js__WEBPACK_IMPORTED_MODULE_0__.domShowTasks)(myTasks);
    },
    modifyTask: function (oldTask, newTask) {
      //console.clear();
      let idTask = oldTask["nameId"];

      let getTask = activeProject.getTaskList();
      console.log("idTask", idTask);

      console.log("old", oldTask, idTask);
      console.log("new", newTask);
      console.log("Task to change: ", chosenTask["nameId"]);
      console.log(activeProject);
      console.log("TASK CASE", this.taskList[idTask]);
      this.taskList[idTask] = newTask;
      this.taskList[idTask]["nameId"] = idTask;

      console.log("TASK", getTask);
    },
    addTask: function (name, date = "02/mm/yy", priority = "LOW", notes = "") {
      let taskId = assignTaskId();

      let nameIdTask = "task" + taskId;
      let internalTask = {};

      internalTask["nameId"] = nameIdTask;
      internalTask["name"] = name;
      internalTask["date"] = date;
      internalTask["priority"] = priority;
      internalTask["notes"] = notes;
      internalTask["completed"] = false;

      // Every task is a value whose key is nameIdTask
      this.taskList[nameIdTask] = internalTask;
      console.log("PRIVATE task, ", this.taskList);
    },
  };
}

function showTasks(projectL) {
  console.log("Show: ", projectL);

  setActiveProject(projectL);
  console.log("Active project: ", projectL.getProjectId());

  console.log("project: ", projectL);
  let myProtoTasks = null;
  myProtoTasks = projectL.getTaskList();
  //console.clear();
  const myTasks = Object.values(myProtoTasks);
  const nameId = activeProject.getTaskId() + 1;

  console.log("myTasks: ", myTasks);

  console.log("nameId, ", nameId);

  (0,_projectsDom_js__WEBPACK_IMPORTED_MODULE_0__.domShowTasks)(myTasks);
}

function clickAddProject(event) {
  event.preventDefault();

  document.getElementById("addProjectDiv").style.display = "none";
  const myForm = document.getElementById("addProjectForm");

  const newTitle = myForm["name"].value;
  if (newTitle !== "") {
    const newProjectEmpty = createProject(newTitle);

    let newProject = myProjectMethods(newProjectEmpty);

    if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)("localStorage")) {
      let projectId = newProject.getProjectId();
      localStorage.setItem(projectId, JSON.stringify(newProjectEmpty));
      let allStoredProjects = localStorage.getItem("localProjects");
      let parsedProjects = JSON.parse(allStoredProjects);
      parsedProjects.allProjects.push(projectId);
      localStorage.setItem("localProjects", JSON.stringify(parsedProjects));
    }

    appendProject(newTitle, newProject);
    // } else {
    //   newProject = myProjectMethods(newProjectEmpty);
    // }
  }
}

function addProjectForm() {
  const addElementContainer = document.createElement("div");
  addElementContainer.setAttribute("id", "addProjectDiv");
  const projectForm = document.createElement("form");
  projectForm.setAttribute("id", "addProjectForm");
  addElementContainer.appendChild(projectForm);
  const labelProject = document.createElement("label");
  labelProject.textContent = "Project's name";
  labelProject.setAttribute("id", "labelProject");
  const nameProject = document.createElement("input");
  nameProject.setAttribute("id", "inputProject");
  nameProject.type = "text";
  nameProject.name = "name";
  projectForm.appendChild(labelProject);
  projectForm.appendChild(nameProject);

  const addButton = document.createElement("button");
  addButton.setAttribute("id", "buttonProjectForm");
  addButton.textContent = "ADD";
  addButton.addEventListener("click", clickAddProject, false);

  projectForm.appendChild(addButton);
  return addElementContainer;
}

function addProjectFunction() {
  document.getElementById("addProjectDiv").style.display = "block";
}

const createNewId = () => {
  let idProject = 0;
  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)("localStorage")) {
    let localId = localStorage.getItem("lastId");

    if (localId !== null) {
      idProject = localId;
    }
  }

  return () => {
    idProject++;
    localStorage.setItem("lastId", idProject);
    return idProject;
  };
};

const assignProjectId = createNewId();
const assignTaskId = createNewId();

function appendProject(newProjectTitle, keyProject) {
  const listProjects = document.getElementById("listProjects");
  const titleProject = (0,_projectsDom_js__WEBPACK_IMPORTED_MODULE_0__.elementProject)(newProjectTitle, keyProject);
  console.log("append", keyProject);

  showTasks(keyProject);
  listProjects.appendChild(titleProject);
  setActiveProject(keyProject);
}




/***/ }),

/***/ "./src/projectsDom.js":
/*!****************************!*\
  !*** ./src/projectsDom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domShowTasks: () => (/* binding */ domShowTasks),
/* harmony export */   elementProject: () => (/* binding */ elementProject),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _taskContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskContainer.js */ "./src/taskContainer.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");




function removeProject(project) {
  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)("localStorage")) {
    let localProjects = localStorage.getItem("localProjects");
    let parsedLocalTasks = JSON.parse(localProjects);
    let projectId = project.firstChild.id;
    let projectsArray = parsedLocalTasks.allProjects;
    console.log(projectsArray);

    const arrayWithoutRemovedProject = projectsArray.filter(function (project) {
      return project !== projectId;
    });
    let allLocalProjects = { allProjects: arrayWithoutRemovedProject };

    localStorage.setItem("localProjects", JSON.stringify(allLocalProjects));

    let activeProject = localStorage.getItem("ActiveProject");
    if (activeProject == projectId) {
      localStorage.setItem("ActiveProject", "justDeleted");
    }

    console.log("filter", arrayWithoutRemovedProject);

    localStorage.removeItem(projectId);
  }

  //

  project.remove();
}

function clickRemoveTask(event) {
  (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.setChosenTask)(event);
  _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.deleteTask(_projects_js__WEBPACK_IMPORTED_MODULE_0__.chosenTask);
  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)("localStorage")) {
    let idProject = _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.getProjectId();
    localStorage.setItem(idProject, JSON.stringify(_projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject));
  }
}

function setCompleted(event, buttonCompletion) {
  (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.setChosenTask)(event);
  console.clear();
  let { completed } = event;
  completed = !completed;
  if (completed == false) {
    buttonCompletion.textContent = "Open";
  } else {
    buttonCompletion.textContent = "Closed";
  }

  _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.endTask(_projects_js__WEBPACK_IMPORTED_MODULE_0__.chosenTask, completed);
  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)("localStorage")) {
    let idProject = _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.getProjectId();
    localStorage.setItem(idProject, JSON.stringify(_projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject));
  }
}

function elementProject(nameProjectDom, keyProject) {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("projectsUnit");

  // The project
  const newProject = document.createElement("button");
  newProject.classList.add("buttonProjects");
  let projectId = keyProject.getProjectId();
  newProject.setAttribute("id", projectId);

  newProject.textContent = nameProjectDom;

  newProject.addEventListener("click", () => {
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.showTasks)(keyProject);
  });
  projectDiv.appendChild(newProject);

  // The option to remove it
  const removeProjectButton = document.createElement("button");
  let buttonRemoveDisplay = projectId + "Button";

  removeProjectButton.setAttribute("id", buttonRemoveDisplay);
  removeProjectButton.classList.add("removeProjects", "hideRemoveButton");
  removeProjectButton.textContent = "X";
  removeProjectButton.addEventListener("click", () => {
    removeProject(projectDiv);
  });
  projectDiv.appendChild(removeProjectButton);

  projectDiv.addEventListener(
    "mouseover",
    () => {
      removeProjectButton.classList.remove("hideRemoveButton");
    },
    false
  );

  projectDiv.addEventListener(
    "mouseout",
    () => {
      removeProjectButton.classList.add("hideRemoveButton");
    },
    false
  );

  return projectDiv;
}

function domShowTasks(myTasks) {
  const myContainer = document.getElementById("taskContainerId");
  if (myContainer !== null) {
    myContainer.replaceChildren();
  }

  for (const eachTask of myTasks) {
    const newTask = document.createElement("div");
    newTask.classList.add("tasksUnit");
    newTask.setAttribute("id", eachTask["nameId"]);
    myContainer.appendChild(newTask);

    // New title
    const newTitle = document.createElement("p");
    newTitle.textContent = eachTask.name;

    newTask.appendChild(newTitle);

    // New extras (date, priority)
    const newExtras = document.createElement("div");

    // New date
    if (eachTask.date !== "") {
      const newDueDate = document.createElement("span");
      newDueDate.textContent = eachTask.date;
      newExtras.appendChild(newDueDate);
    }

    // New priority
    const newPriority = document.createElement("span");
    newPriority.textContent = `PRIORITY: ${eachTask.priority}`;
    newExtras.appendChild(newPriority);

    newTask.appendChild(newExtras);

    if (eachTask.priority == "HIGH") {
      newTask.classList.add("taskUnitUrgent");
    }
    if (eachTask.priority == "MEDIUM") {
      newTask.classList.add("taskUnitImportant");
    }

    // Place notes
    if (eachTask.notes !== "") {
      const setNotes = document.createElement("div");
      setNotes.textContent = eachTask.notes;
      setNotes.classList.add("myNotes");
      const idNote = "";
      setNotes.setAttribute("id", idNote);
      newTask.appendChild(setNotes);
    }

    // New task setting
    const newSetting = document.createElement("div");
    newSetting.classList.add("taskSettings");

    // Completed
    const completed = document.createElement("button");
    completed.textContent = "Open";
    completed.addEventListener(
      "click",
      () => {
        setCompleted(eachTask, completed);
      },
      false
    );
    if (eachTask["completed"]) {
      //console.log("myTasks dom, ", true);
      newTask.classList.add("taskCompleted");
      completed.textContent = "Closed";
    }

    newSetting.appendChild(completed);

    // New edit
    const newEdit = document.createElement("button");
    newEdit.classList.add("buttonEditTask");
    newEdit.textContent = "Edit";
    newEdit.addEventListener(
      "click",
      () => {
        (0,_taskContainer_js__WEBPACK_IMPORTED_MODULE_1__.clickEditTask)(eachTask);
      },
      false
    );

    newSetting.appendChild(newEdit);

    // Remove task
    const removeTask = document.createElement("button");
    removeTask.classList.add("removeTask");
    removeTask.textContent = "Delete";
    removeTask.addEventListener(
      "click",
      () => {
        clickRemoveTask(eachTask);
      },
      false
    );

    newSetting.appendChild(removeTask);

    newTask.appendChild(newSetting);
  }
}

function renderProjects() {
  const myProjects = document.createElement("div");
  myProjects.classList.add("projects");

  myProjects.appendChild((0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.addProjectForm)());

  const myProjectsTitle = document.createElement("p");
  myProjectsTitle.innerText = "PROJECTS";

  myProjects.appendChild(myProjectsTitle);

  const listProjects = document.createElement("div");
  listProjects.setAttribute("id", "listProjects");

  // if (storageAvailable("localStorage")) {
  //   storeProject("localListProjects", listProjects);
  //   let localProjectList = localStorage.getItem("localListProjects");

  // }

  console.log("list projects", typeof listProjects);

  myProjects.appendChild(listProjects);

  const addProject = document.createElement("button");
  addProject.setAttribute("id", "startProjectButton");
  addProject.innerText = "+";
  addProject.addEventListener("click", _projects_js__WEBPACK_IMPORTED_MODULE_0__.addProjectFunction);

  myProjects.appendChild(addProject);

  return myProjects;
}




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageAvailable: () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}




/***/ }),

/***/ "./src/taskContainer.js":
/*!******************************!*\
  !*** ./src/taskContainer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskForm: () => (/* binding */ addTaskForm),
/* harmony export */   clickAddTask: () => (/* binding */ clickAddTask),
/* harmony export */   clickEditTask: () => (/* binding */ clickEditTask),
/* harmony export */   editTaskForm: () => (/* reexport safe */ _forms_js__WEBPACK_IMPORTED_MODULE_1__.editTaskForm),
/* harmony export */   getFormDataTask: () => (/* binding */ getFormDataTask)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
/* harmony import */ var _projectsDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsDom.js */ "./src/projectsDom.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");





function clickEditTask(event) {
  // it displays the form for editing

  // console.clear();

  (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.setChosenTask)(event);

  // console.log("Chosen task: ", chosenTask);
  const editTaskDiv = document.getElementById("editTaskDiv");
  const editForm = document.getElementById("editTaskForm");

  const { name, date, priority, notes } = event;

  // Change the labels

  let oldTask = editForm.elements["editTask"];
  let oldDate = editForm.elements["dueDateEdit"];

  oldTask.value = name;
  oldDate.value = date;

  let oldNotes = editForm.elements["textAreaTaskEdit"];
  oldNotes.value = notes;

  let oldPriority = document.querySelectorAll("input[name=" + "priority" + "]");
  for (let i = 0; i < oldPriority.length; i++) {
    if (oldPriority[i].value === priority) {
      oldPriority[i].checked = true;
    }
  }
  //console.log("Active project: ", activeProject);

  editTaskDiv.style.display = "block";
}

function clickAddTask() {
  // console.clear();
  document.getElementById("addTaskDiv").style.display = "block";
  console.log("Active project: ", _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject);
}

function formAddTaskMethod() {
  // Adds the task to the project
  const myFormTask = document.getElementById("addTaskForm");
  const taskData = getFormDataTask(myFormTask);

  const [{ name, date, priority, notes }] = taskData;

  // We don't want tasks without a 'name' (description)
  if (name == "") {
    return;
  }

  _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.addTask(name, date, priority, notes);

  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.storageAvailable)("localStorage")) {
    let idProject = _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.getProjectId();
    localStorage.setItem(idProject, JSON.stringify(_projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject));
  }

  let myProtoTasks = null;
  myProtoTasks = _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.getTaskList();
  const myTasks = Object.values(myProtoTasks);
  (0,_projectsDom_js__WEBPACK_IMPORTED_MODULE_2__.domShowTasks)(myTasks);
}

function getFormDataTask(whichForm) {
  event.preventDefault();
  document.getElementById("addTaskDiv").style.display = "none";
  const myFormTask = whichForm;
  const newTask = myFormTask["name"].value;
  const newDate = myFormTask["date"].value;
  let newImportance = myFormTask["priority"].value;
  const newNotes = myFormTask["textAreaTask"].value;

  //console.clear();

  console.log("Active project: ", _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject);
  const taskSet = [
    { name: newTask, date: newDate, priority: newImportance, notes: newNotes },
  ];

  return taskSet;
}

function addTaskForm() {
  const addElementContainer = document.createElement("div");
  addElementContainer.setAttribute("id", "addTaskDiv");

  const taskForm = document.createElement("form");
  taskForm.setAttribute("id", "addTaskForm");

  // Name the Task
  const elementNameTask = document.createElement("div");
  const labelTask = document.createElement("label");
  labelTask.textContent = "Name the new task";
  labelTask.setAttribute("for", "newTask");

  const nameTask = document.createElement("input");
  nameTask.setAttribute("id", "newTask");
  nameTask.value = "Name the task";
  nameTask.type = "text";
  nameTask.name = "name";

  elementNameTask.appendChild(labelTask);
  elementNameTask.appendChild(nameTask);
  taskForm.appendChild(elementNameTask);

  // Due Date
  const elementDate = document.createElement("div");
  elementDate.setAttribute("id", "dateDiv");

  const labelDate = document.createElement("label");
  labelDate.textContent = "Date: ";
  labelDate.setAttribute("for", "dueDate");

  const inputDateTask = document.createElement("input");
  inputDateTask.setAttribute("id", "dueDate");
  inputDateTask.type = "date";
  inputDateTask.name = "date";
  taskForm.appendChild(labelDate);
  taskForm.appendChild(inputDateTask);

  elementDate.appendChild(labelDate);
  elementDate.appendChild(inputDateTask);
  taskForm.appendChild(elementDate);

  // Priority

  const priorityElement = document.createElement("div");
  priorityElement.setAttribute("id", "priorityDiv");

  const priorityTitle = document.createElement("p");
  priorityTitle.textContent = "Priority";
  priorityTitle.setAttribute("id", "priority");

  // HIGH
  const inputPriorityHigh = document.createElement("input");
  inputPriorityHigh.setAttribute("class", "inputPriority");
  inputPriorityHigh.setAttribute("id", "highPriority");
  inputPriorityHigh.setAttribute("value", "HIGH");

  inputPriorityHigh.type = "radio";
  inputPriorityHigh.name = "priority";

  const labelPriorityHigh = document.createElement("label");
  labelPriorityHigh.textContent = "HIGH";
  labelPriorityHigh.setAttribute("class", "labelPriority");
  labelPriorityHigh.setAttribute("for", "highPriority");

  // MEDIUM
  const inputPriorityMedium = document.createElement("input");
  inputPriorityMedium.setAttribute("class", "inputPriority");
  inputPriorityMedium.setAttribute("id", "mediumPriority");
  inputPriorityMedium.setAttribute("value", "MEDIUM");

  inputPriorityMedium.type = "radio";
  inputPriorityMedium.name = "priority";

  const labelPriorityMedium = document.createElement("label");
  labelPriorityMedium.textContent = "MEDIUM";
  labelPriorityMedium.setAttribute("class", "labelPriority");
  labelPriorityMedium.setAttribute("for", "mediumPriority");

  // LOW
  const inputPriorityLow = document.createElement("input");
  inputPriorityLow.setAttribute("class", "inputPriority");
  inputPriorityLow.setAttribute("id", "lowPriority");
  inputPriorityLow.setAttribute("value", "LOW");
  inputPriorityLow.checked = true;

  inputPriorityLow.type = "radio";
  inputPriorityLow.name = "priority";

  const labelPriorityLow = document.createElement("label");
  labelPriorityLow.textContent = "LOW";
  labelPriorityLow.setAttribute("class", "labelPriority");
  labelPriorityLow.setAttribute("for", "lowPriority");

  priorityElement.appendChild(priorityTitle);

  priorityElement.appendChild(inputPriorityHigh);
  priorityElement.appendChild(labelPriorityHigh);
  priorityElement.appendChild(inputPriorityMedium);
  priorityElement.appendChild(labelPriorityMedium);
  priorityElement.appendChild(inputPriorityLow);
  priorityElement.appendChild(labelPriorityLow);
  taskForm.appendChild(priorityElement);

  // Notes

  const notesElement = document.createElement("div");
  notesElement.setAttribute("id", "notesDiv");

  const notesTitle = document.createElement("label");
  notesTitle.textContent = "Notes";
  notesTitle.setAttribute("for", "textAreaTask");
  const taskTextArea = document.createElement("textarea");
  taskTextArea.setAttribute("id", "textAreaTask");
  taskTextArea.setAttribute("rows", "5");
  taskTextArea.setAttribute("cols", "50");
  taskTextArea.name = "textAreaTask";

  notesElement.appendChild(notesTitle);
  notesElement.appendChild(taskTextArea);
  taskForm.appendChild(notesElement);

  addElementContainer.appendChild(taskForm);

  const addButton = document.createElement("button");
  addButton.setAttribute("id", "buttonTaskForm");
  addButton.textContent = "ADD";
  addButton.addEventListener("click", formAddTaskMethod, false);

  taskForm.appendChild(addButton);

  return addElementContainer;
}




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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projectsDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsDom.js */ "./src/projectsDom.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _taskContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskContainer.js */ "./src/taskContainer.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
// import _ from "lodash";







let stateUser;

// Create the sample projects that will add at the end

let sampleProject;

let sampleProjectOne;
let sampleProjectTwo;
let nameProjectSampleOne;
let nameProjectSampleTwo;
let createElementSampleOne;
let createElementSampleTwo;

// Project one (initial project)

if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage")) {
  stateUser = localStorage.getItem("stateApplication");

  if (stateUser == null) {
    sampleProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("project1");
    let allLocalProjects = { allProjects: [] };
    localStorage.setItem("localProjects", JSON.stringify(allLocalProjects));
    localStorage.setItem("project1", JSON.stringify(sampleProject));
    let localProject1 = localStorage.getItem("project1");
    sampleProjectOne = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.myProjectMethods)(JSON.parse(localProject1));
    console.log("sample", sampleProjectOne);
    // Push the project in the local storage
    let allStoredProjects = localStorage.getItem("localProjects");
    let parsedProjects = JSON.parse(allStoredProjects);
    let firstProjectId = sampleProjectOne.getProjectId();
    parsedProjects.allProjects.push(firstProjectId);
    localStorage.setItem("localProjects", JSON.stringify(parsedProjects));
  }
}
if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage")) {
  sampleProjectOne = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.myProjectMethods)(sampleProject);
}

if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage") | (stateUser == null)) {
  sampleProjectOne.addTask("Read a 90 book", "3/3/2024", "LOW", "ss");
  sampleProjectOne.addTask("Read An Empty 0 House");
}

if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage") | (stateUser == null)) {
  localStorage.setItem("project1", JSON.stringify(sampleProjectOne));
}

if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage") | (stateUser == null)) {
  console.log("pro", sampleProjectOne);
  (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(sampleProjectOne);
  console.log("Active project: ", _projects_js__WEBPACK_IMPORTED_MODULE_2__.activeProject);
}

// Project two
let sampleProjectNext;

if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage")) {
  if (stateUser == null) {
    sampleProjectNext = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("project2");
    localStorage.setItem("project2", JSON.stringify(sampleProjectNext));
    let localProject2 = localStorage.getItem("project2");
    sampleProjectTwo = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.myProjectMethods)(JSON.parse(localProject2));

    // Push the project in the local storage
    let allStoredProjects = localStorage.getItem("localProjects");
    let secondProjectId = sampleProjectTwo.getProjectId();
    let parsedProjects = JSON.parse(allStoredProjects);
    parsedProjects.allProjects.push(secondProjectId);
    localStorage.setItem("localProjects", JSON.stringify(parsedProjects));
    console.log("all 2", parsedProjects);
  }
} else {
  sampleProjectTwo = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.myProjectMethods)(sampleProjectNext);
  nameProjectSampleTwo = sampleProjectTwo.getProjectName();
}

if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage") | (stateUser == null)) {
  sampleProjectTwo.addTask("Read a great book", "3d3", "HIGH", "sas");
}
if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage") | (stateUser == null)) {
  localStorage.setItem("project2", JSON.stringify(sampleProjectTwo));
}

if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage") | (stateUser == null)) {
  nameProjectSampleOne = sampleProjectOne.getProjectName();
  nameProjectSampleTwo = sampleProjectTwo.getProjectName();

  createElementSampleOne = (0,_projectsDom_js__WEBPACK_IMPORTED_MODULE_1__.elementProject)(
    nameProjectSampleOne,
    sampleProjectOne
  );

  createElementSampleTwo = (0,_projectsDom_js__WEBPACK_IMPORTED_MODULE_1__.elementProject)(
    nameProjectSampleTwo,
    sampleProjectTwo
  );
}

///////////////////////////
////
///
//

// Create and add dom elements

function myHeader() {
  const element = document.createElement("header");

  element.classList.add("headerPage");
  element.innerHTML = "TO DO LIST";

  return element;
}

document.body.appendChild(myHeader());

const contain = document.createElement("div");
contain.classList.add("container");

// Left Side

const leftSide = document.createElement("div");
leftSide.classList.add("leftSection");
leftSide.appendChild((0,_projectsDom_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)());

contain.appendChild(leftSide);

// Right side

const rightSide = document.createElement("div");
rightSide.classList.add("rightSection");

// Parent task element
const myTasks = document.createElement("div");
myTasks.classList.add("tasks");
myTasks.setAttribute("id", "myTasksID");

const myTasksTitle = document.createElement("span");
myTasksTitle.innerText = "TASKS";

const addTask = document.createElement("button");
addTask.classList.add("addTask");
addTask.innerText = "+";

addTask.setAttribute("id", "addStartTaskButton");
addTask.innerText = "+";
addTask.addEventListener("click", () => {
  (0,_taskContainer_js__WEBPACK_IMPORTED_MODULE_3__.clickAddTask)();
});
document.removeEventListener("click", _taskContainer_js__WEBPACK_IMPORTED_MODULE_3__.clickAddTask);

rightSide.appendChild(myTasks);
myTasks.appendChild(myTasksTitle);
myTasks.appendChild(addTask);
myTasks.appendChild((0,_taskContainer_js__WEBPACK_IMPORTED_MODULE_3__.addTaskForm)());
myTasks.appendChild((0,_forms_js__WEBPACK_IMPORTED_MODULE_4__.editTaskForm)());

// Child task element (task container)
const homeTaskContainer = document.createElement("div");
homeTaskContainer.classList.add("taskContainerFirst");
homeTaskContainer.setAttribute("id", "taskContainerId");

myTasks.appendChild(homeTaskContainer);

// Sum it up
contain.appendChild(rightSide);
document.body.appendChild(contain);

//
const listOfProjects = document.getElementById("listProjects");

if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage")) {
  // Is it the first time we run the application?

  if (stateUser !== null) {
    // Update the value
    let myLocalProjects = localStorage.getItem("localProjects");
    let objectLocalProjects = JSON.parse(myLocalProjects);

    let numberLocalProjects = objectLocalProjects.allProjects.length;
    console.log("number", objectLocalProjects.allProjects);
    if (numberLocalProjects > 0) {
      for (let i = 0; i < numberLocalProjects; i++) {
        let projectId = objectLocalProjects.allProjects[i];
        let myProject = localStorage.getItem(projectId);
        let myProjectParsed = JSON.parse(myProject);
        console.log("for id", myProjectParsed);
        let projectObject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.myProjectMethods)(myProjectParsed);
        let nameProject = projectObject.getProjectName();

        let createElement = (0,_projectsDom_js__WEBPACK_IMPORTED_MODULE_1__.elementProject)(nameProject, projectObject);
        listOfProjects.appendChild(createElement);
      }
    }
  }

  // First time user
  if (stateUser == null) {
    stateUser = "default";
    localStorage.setItem("stateApplication", stateUser);
    listOfProjects.appendChild(createElementSampleOne);
    listOfProjects.appendChild(createElementSampleTwo);
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.showTasks)(sampleProjectOne);
  }
}

if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage")) {
  listOfProjects.appendChild(createElementSampleOne);
  listOfProjects.appendChild(createElementSampleTwo);
  (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.showTasks)(sampleProjectOne);
}

// What happens when you refresh the page
if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage")) {
  let activeProjectName = localStorage.getItem("ActiveProject");

  if (activeProjectName !== null && activeProjectName !== "justDeleted") {
    let activeProject = localStorage.getItem(activeProjectName);

    // To use the object's methods
    let parsedActive = JSON.parse(activeProject);
    let activeProjectObject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.myProjectMethods)(parsedActive);

    (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(activeProjectObject);
    let activeProjectTasks = activeProjectObject.getTaskList();

    if (
      activeProject !== null &&
      activeProject !== undefined &&
      activeProjectTasks !== {} &&
      activeProjectName !== "justDeleted"
    ) {
      (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.showTasks)(activeProjectObject);
    }
  }
}

addTask.addEventListener("click", () => {
  (0,_taskContainer_js__WEBPACK_IMPORTED_MODULE_3__.clickAddTask)(_projects_js__WEBPACK_IMPORTED_MODULE_2__.activeProject);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLGdGQUFnRixPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFdBQVcsb0JBQW9CLFdBQVcsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsYUFBYSxPQUFPLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sUUFBUSxPQUFPLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsWUFBWSxhQUFhLFFBQVEsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sZUFBZSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxTQUFTLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxVQUFVLE1BQU0sWUFBWSxPQUFPLFdBQVcsT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksUUFBUSxZQUFZLE9BQU8sWUFBWSxRQUFRLFlBQVksUUFBUSxXQUFXLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLGFBQWEsS0FBSyxrQkFBa0IsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxTQUFTLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sTUFBTSxNQUFNLE9BQU8sYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLEtBQUssTUFBTSxPQUFPLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sU0FBUyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFdBQVcsS0FBSyxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sU0FBUyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxVQUFVLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxV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QUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkx3QztBQUNoQjs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSw2REFBZ0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGtCQUFrQjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZEQUFZO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSw2REFBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlCQUF5QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4REFBZ0I7QUFDNUM7O0FBRUEsNEJBQTRCLCtEQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBOztBQUVBLEtBQUssNkRBQWdCO0FBQ3JCO0FBQ0E7QUFDQSxFQUFFLHVEQUFTO0FBQ1g7O0FBRUE7QUFDQSxJQUFJLDZEQUFnQjtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsOERBQWdCOztBQUU5QyxJQUFJLDhEQUFnQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLE1BQU0sdURBQVM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtEQUFZLENBQUMsdURBQWE7QUFDNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzRG9tLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogV2UgbmVlZCB0aGUgXCJiZG86LW1vei1oYXMtZGlyLWF0dHJcIiBiaXQgYmVjYXVzZSBcImJkb1wiIGhhcyBsb3dlclxuICAgIHNwZWNpZmljaXR5IHRoYW4gdGhlIFwiOi1tb3otaGFzLWRpci1hdHRyXCIgc2VsZWN0b3IgYWJvdmUuICovXG5iZG8sXG5iZG86LW1vei1oYXMtZGlyLWF0dHIge1xuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZS1vdmVycmlkZTtcbn1cblxudGV4dGFyZWE6LW1vei1kaXItYXR0ci1saWtlLWF1dG8sXG5wcmU6LW1vei1kaXItYXR0ci1saWtlLWF1dG8ge1xuICAgIHVuaWNvZGUtYmlkaTogcGxhaW50ZXh0O1xufVxuXG4vKiBibG9ja3MgKi9cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmRpdixcbmR0LFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmZvcm0sXG5oZWFkZXIsXG5oZ3JvdXAsXG5odG1sLFxubWFpbixcbm5hdixcbnNlYXJjaCxcbnNlY3Rpb24sXG5zdW1tYXJ5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwXG59XG5cbnAsXG5kbCxcbm11bHRpY29sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG59XG5cbmRkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA0MHB4O1xufVxuXG5ibG9ja3F1b3RlLFxuZmlndXJlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNDBweDtcbn1cblxuYWRkcmVzcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xufVxuXG5oMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuNjdlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAuNjdlbTtcbn1cblxuaDIsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuODNlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAuODNlbTtcbn1cblxuaDMsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuMTdlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG59XG5cbmg0LFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS4wMGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS4zM2VtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEuMzNlbTtcbn1cblxuaDUsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC44M2VtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS42N2VtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEuNjdlbTtcbn1cblxuaDYsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuNjdlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIuMzNlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAyLjMzZW07XG59XG5cbmxpc3Rpbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG54bXAsXG5wcmUsXG5wbGFpbnRleHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG4vKiB0YWJsZXMgKi9cblxudGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAvKiBYWFhsZGIgZG8gd2Ugd2FudCB0aGlzIGlmIHdlJ3JlIGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZSA/ICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWluZGVudDogMDtcbn1cblxudGFibGVbYWxpZ249XCJsZWZ0XCJdIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxudGFibGVbYWxpZ249XCJyaWdodFwiXSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG5cbi8qIGJvcmRlciBjb2xsYXBzZSBydWxlcyAqL1xuXG4vKiBTZXQgaGlkZGVuIGlmIHdlIGhhdmUgJ2ZyYW1lJyBvciAncnVsZXMnIGF0dHJpYnV0ZS5cbiAgICAgIFNldCBpdCBvbiBhbGwgc2lkZXMgd2hlbiB3ZSBkbyBzbyB0aGVyZSdzIG1vcmUgY29uc2lzdGVuY3lcbiAgICAgIGluIHdoYXQgYXV0aG9ycyBzaG91bGQgZXhwZWN0ICovXG5cbi8qIFB1dCB0aGlzIGZpcnN0IHNvICdib3JkZXInIGFuZCAnZnJhbWUnIHJ1bGVzIGNhbiBvdmVycmlkZSBpdC4gKi9cbnRhYmxlW3J1bGVzXSB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xufVxuXG4vKiAnYm9yZGVyJyBiZWZvcmUgJ2ZyYW1lJyBzbyAnZnJhbWUnIG92ZXJyaWRlc1xuICAgICAgIEEgYm9yZGVyIHdpdGggYSBnaXZlbiB2YWx1ZSBzaG91bGQsIG9mIGNvdXJzZSwgcGFzcyB0aGF0IHZhbHVlXG4gICAgICAgYXMgdGhlIGJvcmRlci13aWR0aCBpbiBwaXhlbHMgLT4gYXR0ciBtYXBwaW5nICovXG5cbi8qIDotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIGlzIGxpa2UgW2JvcmRlcl06bm90KFtib3JkZXI9XCIwXCJdKSBleGNlcHQgaXRcbiAgICAgIGFsc28gY2hlY2tzIGZvciBvdGhlciB6ZXJvLWxpa2UgdmFsdWVzIGFjY29yZGluZyB0byBIVE1MIGF0dHJpYnV0ZVxuICAgICAgcGFyc2luZyBydWxlcyAqL1xudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xufVxuXG50YWJsZVtmcmFtZV0ge1xuICAgIGJvcmRlcjogdGhpbiBoaWRkZW47XG59XG5cbi8qIHNwZWNpZmljaXR5IG11c3QgYmVhdCB0YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIHJ1bGUgYWJvdmUgKi9cbnRhYmxlW2ZyYW1lPVwidm9pZFwiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwiYWJvdmVcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0IGhpZGRlbiBoaWRkZW4gaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cImJlbG93XCJdIHtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBoaWRkZW4gb3V0c2V0IGhpZGRlbjtcbn1cblxudGFibGVbZnJhbWU9XCJsaHNcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIGhpZGRlbiBoaWRkZW4gb3V0c2V0O1xufVxuXG50YWJsZVtmcmFtZT1cInJoc1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gb3V0c2V0IGhpZGRlbiBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwiaHNpZGVzXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldCBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwidnNpZGVzXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBvdXRzZXQ7XG59XG5cbnRhYmxlW2ZyYW1lPVwiYm94XCJdLFxudGFibGVbZnJhbWU9XCJib3JkZXJcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xufVxuXG5cbi8qIEludGVybmFsIFRhYmxlIEJvcmRlcnMgKi9cblxuLyogJ2JvcmRlcicgY2VsbCBib3JkZXJzIGZpcnN0ICovXG5cbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50cj50ZCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50cj50aCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50ZCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50aCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+dGQsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbn1cblxuLyogY29sbGFwc2Ugb25seSBpZiBydWxlcyBhcmUgcmVhbGx5IHNwZWNpZmllZCAqL1xudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJub25lXCJdLCBbcnVsZXM9XCJcIl0pIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4vKiBvbmx5IHNwZWNpZmllZCBydWxlcyBvdmVycmlkZSAnYm9yZGVyJyBzZXR0aW5nc1xuICAgKGluY3JlYXNlZCBzcGVjaWZpY2l0eSB0byBhY2hpZXZlIHRoaXMpICovXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+dHI+dGQsXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+Kj50cj50ZCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT50cj50aCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT4qPnRyPnRoLFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPnRkLFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPio+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT4qPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT50ZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+dGgge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT50cj50ZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT4qPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPio+dHI+dGgsXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+dGgge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJyb3dzXCJdPnRyLFxudGFibGVbcnVsZXNdW3J1bGVzPVwicm93c1wiXT4qPnRyIHtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ibG9jay1lbmQtc3R5bGU6IHNvbGlkO1xufVxuXG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImNvbHNcIl0+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJjb2xzXCJdPio+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJjb2xzXCJdPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiY29sc1wiXT4qPnRyPnRoIHtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPmNvbGdyb3VwIHtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPnRmb290LFxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPnRoZWFkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPnRib2R5IHtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ibG9jay1lbmQtc3R5bGU6IHNvbGlkO1xufVxuXG5cbi8qIGNhcHRpb24gaW5oZXJpdHMgZnJvbSB0YWJsZSBub3QgdGFibGUtb3V0ZXIgKi9cbmNhcHRpb24ge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwibGVmdFwiXTpkaXIobHRyKSB7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG59XG5cbnRhYmxlW2FsaWduPVwiY2VudGVyXCJdPmNhcHRpb25bYWxpZ249XCJsZWZ0XCJdOmRpcihydGwpIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwicmlnaHRcIl06ZGlyKGx0cikge1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG59XG5cbnRhYmxlW2FsaWduPVwiY2VudGVyXCJdPmNhcHRpb25bYWxpZ249XCJyaWdodFwiXTpkaXIocnRsKSB7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG59XG5cbnRyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XG59XG5cbmNvbCB7XG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uO1xufVxuXG5jb2xncm91cCB7XG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uLWdyb3VwO1xufVxuXG50Ym9keSB7XG4gICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnRoZWFkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudGZvb3Qge1xuICAgIGRpc3BsYXk6IHRhYmxlLWZvb3Rlci1ncm91cDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiBmb3IgWEhUTUwgdGFibGVzIHdpdGhvdXQgdGJvZHkgKi9cbnRhYmxlPnRyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG50ZCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcbiAgICB0ZXh0LWFsaWduOiB1bnNldDtcbiAgICBwYWRkaW5nOiAxcHg7XG59XG5cbnRoIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlci1vci1pbmhlcml0O1xufVxuXG46aXModHIsIHRib2R5LCB0aGVhZCwgdGZvb3QsIHRhYmxlKT5mb3JtOi1tb3otaXMtaHRtbCB7XG4gICAgLyogSW1wb3J0YW50OiBkb24ndCBzaG93IHRoZXNlIGZvcm1zIGluIEhUTUwgKi9cbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlW2JvcmRlcmNvbG9yXT50Ym9keSxcbnRhYmxlW2JvcmRlcmNvbG9yXT50aGVhZCxcbnRhYmxlW2JvcmRlcmNvbG9yXT50Zm9vdCxcbnRhYmxlW2JvcmRlcmNvbG9yXT5jb2wsXG50YWJsZVtib3JkZXJjb2xvcl0+Y29sZ3JvdXAsXG50YWJsZVtib3JkZXJjb2xvcl0+dHIsXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cixcbnRhYmxlW2JvcmRlcmNvbG9yXT50cj50ZCxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyPnRkLFxudGFibGVbYm9yZGVyY29sb3JdPnRyPnRoLFxudGFibGVbYm9yZGVyY29sb3JdPio+dHI+dGgge1xuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cblxuLyogaW5saW5lcyAqL1xuXG5xOmJlZm9yZSB7XG4gICAgY29udGVudDogb3Blbi1xdW90ZTtcbn1cblxucTphZnRlciB7XG4gICAgY29udGVudDogY2xvc2UtcXVvdGU7XG59XG5cbmIsXG5zdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmksXG5jaXRlLFxuZW0sXG52YXIsXG5kZm4ge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxudHQsXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gICAgZm9udC1mYW1pbHk6IC1tb3otZml4ZWQ7XG59XG5cbnUsXG5pbnMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5zLFxuc3RyaWtlLFxuZGVsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuYmlnIHtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuc21hbGwge1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuc3ViIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuc3VwIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG5ub2JyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5tYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiBNYXJrO1xuICAgIGNvbG9yOiBNYXJrVGV4dDtcbn1cblxuLyogdGl0bGVzICovXG5hYmJyW3RpdGxlXSxcbmFjcm9ueW1bdGl0bGVdIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGRvdHRlZCB1bmRlcmxpbmU7XG59XG5cbi8qIGxpc3RzICovXG5cbnVsLFxubWVudSxcbmRpciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcbn1cblxudWwsXG5vbCxcbm1lbnUge1xuICAgIGNvdW50ZXItcmVzZXQ6IGxpc3QtaXRlbTtcbn1cblxub2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG59XG5cbmxpIHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgdGV4dC1hbGlnbjogbWF0Y2gtcGFyZW50O1xufVxuXG4vKiBuZXN0ZWQgbGlzdHMgaGF2ZSBubyB0b3AvYm90dG9tIG1hcmdpbnMgKi9cbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIHVsLFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgb2wsXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSBkaXIsXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSBtZW51LFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGwge1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xufVxuXG4vKiAyIGRlZXAgdW5vcmRlcmVkIGxpc3RzIHVzZSBhIGNpcmNsZSAqL1xuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSB1bCxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgbWVudSxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgZGlyIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbn1cblxuLyogMyBkZWVwIChvciBtb3JlKSB1bm9yZGVyZWQgbGlzdHMgdXNlIGEgc3F1YXJlICovXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgdWwsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgbWVudSxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBkaXIge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xufVxuXG5cbi8qIGxlYWZzICovXG5cbi8qIDxocj4gbm9zaGFkZSBhbmQgY29sb3IgYXR0cmlidXRlcyBhcmUgaGFuZGxlZCBjb21wbGV0ZWx5IGJ5XG4gICogSFRNTEhSRWxlbWVudDo6TWFwQXR0cmlidXRlc0ludG9SdWxlLlxuICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RoZS1oci1lbGVtZW50LTJcbiAgKi9cbmhyIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC41ZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLyogRklYTUU6IFRoaXMgaXMgbm90IHJlYWxseSBwZXIgc3BlYyAqL1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ocltzaXplPVwiMVwiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lIG5vbmUgbm9uZTtcbn1cblxuLyogTm90ZSB0aGF0IHdlIG9ubHkgaW50ZW5kIGZvciB0aGUgYWx0IGNvbnRlbnQgdG8gc2hvdyB1cCBpZiB0aGUgaW1hZ2UgaXNcbiAgKiBicm9rZW4uIEJ1dCBub24tYnJva2VuIGltYWdlcy9pbnB1dHMgd2lsbCBoYXZlIGEgcmVwbGFjZWQgYm94LCBhbmQgdGh1cyB3ZVxuICAqIHdvbid0IHdlIGRvbid0IGdlbmVyYXRlIHRoZSBwc2V1ZG8tZWxlbWVudCBhbnl3YXlzLiBUaGlzIHByZXZlbnRzXG4gICogdW5uZWNlc3NhcnkgcmVmcmFtaW5nIHdoZW4gaW1hZ2VzIGJlY29tZSBicm9rZW4gLyBub24tYnJva2VuLiAqL1xuaW5wdXRbdHlwZT1pbWFnZV06OmJlZm9yZSxcbmltZzo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAtbW96LWFsdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgdW5pY29kZS1iaWRpOiBpc29sYXRlO1xufVxuXG5pbWdbdXNlbWFwXSxcbm9iamVjdFt1c2VtYXBdIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuZnJhbWVzZXQge1xuICAgIGRpc3BsYXk6IGJsb2NrICEgaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBjbGlwO1xuICAgIHBvc2l0aW9uOiBzdGF0aWMgISBpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IG5vbmUgISBpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICEgaW1wb3J0YW50O1xufVxuXG5mcmFtZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhIGltcG9ydGFudDtcbn1cblxuaWZyYW1lIHtcbiAgICBib3JkZXI6IDJweCBpbnNldDtcbn1cblxuc3BhY2VyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljICEgaW1wb3J0YW50O1xuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xufVxuXG5jYW52YXMge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5pZnJhbWU6Zm9jdXMtdmlzaWJsZSxcbmJvZHk6Zm9jdXMtdmlzaWJsZSxcbmh0bWw6Zm9jdXMtdmlzaWJsZSB7XG4gICAgLyogVGhlc2UgZWxlbWVudHMgaGlzdG9yaWNhbGx5IGRvbid0IHNob3cgb3V0bGluZXMgd2hlbiBmb2N1c2VkIGJ5IGRlZmF1bHQuXG4gICAgKiBXZSBjb3VsZCBjb25zaWRlciBjaGFuZ2luZyB0aGF0IGlmIG5lZWRlZC4gKi9cbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xufVxuXG4vKiBoaWRkZW4gZWxlbWVudHM6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2hpZGRlbi1lbGVtZW50c1xuICAqXG4gICogRXhjZXB0aW9uczpcbiAgKlxuICAqICAqIGFyZWEgZGVjbGFyYXRpb24gbmVlZHMgdG8gYmUgIWltcG9ydGFudCwgc2VlIGJlbG93IC8gYnVnIDEzNTA0MC4gIFRoYXQnc1xuICAqICAgIGhhY2t5IGFuZCBicm9rZW4uXG4gICpcbiAgKiAgKiBbaGlkZGVuXSBpcyBpbXBsZW1lbnRlZCBhcyBhIHByZXNlbnRhdGlvbiBhdHRyaWJ1dGUgdG8gYXZvaWQgYSBnbG9iYWxcbiAgKiAgICBzZWxlY3RvciBpbiBhIFVBIHNoZWV0LlxuICAqL1xuYmFzZSxcbmJhc2Vmb250LFxuZGF0YWxpc3QsXG5oZWFkLFxubGluayxcbm1ldGEsXG5ub2VtYmVkLFxubm9mcmFtZXMsXG5wYXJhbSxcbnJwLFxuc2NyaXB0LFxuc3R5bGUsXG50ZW1wbGF0ZSxcbnRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5hcmVhIHtcbiAgICAvKiBEb24ndCBnaXZlIGl0IGZyYW1lcyBvdGhlciB0aGFuIGl0cyBpbWFnZWZyYW1lICovXG4gICAgZGlzcGxheTogbm9uZSAhIGltcG9ydGFudDtcbn1cblxuaWZyYW1lOmZ1bGxzY3JlZW4ge1xuICAgIC8qIGlmcmFtZXMgaW4gZnVsbC1zY3JlZW4gbW9kZSBkb24ndCBzaG93IGEgYm9yZGVyLiAqL1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi8qIERldGFpbHMgYW5kIHN1bW1hcnlcbiAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtZGV0YWlscy1hbmQtc3VtbWFyeS1lbGVtZW50c1xuICAqXG4gICogTm90ZSB0aGF0IHRoZXNlIHJ1bGVzIG5lZWQgdG8gYmUgZHVwbGljYXRlZCBpbiBkZXRhaWxzLmNzcyBmb3IgdGhlIGFub255bW91c1xuICAqIHN1bW1hcnksIHdoaWNoIHdvdWxkbid0IG1hdGNoIG90aGVyd2lzZS5cbiAgKlxuICAqIFRoZSBzcGVjIGhlcmUgc2F5cyBzb21ldGhpbmcgZGlmZmVyZW50LCBzZWVcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzg2MTBcbiAgKi9cbmRldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlIHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtaXRlbSAwO1xuICAgIGxpc3Qtc3R5bGU6IGRpc2Nsb3N1cmUtY2xvc2VkIGluc2lkZTtcbn1cblxuZGV0YWlsc1tvcGVuXT5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzY2xvc3VyZS1vcGVuO1xufVxuXG4vKiBtZWRpYSBlbGVtZW50cyAqL1xudmlkZW8ge1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbnZpZGVvPmltZzotbW96LW5hdGl2ZS1hbm9ueW1vdXMge1xuICAgIC8qIFZpZGVvIHBvc3RlciBpbWFnZXMgc2hvdWxkIHJlbmRlciB3aXRoIHRoZSB2aWRlbyBlbGVtZW50J3MgXCJvYmplY3QtZml0XCIgJlxuICAgICAgXCJvYmplY3QtcG9zaXRpb25cIiBwcm9wZXJ0aWVzICovXG4gICAgb2JqZWN0LWZpdDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYXVkaW9bY29udHJvbHNdIHtcbiAgICAvKiBUaGlzIGVuc3VyZXMgdGhhdCBpbnRyaW5zaWMgc2l6aW5nIGNhbiByZWxpYWJseSBzaHJpbmt3cmFwIG91clxuICAgICAgIGNvbnRyb2xzICh3aGljaCBhcmUgYWxzbyBhbHdheXMgaG9yaXpvbnRhbCkgYW5kIHByb2R1Y2UgYVxuICAgICAgIHJlYXNvbmFibGUgaW50cmluc2ljIHNpemUgZnJvbSB0aGVtLiAqL1xuICAgIHdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50O1xufVxuXG4qfCo6Oi1tb3otaHRtbC1jYW52YXMtY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAvKiB3ZSB3YW50IHRvIGJlIGFuIGFic29sdXRlIGFuZCBmaXhlZCBjb250YWluZXIgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKSAhaW1wb3J0YW50O1xufVxuXG52aWRlbz4uY2FwdGlvbi1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qKlxuICAqIFRoZSBwc2V1ZG8gZWxlbWVudCB3b24ndCBpbmhlcml0IENTUyBzdHlsZXMgZnJvbSBpdHMgZGlyZWN0IHBhcmVudCwgXFxgOjpjdWVcXGBcbiAgKiB3b3VsZCBhY3R1YWxseSBpbmhlcml0IHN0eWxlcyBmcm9tIHZpZGVvIGJlY2F1c2UgaXQncyB2aWRlbydzIHBzZXVkbyBlbGVtZW50LlxuICAqIFRoZXJlZm9yZSwgd2UgaGF2ZSB0byBleHBsaWNpdGx5IHNldCBzb21lIHN0eWxlcyB3aGljaCBhcmUgYWxyZWFkeSBkZWZpbmVkXG4gICogaW4gaXRzIHBhcmVudCBlbGVtZW50IGluIHZ0dC5qc20uXG4gICovXG46OmN1ZSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiB2YXIoLS1jdWUtZm9udC1zaXplKTtcbiAgICB3cml0aW5nLW1vZGU6IHZhcigtLWN1ZS13cml0aW5nLW1vZGUsIGluaGVyaXQpO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgLyogVE9ETyA6IGVuYWJsZSB1bmljb2RlLWJpZGksIHJpZ2h0IG5vdyBlbmFibGUgaXQgd291bGQgY2F1c2UgaW5jb3JyZWN0XG4gICAgICAgICAgICAgZGlzcGxheSBkaXJlY3Rpb24sIG1heWJlIHJlbGF0ZWQgd2l0aCBidWcgMTU1ODQzMS4gKi9cbn1cblxuLyogPGRpYWxvZz4gZWxlbWVudCBzdHlsZXMgKi9cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAwO1xuICAgIGluc2V0LWlubGluZS1lbmQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci13aWR0aDogaW5pdGlhbDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogaW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IENhbnZhcztcbiAgICBjb2xvcjogQ2FudmFzVGV4dDtcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XG59XG5cbmRpYWxvZzpub3QoW29wZW5dKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuZGlhbG9nOm1vZGFsIHtcbiAgICAtbW96LXRvcC1sYXllcjogdG9wICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDA7XG4gICAgaW5zZXQtYmxvY2stZW5kOiAwO1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHggLSAyZW0pO1xufVxuXG4vKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNmbG93LWNvbnRlbnQtMyAqL1xuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5tYXJxdWVlIHtcbiAgICBpbmxpbmUtc2l6ZTogLW1vei1hdmFpbGFibGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxubWFycXVlZTppcyhbZGlyZWN0aW9uPVwidXBcIl0sIFtkaXJlY3Rpb249XCJkb3duXCJdKSB7XG4gICAgYmxvY2stc2l6ZTogMjAwcHg7XG59XG5cbi8qIFJ1YnkgKi9cblxucnVieSB7XG4gICAgZGlzcGxheTogcnVieTtcbn1cblxucmIge1xuICAgIGRpc3BsYXk6IHJ1YnktYmFzZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5ydCB7XG4gICAgZGlzcGxheTogcnVieS10ZXh0O1xufVxuXG5ydGMge1xuICAgIGRpc3BsYXk6IHJ1YnktdGV4dC1jb250YWluZXI7XG59XG5cbnJ0YyxcbnJ0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogNTAlO1xuICAgIC1tb3otbWluLWZvbnQtc2l6ZS1yYXRpbzogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5AbWVkaWEgbm90ICgtbW96LXBsYXRmb3JtOiB3aW5kb3dzKSB7XG5cbiAgICBydGMsXG4gICAgcnQge1xuICAgICAgICAvKiBUaGUgd2lkZWx5LXVzZWQgV2luZG93cyBmb250IE1laXJ5byBkb2Vzbid0IHdvcmsgZmluZSB3aXRoIHRoaXNcbiAgICAgKiBzZXR0aW5nLCBzbyBkaXNhYmxlIHRoaXMgb24gV2luZG93cy4gV2Ugc2hvdWxkIHJlLWVuYWJsZSBpdCBvbmNlXG4gICAgICogTWljcm9zb2Z0IGZpeGVzIHRoaXMgaXNzdWUuIFNlZSBidWcgMTE2NDI3OS4gKi9cbiAgICAgICAgZm9udC12YXJpYW50LWVhc3QtYXNpYW46IHJ1Ynk7XG4gICAgfVxufVxuXG5ydGMsXG5ydCB7XG4gICAgdGV4dC1lbXBoYXNpczogbm9uZTtcbn1cblxucnRjOmxhbmcoemgpLFxucnQ6bGFuZyh6aCkge1xuICAgIHJ1YnktYWxpZ246IGNlbnRlcjtcbn1cblxucnRjOmxhbmcoemgtVFcpLFxucnQ6bGFuZyh6aC1UVykge1xuICAgIGZvbnQtc2l6ZTogMzAlO1xuICAgIC8qIGJvcG9tb2ZvICovXG4gICAgLW1vei1taW4tZm9udC1zaXplLXJhdGlvOiAzMCU7XG59XG5cbnJ0Yz5ydCB7XG4gICAgZm9udC1zaXplOiB1bnNldDtcbn1cblxucnVieSxcbnJiLFxucnQsXG5ydGMge1xuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcbn1cblxuLyogU2hhZG93IERPTSB2MVxuICAqIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtc2NvcGluZy8jc2xvdHMtaW4tc2hhZG93LXRyZWUgKi9cbnNsb3Qge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4vKiBVbi1pbnZlcnQgaW1hZ2VzIGFuZCB2aWRlb3MgZm9yIHVzZXJzIHVzaW5nIGludmVydGVkIGNvbG9ycy5cbiAgKiBcIlVzZXIgYWdlbnRzIG11c3QgYWRkIHRoZSBmb2xsb3dpbmcgcnVsZSB0byB0aGVpciBVQSBzdHlsZSBzaGVldFwiXG4gICogaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy01LyNpbnZlcnRlZFxuICAqL1xuQG1lZGlhIChpbnZlcnRlZC1jb2xvcnMpIHtcblxuICAgIGltZzpub3QocGljdHVyZSA+IGltZyksXG4gICAgcGljdHVyZSxcbiAgICB2aWRlbyB7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgIH1cbn1cblxuLyogSGlkZSBub3NjcmlwdCBlbGVtZW50cyBpZiBzY3JpcHRpbmcgaXMgZW5hYmxlZCAqL1xuQG1lZGlhIChzY3JpcHRpbmcpIHtcbiAgICBub3NjcmlwdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBwcmludCB7XG5cbiAgICBpbnB1dCxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3QsXG4gICAgYnV0dG9uLFxuICAgIGRldGFpbHMge1xuICAgICAgICAtbW96LXVzZXItaW5wdXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi8qIFBvcG92ZXIgVUEgc3R5bGUsIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2Zsb3ctY29udGVudC0zICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWEtcXVlcnktbm8taW52YWxpZCAqL1xuQG1lZGlhICgtbW96LWJvb2wtcHJlZjogXCJkb20uZWxlbWVudC5wb3BvdmVyLmVuYWJsZWRcIikge1xuICAgIFtwb3BvdmVyXTpub3QoOnBvcG92ZXItb3Blbik6bm90KGRpYWxvZ1tvcGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIGRpYWxvZzpwb3BvdmVyLW9wZW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBbcG9wb3Zlcl0ge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgcGFkZGluZzogMC4yNWVtO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgY29sb3I6IENhbnZhc1RleHQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IENhbnZhcztcbiAgICB9XG5cbiAgICA6cG9wb3Zlci1vcGVuIHtcbiAgICAgICAgLW1vei10b3AtbGF5ZXI6IHRvcDtcbiAgICB9XG5cbiAgICA6cG9wb3Zlci1vcGVuOjpiYWNrZHJvcCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuXG5cblxuXG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcblxuXG59XG5cbi5oZWFkZXJQYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCA0MSwgNDEsIDAuMTA3KTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHBhZGRpbmc6IDAuOHJlbSAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiA2MzNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4vKiBcbi5jb250YWluZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xufSAqL1xuXG5cbi5sZWZ0U2VjdGlvbiB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJpZ2h0U2VjdGlvbiB7XG4gICAgd2lkdGg6IDY1JTtcblxuICAgIGZsb2F0OiByaWdodDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG59XG5cblxuLnByb2plY3RzIHtcbiAgICBtYXJnaW46IDVyZW0gYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2FsbW9uO1xuICAgIHBhZGRpbmc6IDVweCAzcHggMTVweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4jYnV0dG9uUHJvamVjdEZvcm0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMThweDtcbn1cblxuI2xhYmVsUHJvamVjdCB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbiNpbnB1dFByb2plY3Qge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XG59XG5cbi50YXNrcyB7XG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XG4gICAgd2lkdGg6IDcwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NhbG1vbjtcbiAgICBwYWRkaW5nOiA1cHggMCAxNXB4IDA7XG4gICAgLyogei1pbmRleDogMTsgKi9cbn1cblxuLnRhc2tzVW5pdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2toYWtpO1xufVxuXG4udGFza1VuaXRJbXBvcnRhbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZFxufVxuXG4udGFza1VuaXRVcmdlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XG59XG5cblxuXG4ucHJvamVjdHNVbml0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcblxufVxuXG4uYnV0dG9uUHJvamVjdHMsXG4uYWN0aXZlUHJvamVjdCB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDU7XG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHBhZGRpbmc6IDhweDtcblxufVxuXG4ucmVtb3ZlUHJvamVjdHMge1xuICAgIGdyaWQtY29sdW1uOiA3IC8gODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxufVxuXG4uYWN0aXZlUHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jbGlzdFByb2plY3RzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmhpZGVSZW1vdmVCdXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuI3N0YXJ0UHJvamVjdEJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuXG5cbiNhZGRQcm9qZWN0RGl2IHtcblxuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAxNTEsIDIyMik7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMXJlbTtcbiAgICB0b3A6IDFyZW07XG59XG5cbiNlZGl0VGFza0RpdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogNC4ycmVtO1xuICAgIG1pbi13aWR0aDogMzgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuXG59XG5cbiNhZGRUYXNrRGl2IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDUlO1xuICAgIHRvcDogNHJlbTtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xufVxuXG4jZWRpdFRhc2tGb3JtIHtcbiAgICBtYXJnaW46IDhweDtcbn1cblxuI2FkZFRhc2tGb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgbWFyZ2luOiA4cHg7XG59XG5cblxuI2FkZFByb2plY3RGb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyNTEsIDI1NCk7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDhweDtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xufVxuXG4udGFza0NvbnRhaW5lckZpcnN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNsZWFyOiByaWdodDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cblxuXG5cbi50YXNrQ29udGFpbmVyRmlyc3Q+ZGl2IHtcbiAgICBtYXJnaW46IDVweDtcblxufVxuXG5zcGFuIHtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG4uYWRkVGFzayB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGFiZWxQcmlvcml0eSB7XG4gICAgLyogZGlzcGxheTogOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxubGFiZWxbZm9yPVwibmV3VGFza1wiXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5sYWJlbFtmb3I9XCJ0ZXh0QXJlYVRhc2tcIl0ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNkYXRlRGl2LFxuI3ByaW9yaXR5RGl2LFxuI25vdGVzRGl2IHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbiNwcmlvcml0eSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5teU5vdGVzIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgODAsIDI1NSk7XG4gICAgcGFkZGluZzogMC42cmVtO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi50YXNrU2V0dGluZ3Mge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvIDAuNXJlbSBhdXRvO1xufVxuXG4udGFza1NldHRpbmdzPmJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbi50YXNrQ29tcGxldGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xufVxuXG4udGFza0NvbXBsZXRlZCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG59XG5cbi50YXNrQ29tcGxldGVkIC5idXR0b25FZGl0VGFzayB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiAucmVtb3ZlVGFzayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7K0RBQytEO0FBQy9EOztJQUVJLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSx1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O0FBQ2hCOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTs7O0dBR0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogV2UgbmVlZCB0aGUgXFxcImJkbzotbW96LWhhcy1kaXItYXR0clxcXCIgYml0IGJlY2F1c2UgXFxcImJkb1xcXCIgaGFzIGxvd2VyXFxuICAgIHNwZWNpZmljaXR5IHRoYW4gdGhlIFxcXCI6LW1vei1oYXMtZGlyLWF0dHJcXFwiIHNlbGVjdG9yIGFib3ZlLiAqL1xcbmJkbyxcXG5iZG86LW1vei1oYXMtZGlyLWF0dHIge1xcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGUtb3ZlcnJpZGU7XFxufVxcblxcbnRleHRhcmVhOi1tb3otZGlyLWF0dHItbGlrZS1hdXRvLFxcbnByZTotbW96LWRpci1hdHRyLWxpa2UtYXV0byB7XFxuICAgIHVuaWNvZGUtYmlkaTogcGxhaW50ZXh0O1xcbn1cXG5cXG4vKiBibG9ja3MgKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZGl2LFxcbmR0LFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmZvcm0sXFxuaGVhZGVyLFxcbmhncm91cCxcXG5odG1sLFxcbm1haW4sXFxubmF2LFxcbnNlYXJjaCxcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDBcXG59XFxuXFxucCxcXG5kbCxcXG5tdWx0aWNvbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbn1cXG5cXG5kZCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA0MHB4O1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbmZpZ3VyZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA0MHB4O1xcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNDBweDtcXG59XFxuXFxuYWRkcmVzcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmNlbnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IC42N2VtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAuNjdlbTtcXG59XFxuXFxuaDIsXFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IC44M2VtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAuODNlbTtcXG59XFxuXFxuaDMsXFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDEuMTdlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxufVxcblxcbmg0LFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4wMGVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxLjMzZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEuMzNlbTtcXG59XFxuXFxuaDUsXFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMC44M2VtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxLjY3ZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEuNjdlbTtcXG59XFxuXFxuaDYsXFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDAuNjdlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMi4zM2VtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAyLjMzZW07XFxufVxcblxcbmxpc3Rpbmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1mYW1pbHk6IC1tb3otZml4ZWQ7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbn1cXG5cXG54bXAsXFxucHJlLFxcbnBsYWludGV4dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LWZhbWlseTogLW1vei1maXhlZDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG59XFxuXFxuLyogdGFibGVzICovXFxuXFxudGFibGUge1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcXG4gICAgLyogWFhYbGRiIGRvIHdlIHdhbnQgdGhpcyBpZiB3ZSdyZSBib3JkZXItY29sbGFwc2U6Y29sbGFwc2UgPyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB0ZXh0LWluZGVudDogMDtcXG59XFxuXFxudGFibGVbYWxpZ249XFxcImxlZnRcXFwiXSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwicmlnaHRcXFwiXSB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcblxcbi8qIGJvcmRlciBjb2xsYXBzZSBydWxlcyAqL1xcblxcbi8qIFNldCBoaWRkZW4gaWYgd2UgaGF2ZSAnZnJhbWUnIG9yICdydWxlcycgYXR0cmlidXRlLlxcbiAgICAgIFNldCBpdCBvbiBhbGwgc2lkZXMgd2hlbiB3ZSBkbyBzbyB0aGVyZSdzIG1vcmUgY29uc2lzdGVuY3lcXG4gICAgICBpbiB3aGF0IGF1dGhvcnMgc2hvdWxkIGV4cGVjdCAqL1xcblxcbi8qIFB1dCB0aGlzIGZpcnN0IHNvICdib3JkZXInIGFuZCAnZnJhbWUnIHJ1bGVzIGNhbiBvdmVycmlkZSBpdC4gKi9cXG50YWJsZVtydWxlc10ge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xcbn1cXG5cXG4vKiAnYm9yZGVyJyBiZWZvcmUgJ2ZyYW1lJyBzbyAnZnJhbWUnIG92ZXJyaWRlc1xcbiAgICAgICBBIGJvcmRlciB3aXRoIGEgZ2l2ZW4gdmFsdWUgc2hvdWxkLCBvZiBjb3Vyc2UsIHBhc3MgdGhhdCB2YWx1ZVxcbiAgICAgICBhcyB0aGUgYm9yZGVyLXdpZHRoIGluIHBpeGVscyAtPiBhdHRyIG1hcHBpbmcgKi9cXG5cXG4vKiA6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyBpcyBsaWtlIFtib3JkZXJdOm5vdChbYm9yZGVyPVxcXCIwXFxcIl0pIGV4Y2VwdCBpdFxcbiAgICAgIGFsc28gY2hlY2tzIGZvciBvdGhlciB6ZXJvLWxpa2UgdmFsdWVzIGFjY29yZGluZyB0byBIVE1MIGF0dHJpYnV0ZVxcbiAgICAgIHBhcnNpbmcgcnVsZXMgKi9cXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcXG59XFxuXFxudGFibGVbZnJhbWVdIHtcXG4gICAgYm9yZGVyOiB0aGluIGhpZGRlbjtcXG59XFxuXFxuLyogc3BlY2lmaWNpdHkgbXVzdCBiZWF0IHRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8gcnVsZSBhYm92ZSAqL1xcbnRhYmxlW2ZyYW1lPVxcXCJ2b2lkXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcXG59XFxuXFxudGFibGVbZnJhbWU9XFxcImFib3ZlXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IG91dHNldCBoaWRkZW4gaGlkZGVuIGhpZGRlbjtcXG59XFxuXFxudGFibGVbZnJhbWU9XFxcImJlbG93XFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBoaWRkZW4gb3V0c2V0IGhpZGRlbjtcXG59XFxuXFxudGFibGVbZnJhbWU9XFxcImxoc1xcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gaGlkZGVuIGhpZGRlbiBvdXRzZXQ7XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJyaHNcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIG91dHNldCBoaWRkZW4gaGlkZGVuO1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwiaHNpZGVzXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IG91dHNldCBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJ2c2lkZXNcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIG91dHNldDtcXG59XFxuXFxudGFibGVbZnJhbWU9XFxcImJveFxcXCJdLFxcbnRhYmxlW2ZyYW1lPVxcXCJib3JkZXJcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xcbn1cXG5cXG5cXG4vKiBJbnRlcm5hbCBUYWJsZSBCb3JkZXJzICovXFxuXFxuLyogJ2JvcmRlcicgY2VsbCBib3JkZXJzIGZpcnN0ICovXFxuXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz4qPnRyPnRkLFxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50cj50aCxcXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dGQsXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz4qPnRoLFxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+dGQsXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz50aCB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXG59XFxuXFxuLyogY29sbGFwc2Ugb25seSBpZiBydWxlcyBhcmUgcmVhbGx5IHNwZWNpZmllZCAqL1xcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVxcXCJub25lXFxcIl0sIFtydWxlcz1cXFwiXFxcIl0pIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLyogb25seSBzcGVjaWZpZWQgcnVsZXMgb3ZlcnJpZGUgJ2JvcmRlcicgc2V0dGluZ3NcXG4gICAoaW5jcmVhc2VkIHNwZWNpZmljaXR5IHRvIGFjaGlldmUgdGhpcykgKi9cXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPnRyPnRkLFxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVxcXCJcXFwiXSk+Kj50cj50ZCxcXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPnRyPnRoLFxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVxcXCJcXFwiXSk+Kj50cj50aCxcXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPnRkLFxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVxcXCJcXFwiXSk+dGgge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+dHI+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+Kj50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT50cj50aCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT4qPnRyPnRoLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPnRoIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+dHI+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJhbGxcXFwiXT4qPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+dHI+dGgsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJhbGxcXFwiXT4qPnRyPnRoLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJhbGxcXFwiXT50aCB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJyb3dzXFxcIl0+dHIsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJyb3dzXFxcIl0+Kj50ciB7XFxuICAgIGJvcmRlci1ibG9jay1zdGFydC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWJsb2NrLWVuZC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWJsb2NrLWVuZC1zdHlsZTogc29saWQ7XFxufVxcblxcblxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiY29sc1xcXCJdPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiY29sc1xcXCJdPio+dHI+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJjb2xzXFxcIl0+dHI+dGgsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJjb2xzXFxcIl0+Kj50cj50aCB7XFxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWlubGluZS1lbmQtc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImdyb3Vwc1xcXCJdPmNvbGdyb3VwIHtcXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWlubGluZS1lbmQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItaW5saW5lLWVuZC1zdHlsZTogc29saWQ7XFxufVxcblxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiZ3JvdXBzXFxcIl0+dGZvb3QsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJncm91cHNcXFwiXT50aGVhZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImdyb3Vwc1xcXCJdPnRib2R5IHtcXG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItYmxvY2stZW5kLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItYmxvY2stZW5kLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuXFxuLyogY2FwdGlvbiBpbmhlcml0cyBmcm9tIHRhYmxlIG5vdCB0YWJsZS1vdXRlciAqL1xcbmNhcHRpb24ge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJjZW50ZXJcXFwiXT5jYXB0aW9uIHtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJjZW50ZXJcXFwiXT5jYXB0aW9uW2FsaWduPVxcXCJsZWZ0XFxcIl06ZGlyKGx0cikge1xcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcXG59XFxuXFxudGFibGVbYWxpZ249XFxcImNlbnRlclxcXCJdPmNhcHRpb25bYWxpZ249XFxcImxlZnRcXFwiXTpkaXIocnRsKSB7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJjZW50ZXJcXFwiXT5jYXB0aW9uW2FsaWduPVxcXCJyaWdodFxcXCJdOmRpcihsdHIpIHtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcXG59XFxuXFxudGFibGVbYWxpZ249XFxcImNlbnRlclxcXCJdPmNhcHRpb25bYWxpZ249XFxcInJpZ2h0XFxcIl06ZGlyKHJ0bCkge1xcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcXG59XFxuXFxudHIge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xcbn1cXG5cXG5jb2wge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jb2x1bW47XFxufVxcblxcbmNvbGdyb3VwIHtcXG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uLWdyb3VwO1xcbn1cXG5cXG50Ym9keSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxudGhlYWQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbnRmb290IHtcXG4gICAgZGlzcGxheTogdGFibGUtZm9vdGVyLWdyb3VwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKiBmb3IgWEhUTUwgdGFibGVzIHdpdGhvdXQgdGJvZHkgKi9cXG50YWJsZT50ciB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbnRkIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XFxuICAgIHRleHQtYWxpZ246IHVuc2V0O1xcbiAgICBwYWRkaW5nOiAxcHg7XFxufVxcblxcbnRoIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxcHg7XFxuICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyLW9yLWluaGVyaXQ7XFxufVxcblxcbjppcyh0ciwgdGJvZHksIHRoZWFkLCB0Zm9vdCwgdGFibGUpPmZvcm06LW1vei1pcy1odG1sIHtcXG4gICAgLyogSW1wb3J0YW50OiBkb24ndCBzaG93IHRoZXNlIGZvcm1zIGluIEhUTUwgKi9cXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG50YWJsZVtib3JkZXJjb2xvcl0+dGJvZHksXFxudGFibGVbYm9yZGVyY29sb3JdPnRoZWFkLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT50Zm9vdCxcXG50YWJsZVtib3JkZXJjb2xvcl0+Y29sLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT5jb2xncm91cCxcXG50YWJsZVtib3JkZXJjb2xvcl0+dHIsXFxudGFibGVbYm9yZGVyY29sb3JdPio+dHIsXFxudGFibGVbYm9yZGVyY29sb3JdPnRyPnRkLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyPnRkLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT50cj50aCxcXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cj50aCB7XFxuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyogaW5saW5lcyAqL1xcblxcbnE6YmVmb3JlIHtcXG4gICAgY29udGVudDogb3Blbi1xdW90ZTtcXG59XFxuXFxucTphZnRlciB7XFxuICAgIGNvbnRlbnQ6IGNsb3NlLXF1b3RlO1xcbn1cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbmksXFxuY2l0ZSxcXG5lbSxcXG52YXIsXFxuZGZuIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG50dCxcXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IC1tb3otZml4ZWQ7XFxufVxcblxcbnUsXFxuaW5zIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbnMsXFxuc3RyaWtlLFxcbmRlbCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5iaWcge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxufVxcblxcbnN1YiB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG59XFxuXFxuc3VwIHtcXG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxufVxcblxcbm5vYnIge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5tYXJrIHtcXG4gICAgYmFja2dyb3VuZDogTWFyaztcXG4gICAgY29sb3I6IE1hcmtUZXh0O1xcbn1cXG5cXG4vKiB0aXRsZXMgKi9cXG5hYmJyW3RpdGxlXSxcXG5hY3JvbnltW3RpdGxlXSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogZG90dGVkIHVuZGVybGluZTtcXG59XFxuXFxuLyogbGlzdHMgKi9cXG5cXG51bCxcXG5tZW51LFxcbmRpciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xcbn1cXG5cXG51bCxcXG5vbCxcXG5tZW51IHtcXG4gICAgY291bnRlci1yZXNldDogbGlzdC1pdGVtO1xcbn1cXG5cXG5vbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xcbn1cXG5cXG5saSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG4gICAgdGV4dC1hbGlnbjogbWF0Y2gtcGFyZW50O1xcbn1cXG5cXG4vKiBuZXN0ZWQgbGlzdHMgaGF2ZSBubyB0b3AvYm90dG9tIG1hcmdpbnMgKi9cXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSB1bCxcXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSBvbCxcXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSBkaXIsXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgbWVudSxcXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSBkbCB7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG59XFxuXFxuLyogMiBkZWVwIHVub3JkZXJlZCBsaXN0cyB1c2UgYSBjaXJjbGUgKi9cXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIHVsLFxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgbWVudSxcXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIGRpciB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcbn1cXG5cXG4vKiAzIGRlZXAgKG9yIG1vcmUpIHVub3JkZXJlZCBsaXN0cyB1c2UgYSBzcXVhcmUgKi9cXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgdWwsXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSA6aXMob2wsIHVsLCBtZW51LCBkaXIpIG1lbnUsXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSA6aXMob2wsIHVsLCBtZW51LCBkaXIpIGRpciB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xcbn1cXG5cXG5cXG4vKiBsZWFmcyAqL1xcblxcbi8qIDxocj4gbm9zaGFkZSBhbmQgY29sb3IgYXR0cmlidXRlcyBhcmUgaGFuZGxlZCBjb21wbGV0ZWx5IGJ5XFxuICAqIEhUTUxIUkVsZW1lbnQ6Ok1hcEF0dHJpYnV0ZXNJbnRvUnVsZS5cXG4gICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGhlLWhyLWVsZW1lbnQtMlxcbiAgKi9cXG5ociB7XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC41ZW07XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAvKiBGSVhNRTogVGhpcyBpcyBub3QgcmVhbGx5IHBlciBzcGVjICovXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ocltzaXplPVxcXCIxXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIG5vbmUgbm9uZSBub25lO1xcbn1cXG5cXG4vKiBOb3RlIHRoYXQgd2Ugb25seSBpbnRlbmQgZm9yIHRoZSBhbHQgY29udGVudCB0byBzaG93IHVwIGlmIHRoZSBpbWFnZSBpc1xcbiAgKiBicm9rZW4uIEJ1dCBub24tYnJva2VuIGltYWdlcy9pbnB1dHMgd2lsbCBoYXZlIGEgcmVwbGFjZWQgYm94LCBhbmQgdGh1cyB3ZVxcbiAgKiB3b24ndCB3ZSBkb24ndCBnZW5lcmF0ZSB0aGUgcHNldWRvLWVsZW1lbnQgYW55d2F5cy4gVGhpcyBwcmV2ZW50c1xcbiAgKiB1bm5lY2Vzc2FyeSByZWZyYW1pbmcgd2hlbiBpbWFnZXMgYmVjb21lIGJyb2tlbiAvIG5vbi1icm9rZW4uICovXFxuaW5wdXRbdHlwZT1pbWFnZV06OmJlZm9yZSxcXG5pbWc6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IC1tb3otYWx0LWNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgdW5pY29kZS1iaWRpOiBpc29sYXRlO1xcbn1cXG5cXG5pbWdbdXNlbWFwXSxcXG5vYmplY3RbdXNlbWFwXSB7XFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXG5cXG5mcmFtZXNldCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICEgaW1wb3J0YW50O1xcbiAgICBvdmVyZmxvdzogY2xpcDtcXG4gICAgcG9zaXRpb246IHN0YXRpYyAhIGltcG9ydGFudDtcXG4gICAgZmxvYXQ6IG5vbmUgISBpbXBvcnRhbnQ7XFxuICAgIGJvcmRlcjogbm9uZSAhIGltcG9ydGFudDtcXG59XFxuXFxuZnJhbWUge1xcbiAgICBib3JkZXItcmFkaXVzOiAwICEgaW1wb3J0YW50O1xcbn1cXG5cXG5pZnJhbWUge1xcbiAgICBib3JkZXI6IDJweCBpbnNldDtcXG59XFxuXFxuc3BhY2VyIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYyAhIGltcG9ydGFudDtcXG4gICAgZmxvYXQ6IG5vbmUgISBpbXBvcnRhbnQ7XFxufVxcblxcbmNhbnZhcyB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5pZnJhbWU6Zm9jdXMtdmlzaWJsZSxcXG5ib2R5OmZvY3VzLXZpc2libGUsXFxuaHRtbDpmb2N1cy12aXNpYmxlIHtcXG4gICAgLyogVGhlc2UgZWxlbWVudHMgaGlzdG9yaWNhbGx5IGRvbid0IHNob3cgb3V0bGluZXMgd2hlbiBmb2N1c2VkIGJ5IGRlZmF1bHQuXFxuICAgICogV2UgY291bGQgY29uc2lkZXIgY2hhbmdpbmcgdGhhdCBpZiBuZWVkZWQuICovXFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIGhpZGRlbiBlbGVtZW50czogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jaGlkZGVuLWVsZW1lbnRzXFxuICAqXFxuICAqIEV4Y2VwdGlvbnM6XFxuICAqXFxuICAqICAqIGFyZWEgZGVjbGFyYXRpb24gbmVlZHMgdG8gYmUgIWltcG9ydGFudCwgc2VlIGJlbG93IC8gYnVnIDEzNTA0MC4gIFRoYXQnc1xcbiAgKiAgICBoYWNreSBhbmQgYnJva2VuLlxcbiAgKlxcbiAgKiAgKiBbaGlkZGVuXSBpcyBpbXBsZW1lbnRlZCBhcyBhIHByZXNlbnRhdGlvbiBhdHRyaWJ1dGUgdG8gYXZvaWQgYSBnbG9iYWxcXG4gICogICAgc2VsZWN0b3IgaW4gYSBVQSBzaGVldC5cXG4gICovXFxuYmFzZSxcXG5iYXNlZm9udCxcXG5kYXRhbGlzdCxcXG5oZWFkLFxcbmxpbmssXFxubWV0YSxcXG5ub2VtYmVkLFxcbm5vZnJhbWVzLFxcbnBhcmFtLFxcbnJwLFxcbnNjcmlwdCxcXG5zdHlsZSxcXG50ZW1wbGF0ZSxcXG50aXRsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmFyZWEge1xcbiAgICAvKiBEb24ndCBnaXZlIGl0IGZyYW1lcyBvdGhlciB0aGFuIGl0cyBpbWFnZWZyYW1lICovXFxuICAgIGRpc3BsYXk6IG5vbmUgISBpbXBvcnRhbnQ7XFxufVxcblxcbmlmcmFtZTpmdWxsc2NyZWVuIHtcXG4gICAgLyogaWZyYW1lcyBpbiBmdWxsLXNjcmVlbiBtb2RlIGRvbid0IHNob3cgYSBib3JkZXIuICovXFxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBEZXRhaWxzIGFuZCBzdW1tYXJ5XFxuICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RoZS1kZXRhaWxzLWFuZC1zdW1tYXJ5LWVsZW1lbnRzXFxuICAqXFxuICAqIE5vdGUgdGhhdCB0aGVzZSBydWxlcyBuZWVkIHRvIGJlIGR1cGxpY2F0ZWQgaW4gZGV0YWlscy5jc3MgZm9yIHRoZSBhbm9ueW1vdXNcXG4gICogc3VtbWFyeSwgd2hpY2ggd291bGRuJ3QgbWF0Y2ggb3RoZXJ3aXNlLlxcbiAgKlxcbiAgKiBUaGUgc3BlYyBoZXJlIHNheXMgc29tZXRoaW5nIGRpZmZlcmVudCwgc2VlXFxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvODYxMFxcbiAgKi9cXG5kZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtaXRlbSAwO1xcbiAgICBsaXN0LXN0eWxlOiBkaXNjbG9zdXJlLWNsb3NlZCBpbnNpZGU7XFxufVxcblxcbmRldGFpbHNbb3Blbl0+c3VtbWFyeTpmaXJzdC1vZi10eXBlIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjbG9zdXJlLW9wZW47XFxufVxcblxcbi8qIG1lZGlhIGVsZW1lbnRzICovXFxudmlkZW8ge1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG52aWRlbz5pbWc6LW1vei1uYXRpdmUtYW5vbnltb3VzIHtcXG4gICAgLyogVmlkZW8gcG9zdGVyIGltYWdlcyBzaG91bGQgcmVuZGVyIHdpdGggdGhlIHZpZGVvIGVsZW1lbnQncyBcXFwib2JqZWN0LWZpdFxcXCIgJlxcbiAgICAgIFxcXCJvYmplY3QtcG9zaXRpb25cXFwiIHByb3BlcnRpZXMgKi9cXG4gICAgb2JqZWN0LWZpdDogaW5oZXJpdCAhaW1wb3J0YW50O1xcbiAgICBvYmplY3QtcG9zaXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcXG59XFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5hdWRpb1tjb250cm9sc10ge1xcbiAgICAvKiBUaGlzIGVuc3VyZXMgdGhhdCBpbnRyaW5zaWMgc2l6aW5nIGNhbiByZWxpYWJseSBzaHJpbmt3cmFwIG91clxcbiAgICAgICBjb250cm9scyAod2hpY2ggYXJlIGFsc28gYWx3YXlzIGhvcml6b250YWwpIGFuZCBwcm9kdWNlIGFcXG4gICAgICAgcmVhc29uYWJsZSBpbnRyaW5zaWMgc2l6ZSBmcm9tIHRoZW0uICovXFxuICAgIHdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50O1xcbn1cXG5cXG4qfCo6Oi1tb3otaHRtbC1jYW52YXMtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICAgIC8qIHdlIHdhbnQgdG8gYmUgYW4gYWJzb2x1dGUgYW5kIGZpeGVkIGNvbnRhaW5lciAqL1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG52aWRlbz4uY2FwdGlvbi1ib3gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qKlxcbiAgKiBUaGUgcHNldWRvIGVsZW1lbnQgd29uJ3QgaW5oZXJpdCBDU1Mgc3R5bGVzIGZyb20gaXRzIGRpcmVjdCBwYXJlbnQsIGA6OmN1ZWBcXG4gICogd291bGQgYWN0dWFsbHkgaW5oZXJpdCBzdHlsZXMgZnJvbSB2aWRlbyBiZWNhdXNlIGl0J3MgdmlkZW8ncyBwc2V1ZG8gZWxlbWVudC5cXG4gICogVGhlcmVmb3JlLCB3ZSBoYXZlIHRvIGV4cGxpY2l0bHkgc2V0IHNvbWUgc3R5bGVzIHdoaWNoIGFyZSBhbHJlYWR5IGRlZmluZWRcXG4gICogaW4gaXRzIHBhcmVudCBlbGVtZW50IGluIHZ0dC5qc20uXFxuICAqL1xcbjo6Y3VlIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY3VlLWZvbnQtc2l6ZSk7XFxuICAgIHdyaXRpbmctbW9kZTogdmFyKC0tY3VlLXdyaXRpbmctbW9kZSwgaW5oZXJpdCk7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIC8qIFRPRE8gOiBlbmFibGUgdW5pY29kZS1iaWRpLCByaWdodCBub3cgZW5hYmxlIGl0IHdvdWxkIGNhdXNlIGluY29ycmVjdFxcbiAgICAgICAgICAgICBkaXNwbGF5IGRpcmVjdGlvbiwgbWF5YmUgcmVsYXRlZCB3aXRoIGJ1ZyAxNTU4NDMxLiAqL1xcbn1cXG5cXG4vKiA8ZGlhbG9nPiBlbGVtZW50IHN0eWxlcyAqL1xcblxcbmRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGluc2V0LWlubGluZS1zdGFydDogMDtcXG4gICAgaW5zZXQtaW5saW5lLWVuZDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXItd2lkdGg6IGluaXRpYWw7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogaW5pdGlhbDtcXG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IENhbnZhcztcXG4gICAgY29sb3I6IENhbnZhc1RleHQ7XFxuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxufVxcblxcbmRpYWxvZzpub3QoW29wZW5dKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpYWxvZzptb2RhbCB7XFxuICAgIC1tb3otdG9wLWxheWVyOiB0b3AgIWltcG9ydGFudDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDA7XFxuICAgIGluc2V0LWJsb2NrLWVuZDogMDtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA2cHggLSAyZW0pO1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHggLSAyZW0pO1xcbn1cXG5cXG4vKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNmbG93LWNvbnRlbnQtMyAqL1xcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbm1hcnF1ZWUge1xcbiAgICBpbmxpbmUtc2l6ZTogLW1vei1hdmFpbGFibGU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxubWFycXVlZTppcyhbZGlyZWN0aW9uPVxcXCJ1cFxcXCJdLCBbZGlyZWN0aW9uPVxcXCJkb3duXFxcIl0pIHtcXG4gICAgYmxvY2stc2l6ZTogMjAwcHg7XFxufVxcblxcbi8qIFJ1YnkgKi9cXG5cXG5ydWJ5IHtcXG4gICAgZGlzcGxheTogcnVieTtcXG59XFxuXFxucmIge1xcbiAgICBkaXNwbGF5OiBydWJ5LWJhc2U7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbnJ0IHtcXG4gICAgZGlzcGxheTogcnVieS10ZXh0O1xcbn1cXG5cXG5ydGMge1xcbiAgICBkaXNwbGF5OiBydWJ5LXRleHQtY29udGFpbmVyO1xcbn1cXG5cXG5ydGMsXFxucnQge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDUwJTtcXG4gICAgLW1vei1taW4tZm9udC1zaXplLXJhdGlvOiA1MCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5AbWVkaWEgbm90ICgtbW96LXBsYXRmb3JtOiB3aW5kb3dzKSB7XFxuXFxuICAgIHJ0YyxcXG4gICAgcnQge1xcbiAgICAgICAgLyogVGhlIHdpZGVseS11c2VkIFdpbmRvd3MgZm9udCBNZWlyeW8gZG9lc24ndCB3b3JrIGZpbmUgd2l0aCB0aGlzXFxuICAgICAqIHNldHRpbmcsIHNvIGRpc2FibGUgdGhpcyBvbiBXaW5kb3dzLiBXZSBzaG91bGQgcmUtZW5hYmxlIGl0IG9uY2VcXG4gICAgICogTWljcm9zb2Z0IGZpeGVzIHRoaXMgaXNzdWUuIFNlZSBidWcgMTE2NDI3OS4gKi9cXG4gICAgICAgIGZvbnQtdmFyaWFudC1lYXN0LWFzaWFuOiBydWJ5O1xcbiAgICB9XFxufVxcblxcbnJ0YyxcXG5ydCB7XFxuICAgIHRleHQtZW1waGFzaXM6IG5vbmU7XFxufVxcblxcbnJ0YzpsYW5nKHpoKSxcXG5ydDpsYW5nKHpoKSB7XFxuICAgIHJ1YnktYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucnRjOmxhbmcoemgtVFcpLFxcbnJ0OmxhbmcoemgtVFcpIHtcXG4gICAgZm9udC1zaXplOiAzMCU7XFxuICAgIC8qIGJvcG9tb2ZvICovXFxuICAgIC1tb3otbWluLWZvbnQtc2l6ZS1yYXRpbzogMzAlO1xcbn1cXG5cXG5ydGM+cnQge1xcbiAgICBmb250LXNpemU6IHVuc2V0O1xcbn1cXG5cXG5ydWJ5LFxcbnJiLFxcbnJ0LFxcbnJ0YyB7XFxuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcXG59XFxuXFxuLyogU2hhZG93IERPTSB2MVxcbiAgKiBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXNjb3BpbmcvI3Nsb3RzLWluLXNoYWRvdy10cmVlICovXFxuc2xvdCB7XFxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xcbn1cXG5cXG4vKiBVbi1pbnZlcnQgaW1hZ2VzIGFuZCB2aWRlb3MgZm9yIHVzZXJzIHVzaW5nIGludmVydGVkIGNvbG9ycy5cXG4gICogXFxcIlVzZXIgYWdlbnRzIG11c3QgYWRkIHRoZSBmb2xsb3dpbmcgcnVsZSB0byB0aGVpciBVQSBzdHlsZSBzaGVldFxcXCJcXG4gICogaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy01LyNpbnZlcnRlZFxcbiAgKi9cXG5AbWVkaWEgKGludmVydGVkLWNvbG9ycykge1xcblxcbiAgICBpbWc6bm90KHBpY3R1cmUgPiBpbWcpLFxcbiAgICBwaWN0dXJlLFxcbiAgICB2aWRlbyB7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG4gICAgfVxcbn1cXG5cXG4vKiBIaWRlIG5vc2NyaXB0IGVsZW1lbnRzIGlmIHNjcmlwdGluZyBpcyBlbmFibGVkICovXFxuQG1lZGlhIChzY3JpcHRpbmcpIHtcXG4gICAgbm9zY3JpcHQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBwcmludCB7XFxuXFxuICAgIGlucHV0LFxcbiAgICB0ZXh0YXJlYSxcXG4gICAgc2VsZWN0LFxcbiAgICBidXR0b24sXFxuICAgIGRldGFpbHMge1xcbiAgICAgICAgLW1vei11c2VyLWlucHV0OiBub25lICFpbXBvcnRhbnQ7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxufVxcblxcbi8qIFBvcG92ZXIgVUEgc3R5bGUsIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2Zsb3ctY29udGVudC0zICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhLXF1ZXJ5LW5vLWludmFsaWQgKi9cXG5AbWVkaWEgKC1tb3otYm9vbC1wcmVmOiBcXFwiZG9tLmVsZW1lbnQucG9wb3Zlci5lbmFibGVkXFxcIikge1xcbiAgICBbcG9wb3Zlcl06bm90KDpwb3BvdmVyLW9wZW4pOm5vdChkaWFsb2dbb3Blbl0pIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgZGlhbG9nOnBvcG92ZXItb3BlbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICBbcG9wb3Zlcl0ge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgaW5zZXQ6IDA7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbTtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgY29sb3I6IENhbnZhc1RleHQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXM7XFxuICAgIH1cXG5cXG4gICAgOnBvcG92ZXItb3BlbiB7XFxuICAgICAgICAtbW96LXRvcC1sYXllcjogdG9wO1xcbiAgICB9XFxuXFxuICAgIDpwb3BvdmVyLW9wZW46OmJhY2tkcm9wIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGluc2V0OiAwO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxufVxcblxcblxcblxcblxcblxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuXFxuXFxufVxcblxcbi5oZWFkZXJQYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDEsIDQxLCAwLjEwNyk7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjhyZW0gMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiA2MzNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLyogXFxuLmNvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn0gKi9cXG5cXG5cXG4ubGVmdFNlY3Rpb24ge1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4ucmlnaHRTZWN0aW9uIHtcXG4gICAgd2lkdGg6IDY1JTtcXG5cXG4gICAgZmxvYXQ6IHJpZ2h0O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW46IDVyZW0gYXV0bztcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2FsbW9uO1xcbiAgICBwYWRkaW5nOiA1cHggM3B4IDE1cHggMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4jYnV0dG9uUHJvamVjdEZvcm0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAxOHB4O1xcbn1cXG5cXG4jbGFiZWxQcm9qZWN0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNpbnB1dFByb2plY3Qge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDEwcHggMCA1cHggMDtcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NhbG1vbjtcXG4gICAgcGFkZGluZzogNXB4IDAgMTVweCAwO1xcbiAgICAvKiB6LWluZGV4OiAxOyAqL1xcbn1cXG5cXG4udGFza3NVbml0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2toYWtpO1xcbn1cXG5cXG4udGFza1VuaXRJbXBvcnRhbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2RcXG59XFxuXFxuLnRhc2tVbml0VXJnZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcXG59XFxuXFxuXFxuXFxuLnByb2plY3RzVW5pdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5idXR0b25Qcm9qZWN0cyxcXG4uYWN0aXZlUHJvamVjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA1O1xcbiAgICBwbGFjZS1zZWxmOiBzdHJldGNoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbiAgICBtYXJnaW46IDhweDtcXG4gICAgcGFkZGluZzogOHB4O1xcblxcbn1cXG5cXG4ucmVtb3ZlUHJvamVjdHMge1xcbiAgICBncmlkLWNvbHVtbjogNyAvIDg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFxufVxcblxcbi5hY3RpdmVQcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2xpc3RQcm9qZWN0cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLmhpZGVSZW1vdmVCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4jc3RhcnRQcm9qZWN0QnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcblxcblxcblxcbiNhZGRQcm9qZWN0RGl2IHtcXG5cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAxNTEsIDIyMik7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgdG9wOiAxcmVtO1xcbn1cXG5cXG4jZWRpdFRhc2tEaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgdG9wOiA0LjJyZW07XFxuICAgIG1pbi13aWR0aDogMzgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlblxcbn1cXG5cXG4jYWRkVGFza0RpdiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDQ1JTtcXG4gICAgdG9wOiA0cmVtO1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jZWRpdFRhc2tGb3JtIHtcXG4gICAgbWFyZ2luOiA4cHg7XFxufVxcblxcbiNhZGRUYXNrRm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgbWFyZ2luOiA4cHg7XFxufVxcblxcblxcbiNhZGRQcm9qZWN0Rm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyNTEsIDI1NCk7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDhweDtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnRhc2tDb250YWluZXJGaXJzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNsZWFyOiByaWdodDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLnRhc2tDb250YWluZXJGaXJzdD5kaXYge1xcbiAgICBtYXJnaW46IDVweDtcXG5cXG59XFxuXFxuc3BhbiB7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi5hZGRUYXNrIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4ubGFiZWxQcmlvcml0eSB7XFxuICAgIC8qIGRpc3BsYXk6IDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbmxhYmVsW2Zvcj1cXFwibmV3VGFza1xcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJ0ZXh0QXJlYVRhc2tcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jZGF0ZURpdixcXG4jcHJpb3JpdHlEaXYsXFxuI25vdGVzRGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jcHJpb3JpdHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5teU5vdGVzIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCA4MCwgMjU1KTtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLnRhc2tTZXR0aW5ncyB7XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvIDAuNXJlbSBhdXRvO1xcbn1cXG5cXG4udGFza1NldHRpbmdzPmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4udGFza0NvbXBsZXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4udGFza0NvbXBsZXRlZCBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4udGFza0NvbXBsZXRlZCAuYnV0dG9uRWRpdFRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4vKiAucmVtb3ZlVGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWN0aXZlUHJvamVjdCwgY2hvc2VuVGFzaywgc2hvd1Rhc2tzIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGdldEZvcm1EYXRhVGFzayB9IGZyb20gXCIuL3Rhc2tDb250YWluZXIuanNcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRUYXNrKCkge1xuICAvLyBydW5zIHdoZW4gdGhlIGZvcm0gaXMgc3ViXG4gIC8vY29uc29sZS5jbGVhcigpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvL2NvbnNvbGUubG9nKFwiQ2hvc2VuIHRhc2s6IFwiLCBjaG9zZW5UYXNrKTtcbiAgLy9jb25zb2xlLmxvZyhhY3RpdmVQcm9qZWN0KTtcbiAgLy9hY3RpdmVQcm9qZWN0Lm1vZGlmeVRhc2soY2hvc2VuVGFzayk7XG4gIC8vY29uc29sZS5sb2coXCJDaG9zZW4gVGFzazogXCIsIGNob3NlblRhc2spO1xuXG4gIC8vIEVkaXRlZCBkYXRhICh0aGUgZGF0YSB0aGF0IHdlIHN1Ym1pdCBhcyBjb3JyZWN0aW9ucylcbiAgY29uc3QgZm9ybUVkaXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tGb3JtXCIpO1xuICBjb25zdCB0YXNrRGF0YUVkaXQgPSBnZXRGb3JtRGF0YVRhc2soZm9ybUVkaXRlZCk7XG5cbiAgLy8gZGVzdHJ1Y3R1cmluZyBhc3NpZ25tZW50IChJIHdhbnQgdG8gYXZvaWQgbmFtaW5nIGNvbmZsaWN0cylcbiAgY29uc3QgW1xuICAgIHtcbiAgICAgIG5hbWU6IG5hbWVFZGl0LFxuICAgICAgZGF0ZTogZGF0ZUVkaXQsXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHlFZGl0LFxuICAgICAgbm90ZXM6IG5vdGVzRWRpdCxcbiAgICB9LFxuICBdID0gdGFza0RhdGFFZGl0O1xuXG4gIC8vIE9yaWdpbmFsIGRhdGFcbiAgY29uc3QgeyBuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMgfSA9IGNob3NlblRhc2s7XG5cbiAgY29uc29sZS5sb2coXCJFZGl0OlwiKTtcbiAgY29uc29sZS5sb2cobmFtZUVkaXQsIGRhdGVFZGl0LCBwcmlvcml0eUVkaXQsIG5vdGVzRWRpdCk7XG4gIGNvbnNvbGUubG9nKFwiT3JpZ2luYWw6XCIpO1xuICBjb25zb2xlLmxvZyhuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuXG4gIC8vIEVkaXQgdGhlIGRhdGFcbiAgYWN0aXZlUHJvamVjdC5tb2RpZnlUYXNrKGNob3NlblRhc2ssIHRhc2tEYXRhRWRpdFswXSk7XG5cbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gYWN0aXZlUHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGFjdGl2ZVByb2plY3QpKTtcbiAgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tEaXZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBzaG93VGFza3MoYWN0aXZlUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrRm9ybSgpIHtcbiAgLy8gVGhlIGZvcm0gaXMgYWRkZWQgaW4gdGhlIGluZGV4LmpzXG5cbiAgY29uc3QgY29udGFpbmVyRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lckVkaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0VGFza0RpdlwiKTtcblxuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIC8vIE5hbWUgdGhlIFRhc2tcbiAgY29uc3QgZWxlbWVudE5hbWVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGFiZWxUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gIGxhYmVsVGFzay5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0VGFza1wiKTtcblxuICBjb25zdCBuYW1lVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZVRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0VGFza1wiKTtcbiAgbmFtZVRhc2sudmFsdWUgPSBcIk5hbWUgdGhlIHRhc2tcIjtcbiAgbmFtZVRhc2sudHlwZSA9IFwidGV4dFwiO1xuICBuYW1lVGFzay5uYW1lID0gXCJuYW1lXCI7XG5cbiAgZWxlbWVudE5hbWVUYXNrLmFwcGVuZENoaWxkKGxhYmVsVGFzayk7XG4gIGVsZW1lbnROYW1lVGFzay5hcHBlbmRDaGlsZChuYW1lVGFzayk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVsZW1lbnROYW1lVGFzayk7XG5cbiAgLy8gRHVlIERhdGVcbiAgY29uc3QgZWxlbWVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50RGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVEaXZcIik7XG5cbiAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIkRhdGU6IFwiO1xuICBsYWJlbERhdGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlRGF0ZUVkaXRcIik7XG5cbiAgY29uc3QgaW5wdXREYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXREYXRlVGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVFZGl0XCIpO1xuICBpbnB1dERhdGVUYXNrLnR5cGUgPSBcImRhdGVcIjtcbiAgaW5wdXREYXRlVGFzay5uYW1lID0gXCJkYXRlXCI7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGlucHV0RGF0ZVRhc2spO1xuXG4gIGVsZW1lbnREYXRlLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gIGVsZW1lbnREYXRlLmFwcGVuZENoaWxkKGlucHV0RGF0ZVRhc2spO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlbGVtZW50RGF0ZSk7XG5cbiAgLy8gUHJpb3JpdHlcblxuICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eURpdkVkaXRcIik7XG5cbiAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICBwcmlvcml0eVRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlFZGl0XCIpO1xuXG4gIC8vIEhJR0hcbiAgY29uc3QgaW5wdXRQcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaFByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJISUdIXCIpO1xuXG4gIGlucHV0UHJpb3JpdHlIaWdoLnR5cGUgPSBcInJhZGlvXCI7XG4gIGlucHV0UHJpb3JpdHlIaWdoLm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gXCJISUdIXCI7XG4gIGxhYmVsUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eUVkaXRcIik7XG4gIGxhYmVsUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImhpZ2hQcmlvcml0eUVkaXRcIik7XG5cbiAgLy8gTUVESVVNXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lZGl1bVByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1FRElVTVwiKTtcblxuICBpbnB1dFByaW9yaXR5TWVkaXVtLnR5cGUgPSBcInJhZGlvXCI7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0ubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNRURJVU1cIjtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsUHJpb3JpdHlFZGl0XCIpO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lZGl1bVByaW9yaXR5RWRpdFwiKTtcblxuICAvLyBMT1dcbiAgY29uc3QgaW5wdXRQcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93UHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTE9XXCIpO1xuXG4gIGlucHV0UHJpb3JpdHlMb3cudHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eUxvdy5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxPV1wiO1xuICBsYWJlbFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eUVkaXRcIik7XG4gIGxhYmVsUHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG93UHJpb3JpdHlFZGl0XCIpO1xuXG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eVRpdGxlKTtcblxuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eUhpZ2gpO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eUhpZ2gpO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eU1lZGl1bSk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5TWVkaXVtKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlMb3cpO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eUxvdyk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RWxlbWVudCk7XG5cbiAgLy8gTm90ZXNcblxuICBjb25zdCBub3Rlc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub3Rlc0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3Rlc0RpdlwiKTtcblxuICBjb25zdCBub3Rlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBub3Rlc1RpdGxlLnRleHRDb250ZW50ID0gXCJOb3Rlc1wiO1xuICBub3Rlc1RpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRleHRBcmVhVGFza0VkaXRcIik7XG4gIGNvbnN0IHRhc2tUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGV4dEFyZWFUYXNrRWRpdFwiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjUwXCIpO1xuICB0YXNrVGV4dEFyZWEubmFtZSA9IFwidGV4dEFyZWFUYXNrXCI7XG5cbiAgbm90ZXNFbGVtZW50LmFwcGVuZENoaWxkKG5vdGVzVGl0bGUpO1xuICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza1RleHRBcmVhKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQobm90ZXNFbGVtZW50KTtcblxuICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRUYXNrRm9ybVwiKTtcbiAgY29udGFpbmVyRWRpdC5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5cbiAgLy8gQnV0dG9uIEVkaXRcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25FZGl0VGFza1wiKTtcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRURJVFwiO1xuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRFZGl0VGFzaywgZmFsc2UpO1xuXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXJFZGl0O1xufVxuXG5leHBvcnQgeyBlZGl0VGFza0Zvcm0gfTtcbiIsImltcG9ydCB7IGVsZW1lbnRQcm9qZWN0LCBkb21TaG93VGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0c0RvbS5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxubGV0IGFjdGl2ZVByb2plY3Q7XG5sZXQgY2hvc2VuVGFzaztcblxuZnVuY3Rpb24gc2V0Q2hvc2VuVGFzayh0YXNrKSB7XG4gIGNob3NlblRhc2sgPSB0YXNrO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHNldFByb2plY3QpIHtcbiAgbGV0IHByb2plY3RJZDtcbiAgbGV0IGVsZW1lbnRJZDtcbiAgLy8gV2Ugc2V0IHRoZSBhY3RpdmUgcHJvamVjdCBhbmQgY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgYnV0dG9uXG4gIGlmIChhY3RpdmVQcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9qZWN0SWQgPSBhY3RpdmVQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICB9XG5cbiAgaWYgKHByb2plY3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5sb2coXCJwcm9qZWN0SWRcIiwgcHJvamVjdElkKTtcbiAgICBlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0SWQpO1xuICB9XG5cbiAgaWYgKGVsZW1lbnRJZCAhPT0gbnVsbCAmJiBlbGVtZW50SWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlUHJvamVjdFwiKTtcbiAgfVxuXG4gIGFjdGl2ZVByb2plY3QgPSBzZXRQcm9qZWN0O1xuXG4gIGxldCBuZXdfcHJvamVjdElkID0gc2V0UHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgbGV0IG5ld19lbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdfcHJvamVjdElkKTtcbiAgaWYgKG5ld19lbGVtZW50SWQgIT0gbnVsbCkge1xuICAgIG5ld19lbGVtZW50SWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RcIik7XG4gIH1cblxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSAmJiBuZXdfcHJvamVjdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIiwgbmV3X3Byb2plY3RJZCk7XG4gIH1cbn1cblxuLy8gQWxsIHRoZSBwcm9qZWN0cyBuYW1lc1xuY29uc3QgbXlQcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgcmV0dXJuIHsgbmFtZSwgdGFza0xpc3Q6IHt9LCBpZDogXCJwcm9qZWN0XCIgKyBhc3NpZ25Qcm9qZWN0SWQoKSB9O1xufVxuXG4vLyBUaGUgYXJndW1lbnQgd2lsbCBiZSB0aGUgaW5zdGFudGlhdGlvbiBvZiBjcmVhdGVQcm9qZWN0XG5mdW5jdGlvbiBteVByb2plY3RNZXRob2RzKG15UHJvamVjdCkge1xuICByZXR1cm4ge1xuICAgIC4uLm15UHJvamVjdCxcbiAgICBnZXRQcm9qZWN0SWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH0sXG4gICAgZ2V0VGFza0lkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrSWQ7XG4gICAgfSxcbiAgICBnZXRQcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldFByb2plY3ROYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH0sXG4gICAgZ2V0VGFza0xpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xuICAgIH0sXG4gICAgZW5kVGFzazogZnVuY3Rpb24gKHRhc2tJblF1ZXN0aW9uLCBpc0NvbXBsZXRlZCkge1xuICAgICAgLy8gSXQgY2hhbmdlcyBvbmx5IHRoZSB2aXN1YWwgYXNwZWN0IG9mIHRoZSB0YXNrXG4gICAgICB0YXNrSW5RdWVzdGlvbltcImNvbXBsZXRlZFwiXSA9IGlzQ29tcGxldGVkO1xuICAgICAgbGV0IG15RWxlbWVudFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaG9zZW5UYXNrW1wibmFtZUlkXCJdKTtcbiAgICAgIGlmIChpc0NvbXBsZXRlZCkge1xuICAgICAgICBteUVsZW1lbnRUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29tcGxldGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXlFbGVtZW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwidGFza0NvbXBsZXRlZFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZVRhc2s6IGZ1bmN0aW9uIChvYnNvbGV0ZVRhc2spIHtcbiAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgIGxldCBpZFRhc2sgPSBvYnNvbGV0ZVRhc2tbXCJuYW1lSWRcIl07XG4gICAgICBkZWxldGUgdGhpcy50YXNrTGlzdFtpZFRhc2tdO1xuICAgICAgY29uc29sZS5sb2codGhpcy50YXNrTGlzdCk7XG4gICAgICBjb25zdCBteVRhc2tzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnRhc2tMaXN0KTtcbiAgICAgIGRvbVNob3dUYXNrcyhteVRhc2tzKTtcbiAgICB9LFxuICAgIG1vZGlmeVRhc2s6IGZ1bmN0aW9uIChvbGRUYXNrLCBuZXdUYXNrKSB7XG4gICAgICAvL2NvbnNvbGUuY2xlYXIoKTtcbiAgICAgIGxldCBpZFRhc2sgPSBvbGRUYXNrW1wibmFtZUlkXCJdO1xuXG4gICAgICBsZXQgZ2V0VGFzayA9IGFjdGl2ZVByb2plY3QuZ2V0VGFza0xpc3QoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaWRUYXNrXCIsIGlkVGFzayk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwib2xkXCIsIG9sZFRhc2ssIGlkVGFzayk7XG4gICAgICBjb25zb2xlLmxvZyhcIm5ld1wiLCBuZXdUYXNrKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGFzayB0byBjaGFuZ2U6IFwiLCBjaG9zZW5UYXNrW1wibmFtZUlkXCJdKTtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3QpO1xuICAgICAgY29uc29sZS5sb2coXCJUQVNLIENBU0VcIiwgdGhpcy50YXNrTGlzdFtpZFRhc2tdKTtcbiAgICAgIHRoaXMudGFza0xpc3RbaWRUYXNrXSA9IG5ld1Rhc2s7XG4gICAgICB0aGlzLnRhc2tMaXN0W2lkVGFza11bXCJuYW1lSWRcIl0gPSBpZFRhc2s7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiVEFTS1wiLCBnZXRUYXNrKTtcbiAgICB9LFxuICAgIGFkZFRhc2s6IGZ1bmN0aW9uIChuYW1lLCBkYXRlID0gXCIwMi9tbS95eVwiLCBwcmlvcml0eSA9IFwiTE9XXCIsIG5vdGVzID0gXCJcIikge1xuICAgICAgbGV0IHRhc2tJZCA9IGFzc2lnblRhc2tJZCgpO1xuXG4gICAgICBsZXQgbmFtZUlkVGFzayA9IFwidGFza1wiICsgdGFza0lkO1xuICAgICAgbGV0IGludGVybmFsVGFzayA9IHt9O1xuXG4gICAgICBpbnRlcm5hbFRhc2tbXCJuYW1lSWRcIl0gPSBuYW1lSWRUYXNrO1xuICAgICAgaW50ZXJuYWxUYXNrW1wibmFtZVwiXSA9IG5hbWU7XG4gICAgICBpbnRlcm5hbFRhc2tbXCJkYXRlXCJdID0gZGF0ZTtcbiAgICAgIGludGVybmFsVGFza1tcInByaW9yaXR5XCJdID0gcHJpb3JpdHk7XG4gICAgICBpbnRlcm5hbFRhc2tbXCJub3Rlc1wiXSA9IG5vdGVzO1xuICAgICAgaW50ZXJuYWxUYXNrW1wiY29tcGxldGVkXCJdID0gZmFsc2U7XG5cbiAgICAgIC8vIEV2ZXJ5IHRhc2sgaXMgYSB2YWx1ZSB3aG9zZSBrZXkgaXMgbmFtZUlkVGFza1xuICAgICAgdGhpcy50YXNrTGlzdFtuYW1lSWRUYXNrXSA9IGludGVybmFsVGFzaztcbiAgICAgIGNvbnNvbGUubG9nKFwiUFJJVkFURSB0YXNrLCBcIiwgdGhpcy50YXNrTGlzdCk7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tzKHByb2plY3RMKSB7XG4gIGNvbnNvbGUubG9nKFwiU2hvdzogXCIsIHByb2plY3RMKTtcblxuICBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RMKTtcbiAgY29uc29sZS5sb2coXCJBY3RpdmUgcHJvamVjdDogXCIsIHByb2plY3RMLmdldFByb2plY3RJZCgpKTtcblxuICBjb25zb2xlLmxvZyhcInByb2plY3Q6IFwiLCBwcm9qZWN0TCk7XG4gIGxldCBteVByb3RvVGFza3MgPSBudWxsO1xuICBteVByb3RvVGFza3MgPSBwcm9qZWN0TC5nZXRUYXNrTGlzdCgpO1xuICAvL2NvbnNvbGUuY2xlYXIoKTtcbiAgY29uc3QgbXlUYXNrcyA9IE9iamVjdC52YWx1ZXMobXlQcm90b1Rhc2tzKTtcbiAgY29uc3QgbmFtZUlkID0gYWN0aXZlUHJvamVjdC5nZXRUYXNrSWQoKSArIDE7XG5cbiAgY29uc29sZS5sb2coXCJteVRhc2tzOiBcIiwgbXlUYXNrcyk7XG5cbiAgY29uc29sZS5sb2coXCJuYW1lSWQsIFwiLCBuYW1lSWQpO1xuXG4gIGRvbVNob3dUYXNrcyhteVRhc2tzKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tBZGRQcm9qZWN0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0RGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0Rm9ybVwiKTtcblxuICBjb25zdCBuZXdUaXRsZSA9IG15Rm9ybVtcIm5hbWVcIl0udmFsdWU7XG4gIGlmIChuZXdUaXRsZSAhPT0gXCJcIikge1xuICAgIGNvbnN0IG5ld1Byb2plY3RFbXB0eSA9IGNyZWF0ZVByb2plY3QobmV3VGl0bGUpO1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBteVByb2plY3RNZXRob2RzKG5ld1Byb2plY3RFbXB0eSk7XG5cbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbGV0IHByb2plY3RJZCA9IG5ld1Byb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0SWQsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3RFbXB0eSkpO1xuICAgICAgbGV0IGFsbFN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIpO1xuICAgICAgbGV0IHBhcnNlZFByb2plY3RzID0gSlNPTi5wYXJzZShhbGxTdG9yZWRQcm9qZWN0cyk7XG4gICAgICBwYXJzZWRQcm9qZWN0cy5hbGxQcm9qZWN0cy5wdXNoKHByb2plY3RJZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocGFyc2VkUHJvamVjdHMpKTtcbiAgICB9XG5cbiAgICBhcHBlbmRQcm9qZWN0KG5ld1RpdGxlLCBuZXdQcm9qZWN0KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgbmV3UHJvamVjdCA9IG15UHJvamVjdE1ldGhvZHMobmV3UHJvamVjdEVtcHR5KTtcbiAgICAvLyB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGFkZEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkUHJvamVjdERpdlwiKTtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRQcm9qZWN0Rm9ybVwiKTtcbiAgYWRkRWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gIGNvbnN0IGxhYmVsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcm9qZWN0LnRleHRDb250ZW50ID0gXCJQcm9qZWN0J3MgbmFtZVwiO1xuICBsYWJlbFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsYWJlbFByb2plY3RcIik7XG4gIGNvbnN0IG5hbWVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImlucHV0UHJvamVjdFwiKTtcbiAgbmFtZVByb2plY3QudHlwZSA9IFwidGV4dFwiO1xuICBuYW1lUHJvamVjdC5uYW1lID0gXCJuYW1lXCI7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJvamVjdCk7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVQcm9qZWN0KTtcblxuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25Qcm9qZWN0Rm9ybVwiKTtcbiAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBRERcIjtcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0FkZFByb2plY3QsIGZhbHNlKTtcblxuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICByZXR1cm4gYWRkRWxlbWVudENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3REaXZcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuY29uc3QgY3JlYXRlTmV3SWQgPSAoKSA9PiB7XG4gIGxldCBpZFByb2plY3QgPSAwO1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGxldCBsb2NhbElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXN0SWRcIik7XG5cbiAgICBpZiAobG9jYWxJZCAhPT0gbnVsbCkge1xuICAgICAgaWRQcm9qZWN0ID0gbG9jYWxJZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlkUHJvamVjdCsrO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdElkXCIsIGlkUHJvamVjdCk7XG4gICAgcmV0dXJuIGlkUHJvamVjdDtcbiAgfTtcbn07XG5cbmNvbnN0IGFzc2lnblByb2plY3RJZCA9IGNyZWF0ZU5ld0lkKCk7XG5jb25zdCBhc3NpZ25UYXNrSWQgPSBjcmVhdGVOZXdJZCgpO1xuXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSwga2V5UHJvamVjdCkge1xuICBjb25zdCBsaXN0UHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RQcm9qZWN0c1wiKTtcbiAgY29uc3QgdGl0bGVQcm9qZWN0ID0gZWxlbWVudFByb2plY3QobmV3UHJvamVjdFRpdGxlLCBrZXlQcm9qZWN0KTtcbiAgY29uc29sZS5sb2coXCJhcHBlbmRcIiwga2V5UHJvamVjdCk7XG5cbiAgc2hvd1Rhc2tzKGtleVByb2plY3QpO1xuICBsaXN0UHJvamVjdHMuYXBwZW5kQ2hpbGQodGl0bGVQcm9qZWN0KTtcbiAgc2V0QWN0aXZlUHJvamVjdChrZXlQcm9qZWN0KTtcbn1cblxuZXhwb3J0IHtcbiAgYWRkUHJvamVjdEZ1bmN0aW9uLFxuICBhZGRQcm9qZWN0Rm9ybSxcbiAgc2hvd1Rhc2tzLFxuICBjcmVhdGVQcm9qZWN0LFxuICBteVByb2plY3RNZXRob2RzLFxuICBteVByb2plY3RzLFxuICBhY3RpdmVQcm9qZWN0LFxuICBzZXRDaG9zZW5UYXNrLFxuICBzZXRBY3RpdmVQcm9qZWN0LFxuICBjcmVhdGVOZXdJZCxcbiAgY2hvc2VuVGFzayxcbn07XG4iLCJpbXBvcnQge1xuICBhZGRQcm9qZWN0RnVuY3Rpb24sXG4gIGFkZFByb2plY3RGb3JtLFxuICBzaG93VGFza3MsXG4gIGFjdGl2ZVByb2plY3QsXG4gIGNob3NlblRhc2ssXG4gIHNldENob3NlblRhc2ssXG59IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBjbGlja0VkaXRUYXNrIH0gZnJvbSBcIi4vdGFza0NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGxvY2FsUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsUHJvamVjdHNcIik7XG4gICAgbGV0IHBhcnNlZExvY2FsVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsUHJvamVjdHMpO1xuICAgIGxldCBwcm9qZWN0SWQgPSBwcm9qZWN0LmZpcnN0Q2hpbGQuaWQ7XG4gICAgbGV0IHByb2plY3RzQXJyYXkgPSBwYXJzZWRMb2NhbFRhc2tzLmFsbFByb2plY3RzO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuXG4gICAgY29uc3QgYXJyYXlXaXRob3V0UmVtb3ZlZFByb2plY3QgPSBwcm9qZWN0c0FycmF5LmZpbHRlcihmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgcmV0dXJuIHByb2plY3QgIT09IHByb2plY3RJZDtcbiAgICB9KTtcbiAgICBsZXQgYWxsTG9jYWxQcm9qZWN0cyA9IHsgYWxsUHJvamVjdHM6IGFycmF5V2l0aG91dFJlbW92ZWRQcm9qZWN0IH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsTG9jYWxQcm9qZWN0cykpO1xuXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIik7XG4gICAgaWYgKGFjdGl2ZVByb2plY3QgPT0gcHJvamVjdElkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIiwgXCJqdXN0RGVsZXRlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImZpbHRlclwiLCBhcnJheVdpdGhvdXRSZW1vdmVkUHJvamVjdCk7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0SWQpO1xuICB9XG5cbiAgLy9cblxuICBwcm9qZWN0LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjbGlja1JlbW92ZVRhc2soZXZlbnQpIHtcbiAgc2V0Q2hvc2VuVGFzayhldmVudCk7XG4gIGFjdGl2ZVByb2plY3QuZGVsZXRlVGFzayhjaG9zZW5UYXNrKTtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gYWN0aXZlUHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGFjdGl2ZVByb2plY3QpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDb21wbGV0ZWQoZXZlbnQsIGJ1dHRvbkNvbXBsZXRpb24pIHtcbiAgc2V0Q2hvc2VuVGFzayhldmVudCk7XG4gIGNvbnNvbGUuY2xlYXIoKTtcbiAgbGV0IHsgY29tcGxldGVkIH0gPSBldmVudDtcbiAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcbiAgaWYgKGNvbXBsZXRlZCA9PSBmYWxzZSkge1xuICAgIGJ1dHRvbkNvbXBsZXRpb24udGV4dENvbnRlbnQgPSBcIk9wZW5cIjtcbiAgfSBlbHNlIHtcbiAgICBidXR0b25Db21wbGV0aW9uLnRleHRDb250ZW50ID0gXCJDbG9zZWRcIjtcbiAgfVxuXG4gIGFjdGl2ZVByb2plY3QuZW5kVGFzayhjaG9zZW5UYXNrLCBjb21wbGV0ZWQpO1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGxldCBpZFByb2plY3QgPSBhY3RpdmVQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkUHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoYWN0aXZlUHJvamVjdCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRQcm9qZWN0KG5hbWVQcm9qZWN0RG9tLCBrZXlQcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1VuaXRcIik7XG5cbiAgLy8gVGhlIHByb2plY3RcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcImJ1dHRvblByb2plY3RzXCIpO1xuICBsZXQgcHJvamVjdElkID0ga2V5UHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0SWQpO1xuXG4gIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBuYW1lUHJvamVjdERvbTtcblxuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2hvd1Rhc2tzKGtleVByb2plY3QpO1xuICB9KTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICAvLyBUaGUgb3B0aW9uIHRvIHJlbW92ZSBpdFxuICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGJ1dHRvblJlbW92ZURpc3BsYXkgPSBwcm9qZWN0SWQgKyBcIkJ1dHRvblwiO1xuXG4gIHJlbW92ZVByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9uUmVtb3ZlRGlzcGxheSk7XG4gIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZVByb2plY3RzXCIsIFwiaGlkZVJlbW92ZUJ1dHRvblwiKTtcbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICByZW1vdmVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0RGl2KTtcbiAgfSk7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ1dHRvbik7XG5cbiAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwibW91c2VvdmVyXCIsXG4gICAgKCkgPT4ge1xuICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVJlbW92ZUJ1dHRvblwiKTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG5cbiAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwibW91c2VvdXRcIixcbiAgICAoKSA9PiB7XG4gICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlUmVtb3ZlQnV0dG9uXCIpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcblxuICByZXR1cm4gcHJvamVjdERpdjtcbn1cblxuZnVuY3Rpb24gZG9tU2hvd1Rhc2tzKG15VGFza3MpIHtcbiAgY29uc3QgbXlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tDb250YWluZXJJZFwiKTtcbiAgaWYgKG15Q29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgbXlDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGVhY2hUYXNrIG9mIG15VGFza3MpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc1VuaXRcIik7XG4gICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlYWNoVGFza1tcIm5hbWVJZFwiXSk7XG4gICAgbXlDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG5cbiAgICAvLyBOZXcgdGl0bGVcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gZWFjaFRhc2submFtZTtcblxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuXG4gICAgLy8gTmV3IGV4dHJhcyAoZGF0ZSwgcHJpb3JpdHkpXG4gICAgY29uc3QgbmV3RXh0cmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vIE5ldyBkYXRlXG4gICAgaWYgKGVhY2hUYXNrLmRhdGUgIT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIG5ld0R1ZURhdGUudGV4dENvbnRlbnQgPSBlYWNoVGFzay5kYXRlO1xuICAgICAgbmV3RXh0cmFzLmFwcGVuZENoaWxkKG5ld0R1ZURhdGUpO1xuICAgIH1cblxuICAgIC8vIE5ldyBwcmlvcml0eVxuICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbmV3UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUFJJT1JJVFk6ICR7ZWFjaFRhc2sucHJpb3JpdHl9YDtcbiAgICBuZXdFeHRyYXMuYXBwZW5kQ2hpbGQobmV3UHJpb3JpdHkpO1xuXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdFeHRyYXMpO1xuXG4gICAgaWYgKGVhY2hUYXNrLnByaW9yaXR5ID09IFwiSElHSFwiKSB7XG4gICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVW5pdFVyZ2VudFwiKTtcbiAgICB9XG4gICAgaWYgKGVhY2hUYXNrLnByaW9yaXR5ID09IFwiTUVESVVNXCIpIHtcbiAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tVbml0SW1wb3J0YW50XCIpO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIG5vdGVzXG4gICAgaWYgKGVhY2hUYXNrLm5vdGVzICE9PSBcIlwiKSB7XG4gICAgICBjb25zdCBzZXROb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzZXROb3Rlcy50ZXh0Q29udGVudCA9IGVhY2hUYXNrLm5vdGVzO1xuICAgICAgc2V0Tm90ZXMuY2xhc3NMaXN0LmFkZChcIm15Tm90ZXNcIik7XG4gICAgICBjb25zdCBpZE5vdGUgPSBcIlwiO1xuICAgICAgc2V0Tm90ZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWROb3RlKTtcbiAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoc2V0Tm90ZXMpO1xuICAgIH1cblxuICAgIC8vIE5ldyB0YXNrIHNldHRpbmdcbiAgICBjb25zdCBuZXdTZXR0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdTZXR0aW5nLmNsYXNzTGlzdC5hZGQoXCJ0YXNrU2V0dGluZ3NcIik7XG5cbiAgICAvLyBDb21wbGV0ZWRcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlZC50ZXh0Q29udGVudCA9IFwiT3BlblwiO1xuICAgIGNvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBzZXRDb21wbGV0ZWQoZWFjaFRhc2ssIGNvbXBsZXRlZCk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGlmIChlYWNoVGFza1tcImNvbXBsZXRlZFwiXSkge1xuICAgICAgLy9jb25zb2xlLmxvZyhcIm15VGFza3MgZG9tLCBcIiwgdHJ1ZSk7XG4gICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29tcGxldGVkXCIpO1xuICAgICAgY29tcGxldGVkLnRleHRDb250ZW50ID0gXCJDbG9zZWRcIjtcbiAgICB9XG5cbiAgICBuZXdTZXR0aW5nLmFwcGVuZENoaWxkKGNvbXBsZXRlZCk7XG5cbiAgICAvLyBOZXcgZWRpdFxuICAgIGNvbnN0IG5ld0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5ld0VkaXQuY2xhc3NMaXN0LmFkZChcImJ1dHRvbkVkaXRUYXNrXCIpO1xuICAgIG5ld0VkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBuZXdFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNsaWNrRWRpdFRhc2soZWFjaFRhc2spO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIG5ld1NldHRpbmcuYXBwZW5kQ2hpbGQobmV3RWRpdCk7XG5cbiAgICAvLyBSZW1vdmUgdGFza1xuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbW92ZVRhc2suY2xhc3NMaXN0LmFkZChcInJlbW92ZVRhc2tcIik7XG4gICAgcmVtb3ZlVGFzay50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgcmVtb3ZlVGFzay5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjbGlja1JlbW92ZVRhc2soZWFjaFRhc2spO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIG5ld1NldHRpbmcuYXBwZW5kQ2hpbGQocmVtb3ZlVGFzayk7XG5cbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1NldHRpbmcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICBjb25zdCBteVByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbXlQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG5cbiAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSgpKTtcblxuICBjb25zdCBteVByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbXlQcm9qZWN0c1RpdGxlLmlubmVyVGV4dCA9IFwiUFJPSkVDVFNcIjtcblxuICBteVByb2plY3RzLmFwcGVuZENoaWxkKG15UHJvamVjdHNUaXRsZSk7XG5cbiAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGlzdFByb2plY3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdFByb2plY3RzXCIpO1xuXG4gIC8vIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIC8vICAgc3RvcmVQcm9qZWN0KFwibG9jYWxMaXN0UHJvamVjdHNcIiwgbGlzdFByb2plY3RzKTtcbiAgLy8gICBsZXQgbG9jYWxQcm9qZWN0TGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxMaXN0UHJvamVjdHNcIik7XG5cbiAgLy8gfVxuXG4gIGNvbnNvbGUubG9nKFwibGlzdCBwcm9qZWN0c1wiLCB0eXBlb2YgbGlzdFByb2plY3RzKTtcblxuICBteVByb2plY3RzLmFwcGVuZENoaWxkKGxpc3RQcm9qZWN0cyk7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdGFydFByb2plY3RCdXR0b25cIik7XG4gIGFkZFByb2plY3QuaW5uZXJUZXh0ID0gXCIrXCI7XG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RGdW5jdGlvbik7XG5cbiAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcblxuICByZXR1cm4gbXlQcm9qZWN0cztcbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdHMsIGVsZW1lbnRQcm9qZWN0LCBkb21TaG93VGFza3MgfTtcbiIsImZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH07XG4iLCJpbXBvcnQgeyBhY3RpdmVQcm9qZWN0LCBzZXRDaG9zZW5UYXNrIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGVkaXRUYXNrRm9ybSB9IGZyb20gXCIuL2Zvcm1zLmpzXCI7XG5pbXBvcnQgeyBkb21TaG93VGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0c0RvbS5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuZnVuY3Rpb24gY2xpY2tFZGl0VGFzayhldmVudCkge1xuICAvLyBpdCBkaXNwbGF5cyB0aGUgZm9ybSBmb3IgZWRpdGluZ1xuXG4gIC8vIGNvbnNvbGUuY2xlYXIoKTtcblxuICBzZXRDaG9zZW5UYXNrKGV2ZW50KTtcblxuICAvLyBjb25zb2xlLmxvZyhcIkNob3NlbiB0YXNrOiBcIiwgY2hvc2VuVGFzayk7XG4gIGNvbnN0IGVkaXRUYXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0RpdlwiKTtcbiAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRm9ybVwiKTtcblxuICBjb25zdCB7IG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3RlcyB9ID0gZXZlbnQ7XG5cbiAgLy8gQ2hhbmdlIHRoZSBsYWJlbHNcblxuICBsZXQgb2xkVGFzayA9IGVkaXRGb3JtLmVsZW1lbnRzW1wiZWRpdFRhc2tcIl07XG4gIGxldCBvbGREYXRlID0gZWRpdEZvcm0uZWxlbWVudHNbXCJkdWVEYXRlRWRpdFwiXTtcblxuICBvbGRUYXNrLnZhbHVlID0gbmFtZTtcbiAgb2xkRGF0ZS52YWx1ZSA9IGRhdGU7XG5cbiAgbGV0IG9sZE5vdGVzID0gZWRpdEZvcm0uZWxlbWVudHNbXCJ0ZXh0QXJlYVRhc2tFZGl0XCJdO1xuICBvbGROb3Rlcy52YWx1ZSA9IG5vdGVzO1xuXG4gIGxldCBvbGRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVwiICsgXCJwcmlvcml0eVwiICsgXCJdXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFByaW9yaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9sZFByaW9yaXR5W2ldLnZhbHVlID09PSBwcmlvcml0eSkge1xuICAgICAgb2xkUHJpb3JpdHlbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIC8vY29uc29sZS5sb2coXCJBY3RpdmUgcHJvamVjdDogXCIsIGFjdGl2ZVByb2plY3QpO1xuXG4gIGVkaXRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQWRkVGFzaygpIHtcbiAgLy8gY29uc29sZS5jbGVhcigpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tEaXZcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY29uc29sZS5sb2coXCJBY3RpdmUgcHJvamVjdDogXCIsIGFjdGl2ZVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBmb3JtQWRkVGFza01ldGhvZCgpIHtcbiAgLy8gQWRkcyB0aGUgdGFzayB0byB0aGUgcHJvamVjdFxuICBjb25zdCBteUZvcm1UYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRm9ybVwiKTtcbiAgY29uc3QgdGFza0RhdGEgPSBnZXRGb3JtRGF0YVRhc2sobXlGb3JtVGFzayk7XG5cbiAgY29uc3QgW3sgbmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzIH1dID0gdGFza0RhdGE7XG5cbiAgLy8gV2UgZG9uJ3Qgd2FudCB0YXNrcyB3aXRob3V0IGEgJ25hbWUnIChkZXNjcmlwdGlvbilcbiAgaWYgKG5hbWUgPT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFjdGl2ZVByb2plY3QuYWRkVGFzayhuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGlkUHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShhY3RpdmVQcm9qZWN0KSk7XG4gIH1cblxuICBsZXQgbXlQcm90b1Rhc2tzID0gbnVsbDtcbiAgbXlQcm90b1Rhc2tzID0gYWN0aXZlUHJvamVjdC5nZXRUYXNrTGlzdCgpO1xuICBjb25zdCBteVRhc2tzID0gT2JqZWN0LnZhbHVlcyhteVByb3RvVGFza3MpO1xuICBkb21TaG93VGFza3MobXlUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIGdldEZvcm1EYXRhVGFzayh3aGljaEZvcm0pIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29uc3QgbXlGb3JtVGFzayA9IHdoaWNoRm9ybTtcbiAgY29uc3QgbmV3VGFzayA9IG15Rm9ybVRhc2tbXCJuYW1lXCJdLnZhbHVlO1xuICBjb25zdCBuZXdEYXRlID0gbXlGb3JtVGFza1tcImRhdGVcIl0udmFsdWU7XG4gIGxldCBuZXdJbXBvcnRhbmNlID0gbXlGb3JtVGFza1tcInByaW9yaXR5XCJdLnZhbHVlO1xuICBjb25zdCBuZXdOb3RlcyA9IG15Rm9ybVRhc2tbXCJ0ZXh0QXJlYVRhc2tcIl0udmFsdWU7XG5cbiAgLy9jb25zb2xlLmNsZWFyKCk7XG5cbiAgY29uc29sZS5sb2coXCJBY3RpdmUgcHJvamVjdDogXCIsIGFjdGl2ZVByb2plY3QpO1xuICBjb25zdCB0YXNrU2V0ID0gW1xuICAgIHsgbmFtZTogbmV3VGFzaywgZGF0ZTogbmV3RGF0ZSwgcHJpb3JpdHk6IG5ld0ltcG9ydGFuY2UsIG5vdGVzOiBuZXdOb3RlcyB9LFxuICBdO1xuXG4gIHJldHVybiB0YXNrU2V0O1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrRm9ybSgpIHtcbiAgY29uc3QgYWRkRWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZEVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRUYXNrRGl2XCIpO1xuXG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHRhc2tGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVGFza0Zvcm1cIik7XG5cbiAgLy8gTmFtZSB0aGUgVGFza1xuICBjb25zdCBlbGVtZW50TmFtZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsVGFzay50ZXh0Q29udGVudCA9IFwiTmFtZSB0aGUgbmV3IHRhc2tcIjtcbiAgbGFiZWxUYXNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5ld1Rhc2tcIik7XG5cbiAgY29uc3QgbmFtZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3VGFza1wiKTtcbiAgbmFtZVRhc2sudmFsdWUgPSBcIk5hbWUgdGhlIHRhc2tcIjtcbiAgbmFtZVRhc2sudHlwZSA9IFwidGV4dFwiO1xuICBuYW1lVGFzay5uYW1lID0gXCJuYW1lXCI7XG5cbiAgZWxlbWVudE5hbWVUYXNrLmFwcGVuZENoaWxkKGxhYmVsVGFzayk7XG4gIGVsZW1lbnROYW1lVGFzay5hcHBlbmRDaGlsZChuYW1lVGFzayk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVsZW1lbnROYW1lVGFzayk7XG5cbiAgLy8gRHVlIERhdGVcbiAgY29uc3QgZWxlbWVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50RGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVEaXZcIik7XG5cbiAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIkRhdGU6IFwiO1xuICBsYWJlbERhdGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlRGF0ZVwiKTtcblxuICBjb25zdCBpbnB1dERhdGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dERhdGVUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZVwiKTtcbiAgaW5wdXREYXRlVGFzay50eXBlID0gXCJkYXRlXCI7XG4gIGlucHV0RGF0ZVRhc2submFtZSA9IFwiZGF0ZVwiO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChsYWJlbERhdGUpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dERhdGVUYXNrKTtcblxuICBlbGVtZW50RGF0ZS5hcHBlbmRDaGlsZChsYWJlbERhdGUpO1xuICBlbGVtZW50RGF0ZS5hcHBlbmRDaGlsZChpbnB1dERhdGVUYXNrKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudERhdGUpO1xuXG4gIC8vIFByaW9yaXR5XG5cbiAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlEaXZcIik7XG5cbiAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICBwcmlvcml0eVRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7XG5cbiAgLy8gSElHSFxuICBjb25zdCBpbnB1dFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2hQcmlvcml0eVwiKTtcbiAgaW5wdXRQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJISUdIXCIpO1xuXG4gIGlucHV0UHJpb3JpdHlIaWdoLnR5cGUgPSBcInJhZGlvXCI7XG4gIGlucHV0UHJpb3JpdHlIaWdoLm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gXCJISUdIXCI7XG4gIGxhYmVsUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eVwiKTtcbiAgbGFiZWxQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaGlnaFByaW9yaXR5XCIpO1xuXG4gIC8vIE1FRElVTVxuICBjb25zdCBpbnB1dFByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eVwiKTtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lZGl1bVByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTUVESVVNXCIpO1xuXG4gIGlucHV0UHJpb3JpdHlNZWRpdW0udHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1FRElVTVwiO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eVwiKTtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZWRpdW1Qcmlvcml0eVwiKTtcblxuICAvLyBMT1dcbiAgY29uc3QgaW5wdXRQcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlcIik7XG4gIGlucHV0UHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb3dQcmlvcml0eVwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxPV1wiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5jaGVja2VkID0gdHJ1ZTtcblxuICBpbnB1dFByaW9yaXR5TG93LnR5cGUgPSBcInJhZGlvXCI7XG4gIGlucHV0UHJpb3JpdHlMb3cubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFByaW9yaXR5TG93LnRleHRDb250ZW50ID0gXCJMT1dcIjtcbiAgbGFiZWxQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsUHJpb3JpdHlcIik7XG4gIGxhYmVsUHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG93UHJpb3JpdHlcIik7XG5cbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xuXG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5SGlnaCk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5SGlnaCk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5TWVkaXVtKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eUxvdyk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5TG93KTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlFbGVtZW50KTtcblxuICAvLyBOb3Rlc1xuXG4gIGNvbnN0IG5vdGVzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGVzRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVzRGl2XCIpO1xuXG4gIGNvbnN0IG5vdGVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5vdGVzVGl0bGUudGV4dENvbnRlbnQgPSBcIk5vdGVzXCI7XG4gIG5vdGVzVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGV4dEFyZWFUYXNrXCIpO1xuICBjb25zdCB0YXNrVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRleHRBcmVhVGFza1wiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjUwXCIpO1xuICB0YXNrVGV4dEFyZWEubmFtZSA9IFwidGV4dEFyZWFUYXNrXCI7XG5cbiAgbm90ZXNFbGVtZW50LmFwcGVuZENoaWxkKG5vdGVzVGl0bGUpO1xuICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza1RleHRBcmVhKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQobm90ZXNFbGVtZW50KTtcblxuICBhZGRFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25UYXNrRm9ybVwiKTtcbiAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBRERcIjtcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmb3JtQWRkVGFza01ldGhvZCwgZmFsc2UpO1xuXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgcmV0dXJuIGFkZEVsZW1lbnRDb250YWluZXI7XG59XG5cbmV4cG9ydCB7XG4gIGNsaWNrQWRkVGFzayxcbiAgYWRkVGFza0Zvcm0sXG4gIGVkaXRUYXNrRm9ybSxcbiAgZ2V0Rm9ybURhdGFUYXNrLFxuICBjbGlja0VkaXRUYXNrLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgZWxlbWVudFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c0RvbS5qc1wiO1xuaW1wb3J0IHtcbiAgc2hvd1Rhc2tzLFxuICBjcmVhdGVQcm9qZWN0LFxuICBzZXRBY3RpdmVQcm9qZWN0LFxuICBhY3RpdmVQcm9qZWN0LFxuICBteVByb2plY3RNZXRob2RzLFxufSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgY2xpY2tBZGRUYXNrLCBhZGRUYXNrRm9ybSB9IGZyb20gXCIuL3Rhc2tDb250YWluZXIuanNcIjtcbmltcG9ydCB7IGVkaXRUYXNrRm9ybSB9IGZyb20gXCIuL2Zvcm1zLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5sZXQgc3RhdGVVc2VyO1xuXG4vLyBDcmVhdGUgdGhlIHNhbXBsZSBwcm9qZWN0cyB0aGF0IHdpbGwgYWRkIGF0IHRoZSBlbmRcblxubGV0IHNhbXBsZVByb2plY3Q7XG5cbmxldCBzYW1wbGVQcm9qZWN0T25lO1xubGV0IHNhbXBsZVByb2plY3RUd287XG5sZXQgbmFtZVByb2plY3RTYW1wbGVPbmU7XG5sZXQgbmFtZVByb2plY3RTYW1wbGVUd287XG5sZXQgY3JlYXRlRWxlbWVudFNhbXBsZU9uZTtcbmxldCBjcmVhdGVFbGVtZW50U2FtcGxlVHdvO1xuXG4vLyBQcm9qZWN0IG9uZSAoaW5pdGlhbCBwcm9qZWN0KVxuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBzdGF0ZVVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlQXBwbGljYXRpb25cIik7XG5cbiAgaWYgKHN0YXRlVXNlciA9PSBudWxsKSB7XG4gICAgc2FtcGxlUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJwcm9qZWN0MVwiKTtcbiAgICBsZXQgYWxsTG9jYWxQcm9qZWN0cyA9IHsgYWxsUHJvamVjdHM6IFtdIH07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFsbExvY2FsUHJvamVjdHMpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3QxXCIsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3QpKTtcbiAgICBsZXQgbG9jYWxQcm9qZWN0MSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdDFcIik7XG4gICAgc2FtcGxlUHJvamVjdE9uZSA9IG15UHJvamVjdE1ldGhvZHMoSlNPTi5wYXJzZShsb2NhbFByb2plY3QxKSk7XG4gICAgY29uc29sZS5sb2coXCJzYW1wbGVcIiwgc2FtcGxlUHJvamVjdE9uZSk7XG4gICAgLy8gUHVzaCB0aGUgcHJvamVjdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIGxldCBhbGxTdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICBsZXQgcGFyc2VkUHJvamVjdHMgPSBKU09OLnBhcnNlKGFsbFN0b3JlZFByb2plY3RzKTtcbiAgICBsZXQgZmlyc3RQcm9qZWN0SWQgPSBzYW1wbGVQcm9qZWN0T25lLmdldFByb2plY3RJZCgpO1xuICAgIHBhcnNlZFByb2plY3RzLmFsbFByb2plY3RzLnB1c2goZmlyc3RQcm9qZWN0SWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwYXJzZWRQcm9qZWN0cykpO1xuICB9XG59XG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgc2FtcGxlUHJvamVjdE9uZSA9IG15UHJvamVjdE1ldGhvZHMoc2FtcGxlUHJvamVjdCk7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgc2FtcGxlUHJvamVjdE9uZS5hZGRUYXNrKFwiUmVhZCBhIDkwIGJvb2tcIiwgXCIzLzMvMjAyNFwiLCBcIkxPV1wiLCBcInNzXCIpO1xuICBzYW1wbGVQcm9qZWN0T25lLmFkZFRhc2soXCJSZWFkIEFuIEVtcHR5IDAgSG91c2VcIik7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0MVwiLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0T25lKSk7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgY29uc29sZS5sb2coXCJwcm9cIiwgc2FtcGxlUHJvamVjdE9uZSk7XG4gIHNldEFjdGl2ZVByb2plY3Qoc2FtcGxlUHJvamVjdE9uZSk7XG4gIGNvbnNvbGUubG9nKFwiQWN0aXZlIHByb2plY3Q6IFwiLCBhY3RpdmVQcm9qZWN0KTtcbn1cblxuLy8gUHJvamVjdCB0d29cbmxldCBzYW1wbGVQcm9qZWN0TmV4dDtcblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgaWYgKHN0YXRlVXNlciA9PSBudWxsKSB7XG4gICAgc2FtcGxlUHJvamVjdE5leHQgPSBjcmVhdGVQcm9qZWN0KFwicHJvamVjdDJcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0MlwiLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0TmV4dCkpO1xuICAgIGxldCBsb2NhbFByb2plY3QyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0MlwiKTtcbiAgICBzYW1wbGVQcm9qZWN0VHdvID0gbXlQcm9qZWN0TWV0aG9kcyhKU09OLnBhcnNlKGxvY2FsUHJvamVjdDIpKTtcblxuICAgIC8vIFB1c2ggdGhlIHByb2plY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBsZXQgYWxsU3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsUHJvamVjdHNcIik7XG4gICAgbGV0IHNlY29uZFByb2plY3RJZCA9IHNhbXBsZVByb2plY3RUd28uZ2V0UHJvamVjdElkKCk7XG4gICAgbGV0IHBhcnNlZFByb2plY3RzID0gSlNPTi5wYXJzZShhbGxTdG9yZWRQcm9qZWN0cyk7XG4gICAgcGFyc2VkUHJvamVjdHMuYWxsUHJvamVjdHMucHVzaChzZWNvbmRQcm9qZWN0SWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwYXJzZWRQcm9qZWN0cykpO1xuICAgIGNvbnNvbGUubG9nKFwiYWxsIDJcIiwgcGFyc2VkUHJvamVjdHMpO1xuICB9XG59IGVsc2Uge1xuICBzYW1wbGVQcm9qZWN0VHdvID0gbXlQcm9qZWN0TWV0aG9kcyhzYW1wbGVQcm9qZWN0TmV4dCk7XG4gIG5hbWVQcm9qZWN0U2FtcGxlVHdvID0gc2FtcGxlUHJvamVjdFR3by5nZXRQcm9qZWN0TmFtZSgpO1xufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgfCAoc3RhdGVVc2VyID09IG51bGwpKSB7XG4gIHNhbXBsZVByb2plY3RUd28uYWRkVGFzayhcIlJlYWQgYSBncmVhdCBib29rXCIsIFwiM2QzXCIsIFwiSElHSFwiLCBcInNhc1wiKTtcbn1cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0MlwiLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0VHdvKSk7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgbmFtZVByb2plY3RTYW1wbGVPbmUgPSBzYW1wbGVQcm9qZWN0T25lLmdldFByb2plY3ROYW1lKCk7XG4gIG5hbWVQcm9qZWN0U2FtcGxlVHdvID0gc2FtcGxlUHJvamVjdFR3by5nZXRQcm9qZWN0TmFtZSgpO1xuXG4gIGNyZWF0ZUVsZW1lbnRTYW1wbGVPbmUgPSBlbGVtZW50UHJvamVjdChcbiAgICBuYW1lUHJvamVjdFNhbXBsZU9uZSxcbiAgICBzYW1wbGVQcm9qZWN0T25lXG4gICk7XG5cbiAgY3JlYXRlRWxlbWVudFNhbXBsZVR3byA9IGVsZW1lbnRQcm9qZWN0KFxuICAgIG5hbWVQcm9qZWN0U2FtcGxlVHdvLFxuICAgIHNhbXBsZVByb2plY3RUd29cbiAgKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vXG4vLy9cbi8vXG5cbi8vIENyZWF0ZSBhbmQgYWRkIGRvbSBlbGVtZW50c1xuXG5mdW5jdGlvbiBteUhlYWRlcigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyUGFnZVwiKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlRPIERPIExJU1RcIjtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChteUhlYWRlcigpKTtcblxuY29uc3QgY29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbi8vIExlZnQgU2lkZVxuXG5jb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKFwibGVmdFNlY3Rpb25cIik7XG5sZWZ0U2lkZS5hcHBlbmRDaGlsZChyZW5kZXJQcm9qZWN0cygpKTtcblxuY29udGFpbi5hcHBlbmRDaGlsZChsZWZ0U2lkZSk7XG5cbi8vIFJpZ2h0IHNpZGVcblxuY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwicmlnaHRTZWN0aW9uXCIpO1xuXG4vLyBQYXJlbnQgdGFzayBlbGVtZW50XG5jb25zdCBteVRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm15VGFza3MuY2xhc3NMaXN0LmFkZChcInRhc2tzXCIpO1xubXlUYXNrcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15VGFza3NJRFwiKTtcblxuY29uc3QgbXlUYXNrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5teVRhc2tzVGl0bGUuaW5uZXJUZXh0ID0gXCJUQVNLU1wiO1xuXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmFkZFRhc2suY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIik7XG5hZGRUYXNrLmlubmVyVGV4dCA9IFwiK1wiO1xuXG5hZGRUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkU3RhcnRUYXNrQnV0dG9uXCIpO1xuYWRkVGFzay5pbm5lclRleHQgPSBcIitcIjtcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xpY2tBZGRUYXNrKCk7XG59KTtcbmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0FkZFRhc2spO1xuXG5yaWdodFNpZGUuYXBwZW5kQ2hpbGQobXlUYXNrcyk7XG5teVRhc2tzLmFwcGVuZENoaWxkKG15VGFza3NUaXRsZSk7XG5teVRhc2tzLmFwcGVuZENoaWxkKGFkZFRhc2spO1xubXlUYXNrcy5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSgpKTtcbm15VGFza3MuYXBwZW5kQ2hpbGQoZWRpdFRhc2tGb3JtKCkpO1xuXG4vLyBDaGlsZCB0YXNrIGVsZW1lbnQgKHRhc2sgY29udGFpbmVyKVxuY29uc3QgaG9tZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaG9tZVRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJGaXJzdFwiKTtcbmhvbWVUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0NvbnRhaW5lcklkXCIpO1xuXG5teVRhc2tzLmFwcGVuZENoaWxkKGhvbWVUYXNrQ29udGFpbmVyKTtcblxuLy8gU3VtIGl0IHVwXG5jb250YWluLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW4pO1xuXG4vL1xuY29uc3QgbGlzdE9mUHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RQcm9qZWN0c1wiKTtcblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgLy8gSXMgaXQgdGhlIGZpcnN0IHRpbWUgd2UgcnVuIHRoZSBhcHBsaWNhdGlvbj9cblxuICBpZiAoc3RhdGVVc2VyICE9PSBudWxsKSB7XG4gICAgLy8gVXBkYXRlIHRoZSB2YWx1ZVxuICAgIGxldCBteUxvY2FsUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsUHJvamVjdHNcIik7XG4gICAgbGV0IG9iamVjdExvY2FsUHJvamVjdHMgPSBKU09OLnBhcnNlKG15TG9jYWxQcm9qZWN0cyk7XG5cbiAgICBsZXQgbnVtYmVyTG9jYWxQcm9qZWN0cyA9IG9iamVjdExvY2FsUHJvamVjdHMuYWxsUHJvamVjdHMubGVuZ3RoO1xuICAgIGNvbnNvbGUubG9nKFwibnVtYmVyXCIsIG9iamVjdExvY2FsUHJvamVjdHMuYWxsUHJvamVjdHMpO1xuICAgIGlmIChudW1iZXJMb2NhbFByb2plY3RzID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJMb2NhbFByb2plY3RzOyBpKyspIHtcbiAgICAgICAgbGV0IHByb2plY3RJZCA9IG9iamVjdExvY2FsUHJvamVjdHMuYWxsUHJvamVjdHNbaV07XG4gICAgICAgIGxldCBteVByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0SWQpO1xuICAgICAgICBsZXQgbXlQcm9qZWN0UGFyc2VkID0gSlNPTi5wYXJzZShteVByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImZvciBpZFwiLCBteVByb2plY3RQYXJzZWQpO1xuICAgICAgICBsZXQgcHJvamVjdE9iamVjdCA9IG15UHJvamVjdE1ldGhvZHMobXlQcm9qZWN0UGFyc2VkKTtcbiAgICAgICAgbGV0IG5hbWVQcm9qZWN0ID0gcHJvamVjdE9iamVjdC5nZXRQcm9qZWN0TmFtZSgpO1xuXG4gICAgICAgIGxldCBjcmVhdGVFbGVtZW50ID0gZWxlbWVudFByb2plY3QobmFtZVByb2plY3QsIHByb2plY3RPYmplY3QpO1xuICAgICAgICBsaXN0T2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBGaXJzdCB0aW1lIHVzZXJcbiAgaWYgKHN0YXRlVXNlciA9PSBudWxsKSB7XG4gICAgc3RhdGVVc2VyID0gXCJkZWZhdWx0XCI7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0ZUFwcGxpY2F0aW9uXCIsIHN0YXRlVXNlcik7XG4gICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFNhbXBsZU9uZSk7XG4gICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFNhbXBsZVR3byk7XG4gICAgc2hvd1Rhc2tzKHNhbXBsZVByb2plY3RPbmUpO1xuICB9XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBsaXN0T2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50U2FtcGxlT25lKTtcbiAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFNhbXBsZVR3byk7XG4gIHNob3dUYXNrcyhzYW1wbGVQcm9qZWN0T25lKTtcbn1cblxuLy8gV2hhdCBoYXBwZW5zIHdoZW4geW91IHJlZnJlc2ggdGhlIHBhZ2VcbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIGxldCBhY3RpdmVQcm9qZWN0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQWN0aXZlUHJvamVjdFwiKTtcblxuICBpZiAoYWN0aXZlUHJvamVjdE5hbWUgIT09IG51bGwgJiYgYWN0aXZlUHJvamVjdE5hbWUgIT09IFwianVzdERlbGV0ZWRcIikge1xuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYWN0aXZlUHJvamVjdE5hbWUpO1xuXG4gICAgLy8gVG8gdXNlIHRoZSBvYmplY3QncyBtZXRob2RzXG4gICAgbGV0IHBhcnNlZEFjdGl2ZSA9IEpTT04ucGFyc2UoYWN0aXZlUHJvamVjdCk7XG4gICAgbGV0IGFjdGl2ZVByb2plY3RPYmplY3QgPSBteVByb2plY3RNZXRob2RzKHBhcnNlZEFjdGl2ZSk7XG5cbiAgICBzZXRBY3RpdmVQcm9qZWN0KGFjdGl2ZVByb2plY3RPYmplY3QpO1xuICAgIGxldCBhY3RpdmVQcm9qZWN0VGFza3MgPSBhY3RpdmVQcm9qZWN0T2JqZWN0LmdldFRhc2tMaXN0KCk7XG5cbiAgICBpZiAoXG4gICAgICBhY3RpdmVQcm9qZWN0ICE9PSBudWxsICYmXG4gICAgICBhY3RpdmVQcm9qZWN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGFjdGl2ZVByb2plY3RUYXNrcyAhPT0ge30gJiZcbiAgICAgIGFjdGl2ZVByb2plY3ROYW1lICE9PSBcImp1c3REZWxldGVkXCJcbiAgICApIHtcbiAgICAgIHNob3dUYXNrcyhhY3RpdmVQcm9qZWN0T2JqZWN0KTtcbiAgICB9XG4gIH1cbn1cblxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGlja0FkZFRhc2soYWN0aXZlUHJvamVjdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==