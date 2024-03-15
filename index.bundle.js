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
    background-color: rgba(23, 250, 61, 0.799);
    height: 1.2rem;
    /* font-size: 2rem; */
    /* padding: 0.2rem 0; */
    text-align: center;

}


.container {
    display: grid;
    grid-template-columns: [first] 35% [second] 65% [end];
    padding: 0;
    height: 633px;
    background-color: blue;
}



.leftSection {
    background-color: brown;

}

.rightSection {

    background-color: blueviolet;
}


.projects {
    margin: 5rem auto;
    width: 60%;
    text-align: center;
    background-color: rgba(233, 150, 122, 0.28);
    padding: 5px 3px 15px 3px;
    border-radius: 15px;
    position: relative;
}



#projectsHeader {
    background-color: rgba(0, 0, 255, 0.756);
    padding: 6px;
    margin: 15px;
    margin-bottom: 1.5rem;
    border-radius: 9px;
}

#projectsTitle {
    display: inline-block;
    margin: 3px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: large;
    font-weight: bolder;
    letter-spacing: .2rem;

}

#startProjectButton {
    float: right;
    margin: 5px;
    background-color: rgba(255, 255, 255, 0.212);
    font-size: 10px;
    border-radius: 90%;
}


#startProjectButton:hover {
    background-color: rgba(0, 0, 255, 0.894);
}

#inputProject {
    width: 80%;
    margin: 10px 0 5px 0;
}


.tasksUnit {
    background-color: rgb(238, 244, 129);
    padding: 1rem;
}

.titleTask {
    border-radius: 5px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: large;
    padding: 4px;
    background-color: rgb(255, 237, 192);
}

.taskDatePriority {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.taskDate {
    font-size: medium;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.taskPriority {
    padding: 5px;
    border: solid black 1px;
    font-size: small;
}




.taskUnitImportant {
    background-color: rgb(181, 238, 132);
}

.taskUnitUrgent {
    background-color: rgb(21, 255, 0);
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
    margin: 8px;
    padding: 8px;
}

.buttonProjects {
    background-color: cyan;
}

.buttonProjects:hover {
    background-color: rgb(26, 207, 207);
}





.removeProjects {
    grid-column: 7 / 8;
    background-color: red;
    border-radius: 50%;
    display: inline-block;

}

.activeProject {
    background-color: #007204;
    color: white;
}

.activeProject:hover {
    background-color: rgb(6, 208, 30);
}



#listProjects {
    text-align: center;
}


.hideRemoveButton {
    display: none;
}




#addProjectDiv {
    background-color: rgb(151, 151, 222);
    display: none;
    position: absolute;
    left: 1rem;
    top: 1rem;
}

/* right side */

.tasks {
    margin: 5rem auto;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: .2rem;
    width: 70%;
    padding-top: 5px;
    text-align: center;
    background-color: rgb(246, 74, 16);
}

#tasksTitle {
    margin: 3px;
    font-size: large;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    display: inline-block;
}

.addTask {
    float: right;
    margin: 5px;
    background-color: rgba(255, 255, 255, 0.416);
}


.addTask:hover {
    background-color: rgba(77, 248, 64, 0.414);
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


#editTaskDiv {
    display: none;
    position: absolute;
    left: 40%;

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
    background-color: goldenrod;
    margin: 8px;
    padding: 7px;
}

label[for="newTask"] {
    display: block;
    color: black;
    margin: 0.4rem 0 1.4rem 0;
}

#addProjectForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: goldenrod;
    text-align: center;
    margin: 3px;
    padding: 5px;
    min-width: 400px;
}

#labelProject {
    margin: .4rem 1.5rem;
}

#buttonProjectForm {
    margin: 1rem;
    padding: 4px;
    background-color: rgb(233, 199, 113)
}

#buttonProjectForm:hover {
    background-color: rgb(247, 206, 103)
}


span {
    margin: 5px 30px;
}



.labelPriority {
    /* display: ; */
    background-color: rgb(0, 0, 0);
    color: white;
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
    padding: 3px;
    background-color: rgba(0, 0, 255, 0.071);
    border-radius: 5px;
}

.taskSettings>button:hover {
    background-color: #04AA6D;
    color: white;
}



.taskSettings>.removeTask:hover {
    background-color: rgb(214, 12, 12);
    color: white;
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

#renameProjectDiv {
    display: none;
    position: absolute;
    padding: 7px;
    background-color: #04AA6D;
    min-width: 110%;
}

#renameProjectDiv {
    position: absolute;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* We need the \"bdo:-moz-has-dir-attr\" bit because \"bdo\" has lower\n    specificity than the \":-moz-has-dir-attr\" selector above. */\nbdo,\nbdo:-moz-has-dir-attr {\n    unicode-bidi: isolate-override;\n}\n\ntextarea:-moz-dir-attr-like-auto,\npre:-moz-dir-attr-like-auto {\n    unicode-bidi: plaintext;\n}\n\n/* blocks */\n\narticle,\naside,\ndetails,\ndiv,\ndt,\nfigcaption,\nfooter,\nform,\nheader,\nhgroup,\nhtml,\nmain,\nnav,\nsearch,\nsection,\nsummary {\n    display: block;\n}\n\nbody {\n    display: block;\n    margin: 0\n}\n\np,\ndl,\nmulticol {\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\ndd {\n    display: block;\n    margin-inline-start: 40px;\n}\n\nblockquote,\nfigure {\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 40px;\n    margin-inline-end: 40px;\n}\n\naddress {\n    display: block;\n    font-style: italic;\n}\n\ncenter {\n    display: block;\n    text-align: -moz-center;\n}\n\nh1 {\n    display: block;\n    font-size: 2em;\n    font-weight: bold;\n    margin-block-start: .67em;\n    margin-block-end: .67em;\n}\n\nh2,\n:is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-block-start: .83em;\n    margin-block-end: .83em;\n}\n\nh3,\n:is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.17em;\n    font-weight: bold;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\nh4,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.00em;\n    font-weight: bold;\n    margin-block-start: 1.33em;\n    margin-block-end: 1.33em;\n}\n\nh5,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 0.83em;\n    font-weight: bold;\n    margin-block-start: 1.67em;\n    margin-block-end: 1.67em;\n}\n\nh6,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 0.67em;\n    font-weight: bold;\n    margin-block-start: 2.33em;\n    margin-block-end: 2.33em;\n}\n\nlisting {\n    display: block;\n    font-family: -moz-fixed;\n    font-size: medium;\n    white-space: pre;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\nxmp,\npre,\nplaintext {\n    display: block;\n    font-family: -moz-fixed;\n    white-space: pre;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\n/* tables */\n\ntable {\n    display: table;\n    border-spacing: 2px;\n    border-collapse: separate;\n    /* XXXldb do we want this if we're border-collapse:collapse ? */\n    box-sizing: border-box;\n    text-indent: 0;\n}\n\ntable[align=\"left\"] {\n    float: left;\n}\n\ntable[align=\"right\"] {\n    float: right;\n    text-align: start;\n}\n\n\n/* border collapse rules */\n\n/* Set hidden if we have 'frame' or 'rules' attribute.\n      Set it on all sides when we do so there's more consistency\n      in what authors should expect */\n\n/* Put this first so 'border' and 'frame' rules can override it. */\ntable[rules] {\n    border-width: thin;\n    border-style: hidden;\n}\n\n/* 'border' before 'frame' so 'frame' overrides\n       A border with a given value should, of course, pass that value\n       as the border-width in pixels -> attr mapping */\n\n/* :-moz-table-border-nonzero is like [border]:not([border=\"0\"]) except it\n      also checks for other zero-like values according to HTML attribute\n      parsing rules */\ntable:-moz-table-border-nonzero {\n    border-width: thin;\n    border-style: outset;\n}\n\ntable[frame] {\n    border: thin hidden;\n}\n\n/* specificity must beat table:-moz-table-border-nonzero rule above */\ntable[frame=\"void\"] {\n    border-style: hidden;\n}\n\ntable[frame=\"above\"] {\n    border-style: outset hidden hidden hidden;\n}\n\ntable[frame=\"below\"] {\n    border-style: hidden hidden outset hidden;\n}\n\ntable[frame=\"lhs\"] {\n    border-style: hidden hidden hidden outset;\n}\n\ntable[frame=\"rhs\"] {\n    border-style: hidden outset hidden hidden;\n}\n\ntable[frame=\"hsides\"] {\n    border-style: outset hidden;\n}\n\ntable[frame=\"vsides\"] {\n    border-style: hidden outset;\n}\n\ntable[frame=\"box\"],\ntable[frame=\"border\"] {\n    border-style: outset;\n}\n\n\n/* Internal Table Borders */\n\n/* 'border' cell borders first */\n\ntable:-moz-table-border-nonzero>*>tr>td,\ntable:-moz-table-border-nonzero>*>tr>th,\ntable:-moz-table-border-nonzero>*>td,\ntable:-moz-table-border-nonzero>*>th,\ntable:-moz-table-border-nonzero>td,\ntable:-moz-table-border-nonzero>th {\n    border-width: thin;\n    border-style: inset;\n}\n\n/* collapse only if rules are really specified */\ntable[rules]:not([rules=\"none\"], [rules=\"\"]) {\n    border-collapse: collapse;\n}\n\n/* only specified rules override 'border' settings\n   (increased specificity to achieve this) */\ntable[rules]:not([rules=\"\"])>tr>td,\ntable[rules]:not([rules=\"\"])>*>tr>td,\ntable[rules]:not([rules=\"\"])>tr>th,\ntable[rules]:not([rules=\"\"])>*>tr>th,\ntable[rules]:not([rules=\"\"])>td,\ntable[rules]:not([rules=\"\"])>th {\n    border-width: thin;\n    border-style: none;\n}\n\n\ntable[rules][rules=\"none\"]>tr>td,\ntable[rules][rules=\"none\"]>*>tr>td,\ntable[rules][rules=\"none\"]>tr>th,\ntable[rules][rules=\"none\"]>*>tr>th,\ntable[rules][rules=\"none\"]>td,\ntable[rules][rules=\"none\"]>th {\n    border-width: thin;\n    border-style: none;\n}\n\ntable[rules][rules=\"all\"]>tr>td,\ntable[rules][rules=\"all\"]>*>tr>td,\ntable[rules][rules=\"all\"]>tr>th,\ntable[rules][rules=\"all\"]>*>tr>th,\ntable[rules][rules=\"all\"]>td,\ntable[rules][rules=\"all\"]>th {\n    border-width: thin;\n    border-style: solid;\n}\n\ntable[rules][rules=\"rows\"]>tr,\ntable[rules][rules=\"rows\"]>*>tr {\n    border-block-start-width: thin;\n    border-block-end-width: thin;\n    border-block-start-style: solid;\n    border-block-end-style: solid;\n}\n\n\ntable[rules][rules=\"cols\"]>tr>td,\ntable[rules][rules=\"cols\"]>*>tr>td,\ntable[rules][rules=\"cols\"]>tr>th,\ntable[rules][rules=\"cols\"]>*>tr>th {\n    border-inline-start-width: thin;\n    border-inline-end-width: thin;\n    border-inline-start-style: solid;\n    border-inline-end-style: solid;\n}\n\ntable[rules][rules=\"groups\"]>colgroup {\n    border-inline-start-width: thin;\n    border-inline-end-width: thin;\n    border-inline-start-style: solid;\n    border-inline-end-style: solid;\n}\n\ntable[rules][rules=\"groups\"]>tfoot,\ntable[rules][rules=\"groups\"]>thead,\ntable[rules][rules=\"groups\"]>tbody {\n    border-block-start-width: thin;\n    border-block-end-width: thin;\n    border-block-start-style: solid;\n    border-block-end-style: solid;\n}\n\n\n/* caption inherits from table not table-outer */\ncaption {\n    display: table-caption;\n    text-align: center;\n}\n\ntable[align=\"center\"]>caption {\n    margin-inline-start: auto;\n    margin-inline-end: auto;\n}\n\ntable[align=\"center\"]>caption[align=\"left\"]:dir(ltr) {\n    margin-inline-end: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"left\"]:dir(rtl) {\n    margin-inline-start: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"right\"]:dir(ltr) {\n    margin-inline-start: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"right\"]:dir(rtl) {\n    margin-inline-end: 0;\n}\n\ntr {\n    display: table-row;\n    vertical-align: inherit;\n}\n\ncol {\n    display: table-column;\n}\n\ncolgroup {\n    display: table-column-group;\n}\n\ntbody {\n    display: table-row-group;\n    vertical-align: middle;\n}\n\nthead {\n    display: table-header-group;\n    vertical-align: middle;\n}\n\ntfoot {\n    display: table-footer-group;\n    vertical-align: middle;\n}\n\n/* for XHTML tables without tbody */\ntable>tr {\n    vertical-align: middle;\n}\n\ntd {\n    display: table-cell;\n    vertical-align: inherit;\n    text-align: unset;\n    padding: 1px;\n}\n\nth {\n    display: table-cell;\n    vertical-align: inherit;\n    font-weight: bold;\n    padding: 1px;\n    text-align: -moz-center-or-inherit;\n}\n\n:is(tr, tbody, thead, tfoot, table)>form:-moz-is-html {\n    /* Important: don't show these forms in HTML */\n    display: none !important;\n}\n\ntable[bordercolor]>tbody,\ntable[bordercolor]>thead,\ntable[bordercolor]>tfoot,\ntable[bordercolor]>col,\ntable[bordercolor]>colgroup,\ntable[bordercolor]>tr,\ntable[bordercolor]>*>tr,\ntable[bordercolor]>tr>td,\ntable[bordercolor]>*>tr>td,\ntable[bordercolor]>tr>th,\ntable[bordercolor]>*>tr>th {\n    border-color: inherit;\n}\n\n/* inlines */\n\nq:before {\n    content: open-quote;\n}\n\nq:after {\n    content: close-quote;\n}\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\ni,\ncite,\nem,\nvar,\ndfn {\n    font-style: italic;\n}\n\ntt,\ncode,\nkbd,\nsamp {\n    font-family: -moz-fixed;\n}\n\nu,\nins {\n    text-decoration: underline;\n}\n\ns,\nstrike,\ndel {\n    text-decoration: line-through;\n}\n\nbig {\n    font-size: larger;\n}\n\nsmall {\n    font-size: smaller;\n}\n\nsub {\n    vertical-align: sub;\n    font-size: smaller;\n}\n\nsup {\n    vertical-align: super;\n    font-size: smaller;\n}\n\nnobr {\n    white-space: nowrap;\n}\n\nmark {\n    background: Mark;\n    color: MarkText;\n}\n\n/* titles */\nabbr[title],\nacronym[title] {\n    text-decoration: dotted underline;\n}\n\n/* lists */\n\nul,\nmenu,\ndir {\n    display: block;\n    list-style-type: disc;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    padding-inline-start: 40px;\n}\n\nul,\nol,\nmenu {\n    counter-reset: list-item;\n}\n\nol {\n    display: block;\n    list-style-type: decimal;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    padding-inline-start: 40px;\n}\n\nli {\n    display: list-item;\n    text-align: match-parent;\n}\n\n/* nested lists have no top/bottom margins */\n:is(ul, ol, dir, menu, dl) ul,\n:is(ul, ol, dir, menu, dl) ol,\n:is(ul, ol, dir, menu, dl) dir,\n:is(ul, ol, dir, menu, dl) menu,\n:is(ul, ol, dir, menu, dl) dl {\n    margin-block-start: 0;\n    margin-block-end: 0;\n}\n\n/* 2 deep unordered lists use a circle */\n:is(ol, ul, menu, dir) ul,\n:is(ol, ul, menu, dir) menu,\n:is(ol, ul, menu, dir) dir {\n    list-style-type: circle;\n}\n\n/* 3 deep (or more) unordered lists use a square */\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {\n    list-style-type: square;\n}\n\n\n/* leafs */\n\n/* <hr> noshade and color attributes are handled completely by\n  * HTMLHRElement::MapAttributesIntoRule.\n  * https://html.spec.whatwg.org/#the-hr-element-2\n  */\nhr {\n    color: gray;\n    border-width: 1px;\n    border-style: inset;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n    margin-inline-start: auto;\n    margin-inline-end: auto;\n    overflow: hidden;\n\n    /* FIXME: This is not really per spec */\n    display: block;\n}\n\nhr[size=\"1\"] {\n    border-style: solid none none none;\n}\n\n/* Note that we only intend for the alt content to show up if the image is\n  * broken. But non-broken images/inputs will have a replaced box, and thus we\n  * won't we don't generate the pseudo-element anyways. This prevents\n  * unnecessary reframing when images become broken / non-broken. */\ninput[type=image]::before,\nimg::before {\n    content: -moz-alt-content !important;\n    unicode-bidi: isolate;\n}\n\nimg[usemap],\nobject[usemap] {\n    color: blue;\n}\n\nframeset {\n    display: block ! important;\n    overflow: clip;\n    position: static ! important;\n    float: none ! important;\n    border: none ! important;\n}\n\nframe {\n    border-radius: 0 ! important;\n}\n\niframe {\n    border: 2px inset;\n}\n\nspacer {\n    position: static ! important;\n    float: none ! important;\n}\n\ncanvas {\n    user-select: none;\n}\n\niframe:focus-visible,\nbody:focus-visible,\nhtml:focus-visible {\n    /* These elements historically don't show outlines when focused by default.\n    * We could consider changing that if needed. */\n    outline-style: none;\n}\n\n/* hidden elements: https://html.spec.whatwg.org/#hidden-elements\n  *\n  * Exceptions:\n  *\n  *  * area declaration needs to be !important, see below / bug 135040.  That's\n  *    hacky and broken.\n  *\n  *  * [hidden] is implemented as a presentation attribute to avoid a global\n  *    selector in a UA sheet.\n  */\nbase,\nbasefont,\ndatalist,\nhead,\nlink,\nmeta,\nnoembed,\nnoframes,\nparam,\nrp,\nscript,\nstyle,\ntemplate,\ntitle {\n    display: none;\n}\n\narea {\n    /* Don't give it frames other than its imageframe */\n    display: none ! important;\n}\n\niframe:fullscreen {\n    /* iframes in full-screen mode don't show a border. */\n    border: none !important;\n    padding: unset !important;\n}\n\n/* Details and summary\n  * https://html.spec.whatwg.org/#the-details-and-summary-elements\n  *\n  * Note that these rules need to be duplicated in details.css for the anonymous\n  * summary, which wouldn't match otherwise.\n  *\n  * The spec here says something different, see\n  * https://github.com/whatwg/html/issues/8610\n  */\ndetails>summary:first-of-type {\n    display: list-item;\n    counter-increment: list-item 0;\n    list-style: disclosure-closed inside;\n}\n\ndetails[open]>summary:first-of-type {\n    list-style-type: disclosure-open;\n}\n\n/* media elements */\nvideo {\n    object-fit: contain;\n}\n\nvideo>img:-moz-native-anonymous {\n    /* Video poster images should render with the video element's \"object-fit\" &\n      \"object-position\" properties */\n    object-fit: inherit !important;\n    object-position: inherit !important;\n}\n\naudio:not([controls]) {\n    display: none !important;\n}\n\naudio[controls] {\n    /* This ensures that intrinsic sizing can reliably shrinkwrap our\n       controls (which are also always horizontal) and produce a\n       reasonable intrinsic size from them. */\n    writing-mode: horizontal-tb !important;\n}\n\n*|*::-moz-html-canvas-content {\n    display: block !important;\n    /* we want to be an absolute and fixed container */\n    transform: translate(0) !important;\n}\n\nvideo>.caption-box {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n/**\n  * The pseudo element won't inherit CSS styles from its direct parent, `::cue`\n  * would actually inherit styles from video because it's video's pseudo element.\n  * Therefore, we have to explicitly set some styles which are already defined\n  * in its parent element in vtt.jsm.\n  */\n::cue {\n    color: rgba(255, 255, 255, 1);\n    white-space: pre-line;\n    background-color: rgba(0, 0, 0, 0.8);\n    font: 10px sans-serif;\n    font-size: var(--cue-font-size);\n    writing-mode: var(--cue-writing-mode, inherit);\n    overflow-wrap: break-word;\n    /* TODO : enable unicode-bidi, right now enable it would cause incorrect\n             display direction, maybe related with bug 1558431. */\n}\n\n/* <dialog> element styles */\n\ndialog {\n    position: absolute;\n    display: block;\n    inset-inline-start: 0;\n    inset-inline-end: 0;\n    margin: auto;\n    border-width: initial;\n    border-style: solid;\n    border-color: initial;\n    border-image: initial;\n    padding: 1em;\n    background-color: Canvas;\n    color: CanvasText;\n    width: -moz-fit-content;\n    height: -moz-fit-content;\n}\n\ndialog:not([open]) {\n    display: none;\n}\n\ndialog:modal {\n    -moz-top-layer: top !important;\n    position: fixed;\n    overflow: auto;\n    visibility: visible;\n    inset-block-start: 0;\n    inset-block-end: 0;\n    max-width: calc(100% - 6px - 2em);\n    max-height: calc(100% - 6px - 2em);\n}\n\n/* https://html.spec.whatwg.org/#flow-content-3 */\ndialog::backdrop {\n    background: rgba(0, 0, 0, 0.1);\n}\n\nmarquee {\n    inline-size: -moz-available;\n    display: inline-block;\n    vertical-align: text-bottom;\n    text-align: start;\n}\n\nmarquee:is([direction=\"up\"], [direction=\"down\"]) {\n    block-size: 200px;\n}\n\n/* Ruby */\n\nruby {\n    display: ruby;\n}\n\nrb {\n    display: ruby-base;\n    white-space: nowrap;\n}\n\nrt {\n    display: ruby-text;\n}\n\nrtc {\n    display: ruby-text-container;\n}\n\nrtc,\nrt {\n    white-space: nowrap;\n    font-size: 50%;\n    -moz-min-font-size-ratio: 50%;\n    line-height: 1;\n}\n\n@media not (-moz-platform: windows) {\n\n    rtc,\n    rt {\n        /* The widely-used Windows font Meiryo doesn't work fine with this\n     * setting, so disable this on Windows. We should re-enable it once\n     * Microsoft fixes this issue. See bug 1164279. */\n        font-variant-east-asian: ruby;\n    }\n}\n\nrtc,\nrt {\n    text-emphasis: none;\n}\n\nrtc:lang(zh),\nrt:lang(zh) {\n    ruby-align: center;\n}\n\nrtc:lang(zh-TW),\nrt:lang(zh-TW) {\n    font-size: 30%;\n    /* bopomofo */\n    -moz-min-font-size-ratio: 30%;\n}\n\nrtc>rt {\n    font-size: unset;\n}\n\nruby,\nrb,\nrt,\nrtc {\n    unicode-bidi: isolate;\n}\n\n/* Shadow DOM v1\n  * https://drafts.csswg.org/css-scoping/#slots-in-shadow-tree */\nslot {\n    display: contents;\n}\n\n/* Un-invert images and videos for users using inverted colors.\n  * \"User agents must add the following rule to their UA style sheet\"\n  * https://www.w3.org/TR/mediaqueries-5/#inverted\n  */\n@media (inverted-colors) {\n\n    img:not(picture > img),\n    picture,\n    video {\n        filter: invert(100%);\n    }\n}\n\n/* Hide noscript elements if scripting is enabled */\n@media (scripting) {\n    noscript {\n        display: none !important;\n    }\n}\n\n@media print {\n\n    input,\n    textarea,\n    select,\n    button,\n    details {\n        -moz-user-input: none !important;\n        pointer-events: none !important;\n    }\n}\n\n/* Popover UA style, https://html.spec.whatwg.org/#flow-content-3 */\n/* stylelint-disable-next-line media-query-no-invalid */\n@media (-moz-bool-pref: \"dom.element.popover.enabled\") {\n    [popover]:not(:popover-open):not(dialog[open]) {\n        display: none;\n    }\n\n    dialog:popover-open {\n        display: block;\n    }\n\n    [popover] {\n        position: fixed;\n        inset: 0;\n        width: fit-content;\n        height: fit-content;\n        margin: auto;\n        border: solid;\n        padding: 0.25em;\n        overflow: auto;\n        color: CanvasText;\n        background-color: Canvas;\n    }\n\n    :popover-open {\n        -moz-top-layer: top;\n    }\n\n    :popover-open::backdrop {\n        position: fixed;\n        inset: 0;\n        pointer-events: none !important;\n        background-color: transparent;\n    }\n}\n\n\n\n\n\n\nbody {\n    background-color: bisque;\n\n\n}\n\n.headerPage {\n    background-color: rgba(23, 250, 61, 0.799);\n    height: 1.2rem;\n    /* font-size: 2rem; */\n    /* padding: 0.2rem 0; */\n    text-align: center;\n\n}\n\n\n.container {\n    display: grid;\n    grid-template-columns: [first] 35% [second] 65% [end];\n    padding: 0;\n    height: 633px;\n    background-color: blue;\n}\n\n\n\n.leftSection {\n    background-color: brown;\n\n}\n\n.rightSection {\n\n    background-color: blueviolet;\n}\n\n\n.projects {\n    margin: 5rem auto;\n    width: 60%;\n    text-align: center;\n    background-color: rgba(233, 150, 122, 0.28);\n    padding: 5px 3px 15px 3px;\n    border-radius: 15px;\n    position: relative;\n}\n\n\n\n#projectsHeader {\n    background-color: rgba(0, 0, 255, 0.756);\n    padding: 6px;\n    margin: 15px;\n    margin-bottom: 1.5rem;\n    border-radius: 9px;\n}\n\n#projectsTitle {\n    display: inline-block;\n    margin: 3px;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    font-size: large;\n    font-weight: bolder;\n    letter-spacing: .2rem;\n\n}\n\n#startProjectButton {\n    float: right;\n    margin: 5px;\n    background-color: rgba(255, 255, 255, 0.212);\n    font-size: 10px;\n    border-radius: 90%;\n}\n\n\n#startProjectButton:hover {\n    background-color: rgba(0, 0, 255, 0.894);\n}\n\n#inputProject {\n    width: 80%;\n    margin: 10px 0 5px 0;\n}\n\n\n.tasksUnit {\n    background-color: rgb(238, 244, 129);\n    padding: 1rem;\n}\n\n.titleTask {\n    border-radius: 5px;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: large;\n    padding: 4px;\n    background-color: rgb(255, 237, 192);\n}\n\n.taskDatePriority {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n\n.taskDate {\n    font-size: medium;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.taskPriority {\n    padding: 5px;\n    border: solid black 1px;\n    font-size: small;\n}\n\n\n\n\n.taskUnitImportant {\n    background-color: rgb(181, 238, 132);\n}\n\n.taskUnitUrgent {\n    background-color: rgb(21, 255, 0);\n}\n\n\n\n.projectsUnit {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    place-items: center;\n\n}\n\n.buttonProjects,\n.activeProject {\n    grid-column: 2 / span 5;\n    place-self: stretch;\n    margin: 8px;\n    padding: 8px;\n}\n\n.buttonProjects {\n    background-color: cyan;\n}\n\n.buttonProjects:hover {\n    background-color: rgb(26, 207, 207);\n}\n\n\n\n\n\n.removeProjects {\n    grid-column: 7 / 8;\n    background-color: red;\n    border-radius: 50%;\n    display: inline-block;\n\n}\n\n.activeProject {\n    background-color: #007204;\n    color: white;\n}\n\n.activeProject:hover {\n    background-color: rgb(6, 208, 30);\n}\n\n\n\n#listProjects {\n    text-align: center;\n}\n\n\n.hideRemoveButton {\n    display: none;\n}\n\n\n\n\n#addProjectDiv {\n    background-color: rgb(151, 151, 222);\n    display: none;\n    position: absolute;\n    left: 1rem;\n    top: 1rem;\n}\n\n/* right side */\n\n.tasks {\n    margin: 5rem auto;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    letter-spacing: .2rem;\n    width: 70%;\n    padding-top: 5px;\n    text-align: center;\n    background-color: rgb(246, 74, 16);\n}\n\n#tasksTitle {\n    margin: 3px;\n    font-size: large;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-weight: bold;\n    display: inline-block;\n}\n\n.addTask {\n    float: right;\n    margin: 5px;\n    background-color: rgba(255, 255, 255, 0.416);\n}\n\n\n.addTask:hover {\n    background-color: rgba(77, 248, 64, 0.414);\n}\n\n\n.taskContainerFirst {\n    display: flex;\n    clear: right;\n    flex-direction: column;\n    background-color: cadetblue;\n    padding: 5px;\n    justify-content: space-between;\n\n}\n\n.taskContainerFirst>div {\n    margin: 5px;\n\n}\n\n\n#editTaskDiv {\n    display: none;\n    position: absolute;\n    left: 40%;\n\n    min-width: 380px;\n    background-color: darkseagreen\n}\n\n#addTaskDiv {\n    padding: 5px;\n    background-color: yellow;\n    display: none;\n\n    position: absolute;\n    left: 45%;\n    top: 4rem;\n    min-width: 400px;\n}\n\n#editTaskForm {\n    margin: 8px;\n}\n\n#addTaskForm {\n    background-color: goldenrod;\n    margin: 8px;\n    padding: 7px;\n}\n\nlabel[for=\"newTask\"] {\n    display: block;\n    color: black;\n    margin: 0.4rem 0 1.4rem 0;\n}\n\n#addProjectForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: goldenrod;\n    text-align: center;\n    margin: 3px;\n    padding: 5px;\n    min-width: 400px;\n}\n\n#labelProject {\n    margin: .4rem 1.5rem;\n}\n\n#buttonProjectForm {\n    margin: 1rem;\n    padding: 4px;\n    background-color: rgb(233, 199, 113)\n}\n\n#buttonProjectForm:hover {\n    background-color: rgb(247, 206, 103)\n}\n\n\nspan {\n    margin: 5px 30px;\n}\n\n\n\n.labelPriority {\n    /* display: ; */\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n\n\n\nlabel[for=\"textAreaTask\"] {\n    padding: 0;\n    display: block;\n}\n\n#dateDiv,\n#priorityDiv,\n#notesDiv {\n    margin: 10px;\n}\n\n#priority {\n    padding: 0;\n    margin: 0;\n}\n\n.myNotes {\n    max-width: 100%;\n    background-color: rgb(240, 80, 255);\n    padding: 0.6rem;\n    margin: 5px;\n    text-align: justify;\n}\n\n.taskSettings {\n    margin: 1rem auto 0.5rem auto;\n}\n\n.taskSettings>button {\n    margin: 5px;\n    padding: 3px;\n    background-color: rgba(0, 0, 255, 0.071);\n    border-radius: 5px;\n}\n\n.taskSettings>button:hover {\n    background-color: #04AA6D;\n    color: white;\n}\n\n\n\n.taskSettings>.removeTask:hover {\n    background-color: rgb(214, 12, 12);\n    color: white;\n}\n\n\n\n.taskCompleted {\n    text-decoration: line-through;\n    background-color: crimson;\n}\n\n.taskCompleted button {\n    background-color: crimson;\n}\n\n.taskCompleted .buttonEditTask {\n    display: none;\n}\n\n#renameProjectDiv {\n    display: none;\n    position: absolute;\n    padding: 7px;\n    background-color: #04AA6D;\n    min-width: 110%;\n}\n\n#renameProjectDiv {\n    position: absolute;\n}"],"sourceRoot":""}]);
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

