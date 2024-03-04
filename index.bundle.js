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

let dateTaskOne = dayFirstTask + "/" + monthFirstTask + "/" + yearFistTask;
let dateTaskTwo = daySecondTask + "/" + monthSecondTask + "/" + yearSecondTask;
let dateTaskThree = dayThirdTask + "/" + monthThirdTask + "/" + yearThirdTask;




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
      newDueDate.textContent = eachTask.date;
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

  const rect = edit_element.getBoundingClientRect();
  const y_axis = edit_element.offsetTop;
  console.log("event", edit_element, y_axis);

  (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.setChosenTask)(event);

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
  let y_wr = y_axis + "px";
  editTaskDiv.style.top = y_wr;
  editTaskDiv.style.display = "block";
  console.log("event", edit_element, y_wr);
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
  // nameTask.value = "Name the task";
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
  sampleProjectOne.addTask("Read An Empty 0 House", _dates_js__WEBPACK_IMPORTED_MODULE_6__.dateTaskTwo);
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
  sampleProjectTwo.addTask("Read a great book", _dates_js__WEBPACK_IMPORTED_MODULE_6__.dateTaskThree, "HIGH", "sas");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxXQUFXLG9CQUFvQixXQUFXLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLGFBQWEsT0FBTyxRQUFRLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFFBQVEsT0FBTyxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFlBQVksYUFBYSxRQUFRLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGVBQWUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sU0FBUyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sVUFBVSxNQUFNLFlBQVksT0FBTyxXQUFXLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLFFBQVEsWUFBWSxPQUFPLFlBQVksUUFBUSxZQUFZLFFBQVEsV0FBVyxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sS0FBSyxPQUFPLGFBQWEsT0FBTyxhQUFhLEtBQUssa0JBQWtCLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sU0FBUyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLE1BQU0sTUFBTSxPQUFPLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxLQUFLLE1BQU0sT0FBTyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFNBQVMsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxXQUFXLEtBQUssY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksU0FBUyxLQUFLLGFBQWEsT0FBTyxNQUFNLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcs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O0FBQ2hFOztBQUVBO0FBQ0EsRUFBRSx1REFBUyxDQUFDLHVEQUFhO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS3dDO0FBQ2hCOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSw2REFBZ0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGtCQUFrQjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDZEQUFZO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRSw2REFBWTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsUUFBUSw2REFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDZEQUFnQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLCtEQUFjOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFjRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTnFCO0FBQzRCO0FBQ0g7O0FBRWhEO0FBQ0EsTUFBTSw2REFBZ0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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NkRBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSx3RUFBd0U7QUFDOUU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFRRTs7Ozs7OztVQ3ZPRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDcUI7QUFDNkM7QUFPM0M7QUFDd0M7QUFDckI7QUFDTTtBQUNxQjs7QUFFckU7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUksNkRBQWdCO0FBQ3BCOztBQUVBO0FBQ0Esb0JBQW9CLDJEQUFhO0FBQ2pDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOERBQWdCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw2REFBZ0I7QUFDckIsa0JBQWtCLDJEQUFhO0FBQy9CLHFCQUFxQiw4REFBZ0I7QUFDckM7O0FBRUEsS0FBSyw2REFBZ0I7QUFDckI7QUFDQTtBQUNBLElBQUksa0RBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0RBQVc7QUFDL0Q7O0FBRUEsSUFBSSw2REFBZ0I7QUFDcEI7QUFDQTs7QUFFQSxLQUFLLDZEQUFnQjtBQUNyQixFQUFFLDhEQUFnQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBLElBQUksNkRBQWdCO0FBQ3BCO0FBQ0Esd0JBQXdCLDJEQUFhO0FBQ3JDO0FBQ0E7QUFDQSx1QkFBdUIsOERBQWdCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssNkRBQWdCO0FBQ3JCLHNCQUFzQiwyREFBYTtBQUNuQyxxQkFBcUIsOERBQWdCO0FBQ3JDO0FBQ0E7O0FBRUEsS0FBSyw2REFBZ0I7QUFDckIsZ0RBQWdELG9EQUFhO0FBQzdEOztBQUVBLElBQUksNkRBQWdCO0FBQ3BCO0FBQ0E7O0FBRUEsS0FBSyw2REFBZ0I7QUFDckI7QUFDQTs7QUFFQSwyQkFBMkIsK0RBQWM7QUFDekM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiwrREFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsK0RBQWM7O0FBRW5DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFZO0FBQ2QsQ0FBQztBQUNELHNDQUFzQywyREFBWTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFXO0FBQy9CLG9CQUFvQix1REFBWTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSw2REFBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsOERBQWdCO0FBQzVDOztBQUVBLDRCQUE0QiwrREFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTs7QUFFQSxLQUFLLDZEQUFnQjtBQUNyQjtBQUNBO0FBQ0EsRUFBRSx1REFBUztBQUNYOztBQUVBO0FBQ0EsSUFBSSw2REFBZ0I7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLDhEQUFnQjs7QUFFOUMsSUFBSSw4REFBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxNQUFNLHVEQUFTO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwrREFBWSxDQUFDLHVEQUFhO0FBQzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kYXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0c0RvbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFdlIG5lZWQgdGhlIFwiYmRvOi1tb3otaGFzLWRpci1hdHRyXCIgYml0IGJlY2F1c2UgXCJiZG9cIiBoYXMgbG93ZXJcbiAgICBzcGVjaWZpY2l0eSB0aGFuIHRoZSBcIjotbW96LWhhcy1kaXItYXR0clwiIHNlbGVjdG9yIGFib3ZlLiAqL1xuYmRvLFxuYmRvOi1tb3otaGFzLWRpci1hdHRyIHtcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGUtb3ZlcnJpZGU7XG59XG5cbnRleHRhcmVhOi1tb3otZGlyLWF0dHItbGlrZS1hdXRvLFxucHJlOi1tb3otZGlyLWF0dHItbGlrZS1hdXRvIHtcbiAgICB1bmljb2RlLWJpZGk6IHBsYWludGV4dDtcbn1cblxuLyogYmxvY2tzICovXG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5kaXYsXG5kdCxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5mb3JtLFxuaGVhZGVyLFxuaGdyb3VwLFxuaHRtbCxcbm1haW4sXG5uYXYsXG5zZWFyY2gsXG5zZWN0aW9uLFxuc3VtbWFyeSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMFxufVxuXG5wLFxuZGwsXG5tdWx0aWNvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG5kZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcbn1cblxuYmxvY2txdW90ZSxcbmZpZ3VyZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDQwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDQwcHg7XG59XG5cbmFkZHJlc3Mge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuY2VudGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlcjtcbn1cblxuaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLjY3ZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjY3ZW07XG59XG5cbmgyLFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLjgzZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogLjgzZW07XG59XG5cbmgzLFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjE3ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG5oNCxcbjppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuMDBlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuMzNlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjMzZW07XG59XG5cbmg1LFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuODNlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuNjdlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxLjY3ZW07XG59XG5cbmg2LFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSBoMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjY3ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAyLjMzZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMi4zM2VtO1xufVxuXG5saXN0aW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogLW1vei1maXhlZDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbn1cblxueG1wLFxucHJlLFxucGxhaW50ZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogLW1vei1maXhlZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbn1cblxuLyogdGFibGVzICovXG5cbnRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgLyogWFhYbGRiIGRvIHdlIHdhbnQgdGhpcyBpZiB3ZSdyZSBib3JkZXItY29sbGFwc2U6Y29sbGFwc2UgPyAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1pbmRlbnQ6IDA7XG59XG5cbnRhYmxlW2FsaWduPVwibGVmdFwiXSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbnRhYmxlW2FsaWduPVwicmlnaHRcIl0ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuXG4vKiBib3JkZXIgY29sbGFwc2UgcnVsZXMgKi9cblxuLyogU2V0IGhpZGRlbiBpZiB3ZSBoYXZlICdmcmFtZScgb3IgJ3J1bGVzJyBhdHRyaWJ1dGUuXG4gICAgICBTZXQgaXQgb24gYWxsIHNpZGVzIHdoZW4gd2UgZG8gc28gdGhlcmUncyBtb3JlIGNvbnNpc3RlbmN5XG4gICAgICBpbiB3aGF0IGF1dGhvcnMgc2hvdWxkIGV4cGVjdCAqL1xuXG4vKiBQdXQgdGhpcyBmaXJzdCBzbyAnYm9yZGVyJyBhbmQgJ2ZyYW1lJyBydWxlcyBjYW4gb3ZlcnJpZGUgaXQuICovXG50YWJsZVtydWxlc10ge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcbn1cblxuLyogJ2JvcmRlcicgYmVmb3JlICdmcmFtZScgc28gJ2ZyYW1lJyBvdmVycmlkZXNcbiAgICAgICBBIGJvcmRlciB3aXRoIGEgZ2l2ZW4gdmFsdWUgc2hvdWxkLCBvZiBjb3Vyc2UsIHBhc3MgdGhhdCB2YWx1ZVxuICAgICAgIGFzIHRoZSBib3JkZXItd2lkdGggaW4gcGl4ZWxzIC0+IGF0dHIgbWFwcGluZyAqL1xuXG4vKiA6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyBpcyBsaWtlIFtib3JkZXJdOm5vdChbYm9yZGVyPVwiMFwiXSkgZXhjZXB0IGl0XG4gICAgICBhbHNvIGNoZWNrcyBmb3Igb3RoZXIgemVyby1saWtlIHZhbHVlcyBhY2NvcmRpbmcgdG8gSFRNTCBhdHRyaWJ1dGVcbiAgICAgIHBhcnNpbmcgcnVsZXMgKi9cbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8ge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbn1cblxudGFibGVbZnJhbWVdIHtcbiAgICBib3JkZXI6IHRoaW4gaGlkZGVuO1xufVxuXG4vKiBzcGVjaWZpY2l0eSBtdXN0IGJlYXQgdGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyBydWxlIGFib3ZlICovXG50YWJsZVtmcmFtZT1cInZvaWRcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cImFib3ZlXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldCBoaWRkZW4gaGlkZGVuIGhpZGRlbjtcbn1cblxudGFibGVbZnJhbWU9XCJiZWxvd1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gaGlkZGVuIG91dHNldCBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwibGhzXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBoaWRkZW4gaGlkZGVuIG91dHNldDtcbn1cblxudGFibGVbZnJhbWU9XCJyaHNcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIG91dHNldCBoaWRkZW4gaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cImhzaWRlc1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQgaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cInZzaWRlc1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gb3V0c2V0O1xufVxuXG50YWJsZVtmcmFtZT1cImJveFwiXSxcbnRhYmxlW2ZyYW1lPVwiYm9yZGVyXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbn1cblxuXG4vKiBJbnRlcm5hbCBUYWJsZSBCb3JkZXJzICovXG5cbi8qICdib3JkZXInIGNlbGwgYm9yZGVycyBmaXJzdCAqL1xuXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dHI+dGQsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dHI+dGgsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dGQsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dGgsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPnRkLFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz50aCB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XG59XG5cbi8qIGNvbGxhcHNlIG9ubHkgaWYgcnVsZXMgYXJlIHJlYWxseSBzcGVjaWZpZWQgKi9cbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwibm9uZVwiXSwgW3J1bGVzPVwiXCJdKSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLyogb25seSBzcGVjaWZpZWQgcnVsZXMgb3ZlcnJpZGUgJ2JvcmRlcicgc2V0dGluZ3NcbiAgIChpbmNyZWFzZWQgc3BlY2lmaWNpdHkgdG8gYWNoaWV2ZSB0aGlzKSAqL1xudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPnRyPnRkLFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPio+dHI+dGQsXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+dHI+dGgsXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+Kj50cj50aCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT50ZCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT50aCB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT4qPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+Kj50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+Kj50cj50ZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT4qPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxudGFibGVbcnVsZXNdW3J1bGVzPVwicm93c1wiXT50cixcbnRhYmxlW3J1bGVzXVtydWxlcz1cInJvd3NcIl0+Kj50ciB7XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYmxvY2stZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJjb2xzXCJdPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiY29sc1wiXT4qPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiY29sc1wiXT50cj50aCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImNvbHNcIl0+Kj50cj50aCB7XG4gICAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItaW5saW5lLWVuZC1zdHlsZTogc29saWQ7XG59XG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT5jb2xncm91cCB7XG4gICAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItaW5saW5lLWVuZC1zdHlsZTogc29saWQ7XG59XG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT50Zm9vdCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT50aGVhZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImdyb3Vwc1wiXT50Ym9keSB7XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYmxvY2stZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxuXG4vKiBjYXB0aW9uIGluaGVyaXRzIGZyb20gdGFibGUgbm90IHRhYmxlLW91dGVyICovXG5jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGVbYWxpZ249XCJjZW50ZXJcIl0+Y2FwdGlvbiB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcbn1cblxudGFibGVbYWxpZ249XCJjZW50ZXJcIl0+Y2FwdGlvblthbGlnbj1cImxlZnRcIl06ZGlyKGx0cikge1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwibGVmdFwiXTpkaXIocnRsKSB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbn1cblxudGFibGVbYWxpZ249XCJjZW50ZXJcIl0+Y2FwdGlvblthbGlnbj1cInJpZ2h0XCJdOmRpcihsdHIpIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwicmlnaHRcIl06ZGlyKHJ0bCkge1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuXG50ciB7XG4gICAgZGlzcGxheTogdGFibGUtcm93O1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xufVxuXG5jb2wge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbjtcbn1cblxuY29sZ3JvdXAge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbi1ncm91cDtcbn1cblxudGJvZHkge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG50aGVhZCB7XG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnRmb290IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1mb290ZXItZ3JvdXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogZm9yIFhIVE1MIHRhYmxlcyB3aXRob3V0IHRib2R5ICovXG50YWJsZT50ciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudGQge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XG4gICAgdGV4dC1hbGlnbjogdW5zZXQ7XG4gICAgcGFkZGluZzogMXB4O1xufVxuXG50aCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXItb3ItaW5oZXJpdDtcbn1cblxuOmlzKHRyLCB0Ym9keSwgdGhlYWQsIHRmb290LCB0YWJsZSk+Zm9ybTotbW96LWlzLWh0bWwge1xuICAgIC8qIEltcG9ydGFudDogZG9uJ3Qgc2hvdyB0aGVzZSBmb3JtcyBpbiBIVE1MICovXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG50YWJsZVtib3JkZXJjb2xvcl0+dGJvZHksXG50YWJsZVtib3JkZXJjb2xvcl0+dGhlYWQsXG50YWJsZVtib3JkZXJjb2xvcl0+dGZvb3QsXG50YWJsZVtib3JkZXJjb2xvcl0+Y29sLFxudGFibGVbYm9yZGVyY29sb3JdPmNvbGdyb3VwLFxudGFibGVbYm9yZGVyY29sb3JdPnRyLFxudGFibGVbYm9yZGVyY29sb3JdPio+dHIsXG50YWJsZVtib3JkZXJjb2xvcl0+dHI+dGQsXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cj50ZCxcbnRhYmxlW2JvcmRlcmNvbG9yXT50cj50aCxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyPnRoIHtcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIGlubGluZXMgKi9cblxucTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IG9wZW4tcXVvdGU7XG59XG5cbnE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGNsb3NlLXF1b3RlO1xufVxuXG5iLFxuc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5pLFxuY2l0ZSxcbmVtLFxudmFyLFxuZGZuIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbnR0LFxuY29kZSxcbmtiZCxcbnNhbXAge1xuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xufVxuXG51LFxuaW5zIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxucyxcbnN0cmlrZSxcbmRlbCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbmJpZyB7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbnNtYWxsIHtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbnN1YiB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbnN1cCB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxubm9iciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxubWFyayB7XG4gICAgYmFja2dyb3VuZDogTWFyaztcbiAgICBjb2xvcjogTWFya1RleHQ7XG59XG5cbi8qIHRpdGxlcyAqL1xuYWJiclt0aXRsZV0sXG5hY3JvbnltW3RpdGxlXSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBkb3R0ZWQgdW5kZXJsaW5lO1xufVxuXG4vKiBsaXN0cyAqL1xuXG51bCxcbm1lbnUsXG5kaXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG59XG5cbnVsLFxub2wsXG5tZW51IHtcbiAgICBjb3VudGVyLXJlc2V0OiBsaXN0LWl0ZW07XG59XG5cbm9sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xufVxuXG5saSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgIHRleHQtYWxpZ246IG1hdGNoLXBhcmVudDtcbn1cblxuLyogbmVzdGVkIGxpc3RzIGhhdmUgbm8gdG9wL2JvdHRvbSBtYXJnaW5zICovXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSB1bCxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIG9sLFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGlyLFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgbWVudSxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIGRsIHtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbn1cblxuLyogMiBkZWVwIHVub3JkZXJlZCBsaXN0cyB1c2UgYSBjaXJjbGUgKi9cbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgdWwsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIG1lbnUsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIGRpciB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG59XG5cbi8qIDMgZGVlcCAob3IgbW9yZSkgdW5vcmRlcmVkIGxpc3RzIHVzZSBhIHNxdWFyZSAqL1xuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSA6aXMob2wsIHVsLCBtZW51LCBkaXIpIHVsLFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSA6aXMob2wsIHVsLCBtZW51LCBkaXIpIG1lbnUsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgZGlyIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbn1cblxuXG4vKiBsZWFmcyAqL1xuXG4vKiA8aHI+IG5vc2hhZGUgYW5kIGNvbG9yIGF0dHJpYnV0ZXMgYXJlIGhhbmRsZWQgY29tcGxldGVseSBieVxuICAqIEhUTUxIUkVsZW1lbnQ6Ok1hcEF0dHJpYnV0ZXNJbnRvUnVsZS5cbiAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtaHItZWxlbWVudC0yXG4gICovXG5ociB7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDAuNWVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8qIEZJWE1FOiBUaGlzIGlzIG5vdCByZWFsbHkgcGVyIHNwZWMgKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaHJbc2l6ZT1cIjFcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZSBub25lIG5vbmU7XG59XG5cbi8qIE5vdGUgdGhhdCB3ZSBvbmx5IGludGVuZCBmb3IgdGhlIGFsdCBjb250ZW50IHRvIHNob3cgdXAgaWYgdGhlIGltYWdlIGlzXG4gICogYnJva2VuLiBCdXQgbm9uLWJyb2tlbiBpbWFnZXMvaW5wdXRzIHdpbGwgaGF2ZSBhIHJlcGxhY2VkIGJveCwgYW5kIHRodXMgd2VcbiAgKiB3b24ndCB3ZSBkb24ndCBnZW5lcmF0ZSB0aGUgcHNldWRvLWVsZW1lbnQgYW55d2F5cy4gVGhpcyBwcmV2ZW50c1xuICAqIHVubmVjZXNzYXJ5IHJlZnJhbWluZyB3aGVuIGltYWdlcyBiZWNvbWUgYnJva2VuIC8gbm9uLWJyb2tlbi4gKi9cbmlucHV0W3R5cGU9aW1hZ2VdOjpiZWZvcmUsXG5pbWc6OmJlZm9yZSB7XG4gICAgY29udGVudDogLW1vei1hbHQtY29udGVudCAhaW1wb3J0YW50O1xuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcbn1cblxuaW1nW3VzZW1hcF0sXG5vYmplY3RbdXNlbWFwXSB7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbmZyYW1lc2V0IHtcbiAgICBkaXNwbGF5OiBibG9jayAhIGltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogY2xpcDtcbiAgICBwb3NpdGlvbjogc3RhdGljICEgaW1wb3J0YW50O1xuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhIGltcG9ydGFudDtcbn1cblxuZnJhbWUge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgISBpbXBvcnRhbnQ7XG59XG5cbmlmcmFtZSB7XG4gICAgYm9yZGVyOiAycHggaW5zZXQ7XG59XG5cbnNwYWNlciB7XG4gICAgcG9zaXRpb246IHN0YXRpYyAhIGltcG9ydGFudDtcbiAgICBmbG9hdDogbm9uZSAhIGltcG9ydGFudDtcbn1cblxuY2FudmFzIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuaWZyYW1lOmZvY3VzLXZpc2libGUsXG5ib2R5OmZvY3VzLXZpc2libGUsXG5odG1sOmZvY3VzLXZpc2libGUge1xuICAgIC8qIFRoZXNlIGVsZW1lbnRzIGhpc3RvcmljYWxseSBkb24ndCBzaG93IG91dGxpbmVzIHdoZW4gZm9jdXNlZCBieSBkZWZhdWx0LlxuICAgICogV2UgY291bGQgY29uc2lkZXIgY2hhbmdpbmcgdGhhdCBpZiBuZWVkZWQuICovXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbn1cblxuLyogaGlkZGVuIGVsZW1lbnRzOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNoaWRkZW4tZWxlbWVudHNcbiAgKlxuICAqIEV4Y2VwdGlvbnM6XG4gICpcbiAgKiAgKiBhcmVhIGRlY2xhcmF0aW9uIG5lZWRzIHRvIGJlICFpbXBvcnRhbnQsIHNlZSBiZWxvdyAvIGJ1ZyAxMzUwNDAuICBUaGF0J3NcbiAgKiAgICBoYWNreSBhbmQgYnJva2VuLlxuICAqXG4gICogICogW2hpZGRlbl0gaXMgaW1wbGVtZW50ZWQgYXMgYSBwcmVzZW50YXRpb24gYXR0cmlidXRlIHRvIGF2b2lkIGEgZ2xvYmFsXG4gICogICAgc2VsZWN0b3IgaW4gYSBVQSBzaGVldC5cbiAgKi9cbmJhc2UsXG5iYXNlZm9udCxcbmRhdGFsaXN0LFxuaGVhZCxcbmxpbmssXG5tZXRhLFxubm9lbWJlZCxcbm5vZnJhbWVzLFxucGFyYW0sXG5ycCxcbnNjcmlwdCxcbnN0eWxlLFxudGVtcGxhdGUsXG50aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuYXJlYSB7XG4gICAgLyogRG9uJ3QgZ2l2ZSBpdCBmcmFtZXMgb3RoZXIgdGhhbiBpdHMgaW1hZ2VmcmFtZSAqL1xuICAgIGRpc3BsYXk6IG5vbmUgISBpbXBvcnRhbnQ7XG59XG5cbmlmcmFtZTpmdWxsc2NyZWVuIHtcbiAgICAvKiBpZnJhbWVzIGluIGZ1bGwtc2NyZWVuIG1vZGUgZG9uJ3Qgc2hvdyBhIGJvcmRlci4gKi9cbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4vKiBEZXRhaWxzIGFuZCBzdW1tYXJ5XG4gICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGhlLWRldGFpbHMtYW5kLXN1bW1hcnktZWxlbWVudHNcbiAgKlxuICAqIE5vdGUgdGhhdCB0aGVzZSBydWxlcyBuZWVkIHRvIGJlIGR1cGxpY2F0ZWQgaW4gZGV0YWlscy5jc3MgZm9yIHRoZSBhbm9ueW1vdXNcbiAgKiBzdW1tYXJ5LCB3aGljaCB3b3VsZG4ndCBtYXRjaCBvdGhlcndpc2UuXG4gICpcbiAgKiBUaGUgc3BlYyBoZXJlIHNheXMgc29tZXRoaW5nIGRpZmZlcmVudCwgc2VlXG4gICogaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy84NjEwXG4gICovXG5kZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LWl0ZW0gMDtcbiAgICBsaXN0LXN0eWxlOiBkaXNjbG9zdXJlLWNsb3NlZCBpbnNpZGU7XG59XG5cbmRldGFpbHNbb3Blbl0+c3VtbWFyeTpmaXJzdC1vZi10eXBlIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2Nsb3N1cmUtb3Blbjtcbn1cblxuLyogbWVkaWEgZWxlbWVudHMgKi9cbnZpZGVvIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG52aWRlbz5pbWc6LW1vei1uYXRpdmUtYW5vbnltb3VzIHtcbiAgICAvKiBWaWRlbyBwb3N0ZXIgaW1hZ2VzIHNob3VsZCByZW5kZXIgd2l0aCB0aGUgdmlkZW8gZWxlbWVudCdzIFwib2JqZWN0LWZpdFwiICZcbiAgICAgIFwib2JqZWN0LXBvc2l0aW9uXCIgcHJvcGVydGllcyAqL1xuICAgIG9iamVjdC1maXQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICBvYmplY3QtcG9zaXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmF1ZGlvW2NvbnRyb2xzXSB7XG4gICAgLyogVGhpcyBlbnN1cmVzIHRoYXQgaW50cmluc2ljIHNpemluZyBjYW4gcmVsaWFibHkgc2hyaW5rd3JhcCBvdXJcbiAgICAgICBjb250cm9scyAod2hpY2ggYXJlIGFsc28gYWx3YXlzIGhvcml6b250YWwpIGFuZCBwcm9kdWNlIGFcbiAgICAgICByZWFzb25hYmxlIGludHJpbnNpYyBzaXplIGZyb20gdGhlbS4gKi9cbiAgICB3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGIgIWltcG9ydGFudDtcbn1cblxuKnwqOjotbW96LWh0bWwtY2FudmFzLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgLyogd2Ugd2FudCB0byBiZSBhbiBhYnNvbHV0ZSBhbmQgZml4ZWQgY29udGFpbmVyICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgIWltcG9ydGFudDtcbn1cblxudmlkZW8+LmNhcHRpb24tYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKipcbiAgKiBUaGUgcHNldWRvIGVsZW1lbnQgd29uJ3QgaW5oZXJpdCBDU1Mgc3R5bGVzIGZyb20gaXRzIGRpcmVjdCBwYXJlbnQsIFxcYDo6Y3VlXFxgXG4gICogd291bGQgYWN0dWFsbHkgaW5oZXJpdCBzdHlsZXMgZnJvbSB2aWRlbyBiZWNhdXNlIGl0J3MgdmlkZW8ncyBwc2V1ZG8gZWxlbWVudC5cbiAgKiBUaGVyZWZvcmUsIHdlIGhhdmUgdG8gZXhwbGljaXRseSBzZXQgc29tZSBzdHlsZXMgd2hpY2ggYXJlIGFscmVhZHkgZGVmaW5lZFxuICAqIGluIGl0cyBwYXJlbnQgZWxlbWVudCBpbiB2dHQuanNtLlxuICAqL1xuOjpjdWUge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY3VlLWZvbnQtc2l6ZSk7XG4gICAgd3JpdGluZy1tb2RlOiB2YXIoLS1jdWUtd3JpdGluZy1tb2RlLCBpbmhlcml0KTtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIC8qIFRPRE8gOiBlbmFibGUgdW5pY29kZS1iaWRpLCByaWdodCBub3cgZW5hYmxlIGl0IHdvdWxkIGNhdXNlIGluY29ycmVjdFxuICAgICAgICAgICAgIGRpc3BsYXkgZGlyZWN0aW9uLCBtYXliZSByZWxhdGVkIHdpdGggYnVnIDE1NTg0MzEuICovXG59XG5cbi8qIDxkaWFsb2c+IGVsZW1lbnQgc3R5bGVzICovXG5cbmRpYWxvZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGluc2V0LWlubGluZS1zdGFydDogMDtcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItd2lkdGg6IGluaXRpYWw7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXM7XG4gICAgY29sb3I6IENhbnZhc1RleHQ7XG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xufVxuXG5kaWFsb2c6bm90KFtvcGVuXSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpYWxvZzptb2RhbCB7XG4gICAgLW1vei10b3AtbGF5ZXI6IHRvcCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGluc2V0LWJsb2NrLXN0YXJ0OiAwO1xuICAgIGluc2V0LWJsb2NrLWVuZDogMDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDZweCAtIDJlbSk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcbn1cblxuLyogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jZmxvdy1jb250ZW50LTMgKi9cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxubWFycXVlZSB7XG4gICAgaW5saW5lLXNpemU6IC1tb3otYXZhaWxhYmxlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbm1hcnF1ZWU6aXMoW2RpcmVjdGlvbj1cInVwXCJdLCBbZGlyZWN0aW9uPVwiZG93blwiXSkge1xuICAgIGJsb2NrLXNpemU6IDIwMHB4O1xufVxuXG4vKiBSdWJ5ICovXG5cbnJ1Ynkge1xuICAgIGRpc3BsYXk6IHJ1Ynk7XG59XG5cbnJiIHtcbiAgICBkaXNwbGF5OiBydWJ5LWJhc2U7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxucnQge1xuICAgIGRpc3BsYXk6IHJ1YnktdGV4dDtcbn1cblxucnRjIHtcbiAgICBkaXNwbGF5OiBydWJ5LXRleHQtY29udGFpbmVyO1xufVxuXG5ydGMsXG5ydCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IDUwJTtcbiAgICAtbW96LW1pbi1mb250LXNpemUtcmF0aW86IDUwJTtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cblxuQG1lZGlhIG5vdCAoLW1vei1wbGF0Zm9ybTogd2luZG93cykge1xuXG4gICAgcnRjLFxuICAgIHJ0IHtcbiAgICAgICAgLyogVGhlIHdpZGVseS11c2VkIFdpbmRvd3MgZm9udCBNZWlyeW8gZG9lc24ndCB3b3JrIGZpbmUgd2l0aCB0aGlzXG4gICAgICogc2V0dGluZywgc28gZGlzYWJsZSB0aGlzIG9uIFdpbmRvd3MuIFdlIHNob3VsZCByZS1lbmFibGUgaXQgb25jZVxuICAgICAqIE1pY3Jvc29mdCBmaXhlcyB0aGlzIGlzc3VlLiBTZWUgYnVnIDExNjQyNzkuICovXG4gICAgICAgIGZvbnQtdmFyaWFudC1lYXN0LWFzaWFuOiBydWJ5O1xuICAgIH1cbn1cblxucnRjLFxucnQge1xuICAgIHRleHQtZW1waGFzaXM6IG5vbmU7XG59XG5cbnJ0YzpsYW5nKHpoKSxcbnJ0OmxhbmcoemgpIHtcbiAgICBydWJ5LWFsaWduOiBjZW50ZXI7XG59XG5cbnJ0YzpsYW5nKHpoLVRXKSxcbnJ0OmxhbmcoemgtVFcpIHtcbiAgICBmb250LXNpemU6IDMwJTtcbiAgICAvKiBib3BvbW9mbyAqL1xuICAgIC1tb3otbWluLWZvbnQtc2l6ZS1yYXRpbzogMzAlO1xufVxuXG5ydGM+cnQge1xuICAgIGZvbnQtc2l6ZTogdW5zZXQ7XG59XG5cbnJ1YnksXG5yYixcbnJ0LFxucnRjIHtcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGU7XG59XG5cbi8qIFNoYWRvdyBET00gdjFcbiAgKiBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXNjb3BpbmcvI3Nsb3RzLWluLXNoYWRvdy10cmVlICovXG5zbG90IHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLyogVW4taW52ZXJ0IGltYWdlcyBhbmQgdmlkZW9zIGZvciB1c2VycyB1c2luZyBpbnZlcnRlZCBjb2xvcnMuXG4gICogXCJVc2VyIGFnZW50cyBtdXN0IGFkZCB0aGUgZm9sbG93aW5nIHJ1bGUgdG8gdGhlaXIgVUEgc3R5bGUgc2hlZXRcIlxuICAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNS8jaW52ZXJ0ZWRcbiAgKi9cbkBtZWRpYSAoaW52ZXJ0ZWQtY29sb3JzKSB7XG5cbiAgICBpbWc6bm90KHBpY3R1cmUgPiBpbWcpLFxuICAgIHBpY3R1cmUsXG4gICAgdmlkZW8ge1xuICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbiAgICB9XG59XG5cbi8qIEhpZGUgbm9zY3JpcHQgZWxlbWVudHMgaWYgc2NyaXB0aW5nIGlzIGVuYWJsZWQgKi9cbkBtZWRpYSAoc2NyaXB0aW5nKSB7XG4gICAgbm9zY3JpcHQge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgcHJpbnQge1xuXG4gICAgaW5wdXQsXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0LFxuICAgIGJ1dHRvbixcbiAgICBkZXRhaWxzIHtcbiAgICAgICAgLW1vei11c2VyLWlucHV0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4vKiBQb3BvdmVyIFVBIHN0eWxlLCBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNmbG93LWNvbnRlbnQtMyAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhLXF1ZXJ5LW5vLWludmFsaWQgKi9cbkBtZWRpYSAoLW1vei1ib29sLXByZWY6IFwiZG9tLmVsZW1lbnQucG9wb3Zlci5lbmFibGVkXCIpIHtcbiAgICBbcG9wb3Zlcl06bm90KDpwb3BvdmVyLW9wZW4pOm5vdChkaWFsb2dbb3Blbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBkaWFsb2c6cG9wb3Zlci1vcGVuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgW3BvcG92ZXJdIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJvcmRlcjogc29saWQ7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGNvbG9yOiBDYW52YXNUZXh0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXM7XG4gICAgfVxuXG4gICAgOnBvcG92ZXItb3BlbiB7XG4gICAgICAgIC1tb3otdG9wLWxheWVyOiB0b3A7XG4gICAgfVxuXG4gICAgOnBvcG92ZXItb3Blbjo6YmFja2Ryb3Age1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cblxuXG5cblxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG5cblxufVxuXG4uaGVhZGVyUGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgMjUwLCA2MSwgMC43OTkpO1xuICAgIGhlaWdodDogMS4ycmVtO1xuICAgIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cbiAgICAvKiBwYWRkaW5nOiAwLjJyZW0gMDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2ZpcnN0XSAzNSUgW3NlY29uZF0gNjUlIFtlbmRdO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiA2MzNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG5cblxuLmxlZnRTZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcblxufVxuXG4ucmlnaHRTZWN0aW9uIHtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG59XG5cblxuLnByb2plY3RzIHtcbiAgICBtYXJnaW46IDVyZW0gYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMTUwLCAxMjIsIDAuMjgpO1xuICAgIHBhZGRpbmc6IDVweCAzcHggMTVweCAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuXG4jcHJvamVjdHNIZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjc1Nik7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuXG4jcHJvamVjdHNUaXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XG5cbn1cblxuI3N0YXJ0UHJvamVjdEJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMTIpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA5MCU7XG59XG5cblxuI3N0YXJ0UHJvamVjdEJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuODk0KTtcbn1cblxuI2lucHV0UHJvamVjdCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDEwcHggMCA1cHggMDtcbn1cblxuXG4udGFza3NVbml0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyNDQsIDEyOSk7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLnRpdGxlVGFzayB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzNywgMTkyKTtcbn1cblxuLnRhc2tEYXRlUHJpb3JpdHkge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnRhc2tEYXRlIHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbn1cblxuLnRhc2tQcmlvcml0eSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cblxuXG5cbi50YXNrVW5pdEltcG9ydGFudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MSwgMjM4LCAxMzIpO1xufVxuXG4udGFza1VuaXRVcmdlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMjU1LCAwKTtcbn1cblxuXG5cbi5wcm9qZWN0c1VuaXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuXG59XG5cbi5idXR0b25Qcm9qZWN0cyxcbi5hY3RpdmVQcm9qZWN0IHtcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNTtcbiAgICBwbGFjZS1zZWxmOiBzdHJldGNoO1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLmJ1dHRvblByb2plY3RzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xufVxuXG4uYnV0dG9uUHJvamVjdHM6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMjA3LCAyMDcpO1xufVxuXG5cblxuXG5cbi5yZW1vdmVQcm9qZWN0cyB7XG4gICAgZ3JpZC1jb2x1bW46IDcgLyA4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG59XG5cbi5hY3RpdmVQcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MjA0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFjdGl2ZVByb2plY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCAyMDgsIDMwKTtcbn1cblxuXG5cbiNsaXN0UHJvamVjdHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uaGlkZVJlbW92ZUJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5cblxuI2FkZFByb2plY3REaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDE1MSwgMjIyKTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIHRvcDogMXJlbTtcbn1cblxuLyogcmlnaHQgc2lkZSAqL1xuXG4udGFza3Mge1xuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCA3NCwgMTYpO1xufVxuXG4jdGFza3NUaXRsZSB7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hZGRUYXNrIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxNik7XG59XG5cblxuLmFkZFRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDI0OCwgNjQsIDAuNDE0KTtcbn1cblxuXG4udGFza0NvbnRhaW5lckZpcnN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNsZWFyOiByaWdodDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbi50YXNrQ29udGFpbmVyRmlyc3Q+ZGl2IHtcbiAgICBtYXJnaW46IDVweDtcblxufVxuXG5cbiNlZGl0VGFza0RpdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDAlO1xuXG4gICAgbWluLXdpZHRoOiAzODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW5cbn1cblxuI2FkZFRhc2tEaXYge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0NSU7XG4gICAgdG9wOiA0cmVtO1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbiNlZGl0VGFza0Zvcm0ge1xuICAgIG1hcmdpbjogOHB4O1xufVxuXG4jYWRkVGFza0Zvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBwYWRkaW5nOiA3cHg7XG59XG5cbmxhYmVsW2Zvcj1cIm5ld1Rhc2tcIl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDAuNHJlbSAwIDEuNHJlbSAwO1xufVxuXG4jYWRkUHJvamVjdEZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbiNsYWJlbFByb2plY3Qge1xuICAgIG1hcmdpbjogLjRyZW0gMS41cmVtO1xufVxuXG4jYnV0dG9uUHJvamVjdEZvcm0ge1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTk5LCAxMTMpXG59XG5cbiNidXR0b25Qcm9qZWN0Rm9ybTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjA2LCAxMDMpXG59XG5cblxuc3BhbiB7XG4gICAgbWFyZ2luOiA1cHggMzBweDtcbn1cblxuXG5cbi5sYWJlbFByaW9yaXR5IHtcbiAgICAvKiBkaXNwbGF5OiA7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cblxubGFiZWxbZm9yPVwidGV4dEFyZWFUYXNrXCJdIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jZGF0ZURpdixcbiNwcmlvcml0eURpdixcbiNub3Rlc0RpdiB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4jcHJpb3JpdHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubXlOb3RlcyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDgwLCAyNTUpO1xuICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICBtYXJnaW46IDVweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGFza1NldHRpbmdzIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwLjVyZW0gYXV0bztcbn1cblxuLnRhc2tTZXR0aW5ncz5idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4wNzEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhc2tTZXR0aW5ncz5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuLnRhc2tTZXR0aW5ncz4ucmVtb3ZlVGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMTIsIDEyKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG4udGFza0NvbXBsZXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbn1cblxuLnRhc2tDb21wbGV0ZWQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xufVxuXG4udGFza0NvbXBsZXRlZCAuYnV0dG9uRWRpdFRhc2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOytEQUMrRDtBQUMvRDs7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBLFdBQVc7O0FBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qs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Z0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7OztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7Ozs7O0FBS0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTs7O0lBR0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7Ozs7QUFJQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOzs7O0FBSUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBXZSBuZWVkIHRoZSBcXFwiYmRvOi1tb3otaGFzLWRpci1hdHRyXFxcIiBiaXQgYmVjYXVzZSBcXFwiYmRvXFxcIiBoYXMgbG93ZXJcXG4gICAgc3BlY2lmaWNpdHkgdGhhbiB0aGUgXFxcIjotbW96LWhhcy1kaXItYXR0clxcXCIgc2VsZWN0b3IgYWJvdmUuICovXFxuYmRvLFxcbmJkbzotbW96LWhhcy1kaXItYXR0ciB7XFxuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZS1vdmVycmlkZTtcXG59XFxuXFxudGV4dGFyZWE6LW1vei1kaXItYXR0ci1saWtlLWF1dG8sXFxucHJlOi1tb3otZGlyLWF0dHItbGlrZS1hdXRvIHtcXG4gICAgdW5pY29kZS1iaWRpOiBwbGFpbnRleHQ7XFxufVxcblxcbi8qIGJsb2NrcyAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5kaXYsXFxuZHQsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuZm9ybSxcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbmh0bWwsXFxubWFpbixcXG5uYXYsXFxuc2VhcmNoLFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMFxcbn1cXG5cXG5wLFxcbmRsLFxcbm11bHRpY29sIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxufVxcblxcbmRkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDQwcHg7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxuZmlndXJlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDQwcHg7XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA0MHB4O1xcbn1cXG5cXG5hZGRyZXNzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuY2VudGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLjY3ZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IC42N2VtO1xcbn1cXG5cXG5oMixcXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLjgzZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IC44M2VtO1xcbn1cXG5cXG5oMyxcXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4xN2VtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG59XFxuXFxuaDQsXFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxLjAwZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuMzNlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMS4zM2VtO1xcbn1cXG5cXG5oNSxcXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAwLjgzZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuNjdlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMS42N2VtO1xcbn1cXG5cXG5oNixcXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMC42N2VtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAyLjMzZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDIuMzNlbTtcXG59XFxuXFxubGlzdGluZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LWZhbWlseTogLW1vei1maXhlZDtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxufVxcblxcbnhtcCxcXG5wcmUsXFxucGxhaW50ZXh0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbn1cXG5cXG4vKiB0YWJsZXMgKi9cXG5cXG50YWJsZSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgICAvKiBYWFhsZGIgZG8gd2Ugd2FudCB0aGlzIGlmIHdlJ3JlIGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZSA/ICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtaW5kZW50OiAwO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwibGVmdFxcXCJdIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuXFxuLyogYm9yZGVyIGNvbGxhcHNlIHJ1bGVzICovXFxuXFxuLyogU2V0IGhpZGRlbiBpZiB3ZSBoYXZlICdmcmFtZScgb3IgJ3J1bGVzJyBhdHRyaWJ1dGUuXFxuICAgICAgU2V0IGl0IG9uIGFsbCBzaWRlcyB3aGVuIHdlIGRvIHNvIHRoZXJlJ3MgbW9yZSBjb25zaXN0ZW5jeVxcbiAgICAgIGluIHdoYXQgYXV0aG9ycyBzaG91bGQgZXhwZWN0ICovXFxuXFxuLyogUHV0IHRoaXMgZmlyc3Qgc28gJ2JvcmRlcicgYW5kICdmcmFtZScgcnVsZXMgY2FuIG92ZXJyaWRlIGl0LiAqL1xcbnRhYmxlW3J1bGVzXSB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XFxufVxcblxcbi8qICdib3JkZXInIGJlZm9yZSAnZnJhbWUnIHNvICdmcmFtZScgb3ZlcnJpZGVzXFxuICAgICAgIEEgYm9yZGVyIHdpdGggYSBnaXZlbiB2YWx1ZSBzaG91bGQsIG9mIGNvdXJzZSwgcGFzcyB0aGF0IHZhbHVlXFxuICAgICAgIGFzIHRoZSBib3JkZXItd2lkdGggaW4gcGl4ZWxzIC0+IGF0dHIgbWFwcGluZyAqL1xcblxcbi8qIDotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIGlzIGxpa2UgW2JvcmRlcl06bm90KFtib3JkZXI9XFxcIjBcXFwiXSkgZXhjZXB0IGl0XFxuICAgICAgYWxzbyBjaGVja3MgZm9yIG90aGVyIHplcm8tbGlrZSB2YWx1ZXMgYWNjb3JkaW5nIHRvIEhUTUwgYXR0cmlidXRlXFxuICAgICAgcGFyc2luZyBydWxlcyAqL1xcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8ge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xcbn1cXG5cXG50YWJsZVtmcmFtZV0ge1xcbiAgICBib3JkZXI6IHRoaW4gaGlkZGVuO1xcbn1cXG5cXG4vKiBzcGVjaWZpY2l0eSBtdXN0IGJlYXQgdGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyBydWxlIGFib3ZlICovXFxudGFibGVbZnJhbWU9XFxcInZvaWRcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwiYWJvdmVcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0IGhpZGRlbiBoaWRkZW4gaGlkZGVuO1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwiYmVsb3dcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIGhpZGRlbiBvdXRzZXQgaGlkZGVuO1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwibGhzXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBoaWRkZW4gaGlkZGVuIG91dHNldDtcXG59XFxuXFxudGFibGVbZnJhbWU9XFxcInJoc1xcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gb3V0c2V0IGhpZGRlbiBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJoc2lkZXNcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0IGhpZGRlbjtcXG59XFxuXFxudGFibGVbZnJhbWU9XFxcInZzaWRlc1xcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gb3V0c2V0O1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwiYm94XFxcIl0sXFxudGFibGVbZnJhbWU9XFxcImJvcmRlclxcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XFxufVxcblxcblxcbi8qIEludGVybmFsIFRhYmxlIEJvcmRlcnMgKi9cXG5cXG4vKiAnYm9yZGVyJyBjZWxsIGJvcmRlcnMgZmlyc3QgKi9cXG5cXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dHI+dGQsXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz4qPnRyPnRoLFxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50ZCxcXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dGgsXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz50ZCxcXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPnRoIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcbn1cXG5cXG4vKiBjb2xsYXBzZSBvbmx5IGlmIHJ1bGVzIGFyZSByZWFsbHkgc3BlY2lmaWVkICovXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIm5vbmVcXFwiXSwgW3J1bGVzPVxcXCJcXFwiXSkge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4vKiBvbmx5IHNwZWNpZmllZCBydWxlcyBvdmVycmlkZSAnYm9yZGVyJyBzZXR0aW5nc1xcbiAgIChpbmNyZWFzZWQgc3BlY2lmaWNpdHkgdG8gYWNoaWV2ZSB0aGlzKSAqL1xcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVxcXCJcXFwiXSk+dHI+dGQsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT4qPnRyPnRkLFxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVxcXCJcXFwiXSk+dHI+dGgsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT4qPnRyPnRoLFxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVxcXCJcXFwiXSk+dGQsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT50aCB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT4qPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPnRyPnRoLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPio+dHI+dGgsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+dGgge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJhbGxcXFwiXT50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPio+dHI+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJhbGxcXFwiXT50cj50aCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPio+dHI+dGgsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJhbGxcXFwiXT50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPnRoIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcInJvd3NcXFwiXT50cixcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcInJvd3NcXFwiXT4qPnRyIHtcXG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItYmxvY2stZW5kLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItYmxvY2stZW5kLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJjb2xzXFxcIl0+dHI+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJjb2xzXFxcIl0+Kj50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImNvbHNcXFwiXT50cj50aCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImNvbHNcXFwiXT4qPnRyPnRoIHtcXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWlubGluZS1lbmQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItaW5saW5lLWVuZC1zdHlsZTogc29saWQ7XFxufVxcblxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiZ3JvdXBzXFxcIl0+Y29sZ3JvdXAge1xcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1pbmxpbmUtZW5kLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJncm91cHNcXFwiXT50Zm9vdCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImdyb3Vwc1xcXCJdPnRoZWFkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiZ3JvdXBzXFxcIl0+dGJvZHkge1xcbiAgICBib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1ibG9jay1zdGFydC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1ibG9jay1lbmQtc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG5cXG4vKiBjYXB0aW9uIGluaGVyaXRzIGZyb20gdGFibGUgbm90IHRhYmxlLW91dGVyICovXFxuY2FwdGlvbiB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudGFibGVbYWxpZ249XFxcImNlbnRlclxcXCJdPmNhcHRpb24ge1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcXG59XFxuXFxudGFibGVbYWxpZ249XFxcImNlbnRlclxcXCJdPmNhcHRpb25bYWxpZ249XFxcImxlZnRcXFwiXTpkaXIobHRyKSB7XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvblthbGlnbj1cXFwibGVmdFxcXCJdOmRpcihydGwpIHtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcXG59XFxuXFxudGFibGVbYWxpZ249XFxcImNlbnRlclxcXCJdPmNhcHRpb25bYWxpZ249XFxcInJpZ2h0XFxcIl06ZGlyKGx0cikge1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvblthbGlnbj1cXFwicmlnaHRcXFwiXTpkaXIocnRsKSB7XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xcbn1cXG5cXG50ciB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcXG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XFxufVxcblxcbmNvbCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbjtcXG59XFxuXFxuY29sZ3JvdXAge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jb2x1bW4tZ3JvdXA7XFxufVxcblxcbnRib2R5IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50aGVhZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxudGZvb3Qge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1mb290ZXItZ3JvdXA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qIGZvciBYSFRNTCB0YWJsZXMgd2l0aG91dCB0Ym9keSAqL1xcbnRhYmxlPnRyIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxudGQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogdW5zZXQ7XFxuICAgIHBhZGRpbmc6IDFweDtcXG59XFxuXFxudGgge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXItb3ItaW5oZXJpdDtcXG59XFxuXFxuOmlzKHRyLCB0Ym9keSwgdGhlYWQsIHRmb290LCB0YWJsZSk+Zm9ybTotbW96LWlzLWh0bWwge1xcbiAgICAvKiBJbXBvcnRhbnQ6IGRvbid0IHNob3cgdGhlc2UgZm9ybXMgaW4gSFRNTCAqL1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbnRhYmxlW2JvcmRlcmNvbG9yXT50Ym9keSxcXG50YWJsZVtib3JkZXJjb2xvcl0+dGhlYWQsXFxudGFibGVbYm9yZGVyY29sb3JdPnRmb290LFxcbnRhYmxlW2JvcmRlcmNvbG9yXT5jb2wsXFxudGFibGVbYm9yZGVyY29sb3JdPmNvbGdyb3VwLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT50cixcXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cixcXG50YWJsZVtib3JkZXJjb2xvcl0+dHI+dGQsXFxudGFibGVbYm9yZGVyY29sb3JdPio+dHI+dGQsXFxudGFibGVbYm9yZGVyY29sb3JdPnRyPnRoLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyPnRoIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBpbmxpbmVzICovXFxuXFxucTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBvcGVuLXF1b3RlO1xcbn1cXG5cXG5xOmFmdGVyIHtcXG4gICAgY29udGVudDogY2xvc2UtcXVvdGU7XFxufVxcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuaSxcXG5jaXRlLFxcbmVtLFxcbnZhcixcXG5kZm4ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbnR0LFxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogLW1vei1maXhlZDtcXG59XFxuXFxudSxcXG5pbnMge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxucyxcXG5zdHJpa2UsXFxuZGVsIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbmJpZyB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG59XFxuXFxuc3ViIHtcXG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG5zdXAge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG59XFxuXFxubm9iciB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbm1hcmsge1xcbiAgICBiYWNrZ3JvdW5kOiBNYXJrO1xcbiAgICBjb2xvcjogTWFya1RleHQ7XFxufVxcblxcbi8qIHRpdGxlcyAqL1xcbmFiYnJbdGl0bGVdLFxcbmFjcm9ueW1bdGl0bGVdIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBkb3R0ZWQgdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBsaXN0cyAqL1xcblxcbnVsLFxcbm1lbnUsXFxuZGlyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XFxufVxcblxcbnVsLFxcbm9sLFxcbm1lbnUge1xcbiAgICBjb3VudGVyLXJlc2V0OiBsaXN0LWl0ZW07XFxufVxcblxcbm9sIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgICB0ZXh0LWFsaWduOiBtYXRjaC1wYXJlbnQ7XFxufVxcblxcbi8qIG5lc3RlZCBsaXN0cyBoYXZlIG5vIHRvcC9ib3R0b20gbWFyZ2lucyAqL1xcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIHVsLFxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIG9sLFxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIGRpcixcXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSBtZW51LFxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIGRsIHtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbn1cXG5cXG4vKiAyIGRlZXAgdW5vcmRlcmVkIGxpc3RzIHVzZSBhIGNpcmNsZSAqL1xcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgdWwsXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBtZW51LFxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgZGlyIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxufVxcblxcbi8qIDMgZGVlcCAob3IgbW9yZSkgdW5vcmRlcmVkIGxpc3RzIHVzZSBhIHNxdWFyZSAqL1xcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgOmlzKG9sLCB1bCwgbWVudSwgZGlyKSB1bCxcXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgbWVudSxcXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgZGlyIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XFxufVxcblxcblxcbi8qIGxlYWZzICovXFxuXFxuLyogPGhyPiBub3NoYWRlIGFuZCBjb2xvciBhdHRyaWJ1dGVzIGFyZSBoYW5kbGVkIGNvbXBsZXRlbHkgYnlcXG4gICogSFRNTEhSRWxlbWVudDo6TWFwQXR0cmlidXRlc0ludG9SdWxlLlxcbiAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtaHItZWxlbWVudC0yXFxuICAqL1xcbmhyIHtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwLjVlbTtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIC8qIEZJWE1FOiBUaGlzIGlzIG5vdCByZWFsbHkgcGVyIHNwZWMgKi9cXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmhyW3NpemU9XFxcIjFcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZSBub25lIG5vbmU7XFxufVxcblxcbi8qIE5vdGUgdGhhdCB3ZSBvbmx5IGludGVuZCBmb3IgdGhlIGFsdCBjb250ZW50IHRvIHNob3cgdXAgaWYgdGhlIGltYWdlIGlzXFxuICAqIGJyb2tlbi4gQnV0IG5vbi1icm9rZW4gaW1hZ2VzL2lucHV0cyB3aWxsIGhhdmUgYSByZXBsYWNlZCBib3gsIGFuZCB0aHVzIHdlXFxuICAqIHdvbid0IHdlIGRvbid0IGdlbmVyYXRlIHRoZSBwc2V1ZG8tZWxlbWVudCBhbnl3YXlzLiBUaGlzIHByZXZlbnRzXFxuICAqIHVubmVjZXNzYXJ5IHJlZnJhbWluZyB3aGVuIGltYWdlcyBiZWNvbWUgYnJva2VuIC8gbm9uLWJyb2tlbi4gKi9cXG5pbnB1dFt0eXBlPWltYWdlXTo6YmVmb3JlLFxcbmltZzo6YmVmb3JlIHtcXG4gICAgY29udGVudDogLW1vei1hbHQtY29udGVudCAhaW1wb3J0YW50O1xcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGU7XFxufVxcblxcbmltZ1t1c2VtYXBdLFxcbm9iamVjdFt1c2VtYXBdIHtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcbmZyYW1lc2V0IHtcXG4gICAgZGlzcGxheTogYmxvY2sgISBpbXBvcnRhbnQ7XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbiAgICBwb3NpdGlvbjogc3RhdGljICEgaW1wb3J0YW50O1xcbiAgICBmbG9hdDogbm9uZSAhIGltcG9ydGFudDtcXG4gICAgYm9yZGVyOiBub25lICEgaW1wb3J0YW50O1xcbn1cXG5cXG5mcmFtZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgISBpbXBvcnRhbnQ7XFxufVxcblxcbmlmcmFtZSB7XFxuICAgIGJvcmRlcjogMnB4IGluc2V0O1xcbn1cXG5cXG5zcGFjZXIge1xcbiAgICBwb3NpdGlvbjogc3RhdGljICEgaW1wb3J0YW50O1xcbiAgICBmbG9hdDogbm9uZSAhIGltcG9ydGFudDtcXG59XFxuXFxuY2FudmFzIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmlmcmFtZTpmb2N1cy12aXNpYmxlLFxcbmJvZHk6Zm9jdXMtdmlzaWJsZSxcXG5odG1sOmZvY3VzLXZpc2libGUge1xcbiAgICAvKiBUaGVzZSBlbGVtZW50cyBoaXN0b3JpY2FsbHkgZG9uJ3Qgc2hvdyBvdXRsaW5lcyB3aGVuIGZvY3VzZWQgYnkgZGVmYXVsdC5cXG4gICAgKiBXZSBjb3VsZCBjb25zaWRlciBjaGFuZ2luZyB0aGF0IGlmIG5lZWRlZC4gKi9cXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogaGlkZGVuIGVsZW1lbnRzOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNoaWRkZW4tZWxlbWVudHNcXG4gICpcXG4gICogRXhjZXB0aW9uczpcXG4gICpcXG4gICogICogYXJlYSBkZWNsYXJhdGlvbiBuZWVkcyB0byBiZSAhaW1wb3J0YW50LCBzZWUgYmVsb3cgLyBidWcgMTM1MDQwLiAgVGhhdCdzXFxuICAqICAgIGhhY2t5IGFuZCBicm9rZW4uXFxuICAqXFxuICAqICAqIFtoaWRkZW5dIGlzIGltcGxlbWVudGVkIGFzIGEgcHJlc2VudGF0aW9uIGF0dHJpYnV0ZSB0byBhdm9pZCBhIGdsb2JhbFxcbiAgKiAgICBzZWxlY3RvciBpbiBhIFVBIHNoZWV0LlxcbiAgKi9cXG5iYXNlLFxcbmJhc2Vmb250LFxcbmRhdGFsaXN0LFxcbmhlYWQsXFxubGluayxcXG5tZXRhLFxcbm5vZW1iZWQsXFxubm9mcmFtZXMsXFxucGFyYW0sXFxucnAsXFxuc2NyaXB0LFxcbnN0eWxlLFxcbnRlbXBsYXRlLFxcbnRpdGxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYXJlYSB7XFxuICAgIC8qIERvbid0IGdpdmUgaXQgZnJhbWVzIG90aGVyIHRoYW4gaXRzIGltYWdlZnJhbWUgKi9cXG4gICAgZGlzcGxheTogbm9uZSAhIGltcG9ydGFudDtcXG59XFxuXFxuaWZyYW1lOmZ1bGxzY3JlZW4ge1xcbiAgICAvKiBpZnJhbWVzIGluIGZ1bGwtc2NyZWVuIG1vZGUgZG9uJ3Qgc2hvdyBhIGJvcmRlci4gKi9cXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIERldGFpbHMgYW5kIHN1bW1hcnlcXG4gICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGhlLWRldGFpbHMtYW5kLXN1bW1hcnktZWxlbWVudHNcXG4gICpcXG4gICogTm90ZSB0aGF0IHRoZXNlIHJ1bGVzIG5lZWQgdG8gYmUgZHVwbGljYXRlZCBpbiBkZXRhaWxzLmNzcyBmb3IgdGhlIGFub255bW91c1xcbiAgKiBzdW1tYXJ5LCB3aGljaCB3b3VsZG4ndCBtYXRjaCBvdGhlcndpc2UuXFxuICAqXFxuICAqIFRoZSBzcGVjIGhlcmUgc2F5cyBzb21ldGhpbmcgZGlmZmVyZW50LCBzZWVcXG4gICogaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy84NjEwXFxuICAqL1xcbmRldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlIHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgICBjb3VudGVyLWluY3JlbWVudDogbGlzdC1pdGVtIDA7XFxuICAgIGxpc3Qtc3R5bGU6IGRpc2Nsb3N1cmUtY2xvc2VkIGluc2lkZTtcXG59XFxuXFxuZGV0YWlsc1tvcGVuXT5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2Nsb3N1cmUtb3BlbjtcXG59XFxuXFxuLyogbWVkaWEgZWxlbWVudHMgKi9cXG52aWRlbyB7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbnZpZGVvPmltZzotbW96LW5hdGl2ZS1hbm9ueW1vdXMge1xcbiAgICAvKiBWaWRlbyBwb3N0ZXIgaW1hZ2VzIHNob3VsZCByZW5kZXIgd2l0aCB0aGUgdmlkZW8gZWxlbWVudCdzIFxcXCJvYmplY3QtZml0XFxcIiAmXFxuICAgICAgXFxcIm9iamVjdC1wb3NpdGlvblxcXCIgcHJvcGVydGllcyAqL1xcbiAgICBvYmplY3QtZml0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xcbn1cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmF1ZGlvW2NvbnRyb2xzXSB7XFxuICAgIC8qIFRoaXMgZW5zdXJlcyB0aGF0IGludHJpbnNpYyBzaXppbmcgY2FuIHJlbGlhYmx5IHNocmlua3dyYXAgb3VyXFxuICAgICAgIGNvbnRyb2xzICh3aGljaCBhcmUgYWxzbyBhbHdheXMgaG9yaXpvbnRhbCkgYW5kIHByb2R1Y2UgYVxcbiAgICAgICByZWFzb25hYmxlIGludHJpbnNpYyBzaXplIGZyb20gdGhlbS4gKi9cXG4gICAgd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7XFxufVxcblxcbip8Kjo6LW1vei1odG1sLWNhbnZhcy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gICAgLyogd2Ugd2FudCB0byBiZSBhbiBhYnNvbHV0ZSBhbmQgZml4ZWQgY29udGFpbmVyICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApICFpbXBvcnRhbnQ7XFxufVxcblxcbnZpZGVvPi5jYXB0aW9uLWJveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyoqXFxuICAqIFRoZSBwc2V1ZG8gZWxlbWVudCB3b24ndCBpbmhlcml0IENTUyBzdHlsZXMgZnJvbSBpdHMgZGlyZWN0IHBhcmVudCwgYDo6Y3VlYFxcbiAgKiB3b3VsZCBhY3R1YWxseSBpbmhlcml0IHN0eWxlcyBmcm9tIHZpZGVvIGJlY2F1c2UgaXQncyB2aWRlbydzIHBzZXVkbyBlbGVtZW50LlxcbiAgKiBUaGVyZWZvcmUsIHdlIGhhdmUgdG8gZXhwbGljaXRseSBzZXQgc29tZSBzdHlsZXMgd2hpY2ggYXJlIGFscmVhZHkgZGVmaW5lZFxcbiAgKiBpbiBpdHMgcGFyZW50IGVsZW1lbnQgaW4gdnR0LmpzbS5cXG4gICovXFxuOjpjdWUge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1jdWUtZm9udC1zaXplKTtcXG4gICAgd3JpdGluZy1tb2RlOiB2YXIoLS1jdWUtd3JpdGluZy1tb2RlLCBpbmhlcml0KTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgLyogVE9ETyA6IGVuYWJsZSB1bmljb2RlLWJpZGksIHJpZ2h0IG5vdyBlbmFibGUgaXQgd291bGQgY2F1c2UgaW5jb3JyZWN0XFxuICAgICAgICAgICAgIGRpc3BsYXkgZGlyZWN0aW9uLCBtYXliZSByZWxhdGVkIHdpdGggYnVnIDE1NTg0MzEuICovXFxufVxcblxcbi8qIDxkaWFsb2c+IGVsZW1lbnQgc3R5bGVzICovXFxuXFxuZGlhbG9nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAwO1xcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlci13aWR0aDogaW5pdGlhbDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzO1xcbiAgICBjb2xvcjogQ2FudmFzVGV4dDtcXG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG59XFxuXFxuZGlhbG9nOm5vdChbb3Blbl0pIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGlhbG9nOm1vZGFsIHtcXG4gICAgLW1vei10b3AtbGF5ZXI6IHRvcCAhaW1wb3J0YW50O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBpbnNldC1ibG9jay1zdGFydDogMDtcXG4gICAgaW5zZXQtYmxvY2stZW5kOiAwO1xcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDZweCAtIDJlbSk7XFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDZweCAtIDJlbSk7XFxufVxcblxcbi8qIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2Zsb3ctY29udGVudC0zICovXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxubWFycXVlZSB7XFxuICAgIGlubGluZS1zaXplOiAtbW96LWF2YWlsYWJsZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5tYXJxdWVlOmlzKFtkaXJlY3Rpb249XFxcInVwXFxcIl0sIFtkaXJlY3Rpb249XFxcImRvd25cXFwiXSkge1xcbiAgICBibG9jay1zaXplOiAyMDBweDtcXG59XFxuXFxuLyogUnVieSAqL1xcblxcbnJ1Ynkge1xcbiAgICBkaXNwbGF5OiBydWJ5O1xcbn1cXG5cXG5yYiB7XFxuICAgIGRpc3BsYXk6IHJ1YnktYmFzZTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxucnQge1xcbiAgICBkaXNwbGF5OiBydWJ5LXRleHQ7XFxufVxcblxcbnJ0YyB7XFxuICAgIGRpc3BsYXk6IHJ1YnktdGV4dC1jb250YWluZXI7XFxufVxcblxcbnJ0YyxcXG5ydCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgICAtbW96LW1pbi1mb250LXNpemUtcmF0aW86IDUwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbkBtZWRpYSBub3QgKC1tb3otcGxhdGZvcm06IHdpbmRvd3MpIHtcXG5cXG4gICAgcnRjLFxcbiAgICBydCB7XFxuICAgICAgICAvKiBUaGUgd2lkZWx5LXVzZWQgV2luZG93cyBmb250IE1laXJ5byBkb2Vzbid0IHdvcmsgZmluZSB3aXRoIHRoaXNcXG4gICAgICogc2V0dGluZywgc28gZGlzYWJsZSB0aGlzIG9uIFdpbmRvd3MuIFdlIHNob3VsZCByZS1lbmFibGUgaXQgb25jZVxcbiAgICAgKiBNaWNyb3NvZnQgZml4ZXMgdGhpcyBpc3N1ZS4gU2VlIGJ1ZyAxMTY0Mjc5LiAqL1xcbiAgICAgICAgZm9udC12YXJpYW50LWVhc3QtYXNpYW46IHJ1Ynk7XFxuICAgIH1cXG59XFxuXFxucnRjLFxcbnJ0IHtcXG4gICAgdGV4dC1lbXBoYXNpczogbm9uZTtcXG59XFxuXFxucnRjOmxhbmcoemgpLFxcbnJ0OmxhbmcoemgpIHtcXG4gICAgcnVieS1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5ydGM6bGFuZyh6aC1UVyksXFxucnQ6bGFuZyh6aC1UVykge1xcbiAgICBmb250LXNpemU6IDMwJTtcXG4gICAgLyogYm9wb21vZm8gKi9cXG4gICAgLW1vei1taW4tZm9udC1zaXplLXJhdGlvOiAzMCU7XFxufVxcblxcbnJ0Yz5ydCB7XFxuICAgIGZvbnQtc2l6ZTogdW5zZXQ7XFxufVxcblxcbnJ1YnksXFxucmIsXFxucnQsXFxucnRjIHtcXG4gICAgdW5pY29kZS1iaWRpOiBpc29sYXRlO1xcbn1cXG5cXG4vKiBTaGFkb3cgRE9NIHYxXFxuICAqIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtc2NvcGluZy8jc2xvdHMtaW4tc2hhZG93LXRyZWUgKi9cXG5zbG90IHtcXG4gICAgZGlzcGxheTogY29udGVudHM7XFxufVxcblxcbi8qIFVuLWludmVydCBpbWFnZXMgYW5kIHZpZGVvcyBmb3IgdXNlcnMgdXNpbmcgaW52ZXJ0ZWQgY29sb3JzLlxcbiAgKiBcXFwiVXNlciBhZ2VudHMgbXVzdCBhZGQgdGhlIGZvbGxvd2luZyBydWxlIHRvIHRoZWlyIFVBIHN0eWxlIHNoZWV0XFxcIlxcbiAgKiBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTUvI2ludmVydGVkXFxuICAqL1xcbkBtZWRpYSAoaW52ZXJ0ZWQtY29sb3JzKSB7XFxuXFxuICAgIGltZzpub3QocGljdHVyZSA+IGltZyksXFxuICAgIHBpY3R1cmUsXFxuICAgIHZpZGVvIHtcXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbiAgICB9XFxufVxcblxcbi8qIEhpZGUgbm9zY3JpcHQgZWxlbWVudHMgaWYgc2NyaXB0aW5nIGlzIGVuYWJsZWQgKi9cXG5AbWVkaWEgKHNjcmlwdGluZykge1xcbiAgICBub3NjcmlwdCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHByaW50IHtcXG5cXG4gICAgaW5wdXQsXFxuICAgIHRleHRhcmVhLFxcbiAgICBzZWxlY3QsXFxuICAgIGJ1dHRvbixcXG4gICAgZGV0YWlscyB7XFxuICAgICAgICAtbW96LXVzZXItaW5wdXQ6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG59XFxuXFxuLyogUG9wb3ZlciBVQSBzdHlsZSwgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jZmxvdy1jb250ZW50LTMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWEtcXVlcnktbm8taW52YWxpZCAqL1xcbkBtZWRpYSAoLW1vei1ib29sLXByZWY6IFxcXCJkb20uZWxlbWVudC5wb3BvdmVyLmVuYWJsZWRcXFwiKSB7XFxuICAgIFtwb3BvdmVyXTpub3QoOnBvcG92ZXItb3Blbik6bm90KGRpYWxvZ1tvcGVuXSkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBkaWFsb2c6cG9wb3Zlci1vcGVuIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIFtwb3BvdmVyXSB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBpbnNldDogMDtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBib3JkZXI6IHNvbGlkO1xcbiAgICAgICAgcGFkZGluZzogMC4yNWVtO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBjb2xvcjogQ2FudmFzVGV4dDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IENhbnZhcztcXG4gICAgfVxcblxcbiAgICA6cG9wb3Zlci1vcGVuIHtcXG4gICAgICAgIC1tb3otdG9wLWxheWVyOiB0b3A7XFxuICAgIH1cXG5cXG4gICAgOnBvcG92ZXItb3Blbjo6YmFja2Ryb3Age1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgaW5zZXQ6IDA7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG5cXG5cXG59XFxuXFxuLmhlYWRlclBhZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCAyNTAsIDYxLCAwLjc5OSk7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICAvKiBmb250LXNpemU6IDJyZW07ICovXFxuICAgIC8qIHBhZGRpbmc6IDAuMnJlbSAwOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtmaXJzdF0gMzUlIFtzZWNvbmRdIDY1JSBbZW5kXTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiA2MzNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuXFxuXFxuLmxlZnRTZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxuXFxufVxcblxcbi5yaWdodFNlY3Rpb24ge1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW46IDVyZW0gYXV0bztcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMTUwLCAxMjIsIDAuMjgpO1xcbiAgICBwYWRkaW5nOiA1cHggM3B4IDE1cHggM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcblxcbiNwcm9qZWN0c0hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjc1Nik7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG59XFxuXFxuI3Byb2plY3RzVGl0bGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xcblxcbn1cXG5cXG4jc3RhcnRQcm9qZWN0QnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxMik7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOTAlO1xcbn1cXG5cXG5cXG4jc3RhcnRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuODk0KTtcXG59XFxuXFxuI2lucHV0UHJvamVjdCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xcbn1cXG5cXG5cXG4udGFza3NVbml0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjQ0LCAxMjkpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udGl0bGVUYXNrIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzcsIDE5Mik7XFxufVxcblxcbi50YXNrRGF0ZVByaW9yaXR5IHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnRhc2tEYXRlIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGFza1ByaW9yaXR5IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuXFxuXFxuXFxuLnRhc2tVbml0SW1wb3J0YW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MSwgMjM4LCAxMzIpO1xcbn1cXG5cXG4udGFza1VuaXRVcmdlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEsIDI1NSwgMCk7XFxufVxcblxcblxcblxcbi5wcm9qZWN0c1VuaXQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uYnV0dG9uUHJvamVjdHMsXFxuLmFjdGl2ZVByb2plY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNTtcXG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmJ1dHRvblByb2plY3RzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG59XFxuXFxuLmJ1dHRvblByb2plY3RzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAyMDcsIDIwNyk7XFxufVxcblxcblxcblxcblxcblxcbi5yZW1vdmVQcm9qZWN0cyB7XFxuICAgIGdyaWQtY29sdW1uOiA3IC8gODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG59XFxuXFxuLmFjdGl2ZVByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MjA0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hY3RpdmVQcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDIwOCwgMzApO1xcbn1cXG5cXG5cXG5cXG4jbGlzdFByb2plY3RzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4uaGlkZVJlbW92ZUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblxcblxcbiNhZGRQcm9qZWN0RGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTUxLCAyMjIpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDFyZW07XFxuICAgIHRvcDogMXJlbTtcXG59XFxuXFxuLyogcmlnaHQgc2lkZSAqL1xcblxcbi50YXNrcyB7XFxuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCA3NCwgMTYpO1xcbn1cXG5cXG4jdGFza3NUaXRsZSB7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmFkZFRhc2sge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE2KTtcXG59XFxuXFxuXFxuLmFkZFRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAyNDgsIDY0LCAwLjQxNCk7XFxufVxcblxcblxcbi50YXNrQ29udGFpbmVyRmlyc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjbGVhcjogcmlnaHQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxufVxcblxcbi50YXNrQ29udGFpbmVyRmlyc3Q+ZGl2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuXFxufVxcblxcblxcbiNlZGl0VGFza0RpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDAlO1xcblxcbiAgICBtaW4td2lkdGg6IDM4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW5cXG59XFxuXFxuI2FkZFRhc2tEaXYge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0NSU7XFxuICAgIHRvcDogNHJlbTtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuI2VkaXRUYXNrRm9ybSB7XFxuICAgIG1hcmdpbjogOHB4O1xcbn1cXG5cXG4jYWRkVGFza0Zvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxuICAgIG1hcmdpbjogOHB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwibmV3VGFza1xcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiAwLjRyZW0gMCAxLjRyZW0gMDtcXG59XFxuXFxuI2FkZFByb2plY3RGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4jbGFiZWxQcm9qZWN0IHtcXG4gICAgbWFyZ2luOiAuNHJlbSAxLjVyZW07XFxufVxcblxcbiNidXR0b25Qcm9qZWN0Rm9ybSB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAxOTksIDExMylcXG59XFxuXFxuI2J1dHRvblByb2plY3RGb3JtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjA2LCAxMDMpXFxufVxcblxcblxcbnNwYW4ge1xcbiAgICBtYXJnaW46IDVweCAzMHB4O1xcbn1cXG5cXG5cXG5cXG4ubGFiZWxQcmlvcml0eSB7XFxuICAgIC8qIGRpc3BsYXk6IDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcblxcbmxhYmVsW2Zvcj1cXFwidGV4dEFyZWFUYXNrXFxcIl0ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2RhdGVEaXYsXFxuI3ByaW9yaXR5RGl2LFxcbiNub3Rlc0RpdiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubXlOb3RlcyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgODAsIDI1NSk7XFxuICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi50YXNrU2V0dGluZ3Mge1xcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwLjVyZW0gYXV0bztcXG59XFxuXFxuLnRhc2tTZXR0aW5ncz5idXR0b24ge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4wNzEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50YXNrU2V0dGluZ3M+YnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5cXG4udGFza1NldHRpbmdzPi5yZW1vdmVUYXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMTIsIDEyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5cXG4udGFza0NvbXBsZXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4udGFza0NvbXBsZXRlZCBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG4udGFza0NvbXBsZXRlZCAuYnV0dG9uRWRpdFRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbmxldCBteVllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xubGV0IG15TW9udGggPSB0b2RheS5nZXRNb250aCgpO1xubGV0IG15RGF5ID0gdG9kYXkuZ2V0RGF0ZSgpO1xuXG5sZXQgZGF5Rmlyc3RUYXNrLCBtb250aEZpcnN0VGFzaywgeWVhckZpc3RUYXNrO1xubGV0IGRheVNlY29uZFRhc2ssIG1vbnRoU2Vjb25kVGFzaywgeWVhclNlY29uZFRhc2s7XG5sZXQgZGF5VGhpcmRUYXNrLCBtb250aFRoaXJkVGFzaywgeWVhclRoaXJkVGFzaztcblxuW3llYXJGaXN0VGFzaywgeWVhclNlY29uZFRhc2ssIHllYXJUaGlyZFRhc2tdID0gW215WWVhciwgbXlZZWFyLCBteVllYXJdO1xuXG5pZiAobXlEYXkgPD0gMTUpIHtcbiAgZGF5Rmlyc3RUYXNrID0gbXlEYXkgKyA2O1xuICBkYXlTZWNvbmRUYXNrID0gbXlEYXkgKyA4O1xuICBkYXlUaGlyZFRhc2sgPSBteURheSArIDQ7XG59IGVsc2Uge1xuICBkYXlGaXJzdFRhc2sgPSBteURheSAtIDY7XG4gIGRheVNlY29uZFRhc2sgPSBteURheSAtIDg7XG4gIGRheVRoaXJkVGFzayA9IG15RGF5IC0gNDtcbn1cblxuaWYgKG15TW9udGggPD0gNykge1xuICBtb250aEZpcnN0VGFzayA9IG15TW9udGggKyAzO1xuICBtb250aFNlY29uZFRhc2sgPSBteU1vbnRoICsgMTtcbiAgbW9udGhUaGlyZFRhc2sgPSBteU1vbnRoICsgMjtcbn0gZWxzZSBpZiAobXlNb250aCA8PSA5KSB7XG4gIG1vbnRoRmlyc3RUYXNrID0gbXlNb250aCArIDM7XG4gIG1vbnRoU2Vjb25kVGFzayA9IG15TW9udGggKyAxO1xuICBtb250aFRoaXJkVGFzayA9IG15TW9udGggKyAyO1xufSBlbHNlIHtcbiAgbW9udGhGaXJzdFRhc2sgPSAzO1xuICB5ZWFyRmlzdFRhc2sgKz0gMTtcbiAgbW9udGhTZWNvbmRUYXNrID0gMTtcbiAgeWVhclNlY29uZFRhc2sgKz0gMTtcbiAgbW9udGhUaGlyZFRhc2sgPSAyO1xuICB5ZWFyVGhpcmRUYXNrICs9IDE7XG59XG5cbmxldCBkYXRlVGFza09uZSA9IGRheUZpcnN0VGFzayArIFwiL1wiICsgbW9udGhGaXJzdFRhc2sgKyBcIi9cIiArIHllYXJGaXN0VGFzaztcbmxldCBkYXRlVGFza1R3byA9IGRheVNlY29uZFRhc2sgKyBcIi9cIiArIG1vbnRoU2Vjb25kVGFzayArIFwiL1wiICsgeWVhclNlY29uZFRhc2s7XG5sZXQgZGF0ZVRhc2tUaHJlZSA9IGRheVRoaXJkVGFzayArIFwiL1wiICsgbW9udGhUaGlyZFRhc2sgKyBcIi9cIiArIHllYXJUaGlyZFRhc2s7XG5cbmV4cG9ydCB7IGRhdGVUYXNrT25lLCBkYXRlVGFza1R3bywgZGF0ZVRhc2tUaHJlZSB9O1xuIiwiaW1wb3J0IHsgYWN0aXZlUHJvamVjdCwgY2hvc2VuVGFzaywgc2hvd1Rhc2tzIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGdldEZvcm1EYXRhVGFzayB9IGZyb20gXCIuL3Rhc2tDb250YWluZXIuanNcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRUYXNrKCkge1xuICAvLyBydW5zIHdoZW4gdGhlIGZvcm0gaXMgc3ViXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gRWRpdGVkIGRhdGEgKHRoZSBkYXRhIHRoYXQgd2Ugc3VibWl0IGFzIGNvcnJlY3Rpb25zKVxuICBjb25zdCBmb3JtRWRpdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0Zvcm1cIik7XG4gIGNvbnN0IHRhc2tEYXRhRWRpdCA9IGdldEZvcm1EYXRhVGFzayhmb3JtRWRpdGVkKTtcblxuICAvLyBNb2RpZnkgdGhlIGRhdGFcbiAgYWN0aXZlUHJvamVjdC5tb2RpZnlUYXNrKGNob3NlblRhc2ssIHRhc2tEYXRhRWRpdFswXSk7XG5cbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gYWN0aXZlUHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGFjdGl2ZVByb2plY3QpKTtcbiAgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tEaXZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBzaG93VGFza3MoYWN0aXZlUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrRm9ybSgpIHtcbiAgLy8gVGhlIGZvcm0gaXMgYWRkZWQgaW4gdGhlIGluZGV4LmpzXG5cbiAgY29uc3QgY29udGFpbmVyRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lckVkaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0VGFza0RpdlwiKTtcblxuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIC8vIE5hbWUgdGhlIFRhc2tcbiAgY29uc3QgZWxlbWVudE5hbWVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGFiZWxUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gIGxhYmVsVGFzay5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0VGFza1wiKTtcblxuICBjb25zdCBuYW1lVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZVRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0VGFza1wiKTtcbiAgbmFtZVRhc2sudmFsdWUgPSBcIk5hbWUgdGhlIHRhc2tcIjtcbiAgbmFtZVRhc2sudHlwZSA9IFwidGV4dFwiO1xuICBuYW1lVGFzay5uYW1lID0gXCJuYW1lXCI7XG5cbiAgZWxlbWVudE5hbWVUYXNrLmFwcGVuZENoaWxkKGxhYmVsVGFzayk7XG4gIGVsZW1lbnROYW1lVGFzay5hcHBlbmRDaGlsZChuYW1lVGFzayk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVsZW1lbnROYW1lVGFzayk7XG5cbiAgLy8gRHVlIERhdGVcbiAgY29uc3QgZWxlbWVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50RGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVEaXZcIik7XG5cbiAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIkRhdGU6IFwiO1xuICBsYWJlbERhdGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlRGF0ZUVkaXRcIik7XG5cbiAgY29uc3QgaW5wdXREYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXREYXRlVGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVFZGl0XCIpO1xuICBpbnB1dERhdGVUYXNrLnR5cGUgPSBcImRhdGVcIjtcbiAgaW5wdXREYXRlVGFzay5uYW1lID0gXCJkYXRlXCI7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGlucHV0RGF0ZVRhc2spO1xuXG4gIGVsZW1lbnREYXRlLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gIGVsZW1lbnREYXRlLmFwcGVuZENoaWxkKGlucHV0RGF0ZVRhc2spO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlbGVtZW50RGF0ZSk7XG5cbiAgLy8gUHJpb3JpdHlcblxuICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eURpdkVkaXRcIik7XG5cbiAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICBwcmlvcml0eVRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlFZGl0XCIpO1xuXG4gIC8vIEhJR0hcbiAgY29uc3QgaW5wdXRQcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaFByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJISUdIXCIpO1xuXG4gIGlucHV0UHJpb3JpdHlIaWdoLnR5cGUgPSBcInJhZGlvXCI7XG4gIGlucHV0UHJpb3JpdHlIaWdoLm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gXCJISUdIXCI7XG4gIGxhYmVsUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eUVkaXRcIik7XG4gIGxhYmVsUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImhpZ2hQcmlvcml0eUVkaXRcIik7XG5cbiAgLy8gTUVESVVNXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lZGl1bVByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1FRElVTVwiKTtcblxuICBpbnB1dFByaW9yaXR5TWVkaXVtLnR5cGUgPSBcInJhZGlvXCI7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0ubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNRURJVU1cIjtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsUHJpb3JpdHlFZGl0XCIpO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lZGl1bVByaW9yaXR5RWRpdFwiKTtcblxuICAvLyBMT1dcbiAgY29uc3QgaW5wdXRQcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93UHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTE9XXCIpO1xuXG4gIGlucHV0UHJpb3JpdHlMb3cudHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eUxvdy5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxPV1wiO1xuICBsYWJlbFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eUVkaXRcIik7XG4gIGxhYmVsUHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG93UHJpb3JpdHlFZGl0XCIpO1xuXG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eVRpdGxlKTtcblxuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eUhpZ2gpO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eUhpZ2gpO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eU1lZGl1bSk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5TWVkaXVtKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlMb3cpO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eUxvdyk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RWxlbWVudCk7XG5cbiAgLy8gTm90ZXNcblxuICBjb25zdCBub3Rlc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub3Rlc0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3Rlc0RpdlwiKTtcblxuICBjb25zdCBub3Rlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBub3Rlc1RpdGxlLnRleHRDb250ZW50ID0gXCJOb3Rlc1wiO1xuICBub3Rlc1RpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRleHRBcmVhVGFza0VkaXRcIik7XG4gIGNvbnN0IHRhc2tUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGV4dEFyZWFUYXNrRWRpdFwiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjUwXCIpO1xuICB0YXNrVGV4dEFyZWEubmFtZSA9IFwidGV4dEFyZWFUYXNrXCI7XG5cbiAgbm90ZXNFbGVtZW50LmFwcGVuZENoaWxkKG5vdGVzVGl0bGUpO1xuICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza1RleHRBcmVhKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQobm90ZXNFbGVtZW50KTtcblxuICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRUYXNrRm9ybVwiKTtcbiAgY29udGFpbmVyRWRpdC5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5cbiAgLy8gQnV0dG9uIEVkaXRcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25FZGl0VGFza1wiKTtcbiAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRURJVFwiO1xuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRFZGl0VGFzaywgZmFsc2UpO1xuXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXJFZGl0O1xufVxuXG5leHBvcnQgeyBlZGl0VGFza0Zvcm0gfTtcbiIsImltcG9ydCB7IGVsZW1lbnRQcm9qZWN0LCBkb21TaG93VGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0c0RvbS5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxubGV0IGFjdGl2ZVByb2plY3Q7XG5sZXQgY2hvc2VuVGFzaztcblxuZnVuY3Rpb24gc2V0Q2hvc2VuVGFzayh0YXNrKSB7XG4gIGNob3NlblRhc2sgPSB0YXNrO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHNldFByb2plY3QpIHtcbiAgbGV0IHByb2plY3RJZDtcbiAgbGV0IGVsZW1lbnRJZDtcbiAgLy8gV2Ugc2V0IHRoZSBhY3RpdmUgcHJvamVjdCBhbmQgY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgYnV0dG9uXG4gIGlmIChhY3RpdmVQcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9qZWN0SWQgPSBhY3RpdmVQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICB9XG5cbiAgaWYgKHByb2plY3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdElkKTtcbiAgfVxuXG4gIGlmIChlbGVtZW50SWQgIT09IG51bGwgJiYgZWxlbWVudElkICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50SWQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVByb2plY3RcIik7XG4gIH1cblxuICBhY3RpdmVQcm9qZWN0ID0gc2V0UHJvamVjdDtcblxuICBsZXQgbmV3X3Byb2plY3RJZCA9IHNldFByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gIGxldCBuZXdfZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3X3Byb2plY3RJZCk7XG4gIGlmIChuZXdfZWxlbWVudElkICE9IG51bGwpIHtcbiAgICBuZXdfZWxlbWVudElkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0XCIpO1xuICB9XG5cbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgJiYgbmV3X3Byb2plY3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBY3RpdmVQcm9qZWN0XCIsIG5ld19wcm9qZWN0SWQpO1xuICB9XG59XG5cbi8vIEFsbCB0aGUgcHJvamVjdHMgbmFtZXNcbmNvbnN0IG15UHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIHJldHVybiB7IG5hbWUsIHRhc2tMaXN0OiB7fSwgaWQ6IFwicHJvamVjdFwiICsgYXNzaWduUHJvamVjdElkKCkgfTtcbn1cblxuLy8gVGhlIGFyZ3VtZW50IHdpbGwgYmUgdGhlIGluc3RhbnRpYXRpb24gb2YgY3JlYXRlUHJvamVjdFxuZnVuY3Rpb24gbXlQcm9qZWN0TWV0aG9kcyhteVByb2plY3QpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5teVByb2plY3QsXG4gICAgZ2V0UHJvamVjdElkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9LFxuICAgIGdldFRhc2tJZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza0lkO1xuICAgIH0sXG4gICAgZ2V0UHJvamVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRQcm9qZWN0TmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9LFxuICAgIGdldFRhc2tMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrTGlzdDtcbiAgICB9LFxuICAgIGVuZFRhc2s6IGZ1bmN0aW9uICh0YXNrSW5RdWVzdGlvbiwgaXNDb21wbGV0ZWQpIHtcbiAgICAgIC8vIEl0IGNoYW5nZXMgb25seSB0aGUgdmlzdWFsIGFzcGVjdCBvZiB0aGUgdGFza1xuICAgICAgdGFza0luUXVlc3Rpb25bXCJjb21wbGV0ZWRcIl0gPSBpc0NvbXBsZXRlZDtcbiAgICAgIGxldCBteUVsZW1lbnRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hvc2VuVGFza1tcIm5hbWVJZFwiXSk7XG4gICAgICBpZiAoaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgbXlFbGVtZW50VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza0NvbXBsZXRlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG15RWxlbWVudFRhc2suY2xhc3NMaXN0LnJlbW92ZShcInRhc2tDb21wbGV0ZWRcIik7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZWxldGVUYXNrOiBmdW5jdGlvbiAob2Jzb2xldGVUYXNrKSB7XG4gICAgICBsZXQgaWRUYXNrID0gb2Jzb2xldGVUYXNrW1wibmFtZUlkXCJdO1xuICAgICAgZGVsZXRlIHRoaXMudGFza0xpc3RbaWRUYXNrXTtcblxuICAgICAgY29uc3QgbXlUYXNrcyA9IE9iamVjdC52YWx1ZXModGhpcy50YXNrTGlzdCk7XG4gICAgICBkb21TaG93VGFza3MobXlUYXNrcyk7XG4gICAgfSxcbiAgICBtb2RpZnlUYXNrOiBmdW5jdGlvbiAob2xkVGFzaywgbmV3VGFzaykge1xuICAgICAgbGV0IGlkVGFzayA9IG9sZFRhc2tbXCJuYW1lSWRcIl07XG4gICAgICB0aGlzLnRhc2tMaXN0W2lkVGFza10gPSBuZXdUYXNrO1xuICAgICAgdGhpcy50YXNrTGlzdFtpZFRhc2tdW1wibmFtZUlkXCJdID0gaWRUYXNrO1xuICAgIH0sXG4gICAgYWRkVGFzazogZnVuY3Rpb24gKG5hbWUsIGRhdGUgPSBcIjAyL21tL3l5XCIsIHByaW9yaXR5ID0gXCJMT1dcIiwgbm90ZXMgPSBcIlwiKSB7XG4gICAgICBsZXQgdGFza0lkID0gYXNzaWduVGFza0lkKCk7XG5cbiAgICAgIGxldCBuYW1lSWRUYXNrID0gXCJ0YXNrXCIgKyB0YXNrSWQ7XG4gICAgICBsZXQgaW50ZXJuYWxUYXNrID0ge307XG5cbiAgICAgIGludGVybmFsVGFza1tcIm5hbWVJZFwiXSA9IG5hbWVJZFRhc2s7XG4gICAgICBpbnRlcm5hbFRhc2tbXCJuYW1lXCJdID0gbmFtZTtcbiAgICAgIGludGVybmFsVGFza1tcImRhdGVcIl0gPSBkYXRlO1xuICAgICAgaW50ZXJuYWxUYXNrW1wicHJpb3JpdHlcIl0gPSBwcmlvcml0eTtcbiAgICAgIGludGVybmFsVGFza1tcIm5vdGVzXCJdID0gbm90ZXM7XG4gICAgICBpbnRlcm5hbFRhc2tbXCJjb21wbGV0ZWRcIl0gPSBmYWxzZTtcblxuICAgICAgLy8gRXZlcnkgdGFzayBpcyBhIHZhbHVlIHdob3NlIGtleSBpcyBuYW1lSWRUYXNrXG4gICAgICB0aGlzLnRhc2tMaXN0W25hbWVJZFRhc2tdID0gaW50ZXJuYWxUYXNrO1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrcyhwcm9qZWN0TCkge1xuICBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RMKTtcblxuICBsZXQgbXlQcm90b1Rhc2tzID0gbnVsbDtcbiAgbXlQcm90b1Rhc2tzID0gcHJvamVjdEwuZ2V0VGFza0xpc3QoKTtcblxuICBjb25zdCBteVRhc2tzID0gT2JqZWN0LnZhbHVlcyhteVByb3RvVGFza3MpO1xuXG4gIGRvbVNob3dUYXNrcyhteVRhc2tzKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tBZGRQcm9qZWN0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0RGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0Rm9ybVwiKTtcblxuICBjb25zdCBuZXdUaXRsZSA9IG15Rm9ybVtcIm5hbWVcIl0udmFsdWU7XG4gIGlmIChuZXdUaXRsZSAhPT0gXCJcIikge1xuICAgIGNvbnN0IG5ld1Byb2plY3RFbXB0eSA9IGNyZWF0ZVByb2plY3QobmV3VGl0bGUpO1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBteVByb2plY3RNZXRob2RzKG5ld1Byb2plY3RFbXB0eSk7XG5cbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgbGV0IHByb2plY3RJZCA9IG5ld1Byb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0SWQsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3RFbXB0eSkpO1xuICAgICAgbGV0IGFsbFN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIpO1xuICAgICAgbGV0IHBhcnNlZFByb2plY3RzID0gSlNPTi5wYXJzZShhbGxTdG9yZWRQcm9qZWN0cyk7XG4gICAgICBwYXJzZWRQcm9qZWN0cy5hbGxQcm9qZWN0cy5wdXNoKHByb2plY3RJZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocGFyc2VkUHJvamVjdHMpKTtcbiAgICB9XG5cbiAgICBhcHBlbmRQcm9qZWN0KG5ld1RpdGxlLCBuZXdQcm9qZWN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgYWRkRWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZEVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRQcm9qZWN0RGl2XCIpO1xuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkUHJvamVjdEZvcm1cIik7XG4gIGFkZEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuXG4gIGNvbnN0IGxhYmVsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcm9qZWN0LnRleHRDb250ZW50ID0gXCJQbGVhc2UsIGFkZCBwcm9qZWN0J3MgbmFtZTpcIjtcbiAgbGFiZWxQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGFiZWxQcm9qZWN0XCIpO1xuXG4gIGNvbnN0IG5hbWVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImlucHV0UHJvamVjdFwiKTtcbiAgbmFtZVByb2plY3QudHlwZSA9IFwidGV4dFwiO1xuICBuYW1lUHJvamVjdC5uYW1lID0gXCJuYW1lXCI7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJvamVjdCk7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVQcm9qZWN0KTtcblxuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25Qcm9qZWN0Rm9ybVwiKTtcbiAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJPS1wiO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQWRkUHJvamVjdCwgZmFsc2UpO1xuXG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gIHJldHVybiBhZGRFbGVtZW50Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0RnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdERpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0UHJvamVjdFwiKS5wbGFjZWhvbGRlciA9XG4gICAgXCJObyBwcm9qZWN0IHdpdGhvdXQgYSBuYW1lXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRQcm9qZWN0XCIpLnZhbHVlID0gXCJcIjtcbn1cblxuY29uc3QgY3JlYXRlTmV3SWQgPSAoKSA9PiB7XG4gIGxldCBpZFByb2plY3QgPSAwO1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGxldCBsb2NhbElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXN0SWRcIik7XG5cbiAgICBpZiAobG9jYWxJZCAhPT0gbnVsbCkge1xuICAgICAgaWRQcm9qZWN0ID0gbG9jYWxJZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlkUHJvamVjdCsrO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdElkXCIsIGlkUHJvamVjdCk7XG4gICAgcmV0dXJuIGlkUHJvamVjdDtcbiAgfTtcbn07XG5cbmNvbnN0IGFzc2lnblByb2plY3RJZCA9IGNyZWF0ZU5ld0lkKCk7XG5jb25zdCBhc3NpZ25UYXNrSWQgPSBjcmVhdGVOZXdJZCgpO1xuXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSwga2V5UHJvamVjdCkge1xuICBjb25zdCBsaXN0UHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RQcm9qZWN0c1wiKTtcbiAgY29uc3QgdGl0bGVQcm9qZWN0ID0gZWxlbWVudFByb2plY3QobmV3UHJvamVjdFRpdGxlLCBrZXlQcm9qZWN0KTtcblxuICBzaG93VGFza3Moa2V5UHJvamVjdCk7XG4gIGxpc3RQcm9qZWN0cy5hcHBlbmRDaGlsZCh0aXRsZVByb2plY3QpO1xuICBzZXRBY3RpdmVQcm9qZWN0KGtleVByb2plY3QpO1xufVxuXG5leHBvcnQge1xuICBhZGRQcm9qZWN0RnVuY3Rpb24sXG4gIGFkZFByb2plY3RGb3JtLFxuICBzaG93VGFza3MsXG4gIGNyZWF0ZVByb2plY3QsXG4gIG15UHJvamVjdE1ldGhvZHMsXG4gIG15UHJvamVjdHMsXG4gIGFjdGl2ZVByb2plY3QsXG4gIHNldENob3NlblRhc2ssXG4gIHNldEFjdGl2ZVByb2plY3QsXG4gIGNyZWF0ZU5ld0lkLFxuICBjaG9zZW5UYXNrLFxufTtcbiIsImltcG9ydCB7XG4gIGFkZFByb2plY3RGdW5jdGlvbixcbiAgYWRkUHJvamVjdEZvcm0sXG4gIHNob3dUYXNrcyxcbiAgYWN0aXZlUHJvamVjdCxcbiAgY2hvc2VuVGFzayxcbiAgc2V0Q2hvc2VuVGFzayxcbn0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGNsaWNrRWRpdFRhc2sgfSBmcm9tIFwiLi90YXNrQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgbG9jYWxQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICBsZXQgcGFyc2VkTG9jYWxUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxQcm9qZWN0cyk7XG4gICAgbGV0IHByb2plY3RJZCA9IHByb2plY3QuZmlyc3RDaGlsZC5pZDtcbiAgICBsZXQgcHJvamVjdHNBcnJheSA9IHBhcnNlZExvY2FsVGFza3MuYWxsUHJvamVjdHM7XG5cbiAgICBjb25zdCBhcnJheVdpdGhvdXRSZW1vdmVkUHJvamVjdCA9IHByb2plY3RzQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICByZXR1cm4gcHJvamVjdCAhPT0gcHJvamVjdElkO1xuICAgIH0pO1xuICAgIGxldCBhbGxMb2NhbFByb2plY3RzID0geyBhbGxQcm9qZWN0czogYXJyYXlXaXRob3V0UmVtb3ZlZFByb2plY3QgfTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhbGxMb2NhbFByb2plY3RzKSk7XG5cbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQWN0aXZlUHJvamVjdFwiKTtcbiAgICBpZiAoYWN0aXZlUHJvamVjdCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQWN0aXZlUHJvamVjdFwiLCBcImp1c3REZWxldGVkXCIpO1xuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3RJZCk7XG4gIH1cblxuICBwcm9qZWN0LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjbGlja1JlbW92ZVRhc2soZXZlbnQpIHtcbiAgc2V0Q2hvc2VuVGFzayhldmVudCk7XG4gIGFjdGl2ZVByb2plY3QuZGVsZXRlVGFzayhjaG9zZW5UYXNrKTtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgaWRQcm9qZWN0ID0gYWN0aXZlUHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZFByb2plY3QsIEpTT04uc3RyaW5naWZ5KGFjdGl2ZVByb2plY3QpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDb21wbGV0ZWQoZXZlbnQsIGJ1dHRvbkNvbXBsZXRpb24pIHtcbiAgc2V0Q2hvc2VuVGFzayhldmVudCk7XG5cbiAgbGV0IHsgY29tcGxldGVkIH0gPSBldmVudDtcbiAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcbiAgaWYgKGNvbXBsZXRlZCA9PSBmYWxzZSkge1xuICAgIGJ1dHRvbkNvbXBsZXRpb24udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uQ29tcGxldGlvbi50ZXh0Q29udGVudCA9IFwiT3BlblwiO1xuICB9XG5cbiAgYWN0aXZlUHJvamVjdC5lbmRUYXNrKGNob3NlblRhc2ssIGNvbXBsZXRlZCk7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGlkUHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShhY3RpdmVQcm9qZWN0KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWxlbWVudFByb2plY3QobmFtZVByb2plY3REb20sIGtleVByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzVW5pdFwiKTtcblxuICAvLyBUaGUgcHJvamVjdFxuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uUHJvamVjdHNcIik7XG4gIGxldCBwcm9qZWN0SWQgPSBrZXlQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3RJZCk7XG5cbiAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IG5hbWVQcm9qZWN0RG9tO1xuXG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaG93VGFza3Moa2V5UHJvamVjdCk7XG4gIH0pO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuXG4gIC8vIFRoZSBvcHRpb24gdG8gcmVtb3ZlIGl0XG4gIGNvbnN0IHJlbW92ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgYnV0dG9uUmVtb3ZlRGlzcGxheSA9IHByb2plY3RJZCArIFwiQnV0dG9uXCI7XG5cbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBidXR0b25SZW1vdmVEaXNwbGF5KTtcbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlUHJvamVjdHNcIiwgXCJoaWRlUmVtb3ZlQnV0dG9uXCIpO1xuICByZW1vdmVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIHJlbW92ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3REaXYpO1xuICB9KTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnV0dG9uKTtcblxuICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJtb3VzZW92ZXJcIixcbiAgICAoKSA9PiB7XG4gICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlUmVtb3ZlQnV0dG9uXCIpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcblxuICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJtb3VzZW91dFwiLFxuICAgICgpID0+IHtcbiAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGVSZW1vdmVCdXR0b25cIik7XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xuXG4gIHJldHVybiBwcm9qZWN0RGl2O1xufVxuXG5mdW5jdGlvbiBkb21TaG93VGFza3MobXlUYXNrcykge1xuICBjb25zdCBteUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0NvbnRhaW5lcklkXCIpO1xuICBpZiAobXlDb250YWluZXIgIT09IG51bGwpIHtcbiAgICBteUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgZWFjaFRhc2sgb2YgbXlUYXNrcykge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tzVW5pdFwiKTtcbiAgICBuZXdUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIGVhY2hUYXNrW1wibmFtZUlkXCJdKTtcbiAgICBteUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblxuICAgIC8vIE5ldyB0aXRsZVxuICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbmV3VGl0bGUudGV4dENvbnRlbnQgPSBlYWNoVGFzay5uYW1lO1xuICAgIG5ld1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVRhc2tcIik7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG5cbiAgICAvLyBOZXcgZXh0cmFzIChkYXRlLCBwcmlvcml0eSlcbiAgICBjb25zdCBuZXdFeHRyYXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0V4dHJhcy5jbGFzc0xpc3QuYWRkKFwidGFza0RhdGVQcmlvcml0eVwiKTtcbiAgICAvLyBOZXcgZGF0ZVxuICAgIGlmIChlYWNoVGFzay5kYXRlICE9PSBcIlwiKSB7XG4gICAgICBjb25zdCBuZXdEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBuZXdEdWVEYXRlLnRleHRDb250ZW50ID0gZWFjaFRhc2suZGF0ZTtcbiAgICAgIG5ld0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tEYXRlXCIpO1xuICAgICAgbmV3RXh0cmFzLmFwcGVuZENoaWxkKG5ld0R1ZURhdGUpO1xuICAgIH1cblxuICAgIC8vIE5ldyBwcmlvcml0eVxuICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbmV3UHJpb3JpdHkudGV4dENvbnRlbnQgPSBgcHJpb3JpdHk6ICR7ZWFjaFRhc2sucHJpb3JpdHl9YDtcbiAgICBuZXdQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFza1ByaW9yaXR5XCIpO1xuICAgIG5ld0V4dHJhcy5hcHBlbmRDaGlsZChuZXdQcmlvcml0eSk7XG5cbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld0V4dHJhcyk7XG5cbiAgICBpZiAoZWFjaFRhc2sucHJpb3JpdHkgPT0gXCJISUdIXCIpIHtcbiAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tVbml0VXJnZW50XCIpO1xuICAgIH1cbiAgICBpZiAoZWFjaFRhc2sucHJpb3JpdHkgPT0gXCJNRURJVU1cIikge1xuICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1VuaXRJbXBvcnRhbnRcIik7XG4gICAgfVxuXG4gICAgLy8gUGxhY2Ugbm90ZXNcbiAgICBpZiAoZWFjaFRhc2subm90ZXMgIT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IHNldE5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNldE5vdGVzLnRleHRDb250ZW50ID0gZWFjaFRhc2subm90ZXM7XG4gICAgICBzZXROb3Rlcy5jbGFzc0xpc3QuYWRkKFwibXlOb3Rlc1wiKTtcbiAgICAgIGNvbnN0IGlkTm90ZSA9IFwiXCI7XG4gICAgICBzZXROb3Rlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZE5vdGUpO1xuICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChzZXROb3Rlcyk7XG4gICAgfVxuXG4gICAgLy8gTmV3IHRhc2sgc2V0dGluZ1xuICAgIGNvbnN0IG5ld1NldHRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1NldHRpbmcuY2xhc3NMaXN0LmFkZChcInRhc2tTZXR0aW5nc1wiKTtcblxuICAgIC8vIENvbXBsZXRlZFxuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29tcGxldGVkLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuICAgIGNvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBzZXRDb21wbGV0ZWQoZWFjaFRhc2ssIGNvbXBsZXRlZCk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGlmIChlYWNoVGFza1tcImNvbXBsZXRlZFwiXSkge1xuICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza0NvbXBsZXRlZFwiKTtcbiAgICAgIGNvbXBsZXRlZC50ZXh0Q29udGVudCA9IFwiT3BlblwiO1xuICAgIH1cblxuICAgIG5ld1NldHRpbmcuYXBwZW5kQ2hpbGQoY29tcGxldGVkKTtcblxuICAgIC8vIE5ldyBlZGl0XG4gICAgY29uc3QgbmV3RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV3RWRpdC5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uRWRpdFRhc2tcIik7XG4gICAgbmV3RWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gICAgbmV3RWRpdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjbGlja0VkaXRUYXNrKGVhY2hUYXNrLCBuZXdUaXRsZSk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgbmV3U2V0dGluZy5hcHBlbmRDaGlsZChuZXdFZGl0KTtcblxuICAgIC8vIFJlbW92ZSB0YXNrXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVtb3ZlVGFzay5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlVGFza1wiKTtcbiAgICByZW1vdmVUYXNrLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICByZW1vdmVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNsaWNrUmVtb3ZlVGFzayhlYWNoVGFzayk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgbmV3U2V0dGluZy5hcHBlbmRDaGlsZChyZW1vdmVUYXNrKTtcblxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3U2V0dGluZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gIGNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBteVByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuICBteVByb2plY3RzLmFwcGVuZENoaWxkKGFkZFByb2plY3RGb3JtKCkpO1xuXG4gIGNvbnN0IG15UHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG15UHJvamVjdHNIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c0hlYWRlclwiKTtcbiAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChteVByb2plY3RzSGVhZGVyKTtcblxuICBjb25zdCBteVByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbXlQcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiO1xuXG4gIG15UHJvamVjdHNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzVGl0bGVcIik7XG5cbiAgbXlQcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChteVByb2plY3RzVGl0bGUpO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnRQcm9qZWN0QnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0LmlubmVyVGV4dCA9IFwiK1wiO1xuICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0RnVuY3Rpb24pO1xuICBteVByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuXG4gIGNvbnN0IGxpc3RQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpc3RQcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RQcm9qZWN0c1wiKTtcblxuICBteVByb2plY3RzLmFwcGVuZENoaWxkKGxpc3RQcm9qZWN0cyk7XG5cbiAgcmV0dXJuIG15UHJvamVjdHM7XG59XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RzLCBlbGVtZW50UHJvamVjdCwgZG9tU2hvd1Rhc2tzIH07XG4iLCJmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICBzdG9yYWdlICYmXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9O1xuIiwiaW1wb3J0IHsgYWN0aXZlUHJvamVjdCwgc2V0Q2hvc2VuVGFzayB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBlZGl0VGFza0Zvcm0gfSBmcm9tIFwiLi9mb3Jtcy5qc1wiO1xuaW1wb3J0IHsgZG9tU2hvd1Rhc2tzIH0gZnJvbSBcIi4vcHJvamVjdHNEb20uanNcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmZ1bmN0aW9uIGNsaWNrRWRpdFRhc2soZXZlbnQsIGVkaXRfZWxlbWVudCkge1xuICAvLyBpdCBkaXNwbGF5cyB0aGUgZm9ybSBmb3IgZWRpdGluZ1xuXG4gIC8vIGRlZmluZSB3aGVyZSBpdCB3aWxsIGFwcGVhclxuXG4gIGNvbnN0IHJlY3QgPSBlZGl0X2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHlfYXhpcyA9IGVkaXRfZWxlbWVudC5vZmZzZXRUb3A7XG4gIGNvbnNvbGUubG9nKFwiZXZlbnRcIiwgZWRpdF9lbGVtZW50LCB5X2F4aXMpO1xuXG4gIHNldENob3NlblRhc2soZXZlbnQpO1xuXG4gIGNvbnN0IGVkaXRUYXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0RpdlwiKTtcbiAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRm9ybVwiKTtcblxuICBjb25zdCB7IG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3RlcyB9ID0gZXZlbnQ7XG5cbiAgLy8gQ2hhbmdlIHRoZSBsYWJlbHNcblxuICBsZXQgb2xkVGFzayA9IGVkaXRGb3JtLmVsZW1lbnRzW1wiZWRpdFRhc2tcIl07XG4gIGxldCBvbGREYXRlID0gZWRpdEZvcm0uZWxlbWVudHNbXCJkdWVEYXRlRWRpdFwiXTtcblxuICBvbGRUYXNrLnZhbHVlID0gbmFtZTtcbiAgb2xkRGF0ZS52YWx1ZSA9IGRhdGU7XG5cbiAgbGV0IG9sZE5vdGVzID0gZWRpdEZvcm0uZWxlbWVudHNbXCJ0ZXh0QXJlYVRhc2tFZGl0XCJdO1xuICBvbGROb3Rlcy52YWx1ZSA9IG5vdGVzO1xuXG4gIGxldCBvbGRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVwiICsgXCJwcmlvcml0eVwiICsgXCJdXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFByaW9yaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9sZFByaW9yaXR5W2ldLnZhbHVlID09PSBwcmlvcml0eSkge1xuICAgICAgb2xkUHJpb3JpdHlbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIGxldCB5X3dyID0geV9heGlzICsgXCJweFwiO1xuICBlZGl0VGFza0Rpdi5zdHlsZS50b3AgPSB5X3dyO1xuICBlZGl0VGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjb25zb2xlLmxvZyhcImV2ZW50XCIsIGVkaXRfZWxlbWVudCwgeV93cik7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQWRkVGFzaygpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza1wiKS5wbGFjZWhvbGRlciA9IFwiTm8gdGFzayB3aXRob3V0IGEgbmFtZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tcIikudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBmb3JtQWRkVGFza01ldGhvZCgpIHtcbiAgLy8gQWRkcyB0aGUgdGFzayB0byB0aGUgcHJvamVjdFxuICBjb25zdCBteUZvcm1UYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRm9ybVwiKTtcbiAgY29uc3QgdGFza0RhdGEgPSBnZXRGb3JtRGF0YVRhc2sobXlGb3JtVGFzayk7XG5cbiAgY29uc3QgW3sgbmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzIH1dID0gdGFza0RhdGE7XG5cbiAgLy8gV2UgZG9uJ3Qgd2FudCB0YXNrcyB3aXRob3V0IGEgJ25hbWUnIChkZXNjcmlwdGlvbilcbiAgaWYgKG5hbWUgPT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFjdGl2ZVByb2plY3QuYWRkVGFzayhuYW1lLCBkYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGlkUHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShhY3RpdmVQcm9qZWN0KSk7XG4gIH1cblxuICBsZXQgbXlQcm90b1Rhc2tzID0gbnVsbDtcbiAgbXlQcm90b1Rhc2tzID0gYWN0aXZlUHJvamVjdC5nZXRUYXNrTGlzdCgpO1xuICBjb25zdCBteVRhc2tzID0gT2JqZWN0LnZhbHVlcyhteVByb3RvVGFza3MpO1xuICBkb21TaG93VGFza3MobXlUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIGdldEZvcm1EYXRhVGFzayh3aGljaEZvcm0pIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29uc3QgbXlGb3JtVGFzayA9IHdoaWNoRm9ybTtcbiAgY29uc3QgbmV3VGFzayA9IG15Rm9ybVRhc2tbXCJuYW1lXCJdLnZhbHVlO1xuICBjb25zdCBuZXdEYXRlID0gbXlGb3JtVGFza1tcImRhdGVcIl0udmFsdWU7XG4gIGxldCBuZXdJbXBvcnRhbmNlID0gbXlGb3JtVGFza1tcInByaW9yaXR5XCJdLnZhbHVlO1xuICBjb25zdCBuZXdOb3RlcyA9IG15Rm9ybVRhc2tbXCJ0ZXh0QXJlYVRhc2tcIl0udmFsdWU7XG5cbiAgY29uc3QgdGFza1NldCA9IFtcbiAgICB7IG5hbWU6IG5ld1Rhc2ssIGRhdGU6IG5ld0RhdGUsIHByaW9yaXR5OiBuZXdJbXBvcnRhbmNlLCBub3RlczogbmV3Tm90ZXMgfSxcbiAgXTtcblxuICByZXR1cm4gdGFza1NldDtcbn1cblxuZnVuY3Rpb24gYWRkVGFza0Zvcm0oKSB7XG4gIGNvbnN0IGFkZEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVGFza0RpdlwiKTtcblxuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRhc2tGb3JtXCIpO1xuXG4gIC8vIE5hbWUgdGhlIFRhc2tcbiAgY29uc3QgZWxlbWVudE5hbWVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGFiZWxUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFRhc2sudGV4dENvbnRlbnQgPSBcIlBsZWFzZSwgYWRkIGEgbmV3IHRhc2s6XCI7XG4gIGxhYmVsVGFzay5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXdUYXNrXCIpO1xuXG4gIGNvbnN0IG5hbWVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lVGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Rhc2tcIik7XG4gIC8vIG5hbWVUYXNrLnZhbHVlID0gXCJOYW1lIHRoZSB0YXNrXCI7XG4gIG5hbWVUYXNrLnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZVRhc2submFtZSA9IFwibmFtZVwiO1xuXG4gIGVsZW1lbnROYW1lVGFzay5hcHBlbmRDaGlsZChsYWJlbFRhc2spO1xuICBlbGVtZW50TmFtZVRhc2suYXBwZW5kQ2hpbGQobmFtZVRhc2spO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlbGVtZW50TmFtZVRhc2spO1xuXG4gIC8vIER1ZSBEYXRlXG4gIGNvbnN0IGVsZW1lbnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudERhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlRGl2XCIpO1xuXG4gIGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxEYXRlLnRleHRDb250ZW50ID0gXCJEYXRlOiBcIjtcbiAgbGFiZWxEYXRlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZURhdGVcIik7XG5cbiAgY29uc3QgaW5wdXREYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXREYXRlVGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVcIik7XG4gIGlucHV0RGF0ZVRhc2sudHlwZSA9IFwiZGF0ZVwiO1xuICBpbnB1dERhdGVUYXNrLm5hbWUgPSBcImRhdGVcIjtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWxEYXRlKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXREYXRlVGFzayk7XG5cbiAgZWxlbWVudERhdGUuYXBwZW5kQ2hpbGQobGFiZWxEYXRlKTtcbiAgZWxlbWVudERhdGUuYXBwZW5kQ2hpbGQoaW5wdXREYXRlVGFzayk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVsZW1lbnREYXRlKTtcblxuICAvLyBQcmlvcml0eVxuXG4gIGNvbnN0IHByaW9yaXR5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5RGl2XCIpO1xuXG4gIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuXG4gIC8vIEhJR0hcbiAgY29uc3QgaW5wdXRQcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eVwiKTtcbiAgaW5wdXRQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWdoUHJpb3JpdHlcIik7XG4gIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSElHSFwiKTtcblxuICBpbnB1dFByaW9yaXR5SGlnaC50eXBlID0gXCJyYWRpb1wiO1xuICBpbnB1dFByaW9yaXR5SGlnaC5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9IFwiSElHSFwiO1xuICBsYWJlbFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsUHJpb3JpdHlcIik7XG4gIGxhYmVsUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImhpZ2hQcmlvcml0eVwiKTtcblxuICAvLyBNRURJVU1cbiAgY29uc3QgaW5wdXRQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZWRpdW1Qcmlvcml0eVwiKTtcbiAgaW5wdXRQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1FRElVTVwiKTtcblxuICBpbnB1dFByaW9yaXR5TWVkaXVtLnR5cGUgPSBcInJhZGlvXCI7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0ubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNRURJVU1cIjtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsUHJpb3JpdHlcIik7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVkaXVtUHJpb3JpdHlcIik7XG5cbiAgLy8gTE9XXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0UHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG93UHJpb3JpdHlcIik7XG4gIGlucHV0UHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMT1dcIik7XG4gIGlucHV0UHJpb3JpdHlMb3cuY2hlY2tlZCA9IHRydWU7XG5cbiAgaW5wdXRQcmlvcml0eUxvdy50eXBlID0gXCJyYWRpb1wiO1xuICBpbnB1dFByaW9yaXR5TG93Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eUxvdy50ZXh0Q29udGVudCA9IFwiTE9XXCI7XG4gIGxhYmVsUHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5XCIpO1xuICBsYWJlbFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvd1ByaW9yaXR5XCIpO1xuXG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eVRpdGxlKTtcblxuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eUhpZ2gpO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eUhpZ2gpO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eU1lZGl1bSk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5TWVkaXVtKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlMb3cpO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eUxvdyk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RWxlbWVudCk7XG5cbiAgLy8gTm90ZXNcblxuICBjb25zdCBub3Rlc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub3Rlc0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3Rlc0RpdlwiKTtcblxuICBjb25zdCBub3Rlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBub3Rlc1RpdGxlLnRleHRDb250ZW50ID0gXCJOb3Rlc1wiO1xuICBub3Rlc1RpdGxlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRleHRBcmVhVGFza1wiKTtcbiAgY29uc3QgdGFza1RleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZXh0QXJlYVRhc2tcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNVwiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCI1MFwiKTtcbiAgdGFza1RleHRBcmVhLm5hbWUgPSBcInRleHRBcmVhVGFza1wiO1xuXG4gIG5vdGVzRWxlbWVudC5hcHBlbmRDaGlsZChub3Rlc1RpdGxlKTtcbiAgbm90ZXNFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tUZXh0QXJlYSk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKG5vdGVzRWxlbWVudCk7XG5cbiAgYWRkRWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uVGFza0Zvcm1cIik7XG4gIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREXCI7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm9ybUFkZFRhc2tNZXRob2QsIGZhbHNlKTtcblxuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gIHJldHVybiBhZGRFbGVtZW50Q29udGFpbmVyO1xufVxuXG5leHBvcnQge1xuICBjbGlja0FkZFRhc2ssXG4gIGFkZFRhc2tGb3JtLFxuICBlZGl0VGFza0Zvcm0sXG4gIGdldEZvcm1EYXRhVGFzayxcbiAgY2xpY2tFZGl0VGFzayxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIGVsZW1lbnRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNEb20uanNcIjtcbmltcG9ydCB7XG4gIHNob3dUYXNrcyxcbiAgY3JlYXRlUHJvamVjdCxcbiAgc2V0QWN0aXZlUHJvamVjdCxcbiAgYWN0aXZlUHJvamVjdCxcbiAgbXlQcm9qZWN0TWV0aG9kcyxcbn0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGNsaWNrQWRkVGFzaywgYWRkVGFza0Zvcm0gfSBmcm9tIFwiLi90YXNrQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgeyBlZGl0VGFza0Zvcm0gfSBmcm9tIFwiLi9mb3Jtcy5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCB7IGRhdGVUYXNrT25lLCBkYXRlVGFza1R3bywgZGF0ZVRhc2tUaHJlZSB9IGZyb20gXCIuL2RhdGVzLmpzXCI7XG5cbmxldCBzdGF0ZVVzZXI7XG5cbi8vIENyZWF0ZSB0aGUgc2FtcGxlIHByb2plY3RzIHRoYXQgd2lsbCBhZGQgYXQgdGhlIGVuZFxuXG5sZXQgc2FtcGxlUHJvamVjdDtcblxubGV0IHNhbXBsZVByb2plY3RPbmU7XG5sZXQgc2FtcGxlUHJvamVjdFR3bztcbmxldCBuYW1lUHJvamVjdFNhbXBsZU9uZTtcbmxldCBuYW1lUHJvamVjdFNhbXBsZVR3bztcbmxldCBjcmVhdGVFbGVtZW50U2FtcGxlT25lO1xubGV0IGNyZWF0ZUVsZW1lbnRTYW1wbGVUd287XG5cbi8vIFByb2plY3Qgb25lIChpbml0aWFsIHByb2plY3QpXG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIHN0YXRlVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RhdGVBcHBsaWNhdGlvblwiKTtcblxuICBpZiAoc3RhdGVVc2VyID09IG51bGwpIHtcbiAgICBzYW1wbGVQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcInByb2plY3QxXCIpO1xuICAgIGxldCBhbGxMb2NhbFByb2plY3RzID0geyBhbGxQcm9qZWN0czogW10gfTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsTG9jYWxQcm9qZWN0cykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdDFcIiwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlUHJvamVjdCkpO1xuICAgIGxldCBsb2NhbFByb2plY3QxID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0MVwiKTtcbiAgICBzYW1wbGVQcm9qZWN0T25lID0gbXlQcm9qZWN0TWV0aG9kcyhKU09OLnBhcnNlKGxvY2FsUHJvamVjdDEpKTtcblxuICAgIC8vIFB1c2ggdGhlIHByb2plY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBsZXQgYWxsU3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsUHJvamVjdHNcIik7XG4gICAgbGV0IHBhcnNlZFByb2plY3RzID0gSlNPTi5wYXJzZShhbGxTdG9yZWRQcm9qZWN0cyk7XG4gICAgbGV0IGZpcnN0UHJvamVjdElkID0gc2FtcGxlUHJvamVjdE9uZS5nZXRQcm9qZWN0SWQoKTtcbiAgICBwYXJzZWRQcm9qZWN0cy5hbGxQcm9qZWN0cy5wdXNoKGZpcnN0UHJvamVjdElkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocGFyc2VkUHJvamVjdHMpKTtcbiAgfVxufVxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIHNhbXBsZVByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwicHJvamVjdDFcIik7XG4gIHNhbXBsZVByb2plY3RPbmUgPSBteVByb2plY3RNZXRob2RzKHNhbXBsZVByb2plY3QpO1xufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgfCAoc3RhdGVVc2VyID09IG51bGwpKSB7XG4gIHNhbXBsZVByb2plY3RPbmUuYWRkVGFzayhcbiAgICBcIlJlYWQgYSBuZXcgYm9va1wiLFxuICAgIGRhdGVUYXNrT25lLFxuICAgIFwiTE9XXCIsXG4gICAgXCJJIG5lZWQgdG8gdGFrZSBjb21tZW50c1wiXG4gICk7XG4gIHNhbXBsZVByb2plY3RPbmUuYWRkVGFzayhcIlJlYWQgQW4gRW1wdHkgMCBIb3VzZVwiLCBkYXRlVGFza1R3byk7XG59XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpICYmIHN0YXRlVXNlciA9PSBudWxsKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdDFcIiwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlUHJvamVjdE9uZSkpO1xufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgfCAoc3RhdGVVc2VyID09IG51bGwpKSB7XG4gIHNldEFjdGl2ZVByb2plY3Qoc2FtcGxlUHJvamVjdE9uZSk7XG59XG5cbi8vIFByb2plY3QgdHdvXG5sZXQgc2FtcGxlUHJvamVjdE5leHQ7XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIGlmIChzdGF0ZVVzZXIgPT0gbnVsbCkge1xuICAgIHNhbXBsZVByb2plY3ROZXh0ID0gY3JlYXRlUHJvamVjdChcInByb2plY3QyXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdDJcIiwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlUHJvamVjdE5leHQpKTtcbiAgICBsZXQgbG9jYWxQcm9qZWN0MiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdDJcIik7XG4gICAgc2FtcGxlUHJvamVjdFR3byA9IG15UHJvamVjdE1ldGhvZHMoSlNPTi5wYXJzZShsb2NhbFByb2plY3QyKSk7XG5cbiAgICAvLyBQdXNoIHRoZSBwcm9qZWN0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgbGV0IGFsbFN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIpO1xuICAgIGxldCBzZWNvbmRQcm9qZWN0SWQgPSBzYW1wbGVQcm9qZWN0VHdvLmdldFByb2plY3RJZCgpO1xuICAgIGxldCBwYXJzZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UoYWxsU3RvcmVkUHJvamVjdHMpO1xuICAgIHBhcnNlZFByb2plY3RzLmFsbFByb2plY3RzLnB1c2goc2Vjb25kUHJvamVjdElkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocGFyc2VkUHJvamVjdHMpKTtcbiAgfVxufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgc2FtcGxlUHJvamVjdE5leHQgPSBjcmVhdGVQcm9qZWN0KFwicHJvamVjdDJcIik7XG4gIHNhbXBsZVByb2plY3RUd28gPSBteVByb2plY3RNZXRob2RzKHNhbXBsZVByb2plY3ROZXh0KTtcbiAgbmFtZVByb2plY3RTYW1wbGVUd28gPSBzYW1wbGVQcm9qZWN0VHdvLmdldFByb2plY3ROYW1lKCk7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgc2FtcGxlUHJvamVjdFR3by5hZGRUYXNrKFwiUmVhZCBhIGdyZWF0IGJvb2tcIiwgZGF0ZVRhc2tUaHJlZSwgXCJISUdIXCIsIFwic2FzXCIpO1xufVxuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSAmJiBzdGF0ZVVzZXIgPT0gbnVsbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3QyXCIsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3RUd28pKTtcbn1cblxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpIHwgKHN0YXRlVXNlciA9PSBudWxsKSkge1xuICBuYW1lUHJvamVjdFNhbXBsZU9uZSA9IHNhbXBsZVByb2plY3RPbmUuZ2V0UHJvamVjdE5hbWUoKTtcbiAgbmFtZVByb2plY3RTYW1wbGVUd28gPSBzYW1wbGVQcm9qZWN0VHdvLmdldFByb2plY3ROYW1lKCk7XG5cbiAgY3JlYXRlRWxlbWVudFNhbXBsZU9uZSA9IGVsZW1lbnRQcm9qZWN0KFxuICAgIG5hbWVQcm9qZWN0U2FtcGxlT25lLFxuICAgIHNhbXBsZVByb2plY3RPbmVcbiAgKTtcblxuICBjcmVhdGVFbGVtZW50U2FtcGxlVHdvID0gZWxlbWVudFByb2plY3QoXG4gICAgbmFtZVByb2plY3RTYW1wbGVUd28sXG4gICAgc2FtcGxlUHJvamVjdFR3b1xuICApO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy9cbi8vL1xuLy9cblxuLy8gQ3JlYXRlIGFuZCBhZGQgZG9tIGVsZW1lbnRzXG5cbmZ1bmN0aW9uIG15SGVhZGVyKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJQYWdlXCIpO1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJUTyBETyBMSVNUXCI7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobXlIZWFkZXIoKSk7XG5cbmNvbnN0IGNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4vLyBMZWZ0IFNpZGVcblxuY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGVmdFNpZGUuY2xhc3NMaXN0LmFkZChcImxlZnRTZWN0aW9uXCIpO1xubGVmdFNpZGUuYXBwZW5kQ2hpbGQocmVuZGVyUHJvamVjdHMoKSk7XG5cbmNvbnRhaW4uYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xuXG4vLyBSaWdodCBzaWRlXG5cbmNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5yaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcInJpZ2h0U2VjdGlvblwiKTtcblxuLy8gUGFyZW50IHRhc2sgZWxlbWVudFxuY29uc3QgbXlUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5teVRhc2tzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc1wiKTtcbm15VGFza3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteVRhc2tzSURcIik7XG5cbmNvbnN0IG15VGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xubXlUYXNrc1RpdGxlLmlubmVyVGV4dCA9IFwiVEFTS1NcIjtcbm15VGFza3NUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tzVGl0bGVcIik7XG5cbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuYWRkVGFzay5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKTtcbmFkZFRhc2suaW5uZXJUZXh0ID0gXCIrXCI7XG5cbmFkZFRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRTdGFydFRhc2tCdXR0b25cIik7XG5hZGRUYXNrLmlubmVyVGV4dCA9IFwiK1wiO1xuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGlja0FkZFRhc2soKTtcbn0pO1xuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQWRkVGFzayk7XG5cbnJpZ2h0U2lkZS5hcHBlbmRDaGlsZChteVRhc2tzKTtcbm15VGFza3MuYXBwZW5kQ2hpbGQobXlUYXNrc1RpdGxlKTtcbm15VGFza3MuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5teVRhc2tzLmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKCkpO1xubXlUYXNrcy5hcHBlbmRDaGlsZChlZGl0VGFza0Zvcm0oKSk7XG5cbi8vIENoaWxkIHRhc2sgZWxlbWVudCAodGFzayBjb250YWluZXIpXG5jb25zdCBob21lVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ob21lVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lckZpcnN0XCIpO1xuaG9tZVRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrQ29udGFpbmVySWRcIik7XG5cbm15VGFza3MuYXBwZW5kQ2hpbGQoaG9tZVRhc2tDb250YWluZXIpO1xuXG4vLyBTdW0gaXQgdXBcbmNvbnRhaW4uYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbik7XG5cbi8vXG5jb25zdCBsaXN0T2ZQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFByb2plY3RzXCIpO1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAvLyBJcyBpdCB0aGUgZmlyc3QgdGltZSB3ZSBydW4gdGhlIGFwcGxpY2F0aW9uP1xuXG4gIGlmIChzdGF0ZVVzZXIgIT09IG51bGwpIHtcbiAgICAvLyBVcGRhdGUgdGhlIHZhbHVlXG4gICAgbGV0IG15TG9jYWxQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICBsZXQgb2JqZWN0TG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobXlMb2NhbFByb2plY3RzKTtcblxuICAgIGxldCBudW1iZXJMb2NhbFByb2plY3RzID0gb2JqZWN0TG9jYWxQcm9qZWN0cy5hbGxQcm9qZWN0cy5sZW5ndGg7XG5cbiAgICBpZiAobnVtYmVyTG9jYWxQcm9qZWN0cyA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyTG9jYWxQcm9qZWN0czsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSBvYmplY3RMb2NhbFByb2plY3RzLmFsbFByb2plY3RzW2ldO1xuICAgICAgICBsZXQgbXlQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdElkKTtcbiAgICAgICAgbGV0IG15UHJvamVjdFBhcnNlZCA9IEpTT04ucGFyc2UobXlQcm9qZWN0KTtcblxuICAgICAgICBsZXQgcHJvamVjdE9iamVjdCA9IG15UHJvamVjdE1ldGhvZHMobXlQcm9qZWN0UGFyc2VkKTtcbiAgICAgICAgbGV0IG5hbWVQcm9qZWN0ID0gcHJvamVjdE9iamVjdC5nZXRQcm9qZWN0TmFtZSgpO1xuXG4gICAgICAgIGxldCBjcmVhdGVFbGVtZW50ID0gZWxlbWVudFByb2plY3QobmFtZVByb2plY3QsIHByb2plY3RPYmplY3QpO1xuICAgICAgICBsaXN0T2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBGaXJzdCB0aW1lIHVzZXJcbiAgaWYgKHN0YXRlVXNlciA9PSBudWxsKSB7XG4gICAgc3RhdGVVc2VyID0gXCJkZWZhdWx0XCI7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGF0ZUFwcGxpY2F0aW9uXCIsIHN0YXRlVXNlcik7XG4gICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFNhbXBsZU9uZSk7XG4gICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFNhbXBsZVR3byk7XG4gICAgc2hvd1Rhc2tzKHNhbXBsZVByb2plY3RPbmUpO1xuICB9XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBsaXN0T2ZQcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50U2FtcGxlT25lKTtcbiAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFNhbXBsZVR3byk7XG4gIHNob3dUYXNrcyhzYW1wbGVQcm9qZWN0T25lKTtcbn1cblxuLy8gV2hhdCBoYXBwZW5zIHdoZW4geW91IHJlZnJlc2ggdGhlIHBhZ2VcbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIGxldCBhY3RpdmVQcm9qZWN0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQWN0aXZlUHJvamVjdFwiKTtcblxuICBpZiAoYWN0aXZlUHJvamVjdE5hbWUgIT09IG51bGwgJiYgYWN0aXZlUHJvamVjdE5hbWUgIT09IFwianVzdERlbGV0ZWRcIikge1xuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYWN0aXZlUHJvamVjdE5hbWUpO1xuXG4gICAgLy8gVG8gdXNlIHRoZSBvYmplY3QncyBtZXRob2RzXG4gICAgbGV0IHBhcnNlZEFjdGl2ZSA9IEpTT04ucGFyc2UoYWN0aXZlUHJvamVjdCk7XG4gICAgbGV0IGFjdGl2ZVByb2plY3RPYmplY3QgPSBteVByb2plY3RNZXRob2RzKHBhcnNlZEFjdGl2ZSk7XG5cbiAgICBzZXRBY3RpdmVQcm9qZWN0KGFjdGl2ZVByb2plY3RPYmplY3QpO1xuICAgIGxldCBhY3RpdmVQcm9qZWN0VGFza3MgPSBhY3RpdmVQcm9qZWN0T2JqZWN0LmdldFRhc2tMaXN0KCk7XG5cbiAgICBpZiAoXG4gICAgICBhY3RpdmVQcm9qZWN0ICE9PSBudWxsICYmXG4gICAgICBhY3RpdmVQcm9qZWN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGFjdGl2ZVByb2plY3RUYXNrcyAhPT0ge30gJiZcbiAgICAgIGFjdGl2ZVByb2plY3ROYW1lICE9PSBcImp1c3REZWxldGVkXCJcbiAgICApIHtcbiAgICAgIHNob3dUYXNrcyhhY3RpdmVQcm9qZWN0T2JqZWN0KTtcbiAgICB9XG4gIH1cbn1cblxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGlja0FkZFRhc2soYWN0aXZlUHJvamVjdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==