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
  //console.clear();

  // We set the active project and change the color of the button
  if (activeProject !== undefined) {
    let projectId = activeProject.getProjectId();
    let elementId = document.getElementById(projectId);
    if (elementId !== null) {
      elementId.classList.remove("activeProject");
    }
  }
  activeProject = setProject;

  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)("localStorage") && activeProject !== undefined) {
    let newProjectId = setProject.getProjectId();
    localStorage.setItem("ActiveProject", newProjectId);
  }
  let _projectId = activeProject.getProjectId();
  let _elementId = document.getElementById(_projectId);

  if (_elementId !== null) {
    _elementId.classList.add("activeProject");
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

    let newProject;

    if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)("localStorage")) {
      newProject = myProjectMethods(newProjectEmpty);
      let projectId = newProject.getProjectId();
      localStorage.setItem(projectId, JSON.stringify(newProjectEmpty));
      let allStoredProjects = localStorage.getItem("localProjects");
      let parsedProjects = JSON.parse(allStoredProjects);
      parsedProjects.allProjects.push(projectId);
      localStorage.setItem("localProjects", JSON.stringify(parsedProjects));
    } else {
      newProject = myProjectMethods(newProjectEmpty);
    }

    appendProject(newTitle, newProject);
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
  return () => {
    idProject++;
    return idProject;
  };
};

const assignProjectId = createNewId();
const assignTaskId = createNewId();

function appendProject(newProjectTitle, keyProject) {
  const listProjects = document.getElementById("listProjects");
  const titleProject = (0,_projectsDom_js__WEBPACK_IMPORTED_MODULE_0__.elementProject)(newProjectTitle, keyProject);

  setActiveProject(keyProject);
  showTasks(keyProject);
  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)("localStorage")) {
    localStorage.setItem(newProjectTitle, JSON.stringify(keyProject));
    listProjects.appendChild(titleProject);
  } else {
    listProjects.appendChild(titleProject);
  }
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
  console.log(project);
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
  console.log("pr id ", projectId);
  newProject.setAttribute("id", projectId);

  newProject.textContent = nameProjectDom;
  console.log("Element project", keyProject);
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
  //console.clear();

  const myContainer = document.getElementById("taskContainerId");
  myContainer.replaceChildren();
  console.log("myTasks dom, ", myTasks);

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

// function storeProject(name, myProject) {
//   localStorage.setItem(name, JSON.stringify(myProject));
// }

// function storeActiveProject(name, myProject){
//   localStorage.setItem(name, myProject);
// }




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

const sampleProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("project1");

let sampleProjectOne;
let sampleProjectTwo;
let nameProjectSampleOne;
let nameProjectSampleTwo;
let createElementSampleOne;
let createElementSampleTwo;

// Project one