/***/ "./src/dates.js":
/*!**********************!*\
  !*** ./src/dates.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTaskOne: () => (/* binding */ dateTaskOne),
/* harmony export */   dateTaskThree: () => (/* binding */ dateTaskThree),
/* harmony export */   dateTaskTwo: () => (/* binding */ dateTaskTwo)
/* harmony export */ });
let today = new Date();
let myYear = today.getFullYear();
let myMonth = today.getMonth();
let myDay = today.getDate();

let dayFirstTask, monthFirstTask, yearFistTask;
let daySecondTask, monthSecondTask, yearSecondTask;
let dayThirdTask, monthThirdTask, yearThirdTask;

[yearFistTask, yearSecondTask, yearThirdTask] = [myYear, myYear, myYear];

if (myDay <= 15) {
  dayFirstTask = myDay + 6;
  daySecondTask = myDay + 8;
  dayThirdTask = myDay + 4;
} else {
  dayFirstTask = myDay - 6;
  daySecondTask = myDay - 8;
  dayThirdTask = myDay - 4;
}

if (myMonth <= 7) {
  monthFirstTask = myMonth + 3;
  monthSecondTask = myMonth + 1;
  monthThirdTask = myMonth + 2;
} else if (myMonth <= 9) {
  monthFirstTask = myMonth + 3;
  monthSecondTask = myMonth + 1;
  monthThirdTask = myMonth + 2;
} else {
  monthFirstTask = 3;
  yearFistTask += 1;
  monthSecondTask = 1;
  yearSecondTask += 1;
  monthThirdTask = 2;
  yearThirdTask += 1;
}

let dateTaskOne = monthFirstTask + "/" + dayFirstTask + "/" + yearFistTask;
let dateTaskTwo = monthSecondTask + "/" + daySecondTask + "/" + yearSecondTask;
let dateTaskThree = monthThirdTask + "/" + dayThirdTask + "/" + yearThirdTask;




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
  event.preventDefault();

  // Edited data (the data that we submit as corrections)
  const formEdited = document.getElementById("editTaskForm");
  const taskDataEdit = (0,_taskContainer_js__WEBPACK_IMPORTED_MODULE_1__.getFormDataTask)(formEdited);
  if (taskDataEdit[0]["date"] !== "") {
    let setDate = new Date(taskDataEdit[0]["date"]);
    let newDay = setDate.getDate();
    let newMonth = setDate.getMonth() + 1;
    let newYear = setDate.getFullYear();
    let newDate = newMonth + " " + newDay + " " + newYear;
    console.log("task", newDate);
    taskDataEdit[0]["date"] = newDate;
  }

  // Modify the data
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
/* harmony export */   clickRenameProject: () => (/* binding */ clickRenameProject),
/* harmony export */   createNewId: () => (/* binding */ createNewId),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   myProjectMethods: () => (/* binding */ myProjectMethods),
/* harmony export */   myProjects: () => (/* binding */ myProjects),
/* harmony export */   renameProjectForm: () => (/* binding */ renameProjectForm),
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
    renameProject: function (newName) {
      // (this.id = newName),
      this.name = newName;
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
      let idTask = obsoleteTask["nameId"];
      delete this.taskList[idTask];

      const myTasks = Object.values(this.taskList);
      (0,_projectsDom_js__WEBPACK_IMPORTED_MODULE_0__.domShowTasks)(myTasks);
    },
    modifyTask: function (oldTask, newTask) {
      let idTask = oldTask["nameId"];
      this.taskList[idTask] = newTask;
      this.taskList[idTask]["nameId"] = idTask;
    },
    addTask: function (name, date = "mm-dd-yy", priority = "LOW", notes = "") {
      let taskId = assignTaskId();

      let nameIdTask = "task" + taskId;
      let internalTask = {};

      internalTask["nameId"] = nameIdTask;
      internalTask["name"] = name;

      // Date has to appear in the form mm/dd/year

      if (date !== "mm-dd-yy" && date !== "") {
        let objectDate = new Date(date);
        let myYear = objectDate.getFullYear();
        let myMonth = objectDate.getMonth() + 1;
        let myDay = objectDate.getDate();
        let dateTask = myMonth + "/" + myDay + "/" + myYear;
        internalTask["date"] = dateTask;
      } else {
        internalTask["date"] = "";
      }

      internalTask["priority"] = priority;
      internalTask["notes"] = notes;
      internalTask["completed"] = false;

      // Every task is a value whose key is nameIdTask
      this.taskList[nameIdTask] = internalTask;
    },
  };
}

function showTasks(projectL) {
  setActiveProject(projectL);

  let myProtoTasks = null;
  myProtoTasks = projectL.getTaskList();

  const myTasks = Object.values(myProtoTasks);

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
  }
}

function addProjectForm() {
  const addElementContainer = document.createElement("div");
  addElementContainer.setAttribute("id", "addProjectDiv");

  const projectForm = document.createElement("form");
  projectForm.setAttribute("id", "addProjectForm");
  addElementContainer.appendChild(projectForm);

  const labelProject = document.createElement("label");
  labelProject.textContent = "Please, add project's name:";
  labelProject.setAttribute("id", "labelProject");

  const nameProject = document.createElement("input");
  nameProject.setAttribute("id", "inputProject");
  nameProject.type = "text";
  nameProject.name = "name";

  projectForm.appendChild(labelProject);
  projectForm.appendChild(nameProject);

  const addButton = document.createElement("button");
  addButton.setAttribute("id", "buttonProjectForm");
  addButton.textContent = "OK";
  addButton.addEventListener("click", clickAddProject, false);

  projectForm.appendChild(addButton);
  return addElementContainer;
}

function addProjectFunction() {
  document.getElementById("addProjectDiv").style.display = "block";
  document.getElementById("inputProject").placeholder =
    "No project without a name";
  document.getElementById("inputProject").value = "";
}

function clickRenameProject() {
  // Rename the project

  console.log("do i?", activeProject);
  event.preventDefault();

  const myForm = document.getElementById("renameProjectForm");
  const projectElement = document.getElementById(activeProject.getProjectId());
  console.log(projectElement, "el");
  console.log(activeProject, "active");
  projectElement.textContent = myForm.name.value;

  //projectElement.id = myForm.name.value;

  activeProject.renameProject(myForm.name.value);

  //console.log(myForm.name.value);
  console.log(activeProject, "new");

  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)("localStorage")) {
    let idProject = activeProject.getProjectId();
    localStorage.setItem(idProject, JSON.stringify(activeProject));
  }

  document.getElementById("renameProjectDiv").style.display = "none";
}

function renameProjectForm() {
  console.log("act:", activeProject);
  const addElementContainer = document.createElement("div");
  addElementContainer.setAttribute("id", "renameProjectDiv");

  const projectForm = document.createElement("form");
  projectForm.setAttribute("id", "renameProjectForm");
  addElementContainer.appendChild(projectForm);

  const labelProject = document.createElement("label");
  labelProject.m = "Please, enter project's name:";
  labelProject.setAttribute("id", "labelProjectRename");

  const nameProject = document.createElement("input");
  nameProject.setAttribute("id", "inputProjectName");
  nameProject.type = "text";
  nameProject.name = "name";

  projectForm.appendChild(labelProject);
  projectForm.appendChild(nameProject);

  const renameButton = document.createElement("button");
  renameButton.setAttribute("id", "buttonProjectRename");
  renameButton.textContent = "OK";
  renameButton.addEventListener(
    "click",
    () => {
      clickRenameProject();
    },
    false
  );

  projectForm.appendChild(renameButton);
  return addElementContainer;
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




function renameProject(event, project) {
  let titleProject = document.getElementById("renameProjectDiv");
  let inputName = document.getElementById("inputProjectName");
  inputName.value = project.getProjectName();
  console.log(project, event.target);
  // define where it will appear
  const y_axis = event.target.offsetTop - 100;
  let y_wr = y_axis + "px";
  console.log(y_axis);
  titleProject.style.top = y_wr;
  titleProject.style.display = "block";
}

function removeProject(project) {
  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)("localStorage")) {
    let localProjects = localStorage.getItem("localProjects");
    let parsedLocalTasks = JSON.parse(localProjects);
    let projectId = project.firstChild.id;
    let projectsArray = parsedLocalTasks.allProjects;

    const arrayWithoutRemovedProject = projectsArray.filter(function (project) {
      return project !== projectId;
    });
    let allLocalProjects = { allProjects: arrayWithoutRemovedProject };

    localStorage.setItem("localProjects", JSON.stringify(allLocalProjects));

    let activeProject = localStorage.getItem("ActiveProject");
    if (activeProject == projectId) {
      localStorage.setItem("ActiveProject", "justDeleted");
    }

    localStorage.removeItem(projectId);
  }

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

  let { completed } = event;
  completed = !completed;
  if (completed == false) {
    buttonCompletion.textContent = "Close";
  } else {
    buttonCompletion.textContent = "Open";
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
  newProject.addEventListener("dblclick", () => {
    renameProject(event, keyProject);
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
    const newTitle = document.createElement("span");
    newTitle.textContent = eachTask.name;
    newTitle.classList.add("titleTask");
    newTask.appendChild(newTitle);

    // New extras (date, priority)
    const newExtras = document.createElement("div");
    newExtras.classList.add("taskDatePriority");

    // New date
    if (eachTask.date !== "") {
      const newDueDate = document.createElement("span");
      let eachDate = eachTask.date;
      let re = /-|\s/gi;
      let formatDate = eachDate.replace(re, "/");
      newDueDate.textContent = formatDate;
      newDueDate.classList.add("taskDate");
      newExtras.appendChild(newDueDate);
    }

    // New priority
    const newPriority = document.createElement("span");
    newPriority.textContent = `priority: ${eachTask.priority}`;
    newPriority.classList.add("taskPriority");
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
    completed.textContent = "Close";
    completed.addEventListener(
      "click",
      () => {
        setCompleted(eachTask, completed);
      },
      false
    );
    if (eachTask["completed"]) {
      newTask.classList.add("taskCompleted");
      completed.textContent = "Open";
    }

    newSetting.appendChild(completed);

    // New edit
    const newEdit = document.createElement("button");
    newEdit.classList.add("buttonEditTask");
    newEdit.textContent = "Edit";

    newEdit.addEventListener(
      "click",
      () => {
        (0,_taskContainer_js__WEBPACK_IMPORTED_MODULE_1__.clickEditTask)(eachTask, newTitle);
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
  myProjects.appendChild((0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.renameProjectForm)());

  const myProjectsHeader = document.createElement("div");

  myProjectsHeader.setAttribute("id", "projectsHeader");
  myProjects.appendChild(myProjectsHeader);

  const myProjectsTitle = document.createElement("p");
  myProjectsTitle.textContent = "PROJECTS";

  myProjectsTitle.setAttribute("id", "projectsTitle");

  myProjectsHeader.appendChild(myProjectsTitle);

  const addProject = document.createElement("button");
  addProject.setAttribute("id", "startProjectButton");
  addProject.innerText = "+";
  addProject.addEventListener("click", _projects_js__WEBPACK_IMPORTED_MODULE_0__.addProjectFunction);
  myProjectsHeader.appendChild(addProject);

  const listProjects = document.createElement("div");
  listProjects.setAttribute("id", "listProjects");

  myProjects.appendChild(listProjects);

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





function clickEditTask(event, edit_element) {
  // it displays the form for editing

  // define where it will appear
  const y_axis = edit_element.offsetTop;

  (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.setChosenTask)(event);

  const editTaskDiv = document.getElementById("editTaskDiv");
  const editForm = document.getElementById("editTaskForm");

  const { name, date, priority, notes } = event;

  // Change the labels

  let oldTask = editForm.elements["editTask"];
  let oldDate = editForm.elements["dueDateEdit"];

  // Insert the appropriate values to the form
  oldTask.value = name;

  if (date !== "") {
    console.log(date, typeof date, event);
    let re = /-/gi;
    let dateN = date.replace(re, " ");
    let setDate = new Date(dateN);
    let fixedDay = setDate.getDate() + 1;
    setDate.setDate(fixedDay);
    oldDate.value = setDate.toISOString().split("T")[0];
  }

  let oldNotes = editForm.elements["textAreaTaskEdit"];
  oldNotes.value = notes;

  let oldPriority = document.querySelectorAll("input[name=" + "priority" + "]");
  for (let i = 0; i < oldPriority.length; i++) {
    if (oldPriority[i].value === priority) {
      oldPriority[i].checked = true;
    }
  }
  let y_wr = y_axis + "px";
  editTaskDiv.style.top = y_wr;
  editTaskDiv.style.display = "block";
}

function clickAddTask() {
  document.getElementById("addTaskDiv").style.display = "block";
  document.getElementById("newTask").placeholder = "No task without a name";
  document.getElementById("newTask").value = "";
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
  if (date === "") {
    console.log(true);
  }
  _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.addTask(name, date, priority, notes);
  console.log("form add", date);

  if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.storageAvailable)("localStorage")) {
    let idProject = _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.getProjectId();
    localStorage.setItem(idProject, JSON.stringify(_projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject));
  }

  let myProtoTasks = null;
  myProtoTasks = _projects_js__WEBPACK_IMPORTED_MODULE_0__.activeProject.getTaskList();
  const myTasks = Object.values(myProtoTasks);
  console.log("show", myTasks);
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
  labelTask.textContent = "Please, add a new task:";
  labelTask.setAttribute("for", "newTask");

  const nameTask = document.createElement("input");
  nameTask.setAttribute("id", "newTask");
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
/* harmony import */ var _dates_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dates.js */ "./src/dates.js");
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

    // Push the project in the local storage
    let allStoredProjects = localStorage.getItem("localProjects");
    let parsedProjects = JSON.parse(allStoredProjects);
    let firstProjectId = sampleProjectOne.getProjectId();
    parsedProjects.allProjects.push(firstProjectId);
    localStorage.setItem("localProjects", JSON.stringify(parsedProjects));
  }
}
if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage")) {
  sampleProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("project1");
  sampleProjectOne = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.myProjectMethods)(sampleProject);
}

