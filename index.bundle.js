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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* We need the \"bdo:-moz-has-dir-attr\" bit because \"bdo\" has lower\n    specificity than the \":-moz-has-dir-attr\" selector above. */\nbdo,\nbdo:-moz-has-dir-attr {\n    unicode-bidi: isolate-override;\n}\n\ntextarea:-moz-dir-attr-like-auto,\npre:-moz-dir-attr-like-auto {\n    unicode-bidi: plaintext;\n}\n\n/* blocks */\n\narticle,\naside,\ndetails,\ndiv,\ndt,\nfigcaption,\nfooter,\nform,\nheader,\nhgroup,\nhtml,\nmain,\nnav,\nsearch,\nsection,\nsummary {\n    display: block;\n}\n\nbody {\n    display: block;\n    margin: 0\n}\n\np,\ndl,\nmulticol {\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\ndd {\n    display: block;\n    margin-inline-start: 40px;\n}\n\nblockquote,\nfigure {\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 40px;\n    margin-inline-end: 40px;\n}\n\naddress {\n    display: block;\n    font-style: italic;\n}\n\ncenter {\n    display: block;\n    text-align: -moz-center;\n}\n\nh1 {\n    display: block;\n    font-size: 2em;\n    font-weight: bold;\n    margin-block-start: .67em;\n    margin-block-end: .67em;\n}\n\nh2,\n:is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-block-start: .83em;\n    margin-block-end: .83em;\n}\n\nh3,\n:is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.17em;\n    font-weight: bold;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\nh4,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.00em;\n    font-weight: bold;\n    margin-block-start: 1.33em;\n    margin-block-end: 1.33em;\n}\n\nh5,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 0.83em;\n    font-weight: bold;\n    margin-block-start: 1.67em;\n    margin-block-end: 1.67em;\n}\n\nh6,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 0.67em;\n    font-weight: bold;\n    margin-block-start: 2.33em;\n    margin-block-end: 2.33em;\n}\n\nlisting {\n    display: block;\n    font-family: -moz-fixed;\n    font-size: medium;\n    white-space: pre;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\nxmp,\npre,\nplaintext {\n    display: block;\n    font-family: -moz-fixed;\n    white-space: pre;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\n/* tables */\n\ntable {\n    display: table;\n    border-spacing: 2px;\n    border-collapse: separate;\n    /* XXXldb do we want this if we're border-collapse:collapse ? */\n    box-sizing: border-box;\n    text-indent: 0;\n}\n\ntable[align=\"left\"] {\n    float: left;\n}\n\ntable[align=\"right\"] {\n    float: right;\n    text-align: start;\n}\n\n\n/* border collapse rules */\n\n/* Set hidden if we have 'frame' or 'rules' attribute.\n      Set it on all sides when we do so there's more consistency\n      in what authors should expect */\n\n/* Put this first so 'border' and 'frame' rules can override it. */\ntable[rules] {\n    border-width: thin;\n    border-style: hidden;\n}\n\n/* 'border' before 'frame' so 'frame' overrides\n       A border with a given value should, of course, pass that value\n       as the border-width in pixels -> attr mapping */\n\n/* :-moz-table-border-nonzero is like [border]:not([border=\"0\"]) except it\n      also checks for other zero-like values according to HTML attribute\n      parsing rules */\ntable:-moz-table-border-nonzero {\n    border-width: thin;\n    border-style: outset;\n}\n\ntable[frame] {\n    border: thin hidden;\n}\n\n/* specificity must beat table:-moz-table-border-nonzero rule above */\ntable[frame=\"void\"] {\n    border-style: hidden;\n}\n\ntable[frame=\"above\"] {\n    border-style: outset hidden hidden hidden;\n}\n\ntable[frame=\"below\"] {\n    border-style: hidden hidden outset hidden;\n}\n\ntable[frame=\"lhs\"] {\n    border-style: hidden hidden hidden outset;\n}\n\ntable[frame=\"rhs\"] {\n    border-style: hidden outset hidden hidden;\n}\n\ntable[frame=\"hsides\"] {\n    border-style: outset hidden;\n}\n\ntable[frame=\"vsides\"] {\n    border-style: hidden outset;\n}\n\ntable[frame=\"box\"],\ntable[frame=\"border\"] {\n    border-style: outset;\n}\n\n\n/* Internal Table Borders */\n\n/* 'border' cell borders first */\n\ntable:-moz-table-border-nonzero>*>tr>td,\ntable:-moz-table-border-nonzero>*>tr>th,\ntable:-moz-table-border-nonzero>*>td,\ntable:-moz-table-border-nonzero>*>th,\ntable:-moz-table-border-nonzero>td,\ntable:-moz-table-border-nonzero>th {\n    border-width: thin;\n    border-style: inset;\n}\n\n/* collapse only if rules are really specified */\ntable[rules]:not([rules=\"none\"], [rules=\"\"]) {\n    border-collapse: collapse;\n}\n\n/* only specified rules override 'border' settings\n   (increased specificity to achieve this) */\ntable[rules]:not([rules=\"\"])>tr>td,\ntable[rules]:not([rules=\"\"])>*>tr>td,\ntable[rules]:not([rules=\"\"])>tr>th,\ntable[rules]:not([rules=\"\"])>*>tr>th,\ntable[rules]:not([rules=\"\"])>td,\ntable[rules]:not([rules=\"\"])>th {\n    border-width: thin;\n    border-style: none;\n}\n\n\ntable[rules][rules=\"none\"]>tr>td,\ntable[rules][rules=\"none\"]>*>tr>td,\ntable[rules][rules=\"none\"]>tr>th,\ntable[rules][rules=\"none\"]>*>tr>th,\ntable[rules][rules=\"none\"]>td,\ntable[rules][rules=\"none\"]>th {\n    border-width: thin;\n    border-style: none;\n}\n\ntable[rules][rules=\"all\"]>tr>td,\ntable[rules][rules=\"all\"]>*>tr>td,\ntable[rules][rules=\"all\"]>tr>th,\ntable[rules][rules=\"all\"]>*>tr>th,\ntable[rules][rules=\"all\"]>td,\ntable[rules][rules=\"all\"]>th {\n    border-width: thin;\n    border-style: solid;\n}\n\ntable[rules][rules=\"rows\"]>tr,\ntable[rules][rules=\"rows\"]>*>tr {\n    border-block-start-width: thin;\n    border-block-end-width: thin;\n    border-block-start-style: solid;\n    border-block-end-style: solid;\n}\n\n\ntable[rules][rules=\"cols\"]>tr>td,\ntable[rules][rules=\"cols\"]>*>tr>td,\ntable[rules][rules=\"cols\"]>tr>th,\ntable[rules][rules=\"cols\"]>*>tr>th {\n    border-inline-start-width: thin;\n    border-inline-end-width: thin;\n    border-inline-start-style: solid;\n    border-inline-end-style: solid;\n}\n\ntable[rules][rules=\"groups\"]>colgroup {\n    border-inline-start-width: thin;\n    border-inline-end-width: thin;\n    border-inline-start-style: solid;\n    border-inline-end-style: solid;\n}\n\ntable[rules][rules=\"groups\"]>tfoot,\ntable[rules][rules=\"groups\"]>thead,\ntable[rules][rules=\"groups\"]>tbody {\n    border-block-start-width: thin;\n    border-block-end-width: thin;\n    border-block-start-style: solid;\n    border-block-end-style: solid;\n}\n\n\n/* caption inherits from table not table-outer */\ncaption {\n    display: table-caption;\n    text-align: center;\n}\n\ntable[align=\"center\"]>caption {\n    margin-inline-start: auto;\n    margin-inline-end: auto;\n}\n\ntable[align=\"center\"]>caption[align=\"left\"]:dir(ltr) {\n    margin-inline-end: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"left\"]:dir(rtl) {\n    margin-inline-start: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"right\"]:dir(ltr) {\n    margin-inline-start: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"right\"]:dir(rtl) {\n    margin-inline-end: 0;\n}\n\ntr {\n    display: table-row;\n    vertical-align: inherit;\n}\n\ncol {\n    display: table-column;\n}\n\ncolgroup {\n    display: table-column-group;\n}\n\ntbody {\n    display: table-row-group;\n    vertical-align: middle;\n}\n\nthead {\n    display: table-header-group;\n    vertical-align: middle;\n}\n\ntfoot {\n    display: table-footer-group;\n    vertical-align: middle;\n}\n\n/* for XHTML tables without tbody */\ntable>tr {\n    vertical-align: middle;\n}\n\ntd {\n    display: table-cell;\n    vertical-align: inherit;\n    text-align: unset;\n    padding: 1px;\n}\n\nth {\n    display: table-cell;\n    vertical-align: inherit;\n    font-weight: bold;\n    padding: 1px;\n    text-align: -moz-center-or-inherit;\n}\n\n:is(tr, tbody, thead, tfoot, table)>form:-moz-is-html {\n    /* Important: don't show these forms in HTML */\n    display: none !important;\n}\n\ntable[bordercolor]>tbody,\ntable[bordercolor]>thead,\ntable[bordercolor]>tfoot,\ntable[bordercolor]>col,\ntable[bordercolor]>colgroup,\ntable[bordercolor]>tr,\ntable[bordercolor]>*>tr,\ntable[bordercolor]>tr>td,\ntable[bordercolor]>*>tr>td,\ntable[bordercolor]>tr>th,\ntable[bordercolor]>*>tr>th {\n    border-color: inherit;\n}\n\n/* inlines */\n\nq:before {\n    content: open-quote;\n}\n\nq:after {\n    content: close-quote;\n}\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\ni,\ncite,\nem,\nvar,\ndfn {\n    font-style: italic;\n}\n\ntt,\ncode,\nkbd,\nsamp {\n    font-family: -moz-fixed;\n}\n\nu,\nins {\n    text-decoration: underline;\n}\n\ns,\nstrike,\ndel {\n    text-decoration: line-through;\n}\n\nbig {\n    font-size: larger;\n}\n\nsmall {\n    font-size: smaller;\n}\n\nsub {\n    vertical-align: sub;\n    font-size: smaller;\n}\n\nsup {\n    vertical-align: super;\n    font-size: smaller;\n}\n\nnobr {\n    white-space: nowrap;\n}\n\nmark {\n    background: Mark;\n    color: MarkText;\n}\n\n/* titles */\nabbr[title],\nacronym[title] {\n    text-decoration: dotted underline;\n}\n\n/* lists */\n\nul,\nmenu,\ndir {\n    display: block;\n    list-style-type: disc;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    padding-inline-start: 40px;\n}\n\nul,\nol,\nmenu {\n    counter-reset: list-item;\n}\n\nol {\n    display: block;\n    list-style-type: decimal;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    padding-inline-start: 40px;\n}\n\nli {\n    display: list-item;\n    text-align: match-parent;\n}\n\n/* nested lists have no top/bottom margins */\n:is(ul, ol, dir, menu, dl) ul,\n:is(ul, ol, dir, menu, dl) ol,\n:is(ul, ol, dir, menu, dl) dir,\n:is(ul, ol, dir, menu, dl) menu,\n:is(ul, ol, dir, menu, dl) dl {\n    margin-block-start: 0;\n    margin-block-end: 0;\n}\n\n/* 2 deep unordered lists use a circle */\n:is(ol, ul, menu, dir) ul,\n:is(ol, ul, menu, dir) menu,\n:is(ol, ul, menu, dir) dir {\n    list-style-type: circle;\n}\n\n/* 3 deep (or more) unordered lists use a square */\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {\n    list-style-type: square;\n}\n\n\n/* leafs */\n\n/* <hr> noshade and color attributes are handled completely by\n  * HTMLHRElement::MapAttributesIntoRule.\n  * https://html.spec.whatwg.org/#the-hr-element-2\n  */\nhr {\n    color: gray;\n    border-width: 1px;\n    border-style: inset;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n    margin-inline-start: auto;\n    margin-inline-end: auto;\n    overflow: hidden;\n\n    /* FIXME: This is not really per spec */\n    display: block;\n}\n\nhr[size=\"1\"] {\n    border-style: solid none none none;\n}\n\n/* Note that we only intend for the alt content to show up if the image is\n  * broken. But non-broken images/inputs will have a replaced box, and thus we\n  * won't we don't generate the pseudo-element anyways. This prevents\n  * unnecessary reframing when images become broken / non-broken. */\ninput[type=image]::before,\nimg::before {\n    content: -moz-alt-content !important;\n    unicode-bidi: isolate;\n}\n\nimg[usemap],\nobject[usemap] {\n    color: blue;\n}\n\nframeset {\n    display: block ! important;\n    overflow: clip;\n    position: static ! important;\n    float: none ! important;\n    border: none ! important;\n}\n\nframe {\n    border-radius: 0 ! important;\n}\n\niframe {\n    border: 2px inset;\n}\n\nspacer {\n    position: static ! important;\n    float: none ! important;\n}\n\ncanvas {\n    user-select: none;\n}\n\niframe:focus-visible,\nbody:focus-visible,\nhtml:focus-visible {\n    /* These elements historically don't show outlines when focused by default.\n    * We could consider changing that if needed. */\n    outline-style: none;\n}\n\n/* hidden elements: https://html.spec.whatwg.org/#hidden-elements\n  *\n  * Exceptions:\n  *\n  *  * area declaration needs to be !important, see below / bug 135040.  That's\n  *    hacky and broken.\n  *\n  *  * [hidden] is implemented as a presentation attribute to avoid a global\n  *    selector in a UA sheet.\n  */\nbase,\nbasefont,\ndatalist,\nhead,\nlink,\nmeta,\nnoembed,\nnoframes,\nparam,\nrp,\nscript,\nstyle,\ntemplate,\ntitle {\n    display: none;\n}\n\narea {\n    /* Don't give it frames other than its imageframe */\n    display: none ! important;\n}\n\niframe:fullscreen {\n    /* iframes in full-screen mode don't show a border. */\n    border: none !important;\n    padding: unset !important;\n}\n\n/* Details and summary\n  * https://html.spec.whatwg.org/#the-details-and-summary-elements\n  *\n  * Note that these rules need to be duplicated in details.css for the anonymous\n  * summary, which wouldn't match otherwise.\n  *\n  * The spec here says something different, see\n  * https://github.com/whatwg/html/issues/8610\n  */\ndetails>summary:first-of-type {\n    display: list-item;\n    counter-increment: list-item 0;\n    list-style: disclosure-closed inside;\n}\n\ndetails[open]>summary:first-of-type {\n    list-style-type: disclosure-open;\n}\n\n/* media elements */\nvideo {\n    object-fit: contain;\n}\n\nvideo>img:-moz-native-anonymous {\n    /* Video poster images should render with the video element's \"object-fit\" &\n      \"object-position\" properties */\n    object-fit: inherit !important;\n    object-position: inherit !important;\n}\n\naudio:not([controls]) {\n    display: none !important;\n}\n\naudio[controls] {\n    /* This ensures that intrinsic sizing can reliably shrinkwrap our\n       controls (which are also always horizontal) and produce a\n       reasonable intrinsic size from them. */\n    writing-mode: horizontal-tb !important;\n}\n\n*|*::-moz-html-canvas-content {\n    display: block !important;\n    /* we want to be an absolute and fixed container */\n    transform: translate(0) !important;\n}\n\nvideo>.caption-box {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n/**\n  * The pseudo element won't inherit CSS styles from its direct parent, `::cue`\n  * would actually inherit styles from video because it's video's pseudo element.\n  * Therefore, we have to explicitly set some styles which are already defined\n  * in its parent element in vtt.jsm.\n  */\n::cue {\n    color: rgba(255, 255, 255, 1);\n    white-space: pre-line;\n    background-color: rgba(0, 0, 0, 0.8);\n    font: 10px sans-serif;\n    font-size: var(--cue-font-size);\n    writing-mode: var(--cue-writing-mode, inherit);\n    overflow-wrap: break-word;\n    /* TODO : enable unicode-bidi, right now enable it would cause incorrect\n             display direction, maybe related with bug 1558431. */\n}\n\n/* <dialog> element styles */\n\ndialog {\n    position: absolute;\n    display: block;\n    inset-inline-start: 0;\n    inset-inline-end: 0;\n    margin: auto;\n    border-width: initial;\n    border-style: solid;\n    border-color: initial;\n    border-image: initial;\n    padding: 1em;\n    background-color: Canvas;\n    color: CanvasText;\n    width: -moz-fit-content;\n    height: -moz-fit-content;\n}\n\ndialog:not([open]) {\n    display: none;\n}\n\ndialog:modal {\n    -moz-top-layer: top !important;\n    position: fixed;\n    overflow: auto;\n    visibility: visible;\n    inset-block-start: 0;\n    inset-block-end: 0;\n    max-width: calc(100% - 6px - 2em);\n    max-height: calc(100% - 6px - 2em);\n}\n\n/* https://html.spec.whatwg.org/#flow-content-3 */\ndialog::backdrop {\n    background: rgba(0, 0, 0, 0.1);\n}\n\nmarquee {\n    inline-size: -moz-available;\n    display: inline-block;\n    vertical-align: text-bottom;\n    text-align: start;\n}\n\nmarquee:is([direction=\"up\"], [direction=\"down\"]) {\n    block-size: 200px;\n}\n\n/* Ruby */\n\nruby {\n    display: ruby;\n}\n\nrb {\n    display: ruby-base;\n    white-space: nowrap;\n}\n\nrt {\n    display: ruby-text;\n}\n\nrtc {\n    display: ruby-text-container;\n}\n\nrtc,\nrt {\n    white-space: nowrap;\n    font-size: 50%;\n    -moz-min-font-size-ratio: 50%;\n    line-height: 1;\n}\n\n@media not (-moz-platform: windows) {\n\n    rtc,\n    rt {\n        /* The widely-used Windows font Meiryo doesn't work fine with this\n     * setting, so disable this on Windows. We should re-enable it once\n     * Microsoft fixes this issue. See bug 1164279. */\n        font-variant-east-asian: ruby;\n    }\n}\n\nrtc,\nrt {\n    text-emphasis: none;\n}\n\nrtc:lang(zh),\nrt:lang(zh) {\n    ruby-align: center;\n}\n\nrtc:lang(zh-TW),\nrt:lang(zh-TW) {\n    font-size: 30%;\n    /* bopomofo */\n    -moz-min-font-size-ratio: 30%;\n}\n\nrtc>rt {\n    font-size: unset;\n}\n\nruby,\nrb,\nrt,\nrtc {\n    unicode-bidi: isolate;\n}\n\n/* Shadow DOM v1\n  * https://drafts.csswg.org/css-scoping/#slots-in-shadow-tree */\nslot {\n    display: contents;\n}\n\n/* Un-invert images and videos for users using inverted colors.\n  * \"User agents must add the following rule to their UA style sheet\"\n  * https://www.w3.org/TR/mediaqueries-5/#inverted\n  */\n@media (inverted-colors) {\n\n    img:not(picture > img),\n    picture,\n    video {\n        filter: invert(100%);\n    }\n}\n\n/* Hide noscript elements if scripting is enabled */\n@media (scripting) {\n    noscript {\n        display: none !important;\n    }\n}\n\n@media print {\n\n    input,\n    textarea,\n    select,\n    button,\n    details {\n        -moz-user-input: none !important;\n        pointer-events: none !important;\n    }\n}\n\n/* Popover UA style, https://html.spec.whatwg.org/#flow-content-3 */\n/* stylelint-disable-next-line media-query-no-invalid */\n@media (-moz-bool-pref: \"dom.element.popover.enabled\") {\n    [popover]:not(:popover-open):not(dialog[open]) {\n        display: none;\n    }\n\n    dialog:popover-open {\n        display: block;\n    }\n\n    [popover] {\n        position: fixed;\n        inset: 0;\n        width: fit-content;\n        height: fit-content;\n        margin: auto;\n        border: solid;\n        padding: 0.25em;\n        overflow: auto;\n        color: CanvasText;\n        background-color: Canvas;\n    }\n\n    :popover-open {\n        -moz-top-layer: top;\n    }\n\n    :popover-open::backdrop {\n        position: fixed;\n        inset: 0;\n        pointer-events: none !important;\n        background-color: transparent;\n    }\n}\n\n\n\n\n\n\nbody {\n    background-color: bisque;\n\n\n}\n\n.headerPage {\n    background-color: rgba(23, 250, 61, 0.799);\n    height: 1.2rem;\n    /* font-size: 2rem; */\n    /* padding: 0.2rem 0; */\n    text-align: center;\n\n}\n\n\n.container {\n    display: grid;\n    grid-template-columns: [first] 35% [second] 65% [end];\n    padding: 0;\n    height: 633px;\n    background-color: blue;\n}\n\n\n\n.leftSection {\n    background-color: brown;\n\n}\n\n.rightSection {\n\n    background-color: blueviolet;\n}\n\n\n.projects {\n    margin: 5rem auto;\n    width: 60%;\n    text-align: center;\n    background-color: rgba(233, 150, 122, 0.28);\n    padding: 5px 3px 15px 3px;\n    border-radius: 15px;\n    position: relative;\n}\n\n\n\n#projectsHeader {\n    background-color: rgba(0, 0, 255, 0.756);\n    padding: 6px;\n    margin: 15px;\n    margin-bottom: 1.5rem;\n    border-radius: 9px;\n}\n\n#projectsTitle {\n    display: inline-block;\n    margin: 3px;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    font-size: large;\n    font-weight: bolder;\n    letter-spacing: .2rem;\n\n}\n\n#startProjectButton {\n    float: right;\n    margin: 5px;\n    background-color: rgba(255, 255, 255, 0.212);\n    font-size: 10px;\n    border-radius: 90%;\n}\n\n\n#startProjectButton:hover {\n    background-color: rgba(0, 0, 255, 0.894);\n}\n\n#inputProject {\n    width: 80%;\n    margin: 10px 0 5px 0;\n}\n\n\n.tasksUnit {\n    background-color: rgb(238, 244, 129);\n    padding: 1rem;\n}\n\n.titleTask {\n    border-radius: 5px;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: large;\n    padding: 4px;\n    background-color: rgb(255, 237, 192);\n}\n\n.taskDatePriority {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n\n.taskDate {\n    font-size: medium;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.taskPriority {\n    padding: 5px;\n    border: solid black 1px;\n    font-size: small;\n}\n\n\n\n\n.taskUnitImportant {\n    background-color: rgb(181, 238, 132);\n}\n\n.taskUnitUrgent {\n    background-color: rgb(21, 255, 0);\n}\n\n\n\n.projectsUnit {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    place-items: center;\n\n}\n\n.buttonProjects,\n.activeProject {\n    grid-column: 2 / span 5;\n    place-self: stretch;\n    margin: 8px;\n    padding: 8px;\n}\n\n.buttonProjects {\n    background-color: cyan;\n}\n\n.buttonProjects:hover {\n    background-color: rgb(26, 207, 207);\n}\n\n\n\n\n\n.removeProjects {\n    grid-column: 7 / 8;\n    background-color: red;\n    border-radius: 50%;\n    display: inline-block;\n\n}\n\n.activeProject {\n    background-color: #007204;\n    color: white;\n}\n\n.activeProject:hover {\n    background-color: rgb(6, 208, 30);\n}\n\n\n\n#listProjects {\n    text-align: center;\n}\n\n\n.hideRemoveButton {\n    display: none;\n}\n\n\n\n\n#addProjectDiv {\n    background-color: rgb(151, 151, 222);\n    display: none;\n    position: absolute;\n    left: 1rem;\n    top: 1rem;\n}\n\n/* right side */\n\n.tasks {\n    margin: 5rem auto;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    letter-spacing: .2rem;\n    width: 70%;\n    padding-top: 5px;\n    text-align: center;\n    background-color: rgb(246, 74, 16);\n}\n\n#tasksTitle {\n    margin: 3px;\n    font-size: large;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-weight: bold;\n    display: inline-block;\n}\n\n.addTask {\n    float: right;\n    margin: 5px;\n    background-color: rgba(255, 255, 255, 0.416);\n}\n\n\n.addTask:hover {\n    background-color: rgba(77, 248, 64, 0.414);\n}\n\n\n.taskContainerFirst {\n    display: flex;\n    clear: right;\n    flex-direction: column;\n    background-color: cadetblue;\n    padding: 5px;\n    justify-content: space-between;\n\n}\n\n.taskContainerFirst>div {\n    margin: 5px;\n\n}\n\n\n#editTaskDiv {\n    display: none;\n    position: absolute;\n    left: 40%;\n\n    min-width: 380px;\n    background-color: darkseagreen\n}\n\n#addTaskDiv {\n    padding: 5px;\n    background-color: yellow;\n    display: none;\n\n    position: absolute;\n    left: 45%;\n    top: 4rem;\n    min-width: 400px;\n}\n\n#editTaskForm {\n    margin: 8px;\n}\n\n#addTaskForm {\n    background-color: goldenrod;\n    margin: 8px;\n    padding: 7px;\n}\n\nlabel[for=\"newTask\"] {\n    display: block;\n    color: black;\n    margin: 0.4rem 0 1.4rem 0;\n}\n\n#addProjectForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: goldenrod;\n    text-align: center;\n    margin: 3px;\n    padding: 5px;\n    min-width: 400px;\n}\n\n#labelProject {\n    margin: .4rem 1.5rem;\n}\n\n#buttonProjectForm {\n    margin: 1rem;\n    padding: 4px;\n    background-color: rgb(233, 199, 113)\n}\n\n#buttonProjectForm:hover {\n    background-color: rgb(247, 206, 103)\n}\n\n\nspan {\n    margin: 5px 30px;\n}\n\n\n\n.labelPriority {\n    /* display: ; */\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n\n\n\nlabel[for=\"textAreaTask\"] {\n    padding: 0;\n    display: block;\n}\n\n#dateDiv,\n#priorityDiv,\n#notesDiv {\n    margin: 10px;\n}\n\n#priority {\n    padding: 0;\n    margin: 0;\n}\n\n.myNotes {\n    max-width: 100%;\n    background-color: rgb(240, 80, 255);\n    padding: 0.6rem;\n    margin: 5px;\n    text-align: justify;\n}\n\n.taskSettings {\n    margin: 1rem auto 0.5rem auto;\n}\n\n.taskSettings>button {\n    margin: 5px;\n    padding: 3px;\n    background-color: rgba(0, 0, 255, 0.071);\n    border-radius: 5px;\n}\n\n.taskSettings>button:hover {\n    background-color: #04AA6D;\n    color: white;\n}\n\n\n\n.taskSettings>.removeTask:hover {\n    background-color: rgb(214, 12, 12);\n    color: white;\n}\n\n\n\n.taskCompleted {\n    text-decoration: line-through;\n    background-color: crimson;\n}\n\n.taskCompleted button {\n    background-color: crimson;\n}\n\n.taskCompleted .buttonEditTask {\n    display: none;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxXQUFXLG9CQUFvQixXQUFXLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLGFBQWEsT0FBTyxRQUFRLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFFBQVEsT0FBTyxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFlBQVksYUFBYSxRQUFRLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGVBQWUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sU0FBUyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sVUFBVSxNQUFNLFlBQVksT0FBTyxXQUFXLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLFFBQVEsWUFBWSxPQUFPLFlBQVksUUFBUSxZQUFZLFFBQVEsV0FBVyxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sS0FBSyxPQUFPLGFBQWEsT0FBTyxhQUFhLEtBQUssa0JBQWtCLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sU0FBUyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLE1BQU0sTUFBTSxPQUFPLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxLQUFLLE1BQU0sT0FBTyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFNBQVMsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxXQUFXLEtBQUssY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksU0FBUyxLQUFLLGFBQWEsT0FBTyxNQUFNLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcs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QjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLE1BQU0sdURBQVM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtEQUFZLENBQUMsdURBQWE7QUFDNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RhdGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzRG9tLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogV2UgbmVlZCB0aGUgXCJiZG86LW1vei1oYXMtZGlyLWF0dHJcIiBiaXQgYmVjYXVzZSBcImJkb1wiIGhhcyBsb3dlclxuICAgIHNwZWNpZmljaXR5IHRoYW4gdGhlIFwiOi1tb3otaGFzLWRpci1hdHRyXCIgc2VsZWN0b3IgYWJvdmUuICovXG5iZG8sXG5iZG86LW1vei1oYXMtZGlyLWF0dHIge1xuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZS1vdmVycmlkZTtcbn1cblxudGV4dGFyZWE6LW1vei1kaXItYXR0ci1saWtlLWF1dG8sXG5wcmU6LW1vei1kaXItYXR0ci1saWtlLWF1dG8ge1xuICAgIHVuaWNvZGUtYmlkaTogcGxhaW50ZXh0O1xufVxuXG4vKiBibG9ja3MgKi9cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmRpdixcbmR0LFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmZvcm0sXG5oZWFkZXIsXG5oZ3JvdXAsXG5odG1sLFxubWFpbixcbm5hdixcbnNlYXJjaCxcbnNlY3Rpb24sXG5zdW1tYXJ5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwXG59XG5cbnAsXG5kbCxcbm11bHRpY29sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG59XG5cbmRkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA0MHB4O1xufVxuXG5ibG9ja3F1b3RlLFxuZmlndXJlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNDBweDtcbn1cblxuYWRkcmVzcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xufVxuXG5oMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuNjdlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAuNjdlbTtcbn1cblxuaDIsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuODNlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAuODNlbTtcbn1cblxuaDMsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuMTdlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG59XG5cbmg0LFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS4wMGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS4zM2VtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEuMzNlbTtcbn1cblxuaDUsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC44M2VtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS42N2VtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEuNjdlbTtcbn1cblxuaDYsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuNjdlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIuMzNlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAyLjMzZW07XG59XG5cbmxpc3Rpbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG54bXAsXG5wcmUsXG5wbGFpbnRleHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG4vKiB0YWJsZXMgKi9cblxudGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAvKiBYWFhsZGIgZG8gd2Ugd2FudCB0aGlzIGlmIHdlJ3JlIGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZSA/ICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWluZGVudDogMDtcbn1cblxudGFibGVbYWxpZ249XCJsZWZ0XCJdIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxudGFibGVbYWxpZ249XCJyaWdodFwiXSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG5cbi8qIGJvcmRlciBjb2xsYXBzZSBydWxlcyAqL1xuXG4vKiBTZXQgaGlkZGVuIGlmIHdlIGhhdmUgJ2ZyYW1lJyBvciAncnVsZXMnIGF0dHJpYnV0ZS5cbiAgICAgIFNldCBpdCBvbiBhbGwgc2lkZXMgd2hlbiB3ZSBkbyBzbyB0aGVyZSdzIG1vcmUgY29uc2lzdGVuY3lcbiAgICAgIGluIHdoYXQgYXV0aG9ycyBzaG91bGQgZXhwZWN0ICovXG5cbi8qIFB1dCB0aGlzIGZpcnN0IHNvICdib3JkZXInIGFuZCAnZnJhbWUnIHJ1bGVzIGNhbiBvdmVycmlkZSBpdC4gKi9cbnRhYmxlW3J1bGVzXSB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xufVxuXG4vKiAnYm9yZGVyJyBiZWZvcmUgJ2ZyYW1lJyBzbyAnZnJhbWUnIG92ZXJyaWRlc1xuICAgICAgIEEgYm9yZGVyIHdpdGggYSBnaXZlbiB2YWx1ZSBzaG91bGQsIG9mIGNvdXJzZSwgcGFzcyB0aGF0IHZhbHVlXG4gICAgICAgYXMgdGhlIGJvcmRlci13aWR0aCBpbiBwaXhlbHMgLT4gYXR0ciBtYXBwaW5nICovXG5cbi8qIDotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIGlzIGxpa2UgW2JvcmRlcl06bm90KFtib3JkZXI9XCIwXCJdKSBleGNlcHQgaXRcbiAgICAgIGFsc28gY2hlY2tzIGZvciBvdGhlciB6ZXJvLWxpa2UgdmFsdWVzIGFjY29yZGluZyB0byBIVE1MIGF0dHJpYnV0ZVxuICAgICAgcGFyc2luZyBydWxlcyAqL1xudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xufVxuXG50YWJsZVtmcmFtZV0ge1xuICAgIGJvcmRlcjogdGhpbiBoaWRkZW47XG59XG5cbi8qIHNwZWNpZmljaXR5IG11c3QgYmVhdCB0YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIHJ1bGUgYWJvdmUgKi9cbnRhYmxlW2ZyYW1lPVwidm9pZFwiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwiYWJvdmVcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0IGhpZGRlbiBoaWRkZW4gaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cImJlbG93XCJdIHtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBoaWRkZW4gb3V0c2V0IGhpZGRlbjtcbn1cblxudGFibGVbZnJhbWU9XCJsaHNcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIGhpZGRlbiBoaWRkZW4gb3V0c2V0O1xufVxuXG50YWJsZVtmcmFtZT1cInJoc1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gb3V0c2V0IGhpZGRlbiBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwiaHNpZGVzXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldCBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwidnNpZGVzXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBvdXRzZXQ7XG59XG5cbnRhYmxlW2ZyYW1lPVwiYm94XCJdLFxudGFibGVbZnJhbWU9XCJib3JkZXJcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xufVxuXG5cbi8qIEludGVybmFsIFRhYmxlIEJvcmRlcnMgKi9cblxuLyogJ2JvcmRlcicgY2VsbCBib3JkZXJzIGZpcnN0ICovXG5cbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50cj50ZCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50cj50aCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50ZCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50aCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+dGQsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbn1cblxuLyogY29sbGFwc2Ugb25seSBpZiBydWxlcyBhcmUgcmVhbGx5IHNwZWNpZmllZCAqL1xudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJub25lXCJdLCBbcnVsZXM9XCJcIl0pIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4vKiBvbmx5IHNwZWNpZmllZCBydWxlcyBvdmVycmlkZSAnYm9yZGVyJyBzZXR0aW5nc1xuICAgKGluY3JlYXNlZCBzcGVjaWZpY2l0eSB0byBhY2hpZXZlIHRoaXMpICovXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+dHI+dGQsXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+Kj50cj50ZCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT50cj50aCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT4qPnRyPnRoLFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPnRkLFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPio+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT4qPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT50ZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+dGgge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT50cj50ZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT4qPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPio+dHI+dGgsXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+dGgge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJyb3dzXCJdPnRyLFxudGFibGVbcnVsZXNdW3J1bGVzPVwicm93c1wiXT4qPnRyIHtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ibG9jay1lbmQtc3R5bGU6IHNvbGlkO1xufVxuXG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImNvbHNcIl0+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJjb2xzXCJdPio+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJjb2xzXCJdPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiY29sc1wiXT4qPnRyPnRoIHtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPmNvbGdyb3VwIHtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPnRmb290LFxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPnRoZWFkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPnRib2R5IHtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ibG9jay1lbmQtc3R5bGU6IHNvbGlkO1xufVxuXG5cbi8qIGNhcHRpb24gaW5oZXJpdHMgZnJvbSB0YWJsZSBub3QgdGFibGUtb3V0ZXIgKi9cbmNhcHRpb24ge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwibGVmdFwiXTpkaXIobHRyKSB7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG59XG5cbnRhYmxlW2FsaWduPVwiY2VudGVyXCJdPmNhcHRpb25bYWxpZ249XCJsZWZ0XCJdOmRpcihydGwpIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwicmlnaHRcIl06ZGlyKGx0cikge1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG59XG5cbnRhYmxlW2FsaWduPVwiY2VudGVyXCJdPmNhcHRpb25bYWxpZ249XCJyaWdodFwiXTpkaXIocnRsKSB7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG59XG5cbnRyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XG59XG5cbmNvbCB7XG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uO1xufVxuXG5jb2xncm91cCB7XG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uLWdyb3VwO1xufVxuXG50Ym9keSB7XG4gICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnRoZWFkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudGZvb3Qge1xuICAgIGRpc3BsYXk6IHRhYmxlLWZvb3Rlci1ncm91cDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiBmb3IgWEhUTUwgdGFibGVzIHdpdGhvdXQgdGJvZHkgKi9cbnRhYmxlPnRyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG50ZCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcbiAgICB0ZXh0LWFsaWduOiB1bnNldDtcbiAgICBwYWRkaW5nOiAxcHg7XG59XG5cbnRoIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlci1vci1pbmhlcml0O1xufVxuXG46aXModHIsIHRib2R5LCB0aGVhZCwgdGZvb3QsIHRhYmxlKT5mb3JtOi1tb3otaXMtaHRtbCB7XG4gICAgLyogSW1wb3J0YW50OiBkb24ndCBzaG93IHRoZXNlIGZvcm1zIGluIEhUTUwgKi9cbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlW2JvcmRlcmNvbG9yXT50Ym9keSxcbnRhYmxlW2JvcmRlcmNvbG9yXT50aGVhZCxcbnRhYmxlW2JvcmRlcmNvbG9yXT50Zm9vdCxcbnRhYmxlW2JvcmRlcmNvbG9yXT5jb2wsXG50YWJsZVtib3JkZXJjb2xvcl0+Y29sZ3JvdXAsXG50YWJsZVtib3JkZXJjb2xvcl0+dHIsXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cixcbnRhYmxlW2JvcmRlcmNvbG9yXT50cj50ZCxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyPnRkLFxudGFibGVbYm9yZGVyY29sb3JdPnRyPnRoLFxudGFibGVbYm9yZGVyY29sb3JdPio+dHI+dGgge1xuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cblxuLyogaW5saW5lcyAqL1xuXG5xOmJlZm9yZSB7XG4gICAgY29udGVudDogb3Blbi1xdW90ZTtcbn1cblxucTphZnRlciB7XG4gICAgY29udGVudDogY2xvc2UtcXVvdGU7XG59XG5cbmIsXG5zdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmksXG5jaXRlLFxuZW0sXG52YXIsXG5kZm4ge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxudHQsXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gICAgZm9udC1mYW1pbHk6IC1tb3otZml4ZWQ7XG59XG5cbnUsXG5pbnMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5zLFxuc3RyaWtlLFxuZGVsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuYmlnIHtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuc21hbGwge1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuc3ViIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuc3VwIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG5ub2JyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5tYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiBNYXJrO1xuICAgIGNvbG9yOiBNYXJrVGV4dDtcbn1cblxuLyogdGl0bGVzICovXG5hYmJyW3RpdGxlXSxcbmFjcm9ueW1bdGl0bGVdIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGRvdHRlZCB1bmRlcmxpbmU7XG59XG5cbi8qIGxpc3RzICovXG5cbnVsLFxubWVudSxcbmRpciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcbn1cblxudWwsXG5vbCxcbm1lbnUge1xuICAgIGNvdW50ZXItcmVzZXQ6IGxpc3QtaXRlbTtcbn1cblxub2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG59XG5cbmxpIHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgdGV4dC1hbGlnbjogbWF0Y2gtcGFyZW50O1xufVxuXG4vKiBuZXN0ZWQgbGlzdHMgaGF2ZSBubyB0b3AvYm90dG9tIG1hcmdpbnMgKi9cbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIHVsLFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgb2wsXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSBkaXIsXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSBtZW51LFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGwge1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xufVxuXG4vKiAyIGRlZXAgdW5vcmRlcmVkIGxpc3RzIHVzZSBhIGNpcmNsZSAqL1xuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSB1bCxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgbWVudSxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgZGlyIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbn1cblxuLyogMyBkZWVwIChvciBtb3JlKSB1bm9yZGVyZWQgbGlzdHMgdXNlIGEgc3F1YXJlICovXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgdWwsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgbWVudSxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBkaXIge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xufVxuXG5cbi8qIGxlYWZzICovXG5cbi8qIDxocj4gbm9zaGFkZSBhbmQgY29sb3IgYXR0cmlidXRlcyBhcmUgaGFuZGxlZCBjb21wbGV0ZWx5IGJ5XG4gICogSFRNTEhSRWxlbWVudDo6TWFwQXR0cmlidXRlc0ludG9SdWxlLlxuICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RoZS1oci1lbGVtZW50LTJcbiAgKi9cbmhyIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC41ZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLyogRklYTUU6IFRoaXMgaXMgbm90IHJlYWxseSBwZXIgc3BlYyAqL1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ocltzaXplPVwiMVwiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lIG5vbmUgbm9uZTtcbn1cblxuLyogTm90ZSB0aGF0IHdlIG9ubHkgaW50ZW5kIGZvciB0aGUgYWx0IGNvbnRlbnQgdG8gc2hvdyB1cCBpZiB0aGUgaW1hZ2UgaXNcbiAgKiBicm9rZW4uIEJ1dCBub24tYnJva2VuIGltYWdlcy9pbnB1dHMgd2lsbCBoYXZlIGEgcmVwbGFjZWQgYm94LCBhbmQgdGh1cyB3ZVxuICAqIHdvbid0IHdlIGRvbid0IGdlbmVyYXRlIHRoZSBwc2V1ZG8tZWxlbWVudCBhbnl3YXlzLiBUaGlzIHByZXZlbnRzXG4gICogdW5uZWNlc3NhcnkgcmVmcmFtaW5nIHdoZW4gaW1hZ2VzIGJlY29tZSBicm9rZW4gLyBub24tYnJva2VuLiAqL1xuaW5wdXRbdHlwZT1pbWFnZV06OmJlZm9yZSxcbmltZzo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAtbW96LWFsdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgdW5pY29kZS1iaWRpOiBpc29sYXRlO1xufVxuXG5pbWdbdXNlbWFwXSxcbm9iamVjdFt1c2VtYXBdIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuZnJhbWVzZXQge1xuICAgIGRpc3BsYXk6IGJsb2NrICEgaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBjbGlwO1xuICAgIHBvc2l0aW9uOiBzdGF0aWMgISBpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IG5vbmUgISBpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICEgaW1wb3J0YW50O1xufVxuXG5mcmFtZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhIGltcG9ydGFudDtcbn1cblxuaWZyYW1lIHtcbiAgICBib3JkZXI6IDJweCBpbnNldDtcbn1cblxuc3BhY2VyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljICEgaW1wb3J0YW50O1xuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xufVxuXG5jYW52YXMge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5pZnJhbWU6Zm9jdXMtdmlzaWJsZSxcbmJvZHk6Zm9jdXMtdmlzaWJsZSxcbmh0bWw6Zm9jdXMtdmlzaWJsZSB7XG4gICAgLyogVGhlc2UgZWxlbWVudHMgaGlzdG9yaWNhbGx5IGRvbid0IHNob3cgb3V0bGluZXMgd2hlbiBmb2N1c2VkIGJ5IGRlZmF1bHQuXG4gICAgKiBXZSBjb3VsZCBjb25zaWRlciBjaGFuZ2luZyB0aGF0IGlmIG5lZWRlZC4gKi9cbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xufVxuXG4vKiBoaWRkZW4gZWxlbWVudHM6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2hpZGRlbi1lbGVtZW50c1xuICAqXG4gICogRXhjZXB0aW9uczpcbiAgKlxuICAqICAqIGFyZWEgZGVjbGFyYXRpb24gbmVlZHMgdG8gYmUgIWltcG9ydGFudCwgc2VlIGJlbG93IC8gYnVnIDEzNTA0MC4gIFRoYXQnc1xuICAqICAgIGhhY2t5IGFuZCBicm9rZW4uXG4gICpcbiAgKiAgKiBbaGlkZGVuXSBpcyBpbXBsZW1lbnRlZCBhcyBhIHByZXNlbnRhdGlvbiBhdHRyaWJ1dGUgdG8gYXZvaWQgYSBnbG9iYWxcbiAgKiAgICBzZWxlY3RvciBpbiBhIFVBIHNoZWV0LlxuICAqL1xuYmFzZSxcbmJhc2Vmb250LFxuZGF0YWxpc3QsXG5oZWFkLFxubGluayxcbm1ldGEsXG5ub2VtYmVkLFxubm9mcmFtZXMsXG5wYXJhbSxcbnJwLFxuc2NyaXB0LFxuc3R5bGUsXG50ZW1wbGF0ZSxcbnRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5hcmVhIHtcbiAgICAvKiBEb24ndCBnaXZlIGl0IGZyYW1lcyBvdGhlciB0aGFuIGl0cyBpbWFnZWZyYW1lICovXG4gICAgZGlzcGxheTogbm9uZSAhIGltcG9ydGFudDtcbn1cblxuaWZyYW1lOmZ1bGxzY3JlZW4ge1xuICAgIC8qIGlmcmFtZXMgaW4gZnVsbC1zY3JlZW4gbW9kZSBkb24ndCBzaG93IGEgYm9yZGVyLiAqL1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi8qIERldGFpbHMgYW5kIHN1bW1hcnlcbiAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtZGV0YWlscy1hbmQtc3VtbWFyeS1lbGVtZW50c1xuICAqXG4gICogTm90ZSB0aGF0IHRoZXNlIHJ1bGVzIG5lZWQgdG8gYmUgZHVwbGljYXRlZCBpbiBkZXRhaWxzLmNzcyBmb3IgdGhlIGFub255bW91c1xuICAqIHN1bW1hcnksIHdoaWNoIHdvdWxkbid0IG1hdGNoIG90aGVyd2lzZS5cbiAgKlxuICAqIFRoZSBzcGVjIGhlcmUgc2F5cyBzb21ldGhpbmcgZGlmZmVyZW50LCBzZWVcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzg2MTBcbiAgKi9cbmRldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlIHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtaXRlbSAwO1xuICAgIGxpc3Qtc3R5bGU6IGRpc2Nsb3N1cmUtY2xvc2VkIGluc2lkZTtcbn1cblxuZGV0YWlsc1tvcGVuXT5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzY2xvc3VyZS1vcGVuO1xufVxuXG4vKiBtZWRpYSBlbGVtZW50cyAqL1xudmlkZW8ge1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbnZpZGVvPmltZzotbW96LW5hdGl2ZS1hbm9ueW1vdXMge1xuICAgIC8qIFZpZGVvIHBvc3RlciBpbWFnZXMgc2hvdWxkIHJlbmRlciB3aXRoIHRoZSB2aWRlbyBlbGVtZW50J3MgXCJvYmplY3QtZml0XCIgJlxuICAgICAgXCJvYmplY3QtcG9zaXRpb25cIiBwcm9wZXJ0aWVzICovXG4gICAgb2JqZWN0LWZpdDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYXVkaW9bY29udHJvbHNdIHtcbiAgICAvKiBUaGlzIGVuc3VyZXMgdGhhdCBpbnRyaW5zaWMgc2l6aW5nIGNhbiByZWxpYWJseSBzaHJpbmt3cmFwIG91clxuICAgICAgIGNvbnRyb2xzICh3aGljaCBhcmUgYWxzbyBhbHdheXMgaG9yaXpvbnRhbCkgYW5kIHByb2R1Y2UgYVxuICAgICAgIHJlYXNvbmFibGUgaW50cmluc2ljIHNpemUgZnJvbSB0aGVtLiAqL1xuICAgIHdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50O1xufVxuXG4qfCo6Oi1tb3otaHRtbC1jYW52YXMtY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAvKiB3ZSB3YW50IHRvIGJlIGFuIGFic29sdXRlIGFuZCBmaXhlZCBjb250YWluZXIgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKSAhaW1wb3J0YW50O1xufVxuXG52aWRlbz4uY2FwdGlvbi1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qKlxuICAqIFRoZSBwc2V1ZG8gZWxlbWVudCB3b24ndCBpbmhlcml0IENTUyBzdHlsZXMgZnJvbSBpdHMgZGlyZWN0IHBhcmVudCwgXFxgOjpjdWVcXGBcbiAgKiB3b3VsZCBhY3R1YWxseSBpbmhlcml0IHN0eWxlcyBmcm9tIHZpZGVvIGJlY2F1c2UgaXQncyB2aWRlbydzIHBzZXVkbyBlbGVtZW50LlxuICAqIFRoZXJlZm9yZSwgd2UgaGF2ZSB0byBleHBsaWNpdGx5IHNldCBzb21lIHN0eWxlcyB3aGljaCBhcmUgYWxyZWFkeSBkZWZpbmVkXG4gICogaW4gaXRzIHBhcmVudCBlbGVtZW50IGluIHZ0dC5qc20uXG4gICovXG46OmN1ZSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiB2YXIoLS1jdWUtZm9udC1zaXplKTtcbiAgICB3cml0aW5nLW1vZGU6IHZhcigtLWN1ZS13cml0aW5nLW1vZGUsIGluaGVyaXQpO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgLyogVE9ETyA6IGVuYWJsZSB1bmljb2RlLWJpZGksIHJpZ2h0IG5vdyBlbmFibGUgaXQgd291bGQgY2F1c2UgaW5jb3JyZWN0XG4gICAgICAgICAgICAgZGlzcGxheSBkaXJlY3Rpb24sIG1heWJlIHJlbGF0ZWQgd2l0aCBidWcgMTU1ODQzMS4gKi9cbn1cblxuLyogPGRpYWxvZz4gZWxlbWVudCBzdHlsZXMgKi9cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAwO1xuICAgIGluc2V0LWlubGluZS1lbmQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci13aWR0aDogaW5pdGlhbDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogaW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IENhbnZhcztcbiAgICBjb2xvcjogQ2FudmFzVGV4dDtcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XG59XG5cbmRpYWxvZzpub3QoW29wZW5dKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuZGlhbG9nOm1vZGFsIHtcbiAgICAtbW96LXRvcC1sYXllcjogdG9wICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDA7XG4gICAgaW5zZXQtYmxvY2stZW5kOiAwO1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHggLSAyZW0pO1xufVxuXG4vKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNmbG93LWNvbnRlbnQtMyAqL1xuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5tYXJxdWVlIHtcbiAgICBpbmxpbmUtc2l6ZTogLW1vei1hdmFpbGFibGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxubWFycXVlZTppcyhbZGlyZWN0aW9uPVwidXBcIl0sIFtkaXJlY3Rpb249XCJkb3duXCJdKSB7XG4gICAgYmxvY2stc2l6ZTogMjAwcHg7XG59XG5cbi8qIFJ1YnkgKi9cblxucnVieSB7XG4gICAgZGlzcGxheTogcnVieTtcbn1cblxucmIge1xuICAgIGRpc3BsYXk6IHJ1YnktYmFzZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5ydCB7XG4gICAgZGlzcGxheTogcnVieS10ZXh0O1xufVxuXG5ydGMge1xuICAgIGRpc3BsYXk6IHJ1YnktdGV4dC1jb250YWluZXI7XG59XG5cbnJ0YyxcbnJ0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogNTAlO1xuICAgIC1tb3otbWluLWZvbnQtc2l6ZS1yYXRpbzogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5AbWVkaWEgbm90ICgtbW96LXBsYXRmb3JtOiB3aW5kb3dzKSB7XG5cbiAgICBydGMsXG4gICAgcnQge1xuICAgICAgICAvKiBUaGUgd2lkZWx5LXVzZWQgV2luZG93cyBmb250IE1laXJ5byBkb2Vzbid0IHdvcmsgZmluZSB3aXRoIHRoaXNcbiAgICAgKiBzZXR0aW5nLCBzbyBkaXNhYmxlIHRoaXMgb24gV2luZG93cy4gV2Ugc2hvdWxkIHJlLWVuYWJsZSBpdCBvbmNlXG4gICAgICogTWljcm9zb2Z0IGZpeGVzIHRoaXMgaXNzdWUuIFNlZSBidWcgMTE2NDI3OS4gKi9cbiAgICAgICAgZm9udC12YXJpYW50LWVhc3QtYXNpYW46IHJ1Ynk7XG4gICAgfVxufVxuXG5ydGMsXG5ydCB7XG4gICAgdGV4dC1lbXBoYXNpczogbm9uZTtcbn1cblxucnRjOmxhbmcoemgpLFxucnQ6bGFuZyh6aCkge1xuICAgIHJ1YnktYWxpZ246IGNlbnRlcjtcbn1cblxucnRjOmxhbmcoemgtVFcpLFxucnQ6bGFuZyh6aC1UVykge1xuICAgIGZvbnQtc2l6ZTogMzAlO1xuICAgIC8qIGJvcG9tb2ZvICovXG4gICAgLW1vei1taW4tZm9udC1zaXplLXJhdGlvOiAzMCU7XG59XG5cbnJ0Yz5ydCB7XG4gICAgZm9udC1zaXplOiB1bnNldDtcbn1cblxucnVieSxcbnJiLFxucnQsXG5ydGMge1xuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcbn1cblxuLyogU2hhZG93IERPTSB2MVxuICAqIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtc2NvcGluZy8jc2xvdHMtaW4tc2hhZG93LXRyZWUgKi9cbnNsb3Qge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4vKiBVbi1pbnZlcnQgaW1hZ2VzIGFuZCB2aWRlb3MgZm9yIHVzZXJzIHVzaW5nIGludmVydGVkIGNvbG9ycy5cbiAgKiBcIlVzZXIgYWdlbnRzIG11c3QgYWRkIHRoZSBmb2xsb3dpbmcgcnVsZSB0byB0aGVpciBVQSBzdHlsZSBzaGVldFwiXG4gICogaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy01LyNpbnZlcnRlZFxuICAqL1xuQG1lZGlhIChpbnZlcnRlZC1jb2xvcnMpIHtcblxuICAgIGltZzpub3QocGljdHVyZSA+IGltZyksXG4gICAgcGljdHVyZSxcbiAgICB2aWRlbyB7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgIH1cbn1cblxuLyogSGlkZSBub3NjcmlwdCBlbGVtZW50cyBpZiBzY3JpcHRpbmcgaXMgZW5hYmxlZCAqL1xuQG1lZGlhIChzY3JpcHRpbmcpIHtcbiAgICBub3NjcmlwdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBwcmludCB7XG5cbiAgICBpbnB1dCxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3QsXG4gICAgYnV0dG9uLFxuICAgIGRldGFpbHMge1xuICAgICAgICAtbW96LXVzZXItaW5wdXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi8qIFBvcG92ZXIgVUEgc3R5bGUsIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2Zsb3ctY29udGVudC0zICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWEtcXVlcnktbm8taW52YWxpZCAqL1xuQG1lZGlhICgtbW96LWJvb2wtcHJlZjogXCJkb20uZWxlbWVudC5wb3BvdmVyLmVuYWJsZWRcIikge1xuICAgIFtwb3BvdmVyXTpub3QoOnBvcG92ZXItb3Blbik6bm90KGRpYWxvZ1tvcGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIGRpYWxvZzpwb3BvdmVyLW9wZW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBbcG9wb3Zlcl0ge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgcGFkZGluZzogMC4yNWVtO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgY29sb3I6IENhbnZhc1RleHQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IENhbnZhcztcbiAgICB9XG5cbiAgICA6cG9wb3Zlci1vcGVuIHtcbiAgICAgICAgLW1vei10b3AtbGF5ZXI6IHRvcDtcbiAgICB9XG5cbiAgICA6cG9wb3Zlci1vcGVuOjpiYWNrZHJvcCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuXG5cblxuXG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcblxuXG59XG5cbi5oZWFkZXJQYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCAyNTAsIDYxLCAwLjc5OSk7XG4gICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgLyogZm9udC1zaXplOiAycmVtOyAqL1xuICAgIC8qIHBhZGRpbmc6IDAuMnJlbSAwOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbZmlyc3RdIDM1JSBbc2Vjb25kXSA2NSUgW2VuZF07XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDYzM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cblxuXG4ubGVmdFNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuXG59XG5cbi5yaWdodFNlY3Rpb24ge1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbn1cblxuXG4ucHJvamVjdHMge1xuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAxNTAsIDEyMiwgMC4yOCk7XG4gICAgcGFkZGluZzogNXB4IDNweCAxNXB4IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG5cbiNwcm9qZWN0c0hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNzU2KTtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG5cbiNwcm9qZWN0c1RpdGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcblxufVxuXG4jc3RhcnRQcm9qZWN0QnV0dG9uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxMik7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDkwJTtcbn1cblxuXG4jc3RhcnRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC44OTQpO1xufVxuXG4jaW5wdXRQcm9qZWN0IHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xufVxuXG5cbi50YXNrc1VuaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDI0NCwgMTI5KTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4udGl0bGVUYXNrIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjM3LCAxOTIpO1xufVxuXG4udGFza0RhdGVQcmlvcml0eSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4udGFza0RhdGUge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xufVxuXG4udGFza1ByaW9yaXR5IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuXG5cblxuLnRhc2tVbml0SW1wb3J0YW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgxLCAyMzgsIDEzMik7XG59XG5cbi50YXNrVW5pdFVyZ2VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCAyNTUsIDApO1xufVxuXG5cblxuLnByb2plY3RzVW5pdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmJ1dHRvblByb2plY3RzLFxuLmFjdGl2ZVByb2plY3Qge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA1O1xuICAgIHBsYWNlLXNlbGY6IHN0cmV0Y2g7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG4uYnV0dG9uUHJvamVjdHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XG59XG5cbi5idXR0b25Qcm9qZWN0czpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAyMDcsIDIwNyk7XG59XG5cblxuXG5cblxuLnJlbW92ZVByb2plY3RzIHtcbiAgICBncmlkLWNvbHVtbjogNyAvIDg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbn1cblxuLmFjdGl2ZVByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcyMDQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWN0aXZlUHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDIwOCwgMzApO1xufVxuXG5cblxuI2xpc3RQcm9qZWN0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5oaWRlUmVtb3ZlQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cblxuXG4jYWRkUHJvamVjdERpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTUxLCAyMjIpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDFyZW07XG4gICAgdG9wOiAxcmVtO1xufVxuXG4vKiByaWdodCBzaWRlICovXG5cbi50YXNrcyB7XG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDc0LCAxNik7XG59XG5cbiN0YXNrc1RpdGxlIHtcbiAgICBtYXJnaW46IDNweDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFkZFRhc2sge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE2KTtcbn1cblxuXG4uYWRkVGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgMjQ4LCA2NCwgMC40MTQpO1xufVxuXG5cbi50YXNrQ29udGFpbmVyRmlyc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY2xlYXI6IHJpZ2h0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbn1cblxuLnRhc2tDb250YWluZXJGaXJzdD5kaXYge1xuICAgIG1hcmdpbjogNXB4O1xuXG59XG5cblxuI2VkaXRUYXNrRGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0MCU7XG5cbiAgICBtaW4td2lkdGg6IDM4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlblxufVxuXG4jYWRkVGFza0RpdiB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1JTtcbiAgICB0b3A6IDRyZW07XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbn1cblxuI2VkaXRUYXNrRm9ybSB7XG4gICAgbWFyZ2luOiA4cHg7XG59XG5cbiNhZGRUYXNrRm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHBhZGRpbmc6IDdweDtcbn1cblxubGFiZWxbZm9yPVwibmV3VGFza1wiXSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjogMC40cmVtIDAgMS40cmVtIDA7XG59XG5cbiNhZGRQcm9qZWN0Rm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDNweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbn1cblxuI2xhYmVsUHJvamVjdCB7XG4gICAgbWFyZ2luOiAuNHJlbSAxLjVyZW07XG59XG5cbiNidXR0b25Qcm9qZWN0Rm9ybSB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAxOTksIDExMylcbn1cblxuI2J1dHRvblByb2plY3RGb3JtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMDYsIDEwMylcbn1cblxuXG5zcGFuIHtcbiAgICBtYXJnaW46IDVweCAzMHB4O1xufVxuXG5cblxuLmxhYmVsUHJpb3JpdHkge1xuICAgIC8qIGRpc3BsYXk6IDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuXG5sYWJlbFtmb3I9XCJ0ZXh0QXJlYVRhc2tcIl0ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNkYXRlRGl2LFxuI3ByaW9yaXR5RGl2LFxuI25vdGVzRGl2IHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbiNwcmlvcml0eSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5teU5vdGVzIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgODAsIDI1NSk7XG4gICAgcGFkZGluZzogMC42cmVtO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi50YXNrU2V0dGluZ3Mge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvIDAuNXJlbSBhdXRvO1xufVxuXG4udGFza1NldHRpbmdzPmJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjA3MSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGFza1NldHRpbmdzPmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG4udGFza1NldHRpbmdzPi5yZW1vdmVUYXNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAxMiwgMTIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cbi50YXNrQ29tcGxldGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xufVxuXG4udGFza0NvbXBsZXRlZCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XG59XG5cbi50YXNrQ29tcGxldGVkIC5idXR0b25FZGl0VGFzayB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7K0RBQytEO0FBQy9EOztJQUVJLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUEsV0FBVzs7QUFFWDs7Ozs7Ozs7Ozs7Ozs7OztJQWdCSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkO0FBQ0o7O0FBRUE7OztJQUdJLGNBQWM7SUFD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QUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFdlIG5lZWQgdGhlIFxcXCJiZG86LW1vei1oYXMtZGlyLWF0dHJcXFwiIGJpdCBiZWNhdXNlIFxcXCJiZG9cXFwiIGhhcyBsb3dlclxcbiAgICBzcGVjaWZpY2l0eSB0aGFuIHRoZSBcXFwiOi1tb3otaGFzLWRpci1hdHRyXFxcIiBzZWxlY3RvciBhYm92ZS4gKi9cXG5iZG8sXFxuYmRvOi1tb3otaGFzLWRpci1hdHRyIHtcXG4gICAgdW5pY29kZS1iaWRpOiBpc29sYXRlLW92ZXJyaWRlO1xcbn1cXG5cXG50ZXh0YXJlYTotbW96LWRpci1hdHRyLWxpa2UtYXV0byxcXG5wcmU6LW1vei1kaXItYXR0ci1saWtlLWF1dG8ge1xcbiAgICB1bmljb2RlLWJpZGk6IHBsYWludGV4dDtcXG59XFxuXFxuLyogYmxvY2tzICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmRpdixcXG5kdCxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5mb3JtLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxuaHRtbCxcXG5tYWluLFxcbm5hdixcXG5zZWFyY2gsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwXFxufVxcblxcbnAsXFxuZGwsXFxubXVsdGljb2wge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG59XFxuXFxuZGQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5maWd1cmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDQwcHg7XFxufVxcblxcbmFkZHJlc3Mge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuNjdlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjY3ZW07XFxufVxcblxcbmgyLFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuODNlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjgzZW07XFxufVxcblxcbmgzLFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxLjE3ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbn1cXG5cXG5oNCxcXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDEuMDBlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS4zM2VtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjMzZW07XFxufVxcblxcbmg1LFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDAuODNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS42N2VtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjY3ZW07XFxufVxcblxcbmg2LFxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAwLjY3ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIuMzNlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMi4zM2VtO1xcbn1cXG5cXG5saXN0aW5nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG59XFxuXFxueG1wLFxcbnByZSxcXG5wbGFpbnRleHQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1mYW1pbHk6IC1tb3otZml4ZWQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxufVxcblxcbi8qIHRhYmxlcyAqL1xcblxcbnRhYmxlIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICAgIC8qIFhYWGxkYiBkbyB3ZSB3YW50IHRoaXMgaWYgd2UncmUgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlID8gKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdGV4dC1pbmRlbnQ6IDA7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJsZWZ0XFxcIl0ge1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuXFxudGFibGVbYWxpZ249XFxcInJpZ2h0XFxcIl0ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5cXG4vKiBib3JkZXIgY29sbGFwc2UgcnVsZXMgKi9cXG5cXG4vKiBTZXQgaGlkZGVuIGlmIHdlIGhhdmUgJ2ZyYW1lJyBvciAncnVsZXMnIGF0dHJpYnV0ZS5cXG4gICAgICBTZXQgaXQgb24gYWxsIHNpZGVzIHdoZW4gd2UgZG8gc28gdGhlcmUncyBtb3JlIGNvbnNpc3RlbmN5XFxuICAgICAgaW4gd2hhdCBhdXRob3JzIHNob3VsZCBleHBlY3QgKi9cXG5cXG4vKiBQdXQgdGhpcyBmaXJzdCBzbyAnYm9yZGVyJyBhbmQgJ2ZyYW1lJyBydWxlcyBjYW4gb3ZlcnJpZGUgaXQuICovXFxudGFibGVbcnVsZXNdIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcXG59XFxuXFxuLyogJ2JvcmRlcicgYmVmb3JlICdmcmFtZScgc28gJ2ZyYW1lJyBvdmVycmlkZXNcXG4gICAgICAgQSBib3JkZXIgd2l0aCBhIGdpdmVuIHZhbHVlIHNob3VsZCwgb2YgY291cnNlLCBwYXNzIHRoYXQgdmFsdWVcXG4gICAgICAgYXMgdGhlIGJvcmRlci13aWR0aCBpbiBwaXhlbHMgLT4gYXR0ciBtYXBwaW5nICovXFxuXFxuLyogOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8gaXMgbGlrZSBbYm9yZGVyXTpub3QoW2JvcmRlcj1cXFwiMFxcXCJdKSBleGNlcHQgaXRcXG4gICAgICBhbHNvIGNoZWNrcyBmb3Igb3RoZXIgemVyby1saWtlIHZhbHVlcyBhY2NvcmRpbmcgdG8gSFRNTCBhdHRyaWJ1dGVcXG4gICAgICBwYXJzaW5nIHJ1bGVzICovXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XFxufVxcblxcbnRhYmxlW2ZyYW1lXSB7XFxuICAgIGJvcmRlcjogdGhpbiBoaWRkZW47XFxufVxcblxcbi8qIHNwZWNpZmljaXR5IG11c3QgYmVhdCB0YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIHJ1bGUgYWJvdmUgKi9cXG50YWJsZVtmcmFtZT1cXFwidm9pZFxcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJhYm92ZVxcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQgaGlkZGVuIGhpZGRlbiBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJiZWxvd1xcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gaGlkZGVuIG91dHNldCBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJsaHNcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIGhpZGRlbiBoaWRkZW4gb3V0c2V0O1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwicmhzXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBvdXRzZXQgaGlkZGVuIGhpZGRlbjtcXG59XFxuXFxudGFibGVbZnJhbWU9XFxcImhzaWRlc1xcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQgaGlkZGVuO1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwidnNpZGVzXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBvdXRzZXQ7XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJib3hcXFwiXSxcXG50YWJsZVtmcmFtZT1cXFwiYm9yZGVyXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcXG59XFxuXFxuXFxuLyogSW50ZXJuYWwgVGFibGUgQm9yZGVycyAqL1xcblxcbi8qICdib3JkZXInIGNlbGwgYm9yZGVycyBmaXJzdCAqL1xcblxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50cj50ZCxcXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dHI+dGgsXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz4qPnRkLFxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50aCxcXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPnRkLFxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+dGgge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxufVxcblxcbi8qIGNvbGxhcHNlIG9ubHkgaWYgcnVsZXMgYXJlIHJlYWxseSBzcGVjaWZpZWQgKi9cXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwibm9uZVxcXCJdLCBbcnVsZXM9XFxcIlxcXCJdKSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi8qIG9ubHkgc3BlY2lmaWVkIHJ1bGVzIG92ZXJyaWRlICdib3JkZXInIHNldHRpbmdzXFxuICAgKGluY3JlYXNlZCBzcGVjaWZpY2l0eSB0byBhY2hpZXZlIHRoaXMpICovXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT50cj50ZCxcXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPio+dHI+dGQsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT50cj50aCxcXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPio+dHI+dGgsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT50ZCxcXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cXFwiXFxcIl0pPnRoIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPio+dHI+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+dHI+dGgsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+Kj50cj50aCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT50aCB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+Kj50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPnRyPnRoLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+Kj50cj50aCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiYWxsXFxcIl0+dGgge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwicm93c1xcXCJdPnRyLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwicm93c1xcXCJdPio+dHIge1xcbiAgICBib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1ibG9jay1zdGFydC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1ibG9jay1lbmQtc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImNvbHNcXFwiXT50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImNvbHNcXFwiXT4qPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiY29sc1xcXCJdPnRyPnRoLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiY29sc1xcXCJdPio+dHI+dGgge1xcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1pbmxpbmUtZW5kLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJncm91cHNcXFwiXT5jb2xncm91cCB7XFxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWlubGluZS1lbmQtc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImdyb3Vwc1xcXCJdPnRmb290LFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiZ3JvdXBzXFxcIl0+dGhlYWQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJncm91cHNcXFwiXT50Ym9keSB7XFxuICAgIGJvcmRlci1ibG9jay1zdGFydC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWJsb2NrLWVuZC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWJsb2NrLWVuZC1zdHlsZTogc29saWQ7XFxufVxcblxcblxcbi8qIGNhcHRpb24gaW5oZXJpdHMgZnJvbSB0YWJsZSBub3QgdGFibGUtb3V0ZXIgKi9cXG5jYXB0aW9uIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2FwdGlvbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvbiB7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvblthbGlnbj1cXFwibGVmdFxcXCJdOmRpcihsdHIpIHtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJjZW50ZXJcXFwiXT5jYXB0aW9uW2FsaWduPVxcXCJsZWZ0XFxcIl06ZGlyKHJ0bCkge1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvblthbGlnbj1cXFwicmlnaHRcXFwiXTpkaXIobHRyKSB7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJjZW50ZXJcXFwiXT5jYXB0aW9uW2FsaWduPVxcXCJyaWdodFxcXCJdOmRpcihydGwpIHtcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XFxufVxcblxcbnRyIHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcXG59XFxuXFxuY29sIHtcXG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uO1xcbn1cXG5cXG5jb2xncm91cCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbi1ncm91cDtcXG59XFxuXFxudGJvZHkge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbnRoZWFkIHtcXG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50Zm9vdCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWZvb3Rlci1ncm91cDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyogZm9yIFhIVE1MIHRhYmxlcyB3aXRob3V0IHRib2R5ICovXFxudGFibGU+dHIge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50ZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiB1bnNldDtcXG4gICAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG50aCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlci1vci1pbmhlcml0O1xcbn1cXG5cXG46aXModHIsIHRib2R5LCB0aGVhZCwgdGZvb3QsIHRhYmxlKT5mb3JtOi1tb3otaXMtaHRtbCB7XFxuICAgIC8qIEltcG9ydGFudDogZG9uJ3Qgc2hvdyB0aGVzZSBmb3JtcyBpbiBIVE1MICovXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxudGFibGVbYm9yZGVyY29sb3JdPnRib2R5LFxcbnRhYmxlW2JvcmRlcmNvbG9yXT50aGVhZCxcXG50YWJsZVtib3JkZXJjb2xvcl0+dGZvb3QsXFxudGFibGVbYm9yZGVyY29sb3JdPmNvbCxcXG50YWJsZVtib3JkZXJjb2xvcl0+Y29sZ3JvdXAsXFxudGFibGVbYm9yZGVyY29sb3JdPnRyLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT50cj50ZCxcXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cj50ZCxcXG50YWJsZVtib3JkZXJjb2xvcl0+dHI+dGgsXFxudGFibGVbYm9yZGVyY29sb3JdPio+dHI+dGgge1xcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qIGlubGluZXMgKi9cXG5cXG5xOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IG9wZW4tcXVvdGU7XFxufVxcblxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBjbG9zZS1xdW90ZTtcXG59XFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5pLFxcbmNpdGUsXFxuZW0sXFxudmFyLFxcbmRmbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxudHQsXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xcbn1cXG5cXG51LFxcbmlucyB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5zLFxcbnN0cmlrZSxcXG5kZWwge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuYmlnIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG5zdWIge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxufVxcblxcbnN1cCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG5ub2JyIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxubWFyayB7XFxuICAgIGJhY2tncm91bmQ6IE1hcms7XFxuICAgIGNvbG9yOiBNYXJrVGV4dDtcXG59XFxuXFxuLyogdGl0bGVzICovXFxuYWJiclt0aXRsZV0sXFxuYWNyb255bVt0aXRsZV0ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGRvdHRlZCB1bmRlcmxpbmU7XFxufVxcblxcbi8qIGxpc3RzICovXFxuXFxudWwsXFxubWVudSxcXG5kaXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcXG59XFxuXFxudWwsXFxub2wsXFxubWVudSB7XFxuICAgIGNvdW50ZXItcmVzZXQ6IGxpc3QtaXRlbTtcXG59XFxuXFxub2wge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxuICAgIHRleHQtYWxpZ246IG1hdGNoLXBhcmVudDtcXG59XFxuXFxuLyogbmVzdGVkIGxpc3RzIGhhdmUgbm8gdG9wL2JvdHRvbSBtYXJnaW5zICovXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgdWwsXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgb2wsXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGlyLFxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIG1lbnUsXFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGwge1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcblxcbi8qIDIgZGVlcCB1bm9yZGVyZWQgbGlzdHMgdXNlIGEgY2lyY2xlICovXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSB1bCxcXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIG1lbnUsXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBkaXIge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXG59XFxuXFxuLyogMyBkZWVwIChvciBtb3JlKSB1bm9yZGVyZWQgbGlzdHMgdXNlIGEgc3F1YXJlICovXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSA6aXMob2wsIHVsLCBtZW51LCBkaXIpIHVsLFxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBtZW51LFxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBkaXIge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcXG59XFxuXFxuXFxuLyogbGVhZnMgKi9cXG5cXG4vKiA8aHI+IG5vc2hhZGUgYW5kIGNvbG9yIGF0dHJpYnV0ZXMgYXJlIGhhbmRsZWQgY29tcGxldGVseSBieVxcbiAgKiBIVE1MSFJFbGVtZW50OjpNYXBBdHRyaWJ1dGVzSW50b1J1bGUuXFxuICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RoZS1oci1lbGVtZW50LTJcXG4gICovXFxuaHIge1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDAuNWVtO1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgLyogRklYTUU6IFRoaXMgaXMgbm90IHJlYWxseSBwZXIgc3BlYyAqL1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaHJbc2l6ZT1cXFwiMVxcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lIG5vbmUgbm9uZTtcXG59XFxuXFxuLyogTm90ZSB0aGF0IHdlIG9ubHkgaW50ZW5kIGZvciB0aGUgYWx0IGNvbnRlbnQgdG8gc2hvdyB1cCBpZiB0aGUgaW1hZ2UgaXNcXG4gICogYnJva2VuLiBCdXQgbm9uLWJyb2tlbiBpbWFnZXMvaW5wdXRzIHdpbGwgaGF2ZSBhIHJlcGxhY2VkIGJveCwgYW5kIHRodXMgd2VcXG4gICogd29uJ3Qgd2UgZG9uJ3QgZ2VuZXJhdGUgdGhlIHBzZXVkby1lbGVtZW50IGFueXdheXMuIFRoaXMgcHJldmVudHNcXG4gICogdW5uZWNlc3NhcnkgcmVmcmFtaW5nIHdoZW4gaW1hZ2VzIGJlY29tZSBicm9rZW4gLyBub24tYnJva2VuLiAqL1xcbmlucHV0W3R5cGU9aW1hZ2VdOjpiZWZvcmUsXFxuaW1nOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAtbW96LWFsdC1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcXG59XFxuXFxuaW1nW3VzZW1hcF0sXFxub2JqZWN0W3VzZW1hcF0ge1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuZnJhbWVzZXQge1xcbiAgICBkaXNwbGF5OiBibG9jayAhIGltcG9ydGFudDtcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWMgISBpbXBvcnRhbnQ7XFxuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xcbiAgICBib3JkZXI6IG5vbmUgISBpbXBvcnRhbnQ7XFxufVxcblxcbmZyYW1lIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAhIGltcG9ydGFudDtcXG59XFxuXFxuaWZyYW1lIHtcXG4gICAgYm9yZGVyOiAycHggaW5zZXQ7XFxufVxcblxcbnNwYWNlciB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWMgISBpbXBvcnRhbnQ7XFxuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xcbn1cXG5cXG5jYW52YXMge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaWZyYW1lOmZvY3VzLXZpc2libGUsXFxuYm9keTpmb2N1cy12aXNpYmxlLFxcbmh0bWw6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIC8qIFRoZXNlIGVsZW1lbnRzIGhpc3RvcmljYWxseSBkb24ndCBzaG93IG91dGxpbmVzIHdoZW4gZm9jdXNlZCBieSBkZWZhdWx0LlxcbiAgICAqIFdlIGNvdWxkIGNvbnNpZGVyIGNoYW5naW5nIHRoYXQgaWYgbmVlZGVkLiAqL1xcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBoaWRkZW4gZWxlbWVudHM6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2hpZGRlbi1lbGVtZW50c1xcbiAgKlxcbiAgKiBFeGNlcHRpb25zOlxcbiAgKlxcbiAgKiAgKiBhcmVhIGRlY2xhcmF0aW9uIG5lZWRzIHRvIGJlICFpbXBvcnRhbnQsIHNlZSBiZWxvdyAvIGJ1ZyAxMzUwNDAuICBUaGF0J3NcXG4gICogICAgaGFja3kgYW5kIGJyb2tlbi5cXG4gICpcXG4gICogICogW2hpZGRlbl0gaXMgaW1wbGVtZW50ZWQgYXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIHRvIGF2b2lkIGEgZ2xvYmFsXFxuICAqICAgIHNlbGVjdG9yIGluIGEgVUEgc2hlZXQuXFxuICAqL1xcbmJhc2UsXFxuYmFzZWZvbnQsXFxuZGF0YWxpc3QsXFxuaGVhZCxcXG5saW5rLFxcbm1ldGEsXFxubm9lbWJlZCxcXG5ub2ZyYW1lcyxcXG5wYXJhbSxcXG5ycCxcXG5zY3JpcHQsXFxuc3R5bGUsXFxudGVtcGxhdGUsXFxudGl0bGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5hcmVhIHtcXG4gICAgLyogRG9uJ3QgZ2l2ZSBpdCBmcmFtZXMgb3RoZXIgdGhhbiBpdHMgaW1hZ2VmcmFtZSAqL1xcbiAgICBkaXNwbGF5OiBub25lICEgaW1wb3J0YW50O1xcbn1cXG5cXG5pZnJhbWU6ZnVsbHNjcmVlbiB7XFxuICAgIC8qIGlmcmFtZXMgaW4gZnVsbC1zY3JlZW4gbW9kZSBkb24ndCBzaG93IGEgYm9yZGVyLiAqL1xcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZzogdW5zZXQgIWltcG9ydGFudDtcXG59XFxuXFxuLyogRGV0YWlscyBhbmQgc3VtbWFyeVxcbiAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtZGV0YWlscy1hbmQtc3VtbWFyeS1lbGVtZW50c1xcbiAgKlxcbiAgKiBOb3RlIHRoYXQgdGhlc2UgcnVsZXMgbmVlZCB0byBiZSBkdXBsaWNhdGVkIGluIGRldGFpbHMuY3NzIGZvciB0aGUgYW5vbnltb3VzXFxuICAqIHN1bW1hcnksIHdoaWNoIHdvdWxkbid0IG1hdGNoIG90aGVyd2lzZS5cXG4gICpcXG4gICogVGhlIHNwZWMgaGVyZSBzYXlzIHNvbWV0aGluZyBkaWZmZXJlbnQsIHNlZVxcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzg2MTBcXG4gICovXFxuZGV0YWlscz5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LWl0ZW0gMDtcXG4gICAgbGlzdC1zdHlsZTogZGlzY2xvc3VyZS1jbG9zZWQgaW5zaWRlO1xcbn1cXG5cXG5kZXRhaWxzW29wZW5dPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzY2xvc3VyZS1vcGVuO1xcbn1cXG5cXG4vKiBtZWRpYSBlbGVtZW50cyAqL1xcbnZpZGVvIHtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxudmlkZW8+aW1nOi1tb3otbmF0aXZlLWFub255bW91cyB7XFxuICAgIC8qIFZpZGVvIHBvc3RlciBpbWFnZXMgc2hvdWxkIHJlbmRlciB3aXRoIHRoZSB2aWRlbyBlbGVtZW50J3MgXFxcIm9iamVjdC1maXRcXFwiICZcXG4gICAgICBcXFwib2JqZWN0LXBvc2l0aW9uXFxcIiBwcm9wZXJ0aWVzICovXFxuICAgIG9iamVjdC1maXQ6IGluaGVyaXQgIWltcG9ydGFudDtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYXVkaW9bY29udHJvbHNdIHtcXG4gICAgLyogVGhpcyBlbnN1cmVzIHRoYXQgaW50cmluc2ljIHNpemluZyBjYW4gcmVsaWFibHkgc2hyaW5rd3JhcCBvdXJcXG4gICAgICAgY29udHJvbHMgKHdoaWNoIGFyZSBhbHNvIGFsd2F5cyBob3Jpem9udGFsKSBhbmQgcHJvZHVjZSBhXFxuICAgICAgIHJlYXNvbmFibGUgaW50cmluc2ljIHNpemUgZnJvbSB0aGVtLiAqL1xcbiAgICB3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDtcXG59XFxuXFxuKnwqOjotbW96LWh0bWwtY2FudmFzLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICAvKiB3ZSB3YW50IHRvIGJlIGFuIGFic29sdXRlIGFuZCBmaXhlZCBjb250YWluZXIgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgIWltcG9ydGFudDtcXG59XFxuXFxudmlkZW8+LmNhcHRpb24tYm94IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKipcXG4gICogVGhlIHBzZXVkbyBlbGVtZW50IHdvbid0IGluaGVyaXQgQ1NTIHN0eWxlcyBmcm9tIGl0cyBkaXJlY3QgcGFyZW50LCBgOjpjdWVgXFxuICAqIHdvdWxkIGFjdHVhbGx5IGluaGVyaXQgc3R5bGVzIGZyb20gdmlkZW8gYmVjYXVzZSBpdCdzIHZpZGVvJ3MgcHNldWRvIGVsZW1lbnQuXFxuICAqIFRoZXJlZm9yZSwgd2UgaGF2ZSB0byBleHBsaWNpdGx5IHNldCBzb21lIHN0eWxlcyB3aGljaCBhcmUgYWxyZWFkeSBkZWZpbmVkXFxuICAqIGluIGl0cyBwYXJlbnQgZWxlbWVudCBpbiB2dHQuanNtLlxcbiAgKi9cXG46OmN1ZSB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IHZhcigtLWN1ZS1mb250LXNpemUpO1xcbiAgICB3cml0aW5nLW1vZGU6IHZhcigtLWN1ZS13cml0aW5nLW1vZGUsIGluaGVyaXQpO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICAvKiBUT0RPIDogZW5hYmxlIHVuaWNvZGUtYmlkaSwgcmlnaHQgbm93IGVuYWJsZSBpdCB3b3VsZCBjYXVzZSBpbmNvcnJlY3RcXG4gICAgICAgICAgICAgZGlzcGxheSBkaXJlY3Rpb24sIG1heWJlIHJlbGF0ZWQgd2l0aCBidWcgMTU1ODQzMS4gKi9cXG59XFxuXFxuLyogPGRpYWxvZz4gZWxlbWVudCBzdHlsZXMgKi9cXG5cXG5kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDA7XFxuICAgIGluc2V0LWlubGluZS1lbmQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyLXdpZHRoOiBpbml0aWFsO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGluaXRpYWw7XFxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXM7XFxuICAgIGNvbG9yOiBDYW52YXNUZXh0O1xcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbn1cXG5cXG5kaWFsb2c6bm90KFtvcGVuXSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaWFsb2c6bW9kYWwge1xcbiAgICAtbW96LXRvcC1sYXllcjogdG9wICFpbXBvcnRhbnQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwO1xcbiAgICBpbnNldC1ibG9jay1lbmQ6IDA7XFxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcXG59XFxuXFxuLyogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jZmxvdy1jb250ZW50LTMgKi9cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG5tYXJxdWVlIHtcXG4gICAgaW5saW5lLXNpemU6IC1tb3otYXZhaWxhYmxlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbm1hcnF1ZWU6aXMoW2RpcmVjdGlvbj1cXFwidXBcXFwiXSwgW2RpcmVjdGlvbj1cXFwiZG93blxcXCJdKSB7XFxuICAgIGJsb2NrLXNpemU6IDIwMHB4O1xcbn1cXG5cXG4vKiBSdWJ5ICovXFxuXFxucnVieSB7XFxuICAgIGRpc3BsYXk6IHJ1Ynk7XFxufVxcblxcbnJiIHtcXG4gICAgZGlzcGxheTogcnVieS1iYXNlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5ydCB7XFxuICAgIGRpc3BsYXk6IHJ1YnktdGV4dDtcXG59XFxuXFxucnRjIHtcXG4gICAgZGlzcGxheTogcnVieS10ZXh0LWNvbnRhaW5lcjtcXG59XFxuXFxucnRjLFxcbnJ0IHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxuICAgIC1tb3otbWluLWZvbnQtc2l6ZS1yYXRpbzogNTAlO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuQG1lZGlhIG5vdCAoLW1vei1wbGF0Zm9ybTogd2luZG93cykge1xcblxcbiAgICBydGMsXFxuICAgIHJ0IHtcXG4gICAgICAgIC8qIFRoZSB3aWRlbHktdXNlZCBXaW5kb3dzIGZvbnQgTWVpcnlvIGRvZXNuJ3Qgd29yayBmaW5lIHdpdGggdGhpc1xcbiAgICAgKiBzZXR0aW5nLCBzbyBkaXNhYmxlIHRoaXMgb24gV2luZG93cy4gV2Ugc2hvdWxkIHJlLWVuYWJsZSBpdCBvbmNlXFxuICAgICAqIE1pY3Jvc29mdCBmaXhlcyB0aGlzIGlzc3VlLiBTZWUgYnVnIDExNjQyNzkuICovXFxuICAgICAgICBmb250LXZhcmlhbnQtZWFzdC1hc2lhbjogcnVieTtcXG4gICAgfVxcbn1cXG5cXG5ydGMsXFxucnQge1xcbiAgICB0ZXh0LWVtcGhhc2lzOiBub25lO1xcbn1cXG5cXG5ydGM6bGFuZyh6aCksXFxucnQ6bGFuZyh6aCkge1xcbiAgICBydWJ5LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnJ0YzpsYW5nKHpoLVRXKSxcXG5ydDpsYW5nKHpoLVRXKSB7XFxuICAgIGZvbnQtc2l6ZTogMzAlO1xcbiAgICAvKiBib3BvbW9mbyAqL1xcbiAgICAtbW96LW1pbi1mb250LXNpemUtcmF0aW86IDMwJTtcXG59XFxuXFxucnRjPnJ0IHtcXG4gICAgZm9udC1zaXplOiB1bnNldDtcXG59XFxuXFxucnVieSxcXG5yYixcXG5ydCxcXG5ydGMge1xcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGU7XFxufVxcblxcbi8qIFNoYWRvdyBET00gdjFcXG4gICogaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy1zY29waW5nLyNzbG90cy1pbi1zaGFkb3ctdHJlZSAqL1xcbnNsb3Qge1xcbiAgICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuXFxuLyogVW4taW52ZXJ0IGltYWdlcyBhbmQgdmlkZW9zIGZvciB1c2VycyB1c2luZyBpbnZlcnRlZCBjb2xvcnMuXFxuICAqIFxcXCJVc2VyIGFnZW50cyBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIHJ1bGUgdG8gdGhlaXIgVUEgc3R5bGUgc2hlZXRcXFwiXFxuICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNS8jaW52ZXJ0ZWRcXG4gICovXFxuQG1lZGlhIChpbnZlcnRlZC1jb2xvcnMpIHtcXG5cXG4gICAgaW1nOm5vdChwaWN0dXJlID4gaW1nKSxcXG4gICAgcGljdHVyZSxcXG4gICAgdmlkZW8ge1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuICAgIH1cXG59XFxuXFxuLyogSGlkZSBub3NjcmlwdCBlbGVtZW50cyBpZiBzY3JpcHRpbmcgaXMgZW5hYmxlZCAqL1xcbkBtZWRpYSAoc2NyaXB0aW5nKSB7XFxuICAgIG5vc2NyaXB0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgcHJpbnQge1xcblxcbiAgICBpbnB1dCxcXG4gICAgdGV4dGFyZWEsXFxuICAgIHNlbGVjdCxcXG4gICAgYnV0dG9uLFxcbiAgICBkZXRhaWxzIHtcXG4gICAgICAgIC1tb3otdXNlci1pbnB1dDogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5cXG4vKiBQb3BvdmVyIFVBIHN0eWxlLCBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNmbG93LWNvbnRlbnQtMyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYS1xdWVyeS1uby1pbnZhbGlkICovXFxuQG1lZGlhICgtbW96LWJvb2wtcHJlZjogXFxcImRvbS5lbGVtZW50LnBvcG92ZXIuZW5hYmxlZFxcXCIpIHtcXG4gICAgW3BvcG92ZXJdOm5vdCg6cG9wb3Zlci1vcGVuKTpub3QoZGlhbG9nW29wZW5dKSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGRpYWxvZzpwb3BvdmVyLW9wZW4ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgW3BvcG92ZXJdIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGluc2V0OiAwO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGJvcmRlcjogc29saWQ7XFxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW07XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIGNvbG9yOiBDYW52YXNUZXh0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzO1xcbiAgICB9XFxuXFxuICAgIDpwb3BvdmVyLW9wZW4ge1xcbiAgICAgICAgLW1vei10b3AtbGF5ZXI6IHRvcDtcXG4gICAgfVxcblxcbiAgICA6cG9wb3Zlci1vcGVuOjpiYWNrZHJvcCB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBpbnNldDogMDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcblxcblxcbn1cXG5cXG4uaGVhZGVyUGFnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMsIDI1MCwgNjEsIDAuNzk5KTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cXG4gICAgLyogcGFkZGluZzogMC4ycmVtIDA7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2ZpcnN0XSAzNSUgW3NlY29uZF0gNjUlIFtlbmRdO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDYzM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG5cXG5cXG4ubGVmdFNlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG5cXG59XFxuXFxuLnJpZ2h0U2VjdGlvbiB7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcblxcbi5wcm9qZWN0cyB7XFxuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAxNTAsIDEyMiwgMC4yOCk7XFxuICAgIHBhZGRpbmc6IDVweCAzcHggMTVweCAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuXFxuI3Byb2plY3RzSGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNzU2KTtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbn1cXG5cXG4jcHJvamVjdHNUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XFxuXFxufVxcblxcbiNzdGFydFByb2plY3RCdXR0b24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEyKTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5MCU7XFxufVxcblxcblxcbiNzdGFydFByb2plY3RCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC44OTQpO1xcbn1cXG5cXG4jaW5wdXRQcm9qZWN0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XFxufVxcblxcblxcbi50YXNrc1VuaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyNDQsIDEyOSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50aXRsZVRhc2sge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzNywgMTkyKTtcXG59XFxuXFxuLnRhc2tEYXRlUHJpb3JpdHkge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4udGFza0RhdGUge1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50YXNrUHJpb3JpdHkge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG5cXG5cXG5cXG4udGFza1VuaXRJbXBvcnRhbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgxLCAyMzgsIDEzMik7XFxufVxcblxcbi50YXNrVW5pdFVyZ2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMjU1LCAwKTtcXG59XFxuXFxuXFxuXFxuLnByb2plY3RzVW5pdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5idXR0b25Qcm9qZWN0cyxcXG4uYWN0aXZlUHJvamVjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA1O1xcbiAgICBwbGFjZS1zZWxmOiBzdHJldGNoO1xcbiAgICBtYXJnaW46IDhweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uYnV0dG9uUHJvamVjdHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG4uYnV0dG9uUHJvamVjdHM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDIwNywgMjA3KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLnJlbW92ZVByb2plY3RzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDcgLyA4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbn1cXG5cXG4uYWN0aXZlUHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcyMDQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFjdGl2ZVByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgMjA4LCAzMCk7XFxufVxcblxcblxcblxcbiNsaXN0UHJvamVjdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5oaWRlUmVtb3ZlQnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuXFxuXFxuI2FkZFByb2plY3REaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAxNTEsIDIyMik7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgdG9wOiAxcmVtO1xcbn1cXG5cXG4vKiByaWdodCBzaWRlICovXFxuXFxuLnRhc2tzIHtcXG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDc0LCAxNik7XFxufVxcblxcbiN0YXNrc1RpdGxlIHtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uYWRkVGFzayB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTYpO1xcbn1cXG5cXG5cXG4uYWRkVGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDI0OCwgNjQsIDAuNDE0KTtcXG59XFxuXFxuXFxuLnRhc2tDb250YWluZXJGaXJzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNsZWFyOiByaWdodDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuLnRhc2tDb250YWluZXJGaXJzdD5kaXYge1xcbiAgICBtYXJnaW46IDVweDtcXG5cXG59XFxuXFxuXFxuI2VkaXRUYXNrRGl2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0MCU7XFxuXFxuICAgIG1pbi13aWR0aDogMzgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlblxcbn1cXG5cXG4jYWRkVGFza0RpdiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDQ1JTtcXG4gICAgdG9wOiA0cmVtO1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jZWRpdFRhc2tGb3JtIHtcXG4gICAgbWFyZ2luOiA4cHg7XFxufVxcblxcbiNhZGRUYXNrRm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJuZXdUYXNrXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDAuNHJlbSAwIDEuNHJlbSAwO1xcbn1cXG5cXG4jYWRkUHJvamVjdEZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbiNsYWJlbFByb2plY3Qge1xcbiAgICBtYXJnaW46IC40cmVtIDEuNXJlbTtcXG59XFxuXFxuI2J1dHRvblByb2plY3RGb3JtIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDE5OSwgMTEzKVxcbn1cXG5cXG4jYnV0dG9uUHJvamVjdEZvcm06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMDYsIDEwMylcXG59XFxuXFxuXFxuc3BhbiB7XFxuICAgIG1hcmdpbjogNXB4IDMwcHg7XFxufVxcblxcblxcblxcbi5sYWJlbFByaW9yaXR5IHtcXG4gICAgLyogZGlzcGxheTogOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuXFxubGFiZWxbZm9yPVxcXCJ0ZXh0QXJlYVRhc2tcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jZGF0ZURpdixcXG4jcHJpb3JpdHlEaXYsXFxuI25vdGVzRGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jcHJpb3JpdHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5teU5vdGVzIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCA4MCwgMjU1KTtcXG4gICAgcGFkZGluZzogMC42cmVtO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLnRhc2tTZXR0aW5ncyB7XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvIDAuNXJlbSBhdXRvO1xcbn1cXG5cXG4udGFza1NldHRpbmdzPmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjA3MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhc2tTZXR0aW5ncz5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcbi50YXNrU2V0dGluZ3M+LnJlbW92ZVRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAxMiwgMTIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcbi50YXNrQ29tcGxldGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi50YXNrQ29tcGxldGVkIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxufVxcblxcbi50YXNrQ29tcGxldGVkIC5idXR0b25FZGl0VGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xubGV0IG15WWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5sZXQgbXlNb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG5sZXQgbXlEYXkgPSB0b2RheS5nZXREYXRlKCk7XG5cbmxldCBkYXlGaXJzdFRhc2ssIG1vbnRoRmlyc3RUYXNrLCB5ZWFyRmlzdFRhc2s7XG5sZXQgZGF5U2Vjb25kVGFzaywgbW9udGhTZWNvbmRUYXNrLCB5ZWFyU2Vjb25kVGFzaztcbmxldCBkYXlUaGlyZFRhc2ssIG1vbnRoVGhpcmRUYXNrLCB5ZWFyVGhpcmRUYXNrO1xuXG5beWVhckZpc3RUYXNrLCB5ZWFyU2Vjb25kVGFzaywgeWVhclRoaXJkVGFza10gPSBbbXlZZWFyLCBteVllYXIsIG15WWVhcl07XG5cbmlmIChteURheSA8PSAxNSkge1xuICBkYXlGaXJzdFRhc2sgPSBteURheSArIDY7XG4gIGRheVNlY29uZFRhc2sgPSBteURheSArIDg7XG4gIGRheVRoaXJkVGFzayA9IG15RGF5ICsgNDtcbn0gZWxzZSB7XG4gIGRheUZpcnN0VGFzayA9IG15RGF5IC0gNjtcbiAgZGF5U2Vjb25kVGFzayA9IG15RGF5IC0gODtcbiAgZGF5VGhpcmRUYXNrID0gbXlEYXkgLSA0O1xufVxuXG5pZiAobXlNb250aCA8PSA3KSB7XG4gIG1vbnRoRmlyc3RUYXNrID0gbXlNb250aCArIDM7XG4gIG1vbnRoU2Vjb25kVGFzayA9IG15TW9udGggKyAxO1xuICBtb250aFRoaXJkVGFzayA9IG15TW9udGggKyAyO1xufSBlbHNlIGlmIChteU1vbnRoIDw9IDkpIHtcbiAgbW9udGhGaXJzdFRhc2sgPSBteU1vbnRoICsgMztcbiAgbW9udGhTZWNvbmRUYXNrID0gbXlNb250aCArIDE7XG4gIG1vbnRoVGhpcmRUYXNrID0gbXlNb250aCArIDI7XG59IGVsc2Uge1xuICBtb250aEZpcnN0VGFzayA9IDM7XG4gIHllYXJGaXN0VGFzayArPSAxO1xuICBtb250aFNlY29uZFRhc2sgPSAxO1xuICB5ZWFyU2Vjb25kVGFzayArPSAxO1xuICBtb250aFRoaXJkVGFzayA9IDI7XG4gIHllYXJUaGlyZFRhc2sgKz0gMTtcbn1cblxubGV0IGRhdGVUYXNrT25lID0gbW9udGhGaXJzdFRhc2sgKyBcIi9cIiArIGRheUZpcnN0VGFzayArIFwiL1wiICsgeWVhckZpc3RUYXNrO1xubGV0IGRhdGVUYXNrVHdvID0gbW9udGhTZWNvbmRUYXNrICsgXCIvXCIgKyBkYXlTZWNvbmRUYXNrICsgXCIvXCIgKyB5ZWFyU2Vjb25kVGFzaztcbmxldCBkYXRlVGFza1RocmVlID0gbW9udGhUaGlyZFRhc2sgKyBcIi9cIiArIGRheVRoaXJkVGFzayArIFwiL1wiICsgeWVhclRoaXJkVGFzaztcblxuZXhwb3J0IHsgZGF0ZVRhc2tPbmUsIGRhdGVUYXNrVHdvLCBkYXRlVGFza1RocmVlIH07XG4iLCJpbXBvcnQgeyBhY3RpdmVQcm9qZWN0LCBjaG9zZW5UYXNrLCBzaG93VGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgZ2V0Rm9ybURhdGFUYXNrIH0gZnJvbSBcIi4vdGFza0NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuZnVuY3Rpb24gc3VibWl0RWRpdFRhc2soKSB7XG4gIC8vIHJ1bnMgd2hlbiB0aGUgZm9ybSBpcyBzdWJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBFZGl0ZWQgZGF0YSAodGhlIGRhdGEgdGhhdCB3ZSBzdWJtaXQgYXMgY29ycmVjdGlvbnMpXG4gIGNvbnN0IGZvcm1FZGl0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRm9ybVwiKTtcbiAgY29uc3QgdGFza0RhdGFFZGl0ID0gZ2V0Rm9ybURhdGFUYXNrKGZvcm1FZGl0ZWQpO1xuICBpZiAodGFza0RhdGFFZGl0WzBdW1wiZGF0ZVwiXSAhPT0gXCJcIikge1xuICAgIGxldCBzZXREYXRlID0gbmV3IERhdGUodGFza0RhdGFFZGl0WzBdW1wiZGF0ZVwiXSk7XG4gICAgbGV0IG5ld0RheSA9IHNldERhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBuZXdNb250aCA9IHNldERhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgbGV0IG5ld1llYXIgPSBzZXREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG5ld0RhdGUgPSBuZXdNb250aCArIFwiIFwiICsgbmV3RGF5ICsgXCIgXCIgKyBuZXdZZWFyO1xuICAgIGNvbnNvbGUubG9nKFwidGFza1wiLCBuZXdEYXRlKTtcbiAgICB0YXNrRGF0YUVkaXRbMF1bXCJkYXRlXCJdID0gbmV3RGF0ZTtcbiAgfVxuXG4gIC8vIE1vZGlmeSB0aGUgZGF0YVxuICBhY3RpdmVQcm9qZWN0Lm1vZGlmeVRhc2soY2hvc2VuVGFzaywgdGFza0RhdGFFZGl0WzBdKTtcblxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGxldCBpZFByb2plY3QgPSBhY3RpdmVQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkUHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoYWN0aXZlUHJvamVjdCkpO1xuICB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0RpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHNob3dUYXNrcyhhY3RpdmVQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tGb3JtKCkge1xuICAvLyBUaGUgZm9ybSBpcyBhZGRlZCBpbiB0aGUgaW5kZXguanNcblxuICBjb25zdCBjb250YWluZXJFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyRWRpdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRUYXNrRGl2XCIpO1xuXG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgLy8gTmFtZSB0aGUgVGFza1xuICBjb25zdCBlbGVtZW50TmFtZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbiAgbGFiZWxUYXNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXRUYXNrXCIpO1xuXG4gIGNvbnN0IG5hbWVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lVGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRUYXNrXCIpO1xuICBuYW1lVGFzay52YWx1ZSA9IFwiTmFtZSB0aGUgdGFza1wiO1xuICBuYW1lVGFzay50eXBlID0gXCJ0ZXh0XCI7XG4gIG5hbWVUYXNrLm5hbWUgPSBcIm5hbWVcIjtcblxuICBlbGVtZW50TmFtZVRhc2suYXBwZW5kQ2hpbGQobGFiZWxUYXNrKTtcbiAgZWxlbWVudE5hbWVUYXNrLmFwcGVuZENoaWxkKG5hbWVUYXNrKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWVUYXNrKTtcblxuICAvLyBEdWUgRGF0ZVxuICBjb25zdCBlbGVtZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnREYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZURpdlwiKTtcblxuICBjb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsRGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZTogXCI7XG4gIGxhYmVsRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVEYXRlRWRpdFwiKTtcblxuICBjb25zdCBpbnB1dERhdGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dERhdGVUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZUVkaXRcIik7XG4gIGlucHV0RGF0ZVRhc2sudHlwZSA9IFwiZGF0ZVwiO1xuICBpbnB1dERhdGVUYXNrLm5hbWUgPSBcImRhdGVcIjtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWxEYXRlKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXREYXRlVGFzayk7XG5cbiAgZWxlbWVudERhdGUuYXBwZW5kQ2hpbGQobGFiZWxEYXRlKTtcbiAgZWxlbWVudERhdGUuYXBwZW5kQ2hpbGQoaW5wdXREYXRlVGFzayk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVsZW1lbnREYXRlKTtcblxuICAvLyBQcmlvcml0eVxuXG4gIGNvbnN0IHByaW9yaXR5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5RGl2RWRpdFwiKTtcblxuICBjb25zdCBwcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gIHByaW9yaXR5VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eUVkaXRcIik7XG5cbiAgLy8gSElHSFxuICBjb25zdCBpbnB1dFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWdoUHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhJR0hcIik7XG5cbiAgaW5wdXRQcmlvcml0eUhpZ2gudHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eUhpZ2gubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eUhpZ2gudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcbiAgbGFiZWxQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5RWRpdFwiKTtcbiAgbGFiZWxQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaGlnaFByaW9yaXR5RWRpdFwiKTtcblxuICAvLyBNRURJVU1cbiAgY29uc3QgaW5wdXRQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVkaXVtUHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTUVESVVNXCIpO1xuXG4gIGlucHV0UHJpb3JpdHlNZWRpdW0udHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1FRElVTVwiO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eUVkaXRcIik7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVkaXVtUHJpb3JpdHlFZGl0XCIpO1xuXG4gIC8vIExPV1xuICBjb25zdCBpbnB1dFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb3dQcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMT1dcIik7XG5cbiAgaW5wdXRQcmlvcml0eUxvdy50eXBlID0gXCJyYWRpb1wiO1xuICBpbnB1dFByaW9yaXR5TG93Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eUxvdy50ZXh0Q29udGVudCA9IFwiTE9XXCI7XG4gIGxhYmVsUHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5RWRpdFwiKTtcbiAgbGFiZWxQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb3dQcmlvcml0eUVkaXRcIik7XG5cbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xuXG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5SGlnaCk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5SGlnaCk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5TWVkaXVtKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eUxvdyk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5TG93KTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlFbGVtZW50KTtcblxuICAvLyBOb3Rlc1xuXG4gIGNvbnN0IG5vdGVzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGVzRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVzRGl2XCIpO1xuXG4gIGNvbnN0IG5vdGVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5vdGVzVGl0bGUudGV4dENvbnRlbnQgPSBcIk5vdGVzXCI7XG4gIG5vdGVzVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGV4dEFyZWFUYXNrRWRpdFwiKTtcbiAgY29uc3QgdGFza1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZXh0QXJlYVRhc2tFZGl0XCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiNTBcIik7XG4gIHRhc2tUZXh0QXJlYS5uYW1lID0gXCJ0ZXh0QXJlYVRhc2tcIjtcblxuICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQobm90ZXNUaXRsZSk7XG4gIG5vdGVzRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrVGV4dEFyZWEpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChub3Rlc0VsZW1lbnQpO1xuXG4gIHRhc2tGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFRhc2tGb3JtXCIpO1xuICBjb250YWluZXJFZGl0LmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuICAvLyBCdXR0b24gRWRpdFxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvbkVkaXRUYXNrXCIpO1xuICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFRElUXCI7XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEVkaXRUYXNrLCBmYWxzZSk7XG5cbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lckVkaXQ7XG59XG5cbmV4cG9ydCB7IGVkaXRUYXNrRm9ybSB9O1xuIiwiaW1wb3J0IHsgZWxlbWVudFByb2plY3QsIGRvbVNob3dUYXNrcyB9IGZyb20gXCIuL3Byb2plY3RzRG9tLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5sZXQgYWN0aXZlUHJvamVjdDtcbmxldCBjaG9zZW5UYXNrO1xuXG5mdW5jdGlvbiBzZXRDaG9zZW5UYXNrKHRhc2spIHtcbiAgY2hvc2VuVGFzayA9IHRhc2s7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3Qoc2V0UHJvamVjdCkge1xuICBsZXQgcHJvamVjdElkO1xuICBsZXQgZWxlbWVudElkO1xuICAvLyBXZSBzZXQgdGhlIGFjdGl2ZSBwcm9qZWN0IGFuZCBjaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBidXR0b25cbiAgaWYgKGFjdGl2ZVByb2plY3QgIT09IHVuZGVmaW5lZCkge1xuICAgIHByb2plY3RJZCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gIH1cblxuICBpZiAocHJvamVjdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0SWQpO1xuICB9XG5cbiAgaWYgKGVsZW1lbnRJZCAhPT0gbnVsbCAmJiBlbGVtZW50SWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlUHJvamVjdFwiKTtcbiAgfVxuXG4gIGFjdGl2ZVByb2plY3QgPSBzZXRQcm9qZWN0O1xuXG4gIGxldCBuZXdfcHJvamVjdElkID0gc2V0UHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgbGV0IG5ld19lbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdfcHJvamVjdElkKTtcbiAgaWYgKG5ld19lbGVtZW50SWQgIT0gbnVsbCkge1xuICAgIG5ld19lbGVtZW50SWQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RcIik7XG4gIH1cblxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSAmJiBuZXdfcHJvamVjdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIiwgbmV3X3Byb2plY3RJZCk7XG4gIH1cbn1cblxuLy8gQWxsIHRoZSBwcm9qZWN0cyBuYW1lc1xuY29uc3QgbXlQcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgcmV0dXJuIHsgbmFtZSwgdGFza0xpc3Q6IHt9LCBpZDogXCJwcm9qZWN0XCIgKyBhc3NpZ25Qcm9qZWN0SWQoKSB9O1xufVxuXG4vLyBUaGUgYXJndW1lbnQgd2lsbCBiZSB0aGUgaW5zdGFudGlhdGlvbiBvZiBjcmVhdGVQcm9qZWN0XG5mdW5jdGlvbiBteVByb2plY3RNZXRob2RzKG15UHJvamVjdCkge1xuICByZXR1cm4ge1xuICAgIC4uLm15UHJvamVjdCxcbiAgICBnZXRQcm9qZWN0SWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH0sXG4gICAgZ2V0VGFza0lkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrSWQ7XG4gICAgfSxcbiAgICBnZXRQcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldFByb2plY3ROYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH0sXG4gICAgZ2V0VGFza0xpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xuICAgIH0sXG4gICAgZW5kVGFzazogZnVuY3Rpb24gKHRhc2tJblF1ZXN0aW9uLCBpc0NvbXBsZXRlZCkge1xuICAgICAgLy8gSXQgY2hhbmdlcyBvbmx5IHRoZSB2aXN1YWwgYXNwZWN0IG9mIHRoZSB0YXNrXG4gICAgICB0YXNrSW5RdWVzdGlvbltcImNvbXBsZXRlZFwiXSA9IGlzQ29tcGxldGVkO1xuICAgICAgbGV0IG15RWxlbWVudFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaG9zZW5UYXNrW1wibmFtZUlkXCJdKTtcbiAgICAgIGlmIChpc0NvbXBsZXRlZCkge1xuICAgICAgICBteUVsZW1lbnRUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29tcGxldGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXlFbGVtZW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwidGFza0NvbXBsZXRlZFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZVRhc2s6IGZ1bmN0aW9uIChvYnNvbGV0ZVRhc2spIHtcbiAgICAgIGxldCBpZFRhc2sgPSBvYnNvbGV0ZVRhc2tbXCJuYW1lSWRcIl07XG4gICAgICBkZWxldGUgdGhpcy50YXNrTGlzdFtpZFRhc2tdO1xuXG4gICAgICBjb25zdCBteVRhc2tzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnRhc2tMaXN0KTtcbiAgICAgIGRvbVNob3dUYXNrcyhteVRhc2tzKTtcbiAgICB9LFxuICAgIG1vZGlmeVRhc2s6IGZ1bmN0aW9uIChvbGRUYXNrLCBuZXdUYXNrKSB7XG4gICAgICBsZXQgaWRUYXNrID0gb2xkVGFza1tcIm5hbWVJZFwiXTtcbiAgICAgIHRoaXMudGFza0xpc3RbaWRUYXNrXSA9IG5ld1Rhc2s7XG4gICAgICB0aGlzLnRhc2tMaXN0W2lkVGFza11bXCJuYW1lSWRcIl0gPSBpZFRhc2s7XG4gICAgfSxcbiAgICBhZGRUYXNrOiBmdW5jdGlvbiAobmFtZSwgZGF0ZSA9IFwibW0tZGQteXlcIiwgcHJpb3JpdHkgPSBcIkxPV1wiLCBub3RlcyA9IFwiXCIpIHtcbiAgICAgIGxldCB0YXNrSWQgPSBhc3NpZ25UYXNrSWQoKTtcblxuICAgICAgbGV0IG5hbWVJZFRhc2sgPSBcInRhc2tcIiArIHRhc2tJZDtcbiAgICAgIGxldCBpbnRlcm5hbFRhc2sgPSB7fTtcblxuICAgICAgaW50ZXJuYWxUYXNrW1wibmFtZUlkXCJdID0gbmFtZUlkVGFzaztcbiAgICAgIGludGVybmFsVGFza1tcIm5hbWVcIl0gPSBuYW1lO1xuXG4gICAgICAvLyBEYXRlIGhhcyB0byBhcHBlYXIgaW4gdGhlIGZvcm0gbW0vZGQveWVhclxuXG4gICAgICBpZiAoZGF0ZSAhPT0gXCJtbS1kZC15eVwiICYmIGRhdGUgIT09IFwiXCIpIHtcbiAgICAgICAgbGV0IG9iamVjdERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgbGV0IG15WWVhciA9IG9iamVjdERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IG15TW9udGggPSBvYmplY3REYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBsZXQgbXlEYXkgPSBvYmplY3REYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGRhdGVUYXNrID0gbXlNb250aCArIFwiL1wiICsgbXlEYXkgKyBcIi9cIiArIG15WWVhcjtcbiAgICAgICAgaW50ZXJuYWxUYXNrW1wiZGF0ZVwiXSA9IGRhdGVUYXNrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxUYXNrW1wiZGF0ZVwiXSA9IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGludGVybmFsVGFza1tcInByaW9yaXR5XCJdID0gcHJpb3JpdHk7XG4gICAgICBpbnRlcm5hbFRhc2tbXCJub3Rlc1wiXSA9IG5vdGVzO1xuICAgICAgaW50ZXJuYWxUYXNrW1wiY29tcGxldGVkXCJdID0gZmFsc2U7XG5cbiAgICAgIC8vIEV2ZXJ5IHRhc2sgaXMgYSB2YWx1ZSB3aG9zZSBrZXkgaXMgbmFtZUlkVGFza1xuICAgICAgdGhpcy50YXNrTGlzdFtuYW1lSWRUYXNrXSA9IGludGVybmFsVGFzaztcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBzaG93VGFza3MocHJvamVjdEwpIHtcbiAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0TCk7XG5cbiAgbGV0IG15UHJvdG9UYXNrcyA9IG51bGw7XG4gIG15UHJvdG9UYXNrcyA9IHByb2plY3RMLmdldFRhc2tMaXN0KCk7XG5cbiAgY29uc3QgbXlUYXNrcyA9IE9iamVjdC52YWx1ZXMobXlQcm90b1Rhc2tzKTtcblxuICBkb21TaG93VGFza3MobXlUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQWRkUHJvamVjdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdERpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdEZvcm1cIik7XG5cbiAgY29uc3QgbmV3VGl0bGUgPSBteUZvcm1bXCJuYW1lXCJdLnZhbHVlO1xuICBpZiAobmV3VGl0bGUgIT09IFwiXCIpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0RW1wdHkgPSBjcmVhdGVQcm9qZWN0KG5ld1RpdGxlKTtcblxuICAgIGxldCBuZXdQcm9qZWN0ID0gbXlQcm9qZWN0TWV0aG9kcyhuZXdQcm9qZWN0RW1wdHkpO1xuXG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGxldCBwcm9qZWN0SWQgPSBuZXdQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdElkLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0RW1wdHkpKTtcbiAgICAgIGxldCBhbGxTdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICAgIGxldCBwYXJzZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UoYWxsU3RvcmVkUHJvamVjdHMpO1xuICAgICAgcGFyc2VkUHJvamVjdHMuYWxsUHJvamVjdHMucHVzaChwcm9qZWN0SWQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFByb2plY3RzKSk7XG4gICAgfVxuXG4gICAgYXBwZW5kUHJvamVjdChuZXdUaXRsZSwgbmV3UHJvamVjdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGFkZEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkUHJvamVjdERpdlwiKTtcblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFByb2plY3RGb3JtXCIpO1xuICBhZGRFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuICBjb25zdCBsYWJlbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJvamVjdC50ZXh0Q29udGVudCA9IFwiUGxlYXNlLCBhZGQgcHJvamVjdCdzIG5hbWU6XCI7XG4gIGxhYmVsUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxhYmVsUHJvamVjdFwiKTtcblxuICBjb25zdCBuYW1lUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZVByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbnB1dFByb2plY3RcIik7XG4gIG5hbWVQcm9qZWN0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZVByb2plY3QubmFtZSA9IFwibmFtZVwiO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChsYWJlbFByb2plY3QpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lUHJvamVjdCk7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uUHJvamVjdEZvcm1cIik7XG4gIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT0tcIjtcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0FkZFByb2plY3QsIGZhbHNlKTtcblxuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICByZXR1cm4gYWRkRWxlbWVudENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3REaXZcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFByb2plY3RcIikucGxhY2Vob2xkZXIgPVxuICAgIFwiTm8gcHJvamVjdCB3aXRob3V0IGEgbmFtZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0UHJvamVjdFwiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmNvbnN0IGNyZWF0ZU5ld0lkID0gKCkgPT4ge1xuICBsZXQgaWRQcm9qZWN0ID0gMDtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgbG9jYWxJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdElkXCIpO1xuXG4gICAgaWYgKGxvY2FsSWQgIT09IG51bGwpIHtcbiAgICAgIGlkUHJvamVjdCA9IGxvY2FsSWQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZFByb2plY3QrKztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhc3RJZFwiLCBpZFByb2plY3QpO1xuICAgIHJldHVybiBpZFByb2plY3Q7XG4gIH07XG59O1xuXG5jb25zdCBhc3NpZ25Qcm9qZWN0SWQgPSBjcmVhdGVOZXdJZCgpO1xuY29uc3QgYXNzaWduVGFza0lkID0gY3JlYXRlTmV3SWQoKTtcblxuZnVuY3Rpb24gYXBwZW5kUHJvamVjdChuZXdQcm9qZWN0VGl0bGUsIGtleVByb2plY3QpIHtcbiAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0UHJvamVjdHNcIik7XG4gIGNvbnN0IHRpdGxlUHJvamVjdCA9IGVsZW1lbnRQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSwga2V5UHJvamVjdCk7XG5cbiAgc2hvd1Rhc2tzKGtleVByb2plY3QpO1xuICBsaXN0UHJvamVjdHMuYXBwZW5kQ2hpbGQodGl0bGVQcm9qZWN0KTtcbiAgc2V0QWN0aXZlUHJvamVjdChrZXlQcm9qZWN0KTtcbn1cblxuZXhwb3J0IHtcbiAgYWRkUHJvamVjdEZ1bmN0aW9uLFxuICBhZGRQcm9qZWN0Rm9ybSxcbiAgc2hvd1Rhc2tzLFxuICBjcmVhdGVQcm9qZWN0LFxuICBteVByb2plY3RNZXRob2RzLFxuICBteVByb2plY3RzLFxuICBhY3RpdmVQcm9qZWN0LFxuICBzZXRDaG9zZW5UYXNrLFxuICBzZXRBY3RpdmVQcm9qZWN0LFxuICBjcmVhdGVOZXdJZCxcbiAgY2hvc2VuVGFzayxcbn07XG4iLCJpbXBvcnQge1xuICBhZGRQcm9qZWN0RnVuY3Rpb24sXG4gIGFkZFByb2plY3RGb3JtLFxuICBzaG93VGFza3MsXG4gIGFjdGl2ZVByb2plY3QsXG4gIGNob3NlblRhc2ssXG4gIHNldENob3NlblRhc2ssXG59IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBjbGlja0VkaXRUYXNrIH0gZnJvbSBcIi4vdGFza0NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGxvY2FsUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsUHJvamVjdHNcIik7XG4gICAgbGV0IHBhcnNlZExvY2FsVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsUHJvamVjdHMpO1xuICAgIGxldCBwcm9qZWN0SWQgPSBwcm9qZWN0LmZpcnN0Q2hpbGQuaWQ7XG4gICAgbGV0IHByb2plY3RzQXJyYXkgPSBwYXJzZWRMb2NhbFRhc2tzLmFsbFByb2plY3RzO1xuXG4gICAgY29uc3QgYXJyYXlXaXRob3V0UmVtb3ZlZFByb2plY3QgPSBwcm9qZWN0c0FycmF5LmZpbHRlcihmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgcmV0dXJuIHByb2plY3QgIT09IHByb2plY3RJZDtcbiAgICB9KTtcbiAgICBsZXQgYWxsTG9jYWxQcm9qZWN0cyA9IHsgYWxsUHJvamVjdHM6IGFycmF5V2l0aG91dFJlbW92ZWRQcm9qZWN0IH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsTG9jYWxQcm9qZWN0cykpO1xuXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIik7XG4gICAgaWYgKGFjdGl2ZVByb2plY3QgPT0gcHJvamVjdElkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIiwgXCJqdXN0RGVsZXRlZFwiKTtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0SWQpO1xuICB9XG5cbiAgcHJvamVjdC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tSZW1vdmVUYXNrKGV2ZW50KSB7XG4gIHNldENob3NlblRhc2soZXZlbnQpO1xuICBhY3RpdmVQcm9qZWN0LmRlbGV0ZVRhc2soY2hvc2VuVGFzayk7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGlkUHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShhY3RpdmVQcm9qZWN0KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q29tcGxldGVkKGV2ZW50LCBidXR0b25Db21wbGV0aW9uKSB7XG4gIHNldENob3NlblRhc2soZXZlbnQpO1xuXG4gIGxldCB7IGNvbXBsZXRlZCB9ID0gZXZlbnQ7XG4gIGNvbXBsZXRlZCA9ICFjb21wbGV0ZWQ7XG4gIGlmIChjb21wbGV0ZWQgPT0gZmFsc2UpIHtcbiAgICBidXR0b25Db21wbGV0aW9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuICB9IGVsc2Uge1xuICAgIGJ1dHRvbkNvbXBsZXRpb24udGV4dENvbnRlbnQgPSBcIk9wZW5cIjtcbiAgfVxuXG4gIGFjdGl2ZVByb2plY3QuZW5kVGFzayhjaG9zZW5UYXNrLCBjb21wbGV0ZWQpO1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGxldCBpZFByb2plY3QgPSBhY3RpdmVQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkUHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoYWN0aXZlUHJvamVjdCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRQcm9qZWN0KG5hbWVQcm9qZWN0RG9tLCBrZXlQcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1VuaXRcIik7XG5cbiAgLy8gVGhlIHByb2plY3RcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcImJ1dHRvblByb2plY3RzXCIpO1xuICBsZXQgcHJvamVjdElkID0ga2V5UHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0SWQpO1xuXG4gIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBuYW1lUHJvamVjdERvbTtcblxuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2hvd1Rhc2tzKGtleVByb2plY3QpO1xuICB9KTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICAvLyBUaGUgb3B0aW9uIHRvIHJlbW92ZSBpdFxuICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGJ1dHRvblJlbW92ZURpc3BsYXkgPSBwcm9qZWN0SWQgKyBcIkJ1dHRvblwiO1xuXG4gIHJlbW92ZVByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9uUmVtb3ZlRGlzcGxheSk7XG4gIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZVByb2plY3RzXCIsIFwiaGlkZVJlbW92ZUJ1dHRvblwiKTtcbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICByZW1vdmVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0RGl2KTtcbiAgfSk7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ1dHRvbik7XG5cbiAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwibW91c2VvdmVyXCIsXG4gICAgKCkgPT4ge1xuICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVJlbW92ZUJ1dHRvblwiKTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG5cbiAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwibW91c2VvdXRcIixcbiAgICAoKSA9PiB7XG4gICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlUmVtb3ZlQnV0dG9uXCIpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcblxuICByZXR1cm4gcHJvamVjdERpdjtcbn1cblxuZnVuY3Rpb24gZG9tU2hvd1Rhc2tzKG15VGFza3MpIHtcbiAgY29uc3QgbXlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tDb250YWluZXJJZFwiKTtcbiAgaWYgKG15Q29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgbXlDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGVhY2hUYXNrIG9mIG15VGFza3MpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc1VuaXRcIik7XG4gICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlYWNoVGFza1tcIm5hbWVJZFwiXSk7XG4gICAgbXlDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG5cbiAgICAvLyBOZXcgdGl0bGVcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gZWFjaFRhc2submFtZTtcbiAgICBuZXdUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVUYXNrXCIpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuXG4gICAgLy8gTmV3IGV4dHJhcyAoZGF0ZSwgcHJpb3JpdHkpXG4gICAgY29uc3QgbmV3RXh0cmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdFeHRyYXMuY2xhc3NMaXN0LmFkZChcInRhc2tEYXRlUHJpb3JpdHlcIik7XG5cbiAgICAvLyBOZXcgZGF0ZVxuICAgIGlmIChlYWNoVGFzay5kYXRlICE9PSBcIlwiKSB7XG4gICAgICBjb25zdCBuZXdEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBsZXQgZWFjaERhdGUgPSBlYWNoVGFzay5kYXRlO1xuICAgICAgbGV0IHJlID0gLy18XFxzL2dpO1xuICAgICAgbGV0IGZvcm1hdERhdGUgPSBlYWNoRGF0ZS5yZXBsYWNlKHJlLCBcIi9cIik7XG4gICAgICBuZXdEdWVEYXRlLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZTtcbiAgICAgIG5ld0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tEYXRlXCIpO1xuICAgICAgbmV3RXh0cmFzLmFwcGVuZENoaWxkKG5ld0R1ZURhdGUpO1xuICAgIH1cblxuICAgIC8vIE5ldyBwcmlvcml0eVxuICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbmV3UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgcHJpb3JpdHk6ICR7ZWFjaFRhc2sucHJpb3JpdHl9YDtcbiAgICBuZXdQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFza1ByaW9yaXR5XCIpO1xuICAgIG5ld0V4dHJhcy5hcHBlbmRDaGlsZChuZXdQcmlvcml0eSk7XG5cbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld0V4dHJhcyk7XG5cbiAgICBpZiAoZWFjaFRhc2sucHJpb3JpdHkgPT0gXCJISUdIXCIpIHtcbiAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tVbml0VXJnZW50XCIpO1xuICAgIH1cbiAgICBpZiAoZWFjaFRhc2sucHJpb3JpdHkgPT0gXCJNRURJVU1cIikge1xuICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1VuaXRJbXBvcnRhbnRcIik7XG4gICAgfVxuXG4gICAgLy8gUGxhY2Ugbm90ZXNcbiAgICBpZiAoZWFjaFRhc2subm90ZXMgIT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IHNldE5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNldE5vdGVzLnRleHRDb250ZW50ID0gZWFjaFRhc2subm90ZXM7XG4gICAgICBzZXROb3Rlcy5jbGFzc0xpc3QuYWRkKFwibXlOb3Rlc1wiKTtcbiAgICAgIGNvbnN0IGlkTm90ZSA9IFwiXCI7XG4gICAgICBzZXROb3Rlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZE5vdGUpO1xuICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChzZXROb3Rlcyk7XG4gICAgfVxuXG4gICAgLy8gTmV3IHRhc2sgc2V0dGluZ1xuICAgIGNvbnN0IG5ld1NldHRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1NldHRpbmcuY2xhc3NMaXN0LmFkZChcInRhc2tTZXR0aW5nc1wiKTtcblxuICAgIC8vIENvbXBsZXRlZFxuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29tcGxldGVkLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuICAgIGNvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBzZXRDb21wbGV0ZWQoZWFjaFRhc2ssIGNvbXBsZXRlZCk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGlmIChlYWNoVGFza1tcImNvbXBsZXRlZFwiXSkge1xuICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza0NvbXBsZXRlZFwiKTtcbiAgICAgIGNvbXBsZXRlZC50ZXh0Q29udGVudCA9IFwiT3BlblwiO1xuICAgIH1cblxuICAgIG5ld1NldHRpbmcuYXBwZW5kQ2hpbGQoY29tcGxldGVkKTtcblxuICAgIC8vIE5ldyBlZGl0XG4gICAgY29uc3QgbmV3RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV3RWRpdC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRWRpdFRhc2tcIik7XG4gICAgbmV3RWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gICAgbmV3RWRpdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjbGlja0VkaXRUYXNrKGVhY2hUYXNrLCBuZXdUaXRsZSk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgbmV3U2V0dGluZy5hcHBlbmRDaGlsZChuZXdFZGl0KTtcblxuICAgIC8vIFJlbW92ZSB0YXNrXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVtb3ZlVGFzay5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlVGFza1wiKTtcbiAgICByZW1vdmVUYXNrLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICByZW1vdmVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNsaWNrUmVtb3ZlVGFzayhlYWNoVGFzayk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgbmV3U2V0dGluZy5hcHBlbmRDaGlsZChyZW1vdmVUYXNrKTtcblxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3U2V0dGluZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gIGNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBteVByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuICBteVByb2plY3RzLmFwcGVuZENoaWxkKGFkZFByb2plY3RGb3JtKCkpO1xuXG4gIGNvbnN0IG15UHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG15UHJvamVjdHNIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c0hlYWRlclwiKTtcbiAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChteVByb2plY3RzSGVhZGVyKTtcblxuICBjb25zdCBteVByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbXlQcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiO1xuXG4gIG15UHJvamVjdHNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzVGl0bGVcIik7XG5cbiAgbXlQcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChteVByb2plY3RzVGl0bGUpO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnRQcm9qZWN0QnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0LmlubmVyVGV4dCA9IFwiK1wiO1xuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0RnVuY3Rpb24pO1xuICBteVByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG4gIGNvbnN0IGxpc3RQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpc3RQcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RQcm9qZWN0c1wiKTtcblxuICBteVByb2plY3RzLmFwcGVuZENoaWxkKGxpc3RQcm9qZWN0cyk7XG5cbiAgcmV0dXJuIG15UHJvamVjdHM7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RzLCBlbGVtZW50UHJvamVjdCwgZG9tU2hvd1Rhc2tzIH07XG4iLCJmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICBzdG9yYWdlICYmXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9O1xuIiwiaW1wb3J0IHsgYWN0aXZlUHJvamVjdCwgc2V0Q2hvc2VuVGFzayB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBlZGl0VGFza0Zvcm0gfSBmcm9tIFwiLi9mb3Jtcy5qc1wiO1xuaW1wb3J0IHsgZG9tU2hvd1Rhc2tzIH0gZnJvbSBcIi4vcHJvamVjdHNEb20uanNcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmZ1bmN0aW9uIGNsaWNrRWRpdFRhc2soZXZlbnQsIGVkaXRfZWxlbWVudCkge1xuICAvLyBpdCBkaXNwbGF5cyB0aGUgZm9ybSBmb3IgZWRpdGluZ1xuXG4gIC8vIGRlZmluZSB3aGVyZSBpdCB3aWxsIGFwcGVhclxuICBjb25zdCB5X2F4aXMgPSBlZGl0X2VsZW1lbnQub2Zmc2V0VG9wO1xuXG4gIHNldENob3NlblRhc2soZXZlbnQpO1xuXG4gIGNvbnN0IGVkaXRUYXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0RpdlwiKTtcbiAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRm9ybVwiKTtcblxuICBjb25zdCB7IG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3RlcyB9ID0gZXZlbnQ7XG5cbiAgLy8gQ2hhbmdlIHRoZSBsYWJlbHNcblxuICBsZXQgb2xkVGFzayA9IGVkaXRGb3JtLmVsZW1lbnRzW1wiZWRpdFRhc2tcIl07XG4gIGxldCBvbGREYXRlID0gZWRpdEZvcm0uZWxlbWVudHNbXCJkdWVEYXRlRWRpdFwiXTtcblxuICAvLyBJbnNlcnQgdGhlIGFwcHJvcHJpYXRlIHZhbHVlcyB0byB0aGUgZm9ybVxuICBvbGRUYXNrLnZhbHVlID0gbmFtZTtcblxuICBpZiAoZGF0ZSAhPT0gXCJcIikge1xuICAgIGNvbnNvbGUubG9nKGRhdGUsIHR5cGVvZiBkYXRlLCBldmVudCk7XG4gICAgbGV0IHJlID0gLy0vZ2k7XG4gICAgbGV0IGRhdGVOID0gZGF0ZS5yZXBsYWNlKHJlLCBcIiBcIik7XG4gICAgbGV0IHNldERhdGUgPSBuZXcgRGF0ZShkYXRlTik7XG4gICAgbGV0IGZpeGVkRGF5ID0gc2V0RGF0ZS5nZXREYXRlKCkgKyAxO1xuICAgIHNldERhdGUuc2V0RGF0ZShmaXhlZERheSk7XG4gICAgb2xkRGF0ZS52YWx1ZSA9IHNldERhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gIH1cblxuICBsZXQgb2xkTm90ZXMgPSBlZGl0Rm9ybS5lbGVtZW50c1tcInRleHRBcmVhVGFza0VkaXRcIl07XG4gIG9sZE5vdGVzLnZhbHVlID0gbm90ZXM7XG5cbiAgbGV0IG9sZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9XCIgKyBcInByaW9yaXR5XCIgKyBcIl1cIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkUHJpb3JpdHkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob2xkUHJpb3JpdHlbaV0udmFsdWUgPT09IHByaW9yaXR5KSB7XG4gICAgICBvbGRQcmlvcml0eVtpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgbGV0IHlfd3IgPSB5X2F4aXMgKyBcInB4XCI7XG4gIGVkaXRUYXNrRGl2LnN0eWxlLnRvcCA9IHlfd3I7XG4gIGVkaXRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQWRkVGFzaygpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza1wiKS5wbGFjZWhvbGRlciA9IFwiTm8gdGFzayB3aXRob3V0IGEgbmFtZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tcIikudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBmb3JtQWRkVGFza01ldGhvZCgpIHtcbiAgLy8gQWRkcyB0aGUgdGFzayB0byB0aGUgcHJvamVjdFxuICBjb25zdCBteUZvcm1UYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRm9ybVwiKTtcbiAgY29uc3QgdGFza0RhdGEgPSBnZXRGb3JtRGF0YVRhc2sobXlGb3JtVGFzayk7XG5cbiAgY29uc3QgW3sgbmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzIH1dID0gdGFza0RhdGE7XG5cbiAgLy8gV2UgZG9uJ3Qgd2FudCB0YXNrcyB3aXRob3V0IGEgJ25hbWUnIChkZXNjcmlwdGlvbilcbiAgaWYgKG5hbWUgPT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZGF0ZSA9PT0gXCJcIikge1xuICAgIGNvbnNvbGUubG9nKHRydWUpO1xuICB9XG4gIGFjdGl2ZVByb2plY3QuYWRkVGFzayhuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuICBjb25zb2xlLmxvZyhcImZvcm0gYWRkXCIsIGRhdGUpO1xuXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGlkUHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShhY3RpdmVQcm9qZWN0KSk7XG4gIH1cblxuICBsZXQgbXlQcm90b1Rhc2tzID0gbnVsbDtcbiAgbXlQcm90b1Rhc2tzID0gYWN0aXZlUHJvamVjdC5nZXRUYXNrTGlzdCgpO1xuICBjb25zdCBteVRhc2tzID0gT2JqZWN0LnZhbHVlcyhteVByb3RvVGFza3MpO1xuICBjb25zb2xlLmxvZyhcInNob3dcIiwgbXlUYXNrcyk7XG4gIGRvbVNob3dUYXNrcyhteVRhc2tzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybURhdGFUYXNrKHdoaWNoRm9ybSkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tEaXZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCBteUZvcm1UYXNrID0gd2hpY2hGb3JtO1xuICBjb25zdCBuZXdUYXNrID0gbXlGb3JtVGFza1tcIm5hbWVcIl0udmFsdWU7XG4gIGNvbnN0IG5ld0RhdGUgPSBteUZvcm1UYXNrW1wiZGF0ZVwiXS52YWx1ZTtcbiAgbGV0IG5ld0ltcG9ydGFuY2UgPSBteUZvcm1UYXNrW1wicHJpb3JpdHlcIl0udmFsdWU7XG4gIGNvbnN0IG5ld05vdGVzID0gbXlGb3JtVGFza1tcInRleHRBcmVhVGFza1wiXS52YWx1ZTtcblxuICBjb25zdCB0YXNrU2V0ID0gW1xuICAgIHsgbmFtZTogbmV3VGFzaywgZGF0ZTogbmV3RGF0ZSwgcHJpb3JpdHk6IG5ld0ltcG9ydGFuY2UsIG5vdGVzOiBuZXdOb3RlcyB9LFxuICBdO1xuXG4gIHJldHVybiB0YXNrU2V0O1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrRm9ybSgpIHtcbiAgY29uc3QgYWRkRWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZEVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRUYXNrRGl2XCIpO1xuXG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHRhc2tGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVGFza0Zvcm1cIik7XG5cbiAgLy8gTmFtZSB0aGUgVGFza1xuICBjb25zdCBlbGVtZW50TmFtZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsVGFzay50ZXh0Q29udGVudCA9IFwiUGxlYXNlLCBhZGQgYSBuZXcgdGFzazpcIjtcbiAgbGFiZWxUYXNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5ld1Rhc2tcIik7XG5cbiAgY29uc3QgbmFtZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3VGFza1wiKTtcbiAgbmFtZVRhc2sudHlwZSA9IFwidGV4dFwiO1xuICBuYW1lVGFzay5uYW1lID0gXCJuYW1lXCI7XG5cbiAgZWxlbWVudE5hbWVUYXNrLmFwcGVuZENoaWxkKGxhYmVsVGFzayk7XG4gIGVsZW1lbnROYW1lVGFzay5hcHBlbmRDaGlsZChuYW1lVGFzayk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVsZW1lbnROYW1lVGFzayk7XG5cbiAgLy8gRHVlIERhdGVcbiAgY29uc3QgZWxlbWVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50RGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVEaXZcIik7XG5cbiAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIkRhdGU6IFwiO1xuICBsYWJlbERhdGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlRGF0ZVwiKTtcblxuICBjb25zdCBpbnB1dERhdGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dERhdGVUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZVwiKTtcbiAgaW5wdXREYXRlVGFzay50eXBlID0gXCJkYXRlXCI7XG4gIGlucHV0RGF0ZVRhc2submFtZSA9IFwiZGF0ZVwiO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChsYWJlbERhdGUpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dERhdGVUYXNrKTtcblxuICBlbGVtZW50RGF0ZS5hcHBlbmRDaGlsZChsYWJlbERhdGUpO1xuICBlbGVtZW50RGF0ZS5hcHBlbmRDaGlsZChpbnB1dERhdGVUYXNrKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudERhdGUpO1xuXG4gIC8vIFByaW9yaXR5XG5cbiAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlEaXZcIik7XG5cbiAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICBwcmlvcml0eVRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7XG5cbiAgLy8gSElHSFxuICBjb25zdCBpbnB1dFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2hQcmlvcml0eVwiKTtcbiAgaW5wdXRQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJISUdIXCIpO1xuXG4gIGlucHV0UHJpb3JpdHlIaWdoLnR5cGUgPSBcInJhZGlvXCI7XG4gIGlucHV0UHJpb3JpdHlIaWdoLm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gXCJISUdIXCI7XG4gIGxhYmVsUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eVwiKTtcbiAgbGFiZWxQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaGlnaFByaW9yaXR5XCIpO1xuXG4gIC8vIE1FRElVTVxuICBjb25zdCBpbnB1dFByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eVwiKTtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lZGl1bVByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTUVESVVNXCIpO1xuXG4gIGlucHV0UHJpb3JpdHlNZWRpdW0udHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1FRElVTVwiO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eVwiKTtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZWRpdW1Qcmlvcml0eVwiKTtcblxuICAvLyBMT1dcbiAgY29uc3QgaW5wdXRQcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlcIik7XG4gIGlucHV0UHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb3dQcmlvcml0eVwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxPV1wiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5jaGVja2VkID0gdHJ1ZTtcblxuICBpbnB1dFByaW9yaXR5TG93LnR5cGUgPSBcInJhZGlvXCI7XG4gIGlucHV0UHJpb3JpdHlMb3cubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFByaW9yaXR5TG93LnRleHRDb250ZW50ID0gXCJMT1dcIjtcbiAgbGFiZWxQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsUHJpb3JpdHlcIik7XG4gIGxhYmVsUHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG93UHJpb3JpdHlcIik7XG5cbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xuXG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5SGlnaCk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5SGlnaCk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5TWVkaXVtKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eUxvdyk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5TG93KTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlFbGVtZW50KTtcblxuICAvLyBOb3Rlc1xuXG4gIGNvbnN0IG5vdGVzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGVzRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVzRGl2XCIpO1xuXG4gIGNvbnN0IG5vdGVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5vdGVzVGl0bGUudGV4dENvbnRlbnQgPSBcIk5vdGVzXCI7XG4gIG5vdGVzVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGV4dEFyZWFUYXNrXCIpO1xuICBjb25zdCB0YXNrVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRleHRBcmVhVGFza1wiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjUwXCIpO1xuICB0YXNrVGV4dEFyZWEubmFtZSA9IFwidGV4dEFyZWFUYXNrXCI7XG5cbiAgbm90ZXNFbGVtZW50LmFwcGVuZENoaWxkKG5vdGVzVGl0bGUpO1xuICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza1RleHRBcmVhKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQobm90ZXNFbGVtZW50KTtcblxuICBhZGRFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25UYXNrRm9ybVwiKTtcbiAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBRERcIjtcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmb3JtQWRkVGFza01ldGhvZCwgZmFsc2UpO1xuXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbiAgcmV0dXJuIGFkZEVsZW1lbnRDb250YWluZXI7XG59XG5cbmV4cG9ydCB7XG4gIGNsaWNrQWRkVGFzayxcbiAgYWRkVGFza0Zvcm0sXG4gIGVkaXRUYXNrRm9ybSxcbiAgZ2V0Rm9ybURhdGFUYXNrLFxuICBjbGlja0VkaXRUYXNrLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgZWxlbWVudFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c0RvbS5qc1wiO1xuaW1wb3J0IHtcbiAgc2hvd1Rhc2tzLFxuICBjcmVhdGVQcm9qZWN0LFxuICBzZXRBY3RpdmVQcm9qZWN0LFxuICBhY3RpdmVQcm9qZWN0LFxuICBteVByb2plY3RNZXRob2RzLFxufSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgY2xpY2tBZGRUYXNrLCBhZGRUYXNrRm9ybSB9IGZyb20gXCIuL3Rhc2tDb250YWluZXIuanNcIjtcbmltcG9ydCB7IGVkaXRUYXNrRm9ybSB9IGZyb20gXCIuL2Zvcm1zLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgZGF0ZVRhc2tPbmUsIGRhdGVUYXNrVHdvLCBkYXRlVGFza1RocmVlIH0gZnJvbSBcIi4vZGF0ZXMuanNcIjtcblxubGV0IHN0YXRlVXNlcjtcblxuLy8gQ3JlYXRlIHRoZSBzYW1wbGUgcHJvamVjdHMgdGhhdCB3aWxsIGFkZCBhdCB0aGUgZW5kXG5cbmxldCBzYW1wbGVQcm9qZWN0O1xuXG5sZXQgc2FtcGxlUHJvamVjdE9uZTtcbmxldCBzYW1wbGVQcm9qZWN0VHdvO1xubGV0IG5hbWVQcm9qZWN0U2FtcGxlT25lO1xubGV0IG5hbWVQcm9qZWN0U2FtcGxlVHdvO1xubGV0IGNyZWF0ZUVsZW1lbnRTYW1wbGVPbmU7XG5sZXQgY3JlYXRlRWxlbWVudFNhbXBsZVR3bztcblxuLy8gUHJvamVjdCBvbmUgKGluaXRpYWwgcHJvamVjdClcblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgc3RhdGVVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdGF0ZUFwcGxpY2F0aW9uXCIpO1xuXG4gIGlmIChzdGF0ZVVzZXIgPT0gbnVsbCkge1xuICAgIHNhbXBsZVByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwicHJvamVjdDFcIik7XG4gICAgbGV0IGFsbExvY2FsUHJvamVjdHMgPSB7IGFsbFByb2plY3RzOiBbXSB9O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhbGxMb2NhbFByb2plY3RzKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0MVwiLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0KSk7XG4gICAgbGV0IGxvY2FsUHJvamVjdDEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3QxXCIpO1xuICAgIHNhbXBsZVByb2plY3RPbmUgPSBteVByb2plY3RNZXRob2RzKEpTT04ucGFyc2UobG9jYWxQcm9qZWN0MSkpO1xuXG4gICAgLy8gUHVzaCB0aGUgcHJvamVjdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIGxldCBhbGxTdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICBsZXQgcGFyc2VkUHJvamVjdHMgPSBKU09OLnBhcnNlKGFsbFN0b3JlZFByb2plY3RzKTtcbiAgICBsZXQgZmlyc3RQcm9qZWN0SWQgPSBzYW1wbGVQcm9qZWN0T25lLmdldFByb2plY3RJZCgpO1xuICAgIHBhcnNlZFByb2plY3RzLmFsbFByb2plY3RzLnB1c2goZmlyc3RQcm9qZWN0SWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwYXJzZWRQcm9qZWN0cykpO1xuICB9XG59XG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgc2FtcGxlUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJwcm9qZWN0MVwiKTtcbiAgc2FtcGxlUHJvamVjdE9uZSA9IG15UHJvamVjdE1ldGhvZHMoc2FtcGxlUHJvamVjdCk7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgc2FtcGxlUHJvamVjdE9uZS5hZGRUYXNrKFxuICAgIFwiUmVhZCBhIG5ldyBib29rXCIsXG4gICAgZGF0ZVRhc2tPbmUsXG4gICAgXCJMT1dcIixcbiAgICBcIkkgbmVlZCB0byB0YWtlIGNvbW1lbnRzXCJcbiAgKTtcbiAgc2FtcGxlUHJvamVjdE9uZS5hZGRUYXNrKFwiVmlzaXQgYW4gZW1wdHkgaG91c2VcIiwgZGF0ZVRhc2tUd28pO1xufVxuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSAmJiBzdGF0ZVVzZXIgPT0gbnVsbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3QxXCIsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3RPbmUpKTtcbn1cblxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpIHwgKHN0YXRlVXNlciA9PSBudWxsKSkge1xuICBzZXRBY3RpdmVQcm9qZWN0KHNhbXBsZVByb2plY3RPbmUpO1xufVxuXG4vLyBQcm9qZWN0IHR3b1xubGV0IHNhbXBsZVByb2plY3ROZXh0O1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBpZiAoc3RhdGVVc2VyID09IG51bGwpIHtcbiAgICBzYW1wbGVQcm9qZWN0TmV4dCA9IGNyZWF0ZVByb2plY3QoXCJwcm9qZWN0MlwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3QyXCIsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3ROZXh0KSk7XG4gICAgbGV0IGxvY2FsUHJvamVjdDIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3QyXCIpO1xuICAgIHNhbXBsZVByb2plY3RUd28gPSBteVByb2plY3RNZXRob2RzKEpTT04ucGFyc2UobG9jYWxQcm9qZWN0MikpO1xuXG4gICAgLy8gUHVzaCB0aGUgcHJvamVjdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIGxldCBhbGxTdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICBsZXQgc2Vjb25kUHJvamVjdElkID0gc2FtcGxlUHJvamVjdFR3by5nZXRQcm9qZWN0SWQoKTtcbiAgICBsZXQgcGFyc2VkUHJvamVjdHMgPSBKU09OLnBhcnNlKGFsbFN0b3JlZFByb2plY3RzKTtcbiAgICBwYXJzZWRQcm9qZWN0cy5hbGxQcm9qZWN0cy5wdXNoKHNlY29uZFByb2plY3RJZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFByb2plY3RzKSk7XG4gIH1cbn1cblxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIHNhbXBsZVByb2plY3ROZXh0ID0gY3JlYXRlUHJvamVjdChcInByb2plY3QyXCIpO1xuICBzYW1wbGVQcm9qZWN0VHdvID0gbXlQcm9qZWN0TWV0aG9kcyhzYW1wbGVQcm9qZWN0TmV4dCk7XG4gIG5hbWVQcm9qZWN0U2FtcGxlVHdvID0gc2FtcGxlUHJvamVjdFR3by5nZXRQcm9qZWN0TmFtZSgpO1xufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgfCAoc3RhdGVVc2VyID09IG51bGwpKSB7XG4gIHNhbXBsZVByb2plY3RUd28uYWRkVGFzayhcbiAgICBcIlJlYWQgYSBncmVhdCBib29rXCIsXG4gICAgZGF0ZVRhc2tUaHJlZSxcbiAgICBcIkhJR0hcIixcbiAgICBcIlRoaXMgaXMgYSBjb21tZW50LlwiXG4gICk7XG59XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpICYmIHN0YXRlVXNlciA9PSBudWxsKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdDJcIiwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlUHJvamVjdFR3bykpO1xufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgfCAoc3RhdGVVc2VyID09IG51bGwpKSB7XG4gIG5hbWVQcm9qZWN0U2FtcGxlT25lID0gc2FtcGxlUHJvamVjdE9uZS5nZXRQcm9qZWN0TmFtZSgpO1xuICBuYW1lUHJvamVjdFNhbXBsZVR3byA9IHNhbXBsZVByb2plY3RUd28uZ2V0UHJvamVjdE5hbWUoKTtcblxuICBjcmVhdGVFbGVtZW50U2FtcGxlT25lID0gZWxlbWVudFByb2plY3QoXG4gICAgbmFtZVByb2plY3RTYW1wbGVPbmUsXG4gICAgc2FtcGxlUHJvamVjdE9uZVxuICApO1xuXG4gIGNyZWF0ZUVsZW1lbnRTYW1wbGVUd28gPSBlbGVtZW50UHJvamVjdChcbiAgICBuYW1lUHJvamVjdFNhbXBsZVR3byxcbiAgICBzYW1wbGVQcm9qZWN0VHdvXG4gICk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vL1xuLy8vXG4vL1xuXG4vLyBDcmVhdGUgYW5kIGFkZCBkb20gZWxlbWVudHNcblxuZnVuY3Rpb24gbXlIZWFkZXIoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhlYWRlclBhZ2VcIik7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlRPIERPIExJU1RcIjtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChteUhlYWRlcigpKTtcblxuY29uc3QgY29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbi8vIExlZnQgU2lkZVxuXG5jb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKFwibGVmdFNlY3Rpb25cIik7XG5sZWZ0U2lkZS5hcHBlbmRDaGlsZChyZW5kZXJQcm9qZWN0cygpKTtcblxuY29udGFpbi5hcHBlbmRDaGlsZChsZWZ0U2lkZSk7XG5cbi8vIFJpZ2h0IHNpZGVcblxuY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwicmlnaHRTZWN0aW9uXCIpO1xuXG4vLyBQYXJlbnQgdGFzayBlbGVtZW50XG5jb25zdCBteVRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm15VGFza3MuY2xhc3NMaXN0LmFkZChcInRhc2tzXCIpO1xubXlUYXNrcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15VGFza3NJRFwiKTtcblxuY29uc3QgbXlUYXNrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5teVRhc2tzVGl0bGUuaW5uZXJUZXh0ID0gXCJUQVNLU1wiO1xubXlUYXNrc1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza3NUaXRsZVwiKTtcblxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5hZGRUYXNrLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrXCIpO1xuYWRkVGFzay5pbm5lclRleHQgPSBcIitcIjtcblxuYWRkVGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFN0YXJ0VGFza0J1dHRvblwiKTtcbmFkZFRhc2suaW5uZXJUZXh0ID0gXCIrXCI7XG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsaWNrQWRkVGFzaygpO1xufSk7XG5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tBZGRUYXNrKTtcblxucmlnaHRTaWRlLmFwcGVuZENoaWxkKG15VGFza3MpO1xubXlUYXNrcy5hcHBlbmRDaGlsZChteVRhc2tzVGl0bGUpO1xubXlUYXNrcy5hcHBlbmRDaGlsZChhZGRUYXNrKTtcbm15VGFza3MuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0oKSk7XG5teVRhc2tzLmFwcGVuZENoaWxkKGVkaXRUYXNrRm9ybSgpKTtcblxuLy8gQ2hpbGQgdGFzayBlbGVtZW50ICh0YXNrIGNvbnRhaW5lcilcbmNvbnN0IGhvbWVUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhvbWVUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyRmlyc3RcIik7XG5ob21lVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tDb250YWluZXJJZFwiKTtcblxubXlUYXNrcy5hcHBlbmRDaGlsZChob21lVGFza0NvbnRhaW5lcik7XG5cbi8vIFN1bSBpdCB1cFxuY29udGFpbi5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluKTtcblxuLy9cbmNvbnN0IGxpc3RPZlByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0UHJvamVjdHNcIik7XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIC8vIElzIGl0IHRoZSBmaXJzdCB0aW1lIHdlIHJ1biB0aGUgYXBwbGljYXRpb24/XG5cbiAgaWYgKHN0YXRlVXNlciAhPT0gbnVsbCkge1xuICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWVcbiAgICBsZXQgbXlMb2NhbFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIpO1xuICAgIGxldCBvYmplY3RMb2NhbFByb2plY3RzID0gSlNPTi5wYXJzZShteUxvY2FsUHJvamVjdHMpO1xuXG4gICAgbGV0IG51bWJlckxvY2FsUHJvamVjdHMgPSBvYmplY3RMb2NhbFByb2plY3RzLmFsbFByb2plY3RzLmxlbmd0aDtcblxuICAgIGlmIChudW1iZXJMb2NhbFByb2plY3RzID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJMb2NhbFByb2plY3RzOyBpKyspIHtcbiAgICAgICAgbGV0IHByb2plY3RJZCA9IG9iamVjdExvY2FsUHJvamVjdHMuYWxsUHJvamVjdHNbaV07XG4gICAgICAgIGxldCBteVByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0SWQpO1xuICAgICAgICBsZXQgbXlQcm9qZWN0UGFyc2VkID0gSlNPTi5wYXJzZShteVByb2plY3QpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0T2JqZWN0ID0gbXlQcm9qZWN0TWV0aG9kcyhteVByb2plY3RQYXJzZWQpO1xuICAgICAgICBsZXQgbmFtZVByb2plY3QgPSBwcm9qZWN0T2JqZWN0LmdldFByb2plY3ROYW1lKCk7XG5cbiAgICAgICAgbGV0IGNyZWF0ZUVsZW1lbnQgPSBlbGVtZW50UHJvamVjdChuYW1lUHJvamVjdCwgcHJvamVjdE9iamVjdCk7XG4gICAgICAgIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZpcnN0IHRpbWUgdXNlclxuICBpZiAoc3RhdGVVc2VyID09IG51bGwpIHtcbiAgICBzdGF0ZVVzZXIgPSBcImRlZmF1bHRcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXRlQXBwbGljYXRpb25cIiwgc3RhdGVVc2VyKTtcbiAgICBsaXN0T2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50U2FtcGxlT25lKTtcbiAgICBsaXN0T2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50U2FtcGxlVHdvKTtcbiAgICBzaG93VGFza3Moc2FtcGxlUHJvamVjdE9uZSk7XG4gIH1cbn1cblxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRTYW1wbGVPbmUpO1xuICBsaXN0T2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50U2FtcGxlVHdvKTtcbiAgc2hvd1Rhc2tzKHNhbXBsZVByb2plY3RPbmUpO1xufVxuXG4vLyBXaGF0IGhhcHBlbnMgd2hlbiB5b3UgcmVmcmVzaCB0aGUgcGFnZVxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgbGV0IGFjdGl2ZVByb2plY3ROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJBY3RpdmVQcm9qZWN0XCIpO1xuXG4gIGlmIChhY3RpdmVQcm9qZWN0TmFtZSAhPT0gbnVsbCAmJiBhY3RpdmVQcm9qZWN0TmFtZSAhPT0gXCJqdXN0RGVsZXRlZFwiKSB7XG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhY3RpdmVQcm9qZWN0TmFtZSk7XG5cbiAgICAvLyBUbyB1c2UgdGhlIG9iamVjdCdzIG1ldGhvZHNcbiAgICBsZXQgcGFyc2VkQWN0aXZlID0gSlNPTi5wYXJzZShhY3RpdmVQcm9qZWN0KTtcbiAgICBsZXQgYWN0aXZlUHJvamVjdE9iamVjdCA9IG15UHJvamVjdE1ldGhvZHMocGFyc2VkQWN0aXZlKTtcblxuICAgIHNldEFjdGl2ZVByb2plY3QoYWN0aXZlUHJvamVjdE9iamVjdCk7XG4gICAgbGV0IGFjdGl2ZVByb2plY3RUYXNrcyA9IGFjdGl2ZVByb2plY3RPYmplY3QuZ2V0VGFza0xpc3QoKTtcblxuICAgIGlmIChcbiAgICAgIGFjdGl2ZVByb2plY3QgIT09IG51bGwgJiZcbiAgICAgIGFjdGl2ZVByb2plY3QgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgYWN0aXZlUHJvamVjdFRhc2tzICE9PSB7fSAmJlxuICAgICAgYWN0aXZlUHJvamVjdE5hbWUgIT09IFwianVzdERlbGV0ZWRcIlxuICAgICkge1xuICAgICAgc2hvd1Rhc2tzKGFjdGl2ZVByb2plY3RPYmplY3QpO1xuICAgIH1cbiAgfVxufVxuXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsaWNrQWRkVGFzayhhY3RpdmVQcm9qZWN0KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9