if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage")) {
  stateUser = localStorage.getItem("stateApplication");

  if (stateUser == null) {
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
    console.log("arrray", parsedProjects.allProjects);
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
const sampleProjectNext = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("project2");

if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage")) {
  if (stateUser == null) {
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
  // We want to show some initial projects for the first time

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

    console.log("I want to stay.", objectLocalProjects.allProjects);
  }

  // First time user
  if (stateUser == null) {
    stateUser = "default";
    localStorage.setItem("stateApplication", stateUser);

    console.log("user", stateUser);
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

addTask.addEventListener("click", () => {
  (0,_taskContainer_js__WEBPACK_IMPORTED_MODULE_3__.clickAddTask)(_projects_js__WEBPACK_IMPORTED_MODULE_2__.activeProject);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLGdGQUFnRixPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFdBQVcsb0JBQW9CLFdBQVcsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsYUFBYSxPQUFPLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sUUFBUSxPQUFPLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsWUFBWSxhQUFhLFFBQVEsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sZUFBZSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxTQUFTLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxVQUFVLE1BQU0sWUFBWSxPQUFPLFdBQVcsT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksUUFBUSxZQUFZLE9BQU8sWUFBWSxRQUFRLFlBQVksUUFBUSxXQUFXLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLGFBQWEsS0FBSyxrQkFBa0IsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxTQUFTLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE1BQU0sTUFBTSxNQUFNLE9BQU8sYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLEtBQUssTUFBTSxPQUFPLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sU0FBUyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFdBQVcsS0FBSyxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGNBQWMsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sU0FBUyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxVQUFVLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxV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QUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkx3QztBQUNoQjs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSw2REFBZ0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBWTtBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOERBQWdCO0FBQzVDOztBQUVBLDRCQUE0QiwrREFBYztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTs7QUFFQSxLQUFLLDZEQUFnQjtBQUNyQjtBQUNBO0FBQ0EsRUFBRSx1REFBUztBQUNYOztBQUVBO0FBQ0EsRUFBRSwrREFBWSxDQUFDLHVEQUFhO0FBQzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0c0RvbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFdlIG5lZWQgdGhlIFwiYmRvOi1tb3otaGFzLWRpci1hdHRyXCIgYml0IGJlY2F1c2UgXCJiZG9cIiBoYXMgbG93ZXJcbiAgICBzcGVjaWZpY2l0eSB0aGFuIHRoZSBcIjotbW96LWhhcy1kaXItYXR0clwiIHNlbGVjdG9yIGFib3ZlLiAqL1xuYmRvLFxuYmRvOi1tb3otaGFzLWRpci1hdHRyIHtcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGUtb3ZlcnJpZGU7XG59XG5cbnRleHRhcmVhOi1tb3otZGlyLWF0dHItbGlrZS1hdXRvLFxucHJlOi1tb3otZGlyLWF0dHItbGlrZS1hdXRvIHtcbiAgICB1bmljb2RlLWJpZGk6IHBsYWludGV4dDtcbn1cblxuLyogYmxvY2tzICovXG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5kaXYsXG5kdCxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5mb3JtLFxuaGVhZGVyLFxuaGdyb3VwLFxuaHRtbCxcbm1haW4sXG5uYXYsXG5zZWFyY2gsXG5zZWN0aW9uLFxuc3VtbWFyeSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMFxufVxuXG5wLFxuZGwsXG5tdWx0aWNvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG5kZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcbn1cblxuYmxvY2txdW90ZSxcbmZpZ3VyZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDQwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDQwcHg7XG59XG5cbmFkZHJlc3Mge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuY2VudGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlcjtcbn1cblxuaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLjY3ZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjY3ZW07XG59XG5cbmgyLFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLjgzZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjgzZW07XG59XG5cbmgzLFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjE3ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG5oNCxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuMDBlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuMzNlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjMzZW07XG59XG5cbmg1LFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuODNlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuNjdlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjY3ZW07XG59XG5cbmg2LFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjY3ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAyLjMzZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMi4zM2VtO1xufVxuXG5saXN0aW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogLW1vei1maXhlZDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbn1cblxueG1wLFxucHJlLFxucGxhaW50ZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogLW1vei1maXhlZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbn1cblxuLyogdGFibGVzICovXG5cbnRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgLyogWFhYbGRiIGRvIHdlIHdhbnQgdGhpcyBpZiB3ZSdyZSBib3JkZXItY29sbGFwc2U6Y29sbGFwc2UgPyAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1pbmRlbnQ6IDA7XG59XG5cbnRhYmxlW2FsaWduPVwibGVmdFwiXSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbnRhYmxlW2FsaWduPVwicmlnaHRcIl0ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuXG4vKiBib3JkZXIgY29sbGFwc2UgcnVsZXMgKi9cblxuLyogU2V0IGhpZGRlbiBpZiB3ZSBoYXZlICdmcmFtZScgb3IgJ3J1bGVzJyBhdHRyaWJ1dGUuXG4gICAgICBTZXQgaXQgb24gYWxsIHNpZGVzIHdoZW4gd2UgZG8gc28gdGhlcmUncyBtb3JlIGNvbnNpc3RlbmN5XG4gICAgICBpbiB3aGF0IGF1dGhvcnMgc2hvdWxkIGV4cGVjdCAqL1xuXG4vKiBQdXQgdGhpcyBmaXJzdCBzbyAnYm9yZGVyJyBhbmQgJ2ZyYW1lJyBydWxlcyBjYW4gb3ZlcnJpZGUgaXQuICovXG50YWJsZVtydWxlc10ge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcbn1cblxuLyogJ2JvcmRlcicgYmVmb3JlICdmcmFtZScgc28gJ2ZyYW1lJyBvdmVycmlkZXNcbiAgICAgICBBIGJvcmRlciB3aXRoIGEgZ2l2ZW4gdmFsdWUgc2hvdWxkLCBvZiBjb3Vyc2UsIHBhc3MgdGhhdCB2YWx1ZVxuICAgICAgIGFzIHRoZSBib3JkZXItd2lkdGggaW4gcGl4ZWxzIC0+IGF0dHIgbWFwcGluZyAqL1xuXG4vKiA6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyBpcyBsaWtlIFtib3JkZXJdOm5vdChbYm9yZGVyPVwiMFwiXSkgZXhjZXB0IGl0XG4gICAgICBhbHNvIGNoZWNrcyBmb3Igb3RoZXIgemVyby1saWtlIHZhbHVlcyBhY2NvcmRpbmcgdG8gSFRNTCBhdHRyaWJ1dGVcbiAgICAgIHBhcnNpbmcgcnVsZXMgKi9cbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8ge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbn1cblxudGFibGVbZnJhbWVdIHtcbiAgICBib3JkZXI6IHRoaW4gaGlkZGVuO1xufVxuXG4vKiBzcGVjaWZpY2l0eSBtdXN0IGJlYXQgdGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyBydWxlIGFib3ZlICovXG50YWJsZVtmcmFtZT1cInZvaWRcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cImFib3ZlXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldCBoaWRkZW4gaGlkZGVuIGhpZGRlbjtcbn1cblxudGFibGVbZnJhbWU9XCJiZWxvd1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gaGlkZGVuIG91dHNldCBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwibGhzXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBoaWRkZW4gaGlkZGVuIG91dHNldDtcbn1cblxudGFibGVbZnJhbWU9XCJyaHNcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIG91dHNldCBoaWRkZW4gaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cImhzaWRlc1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQgaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cInZzaWRlc1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gb3V0c2V0O1xufVxuXG50YWJsZVtmcmFtZT1cImJveFwiXSxcbnRhYmxlW2ZyYW1lPVwiYm9yZGVyXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbn1cblxuXG4vKiBJbnRlcm5hbCBUYWJsZSBCb3JkZXJzICovXG5cbi8qICdib3JkZXInIGNlbGwgYm9yZGVycyBmaXJzdCAqL1xuXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dHI+dGQsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dHI+dGgsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dGQsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dGgsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPnRkLFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz50aCB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XG59XG5cbi8qIGNvbGxhcHNlIG9ubHkgaWYgcnVsZXMgYXJlIHJlYWxseSBzcGVjaWZpZWQgKi9cbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwibm9uZVwiXSwgW3J1bGVzPVwiXCJdKSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLyogb25seSBzcGVjaWZpZWQgcnVsZXMgb3ZlcnJpZGUgJ2JvcmRlcicgc2V0dGluZ3NcbiAgIChpbmNyZWFzZWQgc3BlY2lmaWNpdHkgdG8gYWNoaWV2ZSB0aGlzKSAqL1xudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPnRyPnRkLFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPio+dHI+dGQsXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+dHI+dGgsXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+Kj50cj50aCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT50ZCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT50aCB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT4qPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+Kj50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+Kj50cj50ZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT4qPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxudGFibGVbcnVsZXNdW3J1bGVzPVwicm93c1wiXT50cixcbnRhYmxlW3J1bGVzXVtydWxlcz1cInJvd3NcIl0+Kj50ciB7XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYmxvY2stZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJjb2xzXCJdPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiY29sc1wiXT4qPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiY29sc1wiXT50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImNvbHNcIl0+Kj50cj50aCB7XG4gICAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItaW5saW5lLWVuZC1zdHlsZTogc29saWQ7XG59XG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT5jb2xncm91cCB7XG4gICAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItaW5saW5lLWVuZC1zdHlsZTogc29saWQ7XG59XG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT50Zm9vdCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT50aGVhZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT50Ym9keSB7XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYmxvY2stZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxuXG4vKiBjYXB0aW9uIGluaGVyaXRzIGZyb20gdGFibGUgbm90IHRhYmxlLW91dGVyICovXG5jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGVbYWxpZ249XCJjZW50ZXJcIl0+Y2FwdGlvbiB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcbn1cblxudGFibGVbYWxpZ249XCJjZW50ZXJcIl0+Y2FwdGlvblthbGlnbj1cImxlZnRcIl06ZGlyKGx0cikge1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwibGVmdFwiXTpkaXIocnRsKSB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbn1cblxudGFibGVbYWxpZ249XCJjZW50ZXJcIl0+Y2FwdGlvblthbGlnbj1cInJpZ2h0XCJdOmRpcihsdHIpIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwicmlnaHRcIl06ZGlyKHJ0bCkge1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuXG50ciB7XG4gICAgZGlzcGxheTogdGFibGUtcm93O1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xufVxuXG5jb2wge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbjtcbn1cblxuY29sZ3JvdXAge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbi1ncm91cDtcbn1cblxudGJvZHkge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG50aGVhZCB7XG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnRmb290IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1mb290ZXItZ3JvdXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogZm9yIFhIVE1MIHRhYmxlcyB3aXRob3V0IHRib2R5ICovXG50YWJsZT50ciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudGQge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XG4gICAgdGV4dC1hbGlnbjogdW5zZXQ7XG4gICAgcGFkZGluZzogMXB4O1xufVxuXG50aCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXItb3ItaW5oZXJpdDtcbn1cblxuOmlzKHRyLCB0Ym9keSwgdGhlYWQsIHRmb290LCB0YWJsZSk+Zm9ybTotbW96LWlzLWh0bWwge1xuICAgIC8qIEltcG9ydGFudDogZG9uJ3Qgc2hvdyB0aGVzZSBmb3JtcyBpbiBIVE1MICovXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG50YWJsZVtib3JkZXJjb2xvcl0+dGJvZHksXG50YWJsZVtib3JkZXJjb2xvcl0+dGhlYWQsXG50YWJsZVtib3JkZXJjb2xvcl0+dGZvb3QsXG50YWJsZVtib3JkZXJjb2xvcl0+Y29sLFxudGFibGVbYm9yZGVyY29sb3JdPmNvbGdyb3VwLFxudGFibGVbYm9yZGVyY29sb3JdPnRyLFxudGFibGVbYm9yZGVyY29sb3JdPio+dHIsXG50YWJsZVtib3JkZXJjb2xvcl0+dHI+dGQsXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cj50ZCxcbnRhYmxlW2JvcmRlcmNvbG9yXT50cj50aCxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyPnRoIHtcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIGlubGluZXMgKi9cblxucTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IG9wZW4tcXVvdGU7XG59XG5cbnE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGNsb3NlLXF1b3RlO1xufVxuXG5iLFxuc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5pLFxuY2l0ZSxcbmVtLFxudmFyLFxuZGZuIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbnR0LFxuY29kZSxcbmtiZCxcbnNhbXAge1xuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xufVxuXG51LFxuaW5zIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxucyxcbnN0cmlrZSxcbmRlbCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbmJpZyB7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbnNtYWxsIHtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbnN1YiB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbnN1cCB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxubm9iciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxubWFyayB7XG4gICAgYmFja2dyb3VuZDogTWFyaztcbiAgICBjb2xvcjogTWFya1RleHQ7XG59XG5cbi8qIHRpdGxlcyAqL1xuYWJiclt0aXRsZV0sXG5hY3JvbnltW3RpdGxlXSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBkb3R0ZWQgdW5kZXJsaW5lO1xufVxuXG4vKiBsaXN0cyAqL1xuXG51bCxcbm1lbnUsXG5kaXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG59XG5cbnVsLFxub2wsXG5tZW51IHtcbiAgICBjb3VudGVyLXJlc2V0OiBsaXN0LWl0ZW07XG59XG5cbm9sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xufVxuXG5saSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgIHRleHQtYWxpZ246IG1hdGNoLXBhcmVudDtcbn1cblxuLyogbmVzdGVkIGxpc3RzIGhhdmUgbm8gdG9wL2JvdHRvbSBtYXJnaW5zICovXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSB1bCxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIG9sLFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGlyLFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgbWVudSxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIGRsIHtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbn1cblxuLyogMiBkZWVwIHVub3JkZXJlZCBsaXN0cyB1c2UgYSBjaXJjbGUgKi9cbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgdWwsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIG1lbnUsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIGRpciB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG59XG5cbi8qIDMgZGVlcCAob3IgbW9yZSkgdW5vcmRlcmVkIGxpc3RzIHVzZSBhIHNxdWFyZSAqL1xuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSA6aXMob2wsIHVsLCBtZW51LCBkaXIpIHVsLFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSA6aXMob2wsIHVsLCBtZW51LCBkaXIpIG1lbnUsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgZGlyIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbn1cblxuXG4vKiBsZWFmcyAqL1xuXG4vKiA8aHI+IG5vc2hhZGUgYW5kIGNvbG9yIGF0dHJpYnV0ZXMgYXJlIGhhbmRsZWQgY29tcGxldGVseSBieVxuICAqIEhUTUxIUkVsZW1lbnQ6Ok1hcEF0dHJpYnV0ZXNJbnRvUnVsZS5cbiAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtaHItZWxlbWVudC0yXG4gICovXG5ociB7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDAuNWVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8qIEZJWE1FOiBUaGlzIGlzIG5vdCByZWFsbHkgcGVyIHNwZWMgKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaHJbc2l6ZT1cIjFcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZSBub25lIG5vbmU7XG59XG5cbi8qIE5vdGUgdGhhdCB3ZSBvbmx5IGludGVuZCBmb3IgdGhlIGFsdCBjb250ZW50IHRvIHNob3cgdXAgaWYgdGhlIGltYWdlIGlzXG4gICogYnJva2VuLiBCdXQgbm9uLWJyb2tlbiBpbWFnZXMvaW5wdXRzIHdpbGwgaGF2ZSBhIHJlcGxhY2VkIGJveCwgYW5kIHRodXMgd2VcbiAgKiB3b24ndCB3ZSBkb24ndCBnZW5lcmF0ZSB0aGUgcHNldWRvLWVsZW1lbnQgYW55d2F5cy4gVGhpcyBwcmV2ZW50c1xuICAqIHVubmVjZXNzYXJ5IHJlZnJhbWluZyB3aGVuIGltYWdlcyBiZWNvbWUgYnJva2VuIC8gbm9uLWJyb2tlbi4gKi9cbmlucHV0W3R5cGU9aW1hZ2VdOjpiZWZvcmUsXG5pbWc6OmJlZm9yZSB7XG4gICAgY29udGVudDogLW1vei1hbHQtY29udGVudCAhaW1wb3J0YW50O1xuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcbn1cblxuaW1nW3VzZW1hcF0sXG5vYmplY3RbdXNlbWFwXSB7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbmZyYW1lc2V0IHtcbiAgICBkaXNwbGF5OiBibG9jayAhIGltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogY2xpcDtcbiAgICBwb3NpdGlvbjogc3RhdGljICEgaW1wb3J0YW50O1xuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhIGltcG9ydGFudDtcbn1cblxuZnJhbWUge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgISBpbXBvcnRhbnQ7XG59XG5cbmlmcmFtZSB7XG4gICAgYm9yZGVyOiAycHggaW5zZXQ7XG59XG5cbnNwYWNlciB7XG4gICAgcG9zaXRpb246IHN0YXRpYyAhIGltcG9ydGFudDtcbiAgICBmbG9hdDogbm9uZSAhIGltcG9ydGFudDtcbn1cblxuY2FudmFzIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuaWZyYW1lOmZvY3VzLXZpc2libGUsXG5ib2R5OmZvY3VzLXZpc2libGUsXG5odG1sOmZvY3VzLXZpc2libGUge1xuICAgIC8qIFRoZXNlIGVsZW1lbnRzIGhpc3RvcmljYWxseSBkb24ndCBzaG93IG91dGxpbmVzIHdoZW4gZm9jdXNlZCBieSBkZWZhdWx0LlxuICAgICogV2UgY291bGQgY29uc2lkZXIgY2hhbmdpbmcgdGhhdCBpZiBuZWVkZWQuICovXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbn1cblxuLyogaGlkZGVuIGVsZW1lbnRzOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNoaWRkZW4tZWxlbWVudHNcbiAgKlxuICAqIEV4Y2VwdGlvbnM6XG4gICpcbiAgKiAgKiBhcmVhIGRlY2xhcmF0aW9uIG5lZWRzIHRvIGJlICFpbXBvcnRhbnQsIHNlZSBiZWxvdyAvIGJ1ZyAxMzUwNDAuICBUaGF0J3NcbiAgKiAgICBoYWNreSBhbmQgYnJva2VuLlxuICAqXG4gICogICogW2hpZGRlbl0gaXMgaW1wbGVtZW50ZWQgYXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIHRvIGF2b2lkIGEgZ2xvYmFsXG4gICogICAgc2VsZWN0b3IgaW4gYSBVQSBzaGVldC5cbiAgKi9cbmJhc2UsXG5iYXNlZm9udCxcbmRhdGFsaXN0LFxuaGVhZCxcbmxpbmssXG5tZXRhLFxubm9lbWJlZCxcbm5vZnJhbWVzLFxucGFyYW0sXG5ycCxcbnNjcmlwdCxcbnN0eWxlLFxudGVtcGxhdGUsXG50aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuYXJlYSB7XG4gICAgLyogRG9uJ3QgZ2l2ZSBpdCBmcmFtZXMgb3RoZXIgdGhhbiBpdHMgaW1hZ2VmcmFtZSAqL1xuICAgIGRpc3BsYXk6IG5vbmUgISBpbXBvcnRhbnQ7XG59XG5cbmlmcmFtZTpmdWxsc2NyZWVuIHtcbiAgICAvKiBpZnJhbWVzIGluIGZ1bGwtc2NyZWVuIG1vZGUgZG9uJ3Qgc2hvdyBhIGJvcmRlci4gKi9cbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4vKiBEZXRhaWxzIGFuZCBzdW1tYXJ5XG4gICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGhlLWRldGFpbHMtYW5kLXN1bW1hcnktZWxlbWVudHNcbiAgKlxuICAqIE5vdGUgdGhhdCB0aGVzZSBydWxlcyBuZWVkIHRvIGJlIGR1cGxpY2F0ZWQgaW4gZGV0YWlscy5jc3MgZm9yIHRoZSBhbm9ueW1vdXNcbiAgKiBzdW1tYXJ5LCB3aGljaCB3b3VsZG4ndCBtYXRjaCBvdGhlcndpc2UuXG4gICpcbiAgKiBUaGUgc3BlYyBoZXJlIHNheXMgc29tZXRoaW5nIGRpZmZlcmVudCwgc2VlXG4gICogaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy84NjEwXG4gICovXG5kZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LWl0ZW0gMDtcbiAgICBsaXN0LXN0eWxlOiBkaXNjbG9zdXJlLWNsb3NlZCBpbnNpZGU7XG59XG5cbmRldGFpbHNbb3Blbl0+c3VtbWFyeTpmaXJzdC1vZi10eXBlIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2Nsb3N1cmUtb3Blbjtcbn1cblxuLyogbWVkaWEgZWxlbWVudHMgKi9cbnZpZGVvIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG52aWRlbz5pbWc6LW1vei1uYXRpdmUtYW5vbnltb3VzIHtcbiAgICAvKiBWaWRlbyBwb3N0ZXIgaW1hZ2VzIHNob3VsZCByZW5kZXIgd2l0aCB0aGUgdmlkZW8gZWxlbWVudCdzIFwib2JqZWN0LWZpdFwiICZcbiAgICAgIFwib2JqZWN0LXBvc2l0aW9uXCIgcHJvcGVydGllcyAqL1xuICAgIG9iamVjdC1maXQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICBvYmplY3QtcG9zaXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmF1ZGlvW2NvbnRyb2xzXSB7XG4gICAgLyogVGhpcyBlbnN1cmVzIHRoYXQgaW50cmluc2ljIHNpemluZyBjYW4gcmVsaWFibHkgc2hyaW5rd3JhcCBvdXJcbiAgICAgICBjb250cm9scyAod2hpY2ggYXJlIGFsc28gYWx3YXlzIGhvcml6b250YWwpIGFuZCBwcm9kdWNlIGFcbiAgICAgICByZWFzb25hYmxlIGludHJpbnNpYyBzaXplIGZyb20gdGhlbS4gKi9cbiAgICB3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDtcbn1cblxuKnwqOjotbW96LWh0bWwtY2FudmFzLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgLyogd2Ugd2FudCB0byBiZSBhbiBhYnNvbHV0ZSBhbmQgZml4ZWQgY29udGFpbmVyICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgIWltcG9ydGFudDtcbn1cblxudmlkZW8+LmNhcHRpb24tYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKipcbiAgKiBUaGUgcHNldWRvIGVsZW1lbnQgd29uJ3QgaW5oZXJpdCBDU1Mgc3R5bGVzIGZyb20gaXRzIGRpcmVjdCBwYXJlbnQsIFxcYDo6Y3VlXFxgXG4gICogd291bGQgYWN0dWFsbHkgaW5oZXJpdCBzdHlsZXMgZnJvbSB2aWRlbyBiZWNhdXNlIGl0J3MgdmlkZW8ncyBwc2V1ZG8gZWxlbWVudC5cbiAgKiBUaGVyZWZvcmUsIHdlIGhhdmUgdG8gZXhwbGljaXRseSBzZXQgc29tZSBzdHlsZXMgd2hpY2ggYXJlIGFscmVhZHkgZGVmaW5lZFxuICAqIGluIGl0cyBwYXJlbnQgZWxlbWVudCBpbiB2dHQuanNtLlxuICAqL1xuOjpjdWUge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY3VlLWZvbnQtc2l6ZSk7XG4gICAgd3JpdGluZy1tb2RlOiB2YXIoLS1jdWUtd3JpdGluZy1tb2RlLCBpbmhlcml0KTtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIFRPRE8gOiBlbmFibGUgdW5pY29kZS1iaWRpLCByaWdodCBub3cgZW5hYmxlIGl0IHdvdWxkIGNhdXNlIGluY29ycmVjdFxuICAgICAgICAgICAgIGRpc3BsYXkgZGlyZWN0aW9uLCBtYXliZSByZWxhdGVkIHdpdGggYnVnIDE1NTg0MzEuICovXG59XG5cbi8qIDxkaWFsb2c+IGVsZW1lbnQgc3R5bGVzICovXG5cbmRpYWxvZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGluc2V0LWlubGluZS1zdGFydDogMDtcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItd2lkdGg6IGluaXRpYWw7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXM7XG4gICAgY29sb3I6IENhbnZhc1RleHQ7XG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xufVxuXG5kaWFsb2c6bm90KFtvcGVuXSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpYWxvZzptb2RhbCB7XG4gICAgLW1vei10b3AtbGF5ZXI6IHRvcCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwO1xuICAgIGluc2V0LWJsb2NrLWVuZDogMDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDZweCAtIDJlbSk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcbn1cblxuLyogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jZmxvdy1jb250ZW50LTMgKi9cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxubWFycXVlZSB7XG4gICAgaW5saW5lLXNpemU6IC1tb3otYXZhaWxhYmxlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbm1hcnF1ZWU6aXMoW2RpcmVjdGlvbj1cInVwXCJdLCBbZGlyZWN0aW9uPVwiZG93blwiXSkge1xuICAgIGJsb2NrLXNpemU6IDIwMHB4O1xufVxuXG4vKiBSdWJ5ICovXG5cbnJ1Ynkge1xuICAgIGRpc3BsYXk6IHJ1Ynk7XG59XG5cbnJiIHtcbiAgICBkaXNwbGF5OiBydWJ5LWJhc2U7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxucnQge1xuICAgIGRpc3BsYXk6IHJ1YnktdGV4dDtcbn1cblxucnRjIHtcbiAgICBkaXNwbGF5OiBydWJ5LXRleHQtY29udGFpbmVyO1xufVxuXG5ydGMsXG5ydCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IDUwJTtcbiAgICAtbW96LW1pbi1mb250LXNpemUtcmF0aW86IDUwJTtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cblxuQG1lZGlhIG5vdCAoLW1vei1wbGF0Zm9ybTogd2luZG93cykge1xuXG4gICAgcnRjLFxuICAgIHJ0IHtcbiAgICAgICAgLyogVGhlIHdpZGVseS11c2VkIFdpbmRvd3MgZm9udCBNZWlyeW8gZG9lc24ndCB3b3JrIGZpbmUgd2l0aCB0aGlzXG4gICAgICogc2V0dGluZywgc28gZGlzYWJsZSB0aGlzIG9uIFdpbmRvd3MuIFdlIHNob3VsZCByZS1lbmFibGUgaXQgb25jZVxuICAgICAqIE1pY3Jvc29mdCBmaXhlcyB0aGlzIGlzc3VlLiBTZWUgYnVnIDExNjQyNzkuICovXG4gICAgICAgIGZvbnQtdmFyaWFudC1lYXN0LWFzaWFuOiBydWJ5O1xuICAgIH1cbn1cblxucnRjLFxucnQge1xuICAgIHRleHQtZW1waGFzaXM6IG5vbmU7XG59XG5cbnJ0YzpsYW5nKHpoKSxcbnJ0OmxhbmcoemgpIHtcbiAgICBydWJ5LWFsaWduOiBjZW50ZXI7XG59XG5cbnJ0YzpsYW5nKHpoLVRXKSxcbnJ0OmxhbmcoemgtVFcpIHtcbiAgICBmb250LXNpemU6IDMwJTtcbiAgICAvKiBib3BvbW9mbyAqL1xuICAgIC1tb3otbWluLWZvbnQtc2l6ZS1yYXRpbzogMzAlO1xufVxuXG5ydGM+cnQge1xuICAgIGZvbnQtc2l6ZTogdW5zZXQ7XG59XG5cbnJ1YnksXG5yYixcbnJ0LFxucnRjIHtcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGU7XG59XG5cbi8qIFNoYWRvdyBET00gdjFcbiAgKiBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXNjb3BpbmcvI3Nsb3RzLWluLXNoYWRvdy10cmVlICovXG5zbG90IHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLyogVW4taW52ZXJ0IGltYWdlcyBhbmQgdmlkZW9zIGZvciB1c2VycyB1c2luZyBpbnZlcnRlZCBjb2xvcnMuXG4gICogXCJVc2VyIGFnZW50cyBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIHJ1bGUgdG8gdGhlaXIgVUEgc3R5bGUgc2hlZXRcIlxuICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNS8jaW52ZXJ0ZWRcbiAgKi9cbkBtZWRpYSAoaW52ZXJ0ZWQtY29sb3JzKSB7XG5cbiAgICBpbWc6bm90KHBpY3R1cmUgPiBpbWcpLFxuICAgIHBpY3R1cmUsXG4gICAgdmlkZW8ge1xuICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbiAgICB9XG59XG5cbi8qIEhpZGUgbm9zY3JpcHQgZWxlbWVudHMgaWYgc2NyaXB0aW5nIGlzIGVuYWJsZWQgKi9cbkBtZWRpYSAoc2NyaXB0aW5nKSB7XG4gICAgbm9zY3JpcHQge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgcHJpbnQge1xuXG4gICAgaW5wdXQsXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0LFxuICAgIGJ1dHRvbixcbiAgICBkZXRhaWxzIHtcbiAgICAgICAgLW1vei11c2VyLWlucHV0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4vKiBQb3BvdmVyIFVBIHN0eWxlLCBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNmbG93LWNvbnRlbnQtMyAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhLXF1ZXJ5LW5vLWludmFsaWQgKi9cbkBtZWRpYSAoLW1vei1ib29sLXByZWY6IFwiZG9tLmVsZW1lbnQucG9wb3Zlci5lbmFibGVkXCIpIHtcbiAgICBbcG9wb3Zlcl06bm90KDpwb3BvdmVyLW9wZW4pOm5vdChkaWFsb2dbb3Blbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBkaWFsb2c6cG9wb3Zlci1vcGVuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgW3BvcG92ZXJdIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJvcmRlcjogc29saWQ7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGNvbG9yOiBDYW52YXNUZXh0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXM7XG4gICAgfVxuXG4gICAgOnBvcG92ZXItb3BlbiB7XG4gICAgICAgIC1tb3otdG9wLWxheWVyOiB0b3A7XG4gICAgfVxuXG4gICAgOnBvcG92ZXItb3Blbjo6YmFja2Ryb3Age1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cblxuXG5cblxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG5cblxufVxuXG4uaGVhZGVyUGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDEsIDQxLCAwLjEwNyk7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiAwLjhyZW0gMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogNjMzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLyogXG4uY29udGFpbmVyOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbn0gKi9cblxuXG4ubGVmdFNlY3Rpb24ge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yaWdodFNlY3Rpb24ge1xuICAgIHdpZHRoOiA2NSU7XG5cbiAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xufVxuXG5cbi5wcm9qZWN0cyB7XG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XG4gICAgd2lkdGg6IDYwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NhbG1vbjtcbiAgICBwYWRkaW5nOiA1cHggM3B4IDE1cHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuI2J1dHRvblByb2plY3RGb3JtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDE4cHg7XG59XG5cbiNsYWJlbFByb2plY3Qge1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4jaW5wdXRQcm9qZWN0IHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xufVxuXG4udGFza3Mge1xuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzYWxtb247XG4gICAgcGFkZGluZzogNXB4IDAgMTVweCAwO1xuICAgIC8qIHotaW5kZXg6IDE7ICovXG59XG5cbi50YXNrc1VuaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtraGFraTtcbn1cblxuLnRhc2tVbml0SW1wb3J0YW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Rcbn1cblxuLnRhc2tVbml0VXJnZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xufVxuXG5cblxuLnByb2plY3RzVW5pdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmJ1dHRvblByb2plY3RzLFxuLmFjdGl2ZVByb2plY3Qge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA1O1xuICAgIHBsYWNlLXNlbGY6IHN0cmV0Y2g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcbiAgICBtYXJnaW46IDhweDtcbiAgICBwYWRkaW5nOiA4cHg7XG5cbn1cblxuLnJlbW92ZVByb2plY3RzIHtcbiAgICBncmlkLWNvbHVtbjogNyAvIDg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbn1cblxuLmFjdGl2ZVByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2xpc3RQcm9qZWN0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5oaWRlUmVtb3ZlQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbiNzdGFydFByb2plY3RCdXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cblxuXG4jYWRkUHJvamVjdERpdiB7XG5cbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTUxLCAyMjIpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDFyZW07XG4gICAgdG9wOiAxcmVtO1xufVxuXG4jZWRpdFRhc2tEaXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IDQuMnJlbTtcbiAgICBtaW4td2lkdGg6IDM4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlblxufVxuXG4jYWRkVGFza0RpdiB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1JTtcbiAgICB0b3A6IDRyZW07XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbn1cblxuI2VkaXRUYXNrRm9ybSB7XG4gICAgbWFyZ2luOiA4cHg7XG59XG5cbiNhZGRUYXNrRm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIG1hcmdpbjogOHB4O1xufVxuXG5cbiNhZGRQcm9qZWN0Rm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjUxLCAyNTQpO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbn1cblxuLnRhc2tDb250YWluZXJGaXJzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjbGVhcjogcmlnaHQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuXG5cblxuXG4udGFza0NvbnRhaW5lckZpcnN0PmRpdiB7XG4gICAgbWFyZ2luOiA1cHg7XG5cbn1cblxuc3BhbiB7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmFkZFRhc2sge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmxhYmVsUHJpb3JpdHkge1xuICAgIC8qIGRpc3BsYXk6IDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbmxhYmVsW2Zvcj1cIm5ld1Rhc2tcIl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxubGFiZWxbZm9yPVwidGV4dEFyZWFUYXNrXCJdIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jZGF0ZURpdixcbiNwcmlvcml0eURpdixcbiNub3Rlc0RpdiB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4jcHJpb3JpdHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubXlOb3RlcyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDgwLCAyNTUpO1xuICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICBtYXJnaW46IDVweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGFza1NldHRpbmdzIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwLjVyZW0gYXV0bztcbn1cblxuLnRhc2tTZXR0aW5ncz5idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4udGFza0NvbXBsZXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbn1cblxuLnRhc2tDb21wbGV0ZWQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xufVxuXG4udGFza0NvbXBsZXRlZCAuYnV0dG9uRWRpdFRhc2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLyogLnJlbW92ZVRhc2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOytEQUMrRDtBQUMvRDs7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBLFdBQVc7O0FBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFD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eUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7OztHQUdHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFdlIG5lZWQgdGhlIFxcXCJiZG86LW1vei1oYXMtZGlyLWF0dHJcXFwiIGJpdCBiZWNhdXNlIFxcXCJiZG9cXFwiIGhhcyBsb3dlclxcbiAgICBzcGVjaWZpY2l0eSB0aGFuIHRoZSBcXFwiOi1tb3otaGFzLWRpci1hdHRyXFxcIiBzZWxlY3RvciBhYm92ZS4gKi9cXG5iZG8sXFxuYmRvOi1tb3otaGFzLWRpci1hdHRyIHtcXG4gICAgdW5pY29kZS1iaWRpOiBpc29sYXRlLW92ZXJyaWRlO1xcbn1cXG5cXG50ZXh0YXJlYTotbW96LWRpci1hdHRyLWxpa2UtYXV0byxcXG5wcmU6LW1vei1kaXItYXR0ci1saWtlLWF1dG8ge1xcbiAgICB1bmljb2RlLWJpZGk6IHBsYWludGV4dDtcXG59XFxuXFxuLyogYmxvY2tzICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmRpdixcXG5kdCxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5mb3JtLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxuaHRtbCxcXG5tYWluLFxcbm5hdixcXG5zZWFyY2gsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwXFxufVxcblxcbnAsXFxuZGwsXFxubXVsdGljb2wge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG59XFxuXFxuZGQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5maWd1cmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDQwcHg7XFxufVxcblxcbmFkZHJlc3Mge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuNjdlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjY3ZW07XFxufVxcblxcbmgyLFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuODNlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjgzZW07XFxufVxcblxcbmgzLFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxLjE3ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbn1cXG5cXG5oNCxcXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDEuMDBlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS4zM2VtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjMzZW07XFxufVxcblxcbmg1LFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDAuODNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS42N2VtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjY3ZW07XFxufVxcblxcbmg2LFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAwLjY3ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIuMzNlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMi4zM2VtO1xcbn1cXG5cXG5saXN0aW5nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG59XFxuXFxueG1wLFxcbnByZSxcXG5wbGFpbnRleHQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1mYW1pbHk6IC1tb3otZml4ZWQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxufVxcblxcbi8qIHRhYmxlcyAqL1xcblxcbnRhYmxlIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICAgIC8qIFhYWGxkYiBkbyB3ZSB3YW50IHRoaXMgaWYgd2UncmUgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlID8gKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdGV4dC1pbmRlbnQ6IDA7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJsZWZ0XFxcIl0ge1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuXFxudGFibGVbYWxpZ249XFxcInJpZ2h0XFxcIl0ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5cXG4vKiBib3JkZXIgY29sbGFwc2UgcnVsZXMgKi9cXG5cXG4vKiBTZXQgaGlkZGVuIGlmIHdlIGhhdmUgJ2ZyYW1lJyBvciAncnVsZXMnIGF0dHJpYnV0ZS5cXG4gICAgICBTZXQgaXQgb24gYWxsIHNpZGVzIHdoZW4gd2UgZG8gc28gdGhlcmUncyBtb3JlIGNvbnNpc3RlbmN5XFxuICAgICAgaW4gd2hhdCBhdXRob3JzIHNob3VsZCBleHBlY3QgKi9cXG5cXG4vKiBQdXQgdGhpcyBmaXJzdCBzbyAnYm9yZGVyJyBhbmQgJ2ZyYW1lJyBydWxlcyBjYW4gb3ZlcnJpZGUgaXQuICovXFxudGFibGVbcnVsZXNdIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcXG59XFxuXFxuLyogJ2JvcmRlcicgYmVmb3JlICdmcmFtZScgc28gJ2ZyYW1lJyBvdmVycmlkZXNcXG4gICAgICAgQSBib3JkZXIgd2l0aCBhIGdpdmVuIHZhbHVlIHNob3VsZCwgb2YgY291cnNlLCBwYXNzIHRoYXQgdmFsdWVcXG4gICAgICAgYXMgdGhlIGJvcmRlci13aWR0aCBpbiBwaXhlbHMgLT4gYXR0ciBtYXBwaW5nICovXFxuXFxuLyogOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8gaXMgbGlrZSBbYm9yZGVyXTpub3QoW2JvcmRlcj1cXFwiMFxcXCJdKSBleGNlcHQgaXRcXG4gICAgICBhbHNvIGNoZWNrcyBmb3Igb3RoZXIgemVyby1saWtlIHZhbHVlcyBhY2NvcmRpbmcgdG8gSFRNTCBhdHRyaWJ1dGVcXG4gICAgICBwYXJzaW5nIHJ1bGVzICovXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XFxufVxcblxcbnRhYmxlW2ZyYW1lXSB7XFxuICAgIGJvcmRlcjogdGhpbiBoaWRkZW47XFxufVxcblxcbi8qIHNwZWNpZmljaXR5IG11c3QgYmVhdCB0YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIHJ1bGUgYWJvdmUgKi9cXG50YWJsZVtmcmFtZT1cXFwidm9pZFxcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJhYm92ZVxcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQgaGlkZGVuIGhpZGRlbiBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJiZWxvd1xcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gaGlkZGVuIG91dHNldCBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJsaHNcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIGhpZGRlbiBoaWRkZW4gb3V0c2V0O1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwicmhzXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBvdXRzZXQgaGlkZGVuIGhpZGRlbjtcXG59XFxuXFxudGFibGVbZnJhbWU9XFxcImhzaWRlc1xcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQgaGlkZGVuO1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwidnNpZGVzXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBvdXRzZXQ7XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJib3hcXFwiXSxcXG50YWJsZVtmcmFtZT1cXFwiYm9yZGVyXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcXG59XFxuXFxuXFxuLyogSW50ZXJuYWwgVGFibGUgQm9yZGVycyAqL1xcblxcbi8qICdib3JkZXInIGNlbGwgYm9yZGVycyBmaXJzdCAqL1xcblxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50cj50ZCxcXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dHI+dGgsXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz4qPnRkLFxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50aCxcXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPnRkLFxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+dGgge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxufVxcblxcbi8qIGNvbGxhcHNlIG9ubHkgaWYgcnVsZXMgYXJlIHJlYWxseSBzcGVjaWZpZWQgKi9cXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwibm9uZVxcXCJdLCBbcnVsZXM9XFxcIlxcXCJdKSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi8qIG9ubHkgc3BlY2lmaWVkIHJ1bGVzIG92ZXJyaWRlICdib3JkZXInIHNldHRpbmdzXFxuICAgKGluY3JlYXNlZCBzcGVjaWZpY2l0eSB0byBhY2hpZXZlIHRoaXMpICovXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT50cj50ZCxcXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPio+dHI+dGQsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT50cj50aCxcXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPio+dHI+dGgsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT50ZCxcXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPnRoIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPio+dHI+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+dHI+dGgsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+Kj50cj50aCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT50aCB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+Kj50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPnRyPnRoLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+Kj50cj50aCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+dGgge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwicm93c1xcXCJdPnRyLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwicm93c1xcXCJdPio+dHIge1xcbiAgICBib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1ibG9jay1zdGFydC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1ibG9jay1lbmQtc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImNvbHNcXFwiXT50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImNvbHNcXFwiXT4qPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiY29sc1xcXCJdPnRyPnRoLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiY29sc1xcXCJdPio+dHI+dGgge1xcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1pbmxpbmUtZW5kLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJncm91cHNcXFwiXT5jb2xncm91cCB7XFxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWlubGluZS1lbmQtc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImdyb3Vwc1xcXCJdPnRmb290LFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiZ3JvdXBzXFxcIl0+dGhlYWQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJncm91cHNcXFwiXT50Ym9keSB7XFxuICAgIGJvcmRlci1ibG9jay1zdGFydC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWJsb2NrLWVuZC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWJsb2NrLWVuZC1zdHlsZTogc29saWQ7XFxufVxcblxcblxcbi8qIGNhcHRpb24gaW5oZXJpdHMgZnJvbSB0YWJsZSBub3QgdGFibGUtb3V0ZXIgKi9cXG5jYXB0aW9uIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2FwdGlvbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvbiB7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvblthbGlnbj1cXFwibGVmdFxcXCJdOmRpcihsdHIpIHtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJjZW50ZXJcXFwiXT5jYXB0aW9uW2FsaWduPVxcXCJsZWZ0XFxcIl06ZGlyKHJ0bCkge1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvblthbGlnbj1cXFwicmlnaHRcXFwiXTpkaXIobHRyKSB7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJjZW50ZXJcXFwiXT5jYXB0aW9uW2FsaWduPVxcXCJyaWdodFxcXCJdOmRpcihydGwpIHtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRyIHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcXG59XFxuXFxuY29sIHtcXG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uO1xcbn1cXG5cXG5jb2xncm91cCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbi1ncm91cDtcXG59XFxuXFxudGJvZHkge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbnRoZWFkIHtcXG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50Zm9vdCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWZvb3Rlci1ncm91cDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyogZm9yIFhIVE1MIHRhYmxlcyB3aXRob3V0IHRib2R5ICovXFxudGFibGU+dHIge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50ZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiB1bnNldDtcXG4gICAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG50aCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlci1vci1pbmhlcml0O1xcbn1cXG5cXG46aXModHIsIHRib2R5LCB0aGVhZCwgdGZvb3QsIHRhYmxlKT5mb3JtOi1tb3otaXMtaHRtbCB7XFxuICAgIC8qIEltcG9ydGFudDogZG9uJ3Qgc2hvdyB0aGVzZSBmb3JtcyBpbiBIVE1MICovXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxudGFibGVbYm9yZGVyY29sb3JdPnRib2R5LFxcbnRhYmxlW2JvcmRlcmNvbG9yXT50aGVhZCxcXG50YWJsZVtib3JkZXJjb2xvcl0+dGZvb3QsXFxudGFibGVbYm9yZGVyY29sb3JdPmNvbCxcXG50YWJsZVtib3JkZXJjb2xvcl0+Y29sZ3JvdXAsXFxudGFibGVbYm9yZGVyY29sb3JdPnRyLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT50cj50ZCxcXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cj50ZCxcXG50YWJsZVtib3JkZXJjb2xvcl0+dHI+dGgsXFxudGFibGVbYm9yZGVyY29sb3JdPio+dHI+dGgge1xcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qIGlubGluZXMgKi9cXG5cXG5xOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IG9wZW4tcXVvdGU7XFxufVxcblxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBjbG9zZS1xdW90ZTtcXG59XFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5pLFxcbmNpdGUsXFxuZW0sXFxudmFyLFxcbmRmbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxudHQsXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xcbn1cXG5cXG51LFxcbmlucyB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5zLFxcbnN0cmlrZSxcXG5kZWwge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuYmlnIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG5zdWIge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxufVxcblxcbnN1cCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG5ub2JyIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxubWFyayB7XFxuICAgIGJhY2tncm91bmQ6IE1hcms7XFxuICAgIGNvbG9yOiBNYXJrVGV4dDtcXG59XFxuXFxuLyogdGl0bGVzICovXFxuYWJiclt0aXRsZV0sXFxuYWNyb255bVt0aXRsZV0ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGRvdHRlZCB1bmRlcmxpbmU7XFxufVxcblxcbi8qIGxpc3RzICovXFxuXFxudWwsXFxubWVudSxcXG5kaXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcXG59XFxuXFxudWwsXFxub2wsXFxubWVudSB7XFxuICAgIGNvdW50ZXItcmVzZXQ6IGxpc3QtaXRlbTtcXG59XFxuXFxub2wge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxuICAgIHRleHQtYWxpZ246IG1hdGNoLXBhcmVudDtcXG59XFxuXFxuLyogbmVzdGVkIGxpc3RzIGhhdmUgbm8gdG9wL2JvdHRvbSBtYXJnaW5zICovXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgdWwsXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgb2wsXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGlyLFxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIG1lbnUsXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGwge1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcblxcbi8qIDIgZGVlcCB1bm9yZGVyZWQgbGlzdHMgdXNlIGEgY2lyY2xlICovXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSB1bCxcXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIG1lbnUsXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBkaXIge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXG59XFxuXFxuLyogMyBkZWVwIChvciBtb3JlKSB1bm9yZGVyZWQgbGlzdHMgdXNlIGEgc3F1YXJlICovXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSA6aXMob2wsIHVsLCBtZW51LCBkaXIpIHVsLFxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBtZW51LFxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBkaXIge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcXG59XFxuXFxuXFxuLyogbGVhZnMgKi9cXG5cXG4vKiA8aHI+IG5vc2hhZGUgYW5kIGNvbG9yIGF0dHJpYnV0ZXMgYXJlIGhhbmRsZWQgY29tcGxldGVseSBieVxcbiAgKiBIVE1MSFJFbGVtZW50OjpNYXBBdHRyaWJ1dGVzSW50b1J1bGUuXFxuICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RoZS1oci1lbGVtZW50LTJcXG4gICovXFxuaHIge1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDAuNWVtO1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgLyogRklYTUU6IFRoaXMgaXMgbm90IHJlYWxseSBwZXIgc3BlYyAqL1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaHJbc2l6ZT1cXFwiMVxcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lIG5vbmUgbm9uZTtcXG59XFxuXFxuLyogTm90ZSB0aGF0IHdlIG9ubHkgaW50ZW5kIGZvciB0aGUgYWx0IGNvbnRlbnQgdG8gc2hvdyB1cCBpZiB0aGUgaW1hZ2UgaXNcXG4gICogYnJva2VuLiBCdXQgbm9uLWJyb2tlbiBpbWFnZXMvaW5wdXRzIHdpbGwgaGF2ZSBhIHJlcGxhY2VkIGJveCwgYW5kIHRodXMgd2VcXG4gICogd29uJ3Qgd2UgZG9uJ3QgZ2VuZXJhdGUgdGhlIHBzZXVkby1lbGVtZW50IGFueXdheXMuIFRoaXMgcHJldmVudHNcXG4gICogdW5uZWNlc3NhcnkgcmVmcmFtaW5nIHdoZW4gaW1hZ2VzIGJlY29tZSBicm9rZW4gLyBub24tYnJva2VuLiAqL1xcbmlucHV0W3R5cGU9aW1hZ2VdOjpiZWZvcmUsXFxuaW1nOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAtbW96LWFsdC1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcXG59XFxuXFxuaW1nW3VzZW1hcF0sXFxub2JqZWN0W3VzZW1hcF0ge1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuZnJhbWVzZXQge1xcbiAgICBkaXNwbGF5OiBibG9jayAhIGltcG9ydGFudDtcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWMgISBpbXBvcnRhbnQ7XFxuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xcbiAgICBib3JkZXI6IG5vbmUgISBpbXBvcnRhbnQ7XFxufVxcblxcbmZyYW1lIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAhIGltcG9ydGFudDtcXG59XFxuXFxuaWZyYW1lIHtcXG4gICAgYm9yZGVyOiAycHggaW5zZXQ7XFxufVxcblxcbnNwYWNlciB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWMgISBpbXBvcnRhbnQ7XFxuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xcbn1cXG5cXG5jYW52YXMge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaWZyYW1lOmZvY3VzLXZpc2libGUsXFxuYm9keTpmb2N1cy12aXNpYmxlLFxcbmh0bWw6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIC8qIFRoZXNlIGVsZW1lbnRzIGhpc3RvcmljYWxseSBkb24ndCBzaG93IG91dGxpbmVzIHdoZW4gZm9jdXNlZCBieSBkZWZhdWx0LlxcbiAgICAqIFdlIGNvdWxkIGNvbnNpZGVyIGNoYW5naW5nIHRoYXQgaWYgbmVlZGVkLiAqL1xcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBoaWRkZW4gZWxlbWVudHM6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2hpZGRlbi1lbGVtZW50c1xcbiAgKlxcbiAgKiBFeGNlcHRpb25zOlxcbiAgKlxcbiAgKiAgKiBhcmVhIGRlY2xhcmF0aW9uIG5lZWRzIHRvIGJlICFpbXBvcnRhbnQsIHNlZSBiZWxvdyAvIGJ1ZyAxMzUwNDAuICBUaGF0J3NcXG4gICogICAgaGFja3kgYW5kIGJyb2tlbi5cXG4gICpcXG4gICogICogW2hpZGRlbl0gaXMgaW1wbGVtZW50ZWQgYXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIHRvIGF2b2lkIGEgZ2xvYmFsXFxuICAqICAgIHNlbGVjdG9yIGluIGEgVUEgc2hlZXQuXFxuICAqL1xcbmJhc2UsXFxuYmFzZWZvbnQsXFxuZGF0YWxpc3QsXFxuaGVhZCxcXG5saW5rLFxcbm1ldGEsXFxubm9lbWJlZCxcXG5ub2ZyYW1lcyxcXG5wYXJhbSxcXG5ycCxcXG5zY3JpcHQsXFxuc3R5bGUsXFxudGVtcGxhdGUsXFxudGl0bGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5hcmVhIHtcXG4gICAgLyogRG9uJ3QgZ2l2ZSBpdCBmcmFtZXMgb3RoZXIgdGhhbiBpdHMgaW1hZ2VmcmFtZSAqL1xcbiAgICBkaXNwbGF5OiBub25lICEgaW1wb3J0YW50O1xcbn1cXG5cXG5pZnJhbWU6ZnVsbHNjcmVlbiB7XFxuICAgIC8qIGlmcmFtZXMgaW4gZnVsbC1zY3JlZW4gbW9kZSBkb24ndCBzaG93IGEgYm9yZGVyLiAqL1xcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZzogdW5zZXQgIWltcG9ydGFudDtcXG59XFxuXFxuLyogRGV0YWlscyBhbmQgc3VtbWFyeVxcbiAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtZGV0YWlscy1hbmQtc3VtbWFyeS1lbGVtZW50c1xcbiAgKlxcbiAgKiBOb3RlIHRoYXQgdGhlc2UgcnVsZXMgbmVlZCB0byBiZSBkdXBsaWNhdGVkIGluIGRldGFpbHMuY3NzIGZvciB0aGUgYW5vbnltb3VzXFxuICAqIHN1bW1hcnksIHdoaWNoIHdvdWxkbid0IG1hdGNoIG90aGVyd2lzZS5cXG4gICpcXG4gICogVGhlIHNwZWMgaGVyZSBzYXlzIHNvbWV0aGluZyBkaWZmZXJlbnQsIHNlZVxcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzg2MTBcXG4gICovXFxuZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LWl0ZW0gMDtcXG4gICAgbGlzdC1zdHlsZTogZGlzY2xvc3VyZS1jbG9zZWQgaW5zaWRlO1xcbn1cXG5cXG5kZXRhaWxzW29wZW5dPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzY2xvc3VyZS1vcGVuO1xcbn1cXG5cXG4vKiBtZWRpYSBlbGVtZW50cyAqL1xcbnZpZGVvIHtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxudmlkZW8+aW1nOi1tb3otbmF0aXZlLWFub255bW91cyB7XFxuICAgIC8qIFZpZGVvIHBvc3RlciBpbWFnZXMgc2hvdWxkIHJlbmRlciB3aXRoIHRoZSB2aWRlbyBlbGVtZW50J3MgXFxcIm9iamVjdC1maXRcXFwiICZcXG4gICAgICBcXFwib2JqZWN0LXBvc2l0aW9uXFxcIiBwcm9wZXJ0aWVzICovXFxuICAgIG9iamVjdC1maXQ6IGluaGVyaXQgIWltcG9ydGFudDtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYXVkaW9bY29udHJvbHNdIHtcXG4gICAgLyogVGhpcyBlbnN1cmVzIHRoYXQgaW50cmluc2ljIHNpemluZyBjYW4gcmVsaWFibHkgc2hyaW5rd3JhcCBvdXJcXG4gICAgICAgY29udHJvbHMgKHdoaWNoIGFyZSBhbHNvIGFsd2F5cyBob3Jpem9udGFsKSBhbmQgcHJvZHVjZSBhXFxuICAgICAgIHJlYXNvbmFibGUgaW50cmluc2ljIHNpemUgZnJvbSB0aGVtLiAqL1xcbiAgICB3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDtcXG59XFxuXFxuKnwqOjotbW96LWh0bWwtY2FudmFzLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICAvKiB3ZSB3YW50IHRvIGJlIGFuIGFic29sdXRlIGFuZCBmaXhlZCBjb250YWluZXIgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgIWltcG9ydGFudDtcXG59XFxuXFxudmlkZW8+LmNhcHRpb24tYm94IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKipcXG4gICogVGhlIHBzZXVkbyBlbGVtZW50IHdvbid0IGluaGVyaXQgQ1NTIHN0eWxlcyBmcm9tIGl0cyBkaXJlY3QgcGFyZW50LCBgOjpjdWVgXFxuICAqIHdvdWxkIGFjdHVhbGx5IGluaGVyaXQgc3R5bGVzIGZyb20gdmlkZW8gYmVjYXVzZSBpdCdzIHZpZGVvJ3MgcHNldWRvIGVsZW1lbnQuXFxuICAqIFRoZXJlZm9yZSwgd2UgaGF2ZSB0byBleHBsaWNpdGx5IHNldCBzb21lIHN0eWxlcyB3aGljaCBhcmUgYWxyZWFkeSBkZWZpbmVkXFxuICAqIGluIGl0cyBwYXJlbnQgZWxlbWVudCBpbiB2dHQuanNtLlxcbiAgKi9cXG46OmN1ZSB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IHZhcigtLWN1ZS1mb250LXNpemUpO1xcbiAgICB3cml0aW5nLW1vZGU6IHZhcigtLWN1ZS13cml0aW5nLW1vZGUsIGluaGVyaXQpO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICAvKiBUT0RPIDogZW5hYmxlIHVuaWNvZGUtYmlkaSwgcmlnaHQgbm93IGVuYWJsZSBpdCB3b3VsZCBjYXVzZSBpbmNvcnJlY3RcXG4gICAgICAgICAgICAgZGlzcGxheSBkaXJlY3Rpb24sIG1heWJlIHJlbGF0ZWQgd2l0aCBidWcgMTU1ODQzMS4gKi9cXG59XFxuXFxuLyogPGRpYWxvZz4gZWxlbWVudCBzdHlsZXMgKi9cXG5cXG5kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDA7XFxuICAgIGluc2V0LWlubGluZS1lbmQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyLXdpZHRoOiBpbml0aWFsO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGluaXRpYWw7XFxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXM7XFxuICAgIGNvbG9yOiBDYW52YXNUZXh0O1xcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbn1cXG5cXG5kaWFsb2c6bm90KFtvcGVuXSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaWFsb2c6bW9kYWwge1xcbiAgICAtbW96LXRvcC1sYXllcjogdG9wICFpbXBvcnRhbnQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwO1xcbiAgICBpbnNldC1ibG9jay1lbmQ6IDA7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcXG59XFxuXFxuLyogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jZmxvdy1jb250ZW50LTMgKi9cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG5tYXJxdWVlIHtcXG4gICAgaW5saW5lLXNpemU6IC1tb3otYXZhaWxhYmxlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbm1hcnF1ZWU6aXMoW2RpcmVjdGlvbj1cXFwidXBcXFwiXSwgW2RpcmVjdGlvbj1cXFwiZG93blxcXCJdKSB7XFxuICAgIGJsb2NrLXNpemU6IDIwMHB4O1xcbn1cXG5cXG4vKiBSdWJ5ICovXFxuXFxucnVieSB7XFxuICAgIGRpc3BsYXk6IHJ1Ynk7XFxufVxcblxcbnJiIHtcXG4gICAgZGlzcGxheTogcnVieS1iYXNlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5ydCB7XFxuICAgIGRpc3BsYXk6IHJ1YnktdGV4dDtcXG59XFxuXFxucnRjIHtcXG4gICAgZGlzcGxheTogcnVieS10ZXh0LWNvbnRhaW5lcjtcXG59XFxuXFxucnRjLFxcbnJ0IHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxuICAgIC1tb3otbWluLWZvbnQtc2l6ZS1yYXRpbzogNTAlO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuQG1lZGlhIG5vdCAoLW1vei1wbGF0Zm9ybTogd2luZG93cykge1xcblxcbiAgICBydGMsXFxuICAgIHJ0IHtcXG4gICAgICAgIC8qIFRoZSB3aWRlbHktdXNlZCBXaW5kb3dzIGZvbnQgTWVpcnlvIGRvZXNuJ3Qgd29yayBmaW5lIHdpdGggdGhpc1xcbiAgICAgKiBzZXR0aW5nLCBzbyBkaXNhYmxlIHRoaXMgb24gV2luZG93cy4gV2Ugc2hvdWxkIHJlLWVuYWJsZSBpdCBvbmNlXFxuICAgICAqIE1pY3Jvc29mdCBmaXhlcyB0aGlzIGlzc3VlLiBTZWUgYnVnIDExNjQyNzkuICovXFxuICAgICAgICBmb250LXZhcmlhbnQtZWFzdC1hc2lhbjogcnVieTtcXG4gICAgfVxcbn1cXG5cXG5ydGMsXFxucnQge1xcbiAgICB0ZXh0LWVtcGhhc2lzOiBub25lO1xcbn1cXG5cXG5ydGM6bGFuZyh6aCksXFxucnQ6bGFuZyh6aCkge1xcbiAgICBydWJ5LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnJ0YzpsYW5nKHpoLVRXKSxcXG5ydDpsYW5nKHpoLVRXKSB7XFxuICAgIGZvbnQtc2l6ZTogMzAlO1xcbiAgICAvKiBib3BvbW9mbyAqL1xcbiAgICAtbW96LW1pbi1mb250LXNpemUtcmF0aW86IDMwJTtcXG59XFxuXFxucnRjPnJ0IHtcXG4gICAgZm9udC1zaXplOiB1bnNldDtcXG59XFxuXFxucnVieSxcXG5yYixcXG5ydCxcXG5ydGMge1xcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGU7XFxufVxcblxcbi8qIFNoYWRvdyBET00gdjFcXG4gICogaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy1zY29waW5nLyNzbG90cy1pbi1zaGFkb3ctdHJlZSAqL1xcbnNsb3Qge1xcbiAgICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuXFxuLyogVW4taW52ZXJ0IGltYWdlcyBhbmQgdmlkZW9zIGZvciB1c2VycyB1c2luZyBpbnZlcnRlZCBjb2xvcnMuXFxuICAqIFxcXCJVc2VyIGFnZW50cyBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIHJ1bGUgdG8gdGhlaXIgVUEgc3R5bGUgc2hlZXRcXFwiXFxuICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNS8jaW52ZXJ0ZWRcXG4gICovXFxuQG1lZGlhIChpbnZlcnRlZC1jb2xvcnMpIHtcXG5cXG4gICAgaW1nOm5vdChwaWN0dXJlID4gaW1nKSxcXG4gICAgcGljdHVyZSxcXG4gICAgdmlkZW8ge1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuICAgIH1cXG59XFxuXFxuLyogSGlkZSBub3NjcmlwdCBlbGVtZW50cyBpZiBzY3JpcHRpbmcgaXMgZW5hYmxlZCAqL1xcbkBtZWRpYSAoc2NyaXB0aW5nKSB7XFxuICAgIG5vc2NyaXB0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgcHJpbnQge1xcblxcbiAgICBpbnB1dCxcXG4gICAgdGV4dGFyZWEsXFxuICAgIHNlbGVjdCxcXG4gICAgYnV0dG9uLFxcbiAgICBkZXRhaWxzIHtcXG4gICAgICAgIC1tb3otdXNlci1pbnB1dDogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5cXG4vKiBQb3BvdmVyIFVBIHN0eWxlLCBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNmbG93LWNvbnRlbnQtMyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYS1xdWVyeS1uby1pbnZhbGlkICovXFxuQG1lZGlhICgtbW96LWJvb2wtcHJlZjogXFxcImRvbS5lbGVtZW50LnBvcG92ZXIuZW5hYmxlZFxcXCIpIHtcXG4gICAgW3BvcG92ZXJdOm5vdCg6cG9wb3Zlci1vcGVuKTpub3QoZGlhbG9nW29wZW5dKSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGRpYWxvZzpwb3BvdmVyLW9wZW4ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgW3BvcG92ZXJdIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGluc2V0OiAwO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGJvcmRlcjogc29saWQ7XFxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW07XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIGNvbG9yOiBDYW52YXNUZXh0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzO1xcbiAgICB9XFxuXFxuICAgIDpwb3BvdmVyLW9wZW4ge1xcbiAgICAgICAgLW1vei10b3AtbGF5ZXI6IHRvcDtcXG4gICAgfVxcblxcbiAgICA6cG9wb3Zlci1vcGVuOjpiYWNrZHJvcCB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBpbnNldDogMDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcblxcblxcbn1cXG5cXG4uaGVhZGVyUGFnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDQxLCA0MSwgMC4xMDcpO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMC44cmVtIDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogNjMzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi8qIFxcbi5jb250YWluZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59ICovXFxuXFxuXFxuLmxlZnRTZWN0aW9uIHtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnJpZ2h0U2VjdGlvbiB7XFxuICAgIHdpZHRoOiA2NSU7XFxuXFxuICAgIGZsb2F0OiByaWdodDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuXFxuLnByb2plY3RzIHtcXG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NhbG1vbjtcXG4gICAgcGFkZGluZzogNXB4IDNweCAxNXB4IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuI2J1dHRvblByb2plY3RGb3JtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMThweDtcXG59XFxuXFxuI2xhYmVsUHJvamVjdCB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4jaW5wdXRQcm9qZWN0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzYWxtb247XFxuICAgIHBhZGRpbmc6IDVweCAwIDE1cHggMDtcXG4gICAgLyogei1pbmRleDogMTsgKi9cXG59XFxuXFxuLnRhc2tzVW5pdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtraGFraTtcXG59XFxuXFxuLnRhc2tVbml0SW1wb3J0YW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kXFxufVxcblxcbi50YXNrVW5pdFVyZ2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XFxufVxcblxcblxcblxcbi5wcm9qZWN0c1VuaXQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uYnV0dG9uUHJvamVjdHMsXFxuLmFjdGl2ZVByb2plY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNTtcXG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG5cXG59XFxuXFxuLnJlbW92ZVByb2plY3RzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDcgLyA4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbn1cXG5cXG4uYWN0aXZlUHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNsaXN0UHJvamVjdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5oaWRlUmVtb3ZlQnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuI3N0YXJ0UHJvamVjdEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5cXG5cXG5cXG4jYWRkUHJvamVjdERpdiB7XFxuXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTUxLCAyMjIpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDFyZW07XFxuICAgIHRvcDogMXJlbTtcXG59XFxuXFxuI2VkaXRUYXNrRGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRvcDogNC4ycmVtO1xcbiAgICBtaW4td2lkdGg6IDM4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW5cXG59XFxuXFxuI2FkZFRhc2tEaXYge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0NSU7XFxuICAgIHRvcDogNHJlbTtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuI2VkaXRUYXNrRm9ybSB7XFxuICAgIG1hcmdpbjogOHB4O1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIG1hcmdpbjogOHB4O1xcbn1cXG5cXG5cXG4jYWRkUHJvamVjdEZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjUxLCAyNTQpO1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbi50YXNrQ29udGFpbmVyRmlyc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjbGVhcjogcmlnaHQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxufVxcblxcblxcblxcblxcbi50YXNrQ29udGFpbmVyRmlyc3Q+ZGl2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuXFxufVxcblxcbnNwYW4ge1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4uYWRkVGFzayB7XFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmxhYmVsUHJpb3JpdHkge1xcbiAgICAvKiBkaXNwbGF5OiA7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5sYWJlbFtmb3I9XFxcIm5ld1Rhc2tcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwidGV4dEFyZWFUYXNrXFxcIl0ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2RhdGVEaXYsXFxuI3ByaW9yaXR5RGl2LFxcbiNub3Rlc0RpdiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubXlOb3RlcyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgODAsIDI1NSk7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi50YXNrU2V0dGluZ3Mge1xcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwLjVyZW0gYXV0bztcXG59XFxuXFxuLnRhc2tTZXR0aW5ncz5idXR0b24ge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQgLmJ1dHRvbkVkaXRUYXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLyogLnJlbW92ZVRhc2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFjdGl2ZVByb2plY3QsIGNob3NlblRhc2ssIHNob3dUYXNrcyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBnZXRGb3JtRGF0YVRhc2sgfSBmcm9tIFwiLi90YXNrQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5mdW5jdGlvbiBzdWJtaXRFZGl0VGFzaygpIHtcbiAgLy8gcnVucyB3aGVuIHRoZSBmb3JtIGlzIHN1YlxuICAvL2NvbnNvbGUuY2xlYXIoKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy9jb25zb2xlLmxvZyhcIkNob3NlbiB0YXNrOiBcIiwgY2hvc2VuVGFzayk7XG4gIC8vY29uc29sZS5sb2coYWN0aXZlUHJvamVjdCk7XG4gIC8vYWN0aXZlUHJvamVjdC5tb2RpZnlUYXNrKGNob3NlblRhc2spO1xuICAvL2NvbnNvbGUubG9nKFwiQ2hvc2VuIFRhc2s6IFwiLCBjaG9zZW5UYXNrKTtcblxuICAvLyBFZGl0ZWQgZGF0YSAodGhlIGRhdGEgdGhhdCB3ZSBzdWJtaXQgYXMgY29ycmVjdGlvbnMpXG4gIGNvbnN0IGZvcm1FZGl0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRm9ybVwiKTtcbiAgY29uc3QgdGFza0RhdGFFZGl0ID0gZ2V0Rm9ybURhdGFUYXNrKGZvcm1FZGl0ZWQpO1xuXG4gIC8vIGRlc3RydWN0dXJpbmcgYXNzaWdubWVudCAoSSB3YW50IHRvIGF2b2lkIG5hbWluZyBjb25mbGljdHMpXG4gIGNvbnN0IFtcbiAgICB7XG4gICAgICBuYW1lOiBuYW1lRWRpdCxcbiAgICAgIGRhdGU6IGRhdGVFZGl0LFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5RWRpdCxcbiAgICAgIG5vdGVzOiBub3Rlc0VkaXQsXG4gICAgfSxcbiAgXSA9IHRhc2tEYXRhRWRpdDtcblxuICAvLyBPcmlnaW5hbCBkYXRhXG4gIGNvbnN0IHsgbmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzIH0gPSBjaG9zZW5UYXNrO1xuXG4gIGNvbnNvbGUubG9nKFwiRWRpdDpcIik7XG4gIGNvbnNvbGUubG9nKG5hbWVFZGl0LCBkYXRlRWRpdCwgcHJpb3JpdHlFZGl0LCBub3Rlc0VkaXQpO1xuICBjb25zb2xlLmxvZyhcIk9yaWdpbmFsOlwiKTtcbiAgY29uc29sZS5sb2cobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcblxuICAvLyBFZGl0IHRoZSBkYXRhXG4gIGFjdGl2ZVByb2plY3QubW9kaWZ5VGFzayhjaG9zZW5UYXNrLCB0YXNrRGF0YUVkaXRbMF0pO1xuXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGlkUHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShhY3RpdmVQcm9qZWN0KSk7XG4gIH1cblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgc2hvd1Rhc2tzKGFjdGl2ZVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFza0Zvcm0oKSB7XG4gIC8vIFRoZSBmb3JtIGlzIGFkZGVkIGluIHRoZSBpbmRleC5qc1xuXG4gIGNvbnN0IGNvbnRhaW5lckVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXJFZGl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFRhc2tEaXZcIik7XG5cbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAvLyBOYW1lIHRoZSBUYXNrXG4gIGNvbnN0IGVsZW1lbnROYW1lVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxhYmVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICBsYWJlbFRhc2suc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdFRhc2tcIik7XG5cbiAgY29uc3QgbmFtZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFRhc2tcIik7XG4gIG5hbWVUYXNrLnZhbHVlID0gXCJOYW1lIHRoZSB0YXNrXCI7XG4gIG5hbWVUYXNrLnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZVRhc2submFtZSA9IFwibmFtZVwiO1xuXG4gIGVsZW1lbnROYW1lVGFzay5hcHBlbmRDaGlsZChsYWJlbFRhc2spO1xuICBlbGVtZW50TmFtZVRhc2suYXBwZW5kQ2hpbGQobmFtZVRhc2spO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlbGVtZW50TmFtZVRhc2spO1xuXG4gIC8vIER1ZSBEYXRlXG4gIGNvbnN0IGVsZW1lbnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudERhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlRGl2XCIpO1xuXG4gIGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxEYXRlLnRleHRDb250ZW50ID0gXCJEYXRlOiBcIjtcbiAgbGFiZWxEYXRlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZURhdGVFZGl0XCIpO1xuXG4gIGNvbnN0IGlucHV0RGF0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0RGF0ZVRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlRWRpdFwiKTtcbiAgaW5wdXREYXRlVGFzay50eXBlID0gXCJkYXRlXCI7XG4gIGlucHV0RGF0ZVRhc2submFtZSA9IFwiZGF0ZVwiO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChsYWJlbERhdGUpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dERhdGVUYXNrKTtcblxuICBlbGVtZW50RGF0ZS5hcHBlbmRDaGlsZChsYWJlbERhdGUpO1xuICBlbGVtZW50RGF0ZS5hcHBlbmRDaGlsZChpbnB1dERhdGVUYXNrKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudERhdGUpO1xuXG4gIC8vIFByaW9yaXR5XG5cbiAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlEaXZFZGl0XCIpO1xuXG4gIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5RWRpdFwiKTtcblxuICAvLyBISUdIXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2hQcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSElHSFwiKTtcblxuICBpbnB1dFByaW9yaXR5SGlnaC50eXBlID0gXCJyYWRpb1wiO1xuICBpbnB1dFByaW9yaXR5SGlnaC5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9IFwiSElHSFwiO1xuICBsYWJlbFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsUHJpb3JpdHlFZGl0XCIpO1xuICBsYWJlbFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoUHJpb3JpdHlFZGl0XCIpO1xuXG4gIC8vIE1FRElVTVxuICBjb25zdCBpbnB1dFByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZWRpdW1Qcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNRURJVU1cIik7XG5cbiAgaW5wdXRQcmlvcml0eU1lZGl1bS50eXBlID0gXCJyYWRpb1wiO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS50ZXh0Q29udGVudCA9IFwiTUVESVVNXCI7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5RWRpdFwiKTtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZWRpdW1Qcmlvcml0eUVkaXRcIik7XG5cbiAgLy8gTE9XXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0UHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvd1ByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxPV1wiKTtcblxuICBpbnB1dFByaW9yaXR5TG93LnR5cGUgPSBcInJhZGlvXCI7XG4gIGlucHV0UHJpb3JpdHlMb3cubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFByaW9yaXR5TG93LnRleHRDb250ZW50ID0gXCJMT1dcIjtcbiAgbGFiZWxQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsUHJpb3JpdHlFZGl0XCIpO1xuICBsYWJlbFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvd1ByaW9yaXR5RWRpdFwiKTtcblxuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZSk7XG5cbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eU1lZGl1bSk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5TG93KTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlMb3cpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUVsZW1lbnQpO1xuXG4gIC8vIE5vdGVzXG5cbiAgY29uc3Qgbm90ZXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90ZXNFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNEaXZcIik7XG5cbiAgY29uc3Qgbm90ZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbm90ZXNUaXRsZS50ZXh0Q29udGVudCA9IFwiTm90ZXNcIjtcbiAgbm90ZXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0ZXh0QXJlYVRhc2tFZGl0XCIpO1xuICBjb25zdCB0YXNrVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRleHRBcmVhVGFza0VkaXRcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNVwiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCI1MFwiKTtcbiAgdGFza1RleHRBcmVhLm5hbWUgPSBcInRleHRBcmVhVGFza1wiO1xuXG4gIG5vdGVzRWxlbWVudC5hcHBlbmRDaGlsZChub3Rlc1RpdGxlKTtcbiAgbm90ZXNFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tUZXh0QXJlYSk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKG5vdGVzRWxlbWVudCk7XG5cbiAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0VGFza0Zvcm1cIik7XG4gIGNvbnRhaW5lckVkaXQuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gIC8vIEJ1dHRvbiBFZGl0XG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uRWRpdFRhc2tcIik7XG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVESVRcIjtcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0RWRpdFRhc2ssIGZhbHNlKTtcblxuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyRWRpdDtcbn1cblxuZXhwb3J0IHsgZWRpdFRhc2tGb3JtIH07XG4iLCJpbXBvcnQgeyBlbGVtZW50UHJvamVjdCwgZG9tU2hvd1Rhc2tzIH0gZnJvbSBcIi4vcHJvamVjdHNEb20uanNcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmxldCBhY3RpdmVQcm9qZWN0O1xubGV0IGNob3NlblRhc2s7XG5cbmZ1bmN0aW9uIHNldENob3NlblRhc2sodGFzaykge1xuICBjaG9zZW5UYXNrID0gdGFzaztcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChzZXRQcm9qZWN0KSB7XG4gIC8vY29uc29sZS5jbGVhcigpO1xuXG4gIC8vIFdlIHNldCB0aGUgYWN0aXZlIHByb2plY3QgYW5kIGNoYW5nZSB0aGUgY29sb3Igb2YgdGhlIGJ1dHRvblxuICBpZiAoYWN0aXZlUHJvamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHByb2plY3RJZCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgbGV0IGVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3RJZCk7XG4gICAgaWYgKGVsZW1lbnRJZCAhPT0gbnVsbCkge1xuICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVQcm9qZWN0XCIpO1xuICAgIH1cbiAgfVxuICBhY3RpdmVQcm9qZWN0ID0gc2V0UHJvamVjdDtcblxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSAmJiBhY3RpdmVQcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgbmV3UHJvamVjdElkID0gc2V0UHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIiwgbmV3UHJvamVjdElkKTtcbiAgfVxuICBsZXQgX3Byb2plY3RJZCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gIGxldCBfZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoX3Byb2plY3RJZCk7XG5cbiAgaWYgKF9lbGVtZW50SWQgIT09IG51bGwpIHtcbiAgICBfZWxlbWVudElkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0XCIpO1xuICB9XG59XG5cbi8vIEFsbCB0aGUgcHJvamVjdHMgbmFtZXNcbmNvbnN0IG15UHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIHJldHVybiB7IG5hbWUsIHRhc2tMaXN0OiB7fSwgaWQ6IFwicHJvamVjdFwiICsgYXNzaWduUHJvamVjdElkKCkgfTtcbn1cblxuLy8gVGhlIGFyZ3VtZW50IHdpbGwgYmUgdGhlIGluc3RhbnRpYXRpb24gb2YgY3JlYXRlUHJvamVjdFxuZnVuY3Rpb24gbXlQcm9qZWN0TWV0aG9kcyhteVByb2plY3QpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5teVByb2plY3QsXG4gICAgZ2V0UHJvamVjdElkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9LFxuICAgIGdldFRhc2tJZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza0lkO1xuICAgIH0sXG4gICAgZ2V0UHJvamVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRQcm9qZWN0TmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9LFxuICAgIGdldFRhc2tMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrTGlzdDtcbiAgICB9LFxuICAgIGVuZFRhc2s6IGZ1bmN0aW9uICh0YXNrSW5RdWVzdGlvbiwgaXNDb21wbGV0ZWQpIHtcbiAgICAgIC8vIEl0IGNoYW5nZXMgb25seSB0aGUgdmlzdWFsIGFzcGVjdCBvZiB0aGUgdGFza1xuICAgICAgdGFza0luUXVlc3Rpb25bXCJjb21wbGV0ZWRcIl0gPSBpc0NvbXBsZXRlZDtcbiAgICAgIGxldCBteUVsZW1lbnRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hvc2VuVGFza1tcIm5hbWVJZFwiXSk7XG4gICAgICBpZiAoaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgbXlFbGVtZW50VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza0NvbXBsZXRlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG15RWxlbWVudFRhc2suY2xhc3NMaXN0LnJlbW92ZShcInRhc2tDb21wbGV0ZWRcIik7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZWxldGVUYXNrOiBmdW5jdGlvbiAob2Jzb2xldGVUYXNrKSB7XG4gICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICBsZXQgaWRUYXNrID0gb2Jzb2xldGVUYXNrW1wibmFtZUlkXCJdO1xuICAgICAgZGVsZXRlIHRoaXMudGFza0xpc3RbaWRUYXNrXTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFza0xpc3QpO1xuICAgICAgY29uc3QgbXlUYXNrcyA9IE9iamVjdC52YWx1ZXModGhpcy50YXNrTGlzdCk7XG4gICAgICBkb21TaG93VGFza3MobXlUYXNrcyk7XG4gICAgfSxcbiAgICBtb2RpZnlUYXNrOiBmdW5jdGlvbiAob2xkVGFzaywgbmV3VGFzaykge1xuICAgICAgLy9jb25zb2xlLmNsZWFyKCk7XG4gICAgICBsZXQgaWRUYXNrID0gb2xkVGFza1tcIm5hbWVJZFwiXTtcblxuICAgICAgbGV0IGdldFRhc2sgPSBhY3RpdmVQcm9qZWN0LmdldFRhc2tMaXN0KCk7XG4gICAgICBjb25zb2xlLmxvZyhcImlkVGFza1wiLCBpZFRhc2spO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIm9sZFwiLCBvbGRUYXNrLCBpZFRhc2spO1xuICAgICAgY29uc29sZS5sb2coXCJuZXdcIiwgbmV3VGFzayk7XG4gICAgICBjb25zb2xlLmxvZyhcIlRhc2sgdG8gY2hhbmdlOiBcIiwgY2hvc2VuVGFza1tcIm5hbWVJZFwiXSk7XG4gICAgICBjb25zb2xlLmxvZyhhY3RpdmVQcm9qZWN0KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVEFTSyBDQVNFXCIsIHRoaXMudGFza0xpc3RbaWRUYXNrXSk7XG4gICAgICB0aGlzLnRhc2tMaXN0W2lkVGFza10gPSBuZXdUYXNrO1xuICAgICAgdGhpcy50YXNrTGlzdFtpZFRhc2tdW1wibmFtZUlkXCJdID0gaWRUYXNrO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIlRBU0tcIiwgZ2V0VGFzayk7XG4gICAgfSxcbiAgICBhZGRUYXNrOiBmdW5jdGlvbiAobmFtZSwgZGF0ZSA9IFwiMDIvbW0veXlcIiwgcHJpb3JpdHkgPSBcIkxPV1wiLCBub3RlcyA9IFwiXCIpIHtcbiAgICAgIGxldCB0YXNrSWQgPSBhc3NpZ25UYXNrSWQoKTtcblxuICAgICAgbGV0IG5hbWVJZFRhc2sgPSBcInRhc2tcIiArIHRhc2tJZDtcbiAgICAgIGxldCBpbnRlcm5hbFRhc2sgPSB7fTtcblxuICAgICAgaW50ZXJuYWxUYXNrW1wibmFtZUlkXCJdID0gbmFtZUlkVGFzaztcbiAgICAgIGludGVybmFsVGFza1tcIm5hbWVcIl0gPSBuYW1lO1xuICAgICAgaW50ZXJuYWxUYXNrW1wiZGF0ZVwiXSA9IGRhdGU7XG4gICAgICBpbnRlcm5hbFRhc2tbXCJwcmlvcml0eVwiXSA9IHByaW9yaXR5O1xuICAgICAgaW50ZXJuYWxUYXNrW1wibm90ZXNcIl0gPSBub3RlcztcbiAgICAgIGludGVybmFsVGFza1tcImNvbXBsZXRlZFwiXSA9IGZhbHNlO1xuXG4gICAgICAvLyBFdmVyeSB0YXNrIGlzIGEgdmFsdWUgd2hvc2Uga2V5IGlzIG5hbWVJZFRhc2tcbiAgICAgIHRoaXMudGFza0xpc3RbbmFtZUlkVGFza10gPSBpbnRlcm5hbFRhc2s7XG4gICAgICBjb25zb2xlLmxvZyhcIlBSSVZBVEUgdGFzaywgXCIsIHRoaXMudGFza0xpc3QpO1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrcyhwcm9qZWN0TCkge1xuICBjb25zb2xlLmxvZyhcIlNob3c6IFwiLCBwcm9qZWN0TCk7XG5cbiAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0TCk7XG4gIGNvbnNvbGUubG9nKFwiQWN0aXZlIHByb2plY3Q6IFwiLCBwcm9qZWN0TC5nZXRQcm9qZWN0SWQoKSk7XG5cbiAgY29uc29sZS5sb2coXCJwcm9qZWN0OiBcIiwgcHJvamVjdEwpO1xuICBsZXQgbXlQcm90b1Rhc2tzID0gbnVsbDtcbiAgbXlQcm90b1Rhc2tzID0gcHJvamVjdEwuZ2V0VGFza0xpc3QoKTtcbiAgLy9jb25zb2xlLmNsZWFyKCk7XG4gIGNvbnN0IG15VGFza3MgPSBPYmplY3QudmFsdWVzKG15UHJvdG9UYXNrcyk7XG4gIGNvbnN0IG5hbWVJZCA9IGFjdGl2ZVByb2plY3QuZ2V0VGFza0lkKCkgKyAxO1xuXG4gIGNvbnNvbGUubG9nKFwibXlUYXNrczogXCIsIG15VGFza3MpO1xuXG4gIGNvbnNvbGUubG9nKFwibmFtZUlkLCBcIiwgbmFtZUlkKTtcblxuICBkb21TaG93VGFza3MobXlUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQWRkUHJvamVjdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdERpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdEZvcm1cIik7XG5cbiAgY29uc3QgbmV3VGl0bGUgPSBteUZvcm1bXCJuYW1lXCJdLnZhbHVlO1xuICBpZiAobmV3VGl0bGUgIT09IFwiXCIpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0RW1wdHkgPSBjcmVhdGVQcm9qZWN0KG5ld1RpdGxlKTtcblxuICAgIGxldCBuZXdQcm9qZWN0O1xuXG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIG5ld1Byb2plY3QgPSBteVByb2plY3RNZXRob2RzKG5ld1Byb2plY3RFbXB0eSk7XG4gICAgICBsZXQgcHJvamVjdElkID0gbmV3UHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RJZCwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdEVtcHR5KSk7XG4gICAgICBsZXQgYWxsU3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsUHJvamVjdHNcIik7XG4gICAgICBsZXQgcGFyc2VkUHJvamVjdHMgPSBKU09OLnBhcnNlKGFsbFN0b3JlZFByb2plY3RzKTtcbiAgICAgIHBhcnNlZFByb2plY3RzLmFsbFByb2plY3RzLnB1c2gocHJvamVjdElkKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwYXJzZWRQcm9qZWN0cykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdQcm9qZWN0ID0gbXlQcm9qZWN0TWV0aG9kcyhuZXdQcm9qZWN0RW1wdHkpO1xuICAgIH1cblxuICAgIGFwcGVuZFByb2plY3QobmV3VGl0bGUsIG5ld1Byb2plY3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKCkge1xuICBjb25zdCBhZGRFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkRWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFByb2plY3REaXZcIik7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkUHJvamVjdEZvcm1cIik7XG4gIGFkZEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuICBjb25zdCBsYWJlbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJvamVjdC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCdzIG5hbWVcIjtcbiAgbGFiZWxQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGFiZWxQcm9qZWN0XCIpO1xuICBjb25zdCBuYW1lUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZVByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbnB1dFByb2plY3RcIik7XG4gIG5hbWVQcm9qZWN0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZVByb2plY3QubmFtZSA9IFwibmFtZVwiO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChsYWJlbFByb2plY3QpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lUHJvamVjdCk7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uUHJvamVjdEZvcm1cIik7XG4gIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREXCI7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tBZGRQcm9qZWN0LCBmYWxzZSk7XG5cbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgcmV0dXJuIGFkZEVsZW1lbnRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RGdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0RGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmNvbnN0IGNyZWF0ZU5ld0lkID0gKCkgPT4ge1xuICBsZXQgaWRQcm9qZWN0ID0gMDtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZFByb2plY3QrKztcbiAgICByZXR1cm4gaWRQcm9qZWN0O1xuICB9O1xufTtcblxuY29uc3QgYXNzaWduUHJvamVjdElkID0gY3JlYXRlTmV3SWQoKTtcbmNvbnN0IGFzc2lnblRhc2tJZCA9IGNyZWF0ZU5ld0lkKCk7XG5cbmZ1bmN0aW9uIGFwcGVuZFByb2plY3QobmV3UHJvamVjdFRpdGxlLCBrZXlQcm9qZWN0KSB7XG4gIGNvbnN0IGxpc3RQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFByb2plY3RzXCIpO1xuICBjb25zdCB0aXRsZVByb2plY3QgPSBlbGVtZW50UHJvamVjdChuZXdQcm9qZWN0VGl0bGUsIGtleVByb2plY3QpO1xuXG4gIHNldEFjdGl2ZVByb2plY3Qoa2V5UHJvamVjdCk7XG4gIHNob3dUYXNrcyhrZXlQcm9qZWN0KTtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdQcm9qZWN0VGl0bGUsIEpTT04uc3RyaW5naWZ5KGtleVByb2plY3QpKTtcbiAgICBsaXN0UHJvamVjdHMuYXBwZW5kQ2hpbGQodGl0bGVQcm9qZWN0KTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0UHJvamVjdHMuYXBwZW5kQ2hpbGQodGl0bGVQcm9qZWN0KTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBhZGRQcm9qZWN0RnVuY3Rpb24sXG4gIGFkZFByb2plY3RGb3JtLFxuICBzaG93VGFza3MsXG4gIGNyZWF0ZVByb2plY3QsXG4gIG15UHJvamVjdE1ldGhvZHMsXG4gIG15UHJvamVjdHMsXG4gIGFjdGl2ZVByb2plY3QsXG4gIHNldENob3NlblRhc2ssXG4gIHNldEFjdGl2ZVByb2plY3QsXG4gIGNyZWF0ZU5ld0lkLFxuICBjaG9zZW5UYXNrLFxufTtcbiIsImltcG9ydCB7XG4gIGFkZFByb2plY3RGdW5jdGlvbixcbiAgYWRkUHJvamVjdEZvcm0sXG4gIHNob3dUYXNrcyxcbiAgYWN0aXZlUHJvamVjdCxcbiAgY2hvc2VuVGFzayxcbiAgc2V0Q2hvc2VuVGFzayxcbn0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGNsaWNrRWRpdFRhc2sgfSBmcm9tIFwiLi90YXNrQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gIHByb2plY3QucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrUmVtb3ZlVGFzayhldmVudCkge1xuICBzZXRDaG9zZW5UYXNrKGV2ZW50KTtcbiAgYWN0aXZlUHJvamVjdC5kZWxldGVUYXNrKGNob3NlblRhc2spO1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGxldCBpZFByb2plY3QgPSBhY3RpdmVQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkUHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoYWN0aXZlUHJvamVjdCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldENvbXBsZXRlZChldmVudCwgYnV0dG9uQ29tcGxldGlvbikge1xuICBzZXRDaG9zZW5UYXNrKGV2ZW50KTtcbiAgY29uc29sZS5jbGVhcigpO1xuICBsZXQgeyBjb21wbGV0ZWQgfSA9IGV2ZW50O1xuICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuICBpZiAoY29tcGxldGVkID09IGZhbHNlKSB7XG4gICAgYnV0dG9uQ29tcGxldGlvbi50ZXh0Q29udGVudCA9IFwiT3BlblwiO1xuICB9IGVsc2Uge1xuICAgIGJ1dHRvbkNvbXBsZXRpb24udGV4dENvbnRlbnQgPSBcIkNsb3NlZFwiO1xuICB9XG5cbiAgYWN0aXZlUHJvamVjdC5lbmRUYXNrKGNob3NlblRhc2ssIGNvbXBsZXRlZCk7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGlkUHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShhY3RpdmVQcm9qZWN0KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWxlbWVudFByb2plY3QobmFtZVByb2plY3REb20sIGtleVByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzVW5pdFwiKTtcblxuICAvLyBUaGUgcHJvamVjdFxuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uUHJvamVjdHNcIik7XG4gIGxldCBwcm9qZWN0SWQgPSBrZXlQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICBjb25zb2xlLmxvZyhcInByIGlkIFwiLCBwcm9qZWN0SWQpO1xuICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3RJZCk7XG5cbiAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IG5hbWVQcm9qZWN0RG9tO1xuICBjb25zb2xlLmxvZyhcIkVsZW1lbnQgcHJvamVjdFwiLCBrZXlQcm9qZWN0KTtcbiAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNob3dUYXNrcyhrZXlQcm9qZWN0KTtcbiAgfSk7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG5cbiAgLy8gVGhlIG9wdGlvbiB0byByZW1vdmUgaXRcbiAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBidXR0b25SZW1vdmVEaXNwbGF5ID0gcHJvamVjdElkICsgXCJCdXR0b25cIjtcblxuICByZW1vdmVQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGJ1dHRvblJlbW92ZURpc3BsYXkpO1xuICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVQcm9qZWN0c1wiLCBcImhpZGVSZW1vdmVCdXR0b25cIik7XG4gIHJlbW92ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZVByb2plY3QocHJvamVjdERpdik7XG4gIH0pO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdXR0b24pO1xuXG4gIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcIm1vdXNlb3ZlclwiLFxuICAgICgpID0+IHtcbiAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVSZW1vdmVCdXR0b25cIik7XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xuXG4gIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcIm1vdXNlb3V0XCIsXG4gICAgKCkgPT4ge1xuICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVJlbW92ZUJ1dHRvblwiKTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG5cbiAgcmV0dXJuIHByb2plY3REaXY7XG59XG5cbmZ1bmN0aW9uIGRvbVNob3dUYXNrcyhteVRhc2tzKSB7XG4gIC8vY29uc29sZS5jbGVhcigpO1xuXG4gIGNvbnN0IG15Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrQ29udGFpbmVySWRcIik7XG4gIG15Q29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBjb25zb2xlLmxvZyhcIm15VGFza3MgZG9tLCBcIiwgbXlUYXNrcyk7XG5cbiAgZm9yIChjb25zdCBlYWNoVGFzayBvZiBteVRhc2tzKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza3NVbml0XCIpO1xuICAgIG5ld1Rhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgZWFjaFRhc2tbXCJuYW1lSWRcIl0pO1xuICAgIG15Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXG4gICAgLy8gTmV3IHRpdGxlXG4gICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBuZXdUaXRsZS50ZXh0Q29udGVudCA9IGVhY2hUYXNrLm5hbWU7XG5cbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcblxuICAgIC8vIE5ldyBleHRyYXMgKGRhdGUsIHByaW9yaXR5KVxuICAgIGNvbnN0IG5ld0V4dHJhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvLyBOZXcgZGF0ZVxuICAgIGlmIChlYWNoVGFzay5kYXRlICE9PSBcIlwiKSB7XG4gICAgICBjb25zdCBuZXdEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBuZXdEdWVEYXRlLnRleHRDb250ZW50ID0gZWFjaFRhc2suZGF0ZTtcbiAgICAgIG5ld0V4dHJhcy5hcHBlbmRDaGlsZChuZXdEdWVEYXRlKTtcbiAgICB9XG5cbiAgICAvLyBOZXcgcHJpb3JpdHlcbiAgICBjb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG5ld1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFBSSU9SSVRZOiAke2VhY2hUYXNrLnByaW9yaXR5fWA7XG4gICAgbmV3RXh0cmFzLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5KTtcblxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3RXh0cmFzKTtcblxuICAgIGlmIChlYWNoVGFzay5wcmlvcml0eSA9PSBcIkhJR0hcIikge1xuICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1VuaXRVcmdlbnRcIik7XG4gICAgfVxuICAgIGlmIChlYWNoVGFzay5wcmlvcml0eSA9PSBcIk1FRElVTVwiKSB7XG4gICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVW5pdEltcG9ydGFudFwiKTtcbiAgICB9XG5cbiAgICAvLyBQbGFjZSBub3Rlc1xuICAgIGlmIChlYWNoVGFzay5ub3RlcyAhPT0gXCJcIikge1xuICAgICAgY29uc3Qgc2V0Tm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2V0Tm90ZXMudGV4dENvbnRlbnQgPSBlYWNoVGFzay5ub3RlcztcbiAgICAgIHNldE5vdGVzLmNsYXNzTGlzdC5hZGQoXCJteU5vdGVzXCIpO1xuICAgICAgY29uc3QgaWROb3RlID0gXCJcIjtcbiAgICAgIHNldE5vdGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkTm90ZSk7XG4gICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHNldE5vdGVzKTtcbiAgICB9XG5cbiAgICAvLyBOZXcgdGFzayBzZXR0aW5nXG4gICAgY29uc3QgbmV3U2V0dGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3U2V0dGluZy5jbGFzc0xpc3QuYWRkKFwidGFza1NldHRpbmdzXCIpO1xuXG4gICAgLy8gQ29tcGxldGVkXG4gICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb21wbGV0ZWQudGV4dENvbnRlbnQgPSBcIk9wZW5cIjtcbiAgICBjb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgc2V0Q29tcGxldGVkKGVhY2hUYXNrLCBjb21wbGV0ZWQpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBpZiAoZWFjaFRhc2tbXCJjb21wbGV0ZWRcIl0pIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJteVRhc2tzIGRvbSwgXCIsIHRydWUpO1xuICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza0NvbXBsZXRlZFwiKTtcbiAgICAgIGNvbXBsZXRlZC50ZXh0Q29udGVudCA9IFwiQ2xvc2VkXCI7XG4gICAgfVxuXG4gICAgbmV3U2V0dGluZy5hcHBlbmRDaGlsZChjb21wbGV0ZWQpO1xuXG4gICAgLy8gTmV3IGVkaXRcbiAgICBjb25zdCBuZXdFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXdFZGl0LmNsYXNzTGlzdC5hZGQoXCJidXR0b25FZGl0VGFza1wiKTtcbiAgICBuZXdFZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgbmV3RWRpdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjbGlja0VkaXRUYXNrKGVhY2hUYXNrKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICBuZXdTZXR0aW5nLmFwcGVuZENoaWxkKG5ld0VkaXQpO1xuXG4gICAgLy8gUmVtb3ZlIHRhc2tcbiAgICBjb25zdCByZW1vdmVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZW1vdmVUYXNrLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVUYXNrXCIpO1xuICAgIHJlbW92ZVRhc2sudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIHJlbW92ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgY2xpY2tSZW1vdmVUYXNrKGVhY2hUYXNrKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICBuZXdTZXR0aW5nLmFwcGVuZENoaWxkKHJlbW92ZVRhc2spO1xuXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdTZXR0aW5nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG15UHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuXG4gIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0oKSk7XG5cbiAgY29uc3QgbXlQcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG15UHJvamVjdHNUaXRsZS5pbm5lclRleHQgPSBcIlBST0pFQ1RTXCI7XG5cbiAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChteVByb2plY3RzVGl0bGUpO1xuXG4gIGNvbnN0IGxpc3RQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpc3RQcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RQcm9qZWN0c1wiKTtcblxuICAvLyBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAvLyAgIHN0b3JlUHJvamVjdChcImxvY2FsTGlzdFByb2plY3RzXCIsIGxpc3RQcm9qZWN0cyk7XG4gIC8vICAgbGV0IGxvY2FsUHJvamVjdExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsTGlzdFByb2plY3RzXCIpO1xuXG4gIC8vIH1cblxuICBjb25zb2xlLmxvZyhcImxpc3QgcHJvamVjdHNcIiwgdHlwZW9mIGxpc3RQcm9qZWN0cyk7XG5cbiAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChsaXN0UHJvamVjdHMpO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnRQcm9qZWN0QnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0LmlubmVyVGV4dCA9IFwiK1wiO1xuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0RnVuY3Rpb24pO1xuXG4gIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgcmV0dXJuIG15UHJvamVjdHM7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RzLCBlbGVtZW50UHJvamVjdCwgZG9tU2hvd1Rhc2tzIH07XG4iLCJmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICBzdG9yYWdlICYmXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICk7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gc3RvcmVQcm9qZWN0KG5hbWUsIG15UHJvamVjdCkge1xuLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShteVByb2plY3QpKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gc3RvcmVBY3RpdmVQcm9qZWN0KG5hbWUsIG15UHJvamVjdCl7XG4vLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIG15UHJvamVjdCk7XG4vLyB9XG5cbmV4cG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfTtcbiIsImltcG9ydCB7IGFjdGl2ZVByb2plY3QsIHNldENob3NlblRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgZWRpdFRhc2tGb3JtIH0gZnJvbSBcIi4vZm9ybXMuanNcIjtcbmltcG9ydCB7IGRvbVNob3dUYXNrcyB9IGZyb20gXCIuL3Byb2plY3RzRG9tLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5mdW5jdGlvbiBjbGlja0VkaXRUYXNrKGV2ZW50KSB7XG4gIC8vIGl0IGRpc3BsYXlzIHRoZSBmb3JtIGZvciBlZGl0aW5nXG5cbiAgLy8gY29uc29sZS5jbGVhcigpO1xuXG4gIHNldENob3NlblRhc2soZXZlbnQpO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwiQ2hvc2VuIHRhc2s6IFwiLCBjaG9zZW5UYXNrKTtcbiAgY29uc3QgZWRpdFRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRGl2XCIpO1xuICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tGb3JtXCIpO1xuXG4gIGNvbnN0IHsgbmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzIH0gPSBldmVudDtcblxuICAvLyBDaGFuZ2UgdGhlIGxhYmVsc1xuXG4gIGxldCBvbGRUYXNrID0gZWRpdEZvcm0uZWxlbWVudHNbXCJlZGl0VGFza1wiXTtcbiAgbGV0IG9sZERhdGUgPSBlZGl0Rm9ybS5lbGVtZW50c1tcImR1ZURhdGVFZGl0XCJdO1xuXG4gIG9sZFRhc2sudmFsdWUgPSBuYW1lO1xuICBvbGREYXRlLnZhbHVlID0gZGF0ZTtcblxuICBsZXQgb2xkTm90ZXMgPSBlZGl0Rm9ybS5lbGVtZW50c1tcInRleHRBcmVhVGFza0VkaXRcIl07XG4gIG9sZE5vdGVzLnZhbHVlID0gbm90ZXM7XG5cbiAgbGV0IG9sZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9XCIgKyBcInByaW9yaXR5XCIgKyBcIl1cIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkUHJpb3JpdHkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob2xkUHJpb3JpdHlbaV0udmFsdWUgPT09IHByaW9yaXR5KSB7XG4gICAgICBvbGRQcmlvcml0eVtpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgLy9jb25zb2xlLmxvZyhcIkFjdGl2ZSBwcm9qZWN0OiBcIiwgYWN0aXZlUHJvamVjdCk7XG5cbiAgZWRpdFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gY2xpY2tBZGRUYXNrKCkge1xuICAvLyBjb25zb2xlLmNsZWFyKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0RpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjb25zb2xlLmxvZyhcIkFjdGl2ZSBwcm9qZWN0OiBcIiwgYWN0aXZlUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1BZGRUYXNrTWV0aG9kKCkge1xuICAvLyBBZGRzIHRoZSB0YXNrIHRvIHRoZSBwcm9qZWN0XG4gIGNvbnN0IG15Rm9ybVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tGb3JtXCIpO1xuICBjb25zdCB0YXNrRGF0YSA9IGdldEZvcm1EYXRhVGFzayhteUZvcm1UYXNrKTtcblxuICBjb25zdCBbeyBuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMgfV0gPSB0YXNrRGF0YTtcblxuICAvLyBXZSBkb24ndCB3YW50IHRhc2tzIHdpdGhvdXQgYSAnbmFtZScgKGRlc2NyaXB0aW9uKVxuICBpZiAobmFtZSA9PSBcIlwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWN0aXZlUHJvamVjdC5hZGRUYXNrKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3Rlcyk7XG5cbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gYWN0aXZlUHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGFjdGl2ZVByb2plY3QpKTtcbiAgfVxuXG4gIGxldCBteVByb3RvVGFza3MgPSBudWxsO1xuICBteVByb3RvVGFza3MgPSBhY3RpdmVQcm9qZWN0LmdldFRhc2tMaXN0KCk7XG4gIGNvbnN0IG15VGFza3MgPSBPYmplY3QudmFsdWVzKG15UHJvdG9UYXNrcyk7XG4gIGRvbVNob3dUYXNrcyhteVRhc2tzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybURhdGFUYXNrKHdoaWNoRm9ybSkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tEaXZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCBteUZvcm1UYXNrID0gd2hpY2hGb3JtO1xuICBjb25zdCBuZXdUYXNrID0gbXlGb3JtVGFza1tcIm5hbWVcIl0udmFsdWU7XG4gIGNvbnN0IG5ld0RhdGUgPSBteUZvcm1UYXNrW1wiZGF0ZVwiXS52YWx1ZTtcbiAgbGV0IG5ld0ltcG9ydGFuY2UgPSBteUZvcm1UYXNrW1wicHJpb3JpdHlcIl0udmFsdWU7XG4gIGNvbnN0IG5ld05vdGVzID0gbXlGb3JtVGFza1tcInRleHRBcmVhVGFza1wiXS52YWx1ZTtcblxuICAvL2NvbnNvbGUuY2xlYXIoKTtcblxuICBjb25zb2xlLmxvZyhcIkFjdGl2ZSBwcm9qZWN0OiBcIiwgYWN0aXZlUHJvamVjdCk7XG4gIGNvbnN0IHRhc2tTZXQgPSBbXG4gICAgeyBuYW1lOiBuZXdUYXNrLCBkYXRlOiBuZXdEYXRlLCBwcmlvcml0eTogbmV3SW1wb3J0YW5jZSwgbm90ZXM6IG5ld05vdGVzIH0sXG4gIF07XG5cbiAgcmV0dXJuIHRhc2tTZXQ7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tGb3JtKCkge1xuICBjb25zdCBhZGRFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkRWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRhc2tEaXZcIik7XG5cbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRUYXNrRm9ybVwiKTtcblxuICAvLyBOYW1lIHRoZSBUYXNrXG4gIGNvbnN0IGVsZW1lbnROYW1lVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxhYmVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxUYXNrLnRleHRDb250ZW50ID0gXCJOYW1lIHRoZSBuZXcgdGFza1wiO1xuICBsYWJlbFRhc2suc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3VGFza1wiKTtcblxuICBjb25zdCBuYW1lVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZVRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdUYXNrXCIpO1xuICBuYW1lVGFzay52YWx1ZSA9IFwiTmFtZSB0aGUgdGFza1wiO1xuICBuYW1lVGFzay50eXBlID0gXCJ0ZXh0XCI7XG4gIG5hbWVUYXNrLm5hbWUgPSBcIm5hbWVcIjtcblxuICBlbGVtZW50TmFtZVRhc2suYXBwZW5kQ2hpbGQobGFiZWxUYXNrKTtcbiAgZWxlbWVudE5hbWVUYXNrLmFwcGVuZENoaWxkKG5hbWVUYXNrKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWVUYXNrKTtcblxuICAvLyBEdWUgRGF0ZVxuICBjb25zdCBlbGVtZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnREYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZURpdlwiKTtcblxuICBjb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsRGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZTogXCI7XG4gIGxhYmVsRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVEYXRlXCIpO1xuXG4gIGNvbnN0IGlucHV0RGF0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0RGF0ZVRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpO1xuICBpbnB1dERhdGVUYXNrLnR5cGUgPSBcImRhdGVcIjtcbiAgaW5wdXREYXRlVGFzay5uYW1lID0gXCJkYXRlXCI7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGlucHV0RGF0ZVRhc2spO1xuXG4gIGVsZW1lbnREYXRlLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gIGVsZW1lbnREYXRlLmFwcGVuZENoaWxkKGlucHV0RGF0ZVRhc2spO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlbGVtZW50RGF0ZSk7XG5cbiAgLy8gUHJpb3JpdHlcblxuICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eURpdlwiKTtcblxuICBjb25zdCBwcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gIHByaW9yaXR5VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcblxuICAvLyBISUdIXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlcIik7XG4gIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaFByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhJR0hcIik7XG5cbiAgaW5wdXRQcmlvcml0eUhpZ2gudHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eUhpZ2gubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eUhpZ2gudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcbiAgbGFiZWxQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5XCIpO1xuICBsYWJlbFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoUHJpb3JpdHlcIik7XG5cbiAgLy8gTUVESVVNXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVkaXVtUHJpb3JpdHlcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNRURJVU1cIik7XG5cbiAgaW5wdXRQcmlvcml0eU1lZGl1bS50eXBlID0gXCJyYWRpb1wiO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS50ZXh0Q29udGVudCA9IFwiTUVESVVNXCI7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5XCIpO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lZGl1bVByaW9yaXR5XCIpO1xuXG4gIC8vIExPV1xuICBjb25zdCBpbnB1dFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eVwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvd1ByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTE9XXCIpO1xuICBpbnB1dFByaW9yaXR5TG93LmNoZWNrZWQgPSB0cnVlO1xuXG4gIGlucHV0UHJpb3JpdHlMb3cudHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eUxvdy5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxPV1wiO1xuICBsYWJlbFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eVwiKTtcbiAgbGFiZWxQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb3dQcmlvcml0eVwiKTtcblxuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZSk7XG5cbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eU1lZGl1bSk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5TG93KTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlMb3cpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUVsZW1lbnQpO1xuXG4gIC8vIE5vdGVzXG5cbiAgY29uc3Qgbm90ZXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90ZXNFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNEaXZcIik7XG5cbiAgY29uc3Qgbm90ZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbm90ZXNUaXRsZS50ZXh0Q29udGVudCA9IFwiTm90ZXNcIjtcbiAgbm90ZXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0ZXh0QXJlYVRhc2tcIik7XG4gIGNvbnN0IHRhc2tUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGV4dEFyZWFUYXNrXCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiNTBcIik7XG4gIHRhc2tUZXh0QXJlYS5uYW1lID0gXCJ0ZXh0QXJlYVRhc2tcIjtcblxuICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQobm90ZXNUaXRsZSk7XG4gIG5vdGVzRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrVGV4dEFyZWEpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChub3Rlc0VsZW1lbnQpO1xuXG4gIGFkZEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblRhc2tGb3JtXCIpO1xuICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERFwiO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZvcm1BZGRUYXNrTWV0aG9kLCBmYWxzZSk7XG5cbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICByZXR1cm4gYWRkRWxlbWVudENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHtcbiAgY2xpY2tBZGRUYXNrLFxuICBhZGRUYXNrRm9ybSxcbiAgZWRpdFRhc2tGb3JtLFxuICBnZXRGb3JtRGF0YVRhc2ssXG4gIGNsaWNrRWRpdFRhc2ssXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCBlbGVtZW50UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzRG9tLmpzXCI7XG5pbXBvcnQge1xuICBzaG93VGFza3MsXG4gIGNyZWF0ZVByb2plY3QsXG4gIHNldEFjdGl2ZVByb2plY3QsXG4gIGFjdGl2ZVByb2plY3QsXG4gIG15UHJvamVjdE1ldGhvZHMsXG59IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBjbGlja0FkZFRhc2ssIGFkZFRhc2tGb3JtIH0gZnJvbSBcIi4vdGFza0NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgZWRpdFRhc2tGb3JtIH0gZnJvbSBcIi4vZm9ybXMuanNcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmxldCBzdGF0ZVVzZXI7XG5cbi8vIENyZWF0ZSB0aGUgc2FtcGxlIHByb2plY3RzIHRoYXQgd2lsbCBhZGQgYXQgdGhlIGVuZFxuXG5jb25zdCBzYW1wbGVQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcInByb2plY3QxXCIpO1xuXG5sZXQgc2FtcGxlUHJvamVjdE9uZTtcbmxldCBzYW1wbGVQcm9qZWN0VHdvO1xubGV0IG5hbWVQcm9qZWN0U2FtcGxlT25lO1xubGV0IG5hbWVQcm9qZWN0U2FtcGxlVHdvO1xubGV0IGNyZWF0ZUVsZW1lbnRTYW1wbGVPbmU7XG5sZXQgY3JlYXRlRWxlbWVudFNhbXBsZVR3bztcblxuLy8gUHJvamVjdCBvbmVcblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgc3RhdGVVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdGF0ZUFwcGxpY2F0aW9uXCIpO1xuXG4gIGlmIChzdGF0ZVVzZXIgPT0gbnVsbCkge1xuICAgIGxldCBhbGxMb2NhbFByb2plY3RzID0geyBhbGxQcm9qZWN0czogW10gfTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsTG9jYWxQcm9qZWN0cykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdDFcIiwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlUHJvamVjdCkpO1xuICAgIGxldCBsb2NhbFByb2plY3QxID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0MVwiKTtcbiAgICBzYW1wbGVQcm9qZWN0T25lID0gbXlQcm9qZWN0TWV0aG9kcyhKU09OLnBhcnNlKGxvY2FsUHJvamVjdDEpKTtcbiAgICBjb25zb2xlLmxvZyhcInNhbXBsZVwiLCBzYW1wbGVQcm9qZWN0T25lKTtcbiAgICAvLyBQdXNoIHRoZSBwcm9qZWN0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgbGV0IGFsbFN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIpO1xuICAgIGxldCBwYXJzZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UoYWxsU3RvcmVkUHJvamVjdHMpO1xuICAgIGxldCBmaXJzdFByb2plY3RJZCA9IHNhbXBsZVByb2plY3RPbmUuZ2V0UHJvamVjdElkKCk7XG4gICAgcGFyc2VkUHJvamVjdHMuYWxsUHJvamVjdHMucHVzaChmaXJzdFByb2plY3RJZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFByb2plY3RzKSk7XG4gICAgY29uc29sZS5sb2coXCJhcnJyYXlcIiwgcGFyc2VkUHJvamVjdHMuYWxsUHJvamVjdHMpO1xuICB9XG59XG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgc2FtcGxlUHJvamVjdE9uZSA9IG15UHJvamVjdE1ldGhvZHMoc2FtcGxlUHJvamVjdCk7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgc2FtcGxlUHJvamVjdE9uZS5hZGRUYXNrKFwiUmVhZCBhIDkwIGJvb2tcIiwgXCIzLzMvMjAyNFwiLCBcIkxPV1wiLCBcInNzXCIpO1xuICBzYW1wbGVQcm9qZWN0T25lLmFkZFRhc2soXCJSZWFkIEFuIEVtcHR5IDAgSG91c2VcIik7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0MVwiLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0T25lKSk7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgY29uc29sZS5sb2coXCJwcm9cIiwgc2FtcGxlUHJvamVjdE9uZSk7XG4gIHNldEFjdGl2ZVByb2plY3Qoc2FtcGxlUHJvamVjdE9uZSk7XG4gIGNvbnNvbGUubG9nKFwiQWN0aXZlIHByb2plY3Q6IFwiLCBhY3RpdmVQcm9qZWN0KTtcbn1cblxuLy8gUHJvamVjdCB0d29cbmNvbnN0IHNhbXBsZVByb2plY3ROZXh0ID0gY3JlYXRlUHJvamVjdChcInByb2plY3QyXCIpO1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBpZiAoc3RhdGVVc2VyID09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3QyXCIsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3ROZXh0KSk7XG4gICAgbGV0IGxvY2FsUHJvamVjdDIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3QyXCIpO1xuICAgIHNhbXBsZVByb2plY3RUd28gPSBteVByb2plY3RNZXRob2RzKEpTT04ucGFyc2UobG9jYWxQcm9qZWN0MikpO1xuXG4gICAgLy8gUHVzaCB0aGUgcHJvamVjdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIGxldCBhbGxTdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICBsZXQgc2Vjb25kUHJvamVjdElkID0gc2FtcGxlUHJvamVjdFR3by5nZXRQcm9qZWN0SWQoKTtcbiAgICBsZXQgcGFyc2VkUHJvamVjdHMgPSBKU09OLnBhcnNlKGFsbFN0b3JlZFByb2plY3RzKTtcbiAgICBwYXJzZWRQcm9qZWN0cy5hbGxQcm9qZWN0cy5wdXNoKHNlY29uZFByb2plY3RJZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFByb2plY3RzKSk7XG4gICAgY29uc29sZS5sb2coXCJhbGwgMlwiLCBwYXJzZWRQcm9qZWN0cyk7XG4gIH1cbn0gZWxzZSB7XG4gIHNhbXBsZVByb2plY3RUd28gPSBteVByb2plY3RNZXRob2RzKHNhbXBsZVByb2plY3ROZXh0KTtcbiAgbmFtZVByb2plY3RTYW1wbGVUd28gPSBzYW1wbGVQcm9qZWN0VHdvLmdldFByb2plY3ROYW1lKCk7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgc2FtcGxlUHJvamVjdFR3by5hZGRUYXNrKFwiUmVhZCBhIGdyZWF0IGJvb2tcIiwgXCIzZDNcIiwgXCJISUdIXCIsIFwic2FzXCIpO1xufVxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpIHwgKHN0YXRlVXNlciA9PSBudWxsKSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3QyXCIsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3RUd28pKTtcbn1cblxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpIHwgKHN0YXRlVXNlciA9PSBudWxsKSkge1xuICBuYW1lUHJvamVjdFNhbXBsZU9uZSA9IHNhbXBsZVByb2plY3RPbmUuZ2V0UHJvamVjdE5hbWUoKTtcbiAgbmFtZVByb2plY3RTYW1wbGVUd28gPSBzYW1wbGVQcm9qZWN0VHdvLmdldFByb2plY3ROYW1lKCk7XG5cbiAgY3JlYXRlRWxlbWVudFNhbXBsZU9uZSA9IGVsZW1lbnRQcm9qZWN0KFxuICAgIG5hbWVQcm9qZWN0U2FtcGxlT25lLFxuICAgIHNhbXBsZVByb2plY3RPbmVcbiAgKTtcblxuICBjcmVhdGVFbGVtZW50U2FtcGxlVHdvID0gZWxlbWVudFByb2plY3QoXG4gICAgbmFtZVByb2plY3RTYW1wbGVUd28sXG4gICAgc2FtcGxlUHJvamVjdFR3b1xuICApO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy9cbi8vL1xuLy9cblxuLy8gQ3JlYXRlIGFuZCBhZGQgZG9tIGVsZW1lbnRzXG5cbmZ1bmN0aW9uIG15SGVhZGVyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJQYWdlXCIpO1xuICBlbGVtZW50LmlubmVySFRNTCA9IFwiVE8gRE8gTElTVFwiO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG15SGVhZGVyKCkpO1xuXG5jb25zdCBjb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW4uY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuLy8gTGVmdCBTaWRlXG5cbmNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoXCJsZWZ0U2VjdGlvblwiKTtcbmxlZnRTaWRlLmFwcGVuZENoaWxkKHJlbmRlclByb2plY3RzKCkpO1xuXG5jb250YWluLmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcblxuLy8gUmlnaHQgc2lkZVxuXG5jb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJyaWdodFNlY3Rpb25cIik7XG5cbi8vIFBhcmVudCB0YXNrIGVsZW1lbnRcbmNvbnN0IG15VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubXlUYXNrcy5jbGFzc0xpc3QuYWRkKFwidGFza3NcIik7XG5teVRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlUYXNrc0lEXCIpO1xuXG5jb25zdCBteVRhc2tzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbm15VGFza3NUaXRsZS5pbm5lclRleHQgPSBcIlRBU0tTXCI7XG5cbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuYWRkVGFzay5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKTtcbmFkZFRhc2suaW5uZXJUZXh0ID0gXCIrXCI7XG5cbmFkZFRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRTdGFydFRhc2tCdXR0b25cIik7XG5hZGRUYXNrLmlubmVyVGV4dCA9IFwiK1wiO1xuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGlja0FkZFRhc2soKTtcbn0pO1xuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQWRkVGFzayk7XG5cbnJpZ2h0U2lkZS5hcHBlbmRDaGlsZChteVRhc2tzKTtcbm15VGFza3MuYXBwZW5kQ2hpbGQobXlUYXNrc1RpdGxlKTtcbm15VGFza3MuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5teVRhc2tzLmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKCkpO1xubXlUYXNrcy5hcHBlbmRDaGlsZChlZGl0VGFza0Zvcm0oKSk7XG5cbi8vIENoaWxkIHRhc2sgZWxlbWVudCAodGFzayBjb250YWluZXIpXG5jb25zdCBob21lVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ob21lVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lckZpcnN0XCIpO1xuaG9tZVRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrQ29udGFpbmVySWRcIik7XG5cbm15VGFza3MuYXBwZW5kQ2hpbGQoaG9tZVRhc2tDb250YWluZXIpO1xuXG4vLyBTdW0gaXQgdXBcbmNvbnRhaW4uYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbik7XG5cbi8vXG5jb25zdCBsaXN0T2ZQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFByb2plY3RzXCIpO1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAvLyBJcyBpdCB0aGUgZmlyc3QgdGltZSB3ZSBydW4gdGhlIGFwcGxpY2F0aW9uP1xuICAvLyBXZSB3YW50IHRvIHNob3cgc29tZSBpbml0aWFsIHByb2plY3RzIGZvciB0aGUgZmlyc3QgdGltZVxuXG4gIGlmIChzdGF0ZVVzZXIgIT09IG51bGwpIHtcbiAgICAvLyBVcGRhdGUgdGhlIHZhbHVlXG4gICAgbGV0IG15TG9jYWxQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICBsZXQgb2JqZWN0TG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobXlMb2NhbFByb2plY3RzKTtcblxuICAgIGxldCBudW1iZXJMb2NhbFByb2plY3RzID0gb2JqZWN0TG9jYWxQcm9qZWN0cy5hbGxQcm9qZWN0cy5sZW5ndGg7XG4gICAgY29uc29sZS5sb2coXCJudW1iZXJcIiwgb2JqZWN0TG9jYWxQcm9qZWN0cy5hbGxQcm9qZWN0cyk7XG4gICAgaWYgKG51bWJlckxvY2FsUHJvamVjdHMgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlckxvY2FsUHJvamVjdHM7IGkrKykge1xuICAgICAgICBsZXQgcHJvamVjdElkID0gb2JqZWN0TG9jYWxQcm9qZWN0cy5hbGxQcm9qZWN0c1tpXTtcbiAgICAgICAgbGV0IG15UHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RJZCk7XG4gICAgICAgIGxldCBteVByb2plY3RQYXJzZWQgPSBKU09OLnBhcnNlKG15UHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZm9yIGlkXCIsIG15UHJvamVjdFBhcnNlZCk7XG4gICAgICAgIGxldCBwcm9qZWN0T2JqZWN0ID0gbXlQcm9qZWN0TWV0aG9kcyhteVByb2plY3RQYXJzZWQpO1xuICAgICAgICBsZXQgbmFtZVByb2plY3QgPSBwcm9qZWN0T2JqZWN0LmdldFByb2plY3ROYW1lKCk7XG5cbiAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBlbGVtZW50UHJvamVjdChuYW1lUHJvamVjdCwgcHJvamVjdE9iamVjdCk7XG4gICAgICAgIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiSSB3YW50IHRvIHN0YXkuXCIsIG9iamVjdExvY2FsUHJvamVjdHMuYWxsUHJvamVjdHMpO1xuICB9XG5cbiAgLy8gRmlyc3QgdGltZSB1c2VyXG4gIGlmIChzdGF0ZVVzZXIgPT0gbnVsbCkge1xuICAgIHN0YXRlVXNlciA9IFwiZGVmYXVsdFwiO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdGVBcHBsaWNhdGlvblwiLCBzdGF0ZVVzZXIpO1xuXG4gICAgY29uc29sZS5sb2coXCJ1c2VyXCIsIHN0YXRlVXNlcik7XG4gICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFNhbXBsZU9uZSk7XG4gICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFNhbXBsZVR3byk7XG4gICAgc2hvd1Rhc2tzKHNhbXBsZVByb2plY3RPbmUpO1xuICB9XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBsaXN0T2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50U2FtcGxlT25lKTtcbiAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFNhbXBsZVR3byk7XG4gIHNob3dUYXNrcyhzYW1wbGVQcm9qZWN0T25lKTtcbn1cblxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGlja0FkZFRhc2soYWN0aXZlUHJvamVjdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==