if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage") | (stateUser == null)) {
  sampleProjectOne.addTask(
    "Read a new book",
    _dates_js__WEBPACK_IMPORTED_MODULE_6__.dateTaskOne,
    "LOW",
    "I need to take comments"
  );
  sampleProjectOne.addTask("Visit an empty house", _dates_js__WEBPACK_IMPORTED_MODULE_6__.dateTaskTwo);
}

if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage") && stateUser == null) {
  localStorage.setItem("project1", JSON.stringify(sampleProjectOne));
}

if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage") | (stateUser == null)) {
  (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(sampleProjectOne);
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
  }
}

if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage")) {
  sampleProjectNext = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("project2");
  sampleProjectTwo = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.myProjectMethods)(sampleProjectNext);
  nameProjectSampleTwo = sampleProjectTwo.getProjectName();
}

if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage") | (stateUser == null)) {
  sampleProjectTwo.addTask(
    "Read a great book",
    _dates_js__WEBPACK_IMPORTED_MODULE_6__.dateTaskThree,
    "HIGH",
    "This is a comment."
  );
}

if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.storageAvailable)("localStorage") && stateUser == null) {
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
  element.textContent = "TO DO LIST";

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

const myTasksTitle = document.createElement("p");
myTasksTitle.innerText = "TASKS";
myTasksTitle.setAttribute("id", "tasksTitle");

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

    if (numberLocalProjects > 0) {
      for (let i = 0; i < numberLocalProjects; i++) {
        let projectId = objectLocalProjects.allProjects[i];
        let myProject = localStorage.getItem(projectId);
        let myProjectParsed = JSON.parse(myProject);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sV0FBVyxvQkFBb0IsV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxhQUFhLE9BQU8sUUFBUSxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxRQUFRLE9BQU8sT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFFBQVEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxZQUFZLGFBQWEsUUFBUSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsUUFBUSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxlQUFlLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFNBQVMsWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFVBQVUsTUFBTSxZQUFZLE9BQU8sV0FBVyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxRQUFRLFlBQVksT0FBTyxZQUFZLFFBQVEsWUFBWSxRQUFRLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLEtBQUssT0FBTyxhQUFhLE9BQU8sYUFBYSxLQUFLLGtCQUFrQixVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFNBQVMsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxNQUFNLE1BQU0sT0FBTyxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sS0FBSyxNQUFNLE9BQU8sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxTQUFTLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxLQUFLLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFNBQVMsS0FBSyxhQUFhLE9BQU8sTUFBTSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssVUFBVSxVQUFVLE9BQU8sT0FB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLDZEQUFnQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDZEQUFZO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEVBQUUsNkRBQVk7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQVEsNkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFZO0FBQ2QsQ0FBQztBQUNELHNDQUFzQywyREFBWTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFXO0FBQy9CLG9CQUFvQix1REFBWTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSw2REFBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsOERBQWdCO0FBQzVDOztBQUVBLDRCQUE0QiwrREFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTs7QUFFQSxLQUFLLDZEQUFnQjtBQUNyQjtBQUNBO0FBQ0EsRUFBRSx1REFBUztBQUNYOztBQUVBO0FBQ0EsSUFBSSw2REFBZ0I7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLDhEQUFnQjs7QUFFOUMsSUFBSSw4REFBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxNQUFNLHVEQUFTO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwrREFBWSxDQUFDLHVEQUFhO0FBQzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kYXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0c0RvbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFdlIG5lZWQgdGhlIFwiYmRvOi1tb3otaGFzLWRpci1hdHRyXCIgYml0IGJlY2F1c2UgXCJiZG9cIiBoYXMgbG93ZXJcbiAgICBzcGVjaWZpY2l0eSB0aGFuIHRoZSBcIjotbW96LWhhcy1kaXItYXR0clwiIHNlbGVjdG9yIGFib3ZlLiAqL1xuYmRvLFxuYmRvOi1tb3otaGFzLWRpci1hdHRyIHtcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGUtb3ZlcnJpZGU7XG59XG5cbnRleHRhcmVhOi1tb3otZGlyLWF0dHItbGlrZS1hdXRvLFxucHJlOi1tb3otZGlyLWF0dHItbGlrZS1hdXRvIHtcbiAgICB1bmljb2RlLWJpZGk6IHBsYWludGV4dDtcbn1cblxuLyogYmxvY2tzICovXG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5kaXYsXG5kdCxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5mb3JtLFxuaGVhZGVyLFxuaGdyb3VwLFxuaHRtbCxcbm1haW4sXG5uYXYsXG5zZWFyY2gsXG5zZWN0aW9uLFxuc3VtbWFyeSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMFxufVxuXG5wLFxuZGwsXG5tdWx0aWNvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG5kZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcbn1cblxuYmxvY2txdW90ZSxcbmZpZ3VyZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDQwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDQwcHg7XG59XG5cbmFkZHJlc3Mge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuY2VudGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlcjtcbn1cblxuaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLjY3ZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjY3ZW07XG59XG5cbmgyLFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLjgzZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjgzZW07XG59XG5cbmgzLFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjE3ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG5oNCxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuMDBlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuMzNlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjMzZW07XG59XG5cbmg1LFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuODNlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuNjdlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjY3ZW07XG59XG5cbmg2LFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjY3ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAyLjMzZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMi4zM2VtO1xufVxuXG5saXN0aW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogLW1vei1maXhlZDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbn1cblxueG1wLFxucHJlLFxucGxhaW50ZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogLW1vei1maXhlZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbn1cblxuLyogdGFibGVzICovXG5cbnRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgLyogWFhYbGRiIGRvIHdlIHdhbnQgdGhpcyBpZiB3ZSdyZSBib3JkZXItY29sbGFwc2U6Y29sbGFwc2UgPyAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1pbmRlbnQ6IDA7XG59XG5cbnRhYmxlW2FsaWduPVwibGVmdFwiXSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbnRhYmxlW2FsaWduPVwicmlnaHRcIl0ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuXG4vKiBib3JkZXIgY29sbGFwc2UgcnVsZXMgKi9cblxuLyogU2V0IGhpZGRlbiBpZiB3ZSBoYXZlICdmcmFtZScgb3IgJ3J1bGVzJyBhdHRyaWJ1dGUuXG4gICAgICBTZXQgaXQgb24gYWxsIHNpZGVzIHdoZW4gd2UgZG8gc28gdGhlcmUncyBtb3JlIGNvbnNpc3RlbmN5XG4gICAgICBpbiB3aGF0IGF1dGhvcnMgc2hvdWxkIGV4cGVjdCAqL1xuXG4vKiBQdXQgdGhpcyBmaXJzdCBzbyAnYm9yZGVyJyBhbmQgJ2ZyYW1lJyBydWxlcyBjYW4gb3ZlcnJpZGUgaXQuICovXG50YWJsZVtydWxlc10ge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcbn1cblxuLyogJ2JvcmRlcicgYmVmb3JlICdmcmFtZScgc28gJ2ZyYW1lJyBvdmVycmlkZXNcbiAgICAgICBBIGJvcmRlciB3aXRoIGEgZ2l2ZW4gdmFsdWUgc2hvdWxkLCBvZiBjb3Vyc2UsIHBhc3MgdGhhdCB2YWx1ZVxuICAgICAgIGFzIHRoZSBib3JkZXItd2lkdGggaW4gcGl4ZWxzIC0+IGF0dHIgbWFwcGluZyAqL1xuXG4vKiA6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyBpcyBsaWtlIFtib3JkZXJdOm5vdChbYm9yZGVyPVwiMFwiXSkgZXhjZXB0IGl0XG4gICAgICBhbHNvIGNoZWNrcyBmb3Igb3RoZXIgemVyby1saWtlIHZhbHVlcyBhY2NvcmRpbmcgdG8gSFRNTCBhdHRyaWJ1dGVcbiAgICAgIHBhcnNpbmcgcnVsZXMgKi9cbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8ge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbn1cblxudGFibGVbZnJhbWVdIHtcbiAgICBib3JkZXI6IHRoaW4gaGlkZGVuO1xufVxuXG4vKiBzcGVjaWZpY2l0eSBtdXN0IGJlYXQgdGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyBydWxlIGFib3ZlICovXG50YWJsZVtmcmFtZT1cInZvaWRcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cImFib3ZlXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldCBoaWRkZW4gaGlkZGVuIGhpZGRlbjtcbn1cblxudGFibGVbZnJhbWU9XCJiZWxvd1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gaGlkZGVuIG91dHNldCBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwibGhzXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBoaWRkZW4gaGlkZGVuIG91dHNldDtcbn1cblxudGFibGVbZnJhbWU9XCJyaHNcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIG91dHNldCBoaWRkZW4gaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cImhzaWRlc1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQgaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cInZzaWRlc1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gb3V0c2V0O1xufVxuXG50YWJsZVtmcmFtZT1cImJveFwiXSxcbnRhYmxlW2ZyYW1lPVwiYm9yZGVyXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbn1cblxuXG4vKiBJbnRlcm5hbCBUYWJsZSBCb3JkZXJzICovXG5cbi8qICdib3JkZXInIGNlbGwgYm9yZGVycyBmaXJzdCAqL1xuXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dHI+dGQsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dHI+dGgsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dGQsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dGgsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPnRkLFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz50aCB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XG59XG5cbi8qIGNvbGxhcHNlIG9ubHkgaWYgcnVsZXMgYXJlIHJlYWxseSBzcGVjaWZpZWQgKi9cbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwibm9uZVwiXSwgW3J1bGVzPVwiXCJdKSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLyogb25seSBzcGVjaWZpZWQgcnVsZXMgb3ZlcnJpZGUgJ2JvcmRlcicgc2V0dGluZ3NcbiAgIChpbmNyZWFzZWQgc3BlY2lmaWNpdHkgdG8gYWNoaWV2ZSB0aGlzKSAqL1xudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPnRyPnRkLFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPio+dHI+dGQsXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+dHI+dGgsXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+Kj50cj50aCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT50ZCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT50aCB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT4qPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+Kj50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+Kj50cj50ZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT4qPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxudGFibGVbcnVsZXNdW3J1bGVzPVwicm93c1wiXT50cixcbnRhYmxlW3J1bGVzXVtydWxlcz1cInJvd3NcIl0+Kj50ciB7XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYmxvY2stZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJjb2xzXCJdPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiY29sc1wiXT4qPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiY29sc1wiXT50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImNvbHNcIl0+Kj50cj50aCB7XG4gICAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItaW5saW5lLWVuZC1zdHlsZTogc29saWQ7XG59XG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT5jb2xncm91cCB7XG4gICAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItaW5saW5lLWVuZC1zdHlsZTogc29saWQ7XG59XG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT50Zm9vdCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT50aGVhZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT50Ym9keSB7XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYmxvY2stZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxuXG4vKiBjYXB0aW9uIGluaGVyaXRzIGZyb20gdGFibGUgbm90IHRhYmxlLW91dGVyICovXG5jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGVbYWxpZ249XCJjZW50ZXJcIl0+Y2FwdGlvbiB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcbn1cblxudGFibGVbYWxpZ249XCJjZW50ZXJcIl0+Y2FwdGlvblthbGlnbj1cImxlZnRcIl06ZGlyKGx0cikge1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwibGVmdFwiXTpkaXIocnRsKSB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbn1cblxudGFibGVbYWxpZ249XCJjZW50ZXJcIl0+Y2FwdGlvblthbGlnbj1cInJpZ2h0XCJdOmRpcihsdHIpIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwicmlnaHRcIl06ZGlyKHJ0bCkge1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuXG50ciB7XG4gICAgZGlzcGxheTogdGFibGUtcm93O1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xufVxuXG5jb2wge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbjtcbn1cblxuY29sZ3JvdXAge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbi1ncm91cDtcbn1cblxudGJvZHkge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG50aGVhZCB7XG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnRmb290IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1mb290ZXItZ3JvdXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogZm9yIFhIVE1MIHRhYmxlcyB3aXRob3V0IHRib2R5ICovXG50YWJsZT50ciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudGQge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XG4gICAgdGV4dC1hbGlnbjogdW5zZXQ7XG4gICAgcGFkZGluZzogMXB4O1xufVxuXG50aCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXItb3ItaW5oZXJpdDtcbn1cblxuOmlzKHRyLCB0Ym9keSwgdGhlYWQsIHRmb290LCB0YWJsZSk+Zm9ybTotbW96LWlzLWh0bWwge1xuICAgIC8qIEltcG9ydGFudDogZG9uJ3Qgc2hvdyB0aGVzZSBmb3JtcyBpbiBIVE1MICovXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG50YWJsZVtib3JkZXJjb2xvcl0+dGJvZHksXG50YWJsZVtib3JkZXJjb2xvcl0+dGhlYWQsXG50YWJsZVtib3JkZXJjb2xvcl0+dGZvb3QsXG50YWJsZVtib3JkZXJjb2xvcl0+Y29sLFxudGFibGVbYm9yZGVyY29sb3JdPmNvbGdyb3VwLFxudGFibGVbYm9yZGVyY29sb3JdPnRyLFxudGFibGVbYm9yZGVyY29sb3JdPio+dHIsXG50YWJsZVtib3JkZXJjb2xvcl0+dHI+dGQsXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cj50ZCxcbnRhYmxlW2JvcmRlcmNvbG9yXT50cj50aCxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyPnRoIHtcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIGlubGluZXMgKi9cblxucTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IG9wZW4tcXVvdGU7XG59XG5cbnE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGNsb3NlLXF1b3RlO1xufVxuXG5iLFxuc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5pLFxuY2l0ZSxcbmVtLFxudmFyLFxuZGZuIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbnR0LFxuY29kZSxcbmtiZCxcbnNhbXAge1xuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xufVxuXG51LFxuaW5zIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxucyxcbnN0cmlrZSxcbmRlbCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbmJpZyB7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbnNtYWxsIHtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbnN1YiB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbnN1cCB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxubm9iciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxubWFyayB7XG4gICAgYmFja2dyb3VuZDogTWFyaztcbiAgICBjb2xvcjogTWFya1RleHQ7XG59XG5cbi8qIHRpdGxlcyAqL1xuYWJiclt0aXRsZV0sXG5hY3JvbnltW3RpdGxlXSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBkb3R0ZWQgdW5kZXJsaW5lO1xufVxuXG4vKiBsaXN0cyAqL1xuXG51bCxcbm1lbnUsXG5kaXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG59XG5cbnVsLFxub2wsXG5tZW51IHtcbiAgICBjb3VudGVyLXJlc2V0OiBsaXN0LWl0ZW07XG59XG5cbm9sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xufVxuXG5saSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgIHRleHQtYWxpZ246IG1hdGNoLXBhcmVudDtcbn1cblxuLyogbmVzdGVkIGxpc3RzIGhhdmUgbm8gdG9wL2JvdHRvbSBtYXJnaW5zICovXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSB1bCxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIG9sLFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGlyLFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgbWVudSxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIGRsIHtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbn1cblxuLyogMiBkZWVwIHVub3JkZXJlZCBsaXN0cyB1c2UgYSBjaXJjbGUgKi9cbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgdWwsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIG1lbnUsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIGRpciB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG59XG5cbi8qIDMgZGVlcCAob3IgbW9yZSkgdW5vcmRlcmVkIGxpc3RzIHVzZSBhIHNxdWFyZSAqL1xuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSA6aXMob2wsIHVsLCBtZW51LCBkaXIpIHVsLFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSA6aXMob2wsIHVsLCBtZW51LCBkaXIpIG1lbnUsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgZGlyIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbn1cblxuXG4vKiBsZWFmcyAqL1xuXG4vKiA8aHI+IG5vc2hhZGUgYW5kIGNvbG9yIGF0dHJpYnV0ZXMgYXJlIGhhbmRsZWQgY29tcGxldGVseSBieVxuICAqIEhUTUxIUkVsZW1lbnQ6Ok1hcEF0dHJpYnV0ZXNJbnRvUnVsZS5cbiAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtaHItZWxlbWVudC0yXG4gICovXG5ociB7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDAuNWVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8qIEZJWE1FOiBUaGlzIGlzIG5vdCByZWFsbHkgcGVyIHNwZWMgKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaHJbc2l6ZT1cIjFcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZSBub25lIG5vbmU7XG59XG5cbi8qIE5vdGUgdGhhdCB3ZSBvbmx5IGludGVuZCBmb3IgdGhlIGFsdCBjb250ZW50IHRvIHNob3cgdXAgaWYgdGhlIGltYWdlIGlzXG4gICogYnJva2VuLiBCdXQgbm9uLWJyb2tlbiBpbWFnZXMvaW5wdXRzIHdpbGwgaGF2ZSBhIHJlcGxhY2VkIGJveCwgYW5kIHRodXMgd2VcbiAgKiB3b24ndCB3ZSBkb24ndCBnZW5lcmF0ZSB0aGUgcHNldWRvLWVsZW1lbnQgYW55d2F5cy4gVGhpcyBwcmV2ZW50c1xuICAqIHVubmVjZXNzYXJ5IHJlZnJhbWluZyB3aGVuIGltYWdlcyBiZWNvbWUgYnJva2VuIC8gbm9uLWJyb2tlbi4gKi9cbmlucHV0W3R5cGU9aW1hZ2VdOjpiZWZvcmUsXG5pbWc6OmJlZm9yZSB7XG4gICAgY29udGVudDogLW1vei1hbHQtY29udGVudCAhaW1wb3J0YW50O1xuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcbn1cblxuaW1nW3VzZW1hcF0sXG5vYmplY3RbdXNlbWFwXSB7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbmZyYW1lc2V0IHtcbiAgICBkaXNwbGF5OiBibG9jayAhIGltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogY2xpcDtcbiAgICBwb3NpdGlvbjogc3RhdGljICEgaW1wb3J0YW50O1xuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhIGltcG9ydGFudDtcbn1cblxuZnJhbWUge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgISBpbXBvcnRhbnQ7XG59XG5cbmlmcmFtZSB7XG4gICAgYm9yZGVyOiAycHggaW5zZXQ7XG59XG5cbnNwYWNlciB7XG4gICAgcG9zaXRpb246IHN0YXRpYyAhIGltcG9ydGFudDtcbiAgICBmbG9hdDogbm9uZSAhIGltcG9ydGFudDtcbn1cblxuY2FudmFzIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuaWZyYW1lOmZvY3VzLXZpc2libGUsXG5ib2R5OmZvY3VzLXZpc2libGUsXG5odG1sOmZvY3VzLXZpc2libGUge1xuICAgIC8qIFRoZXNlIGVsZW1lbnRzIGhpc3RvcmljYWxseSBkb24ndCBzaG93IG91dGxpbmVzIHdoZW4gZm9jdXNlZCBieSBkZWZhdWx0LlxuICAgICogV2UgY291bGQgY29uc2lkZXIgY2hhbmdpbmcgdGhhdCBpZiBuZWVkZWQuICovXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbn1cblxuLyogaGlkZGVuIGVsZW1lbnRzOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNoaWRkZW4tZWxlbWVudHNcbiAgKlxuICAqIEV4Y2VwdGlvbnM6XG4gICpcbiAgKiAgKiBhcmVhIGRlY2xhcmF0aW9uIG5lZWRzIHRvIGJlICFpbXBvcnRhbnQsIHNlZSBiZWxvdyAvIGJ1ZyAxMzUwNDAuICBUaGF0J3NcbiAgKiAgICBoYWNreSBhbmQgYnJva2VuLlxuICAqXG4gICogICogW2hpZGRlbl0gaXMgaW1wbGVtZW50ZWQgYXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIHRvIGF2b2lkIGEgZ2xvYmFsXG4gICogICAgc2VsZWN0b3IgaW4gYSBVQSBzaGVldC5cbiAgKi9cbmJhc2UsXG5iYXNlZm9udCxcbmRhdGFsaXN0LFxuaGVhZCxcbmxpbmssXG5tZXRhLFxubm9lbWJlZCxcbm5vZnJhbWVzLFxucGFyYW0sXG5ycCxcbnNjcmlwdCxcbnN0eWxlLFxudGVtcGxhdGUsXG50aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuYXJlYSB7XG4gICAgLyogRG9uJ3QgZ2l2ZSBpdCBmcmFtZXMgb3RoZXIgdGhhbiBpdHMgaW1hZ2VmcmFtZSAqL1xuICAgIGRpc3BsYXk6IG5vbmUgISBpbXBvcnRhbnQ7XG59XG5cbmlmcmFtZTpmdWxsc2NyZWVuIHtcbiAgICAvKiBpZnJhbWVzIGluIGZ1bGwtc2NyZWVuIG1vZGUgZG9uJ3Qgc2hvdyBhIGJvcmRlci4gKi9cbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4vKiBEZXRhaWxzIGFuZCBzdW1tYXJ5XG4gICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGhlLWRldGFpbHMtYW5kLXN1bW1hcnktZWxlbWVudHNcbiAgKlxuICAqIE5vdGUgdGhhdCB0aGVzZSBydWxlcyBuZWVkIHRvIGJlIGR1cGxpY2F0ZWQgaW4gZGV0YWlscy5jc3MgZm9yIHRoZSBhbm9ueW1vdXNcbiAgKiBzdW1tYXJ5LCB3aGljaCB3b3VsZG4ndCBtYXRjaCBvdGhlcndpc2UuXG4gICpcbiAgKiBUaGUgc3BlYyBoZXJlIHNheXMgc29tZXRoaW5nIGRpZmZlcmVudCwgc2VlXG4gICogaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy84NjEwXG4gICovXG5kZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LWl0ZW0gMDtcbiAgICBsaXN0LXN0eWxlOiBkaXNjbG9zdXJlLWNsb3NlZCBpbnNpZGU7XG59XG5cbmRldGFpbHNbb3Blbl0+c3VtbWFyeTpmaXJzdC1vZi10eXBlIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2Nsb3N1cmUtb3Blbjtcbn1cblxuLyogbWVkaWEgZWxlbWVudHMgKi9cbnZpZGVvIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG52aWRlbz5pbWc6LW1vei1uYXRpdmUtYW5vbnltb3VzIHtcbiAgICAvKiBWaWRlbyBwb3N0ZXIgaW1hZ2VzIHNob3VsZCByZW5kZXIgd2l0aCB0aGUgdmlkZW8gZWxlbWVudCdzIFwib2JqZWN0LWZpdFwiICZcbiAgICAgIFwib2JqZWN0LXBvc2l0aW9uXCIgcHJvcGVydGllcyAqL1xuICAgIG9iamVjdC1maXQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICBvYmplY3QtcG9zaXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmF1ZGlvW2NvbnRyb2xzXSB7XG4gICAgLyogVGhpcyBlbnN1cmVzIHRoYXQgaW50cmluc2ljIHNpemluZyBjYW4gcmVsaWFibHkgc2hyaW5rd3JhcCBvdXJcbiAgICAgICBjb250cm9scyAod2hpY2ggYXJlIGFsc28gYWx3YXlzIGhvcml6b250YWwpIGFuZCBwcm9kdWNlIGFcbiAgICAgICByZWFzb25hYmxlIGludHJpbnNpYyBzaXplIGZyb20gdGhlbS4gKi9cbiAgICB3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDtcbn1cblxuKnwqOjotbW96LWh0bWwtY2FudmFzLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgLyogd2Ugd2FudCB0byBiZSBhbiBhYnNvbHV0ZSBhbmQgZml4ZWQgY29udGFpbmVyICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgIWltcG9ydGFudDtcbn1cblxudmlkZW8+LmNhcHRpb24tYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKipcbiAgKiBUaGUgcHNldWRvIGVsZW1lbnQgd29uJ3QgaW5oZXJpdCBDU1Mgc3R5bGVzIGZyb20gaXRzIGRpcmVjdCBwYXJlbnQsIFxcYDo6Y3VlXFxgXG4gICogd291bGQgYWN0dWFsbHkgaW5oZXJpdCBzdHlsZXMgZnJvbSB2aWRlbyBiZWNhdXNlIGl0J3MgdmlkZW8ncyBwc2V1ZG8gZWxlbWVudC5cbiAgKiBUaGVyZWZvcmUsIHdlIGhhdmUgdG8gZXhwbGljaXRseSBzZXQgc29tZSBzdHlsZXMgd2hpY2ggYXJlIGFscmVhZHkgZGVmaW5lZFxuICAqIGluIGl0cyBwYXJlbnQgZWxlbWVudCBpbiB2dHQuanNtLlxuICAqL1xuOjpjdWUge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY3VlLWZvbnQtc2l6ZSk7XG4gICAgd3JpdGluZy1tb2RlOiB2YXIoLS1jdWUtd3JpdGluZy1tb2RlLCBpbmhlcml0KTtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIFRPRE8gOiBlbmFibGUgdW5pY29kZS1iaWRpLCByaWdodCBub3cgZW5hYmxlIGl0IHdvdWxkIGNhdXNlIGluY29ycmVjdFxuICAgICAgICAgICAgIGRpc3BsYXkgZGlyZWN0aW9uLCBtYXliZSByZWxhdGVkIHdpdGggYnVnIDE1NTg0MzEuICovXG59XG5cbi8qIDxkaWFsb2c+IGVsZW1lbnQgc3R5bGVzICovXG5cbmRpYWxvZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGluc2V0LWlubGluZS1zdGFydDogMDtcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItd2lkdGg6IGluaXRpYWw7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXM7XG4gICAgY29sb3I6IENhbnZhc1RleHQ7XG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xufVxuXG5kaWFsb2c6bm90KFtvcGVuXSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpYWxvZzptb2RhbCB7XG4gICAgLW1vei10b3AtbGF5ZXI6IHRvcCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwO1xuICAgIGluc2V0LWJsb2NrLWVuZDogMDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDZweCAtIDJlbSk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcbn1cblxuLyogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jZmxvdy1jb250ZW50LTMgKi9cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxubWFycXVlZSB7XG4gICAgaW5saW5lLXNpemU6IC1tb3otYXZhaWxhYmxlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbm1hcnF1ZWU6aXMoW2RpcmVjdGlvbj1cInVwXCJdLCBbZGlyZWN0aW9uPVwiZG93blwiXSkge1xuICAgIGJsb2NrLXNpemU6IDIwMHB4O1xufVxuXG4vKiBSdWJ5ICovXG5cbnJ1Ynkge1xuICAgIGRpc3BsYXk6IHJ1Ynk7XG59XG5cbnJiIHtcbiAgICBkaXNwbGF5OiBydWJ5LWJhc2U7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxucnQge1xuICAgIGRpc3BsYXk6IHJ1YnktdGV4dDtcbn1cblxucnRjIHtcbiAgICBkaXNwbGF5OiBydWJ5LXRleHQtY29udGFpbmVyO1xufVxuXG5ydGMsXG5ydCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IDUwJTtcbiAgICAtbW96LW1pbi1mb250LXNpemUtcmF0aW86IDUwJTtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cblxuQG1lZGlhIG5vdCAoLW1vei1wbGF0Zm9ybTogd2luZG93cykge1xuXG4gICAgcnRjLFxuICAgIHJ0IHtcbiAgICAgICAgLyogVGhlIHdpZGVseS11c2VkIFdpbmRvd3MgZm9udCBNZWlyeW8gZG9lc24ndCB3b3JrIGZpbmUgd2l0aCB0aGlzXG4gICAgICogc2V0dGluZywgc28gZGlzYWJsZSB0aGlzIG9uIFdpbmRvd3MuIFdlIHNob3VsZCByZS1lbmFibGUgaXQgb25jZVxuICAgICAqIE1pY3Jvc29mdCBmaXhlcyB0aGlzIGlzc3VlLiBTZWUgYnVnIDExNjQyNzkuICovXG4gICAgICAgIGZvbnQtdmFyaWFudC1lYXN0LWFzaWFuOiBydWJ5O1xuICAgIH1cbn1cblxucnRjLFxucnQge1xuICAgIHRleHQtZW1waGFzaXM6IG5vbmU7XG59XG5cbnJ0YzpsYW5nKHpoKSxcbnJ0OmxhbmcoemgpIHtcbiAgICBydWJ5LWFsaWduOiBjZW50ZXI7XG59XG5cbnJ0YzpsYW5nKHpoLVRXKSxcbnJ0OmxhbmcoemgtVFcpIHtcbiAgICBmb250LXNpemU6IDMwJTtcbiAgICAvKiBib3BvbW9mbyAqL1xuICAgIC1tb3otbWluLWZvbnQtc2l6ZS1yYXRpbzogMzAlO1xufVxuXG5ydGM+cnQge1xuICAgIGZvbnQtc2l6ZTogdW5zZXQ7XG59XG5cbnJ1YnksXG5yYixcbnJ0LFxucnRjIHtcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGU7XG59XG5cbi8qIFNoYWRvdyBET00gdjFcbiAgKiBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXNjb3BpbmcvI3Nsb3RzLWluLXNoYWRvdy10cmVlICovXG5zbG90IHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLyogVW4taW52ZXJ0IGltYWdlcyBhbmQgdmlkZW9zIGZvciB1c2VycyB1c2luZyBpbnZlcnRlZCBjb2xvcnMuXG4gICogXCJVc2VyIGFnZW50cyBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIHJ1bGUgdG8gdGhlaXIgVUEgc3R5bGUgc2hlZXRcIlxuICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNS8jaW52ZXJ0ZWRcbiAgKi9cbkBtZWRpYSAoaW52ZXJ0ZWQtY29sb3JzKSB7XG5cbiAgICBpbWc6bm90KHBpY3R1cmUgPiBpbWcpLFxuICAgIHBpY3R1cmUsXG4gICAgdmlkZW8ge1xuICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbiAgICB9XG59XG5cbi8qIEhpZGUgbm9zY3JpcHQgZWxlbWVudHMgaWYgc2NyaXB0aW5nIGlzIGVuYWJsZWQgKi9cbkBtZWRpYSAoc2NyaXB0aW5nKSB7XG4gICAgbm9zY3JpcHQge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgcHJpbnQge1xuXG4gICAgaW5wdXQsXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0LFxuICAgIGJ1dHRvbixcbiAgICBkZXRhaWxzIHtcbiAgICAgICAgLW1vei11c2VyLWlucHV0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4vKiBQb3BvdmVyIFVBIHN0eWxlLCBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNmbG93LWNvbnRlbnQtMyAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhLXF1ZXJ5LW5vLWludmFsaWQgKi9cbkBtZWRpYSAoLW1vei1ib29sLXByZWY6IFwiZG9tLmVsZW1lbnQucG9wb3Zlci5lbmFibGVkXCIpIHtcbiAgICBbcG9wb3Zlcl06bm90KDpwb3BvdmVyLW9wZW4pOm5vdChkaWFsb2dbb3Blbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBkaWFsb2c6cG9wb3Zlci1vcGVuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgW3BvcG92ZXJdIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJvcmRlcjogc29saWQ7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGNvbG9yOiBDYW52YXNUZXh0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXM7XG4gICAgfVxuXG4gICAgOnBvcG92ZXItb3BlbiB7XG4gICAgICAgIC1tb3otdG9wLWxheWVyOiB0b3A7XG4gICAgfVxuXG4gICAgOnBvcG92ZXItb3Blbjo6YmFja2Ryb3Age1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cblxuXG5cblxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG5cblxufVxuXG4uaGVhZGVyUGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgMjUwLCA2MSwgMC43OTkpO1xuICAgIGhlaWdodDogMS4ycmVtO1xuICAgIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cbiAgICAvKiBwYWRkaW5nOiAwLjJyZW0gMDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2ZpcnN0XSAzNSUgW3NlY29uZF0gNjUlIFtlbmRdO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiA2MzNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG5cblxuLmxlZnRTZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcblxufVxuXG4ucmlnaHRTZWN0aW9uIHtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG59XG5cblxuLnByb2plY3RzIHtcbiAgICBtYXJnaW46IDVyZW0gYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMTUwLCAxMjIsIDAuMjgpO1xuICAgIHBhZGRpbmc6IDVweCAzcHggMTVweCAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuXG4jcHJvamVjdHNIZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjc1Nik7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuXG4jcHJvamVjdHNUaXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XG5cbn1cblxuI3N0YXJ0UHJvamVjdEJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMTIpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA5MCU7XG59XG5cblxuI3N0YXJ0UHJvamVjdEJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuODk0KTtcbn1cblxuI2lucHV0UHJvamVjdCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDEwcHggMCA1cHggMDtcbn1cblxuXG4udGFza3NVbml0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyNDQsIDEyOSk7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLnRpdGxlVGFzayB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzNywgMTkyKTtcbn1cblxuLnRhc2tEYXRlUHJpb3JpdHkge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnRhc2tEYXRlIHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbn1cblxuLnRhc2tQcmlvcml0eSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cblxuXG5cbi50YXNrVW5pdEltcG9ydGFudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MSwgMjM4LCAxMzIpO1xufVxuXG4udGFza1VuaXRVcmdlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMjU1LCAwKTtcbn1cblxuXG5cbi5wcm9qZWN0c1VuaXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuXG59XG5cbi5idXR0b25Qcm9qZWN0cyxcbi5hY3RpdmVQcm9qZWN0IHtcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNTtcbiAgICBwbGFjZS1zZWxmOiBzdHJldGNoO1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLmJ1dHRvblByb2plY3RzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xufVxuXG4uYnV0dG9uUHJvamVjdHM6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMjA3LCAyMDcpO1xufVxuXG5cblxuXG5cbi5yZW1vdmVQcm9qZWN0cyB7XG4gICAgZ3JpZC1jb2x1bW46IDcgLyA4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG59XG5cbi5hY3RpdmVQcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MjA0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFjdGl2ZVByb2plY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCAyMDgsIDMwKTtcbn1cblxuXG5cbiNsaXN0UHJvamVjdHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uaGlkZVJlbW92ZUJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5cblxuI2FkZFByb2plY3REaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDE1MSwgMjIyKTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIHRvcDogMXJlbTtcbn1cblxuLyogcmlnaHQgc2lkZSAqL1xuXG4udGFza3Mge1xuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCA3NCwgMTYpO1xufVxuXG4jdGFza3NUaXRsZSB7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hZGRUYXNrIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxNik7XG59XG5cblxuLmFkZFRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDI0OCwgNjQsIDAuNDE0KTtcbn1cblxuXG4udGFza0NvbnRhaW5lckZpcnN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNsZWFyOiByaWdodDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbi50YXNrQ29udGFpbmVyRmlyc3Q+ZGl2IHtcbiAgICBtYXJnaW46IDVweDtcblxufVxuXG5cbiNlZGl0VGFza0RpdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDAlO1xuXG4gICAgbWluLXdpZHRoOiAzODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW5cbn1cblxuI2FkZFRhc2tEaXYge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0NSU7XG4gICAgdG9wOiA0cmVtO1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbiNlZGl0VGFza0Zvcm0ge1xuICAgIG1hcmdpbjogOHB4O1xufVxuXG4jYWRkVGFza0Zvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBwYWRkaW5nOiA3cHg7XG59XG5cbmxhYmVsW2Zvcj1cIm5ld1Rhc2tcIl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDAuNHJlbSAwIDEuNHJlbSAwO1xufVxuXG4jYWRkUHJvamVjdEZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbiNsYWJlbFByb2plY3Qge1xuICAgIG1hcmdpbjogLjRyZW0gMS41cmVtO1xufVxuXG4jYnV0dG9uUHJvamVjdEZvcm0ge1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTk5LCAxMTMpXG59XG5cbiNidXR0b25Qcm9qZWN0Rm9ybTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjA2LCAxMDMpXG59XG5cblxuc3BhbiB7XG4gICAgbWFyZ2luOiA1cHggMzBweDtcbn1cblxuXG5cbi5sYWJlbFByaW9yaXR5IHtcbiAgICAvKiBkaXNwbGF5OiA7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cblxubGFiZWxbZm9yPVwidGV4dEFyZWFUYXNrXCJdIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jZGF0ZURpdixcbiNwcmlvcml0eURpdixcbiNub3Rlc0RpdiB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4jcHJpb3JpdHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubXlOb3RlcyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDgwLCAyNTUpO1xuICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICBtYXJnaW46IDVweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGFza1NldHRpbmdzIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwLjVyZW0gYXV0bztcbn1cblxuLnRhc2tTZXR0aW5ncz5idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4wNzEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhc2tTZXR0aW5ncz5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuLnRhc2tTZXR0aW5ncz4ucmVtb3ZlVGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMTIsIDEyKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG4udGFza0NvbXBsZXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbn1cblxuLnRhc2tDb21wbGV0ZWQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xufVxuXG4udGFza0NvbXBsZXRlZCAuYnV0dG9uRWRpdFRhc2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNyZW5hbWVQcm9qZWN0RGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcbiAgICBtaW4td2lkdGg6IDExMCU7XG59XG5cbiNyZW5hbWVQcm9qZWN0RGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOytEQUMrRDtBQUMvRDs7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBLFdBQVc7O0FBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMz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QUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFdlIG5lZWQgdGhlIFxcXCJiZG86LW1vei1oYXMtZGlyLWF0dHJcXFwiIGJpdCBiZWNhdXNlIFxcXCJiZG9cXFwiIGhhcyBsb3dlclxcbiAgICBzcGVjaWZpY2l0eSB0aGFuIHRoZSBcXFwiOi1tb3otaGFzLWRpci1hdHRyXFxcIiBzZWxlY3RvciBhYm92ZS4gKi9cXG5iZG8sXFxuYmRvOi1tb3otaGFzLWRpci1hdHRyIHtcXG4gICAgdW5pY29kZS1iaWRpOiBpc29sYXRlLW92ZXJyaWRlO1xcbn1cXG5cXG50ZXh0YXJlYTotbW96LWRpci1hdHRyLWxpa2UtYXV0byxcXG5wcmU6LW1vei1kaXItYXR0ci1saWtlLWF1dG8ge1xcbiAgICB1bmljb2RlLWJpZGk6IHBsYWludGV4dDtcXG59XFxuXFxuLyogYmxvY2tzICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmRpdixcXG5kdCxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5mb3JtLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxuaHRtbCxcXG5tYWluLFxcbm5hdixcXG5zZWFyY2gsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwXFxufVxcblxcbnAsXFxuZGwsXFxubXVsdGljb2wge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG59XFxuXFxuZGQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5maWd1cmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDQwcHg7XFxufVxcblxcbmFkZHJlc3Mge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuNjdlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjY3ZW07XFxufVxcblxcbmgyLFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuODNlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjgzZW07XFxufVxcblxcbmgzLFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxLjE3ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbn1cXG5cXG5oNCxcXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDEuMDBlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS4zM2VtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjMzZW07XFxufVxcblxcbmg1LFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDAuODNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS42N2VtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjY3ZW07XFxufVxcblxcbmg2LFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAwLjY3ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIuMzNlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMi4zM2VtO1xcbn1cXG5cXG5saXN0aW5nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG59XFxuXFxueG1wLFxcbnByZSxcXG5wbGFpbnRleHQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1mYW1pbHk6IC1tb3otZml4ZWQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxufVxcblxcbi8qIHRhYmxlcyAqL1xcblxcbnRhYmxlIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICAgIC8qIFhYWGxkYiBkbyB3ZSB3YW50IHRoaXMgaWYgd2UncmUgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlID8gKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdGV4dC1pbmRlbnQ6IDA7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJsZWZ0XFxcIl0ge1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuXFxudGFibGVbYWxpZ249XFxcInJpZ2h0XFxcIl0ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5cXG4vKiBib3JkZXIgY29sbGFwc2UgcnVsZXMgKi9cXG5cXG4vKiBTZXQgaGlkZGVuIGlmIHdlIGhhdmUgJ2ZyYW1lJyBvciAncnVsZXMnIGF0dHJpYnV0ZS5cXG4gICAgICBTZXQgaXQgb24gYWxsIHNpZGVzIHdoZW4gd2UgZG8gc28gdGhlcmUncyBtb3JlIGNvbnNpc3RlbmN5XFxuICAgICAgaW4gd2hhdCBhdXRob3JzIHNob3VsZCBleHBlY3QgKi9cXG5cXG4vKiBQdXQgdGhpcyBmaXJzdCBzbyAnYm9yZGVyJyBhbmQgJ2ZyYW1lJyBydWxlcyBjYW4gb3ZlcnJpZGUgaXQuICovXFxudGFibGVbcnVsZXNdIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcXG59XFxuXFxuLyogJ2JvcmRlcicgYmVmb3JlICdmcmFtZScgc28gJ2ZyYW1lJyBvdmVycmlkZXNcXG4gICAgICAgQSBib3JkZXIgd2l0aCBhIGdpdmVuIHZhbHVlIHNob3VsZCwgb2YgY291cnNlLCBwYXNzIHRoYXQgdmFsdWVcXG4gICAgICAgYXMgdGhlIGJvcmRlci13aWR0aCBpbiBwaXhlbHMgLT4gYXR0ciBtYXBwaW5nICovXFxuXFxuLyogOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8gaXMgbGlrZSBbYm9yZGVyXTpub3QoW2JvcmRlcj1cXFwiMFxcXCJdKSBleGNlcHQgaXRcXG4gICAgICBhbHNvIGNoZWNrcyBmb3Igb3RoZXIgemVyby1saWtlIHZhbHVlcyBhY2NvcmRpbmcgdG8gSFRNTCBhdHRyaWJ1dGVcXG4gICAgICBwYXJzaW5nIHJ1bGVzICovXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XFxufVxcblxcbnRhYmxlW2ZyYW1lXSB7XFxuICAgIGJvcmRlcjogdGhpbiBoaWRkZW47XFxufVxcblxcbi8qIHNwZWNpZmljaXR5IG11c3QgYmVhdCB0YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIHJ1bGUgYWJvdmUgKi9cXG50YWJsZVtmcmFtZT1cXFwidm9pZFxcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJhYm92ZVxcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQgaGlkZGVuIGhpZGRlbiBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJiZWxvd1xcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gaGlkZGVuIG91dHNldCBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJsaHNcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIGhpZGRlbiBoaWRkZW4gb3V0c2V0O1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwicmhzXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBvdXRzZXQgaGlkZGVuIGhpZGRlbjtcXG59XFxuXFxudGFibGVbZnJhbWU9XFxcImhzaWRlc1xcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQgaGlkZGVuO1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwidnNpZGVzXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBvdXRzZXQ7XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJib3hcXFwiXSxcXG50YWJsZVtmcmFtZT1cXFwiYm9yZGVyXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcXG59XFxuXFxuXFxuLyogSW50ZXJuYWwgVGFibGUgQm9yZGVycyAqL1xcblxcbi8qICdib3JkZXInIGNlbGwgYm9yZGVycyBmaXJzdCAqL1xcblxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50cj50ZCxcXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dHI+dGgsXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz4qPnRkLFxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50aCxcXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPnRkLFxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+dGgge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxufVxcblxcbi8qIGNvbGxhcHNlIG9ubHkgaWYgcnVsZXMgYXJlIHJlYWxseSBzcGVjaWZpZWQgKi9cXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwibm9uZVxcXCJdLCBbcnVsZXM9XFxcIlxcXCJdKSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi8qIG9ubHkgc3BlY2lmaWVkIHJ1bGVzIG92ZXJyaWRlICdib3JkZXInIHNldHRpbmdzXFxuICAgKGluY3JlYXNlZCBzcGVjaWZpY2l0eSB0byBhY2hpZXZlIHRoaXMpICovXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT50cj50ZCxcXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPio+dHI+dGQsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT50cj50aCxcXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPio+dHI+dGgsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT50ZCxcXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPnRoIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPio+dHI+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+dHI+dGgsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+Kj50cj50aCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT50aCB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+Kj50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPnRyPnRoLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+Kj50cj50aCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+dGgge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwicm93c1xcXCJdPnRyLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwicm93c1xcXCJdPio+dHIge1xcbiAgICBib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1ibG9jay1zdGFydC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1ibG9jay1lbmQtc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImNvbHNcXFwiXT50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImNvbHNcXFwiXT4qPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiY29sc1xcXCJdPnRyPnRoLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiY29sc1xcXCJdPio+dHI+dGgge1xcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1pbmxpbmUtZW5kLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJncm91cHNcXFwiXT5jb2xncm91cCB7XFxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWlubGluZS1lbmQtc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImdyb3Vwc1xcXCJdPnRmb290LFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiZ3JvdXBzXFxcIl0+dGhlYWQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJncm91cHNcXFwiXT50Ym9keSB7XFxuICAgIGJvcmRlci1ibG9jay1zdGFydC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWJsb2NrLWVuZC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWJsb2NrLWVuZC1zdHlsZTogc29saWQ7XFxufVxcblxcblxcbi8qIGNhcHRpb24gaW5oZXJpdHMgZnJvbSB0YWJsZSBub3QgdGFibGUtb3V0ZXIgKi9cXG5jYXB0aW9uIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2FwdGlvbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvbiB7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvblthbGlnbj1cXFwibGVmdFxcXCJdOmRpcihsdHIpIHtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJjZW50ZXJcXFwiXT5jYXB0aW9uW2FsaWduPVxcXCJsZWZ0XFxcIl06ZGlyKHJ0bCkge1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvblthbGlnbj1cXFwicmlnaHRcXFwiXTpkaXIobHRyKSB7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJjZW50ZXJcXFwiXT5jYXB0aW9uW2FsaWduPVxcXCJyaWdodFxcXCJdOmRpcihydGwpIHtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRyIHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcXG59XFxuXFxuY29sIHtcXG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uO1xcbn1cXG5cXG5jb2xncm91cCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbi1ncm91cDtcXG59XFxuXFxudGJvZHkge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbnRoZWFkIHtcXG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50Zm9vdCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWZvb3Rlci1ncm91cDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyogZm9yIFhIVE1MIHRhYmxlcyB3aXRob3V0IHRib2R5ICovXFxudGFibGU+dHIge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50ZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiB1bnNldDtcXG4gICAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG50aCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlci1vci1pbmhlcml0O1xcbn1cXG5cXG46aXModHIsIHRib2R5LCB0aGVhZCwgdGZvb3QsIHRhYmxlKT5mb3JtOi1tb3otaXMtaHRtbCB7XFxuICAgIC8qIEltcG9ydGFudDogZG9uJ3Qgc2hvdyB0aGVzZSBmb3JtcyBpbiBIVE1MICovXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxudGFibGVbYm9yZGVyY29sb3JdPnRib2R5LFxcbnRhYmxlW2JvcmRlcmNvbG9yXT50aGVhZCxcXG50YWJsZVtib3JkZXJjb2xvcl0+dGZvb3QsXFxudGFibGVbYm9yZGVyY29sb3JdPmNvbCxcXG50YWJsZVtib3JkZXJjb2xvcl0+Y29sZ3JvdXAsXFxudGFibGVbYm9yZGVyY29sb3JdPnRyLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT50cj50ZCxcXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cj50ZCxcXG50YWJsZVtib3JkZXJjb2xvcl0+dHI+dGgsXFxudGFibGVbYm9yZGVyY29sb3JdPio+dHI+dGgge1xcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qIGlubGluZXMgKi9cXG5cXG5xOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IG9wZW4tcXVvdGU7XFxufVxcblxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBjbG9zZS1xdW90ZTtcXG59XFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5pLFxcbmNpdGUsXFxuZW0sXFxudmFyLFxcbmRmbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxudHQsXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xcbn1cXG5cXG51LFxcbmlucyB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5zLFxcbnN0cmlrZSxcXG5kZWwge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuYmlnIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG5zdWIge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxufVxcblxcbnN1cCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG5ub2JyIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxubWFyayB7XFxuICAgIGJhY2tncm91bmQ6IE1hcms7XFxuICAgIGNvbG9yOiBNYXJrVGV4dDtcXG59XFxuXFxuLyogdGl0bGVzICovXFxuYWJiclt0aXRsZV0sXFxuYWNyb255bVt0aXRsZV0ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGRvdHRlZCB1bmRlcmxpbmU7XFxufVxcblxcbi8qIGxpc3RzICovXFxuXFxudWwsXFxubWVudSxcXG5kaXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcXG59XFxuXFxudWwsXFxub2wsXFxubWVudSB7XFxuICAgIGNvdW50ZXItcmVzZXQ6IGxpc3QtaXRlbTtcXG59XFxuXFxub2wge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxuICAgIHRleHQtYWxpZ246IG1hdGNoLXBhcmVudDtcXG59XFxuXFxuLyogbmVzdGVkIGxpc3RzIGhhdmUgbm8gdG9wL2JvdHRvbSBtYXJnaW5zICovXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgdWwsXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgb2wsXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGlyLFxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIG1lbnUsXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGwge1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcblxcbi8qIDIgZGVlcCB1bm9yZGVyZWQgbGlzdHMgdXNlIGEgY2lyY2xlICovXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSB1bCxcXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIG1lbnUsXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBkaXIge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXG59XFxuXFxuLyogMyBkZWVwIChvciBtb3JlKSB1bm9yZGVyZWQgbGlzdHMgdXNlIGEgc3F1YXJlICovXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSA6aXMob2wsIHVsLCBtZW51LCBkaXIpIHVsLFxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBtZW51LFxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBkaXIge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcXG59XFxuXFxuXFxuLyogbGVhZnMgKi9cXG5cXG4vKiA8aHI+IG5vc2hhZGUgYW5kIGNvbG9yIGF0dHJpYnV0ZXMgYXJlIGhhbmRsZWQgY29tcGxldGVseSBieVxcbiAgKiBIVE1MSFJFbGVtZW50OjpNYXBBdHRyaWJ1dGVzSW50b1J1bGUuXFxuICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RoZS1oci1lbGVtZW50LTJcXG4gICovXFxuaHIge1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDAuNWVtO1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgLyogRklYTUU6IFRoaXMgaXMgbm90IHJlYWxseSBwZXIgc3BlYyAqL1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaHJbc2l6ZT1cXFwiMVxcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lIG5vbmUgbm9uZTtcXG59XFxuXFxuLyogTm90ZSB0aGF0IHdlIG9ubHkgaW50ZW5kIGZvciB0aGUgYWx0IGNvbnRlbnQgdG8gc2hvdyB1cCBpZiB0aGUgaW1hZ2UgaXNcXG4gICogYnJva2VuLiBCdXQgbm9uLWJyb2tlbiBpbWFnZXMvaW5wdXRzIHdpbGwgaGF2ZSBhIHJlcGxhY2VkIGJveCwgYW5kIHRodXMgd2VcXG4gICogd29uJ3Qgd2UgZG9uJ3QgZ2VuZXJhdGUgdGhlIHBzZXVkby1lbGVtZW50IGFueXdheXMuIFRoaXMgcHJldmVudHNcXG4gICogdW5uZWNlc3NhcnkgcmVmcmFtaW5nIHdoZW4gaW1hZ2VzIGJlY29tZSBicm9rZW4gLyBub24tYnJva2VuLiAqL1xcbmlucHV0W3R5cGU9aW1hZ2VdOjpiZWZvcmUsXFxuaW1nOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAtbW96LWFsdC1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcXG59XFxuXFxuaW1nW3VzZW1hcF0sXFxub2JqZWN0W3VzZW1hcF0ge1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuZnJhbWVzZXQge1xcbiAgICBkaXNwbGF5OiBibG9jayAhIGltcG9ydGFudDtcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWMgISBpbXBvcnRhbnQ7XFxuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xcbiAgICBib3JkZXI6IG5vbmUgISBpbXBvcnRhbnQ7XFxufVxcblxcbmZyYW1lIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAhIGltcG9ydGFudDtcXG59XFxuXFxuaWZyYW1lIHtcXG4gICAgYm9yZGVyOiAycHggaW5zZXQ7XFxufVxcblxcbnNwYWNlciB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWMgISBpbXBvcnRhbnQ7XFxuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xcbn1cXG5cXG5jYW52YXMge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaWZyYW1lOmZvY3VzLXZpc2libGUsXFxuYm9keTpmb2N1cy12aXNpYmxlLFxcbmh0bWw6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIC8qIFRoZXNlIGVsZW1lbnRzIGhpc3RvcmljYWxseSBkb24ndCBzaG93IG91dGxpbmVzIHdoZW4gZm9jdXNlZCBieSBkZWZhdWx0LlxcbiAgICAqIFdlIGNvdWxkIGNvbnNpZGVyIGNoYW5naW5nIHRoYXQgaWYgbmVlZGVkLiAqL1xcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBoaWRkZW4gZWxlbWVudHM6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2hpZGRlbi1lbGVtZW50c1xcbiAgKlxcbiAgKiBFeGNlcHRpb25zOlxcbiAgKlxcbiAgKiAgKiBhcmVhIGRlY2xhcmF0aW9uIG5lZWRzIHRvIGJlICFpbXBvcnRhbnQsIHNlZSBiZWxvdyAvIGJ1ZyAxMzUwNDAuICBUaGF0J3NcXG4gICogICAgaGFja3kgYW5kIGJyb2tlbi5cXG4gICpcXG4gICogICogW2hpZGRlbl0gaXMgaW1wbGVtZW50ZWQgYXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIHRvIGF2b2lkIGEgZ2xvYmFsXFxuICAqICAgIHNlbGVjdG9yIGluIGEgVUEgc2hlZXQuXFxuICAqL1xcbmJhc2UsXFxuYmFzZWZvbnQsXFxuZGF0YWxpc3QsXFxuaGVhZCxcXG5saW5rLFxcbm1ldGEsXFxubm9lbWJlZCxcXG5ub2ZyYW1lcyxcXG5wYXJhbSxcXG5ycCxcXG5zY3JpcHQsXFxuc3R5bGUsXFxudGVtcGxhdGUsXFxudGl0bGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5hcmVhIHtcXG4gICAgLyogRG9uJ3QgZ2l2ZSBpdCBmcmFtZXMgb3RoZXIgdGhhbiBpdHMgaW1hZ2VmcmFtZSAqL1xcbiAgICBkaXNwbGF5OiBub25lICEgaW1wb3J0YW50O1xcbn1cXG5cXG5pZnJhbWU6ZnVsbHNjcmVlbiB7XFxuICAgIC8qIGlmcmFtZXMgaW4gZnVsbC1zY3JlZW4gbW9kZSBkb24ndCBzaG93IGEgYm9yZGVyLiAqL1xcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZzogdW5zZXQgIWltcG9ydGFudDtcXG59XFxuXFxuLyogRGV0YWlscyBhbmQgc3VtbWFyeVxcbiAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtZGV0YWlscy1hbmQtc3VtbWFyeS1lbGVtZW50c1xcbiAgKlxcbiAgKiBOb3RlIHRoYXQgdGhlc2UgcnVsZXMgbmVlZCB0byBiZSBkdXBsaWNhdGVkIGluIGRldGFpbHMuY3NzIGZvciB0aGUgYW5vbnltb3VzXFxuICAqIHN1bW1hcnksIHdoaWNoIHdvdWxkbid0IG1hdGNoIG90aGVyd2lzZS5cXG4gICpcXG4gICogVGhlIHNwZWMgaGVyZSBzYXlzIHNvbWV0aGluZyBkaWZmZXJlbnQsIHNlZVxcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzg2MTBcXG4gICovXFxuZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LWl0ZW0gMDtcXG4gICAgbGlzdC1zdHlsZTogZGlzY2xvc3VyZS1jbG9zZWQgaW5zaWRlO1xcbn1cXG5cXG5kZXRhaWxzW29wZW5dPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzY2xvc3VyZS1vcGVuO1xcbn1cXG5cXG4vKiBtZWRpYSBlbGVtZW50cyAqL1xcbnZpZGVvIHtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxudmlkZW8+aW1nOi1tb3otbmF0aXZlLWFub255bW91cyB7XFxuICAgIC8qIFZpZGVvIHBvc3RlciBpbWFnZXMgc2hvdWxkIHJlbmRlciB3aXRoIHRoZSB2aWRlbyBlbGVtZW50J3MgXFxcIm9iamVjdC1maXRcXFwiICZcXG4gICAgICBcXFwib2JqZWN0LXBvc2l0aW9uXFxcIiBwcm9wZXJ0aWVzICovXFxuICAgIG9iamVjdC1maXQ6IGluaGVyaXQgIWltcG9ydGFudDtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYXVkaW9bY29udHJvbHNdIHtcXG4gICAgLyogVGhpcyBlbnN1cmVzIHRoYXQgaW50cmluc2ljIHNpemluZyBjYW4gcmVsaWFibHkgc2hyaW5rd3JhcCBvdXJcXG4gICAgICAgY29udHJvbHMgKHdoaWNoIGFyZSBhbHNvIGFsd2F5cyBob3Jpem9udGFsKSBhbmQgcHJvZHVjZSBhXFxuICAgICAgIHJlYXNvbmFibGUgaW50cmluc2ljIHNpemUgZnJvbSB0aGVtLiAqL1xcbiAgICB3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDtcXG59XFxuXFxuKnwqOjotbW96LWh0bWwtY2FudmFzLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICAvKiB3ZSB3YW50IHRvIGJlIGFuIGFic29sdXRlIGFuZCBmaXhlZCBjb250YWluZXIgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgIWltcG9ydGFudDtcXG59XFxuXFxudmlkZW8+LmNhcHRpb24tYm94IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKipcXG4gICogVGhlIHBzZXVkbyBlbGVtZW50IHdvbid0IGluaGVyaXQgQ1NTIHN0eWxlcyBmcm9tIGl0cyBkaXJlY3QgcGFyZW50LCBgOjpjdWVgXFxuICAqIHdvdWxkIGFjdHVhbGx5IGluaGVyaXQgc3R5bGVzIGZyb20gdmlkZW8gYmVjYXVzZSBpdCdzIHZpZGVvJ3MgcHNldWRvIGVsZW1lbnQuXFxuICAqIFRoZXJlZm9yZSwgd2UgaGF2ZSB0byBleHBsaWNpdGx5IHNldCBzb21lIHN0eWxlcyB3aGljaCBhcmUgYWxyZWFkeSBkZWZpbmVkXFxuICAqIGluIGl0cyBwYXJlbnQgZWxlbWVudCBpbiB2dHQuanNtLlxcbiAgKi9cXG46OmN1ZSB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IHZhcigtLWN1ZS1mb250LXNpemUpO1xcbiAgICB3cml0aW5nLW1vZGU6IHZhcigtLWN1ZS13cml0aW5nLW1vZGUsIGluaGVyaXQpO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICAvKiBUT0RPIDogZW5hYmxlIHVuaWNvZGUtYmlkaSwgcmlnaHQgbm93IGVuYWJsZSBpdCB3b3VsZCBjYXVzZSBpbmNvcnJlY3RcXG4gICAgICAgICAgICAgZGlzcGxheSBkaXJlY3Rpb24sIG1heWJlIHJlbGF0ZWQgd2l0aCBidWcgMTU1ODQzMS4gKi9cXG59XFxuXFxuLyogPGRpYWxvZz4gZWxlbWVudCBzdHlsZXMgKi9cXG5cXG5kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDA7XFxuICAgIGluc2V0LWlubGluZS1lbmQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyLXdpZHRoOiBpbml0aWFsO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGluaXRpYWw7XFxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXM7XFxuICAgIGNvbG9yOiBDYW52YXNUZXh0O1xcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbn1cXG5cXG5kaWFsb2c6bm90KFtvcGVuXSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaWFsb2c6bW9kYWwge1xcbiAgICAtbW96LXRvcC1sYXllcjogdG9wICFpbXBvcnRhbnQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwO1xcbiAgICBpbnNldC1ibG9jay1lbmQ6IDA7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcXG59XFxuXFxuLyogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jZmxvdy1jb250ZW50LTMgKi9cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG5tYXJxdWVlIHtcXG4gICAgaW5saW5lLXNpemU6IC1tb3otYXZhaWxhYmxlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbm1hcnF1ZWU6aXMoW2RpcmVjdGlvbj1cXFwidXBcXFwiXSwgW2RpcmVjdGlvbj1cXFwiZG93blxcXCJdKSB7XFxuICAgIGJsb2NrLXNpemU6IDIwMHB4O1xcbn1cXG5cXG4vKiBSdWJ5ICovXFxuXFxucnVieSB7XFxuICAgIGRpc3BsYXk6IHJ1Ynk7XFxufVxcblxcbnJiIHtcXG4gICAgZGlzcGxheTogcnVieS1iYXNlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5ydCB7XFxuICAgIGRpc3BsYXk6IHJ1YnktdGV4dDtcXG59XFxuXFxucnRjIHtcXG4gICAgZGlzcGxheTogcnVieS10ZXh0LWNvbnRhaW5lcjtcXG59XFxuXFxucnRjLFxcbnJ0IHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxuICAgIC1tb3otbWluLWZvbnQtc2l6ZS1yYXRpbzogNTAlO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuQG1lZGlhIG5vdCAoLW1vei1wbGF0Zm9ybTogd2luZG93cykge1xcblxcbiAgICBydGMsXFxuICAgIHJ0IHtcXG4gICAgICAgIC8qIFRoZSB3aWRlbHktdXNlZCBXaW5kb3dzIGZvbnQgTWVpcnlvIGRvZXNuJ3Qgd29yayBmaW5lIHdpdGggdGhpc1xcbiAgICAgKiBzZXR0aW5nLCBzbyBkaXNhYmxlIHRoaXMgb24gV2luZG93cy4gV2Ugc2hvdWxkIHJlLWVuYWJsZSBpdCBvbmNlXFxuICAgICAqIE1pY3Jvc29mdCBmaXhlcyB0aGlzIGlzc3VlLiBTZWUgYnVnIDExNjQyNzkuICovXFxuICAgICAgICBmb250LXZhcmlhbnQtZWFzdC1hc2lhbjogcnVieTtcXG4gICAgfVxcbn1cXG5cXG5ydGMsXFxucnQge1xcbiAgICB0ZXh0LWVtcGhhc2lzOiBub25lO1xcbn1cXG5cXG5ydGM6bGFuZyh6aCksXFxucnQ6bGFuZyh6aCkge1xcbiAgICBydWJ5LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnJ0YzpsYW5nKHpoLVRXKSxcXG5ydDpsYW5nKHpoLVRXKSB7XFxuICAgIGZvbnQtc2l6ZTogMzAlO1xcbiAgICAvKiBib3BvbW9mbyAqL1xcbiAgICAtbW96LW1pbi1mb250LXNpemUtcmF0aW86IDMwJTtcXG59XFxuXFxucnRjPnJ0IHtcXG4gICAgZm9udC1zaXplOiB1bnNldDtcXG59XFxuXFxucnVieSxcXG5yYixcXG5ydCxcXG5ydGMge1xcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGU7XFxufVxcblxcbi8qIFNoYWRvdyBET00gdjFcXG4gICogaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy1zY29waW5nLyNzbG90cy1pbi1zaGFkb3ctdHJlZSAqL1xcbnNsb3Qge1xcbiAgICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuXFxuLyogVW4taW52ZXJ0IGltYWdlcyBhbmQgdmlkZW9zIGZvciB1c2VycyB1c2luZyBpbnZlcnRlZCBjb2xvcnMuXFxuICAqIFxcXCJVc2VyIGFnZW50cyBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIHJ1bGUgdG8gdGhlaXIgVUEgc3R5bGUgc2hlZXRcXFwiXFxuICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNS8jaW52ZXJ0ZWRcXG4gICovXFxuQG1lZGlhIChpbnZlcnRlZC1jb2xvcnMpIHtcXG5cXG4gICAgaW1nOm5vdChwaWN0dXJlID4gaW1nKSxcXG4gICAgcGljdHVyZSxcXG4gICAgdmlkZW8ge1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuICAgIH1cXG59XFxuXFxuLyogSGlkZSBub3NjcmlwdCBlbGVtZW50cyBpZiBzY3JpcHRpbmcgaXMgZW5hYmxlZCAqL1xcbkBtZWRpYSAoc2NyaXB0aW5nKSB7XFxuICAgIG5vc2NyaXB0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgcHJpbnQge1xcblxcbiAgICBpbnB1dCxcXG4gICAgdGV4dGFyZWEsXFxuICAgIHNlbGVjdCxcXG4gICAgYnV0dG9uLFxcbiAgICBkZXRhaWxzIHtcXG4gICAgICAgIC1tb3otdXNlci1pbnB1dDogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5cXG4vKiBQb3BvdmVyIFVBIHN0eWxlLCBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNmbG93LWNvbnRlbnQtMyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYS1xdWVyeS1uby1pbnZhbGlkICovXFxuQG1lZGlhICgtbW96LWJvb2wtcHJlZjogXFxcImRvbS5lbGVtZW50LnBvcG92ZXIuZW5hYmxlZFxcXCIpIHtcXG4gICAgW3BvcG92ZXJdOm5vdCg6cG9wb3Zlci1vcGVuKTpub3QoZGlhbG9nW29wZW5dKSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGRpYWxvZzpwb3BvdmVyLW9wZW4ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgW3BvcG92ZXJdIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGluc2V0OiAwO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGJvcmRlcjogc29saWQ7XFxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW07XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIGNvbG9yOiBDYW52YXNUZXh0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzO1xcbiAgICB9XFxuXFxuICAgIDpwb3BvdmVyLW9wZW4ge1xcbiAgICAgICAgLW1vei10b3AtbGF5ZXI6IHRvcDtcXG4gICAgfVxcblxcbiAgICA6cG9wb3Zlci1vcGVuOjpiYWNrZHJvcCB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBpbnNldDogMDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcblxcblxcbn1cXG5cXG4uaGVhZGVyUGFnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMsIDI1MCwgNjEsIDAuNzk5KTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cXG4gICAgLyogcGFkZGluZzogMC4ycmVtIDA7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2ZpcnN0XSAzNSUgW3NlY29uZF0gNjUlIFtlbmRdO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDYzM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG5cXG5cXG4ubGVmdFNlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG5cXG59XFxuXFxuLnJpZ2h0U2VjdGlvbiB7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcblxcbi5wcm9qZWN0cyB7XFxuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAxNTAsIDEyMiwgMC4yOCk7XFxuICAgIHBhZGRpbmc6IDVweCAzcHggMTVweCAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuXFxuI3Byb2plY3RzSGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNzU2KTtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbn1cXG5cXG4jcHJvamVjdHNUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XFxuXFxufVxcblxcbiNzdGFydFByb2plY3RCdXR0b24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEyKTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5MCU7XFxufVxcblxcblxcbiNzdGFydFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC44OTQpO1xcbn1cXG5cXG4jaW5wdXRQcm9qZWN0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XFxufVxcblxcblxcbi50YXNrc1VuaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyNDQsIDEyOSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50aXRsZVRhc2sge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzNywgMTkyKTtcXG59XFxuXFxuLnRhc2tEYXRlUHJpb3JpdHkge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4udGFza0RhdGUge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50YXNrUHJpb3JpdHkge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG5cXG5cXG5cXG4udGFza1VuaXRJbXBvcnRhbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgxLCAyMzgsIDEzMik7XFxufVxcblxcbi50YXNrVW5pdFVyZ2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMjU1LCAwKTtcXG59XFxuXFxuXFxuXFxuLnByb2plY3RzVW5pdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5idXR0b25Qcm9qZWN0cyxcXG4uYWN0aXZlUHJvamVjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA1O1xcbiAgICBwbGFjZS1zZWxmOiBzdHJldGNoO1xcbiAgICBtYXJnaW46IDhweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uYnV0dG9uUHJvamVjdHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG4uYnV0dG9uUHJvamVjdHM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDIwNywgMjA3KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLnJlbW92ZVByb2plY3RzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDcgLyA4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbn1cXG5cXG4uYWN0aXZlUHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcyMDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFjdGl2ZVByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgMjA4LCAzMCk7XFxufVxcblxcblxcblxcbiNsaXN0UHJvamVjdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5oaWRlUmVtb3ZlQnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuXFxuXFxuI2FkZFByb2plY3REaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAxNTEsIDIyMik7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgdG9wOiAxcmVtO1xcbn1cXG5cXG4vKiByaWdodCBzaWRlICovXFxuXFxuLnRhc2tzIHtcXG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDc0LCAxNik7XFxufVxcblxcbiN0YXNrc1RpdGxlIHtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uYWRkVGFzayB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTYpO1xcbn1cXG5cXG5cXG4uYWRkVGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDI0OCwgNjQsIDAuNDE0KTtcXG59XFxuXFxuXFxuLnRhc2tDb250YWluZXJGaXJzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNsZWFyOiByaWdodDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuLnRhc2tDb250YWluZXJGaXJzdD5kaXYge1xcbiAgICBtYXJnaW46IDVweDtcXG5cXG59XFxuXFxuXFxuI2VkaXRUYXNrRGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0MCU7XFxuXFxuICAgIG1pbi13aWR0aDogMzgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlblxcbn1cXG5cXG4jYWRkVGFza0RpdiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDQ1JTtcXG4gICAgdG9wOiA0cmVtO1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jZWRpdFRhc2tGb3JtIHtcXG4gICAgbWFyZ2luOiA4cHg7XFxufVxcblxcbiNhZGRUYXNrRm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJuZXdUYXNrXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDAuNHJlbSAwIDEuNHJlbSAwO1xcbn1cXG5cXG4jYWRkUHJvamVjdEZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbiNsYWJlbFByb2plY3Qge1xcbiAgICBtYXJnaW46IC40cmVtIDEuNXJlbTtcXG59XFxuXFxuI2J1dHRvblByb2plY3RGb3JtIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDE5OSwgMTEzKVxcbn1cXG5cXG4jYnV0dG9uUHJvamVjdEZvcm06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMDYsIDEwMylcXG59XFxuXFxuXFxuc3BhbiB7XFxuICAgIG1hcmdpbjogNXB4IDMwcHg7XFxufVxcblxcblxcblxcbi5sYWJlbFByaW9yaXR5IHtcXG4gICAgLyogZGlzcGxheTogOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuXFxubGFiZWxbZm9yPVxcXCJ0ZXh0QXJlYVRhc2tcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jZGF0ZURpdixcXG4jcHJpb3JpdHlEaXYsXFxuI25vdGVzRGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jcHJpb3JpdHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5teU5vdGVzIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCA4MCwgMjU1KTtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLnRhc2tTZXR0aW5ncyB7XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvIDAuNXJlbSBhdXRvO1xcbn1cXG5cXG4udGFza1NldHRpbmdzPmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjA3MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhc2tTZXR0aW5ncz5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcbi50YXNrU2V0dGluZ3M+LnJlbW92ZVRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAxMiwgMTIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcbi50YXNrQ29tcGxldGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi50YXNrQ29tcGxldGVkIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi50YXNrQ29tcGxldGVkIC5idXR0b25FZGl0VGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNyZW5hbWVQcm9qZWN0RGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgIG1pbi13aWR0aDogMTEwJTtcXG59XFxuXFxuI3JlbmFtZVByb2plY3REaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xubGV0IG15WWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5sZXQgbXlNb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG5sZXQgbXlEYXkgPSB0b2RheS5nZXREYXRlKCk7XG5cbmxldCBkYXlGaXJzdFRhc2ssIG1vbnRoRmlyc3RUYXNrLCB5ZWFyRmlzdFRhc2s7XG5sZXQgZGF5U2Vjb25kVGFzaywgbW9udGhTZWNvbmRUYXNrLCB5ZWFyU2Vjb25kVGFzaztcbmxldCBkYXlUaGlyZFRhc2ssIG1vbnRoVGhpcmRUYXNrLCB5ZWFyVGhpcmRUYXNrO1xuXG5beWVhckZpc3RUYXNrLCB5ZWFyU2Vjb25kVGFzaywgeWVhclRoaXJkVGFza10gPSBbbXlZZWFyLCBteVllYXIsIG15WWVhcl07XG5cbmlmIChteURheSA8PSAxNSkge1xuICBkYXlGaXJzdFRhc2sgPSBteURheSArIDY7XG4gIGRheVNlY29uZFRhc2sgPSBteURheSArIDg7XG4gIGRheVRoaXJkVGFzayA9IG15RGF5ICsgNDtcbn0gZWxzZSB7XG4gIGRheUZpcnN0VGFzayA9IG15RGF5IC0gNjtcbiAgZGF5U2Vjb25kVGFzayA9IG15RGF5IC0gODtcbiAgZGF5VGhpcmRUYXNrID0gbXlEYXkgLSA0O1xufVxuXG5pZiAobXlNb250aCA8PSA3KSB7XG4gIG1vbnRoRmlyc3RUYXNrID0gbXlNb250aCArIDM7XG4gIG1vbnRoU2Vjb25kVGFzayA9IG15TW9udGggKyAxO1xuICBtb250aFRoaXJkVGFzayA9IG15TW9udGggKyAyO1xufSBlbHNlIGlmIChteU1vbnRoIDw9IDkpIHtcbiAgbW9udGhGaXJzdFRhc2sgPSBteU1vbnRoICsgMztcbiAgbW9udGhTZWNvbmRUYXNrID0gbXlNb250aCArIDE7XG4gIG1vbnRoVGhpcmRUYXNrID0gbXlNb250aCArIDI7XG59IGVsc2Uge1xuICBtb250aEZpcnN0VGFzayA9IDM7XG4gIHllYXJGaXN0VGFzayArPSAxO1xuICBtb250aFNlY29uZFRhc2sgPSAxO1xuICB5ZWFyU2Vjb25kVGFzayArPSAxO1xuICBtb250aFRoaXJkVGFzayA9IDI7XG4gIHllYXJUaGlyZFRhc2sgKz0gMTtcbn1cblxubGV0IGRhdGVUYXNrT25lID0gbW9udGhGaXJzdFRhc2sgKyBcIi9cIiArIGRheUZpcnN0VGFzayArIFwiL1wiICsgeWVhckZpc3RUYXNrO1xubGV0IGRhdGVUYXNrVHdvID0gbW9udGhTZWNvbmRUYXNrICsgXCIvXCIgKyBkYXlTZWNvbmRUYXNrICsgXCIvXCIgKyB5ZWFyU2Vjb25kVGFzaztcbmxldCBkYXRlVGFza1RocmVlID0gbW9udGhUaGlyZFRhc2sgKyBcIi9cIiArIGRheVRoaXJkVGFzayArIFwiL1wiICsgeWVhclRoaXJkVGFzaztcblxuZXhwb3J0IHsgZGF0ZVRhc2tPbmUsIGRhdGVUYXNrVHdvLCBkYXRlVGFza1RocmVlIH07XG4iLCJpbXBvcnQgeyBhY3RpdmVQcm9qZWN0LCBjaG9zZW5UYXNrLCBzaG93VGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgZ2V0Rm9ybURhdGFUYXNrIH0gZnJvbSBcIi4vdGFza0NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuZnVuY3Rpb24gc3VibWl0RWRpdFRhc2soKSB7XG4gIC8vIHJ1bnMgd2hlbiB0aGUgZm9ybSBpcyBzdWJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBFZGl0ZWQgZGF0YSAodGhlIGRhdGEgdGhhdCB3ZSBzdWJtaXQgYXMgY29ycmVjdGlvbnMpXG4gIGNvbnN0IGZvcm1FZGl0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRm9ybVwiKTtcbiAgY29uc3QgdGFza0RhdGFFZGl0ID0gZ2V0Rm9ybURhdGFUYXNrKGZvcm1FZGl0ZWQpO1xuICBpZiAodGFza0RhdGFFZGl0WzBdW1wiZGF0ZVwiXSAhPT0gXCJcIikge1xuICAgIGxldCBzZXREYXRlID0gbmV3IERhdGUodGFza0RhdGFFZGl0WzBdW1wiZGF0ZVwiXSk7XG4gICAgbGV0IG5ld0RheSA9IHNldERhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBuZXdNb250aCA9IHNldERhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgbGV0IG5ld1llYXIgPSBzZXREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG5ld0RhdGUgPSBuZXdNb250aCArIFwiIFwiICsgbmV3RGF5ICsgXCIgXCIgKyBuZXdZZWFyO1xuICAgIGNvbnNvbGUubG9nKFwidGFza1wiLCBuZXdEYXRlKTtcbiAgICB0YXNrRGF0YUVkaXRbMF1bXCJkYXRlXCJdID0gbmV3RGF0ZTtcbiAgfVxuXG4gIC8vIE1vZGlmeSB0aGUgZGF0YVxuICBhY3RpdmVQcm9qZWN0Lm1vZGlmeVRhc2soY2hvc2VuVGFzaywgdGFza0RhdGFFZGl0WzBdKTtcblxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGxldCBpZFByb2plY3QgPSBhY3RpdmVQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkUHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoYWN0aXZlUHJvamVjdCkpO1xuICB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0RpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHNob3dUYXNrcyhhY3RpdmVQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tGb3JtKCkge1xuICAvLyBUaGUgZm9ybSBpcyBhZGRlZCBpbiB0aGUgaW5kZXguanNcblxuICBjb25zdCBjb250YWluZXJFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyRWRpdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRUYXNrRGl2XCIpO1xuXG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgLy8gTmFtZSB0aGUgVGFza1xuICBjb25zdCBlbGVtZW50TmFtZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbiAgbGFiZWxUYXNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXRUYXNrXCIpO1xuXG4gIGNvbnN0IG5hbWVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lVGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRUYXNrXCIpO1xuICBuYW1lVGFzay52YWx1ZSA9IFwiTmFtZSB0aGUgdGFza1wiO1xuICBuYW1lVGFzay50eXBlID0gXCJ0ZXh0XCI7XG4gIG5hbWVUYXNrLm5hbWUgPSBcIm5hbWVcIjtcblxuICBlbGVtZW50TmFtZVRhc2suYXBwZW5kQ2hpbGQobGFiZWxUYXNrKTtcbiAgZWxlbWVudE5hbWVUYXNrLmFwcGVuZENoaWxkKG5hbWVUYXNrKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWVUYXNrKTtcblxuICAvLyBEdWUgRGF0ZVxuICBjb25zdCBlbGVtZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnREYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZURpdlwiKTtcblxuICBjb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsRGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZTogXCI7XG4gIGxhYmVsRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVEYXRlRWRpdFwiKTtcblxuICBjb25zdCBpbnB1dERhdGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dERhdGVUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZUVkaXRcIik7XG4gIGlucHV0RGF0ZVRhc2sudHlwZSA9IFwiZGF0ZVwiO1xuICBpbnB1dERhdGVUYXNrLm5hbWUgPSBcImRhdGVcIjtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWxEYXRlKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXREYXRlVGFzayk7XG5cbiAgZWxlbWVudERhdGUuYXBwZW5kQ2hpbGQobGFiZWxEYXRlKTtcbiAgZWxlbWVudERhdGUuYXBwZW5kQ2hpbGQoaW5wdXREYXRlVGFzayk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVsZW1lbnREYXRlKTtcblxuICAvLyBQcmlvcml0eVxuXG4gIGNvbnN0IHByaW9yaXR5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5RGl2RWRpdFwiKTtcblxuICBjb25zdCBwcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gIHByaW9yaXR5VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eUVkaXRcIik7XG5cbiAgLy8gSElHSFxuICBjb25zdCBpbnB1dFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWdoUHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhJR0hcIik7XG5cbiAgaW5wdXRQcmlvcml0eUhpZ2gudHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eUhpZ2gubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eUhpZ2gudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcbiAgbGFiZWxQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5RWRpdFwiKTtcbiAgbGFiZWxQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaGlnaFByaW9yaXR5RWRpdFwiKTtcblxuICAvLyBNRURJVU1cbiAgY29uc3QgaW5wdXRQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVkaXVtUHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTUVESVVNXCIpO1xuXG4gIGlucHV0UHJpb3JpdHlNZWRpdW0udHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1FRElVTVwiO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eUVkaXRcIik7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVkaXVtUHJpb3JpdHlFZGl0XCIpO1xuXG4gIC8vIExPV1xuICBjb25zdCBpbnB1dFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb3dQcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMT1dcIik7XG5cbiAgaW5wdXRQcmlvcml0eUxvdy50eXBlID0gXCJyYWRpb1wiO1xuICBpbnB1dFByaW9yaXR5TG93Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eUxvdy50ZXh0Q29udGVudCA9IFwiTE9XXCI7XG4gIGxhYmVsUHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5RWRpdFwiKTtcbiAgbGFiZWxQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb3dQcmlvcml0eUVkaXRcIik7XG5cbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xuXG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5SGlnaCk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5SGlnaCk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5TWVkaXVtKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eUxvdyk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5TG93KTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlFbGVtZW50KTtcblxuICAvLyBOb3Rlc1xuXG4gIGNvbnN0IG5vdGVzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGVzRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVzRGl2XCIpO1xuXG4gIGNvbnN0IG5vdGVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5vdGVzVGl0bGUudGV4dENvbnRlbnQgPSBcIk5vdGVzXCI7XG4gIG5vdGVzVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGV4dEFyZWFUYXNrRWRpdFwiKTtcbiAgY29uc3QgdGFza1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZXh0QXJlYVRhc2tFZGl0XCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiNTBcIik7XG4gIHRhc2tUZXh0QXJlYS5uYW1lID0gXCJ0ZXh0QXJlYVRhc2tcIjtcblxuICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQobm90ZXNUaXRsZSk7XG4gIG5vdGVzRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrVGV4dEFyZWEpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChub3Rlc0VsZW1lbnQpO1xuXG4gIHRhc2tGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFRhc2tGb3JtXCIpO1xuICBjb250YWluZXJFZGl0LmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuICAvLyBCdXR0b24gRWRpdFxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvbkVkaXRUYXNrXCIpO1xuICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFRElUXCI7XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEVkaXRUYXNrLCBmYWxzZSk7XG5cbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lckVkaXQ7XG59XG5cbmV4cG9ydCB7IGVkaXRUYXNrRm9ybSB9O1xuIiwiaW1wb3J0IHsgZWxlbWVudFByb2plY3QsIGRvbVNob3dUYXNrcyB9IGZyb20gXCIuL3Byb2plY3RzRG9tLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5sZXQgYWN0aXZlUHJvamVjdDtcbmxldCBjaG9zZW5UYXNrO1xuXG5mdW5jdGlvbiBzZXRDaG9zZW5UYXNrKHRhc2spIHtcbiAgY2hvc2VuVGFzayA9IHRhc2s7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3Qoc2V0UHJvamVjdCkge1xuICBsZXQgcHJvamVjdElkO1xuICBsZXQgZWxlbWVudElkO1xuICAvLyBXZSBzZXQgdGhlIGFjdGl2ZSBwcm9qZWN0IGFuZCBjaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBidXR0b25cbiAgaWYgKGFjdGl2ZVByb2plY3QgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb2plY3RJZCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gIH1cblxuICBpZiAocHJvamVjdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0SWQpO1xuICB9XG5cbiAgaWYgKGVsZW1lbnRJZCAhPT0gbnVsbCAmJiBlbGVtZW50SWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlUHJvamVjdFwiKTtcbiAgfVxuXG4gIGFjdGl2ZVByb2plY3QgPSBzZXRQcm9qZWN0O1xuXG4gIGxldCBuZXdfcHJvamVjdElkID0gc2V0UHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgbGV0IG5ld19lbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdfcHJvamVjdElkKTtcbiAgaWYgKG5ld19lbGVtZW50SWQgIT0gbnVsbCkge1xuICAgIG5ld19lbGVtZW50SWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RcIik7XG4gIH1cblxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSAmJiBuZXdfcHJvamVjdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIiwgbmV3X3Byb2plY3RJZCk7XG4gIH1cbn1cblxuLy8gQWxsIHRoZSBwcm9qZWN0cyBuYW1lc1xuY29uc3QgbXlQcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgcmV0dXJuIHsgbmFtZSwgdGFza0xpc3Q6IHt9LCBpZDogXCJwcm9qZWN0XCIgKyBhc3NpZ25Qcm9qZWN0SWQoKSB9O1xufVxuXG4vLyBUaGUgYXJndW1lbnQgd2lsbCBiZSB0aGUgaW5zdGFudGlhdGlvbiBvZiBjcmVhdGVQcm9qZWN0XG5mdW5jdGlvbiBteVByb2plY3RNZXRob2RzKG15UHJvamVjdCkge1xuICByZXR1cm4ge1xuICAgIC4uLm15UHJvamVjdCxcbiAgICBnZXRQcm9qZWN0SWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH0sXG4gICAgcmVuYW1lUHJvamVjdDogZnVuY3Rpb24gKG5ld05hbWUpIHtcbiAgICAgIC8vICh0aGlzLmlkID0gbmV3TmFtZSksXG4gICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH0sXG4gICAgZ2V0VGFza0lkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrSWQ7XG4gICAgfSxcbiAgICBnZXRQcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldFByb2plY3ROYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH0sXG4gICAgZ2V0VGFza0xpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xuICAgIH0sXG4gICAgZW5kVGFzazogZnVuY3Rpb24gKHRhc2tJblF1ZXN0aW9uLCBpc0NvbXBsZXRlZCkge1xuICAgICAgLy8gSXQgY2hhbmdlcyBvbmx5IHRoZSB2aXN1YWwgYXNwZWN0IG9mIHRoZSB0YXNrXG4gICAgICB0YXNrSW5RdWVzdGlvbltcImNvbXBsZXRlZFwiXSA9IGlzQ29tcGxldGVkO1xuICAgICAgbGV0IG15RWxlbWVudFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaG9zZW5UYXNrW1wibmFtZUlkXCJdKTtcbiAgICAgIGlmIChpc0NvbXBsZXRlZCkge1xuICAgICAgICBteUVsZW1lbnRUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29tcGxldGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXlFbGVtZW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwidGFza0NvbXBsZXRlZFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZVRhc2s6IGZ1bmN0aW9uIChvYnNvbGV0ZVRhc2spIHtcbiAgICAgIGxldCBpZFRhc2sgPSBvYnNvbGV0ZVRhc2tbXCJuYW1lSWRcIl07XG4gICAgICBkZWxldGUgdGhpcy50YXNrTGlzdFtpZFRhc2tdO1xuXG4gICAgICBjb25zdCBteVRhc2tzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnRhc2tMaXN0KTtcbiAgICAgIGRvbVNob3dUYXNrcyhteVRhc2tzKTtcbiAgICB9LFxuICAgIG1vZGlmeVRhc2s6IGZ1bmN0aW9uIChvbGRUYXNrLCBuZXdUYXNrKSB7XG4gICAgICBsZXQgaWRUYXNrID0gb2xkVGFza1tcIm5hbWVJZFwiXTtcbiAgICAgIHRoaXMudGFza0xpc3RbaWRUYXNrXSA9IG5ld1Rhc2s7XG4gICAgICB0aGlzLnRhc2tMaXN0W2lkVGFza11bXCJuYW1lSWRcIl0gPSBpZFRhc2s7XG4gICAgfSxcbiAgICBhZGRUYXNrOiBmdW5jdGlvbiAobmFtZSwgZGF0ZSA9IFwibW0tZGQteXlcIiwgcHJpb3JpdHkgPSBcIkxPV1wiLCBub3RlcyA9IFwiXCIpIHtcbiAgICAgIGxldCB0YXNrSWQgPSBhc3NpZ25UYXNrSWQoKTtcblxuICAgICAgbGV0IG5hbWVJZFRhc2sgPSBcInRhc2tcIiArIHRhc2tJZDtcbiAgICAgIGxldCBpbnRlcm5hbFRhc2sgPSB7fTtcblxuICAgICAgaW50ZXJuYWxUYXNrW1wibmFtZUlkXCJdID0gbmFtZUlkVGFzaztcbiAgICAgIGludGVybmFsVGFza1tcIm5hbWVcIl0gPSBuYW1lO1xuXG4gICAgICAvLyBEYXRlIGhhcyB0byBhcHBlYXIgaW4gdGhlIGZvcm0gbW0vZGQveWVhclxuXG4gICAgICBpZiAoZGF0ZSAhPT0gXCJtbS1kZC15eVwiICYmIGRhdGUgIT09IFwiXCIpIHtcbiAgICAgICAgbGV0IG9iamVjdERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgbGV0IG15WWVhciA9IG9iamVjdERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IG15TW9udGggPSBvYmplY3REYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBsZXQgbXlEYXkgPSBvYmplY3REYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGRhdGVUYXNrID0gbXlNb250aCArIFwiL1wiICsgbXlEYXkgKyBcIi9cIiArIG15WWVhcjtcbiAgICAgICAgaW50ZXJuYWxUYXNrW1wiZGF0ZVwiXSA9IGRhdGVUYXNrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxUYXNrW1wiZGF0ZVwiXSA9IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGludGVybmFsVGFza1tcInByaW9yaXR5XCJdID0gcHJpb3JpdHk7XG4gICAgICBpbnRlcm5hbFRhc2tbXCJub3Rlc1wiXSA9IG5vdGVzO1xuICAgICAgaW50ZXJuYWxUYXNrW1wiY29tcGxldGVkXCJdID0gZmFsc2U7XG5cbiAgICAgIC8vIEV2ZXJ5IHRhc2sgaXMgYSB2YWx1ZSB3aG9zZSBrZXkgaXMgbmFtZUlkVGFza1xuICAgICAgdGhpcy50YXNrTGlzdFtuYW1lSWRUYXNrXSA9IGludGVybmFsVGFzaztcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBzaG93VGFza3MocHJvamVjdEwpIHtcbiAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0TCk7XG5cbiAgbGV0IG15UHJvdG9UYXNrcyA9IG51bGw7XG4gIG15UHJvdG9UYXNrcyA9IHByb2plY3RMLmdldFRhc2tMaXN0KCk7XG5cbiAgY29uc3QgbXlUYXNrcyA9IE9iamVjdC52YWx1ZXMobXlQcm90b1Rhc2tzKTtcblxuICBkb21TaG93VGFza3MobXlUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQWRkUHJvamVjdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdERpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdEZvcm1cIik7XG5cbiAgY29uc3QgbmV3VGl0bGUgPSBteUZvcm1bXCJuYW1lXCJdLnZhbHVlO1xuICBpZiAobmV3VGl0bGUgIT09IFwiXCIpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0RW1wdHkgPSBjcmVhdGVQcm9qZWN0KG5ld1RpdGxlKTtcblxuICAgIGxldCBuZXdQcm9qZWN0ID0gbXlQcm9qZWN0TWV0aG9kcyhuZXdQcm9qZWN0RW1wdHkpO1xuXG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGxldCBwcm9qZWN0SWQgPSBuZXdQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdElkLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0RW1wdHkpKTtcbiAgICAgIGxldCBhbGxTdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICAgIGxldCBwYXJzZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UoYWxsU3RvcmVkUHJvamVjdHMpO1xuICAgICAgcGFyc2VkUHJvamVjdHMuYWxsUHJvamVjdHMucHVzaChwcm9qZWN0SWQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFByb2plY3RzKSk7XG4gICAgfVxuXG4gICAgYXBwZW5kUHJvamVjdChuZXdUaXRsZSwgbmV3UHJvamVjdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGFkZEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkUHJvamVjdERpdlwiKTtcblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFByb2plY3RGb3JtXCIpO1xuICBhZGRFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuICBjb25zdCBsYWJlbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJvamVjdC50ZXh0Q29udGVudCA9IFwiUGxlYXNlLCBhZGQgcHJvamVjdCdzIG5hbWU6XCI7XG4gIGxhYmVsUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxhYmVsUHJvamVjdFwiKTtcblxuICBjb25zdCBuYW1lUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZVByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbnB1dFByb2plY3RcIik7XG4gIG5hbWVQcm9qZWN0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZVByb2plY3QubmFtZSA9IFwibmFtZVwiO1xuXG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJvamVjdCk7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVQcm9qZWN0KTtcblxuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25Qcm9qZWN0Rm9ybVwiKTtcbiAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJPS1wiO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQWRkUHJvamVjdCwgZmFsc2UpO1xuXG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gIHJldHVybiBhZGRFbGVtZW50Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0RnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdERpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0UHJvamVjdFwiKS5wbGFjZWhvbGRlciA9XG4gICAgXCJObyBwcm9qZWN0IHdpdGhvdXQgYSBuYW1lXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRQcm9qZWN0XCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2xpY2tSZW5hbWVQcm9qZWN0KCkge1xuICAvLyBSZW5hbWUgdGhlIHByb2plY3RcblxuICBjb25zb2xlLmxvZyhcImRvIGk/XCIsIGFjdGl2ZVByb2plY3QpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuYW1lUHJvamVjdEZvcm1cIik7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYWN0aXZlUHJvamVjdC5nZXRQcm9qZWN0SWQoKSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RFbGVtZW50LCBcImVsXCIpO1xuICBjb25zb2xlLmxvZyhhY3RpdmVQcm9qZWN0LCBcImFjdGl2ZVwiKTtcbiAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBteUZvcm0ubmFtZS52YWx1ZTtcblxuICAvL3Byb2plY3RFbGVtZW50LmlkID0gbXlGb3JtLm5hbWUudmFsdWU7XG5cbiAgYWN0aXZlUHJvamVjdC5yZW5hbWVQcm9qZWN0KG15Rm9ybS5uYW1lLnZhbHVlKTtcblxuICAvL2NvbnNvbGUubG9nKG15Rm9ybS5uYW1lLnZhbHVlKTtcbiAgY29uc29sZS5sb2coYWN0aXZlUHJvamVjdCwgXCJuZXdcIik7XG5cbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gYWN0aXZlUHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGFjdGl2ZVByb2plY3QpKTtcbiAgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuYW1lUHJvamVjdERpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVByb2plY3RGb3JtKCkge1xuICBjb25zb2xlLmxvZyhcImFjdDpcIiwgYWN0aXZlUHJvamVjdCk7XG4gIGNvbnN0IGFkZEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVuYW1lUHJvamVjdERpdlwiKTtcblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlbmFtZVByb2plY3RGb3JtXCIpO1xuICBhZGRFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuICBjb25zdCBsYWJlbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJvamVjdC5tID0gXCJQbGVhc2UsIGVudGVyIHByb2plY3QncyBuYW1lOlwiO1xuICBsYWJlbFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsYWJlbFByb2plY3RSZW5hbWVcIik7XG5cbiAgY29uc3QgbmFtZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5wdXRQcm9qZWN0TmFtZVwiKTtcbiAgbmFtZVByb2plY3QudHlwZSA9IFwidGV4dFwiO1xuICBuYW1lUHJvamVjdC5uYW1lID0gXCJuYW1lXCI7XG5cbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWxQcm9qZWN0KTtcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmFtZVByb2plY3QpO1xuXG4gIGNvbnN0IHJlbmFtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlbmFtZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblByb2plY3RSZW5hbWVcIik7XG4gIHJlbmFtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT0tcIjtcbiAgcmVuYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgICgpID0+IHtcbiAgICAgIGNsaWNrUmVuYW1lUHJvamVjdCgpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcblxuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChyZW5hbWVCdXR0b24pO1xuICByZXR1cm4gYWRkRWxlbWVudENvbnRhaW5lcjtcbn1cblxuY29uc3QgY3JlYXRlTmV3SWQgPSAoKSA9PiB7XG4gIGxldCBpZFByb2plY3QgPSAwO1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGxldCBsb2NhbElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXN0SWRcIik7XG5cbiAgICBpZiAobG9jYWxJZCAhPT0gbnVsbCkge1xuICAgICAgaWRQcm9qZWN0ID0gbG9jYWxJZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlkUHJvamVjdCsrO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdElkXCIsIGlkUHJvamVjdCk7XG4gICAgcmV0dXJuIGlkUHJvamVjdDtcbiAgfTtcbn07XG5cbmNvbnN0IGFzc2lnblByb2plY3RJZCA9IGNyZWF0ZU5ld0lkKCk7XG5jb25zdCBhc3NpZ25UYXNrSWQgPSBjcmVhdGVOZXdJZCgpO1xuXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSwga2V5UHJvamVjdCkge1xuICBjb25zdCBsaXN0UHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RQcm9qZWN0c1wiKTtcbiAgY29uc3QgdGl0bGVQcm9qZWN0ID0gZWxlbWVudFByb2plY3QobmV3UHJvamVjdFRpdGxlLCBrZXlQcm9qZWN0KTtcblxuICBzaG93VGFza3Moa2V5UHJvamVjdCk7XG4gIGxpc3RQcm9qZWN0cy5hcHBlbmRDaGlsZCh0aXRsZVByb2plY3QpO1xuICBzZXRBY3RpdmVQcm9qZWN0KGtleVByb2plY3QpO1xufVxuXG5leHBvcnQge1xuICBhZGRQcm9qZWN0RnVuY3Rpb24sXG4gIGFkZFByb2plY3RGb3JtLFxuICBzaG93VGFza3MsXG4gIGNyZWF0ZVByb2plY3QsXG4gIG15UHJvamVjdE1ldGhvZHMsXG4gIG15UHJvamVjdHMsXG4gIGFjdGl2ZVByb2plY3QsXG4gIHNldENob3NlblRhc2ssXG4gIHNldEFjdGl2ZVByb2plY3QsXG4gIGNyZWF0ZU5ld0lkLFxuICBjaG9zZW5UYXNrLFxuICBjbGlja1JlbmFtZVByb2plY3QsXG4gIHJlbmFtZVByb2plY3RGb3JtLFxufTtcbiIsImltcG9ydCB7XG4gIGFkZFByb2plY3RGdW5jdGlvbixcbiAgYWRkUHJvamVjdEZvcm0sXG4gIHNob3dUYXNrcyxcbiAgYWN0aXZlUHJvamVjdCxcbiAgY2hvc2VuVGFzayxcbiAgc2V0Q2hvc2VuVGFzayxcbiAgcmVuYW1lUHJvamVjdEZvcm0sXG59IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBjbGlja0VkaXRUYXNrIH0gZnJvbSBcIi4vdGFza0NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuZnVuY3Rpb24gcmVuYW1lUHJvamVjdChldmVudCwgcHJvamVjdCkge1xuICBsZXQgdGl0bGVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5hbWVQcm9qZWN0RGl2XCIpO1xuICBsZXQgaW5wdXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFByb2plY3ROYW1lXCIpO1xuICBpbnB1dE5hbWUudmFsdWUgPSBwcm9qZWN0LmdldFByb2plY3ROYW1lKCk7XG4gIGNvbnNvbGUubG9nKHByb2plY3QsIGV2ZW50LnRhcmdldCk7XG4gIC8vIGRlZmluZSB3aGVyZSBpdCB3aWxsIGFwcGVhclxuICBjb25zdCB5X2F4aXMgPSBldmVudC50YXJnZXQub2Zmc2V0VG9wIC0gMTAwO1xuICBsZXQgeV93ciA9IHlfYXhpcyArIFwicHhcIjtcbiAgY29uc29sZS5sb2coeV9heGlzKTtcbiAgdGl0bGVQcm9qZWN0LnN0eWxlLnRvcCA9IHlfd3I7XG4gIHRpdGxlUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgbG9jYWxQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICBsZXQgcGFyc2VkTG9jYWxUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxQcm9qZWN0cyk7XG4gICAgbGV0IHByb2plY3RJZCA9IHByb2plY3QuZmlyc3RDaGlsZC5pZDtcbiAgICBsZXQgcHJvamVjdHNBcnJheSA9IHBhcnNlZExvY2FsVGFza3MuYWxsUHJvamVjdHM7XG5cbiAgICBjb25zdCBhcnJheVdpdGhvdXRSZW1vdmVkUHJvamVjdCA9IHByb2plY3RzQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICByZXR1cm4gcHJvamVjdCAhPT0gcHJvamVjdElkO1xuICAgIH0pO1xuICAgIGxldCBhbGxMb2NhbFByb2plY3RzID0geyBhbGxQcm9qZWN0czogYXJyYXlXaXRob3V0UmVtb3ZlZFByb2plY3QgfTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhbGxMb2NhbFByb2plY3RzKSk7XG5cbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQWN0aXZlUHJvamVjdFwiKTtcbiAgICBpZiAoYWN0aXZlUHJvamVjdCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQWN0aXZlUHJvamVjdFwiLCBcImp1c3REZWxldGVkXCIpO1xuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3RJZCk7XG4gIH1cblxuICBwcm9qZWN0LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjbGlja1JlbW92ZVRhc2soZXZlbnQpIHtcbiAgc2V0Q2hvc2VuVGFzayhldmVudCk7XG4gIGFjdGl2ZVByb2plY3QuZGVsZXRlVGFzayhjaG9zZW5UYXNrKTtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gYWN0aXZlUHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGFjdGl2ZVByb2plY3QpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDb21wbGV0ZWQoZXZlbnQsIGJ1dHRvbkNvbXBsZXRpb24pIHtcbiAgc2V0Q2hvc2VuVGFzayhldmVudCk7XG5cbiAgbGV0IHsgY29tcGxldGVkIH0gPSBldmVudDtcbiAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcbiAgaWYgKGNvbXBsZXRlZCA9PSBmYWxzZSkge1xuICAgIGJ1dHRvbkNvbXBsZXRpb24udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uQ29tcGxldGlvbi50ZXh0Q29udGVudCA9IFwiT3BlblwiO1xuICB9XG5cbiAgYWN0aXZlUHJvamVjdC5lbmRUYXNrKGNob3NlblRhc2ssIGNvbXBsZXRlZCk7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGlkUHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShhY3RpdmVQcm9qZWN0KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWxlbWVudFByb2plY3QobmFtZVByb2plY3REb20sIGtleVByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzVW5pdFwiKTtcblxuICAvLyBUaGUgcHJvamVjdFxuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uUHJvamVjdHNcIik7XG4gIGxldCBwcm9qZWN0SWQgPSBrZXlQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3RJZCk7XG5cbiAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IG5hbWVQcm9qZWN0RG9tO1xuXG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaG93VGFza3Moa2V5UHJvamVjdCk7XG4gIH0pO1xuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVuYW1lUHJvamVjdChldmVudCwga2V5UHJvamVjdCk7XG4gIH0pO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuXG4gIC8vIFRoZSBvcHRpb24gdG8gcmVtb3ZlIGl0XG4gIGNvbnN0IHJlbW92ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgYnV0dG9uUmVtb3ZlRGlzcGxheSA9IHByb2plY3RJZCArIFwiQnV0dG9uXCI7XG5cbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBidXR0b25SZW1vdmVEaXNwbGF5KTtcbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlUHJvamVjdHNcIiwgXCJoaWRlUmVtb3ZlQnV0dG9uXCIpO1xuICByZW1vdmVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIHJlbW92ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3REaXYpO1xuICB9KTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnV0dG9uKTtcblxuICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJtb3VzZW92ZXJcIixcbiAgICAoKSA9PiB7XG4gICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlUmVtb3ZlQnV0dG9uXCIpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcblxuICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJtb3VzZW91dFwiLFxuICAgICgpID0+IHtcbiAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGVSZW1vdmVCdXR0b25cIik7XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xuXG4gIHJldHVybiBwcm9qZWN0RGl2O1xufVxuXG5mdW5jdGlvbiBkb21TaG93VGFza3MobXlUYXNrcykge1xuICBjb25zdCBteUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0NvbnRhaW5lcklkXCIpO1xuICBpZiAobXlDb250YWluZXIgIT09IG51bGwpIHtcbiAgICBteUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgZWFjaFRhc2sgb2YgbXlUYXNrcykge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tzVW5pdFwiKTtcbiAgICBuZXdUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIGVhY2hUYXNrW1wibmFtZUlkXCJdKTtcbiAgICBteUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblxuICAgIC8vIE5ldyB0aXRsZVxuICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbmV3VGl0bGUudGV4dENvbnRlbnQgPSBlYWNoVGFzay5uYW1lO1xuICAgIG5ld1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVRhc2tcIik7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG5cbiAgICAvLyBOZXcgZXh0cmFzIChkYXRlLCBwcmlvcml0eSlcbiAgICBjb25zdCBuZXdFeHRyYXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0V4dHJhcy5jbGFzc0xpc3QuYWRkKFwidGFza0RhdGVQcmlvcml0eVwiKTtcblxuICAgIC8vIE5ldyBkYXRlXG4gICAgaWYgKGVhY2hUYXNrLmRhdGUgIT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGxldCBlYWNoRGF0ZSA9IGVhY2hUYXNrLmRhdGU7XG4gICAgICBsZXQgcmUgPSAvLXxcXHMvZ2k7XG4gICAgICBsZXQgZm9ybWF0RGF0ZSA9IGVhY2hEYXRlLnJlcGxhY2UocmUsIFwiL1wiKTtcbiAgICAgIG5ld0R1ZURhdGUudGV4dENvbnRlbnQgPSBmb3JtYXREYXRlO1xuICAgICAgbmV3RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFza0RhdGVcIik7XG4gICAgICBuZXdFeHRyYXMuYXBwZW5kQ2hpbGQobmV3RHVlRGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gTmV3IHByaW9yaXR5XG4gICAgY29uc3QgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBuZXdQcmlvcml0eS50ZXh0Q29udGVudCA9IGBwcmlvcml0eTogJHtlYWNoVGFzay5wcmlvcml0eX1gO1xuICAgIG5ld1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrUHJpb3JpdHlcIik7XG4gICAgbmV3RXh0cmFzLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5KTtcblxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3RXh0cmFzKTtcblxuICAgIGlmIChlYWNoVGFzay5wcmlvcml0eSA9PSBcIkhJR0hcIikge1xuICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1VuaXRVcmdlbnRcIik7XG4gICAgfVxuICAgIGlmIChlYWNoVGFzay5wcmlvcml0eSA9PSBcIk1FRElVTVwiKSB7XG4gICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVW5pdEltcG9ydGFudFwiKTtcbiAgICB9XG5cbiAgICAvLyBQbGFjZSBub3Rlc1xuICAgIGlmIChlYWNoVGFzay5ub3RlcyAhPT0gXCJcIikge1xuICAgICAgY29uc3Qgc2V0Tm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2V0Tm90ZXMudGV4dENvbnRlbnQgPSBlYWNoVGFzay5ub3RlcztcbiAgICAgIHNldE5vdGVzLmNsYXNzTGlzdC5hZGQoXCJteU5vdGVzXCIpO1xuICAgICAgY29uc3QgaWROb3RlID0gXCJcIjtcbiAgICAgIHNldE5vdGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkTm90ZSk7XG4gICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHNldE5vdGVzKTtcbiAgICB9XG5cbiAgICAvLyBOZXcgdGFzayBzZXR0aW5nXG4gICAgY29uc3QgbmV3U2V0dGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3U2V0dGluZy5jbGFzc0xpc3QuYWRkKFwidGFza1NldHRpbmdzXCIpO1xuXG4gICAgLy8gQ29tcGxldGVkXG4gICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb21wbGV0ZWQudGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG4gICAgY29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHNldENvbXBsZXRlZChlYWNoVGFzaywgY29tcGxldGVkKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgaWYgKGVhY2hUYXNrW1wiY29tcGxldGVkXCJdKSB7XG4gICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29tcGxldGVkXCIpO1xuICAgICAgY29tcGxldGVkLnRleHRDb250ZW50ID0gXCJPcGVuXCI7XG4gICAgfVxuXG4gICAgbmV3U2V0dGluZy5hcHBlbmRDaGlsZChjb21wbGV0ZWQpO1xuXG4gICAgLy8gTmV3IGVkaXRcbiAgICBjb25zdCBuZXdFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXdFZGl0LmNsYXNzTGlzdC5hZGQoXCJidXR0b25FZGl0VGFza1wiKTtcbiAgICBuZXdFZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cbiAgICBuZXdFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNsaWNrRWRpdFRhc2soZWFjaFRhc2ssIG5ld1RpdGxlKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICBuZXdTZXR0aW5nLmFwcGVuZENoaWxkKG5ld0VkaXQpO1xuXG4gICAgLy8gUmVtb3ZlIHRhc2tcbiAgICBjb25zdCByZW1vdmVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZW1vdmVUYXNrLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVUYXNrXCIpO1xuICAgIHJlbW92ZVRhc2sudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIHJlbW92ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgY2xpY2tSZW1vdmVUYXNrKGVhY2hUYXNrKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICBuZXdTZXR0aW5nLmFwcGVuZENoaWxkKHJlbW92ZVRhc2spO1xuXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdTZXR0aW5nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG15UHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuXG4gIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0oKSk7XG4gIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQocmVuYW1lUHJvamVjdEZvcm0oKSk7XG5cbiAgY29uc3QgbXlQcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbXlQcm9qZWN0c0hlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzSGVhZGVyXCIpO1xuICBteVByb2plY3RzLmFwcGVuZENoaWxkKG15UHJvamVjdHNIZWFkZXIpO1xuXG4gIGNvbnN0IG15UHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBteVByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG5cbiAgbXlQcm9qZWN0c1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHNUaXRsZVwiKTtcblxuICBteVByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKG15UHJvamVjdHNUaXRsZSk7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdGFydFByb2plY3RCdXR0b25cIik7XG4gIGFkZFByb2plY3QuaW5uZXJUZXh0ID0gXCIrXCI7XG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RGdW5jdGlvbik7XG4gIG15UHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGlzdFByb2plY3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdFByb2plY3RzXCIpO1xuXG4gIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQobGlzdFByb2plY3RzKTtcblxuICByZXR1cm4gbXlQcm9qZWN0cztcbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdHMsIGVsZW1lbnRQcm9qZWN0LCBkb21TaG93VGFza3MgfTtcbiIsImZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH07XG4iLCJpbXBvcnQgeyBhY3RpdmVQcm9qZWN0LCBzZXRDaG9zZW5UYXNrIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGVkaXRUYXNrRm9ybSB9IGZyb20gXCIuL2Zvcm1zLmpzXCI7XG5pbXBvcnQgeyBkb21TaG93VGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0c0RvbS5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuZnVuY3Rpb24gY2xpY2tFZGl0VGFzayhldmVudCwgZWRpdF9lbGVtZW50KSB7XG4gIC8vIGl0IGRpc3BsYXlzIHRoZSBmb3JtIGZvciBlZGl0aW5nXG5cbiAgLy8gZGVmaW5lIHdoZXJlIGl0IHdpbGwgYXBwZWFyXG4gIGNvbnN0IHlfYXhpcyA9IGVkaXRfZWxlbWVudC5vZmZzZXRUb3A7XG5cbiAgc2V0Q2hvc2VuVGFzayhldmVudCk7XG5cbiAgY29uc3QgZWRpdFRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRGl2XCIpO1xuICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tGb3JtXCIpO1xuXG4gIGNvbnN0IHsgbmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzIH0gPSBldmVudDtcblxuICAvLyBDaGFuZ2UgdGhlIGxhYmVsc1xuXG4gIGxldCBvbGRUYXNrID0gZWRpdEZvcm0uZWxlbWVudHNbXCJlZGl0VGFza1wiXTtcbiAgbGV0IG9sZERhdGUgPSBlZGl0Rm9ybS5lbGVtZW50c1tcImR1ZURhdGVFZGl0XCJdO1xuXG4gIC8vIEluc2VydCB0aGUgYXBwcm9wcmlhdGUgdmFsdWVzIHRvIHRoZSBmb3JtXG4gIG9sZFRhc2sudmFsdWUgPSBuYW1lO1xuXG4gIGlmIChkYXRlICE9PSBcIlwiKSB7XG4gICAgY29uc29sZS5sb2coZGF0ZSwgdHlwZW9mIGRhdGUsIGV2ZW50KTtcbiAgICBsZXQgcmUgPSAvLS9naTtcbiAgICBsZXQgZGF0ZU4gPSBkYXRlLnJlcGxhY2UocmUsIFwiIFwiKTtcbiAgICBsZXQgc2V0RGF0ZSA9IG5ldyBEYXRlKGRhdGVOKTtcbiAgICBsZXQgZml4ZWREYXkgPSBzZXREYXRlLmdldERhdGUoKSArIDE7XG4gICAgc2V0RGF0ZS5zZXREYXRlKGZpeGVkRGF5KTtcbiAgICBvbGREYXRlLnZhbHVlID0gc2V0RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgfVxuXG4gIGxldCBvbGROb3RlcyA9IGVkaXRGb3JtLmVsZW1lbnRzW1widGV4dEFyZWFUYXNrRWRpdFwiXTtcbiAgb2xkTm90ZXMudmFsdWUgPSBub3RlcztcblxuICBsZXQgb2xkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIiArIFwicHJpb3JpdHlcIiArIFwiXVwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRQcmlvcml0eS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChvbGRQcmlvcml0eVtpXS52YWx1ZSA9PT0gcHJpb3JpdHkpIHtcbiAgICAgIG9sZFByaW9yaXR5W2ldLmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBsZXQgeV93ciA9IHlfYXhpcyArIFwicHhcIjtcbiAgZWRpdFRhc2tEaXYuc3R5bGUudG9wID0geV93cjtcbiAgZWRpdFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gY2xpY2tBZGRUYXNrKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tEaXZcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrXCIpLnBsYWNlaG9sZGVyID0gXCJObyB0YXNrIHdpdGhvdXQgYSBuYW1lXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza1wiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1BZGRUYXNrTWV0aG9kKCkge1xuICAvLyBBZGRzIHRoZSB0YXNrIHRvIHRoZSBwcm9qZWN0XG4gIGNvbnN0IG15Rm9ybVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tGb3JtXCIpO1xuICBjb25zdCB0YXNrRGF0YSA9IGdldEZvcm1EYXRhVGFzayhteUZvcm1UYXNrKTtcblxuICBjb25zdCBbeyBuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMgfV0gPSB0YXNrRGF0YTtcblxuICAvLyBXZSBkb24ndCB3YW50IHRhc2tzIHdpdGhvdXQgYSAnbmFtZScgKGRlc2NyaXB0aW9uKVxuICBpZiAobmFtZSA9PSBcIlwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChkYXRlID09PSBcIlwiKSB7XG4gICAgY29uc29sZS5sb2codHJ1ZSk7XG4gIH1cbiAgYWN0aXZlUHJvamVjdC5hZGRUYXNrKG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3Rlcyk7XG4gIGNvbnNvbGUubG9nKFwiZm9ybSBhZGRcIiwgZGF0ZSk7XG5cbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gYWN0aXZlUHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGFjdGl2ZVByb2plY3QpKTtcbiAgfVxuXG4gIGxldCBteVByb3RvVGFza3MgPSBudWxsO1xuICBteVByb3RvVGFza3MgPSBhY3RpdmVQcm9qZWN0LmdldFRhc2tMaXN0KCk7XG4gIGNvbnN0IG15VGFza3MgPSBPYmplY3QudmFsdWVzKG15UHJvdG9UYXNrcyk7XG4gIGNvbnNvbGUubG9nKFwic2hvd1wiLCBteVRhc2tzKTtcbiAgZG9tU2hvd1Rhc2tzKG15VGFza3MpO1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtRGF0YVRhc2sod2hpY2hGb3JtKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0RpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IG15Rm9ybVRhc2sgPSB3aGljaEZvcm07XG4gIGNvbnN0IG5ld1Rhc2sgPSBteUZvcm1UYXNrW1wibmFtZVwiXS52YWx1ZTtcbiAgY29uc3QgbmV3RGF0ZSA9IG15Rm9ybVRhc2tbXCJkYXRlXCJdLnZhbHVlO1xuICBsZXQgbmV3SW1wb3J0YW5jZSA9IG15Rm9ybVRhc2tbXCJwcmlvcml0eVwiXS52YWx1ZTtcbiAgY29uc3QgbmV3Tm90ZXMgPSBteUZvcm1UYXNrW1widGV4dEFyZWFUYXNrXCJdLnZhbHVlO1xuXG4gIGNvbnN0IHRhc2tTZXQgPSBbXG4gICAgeyBuYW1lOiBuZXdUYXNrLCBkYXRlOiBuZXdEYXRlLCBwcmlvcml0eTogbmV3SW1wb3J0YW5jZSwgbm90ZXM6IG5ld05vdGVzIH0sXG4gIF07XG5cbiAgcmV0dXJuIHRhc2tTZXQ7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tGb3JtKCkge1xuICBjb25zdCBhZGRFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkRWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRhc2tEaXZcIik7XG5cbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRUYXNrRm9ybVwiKTtcblxuICAvLyBOYW1lIHRoZSBUYXNrXG4gIGNvbnN0IGVsZW1lbnROYW1lVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxhYmVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxUYXNrLnRleHRDb250ZW50ID0gXCJQbGVhc2UsIGFkZCBhIG5ldyB0YXNrOlwiO1xuICBsYWJlbFRhc2suc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3VGFza1wiKTtcblxuICBjb25zdCBuYW1lVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZVRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdUYXNrXCIpO1xuICBuYW1lVGFzay50eXBlID0gXCJ0ZXh0XCI7XG4gIG5hbWVUYXNrLm5hbWUgPSBcIm5hbWVcIjtcblxuICBlbGVtZW50TmFtZVRhc2suYXBwZW5kQ2hpbGQobGFiZWxUYXNrKTtcbiAgZWxlbWVudE5hbWVUYXNrLmFwcGVuZENoaWxkKG5hbWVUYXNrKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWVUYXNrKTtcblxuICAvLyBEdWUgRGF0ZVxuICBjb25zdCBlbGVtZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnREYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZURpdlwiKTtcblxuICBjb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsRGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZTogXCI7XG4gIGxhYmVsRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVEYXRlXCIpO1xuXG4gIGNvbnN0IGlucHV0RGF0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0RGF0ZVRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpO1xuICBpbnB1dERhdGVUYXNrLnR5cGUgPSBcImRhdGVcIjtcbiAgaW5wdXREYXRlVGFzay5uYW1lID0gXCJkYXRlXCI7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGlucHV0RGF0ZVRhc2spO1xuXG4gIGVsZW1lbnREYXRlLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gIGVsZW1lbnREYXRlLmFwcGVuZENoaWxkKGlucHV0RGF0ZVRhc2spO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlbGVtZW50RGF0ZSk7XG5cbiAgLy8gUHJpb3JpdHlcblxuICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eURpdlwiKTtcblxuICBjb25zdCBwcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gIHByaW9yaXR5VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcblxuICAvLyBISUdIXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlcIik7XG4gIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaFByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhJR0hcIik7XG5cbiAgaW5wdXRQcmlvcml0eUhpZ2gudHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eUhpZ2gubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eUhpZ2gudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcbiAgbGFiZWxQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5XCIpO1xuICBsYWJlbFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoUHJpb3JpdHlcIik7XG5cbiAgLy8gTUVESVVNXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVkaXVtUHJpb3JpdHlcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNRURJVU1cIik7XG5cbiAgaW5wdXRQcmlvcml0eU1lZGl1bS50eXBlID0gXCJyYWRpb1wiO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS50ZXh0Q29udGVudCA9IFwiTUVESVVNXCI7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5XCIpO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lZGl1bVByaW9yaXR5XCIpO1xuXG4gIC8vIExPV1xuICBjb25zdCBpbnB1dFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eVwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvd1ByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTE9XXCIpO1xuICBpbnB1dFByaW9yaXR5TG93LmNoZWNrZWQgPSB0cnVlO1xuXG4gIGlucHV0UHJpb3JpdHlMb3cudHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eUxvdy5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxPV1wiO1xuICBsYWJlbFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eVwiKTtcbiAgbGFiZWxQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb3dQcmlvcml0eVwiKTtcblxuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZSk7XG5cbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eU1lZGl1bSk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5TG93KTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlMb3cpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUVsZW1lbnQpO1xuXG4gIC8vIE5vdGVzXG5cbiAgY29uc3Qgbm90ZXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90ZXNFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNEaXZcIik7XG5cbiAgY29uc3Qgbm90ZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbm90ZXNUaXRsZS50ZXh0Q29udGVudCA9IFwiTm90ZXNcIjtcbiAgbm90ZXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0ZXh0QXJlYVRhc2tcIik7XG4gIGNvbnN0IHRhc2tUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGV4dEFyZWFUYXNrXCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiNTBcIik7XG4gIHRhc2tUZXh0QXJlYS5uYW1lID0gXCJ0ZXh0QXJlYVRhc2tcIjtcblxuICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQobm90ZXNUaXRsZSk7XG4gIG5vdGVzRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrVGV4dEFyZWEpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChub3Rlc0VsZW1lbnQpO1xuXG4gIGFkZEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblRhc2tGb3JtXCIpO1xuICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERFwiO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZvcm1BZGRUYXNrTWV0aG9kLCBmYWxzZSk7XG5cbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICByZXR1cm4gYWRkRWxlbWVudENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHtcbiAgY2xpY2tBZGRUYXNrLFxuICBhZGRUYXNrRm9ybSxcbiAgZWRpdFRhc2tGb3JtLFxuICBnZXRGb3JtRGF0YVRhc2ssXG4gIGNsaWNrRWRpdFRhc2ssXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCBlbGVtZW50UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzRG9tLmpzXCI7XG5pbXBvcnQge1xuICBzaG93VGFza3MsXG4gIGNyZWF0ZVByb2plY3QsXG4gIHNldEFjdGl2ZVByb2plY3QsXG4gIGFjdGl2ZVByb2plY3QsXG4gIG15UHJvamVjdE1ldGhvZHMsXG59IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBjbGlja0FkZFRhc2ssIGFkZFRhc2tGb3JtIH0gZnJvbSBcIi4vdGFza0NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgZWRpdFRhc2tGb3JtIH0gZnJvbSBcIi4vZm9ybXMuanNcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBkYXRlVGFza09uZSwgZGF0ZVRhc2tUd28sIGRhdGVUYXNrVGhyZWUgfSBmcm9tIFwiLi9kYXRlcy5qc1wiO1xuXG5sZXQgc3RhdGVVc2VyO1xuXG4vLyBDcmVhdGUgdGhlIHNhbXBsZSBwcm9qZWN0cyB0aGF0IHdpbGwgYWRkIGF0IHRoZSBlbmRcblxubGV0IHNhbXBsZVByb2plY3Q7XG5cbmxldCBzYW1wbGVQcm9qZWN0T25lO1xubGV0IHNhbXBsZVByb2plY3RUd287XG5sZXQgbmFtZVByb2plY3RTYW1wbGVPbmU7XG5sZXQgbmFtZVByb2plY3RTYW1wbGVUd287XG5sZXQgY3JlYXRlRWxlbWVudFNhbXBsZU9uZTtcbmxldCBjcmVhdGVFbGVtZW50U2FtcGxlVHdvO1xuXG4vLyBQcm9qZWN0IG9uZSAoaW5pdGlhbCBwcm9qZWN0KVxuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBzdGF0ZVVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXRlQXBwbGljYXRpb25cIik7XG5cbiAgaWYgKHN0YXRlVXNlciA9PSBudWxsKSB7XG4gICAgc2FtcGxlUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJwcm9qZWN0MVwiKTtcbiAgICBsZXQgYWxsTG9jYWxQcm9qZWN0cyA9IHsgYWxsUHJvamVjdHM6IFtdIH07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFsbExvY2FsUHJvamVjdHMpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3QxXCIsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3QpKTtcbiAgICBsZXQgbG9jYWxQcm9qZWN0MSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdDFcIik7XG4gICAgc2FtcGxlUHJvamVjdE9uZSA9IG15UHJvamVjdE1ldGhvZHMoSlNPTi5wYXJzZShsb2NhbFByb2plY3QxKSk7XG5cbiAgICAvLyBQdXNoIHRoZSBwcm9qZWN0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgbGV0IGFsbFN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIpO1xuICAgIGxldCBwYXJzZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UoYWxsU3RvcmVkUHJvamVjdHMpO1xuICAgIGxldCBmaXJzdFByb2plY3RJZCA9IHNhbXBsZVByb2plY3RPbmUuZ2V0UHJvamVjdElkKCk7XG4gICAgcGFyc2VkUHJvamVjdHMuYWxsUHJvamVjdHMucHVzaChmaXJzdFByb2plY3RJZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFByb2plY3RzKSk7XG4gIH1cbn1cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBzYW1wbGVQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcInByb2plY3QxXCIpO1xuICBzYW1wbGVQcm9qZWN0T25lID0gbXlQcm9qZWN0TWV0aG9kcyhzYW1wbGVQcm9qZWN0KTtcbn1cblxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpIHwgKHN0YXRlVXNlciA9PSBudWxsKSkge1xuICBzYW1wbGVQcm9qZWN0T25lLmFkZFRhc2soXG4gICAgXCJSZWFkIGEgbmV3IGJvb2tcIixcbiAgICBkYXRlVGFza09uZSxcbiAgICBcIkxPV1wiLFxuICAgIFwiSSBuZWVkIHRvIHRha2UgY29tbWVudHNcIlxuICApO1xuICBzYW1wbGVQcm9qZWN0T25lLmFkZFRhc2soXCJWaXNpdCBhbiBlbXB0eSBob3VzZVwiLCBkYXRlVGFza1R3byk7XG59XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpICYmIHN0YXRlVXNlciA9PSBudWxsKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdDFcIiwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlUHJvamVjdE9uZSkpO1xufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgfCAoc3RhdGVVc2VyID09IG51bGwpKSB7XG4gIHNldEFjdGl2ZVByb2plY3Qoc2FtcGxlUHJvamVjdE9uZSk7XG59XG5cbi8vIFByb2plY3QgdHdvXG5sZXQgc2FtcGxlUHJvamVjdE5leHQ7XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIGlmIChzdGF0ZVVzZXIgPT0gbnVsbCkge1xuICAgIHNhbXBsZVByb2plY3ROZXh0ID0gY3JlYXRlUHJvamVjdChcInByb2plY3QyXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdDJcIiwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlUHJvamVjdE5leHQpKTtcbiAgICBsZXQgbG9jYWxQcm9qZWN0MiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdDJcIik7XG4gICAgc2FtcGxlUHJvamVjdFR3byA9IG15UHJvamVjdE1ldGhvZHMoSlNPTi5wYXJzZShsb2NhbFByb2plY3QyKSk7XG5cbiAgICAvLyBQdXNoIHRoZSBwcm9qZWN0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgbGV0IGFsbFN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIpO1xuICAgIGxldCBzZWNvbmRQcm9qZWN0SWQgPSBzYW1wbGVQcm9qZWN0VHdvLmdldFByb2plY3RJZCgpO1xuICAgIGxldCBwYXJzZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UoYWxsU3RvcmVkUHJvamVjdHMpO1xuICAgIHBhcnNlZFByb2plY3RzLmFsbFByb2plY3RzLnB1c2goc2Vjb25kUHJvamVjdElkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocGFyc2VkUHJvamVjdHMpKTtcbiAgfVxufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgc2FtcGxlUHJvamVjdE5leHQgPSBjcmVhdGVQcm9qZWN0KFwicHJvamVjdDJcIik7XG4gIHNhbXBsZVByb2plY3RUd28gPSBteVByb2plY3RNZXRob2RzKHNhbXBsZVByb2plY3ROZXh0KTtcbiAgbmFtZVByb2plY3RTYW1wbGVUd28gPSBzYW1wbGVQcm9qZWN0VHdvLmdldFByb2plY3ROYW1lKCk7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgc2FtcGxlUHJvamVjdFR3by5hZGRUYXNrKFxuICAgIFwiUmVhZCBhIGdyZWF0IGJvb2tcIixcbiAgICBkYXRlVGFza1RocmVlLFxuICAgIFwiSElHSFwiLFxuICAgIFwiVGhpcyBpcyBhIGNvbW1lbnQuXCJcbiAgKTtcbn1cblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgJiYgc3RhdGVVc2VyID09IG51bGwpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0MlwiLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0VHdvKSk7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgbmFtZVByb2plY3RTYW1wbGVPbmUgPSBzYW1wbGVQcm9qZWN0T25lLmdldFByb2plY3ROYW1lKCk7XG4gIG5hbWVQcm9qZWN0U2FtcGxlVHdvID0gc2FtcGxlUHJvamVjdFR3by5nZXRQcm9qZWN0TmFtZSgpO1xuXG4gIGNyZWF0ZUVsZW1lbnRTYW1wbGVPbmUgPSBlbGVtZW50UHJvamVjdChcbiAgICBuYW1lUHJvamVjdFNhbXBsZU9uZSxcbiAgICBzYW1wbGVQcm9qZWN0T25lXG4gICk7XG5cbiAgY3JlYXRlRWxlbWVudFNhbXBsZVR3byA9IGVsZW1lbnRQcm9qZWN0KFxuICAgIG5hbWVQcm9qZWN0U2FtcGxlVHdvLFxuICAgIHNhbXBsZVByb2plY3RUd29cbiAgKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vXG4vLy9cbi8vXG5cbi8vIENyZWF0ZSBhbmQgYWRkIGRvbSBlbGVtZW50c1xuXG5mdW5jdGlvbiBteUhlYWRlcigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyUGFnZVwiKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiVE8gRE8gTElTVFwiO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG15SGVhZGVyKCkpO1xuXG5jb25zdCBjb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW4uY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuLy8gTGVmdCBTaWRlXG5cbmNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoXCJsZWZ0U2VjdGlvblwiKTtcbmxlZnRTaWRlLmFwcGVuZENoaWxkKHJlbmRlclByb2plY3RzKCkpO1xuXG5jb250YWluLmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcblxuLy8gUmlnaHQgc2lkZVxuXG5jb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJyaWdodFNlY3Rpb25cIik7XG5cbi8vIFBhcmVudCB0YXNrIGVsZW1lbnRcbmNvbnN0IG15VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubXlUYXNrcy5jbGFzc0xpc3QuYWRkKFwidGFza3NcIik7XG5teVRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlUYXNrc0lEXCIpO1xuXG5jb25zdCBteVRhc2tzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbm15VGFza3NUaXRsZS5pbm5lclRleHQgPSBcIlRBU0tTXCI7XG5teVRhc2tzVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrc1RpdGxlXCIpO1xuXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmFkZFRhc2suY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIik7XG5hZGRUYXNrLmlubmVyVGV4dCA9IFwiK1wiO1xuXG5hZGRUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkU3RhcnRUYXNrQnV0dG9uXCIpO1xuYWRkVGFzay5pbm5lclRleHQgPSBcIitcIjtcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xpY2tBZGRUYXNrKCk7XG59KTtcbmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0FkZFRhc2spO1xuXG5yaWdodFNpZGUuYXBwZW5kQ2hpbGQobXlUYXNrcyk7XG5teVRhc2tzLmFwcGVuZENoaWxkKG15VGFza3NUaXRsZSk7XG5teVRhc2tzLmFwcGVuZENoaWxkKGFkZFRhc2spO1xubXlUYXNrcy5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSgpKTtcbm15VGFza3MuYXBwZW5kQ2hpbGQoZWRpdFRhc2tGb3JtKCkpO1xuXG4vLyBDaGlsZCB0YXNrIGVsZW1lbnQgKHRhc2sgY29udGFpbmVyKVxuY29uc3QgaG9tZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaG9tZVRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJGaXJzdFwiKTtcbmhvbWVUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0NvbnRhaW5lcklkXCIpO1xuXG5teVRhc2tzLmFwcGVuZENoaWxkKGhvbWVUYXNrQ29udGFpbmVyKTtcblxuLy8gU3VtIGl0IHVwXG5jb250YWluLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW4pO1xuXG4vL1xuY29uc3QgbGlzdE9mUHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RQcm9qZWN0c1wiKTtcblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgLy8gSXMgaXQgdGhlIGZpcnN0IHRpbWUgd2UgcnVuIHRoZSBhcHBsaWNhdGlvbj9cblxuICBpZiAoc3RhdGVVc2VyICE9PSBudWxsKSB7XG4gICAgLy8gVXBkYXRlIHRoZSB2YWx1ZVxuICAgIGxldCBteUxvY2FsUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsUHJvamVjdHNcIik7XG4gICAgbGV0IG9iamVjdExvY2FsUHJvamVjdHMgPSBKU09OLnBhcnNlKG15TG9jYWxQcm9qZWN0cyk7XG5cbiAgICBsZXQgbnVtYmVyTG9jYWxQcm9qZWN0cyA9IG9iamVjdExvY2FsUHJvamVjdHMuYWxsUHJvamVjdHMubGVuZ3RoO1xuXG4gICAgaWYgKG51bWJlckxvY2FsUHJvamVjdHMgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlckxvY2FsUHJvamVjdHM7IGkrKykge1xuICAgICAgICBsZXQgcHJvamVjdElkID0gb2JqZWN0TG9jYWxQcm9qZWN0cy5hbGxQcm9qZWN0c1tpXTtcbiAgICAgICAgbGV0IG15UHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RJZCk7XG4gICAgICAgIGxldCBteVByb2plY3RQYXJzZWQgPSBKU09OLnBhcnNlKG15UHJvamVjdCk7XG5cbiAgICAgICAgbGV0IHByb2plY3RPYmplY3QgPSBteVByb2plY3RNZXRob2RzKG15UHJvamVjdFBhcnNlZCk7XG4gICAgICAgIGxldCBuYW1lUHJvamVjdCA9IHByb2plY3RPYmplY3QuZ2V0UHJvamVjdE5hbWUoKTtcblxuICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGVsZW1lbnRQcm9qZWN0KG5hbWVQcm9qZWN0LCBwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRmlyc3QgdGltZSB1c2VyXG4gIGlmIChzdGF0ZVVzZXIgPT0gbnVsbCkge1xuICAgIHN0YXRlVXNlciA9IFwiZGVmYXVsdFwiO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdGVBcHBsaWNhdGlvblwiLCBzdGF0ZVVzZXIpO1xuICAgIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRTYW1wbGVPbmUpO1xuICAgIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRTYW1wbGVUd28pO1xuICAgIHNob3dUYXNrcyhzYW1wbGVQcm9qZWN0T25lKTtcbiAgfVxufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFNhbXBsZU9uZSk7XG4gIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRTYW1wbGVUd28pO1xuICBzaG93VGFza3Moc2FtcGxlUHJvamVjdE9uZSk7XG59XG5cbi8vIFdoYXQgaGFwcGVucyB3aGVuIHlvdSByZWZyZXNoIHRoZSBwYWdlXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBsZXQgYWN0aXZlUHJvamVjdE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIik7XG5cbiAgaWYgKGFjdGl2ZVByb2plY3ROYW1lICE9PSBudWxsICYmIGFjdGl2ZVByb2plY3ROYW1lICE9PSBcImp1c3REZWxldGVkXCIpIHtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFjdGl2ZVByb2plY3ROYW1lKTtcblxuICAgIC8vIFRvIHVzZSB0aGUgb2JqZWN0J3MgbWV0aG9kc1xuICAgIGxldCBwYXJzZWRBY3RpdmUgPSBKU09OLnBhcnNlKGFjdGl2ZVByb2plY3QpO1xuICAgIGxldCBhY3RpdmVQcm9qZWN0T2JqZWN0ID0gbXlQcm9qZWN0TWV0aG9kcyhwYXJzZWRBY3RpdmUpO1xuXG4gICAgc2V0QWN0aXZlUHJvamVjdChhY3RpdmVQcm9qZWN0T2JqZWN0KTtcbiAgICBsZXQgYWN0aXZlUHJvamVjdFRhc2tzID0gYWN0aXZlUHJvamVjdE9iamVjdC5nZXRUYXNrTGlzdCgpO1xuXG4gICAgaWYgKFxuICAgICAgYWN0aXZlUHJvamVjdCAhPT0gbnVsbCAmJlxuICAgICAgYWN0aXZlUHJvamVjdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBhY3RpdmVQcm9qZWN0VGFza3MgIT09IHt9ICYmXG4gICAgICBhY3RpdmVQcm9qZWN0TmFtZSAhPT0gXCJqdXN0RGVsZXRlZFwiXG4gICAgKSB7XG4gICAgICBzaG93VGFza3MoYWN0aXZlUHJvamVjdE9iamVjdCk7XG4gICAgfVxuICB9XG59XG5cbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xpY2tBZGRUYXNrKGFjdGl2ZVByb2plY3QpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=