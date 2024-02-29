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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* We need the \"bdo:-moz-has-dir-attr\" bit because \"bdo\" has lower\n    specificity than the \":-moz-has-dir-attr\" selector above. */\nbdo,\nbdo:-moz-has-dir-attr {\n    unicode-bidi: isolate-override;\n}\n\ntextarea:-moz-dir-attr-like-auto,\npre:-moz-dir-attr-like-auto {\n    unicode-bidi: plaintext;\n}\n\n/* blocks */\n\narticle,\naside,\ndetails,\ndiv,\ndt,\nfigcaption,\nfooter,\nform,\nheader,\nhgroup,\nhtml,\nmain,\nnav,\nsearch,\nsection,\nsummary {\n    display: block;\n}\n\nbody {\n    display: block;\n    margin: 0\n}\n\np,\ndl,\nmulticol {\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\ndd {\n    display: block;\n    margin-inline-start: 40px;\n}\n\nblockquote,\nfigure {\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 40px;\n    margin-inline-end: 40px;\n}\n\naddress {\n    display: block;\n    font-style: italic;\n}\n\ncenter {\n    display: block;\n    text-align: -moz-center;\n}\n\nh1 {\n    display: block;\n    font-size: 2em;\n    font-weight: bold;\n    margin-block-start: .67em;\n    margin-block-end: .67em;\n}\n\nh2,\n:is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.5em;\n    font-weight: bold;\n    margin-block-start: .83em;\n    margin-block-end: .83em;\n}\n\nh3,\n:is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.17em;\n    font-weight: bold;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\nh4,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 1.00em;\n    font-weight: bold;\n    margin-block-start: 1.33em;\n    margin-block-end: 1.33em;\n}\n\nh5,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 0.83em;\n    font-weight: bold;\n    margin-block-start: 1.67em;\n    margin-block-end: 1.67em;\n}\n\nh6,\n:is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {\n    display: block;\n    font-size: 0.67em;\n    font-weight: bold;\n    margin-block-start: 2.33em;\n    margin-block-end: 2.33em;\n}\n\nlisting {\n    display: block;\n    font-family: -moz-fixed;\n    font-size: medium;\n    white-space: pre;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\nxmp,\npre,\nplaintext {\n    display: block;\n    font-family: -moz-fixed;\n    white-space: pre;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n}\n\n/* tables */\n\ntable {\n    display: table;\n    border-spacing: 2px;\n    border-collapse: separate;\n    /* XXXldb do we want this if we're border-collapse:collapse ? */\n    box-sizing: border-box;\n    text-indent: 0;\n}\n\ntable[align=\"left\"] {\n    float: left;\n}\n\ntable[align=\"right\"] {\n    float: right;\n    text-align: start;\n}\n\n\n/* border collapse rules */\n\n/* Set hidden if we have 'frame' or 'rules' attribute.\n      Set it on all sides when we do so there's more consistency\n      in what authors should expect */\n\n/* Put this first so 'border' and 'frame' rules can override it. */\ntable[rules] {\n    border-width: thin;\n    border-style: hidden;\n}\n\n/* 'border' before 'frame' so 'frame' overrides\n       A border with a given value should, of course, pass that value\n       as the border-width in pixels -> attr mapping */\n\n/* :-moz-table-border-nonzero is like [border]:not([border=\"0\"]) except it\n      also checks for other zero-like values according to HTML attribute\n      parsing rules */\ntable:-moz-table-border-nonzero {\n    border-width: thin;\n    border-style: outset;\n}\n\ntable[frame] {\n    border: thin hidden;\n}\n\n/* specificity must beat table:-moz-table-border-nonzero rule above */\ntable[frame=\"void\"] {\n    border-style: hidden;\n}\n\ntable[frame=\"above\"] {\n    border-style: outset hidden hidden hidden;\n}\n\ntable[frame=\"below\"] {\n    border-style: hidden hidden outset hidden;\n}\n\ntable[frame=\"lhs\"] {\n    border-style: hidden hidden hidden outset;\n}\n\ntable[frame=\"rhs\"] {\n    border-style: hidden outset hidden hidden;\n}\n\ntable[frame=\"hsides\"] {\n    border-style: outset hidden;\n}\n\ntable[frame=\"vsides\"] {\n    border-style: hidden outset;\n}\n\ntable[frame=\"box\"],\ntable[frame=\"border\"] {\n    border-style: outset;\n}\n\n\n/* Internal Table Borders */\n\n/* 'border' cell borders first */\n\ntable:-moz-table-border-nonzero>*>tr>td,\ntable:-moz-table-border-nonzero>*>tr>th,\ntable:-moz-table-border-nonzero>*>td,\ntable:-moz-table-border-nonzero>*>th,\ntable:-moz-table-border-nonzero>td,\ntable:-moz-table-border-nonzero>th {\n    border-width: thin;\n    border-style: inset;\n}\n\n/* collapse only if rules are really specified */\ntable[rules]:not([rules=\"none\"], [rules=\"\"]) {\n    border-collapse: collapse;\n}\n\n/* only specified rules override 'border' settings\n   (increased specificity to achieve this) */\ntable[rules]:not([rules=\"\"])>tr>td,\ntable[rules]:not([rules=\"\"])>*>tr>td,\ntable[rules]:not([rules=\"\"])>tr>th,\ntable[rules]:not([rules=\"\"])>*>tr>th,\ntable[rules]:not([rules=\"\"])>td,\ntable[rules]:not([rules=\"\"])>th {\n    border-width: thin;\n    border-style: none;\n}\n\n\ntable[rules][rules=\"none\"]>tr>td,\ntable[rules][rules=\"none\"]>*>tr>td,\ntable[rules][rules=\"none\"]>tr>th,\ntable[rules][rules=\"none\"]>*>tr>th,\ntable[rules][rules=\"none\"]>td,\ntable[rules][rules=\"none\"]>th {\n    border-width: thin;\n    border-style: none;\n}\n\ntable[rules][rules=\"all\"]>tr>td,\ntable[rules][rules=\"all\"]>*>tr>td,\ntable[rules][rules=\"all\"]>tr>th,\ntable[rules][rules=\"all\"]>*>tr>th,\ntable[rules][rules=\"all\"]>td,\ntable[rules][rules=\"all\"]>th {\n    border-width: thin;\n    border-style: solid;\n}\n\ntable[rules][rules=\"rows\"]>tr,\ntable[rules][rules=\"rows\"]>*>tr {\n    border-block-start-width: thin;\n    border-block-end-width: thin;\n    border-block-start-style: solid;\n    border-block-end-style: solid;\n}\n\n\ntable[rules][rules=\"cols\"]>tr>td,\ntable[rules][rules=\"cols\"]>*>tr>td,\ntable[rules][rules=\"cols\"]>tr>th,\ntable[rules][rules=\"cols\"]>*>tr>th {\n    border-inline-start-width: thin;\n    border-inline-end-width: thin;\n    border-inline-start-style: solid;\n    border-inline-end-style: solid;\n}\n\ntable[rules][rules=\"groups\"]>colgroup {\n    border-inline-start-width: thin;\n    border-inline-end-width: thin;\n    border-inline-start-style: solid;\n    border-inline-end-style: solid;\n}\n\ntable[rules][rules=\"groups\"]>tfoot,\ntable[rules][rules=\"groups\"]>thead,\ntable[rules][rules=\"groups\"]>tbody {\n    border-block-start-width: thin;\n    border-block-end-width: thin;\n    border-block-start-style: solid;\n    border-block-end-style: solid;\n}\n\n\n/* caption inherits from table not table-outer */\ncaption {\n    display: table-caption;\n    text-align: center;\n}\n\ntable[align=\"center\"]>caption {\n    margin-inline-start: auto;\n    margin-inline-end: auto;\n}\n\ntable[align=\"center\"]>caption[align=\"left\"]:dir(ltr) {\n    margin-inline-end: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"left\"]:dir(rtl) {\n    margin-inline-start: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"right\"]:dir(ltr) {\n    margin-inline-start: 0;\n}\n\ntable[align=\"center\"]>caption[align=\"right\"]:dir(rtl) {\n    margin-inline-end: 0;\n}\n\ntr {\n    display: table-row;\n    vertical-align: inherit;\n}\n\ncol {\n    display: table-column;\n}\n\ncolgroup {\n    display: table-column-group;\n}\n\ntbody {\n    display: table-row-group;\n    vertical-align: middle;\n}\n\nthead {\n    display: table-header-group;\n    vertical-align: middle;\n}\n\ntfoot {\n    display: table-footer-group;\n    vertical-align: middle;\n}\n\n/* for XHTML tables without tbody */\ntable>tr {\n    vertical-align: middle;\n}\n\ntd {\n    display: table-cell;\n    vertical-align: inherit;\n    text-align: unset;\n    padding: 1px;\n}\n\nth {\n    display: table-cell;\n    vertical-align: inherit;\n    font-weight: bold;\n    padding: 1px;\n    text-align: -moz-center-or-inherit;\n}\n\n:is(tr, tbody, thead, tfoot, table)>form:-moz-is-html {\n    /* Important: don't show these forms in HTML */\n    display: none !important;\n}\n\ntable[bordercolor]>tbody,\ntable[bordercolor]>thead,\ntable[bordercolor]>tfoot,\ntable[bordercolor]>col,\ntable[bordercolor]>colgroup,\ntable[bordercolor]>tr,\ntable[bordercolor]>*>tr,\ntable[bordercolor]>tr>td,\ntable[bordercolor]>*>tr>td,\ntable[bordercolor]>tr>th,\ntable[bordercolor]>*>tr>th {\n    border-color: inherit;\n}\n\n/* inlines */\n\nq:before {\n    content: open-quote;\n}\n\nq:after {\n    content: close-quote;\n}\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\ni,\ncite,\nem,\nvar,\ndfn {\n    font-style: italic;\n}\n\ntt,\ncode,\nkbd,\nsamp {\n    font-family: -moz-fixed;\n}\n\nu,\nins {\n    text-decoration: underline;\n}\n\ns,\nstrike,\ndel {\n    text-decoration: line-through;\n}\n\nbig {\n    font-size: larger;\n}\n\nsmall {\n    font-size: smaller;\n}\n\nsub {\n    vertical-align: sub;\n    font-size: smaller;\n}\n\nsup {\n    vertical-align: super;\n    font-size: smaller;\n}\n\nnobr {\n    white-space: nowrap;\n}\n\nmark {\n    background: Mark;\n    color: MarkText;\n}\n\n/* titles */\nabbr[title],\nacronym[title] {\n    text-decoration: dotted underline;\n}\n\n/* lists */\n\nul,\nmenu,\ndir {\n    display: block;\n    list-style-type: disc;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    padding-inline-start: 40px;\n}\n\nul,\nol,\nmenu {\n    counter-reset: list-item;\n}\n\nol {\n    display: block;\n    list-style-type: decimal;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    padding-inline-start: 40px;\n}\n\nli {\n    display: list-item;\n    text-align: match-parent;\n}\n\n/* nested lists have no top/bottom margins */\n:is(ul, ol, dir, menu, dl) ul,\n:is(ul, ol, dir, menu, dl) ol,\n:is(ul, ol, dir, menu, dl) dir,\n:is(ul, ol, dir, menu, dl) menu,\n:is(ul, ol, dir, menu, dl) dl {\n    margin-block-start: 0;\n    margin-block-end: 0;\n}\n\n/* 2 deep unordered lists use a circle */\n:is(ol, ul, menu, dir) ul,\n:is(ol, ul, menu, dir) menu,\n:is(ol, ul, menu, dir) dir {\n    list-style-type: circle;\n}\n\n/* 3 deep (or more) unordered lists use a square */\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,\n:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {\n    list-style-type: square;\n}\n\n\n/* leafs */\n\n/* <hr> noshade and color attributes are handled completely by\n  * HTMLHRElement::MapAttributesIntoRule.\n  * https://html.spec.whatwg.org/#the-hr-element-2\n  */\nhr {\n    color: gray;\n    border-width: 1px;\n    border-style: inset;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n    margin-inline-start: auto;\n    margin-inline-end: auto;\n    overflow: hidden;\n\n    /* FIXME: This is not really per spec */\n    display: block;\n}\n\nhr[size=\"1\"] {\n    border-style: solid none none none;\n}\n\n/* Note that we only intend for the alt content to show up if the image is\n  * broken. But non-broken images/inputs will have a replaced box, and thus we\n  * won't we don't generate the pseudo-element anyways. This prevents\n  * unnecessary reframing when images become broken / non-broken. */\ninput[type=image]::before,\nimg::before {\n    content: -moz-alt-content !important;\n    unicode-bidi: isolate;\n}\n\nimg[usemap],\nobject[usemap] {\n    color: blue;\n}\n\nframeset {\n    display: block ! important;\n    overflow: clip;\n    position: static ! important;\n    float: none ! important;\n    border: none ! important;\n}\n\nframe {\n    border-radius: 0 ! important;\n}\n\niframe {\n    border: 2px inset;\n}\n\nspacer {\n    position: static ! important;\n    float: none ! important;\n}\n\ncanvas {\n    user-select: none;\n}\n\niframe:focus-visible,\nbody:focus-visible,\nhtml:focus-visible {\n    /* These elements historically don't show outlines when focused by default.\n    * We could consider changing that if needed. */\n    outline-style: none;\n}\n\n/* hidden elements: https://html.spec.whatwg.org/#hidden-elements\n  *\n  * Exceptions:\n  *\n  *  * area declaration needs to be !important, see below / bug 135040.  That's\n  *    hacky and broken.\n  *\n  *  * [hidden] is implemented as a presentation attribute to avoid a global\n  *    selector in a UA sheet.\n  */\nbase,\nbasefont,\ndatalist,\nhead,\nlink,\nmeta,\nnoembed,\nnoframes,\nparam,\nrp,\nscript,\nstyle,\ntemplate,\ntitle {\n    display: none;\n}\n\narea {\n    /* Don't give it frames other than its imageframe */\n    display: none ! important;\n}\n\niframe:fullscreen {\n    /* iframes in full-screen mode don't show a border. */\n    border: none !important;\n    padding: unset !important;\n}\n\n/* Details and summary\n  * https://html.spec.whatwg.org/#the-details-and-summary-elements\n  *\n  * Note that these rules need to be duplicated in details.css for the anonymous\n  * summary, which wouldn't match otherwise.\n  *\n  * The spec here says something different, see\n  * https://github.com/whatwg/html/issues/8610\n  */\ndetails>summary:first-of-type {\n    display: list-item;\n    counter-increment: list-item 0;\n    list-style: disclosure-closed inside;\n}\n\ndetails[open]>summary:first-of-type {\n    list-style-type: disclosure-open;\n}\n\n/* media elements */\nvideo {\n    object-fit: contain;\n}\n\nvideo>img:-moz-native-anonymous {\n    /* Video poster images should render with the video element's \"object-fit\" &\n      \"object-position\" properties */\n    object-fit: inherit !important;\n    object-position: inherit !important;\n}\n\naudio:not([controls]) {\n    display: none !important;\n}\n\naudio[controls] {\n    /* This ensures that intrinsic sizing can reliably shrinkwrap our\n       controls (which are also always horizontal) and produce a\n       reasonable intrinsic size from them. */\n    writing-mode: horizontal-tb !important;\n}\n\n*|*::-moz-html-canvas-content {\n    display: block !important;\n    /* we want to be an absolute and fixed container */\n    transform: translate(0) !important;\n}\n\nvideo>.caption-box {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n/**\n  * The pseudo element won't inherit CSS styles from its direct parent, `::cue`\n  * would actually inherit styles from video because it's video's pseudo element.\n  * Therefore, we have to explicitly set some styles which are already defined\n  * in its parent element in vtt.jsm.\n  */\n::cue {\n    color: rgba(255, 255, 255, 1);\n    white-space: pre-line;\n    background-color: rgba(0, 0, 0, 0.8);\n    font: 10px sans-serif;\n    font-size: var(--cue-font-size);\n    writing-mode: var(--cue-writing-mode, inherit);\n    overflow-wrap: break-word;\n    /* TODO : enable unicode-bidi, right now enable it would cause incorrect\n             display direction, maybe related with bug 1558431. */\n}\n\n/* <dialog> element styles */\n\ndialog {\n    position: absolute;\n    display: block;\n    inset-inline-start: 0;\n    inset-inline-end: 0;\n    margin: auto;\n    border-width: initial;\n    border-style: solid;\n    border-color: initial;\n    border-image: initial;\n    padding: 1em;\n    background-color: Canvas;\n    color: CanvasText;\n    width: -moz-fit-content;\n    height: -moz-fit-content;\n}\n\ndialog:not([open]) {\n    display: none;\n}\n\ndialog:modal {\n    -moz-top-layer: top !important;\n    position: fixed;\n    overflow: auto;\n    visibility: visible;\n    inset-block-start: 0;\n    inset-block-end: 0;\n    max-width: calc(100% - 6px - 2em);\n    max-height: calc(100% - 6px - 2em);\n}\n\n/* https://html.spec.whatwg.org/#flow-content-3 */\ndialog::backdrop {\n    background: rgba(0, 0, 0, 0.1);\n}\n\nmarquee {\n    inline-size: -moz-available;\n    display: inline-block;\n    vertical-align: text-bottom;\n    text-align: start;\n}\n\nmarquee:is([direction=\"up\"], [direction=\"down\"]) {\n    block-size: 200px;\n}\n\n/* Ruby */\n\nruby {\n    display: ruby;\n}\n\nrb {\n    display: ruby-base;\n    white-space: nowrap;\n}\n\nrt {\n    display: ruby-text;\n}\n\nrtc {\n    display: ruby-text-container;\n}\n\nrtc,\nrt {\n    white-space: nowrap;\n    font-size: 50%;\n    -moz-min-font-size-ratio: 50%;\n    line-height: 1;\n}\n\n@media not (-moz-platform: windows) {\n\n    rtc,\n    rt {\n        /* The widely-used Windows font Meiryo doesn't work fine with this\n     * setting, so disable this on Windows. We should re-enable it once\n     * Microsoft fixes this issue. See bug 1164279. */\n        font-variant-east-asian: ruby;\n    }\n}\n\nrtc,\nrt {\n    text-emphasis: none;\n}\n\nrtc:lang(zh),\nrt:lang(zh) {\n    ruby-align: center;\n}\n\nrtc:lang(zh-TW),\nrt:lang(zh-TW) {\n    font-size: 30%;\n    /* bopomofo */\n    -moz-min-font-size-ratio: 30%;\n}\n\nrtc>rt {\n    font-size: unset;\n}\n\nruby,\nrb,\nrt,\nrtc {\n    unicode-bidi: isolate;\n}\n\n/* Shadow DOM v1\n  * https://drafts.csswg.org/css-scoping/#slots-in-shadow-tree */\nslot {\n    display: contents;\n}\n\n/* Un-invert images and videos for users using inverted colors.\n  * \"User agents must add the following rule to their UA style sheet\"\n  * https://www.w3.org/TR/mediaqueries-5/#inverted\n  */\n@media (inverted-colors) {\n\n    img:not(picture > img),\n    picture,\n    video {\n        filter: invert(100%);\n    }\n}\n\n/* Hide noscript elements if scripting is enabled */\n@media (scripting) {\n    noscript {\n        display: none !important;\n    }\n}\n\n@media print {\n\n    input,\n    textarea,\n    select,\n    button,\n    details {\n        -moz-user-input: none !important;\n        pointer-events: none !important;\n    }\n}\n\n/* Popover UA style, https://html.spec.whatwg.org/#flow-content-3 */\n/* stylelint-disable-next-line media-query-no-invalid */\n@media (-moz-bool-pref: \"dom.element.popover.enabled\") {\n    [popover]:not(:popover-open):not(dialog[open]) {\n        display: none;\n    }\n\n    dialog:popover-open {\n        display: block;\n    }\n\n    [popover] {\n        position: fixed;\n        inset: 0;\n        width: fit-content;\n        height: fit-content;\n        margin: auto;\n        border: solid;\n        padding: 0.25em;\n        overflow: auto;\n        color: CanvasText;\n        background-color: Canvas;\n    }\n\n    :popover-open {\n        -moz-top-layer: top;\n    }\n\n    :popover-open::backdrop {\n        position: fixed;\n        inset: 0;\n        pointer-events: none !important;\n        background-color: transparent;\n    }\n}\n\n\n\n\n\n\nbody {\n    background-color: bisque;\n\n\n}\n\n.headerPage {\n    background-color: rgba(23, 250, 61, 0.799);\n    height: 1.2rem;\n    /* font-size: 2rem; */\n    /* padding: 0.2rem 0; */\n    text-align: center;\n\n}\n\n\n.container {\n    display: grid;\n    grid-template-columns: [first] 35% [second] 65% [end];\n    padding: 0;\n    height: 633px;\n    background-color: blue;\n}\n\n\n\n.leftSection {\n    background-color: brown;\n\n}\n\n.rightSection {\n\n    background-color: blueviolet;\n}\n\n\n.projects {\n    margin: 5rem auto;\n    width: 60%;\n    text-align: center;\n    background-color: rgba(233, 150, 122, 0.28);\n    padding: 5px 3px 15px 3px;\n    border-radius: 15px;\n    position: relative;\n}\n\n\n\n#projectsHeader {\n    background-color: rgba(0, 0, 255, 0.756);\n    padding: 6px;\n    margin: 15px;\n    margin-bottom: 1.5rem;\n    border-radius: 9px;\n}\n\n#projectsTitle {\n    display: inline-block;\n    margin: 3px;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    font-size: large;\n    font-weight: bolder;\n    letter-spacing: .2rem;\n\n}\n\n#startProjectButton {\n    float: right;\n    margin: 5px;\n    background-color: rgba(255, 255, 255, 0.212);\n    font-size: 10px;\n    border-radius: 90%;\n}\n\n\n#startProjectButton:hover {\n    background-color: rgba(0, 0, 255, 0.894);\n}\n\n#inputProject {\n    width: 80%;\n    margin: 10px 0 5px 0;\n}\n\n\n.tasksUnit {\n    background-color: rgb(238, 244, 129);\n    padding: 1rem;\n}\n\n.titleTask {\n    border-radius: 5px;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: large;\n    padding: 4px;\n    background-color: rgb(255, 237, 192);\n}\n\n.taskDatePriority {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n\n.taskDate {\n    font-size: medium;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.taskPriority {\n    padding: 5px;\n    border: solid black 1px;\n    font-size: small;\n}\n\n\n\n\n.taskUnitImportant {\n    background-color: rgb(181, 238, 132);\n}\n\n.taskUnitUrgent {\n    background-color: rgb(21, 255, 0);\n}\n\n\n\n.projectsUnit {\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    place-items: center;\n\n}\n\n.buttonProjects,\n.activeProject {\n    grid-column: 2 / span 5;\n    place-self: stretch;\n    margin: 8px;\n    padding: 8px;\n}\n\n.buttonProjects {\n    background-color: cyan;\n}\n\n.buttonProjects:hover {\n    background-color: rgb(26, 207, 207);\n}\n\n\n\n\n\n.removeProjects {\n    grid-column: 7 / 8;\n    background-color: red;\n    border-radius: 50%;\n    display: inline-block;\n\n}\n\n.activeProject {\n    background-color: #007204;\n    color: white;\n}\n\n.activeProject:hover {\n    background-color: rgb(6, 208, 30);\n}\n\n\n\n#listProjects {\n    text-align: center;\n}\n\n\n.hideRemoveButton {\n    display: none;\n}\n\n\n\n\n#addProjectDiv {\n    background-color: rgb(151, 151, 222);\n    display: none;\n    position: absolute;\n    left: 1rem;\n    top: 1rem;\n}\n\n/* right side */\n\n.tasks {\n    margin: 5rem auto;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    letter-spacing: .2rem;\n    width: 70%;\n    padding-top: 5px;\n    text-align: center;\n    background-color: rgb(246, 74, 16);\n}\n\n#tasksTitle {\n    margin: 3px;\n    font-size: large;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-weight: bold;\n    display: inline-block;\n}\n\n.addTask {\n    float: right;\n    margin: 5px;\n    background-color: rgba(255, 255, 255, 0.416);\n}\n\n\n.addTask:hover {\n    background-color: rgba(77, 248, 64, 0.414);\n}\n\n\n.taskContainerFirst {\n    display: flex;\n    clear: right;\n    flex-direction: column;\n    background-color: cadetblue;\n    padding: 5px;\n    justify-content: space-between;\n\n}\n\n.taskContainerFirst>div {\n    margin: 5px;\n\n}\n\n\n#editTaskDiv {\n    display: none;\n    position: absolute;\n    left: 40%;\n    top: 4.2rem;\n    min-width: 380px;\n    background-color: darkseagreen\n}\n\n#addTaskDiv {\n    padding: 5px;\n    background-color: yellow;\n    display: none;\n\n    position: absolute;\n    left: 45%;\n    top: 4rem;\n    min-width: 400px;\n}\n\n#editTaskForm {\n    margin: 8px;\n}\n\n#addTaskForm {\n    background-color: goldenrod;\n    margin: 8px;\n    padding: 7px;\n}\n\nlabel[for=\"newTask\"] {\n    display: block;\n    color: black;\n    margin: 0.4rem 0 1.4rem 0;\n}\n\n#addProjectForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: goldenrod;\n    text-align: center;\n    margin: 3px;\n    padding: 5px;\n    min-width: 400px;\n}\n\n#labelProject {\n    margin: .4rem 1.5rem;\n}\n\n#buttonProjectForm {\n    margin: 1rem;\n    padding: 4px;\n    background-color: rgb(233, 199, 113)\n}\n\n#buttonProjectForm:hover {\n    background-color: rgb(247, 206, 103)\n}\n\n\nspan {\n    margin: 5px 30px;\n}\n\n\n\n.labelPriority {\n    /* display: ; */\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n\n\n\nlabel[for=\"textAreaTask\"] {\n    padding: 0;\n    display: block;\n}\n\n#dateDiv,\n#priorityDiv,\n#notesDiv {\n    margin: 10px;\n}\n\n#priority {\n    padding: 0;\n    margin: 0;\n}\n\n.myNotes {\n    max-width: 100%;\n    background-color: rgb(240, 80, 255);\n    padding: 0.6rem;\n    margin: 5px;\n    text-align: justify;\n}\n\n.taskSettings {\n    margin: 1rem auto 0.5rem auto;\n}\n\n.taskSettings>button {\n    margin: 5px;\n    padding: 3px;\n    background-color: rgba(0, 0, 255, 0.071);\n    border-radius: 5px;\n}\n\n.taskSettings>button:hover {\n    background-color: #04AA6D;\n    color: white;\n}\n\n\n\n.taskSettings>.removeTask:hover {\n    background-color: rgb(214, 12, 12);\n    color: white;\n}\n\n\n\n.taskCompleted {\n    text-decoration: line-through;\n    background-color: crimson;\n}\n\n.taskCompleted button {\n    background-color: crimson;\n}\n\n.taskCompleted .buttonEditTask {\n    display: none;\n}"],"sourceRoot":""}]);
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





function clickEditTask(event) {
  // it displays the form for editing

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
  sampleProjectOne.addTask("Read a 90 book", "3/3/2024", "LOW", "ss");
  sampleProjectOne.addTask("Read An Empty 0 House");
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
  sampleProjectTwo.addTask("Read a great book", "3d3", "HIGH", "sas");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sV0FBVyxvQkFBb0IsV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxhQUFhLE9BQU8sUUFBUSxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxRQUFRLE9BQU8sT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFFBQVEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxZQUFZLGFBQWEsUUFBUSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsUUFBUSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxlQUFlLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFNBQVMsWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFVBQVUsTUFBTSxZQUFZLE9BQU8sV0FBVyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxRQUFRLFlBQVksT0FBTyxZQUFZLFFBQVEsWUFBWSxRQUFRLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLEtBQUssT0FBTyxhQUFhLE9BQU8sYUFBYSxLQUFLLGtCQUFrQixVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFNBQVMsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxNQUFNLE1BQU0sT0FBTyxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sS0FBSyxNQUFNLE9BQU8sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxTQUFTLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxLQUFLLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFNBQVMsS0FBSyxhQUFhLE9BQU8sTUFBTSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZ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QUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLd0M7QUFDaEI7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLDZEQUFnQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sNkRBQVk7QUFDbEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FB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Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLDZEQUFnQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQix5QkFBeUI7QUFDL0M7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qiw4REFBZ0I7QUFDNUM7O0FBRUEsNEJBQTRCLCtEQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBOztBQUVBLEtBQUssNkRBQWdCO0FBQ3JCO0FBQ0E7QUFDQSxFQUFFLHVEQUFTO0FBQ1g7O0FBRUE7QUFDQSxJQUFJLDZEQUFnQjtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsOERBQWdCOztBQUU5QyxJQUFJLDhEQUFnQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLE1BQU0sdURBQVM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtEQUFZLENBQUMsdURBQWE7QUFDNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzRG9tLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogV2UgbmVlZCB0aGUgXCJiZG86LW1vei1oYXMtZGlyLWF0dHJcIiBiaXQgYmVjYXVzZSBcImJkb1wiIGhhcyBsb3dlclxuICAgIHNwZWNpZmljaXR5IHRoYW4gdGhlIFwiOi1tb3otaGFzLWRpci1hdHRyXCIgc2VsZWN0b3IgYWJvdmUuICovXG5iZG8sXG5iZG86LW1vei1oYXMtZGlyLWF0dHIge1xuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZS1vdmVycmlkZTtcbn1cblxudGV4dGFyZWE6LW1vei1kaXItYXR0ci1saWtlLWF1dG8sXG5wcmU6LW1vei1kaXItYXR0ci1saWtlLWF1dG8ge1xuICAgIHVuaWNvZGUtYmlkaTogcGxhaW50ZXh0O1xufVxuXG4vKiBibG9ja3MgKi9cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmRpdixcbmR0LFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmZvcm0sXG5oZWFkZXIsXG5oZ3JvdXAsXG5odG1sLFxubWFpbixcbm5hdixcbnNlYXJjaCxcbnNlY3Rpb24sXG5zdW1tYXJ5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwXG59XG5cbnAsXG5kbCxcbm11bHRpY29sIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG59XG5cbmRkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA0MHB4O1xufVxuXG5ibG9ja3F1b3RlLFxuZmlndXJlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNDBweDtcbn1cblxuYWRkcmVzcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xufVxuXG5oMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuNjdlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAuNjdlbTtcbn1cblxuaDIsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAuODNlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAuODNlbTtcbn1cblxuaDMsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuMTdlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG59XG5cbmg0LFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMS4wMGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS4zM2VtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEuMzNlbTtcbn1cblxuaDUsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC44M2VtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS42N2VtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEuNjdlbTtcbn1cblxuaDYsXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuNjdlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIuMzNlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAyLjMzZW07XG59XG5cbmxpc3Rpbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG54bXAsXG5wcmUsXG5wbGFpbnRleHQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xufVxuXG4vKiB0YWJsZXMgKi9cblxudGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAvKiBYWFhsZGIgZG8gd2Ugd2FudCB0aGlzIGlmIHdlJ3JlIGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZSA/ICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWluZGVudDogMDtcbn1cblxudGFibGVbYWxpZ249XCJsZWZ0XCJdIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxudGFibGVbYWxpZ249XCJyaWdodFwiXSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG5cbi8qIGJvcmRlciBjb2xsYXBzZSBydWxlcyAqL1xuXG4vKiBTZXQgaGlkZGVuIGlmIHdlIGhhdmUgJ2ZyYW1lJyBvciAncnVsZXMnIGF0dHJpYnV0ZS5cbiAgICAgIFNldCBpdCBvbiBhbGwgc2lkZXMgd2hlbiB3ZSBkbyBzbyB0aGVyZSdzIG1vcmUgY29uc2lzdGVuY3lcbiAgICAgIGluIHdoYXQgYXV0aG9ycyBzaG91bGQgZXhwZWN0ICovXG5cbi8qIFB1dCB0aGlzIGZpcnN0IHNvICdib3JkZXInIGFuZCAnZnJhbWUnIHJ1bGVzIGNhbiBvdmVycmlkZSBpdC4gKi9cbnRhYmxlW3J1bGVzXSB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xufVxuXG4vKiAnYm9yZGVyJyBiZWZvcmUgJ2ZyYW1lJyBzbyAnZnJhbWUnIG92ZXJyaWRlc1xuICAgICAgIEEgYm9yZGVyIHdpdGggYSBnaXZlbiB2YWx1ZSBzaG91bGQsIG9mIGNvdXJzZSwgcGFzcyB0aGF0IHZhbHVlXG4gICAgICAgYXMgdGhlIGJvcmRlci13aWR0aCBpbiBwaXhlbHMgLT4gYXR0ciBtYXBwaW5nICovXG5cbi8qIDotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIGlzIGxpa2UgW2JvcmRlcl06bm90KFtib3JkZXI9XCIwXCJdKSBleGNlcHQgaXRcbiAgICAgIGFsc28gY2hlY2tzIGZvciBvdGhlciB6ZXJvLWxpa2UgdmFsdWVzIGFjY29yZGluZyB0byBIVE1MIGF0dHJpYnV0ZVxuICAgICAgcGFyc2luZyBydWxlcyAqL1xudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xufVxuXG50YWJsZVtmcmFtZV0ge1xuICAgIGJvcmRlcjogdGhpbiBoaWRkZW47XG59XG5cbi8qIHNwZWNpZmljaXR5IG11c3QgYmVhdCB0YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIHJ1bGUgYWJvdmUgKi9cbnRhYmxlW2ZyYW1lPVwidm9pZFwiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwiYWJvdmVcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0IGhpZGRlbiBoaWRkZW4gaGlkZGVuO1xufVxuXG50YWJsZVtmcmFtZT1cImJlbG93XCJdIHtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBoaWRkZW4gb3V0c2V0IGhpZGRlbjtcbn1cblxudGFibGVbZnJhbWU9XCJsaHNcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIGhpZGRlbiBoaWRkZW4gb3V0c2V0O1xufVxuXG50YWJsZVtmcmFtZT1cInJoc1wiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gb3V0c2V0IGhpZGRlbiBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwiaHNpZGVzXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldCBoaWRkZW47XG59XG5cbnRhYmxlW2ZyYW1lPVwidnNpZGVzXCJdIHtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBvdXRzZXQ7XG59XG5cbnRhYmxlW2ZyYW1lPVwiYm94XCJdLFxudGFibGVbZnJhbWU9XCJib3JkZXJcIl0ge1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xufVxuXG5cbi8qIEludGVybmFsIFRhYmxlIEJvcmRlcnMgKi9cblxuLyogJ2JvcmRlcicgY2VsbCBib3JkZXJzIGZpcnN0ICovXG5cbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50cj50ZCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50cj50aCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50ZCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50aCxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+dGQsXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbn1cblxuLyogY29sbGFwc2Ugb25seSBpZiBydWxlcyBhcmUgcmVhbGx5IHNwZWNpZmllZCAqL1xudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJub25lXCJdLCBbcnVsZXM9XCJcIl0pIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4vKiBvbmx5IHNwZWNpZmllZCBydWxlcyBvdmVycmlkZSAnYm9yZGVyJyBzZXR0aW5nc1xuICAgKGluY3JlYXNlZCBzcGVjaWZpY2l0eSB0byBhY2hpZXZlIHRoaXMpICovXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+dHI+dGQsXG50YWJsZVtydWxlc106bm90KFtydWxlcz1cIlwiXSk+Kj50cj50ZCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT50cj50aCxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVwiXCJdKT4qPnRyPnRoLFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPnRkLFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XCJcIl0pPnRoIHtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPio+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJub25lXCJdPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT4qPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwibm9uZVwiXT50ZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cIm5vbmVcIl0+dGgge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT50cj50ZCxcbnRhYmxlW3J1bGVzXVtydWxlcz1cImFsbFwiXT4qPnRyPnRkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiYWxsXCJdPio+dHI+dGgsXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJhbGxcIl0+dGgge1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG50YWJsZVtydWxlc11bcnVsZXM9XCJyb3dzXCJdPnRyLFxudGFibGVbcnVsZXNdW3J1bGVzPVwicm93c1wiXT4qPnRyIHtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ibG9jay1lbmQtc3R5bGU6IHNvbGlkO1xufVxuXG5cbnRhYmxlW3J1bGVzXVtydWxlcz1cImNvbHNcIl0+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJjb2xzXCJdPio+dHI+dGQsXG50YWJsZVtydWxlc11bcnVsZXM9XCJjb2xzXCJdPnRyPnRoLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiY29sc1wiXT4qPnRyPnRoIHtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPmNvbGdyb3VwIHtcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1pbmxpbmUtZW5kLXN0eWxlOiBzb2xpZDtcbn1cblxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPnRmb290LFxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPnRoZWFkLFxudGFibGVbcnVsZXNdW3J1bGVzPVwiZ3JvdXBzXCJdPnRib2R5IHtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWJsb2NrLWVuZC13aWR0aDogdGhpbjtcbiAgICBib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ibG9jay1lbmQtc3R5bGU6IHNvbGlkO1xufVxuXG5cbi8qIGNhcHRpb24gaW5oZXJpdHMgZnJvbSB0YWJsZSBub3QgdGFibGUtb3V0ZXIgKi9cbmNhcHRpb24ge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwibGVmdFwiXTpkaXIobHRyKSB7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG59XG5cbnRhYmxlW2FsaWduPVwiY2VudGVyXCJdPmNhcHRpb25bYWxpZ249XCJsZWZ0XCJdOmRpcihydGwpIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xufVxuXG50YWJsZVthbGlnbj1cImNlbnRlclwiXT5jYXB0aW9uW2FsaWduPVwicmlnaHRcIl06ZGlyKGx0cikge1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG59XG5cbnRhYmxlW2FsaWduPVwiY2VudGVyXCJdPmNhcHRpb25bYWxpZ249XCJyaWdodFwiXTpkaXIocnRsKSB7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG59XG5cbnRyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XG59XG5cbmNvbCB7XG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uO1xufVxuXG5jb2xncm91cCB7XG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uLWdyb3VwO1xufVxuXG50Ym9keSB7XG4gICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnRoZWFkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudGZvb3Qge1xuICAgIGRpc3BsYXk6IHRhYmxlLWZvb3Rlci1ncm91cDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiBmb3IgWEhUTUwgdGFibGVzIHdpdGhvdXQgdGJvZHkgKi9cbnRhYmxlPnRyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG50ZCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcbiAgICB0ZXh0LWFsaWduOiB1bnNldDtcbiAgICBwYWRkaW5nOiAxcHg7XG59XG5cbnRoIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICB0ZXh0LWFsaWduOiAtbW96LWNlbnRlci1vci1pbmhlcml0O1xufVxuXG46aXModHIsIHRib2R5LCB0aGVhZCwgdGZvb3QsIHRhYmxlKT5mb3JtOi1tb3otaXMtaHRtbCB7XG4gICAgLyogSW1wb3J0YW50OiBkb24ndCBzaG93IHRoZXNlIGZvcm1zIGluIEhUTUwgKi9cbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlW2JvcmRlcmNvbG9yXT50Ym9keSxcbnRhYmxlW2JvcmRlcmNvbG9yXT50aGVhZCxcbnRhYmxlW2JvcmRlcmNvbG9yXT50Zm9vdCxcbnRhYmxlW2JvcmRlcmNvbG9yXT5jb2wsXG50YWJsZVtib3JkZXJjb2xvcl0+Y29sZ3JvdXAsXG50YWJsZVtib3JkZXJjb2xvcl0+dHIsXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cixcbnRhYmxlW2JvcmRlcmNvbG9yXT50cj50ZCxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyPnRkLFxudGFibGVbYm9yZGVyY29sb3JdPnRyPnRoLFxudGFibGVbYm9yZGVyY29sb3JdPio+dHI+dGgge1xuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbn1cblxuLyogaW5saW5lcyAqL1xuXG5xOmJlZm9yZSB7XG4gICAgY29udGVudDogb3Blbi1xdW90ZTtcbn1cblxucTphZnRlciB7XG4gICAgY29udGVudDogY2xvc2UtcXVvdGU7XG59XG5cbmIsXG5zdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmksXG5jaXRlLFxuZW0sXG52YXIsXG5kZm4ge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxudHQsXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gICAgZm9udC1mYW1pbHk6IC1tb3otZml4ZWQ7XG59XG5cbnUsXG5pbnMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5zLFxuc3RyaWtlLFxuZGVsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuYmlnIHtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuc21hbGwge1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuc3ViIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuc3VwIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG5ub2JyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5tYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiBNYXJrO1xuICAgIGNvbG9yOiBNYXJrVGV4dDtcbn1cblxuLyogdGl0bGVzICovXG5hYmJyW3RpdGxlXSxcbmFjcm9ueW1bdGl0bGVdIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGRvdHRlZCB1bmRlcmxpbmU7XG59XG5cbi8qIGxpc3RzICovXG5cbnVsLFxubWVudSxcbmRpciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcbn1cblxudWwsXG5vbCxcbm1lbnUge1xuICAgIGNvdW50ZXItcmVzZXQ6IGxpc3QtaXRlbTtcbn1cblxub2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG59XG5cbmxpIHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgdGV4dC1hbGlnbjogbWF0Y2gtcGFyZW50O1xufVxuXG4vKiBuZXN0ZWQgbGlzdHMgaGF2ZSBubyB0b3AvYm90dG9tIG1hcmdpbnMgKi9cbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIHVsLFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgb2wsXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSBkaXIsXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSBtZW51LFxuOmlzKHVsLCBvbCwgZGlyLCBtZW51LCBkbCkgZGwge1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xufVxuXG4vKiAyIGRlZXAgdW5vcmRlcmVkIGxpc3RzIHVzZSBhIGNpcmNsZSAqL1xuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSB1bCxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgbWVudSxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgZGlyIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbn1cblxuLyogMyBkZWVwIChvciBtb3JlKSB1bm9yZGVyZWQgbGlzdHMgdXNlIGEgc3F1YXJlICovXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgdWwsXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgbWVudSxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBkaXIge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xufVxuXG5cbi8qIGxlYWZzICovXG5cbi8qIDxocj4gbm9zaGFkZSBhbmQgY29sb3IgYXR0cmlidXRlcyBhcmUgaGFuZGxlZCBjb21wbGV0ZWx5IGJ5XG4gICogSFRNTEhSRWxlbWVudDo6TWFwQXR0cmlidXRlc0ludG9SdWxlLlxuICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3RoZS1oci1lbGVtZW50LTJcbiAgKi9cbmhyIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC41ZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLyogRklYTUU6IFRoaXMgaXMgbm90IHJlYWxseSBwZXIgc3BlYyAqL1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ocltzaXplPVwiMVwiXSB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lIG5vbmUgbm9uZTtcbn1cblxuLyogTm90ZSB0aGF0IHdlIG9ubHkgaW50ZW5kIGZvciB0aGUgYWx0IGNvbnRlbnQgdG8gc2hvdyB1cCBpZiB0aGUgaW1hZ2UgaXNcbiAgKiBicm9rZW4uIEJ1dCBub24tYnJva2VuIGltYWdlcy9pbnB1dHMgd2lsbCBoYXZlIGEgcmVwbGFjZWQgYm94LCBhbmQgdGh1cyB3ZVxuICAqIHdvbid0IHdlIGRvbid0IGdlbmVyYXRlIHRoZSBwc2V1ZG8tZWxlbWVudCBhbnl3YXlzLiBUaGlzIHByZXZlbnRzXG4gICogdW5uZWNlc3NhcnkgcmVmcmFtaW5nIHdoZW4gaW1hZ2VzIGJlY29tZSBicm9rZW4gLyBub24tYnJva2VuLiAqL1xuaW5wdXRbdHlwZT1pbWFnZV06OmJlZm9yZSxcbmltZzo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAtbW96LWFsdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgdW5pY29kZS1iaWRpOiBpc29sYXRlO1xufVxuXG5pbWdbdXNlbWFwXSxcbm9iamVjdFt1c2VtYXBdIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuZnJhbWVzZXQge1xuICAgIGRpc3BsYXk6IGJsb2NrICEgaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBjbGlwO1xuICAgIHBvc2l0aW9uOiBzdGF0aWMgISBpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IG5vbmUgISBpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICEgaW1wb3J0YW50O1xufVxuXG5mcmFtZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhIGltcG9ydGFudDtcbn1cblxuaWZyYW1lIHtcbiAgICBib3JkZXI6IDJweCBpbnNldDtcbn1cblxuc3BhY2VyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljICEgaW1wb3J0YW50O1xuICAgIGZsb2F0OiBub25lICEgaW1wb3J0YW50O1xufVxuXG5jYW52YXMge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5pZnJhbWU6Zm9jdXMtdmlzaWJsZSxcbmJvZHk6Zm9jdXMtdmlzaWJsZSxcbmh0bWw6Zm9jdXMtdmlzaWJsZSB7XG4gICAgLyogVGhlc2UgZWxlbWVudHMgaGlzdG9yaWNhbGx5IGRvbid0IHNob3cgb3V0bGluZXMgd2hlbiBmb2N1c2VkIGJ5IGRlZmF1bHQuXG4gICAgKiBXZSBjb3VsZCBjb25zaWRlciBjaGFuZ2luZyB0aGF0IGlmIG5lZWRlZC4gKi9cbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xufVxuXG4vKiBoaWRkZW4gZWxlbWVudHM6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2hpZGRlbi1lbGVtZW50c1xuICAqXG4gICogRXhjZXB0aW9uczpcbiAgKlxuICAqICAqIGFyZWEgZGVjbGFyYXRpb24gbmVlZHMgdG8gYmUgIWltcG9ydGFudCwgc2VlIGJlbG93IC8gYnVnIDEzNTA0MC4gIFRoYXQnc1xuICAqICAgIGhhY2t5IGFuZCBicm9rZW4uXG4gICpcbiAgKiAgKiBbaGlkZGVuXSBpcyBpbXBsZW1lbnRlZCBhcyBhIHByZXNlbnRhdGlvbiBhdHRyaWJ1dGUgdG8gYXZvaWQgYSBnbG9iYWxcbiAgKiAgICBzZWxlY3RvciBpbiBhIFVBIHNoZWV0LlxuICAqL1xuYmFzZSxcbmJhc2Vmb250LFxuZGF0YWxpc3QsXG5oZWFkLFxubGluayxcbm1ldGEsXG5ub2VtYmVkLFxubm9mcmFtZXMsXG5wYXJhbSxcbnJwLFxuc2NyaXB0LFxuc3R5bGUsXG50ZW1wbGF0ZSxcbnRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5hcmVhIHtcbiAgICAvKiBEb24ndCBnaXZlIGl0IGZyYW1lcyBvdGhlciB0aGFuIGl0cyBpbWFnZWZyYW1lICovXG4gICAgZGlzcGxheTogbm9uZSAhIGltcG9ydGFudDtcbn1cblxuaWZyYW1lOmZ1bGxzY3JlZW4ge1xuICAgIC8qIGlmcmFtZXMgaW4gZnVsbC1zY3JlZW4gbW9kZSBkb24ndCBzaG93IGEgYm9yZGVyLiAqL1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi8qIERldGFpbHMgYW5kIHN1bW1hcnlcbiAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtZGV0YWlscy1hbmQtc3VtbWFyeS1lbGVtZW50c1xuICAqXG4gICogTm90ZSB0aGF0IHRoZXNlIHJ1bGVzIG5lZWQgdG8gYmUgZHVwbGljYXRlZCBpbiBkZXRhaWxzLmNzcyBmb3IgdGhlIGFub255bW91c1xuICAqIHN1bW1hcnksIHdoaWNoIHdvdWxkbid0IG1hdGNoIG90aGVyd2lzZS5cbiAgKlxuICAqIFRoZSBzcGVjIGhlcmUgc2F5cyBzb21ldGhpbmcgZGlmZmVyZW50LCBzZWVcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzg2MTBcbiAgKi9cbmRldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlIHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtaXRlbSAwO1xuICAgIGxpc3Qtc3R5bGU6IGRpc2Nsb3N1cmUtY2xvc2VkIGluc2lkZTtcbn1cblxuZGV0YWlsc1tvcGVuXT5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzY2xvc3VyZS1vcGVuO1xufVxuXG4vKiBtZWRpYSBlbGVtZW50cyAqL1xudmlkZW8ge1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbnZpZGVvPmltZzotbW96LW5hdGl2ZS1hbm9ueW1vdXMge1xuICAgIC8qIFZpZGVvIHBvc3RlciBpbWFnZXMgc2hvdWxkIHJlbmRlciB3aXRoIHRoZSB2aWRlbyBlbGVtZW50J3MgXCJvYmplY3QtZml0XCIgJlxuICAgICAgXCJvYmplY3QtcG9zaXRpb25cIiBwcm9wZXJ0aWVzICovXG4gICAgb2JqZWN0LWZpdDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYXVkaW9bY29udHJvbHNdIHtcbiAgICAvKiBUaGlzIGVuc3VyZXMgdGhhdCBpbnRyaW5zaWMgc2l6aW5nIGNhbiByZWxpYWJseSBzaHJpbmt3cmFwIG91clxuICAgICAgIGNvbnRyb2xzICh3aGljaCBhcmUgYWxzbyBhbHdheXMgaG9yaXpvbnRhbCkgYW5kIHByb2R1Y2UgYVxuICAgICAgIHJlYXNvbmFibGUgaW50cmluc2ljIHNpemUgZnJvbSB0aGVtLiAqL1xuICAgIHdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50O1xufVxuXG4qfCo6Oi1tb3otaHRtbC1jYW52YXMtY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAvKiB3ZSB3YW50IHRvIGJlIGFuIGFic29sdXRlIGFuZCBmaXhlZCBjb250YWluZXIgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKSAhaW1wb3J0YW50O1xufVxuXG52aWRlbz4uY2FwdGlvbi1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qKlxuICAqIFRoZSBwc2V1ZG8gZWxlbWVudCB3b24ndCBpbmhlcml0IENTUyBzdHlsZXMgZnJvbSBpdHMgZGlyZWN0IHBhcmVudCwgXFxgOjpjdWVcXGBcbiAgKiB3b3VsZCBhY3R1YWxseSBpbmhlcml0IHN0eWxlcyBmcm9tIHZpZGVvIGJlY2F1c2UgaXQncyB2aWRlbydzIHBzZXVkbyBlbGVtZW50LlxuICAqIFRoZXJlZm9yZSwgd2UgaGF2ZSB0byBleHBsaWNpdGx5IHNldCBzb21lIHN0eWxlcyB3aGljaCBhcmUgYWxyZWFkeSBkZWZpbmVkXG4gICogaW4gaXRzIHBhcmVudCBlbGVtZW50IGluIHZ0dC5qc20uXG4gICovXG46OmN1ZSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiB2YXIoLS1jdWUtZm9udC1zaXplKTtcbiAgICB3cml0aW5nLW1vZGU6IHZhcigtLWN1ZS13cml0aW5nLW1vZGUsIGluaGVyaXQpO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgLyogVE9ETyA6IGVuYWJsZSB1bmljb2RlLWJpZGksIHJpZ2h0IG5vdyBlbmFibGUgaXQgd291bGQgY2F1c2UgaW5jb3JyZWN0XG4gICAgICAgICAgICAgZGlzcGxheSBkaXJlY3Rpb24sIG1heWJlIHJlbGF0ZWQgd2l0aCBidWcgMTU1ODQzMS4gKi9cbn1cblxuLyogPGRpYWxvZz4gZWxlbWVudCBzdHlsZXMgKi9cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAwO1xuICAgIGluc2V0LWlubGluZS1lbmQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci13aWR0aDogaW5pdGlhbDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogaW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IENhbnZhcztcbiAgICBjb2xvcjogQ2FudmFzVGV4dDtcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XG59XG5cbmRpYWxvZzpub3QoW29wZW5dKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuZGlhbG9nOm1vZGFsIHtcbiAgICAtbW96LXRvcC1sYXllcjogdG9wICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgaW5zZXQtYmxvY2stc3RhcnQ6IDA7XG4gICAgaW5zZXQtYmxvY2stZW5kOiAwO1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNnB4IC0gMmVtKTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHggLSAyZW0pO1xufVxuXG4vKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNmbG93LWNvbnRlbnQtMyAqL1xuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5tYXJxdWVlIHtcbiAgICBpbmxpbmUtc2l6ZTogLW1vei1hdmFpbGFibGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxubWFycXVlZTppcyhbZGlyZWN0aW9uPVwidXBcIl0sIFtkaXJlY3Rpb249XCJkb3duXCJdKSB7XG4gICAgYmxvY2stc2l6ZTogMjAwcHg7XG59XG5cbi8qIFJ1YnkgKi9cblxucnVieSB7XG4gICAgZGlzcGxheTogcnVieTtcbn1cblxucmIge1xuICAgIGRpc3BsYXk6IHJ1YnktYmFzZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5ydCB7XG4gICAgZGlzcGxheTogcnVieS10ZXh0O1xufVxuXG5ydGMge1xuICAgIGRpc3BsYXk6IHJ1YnktdGV4dC1jb250YWluZXI7XG59XG5cbnJ0YyxcbnJ0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogNTAlO1xuICAgIC1tb3otbWluLWZvbnQtc2l6ZS1yYXRpbzogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5AbWVkaWEgbm90ICgtbW96LXBsYXRmb3JtOiB3aW5kb3dzKSB7XG5cbiAgICBydGMsXG4gICAgcnQge1xuICAgICAgICAvKiBUaGUgd2lkZWx5LXVzZWQgV2luZG93cyBmb250IE1laXJ5byBkb2Vzbid0IHdvcmsgZmluZSB3aXRoIHRoaXNcbiAgICAgKiBzZXR0aW5nLCBzbyBkaXNhYmxlIHRoaXMgb24gV2luZG93cy4gV2Ugc2hvdWxkIHJlLWVuYWJsZSBpdCBvbmNlXG4gICAgICogTWljcm9zb2Z0IGZpeGVzIHRoaXMgaXNzdWUuIFNlZSBidWcgMTE2NDI3OS4gKi9cbiAgICAgICAgZm9udC12YXJpYW50LWVhc3QtYXNpYW46IHJ1Ynk7XG4gICAgfVxufVxuXG5ydGMsXG5ydCB7XG4gICAgdGV4dC1lbXBoYXNpczogbm9uZTtcbn1cblxucnRjOmxhbmcoemgpLFxucnQ6bGFuZyh6aCkge1xuICAgIHJ1YnktYWxpZ246IGNlbnRlcjtcbn1cblxucnRjOmxhbmcoemgtVFcpLFxucnQ6bGFuZyh6aC1UVykge1xuICAgIGZvbnQtc2l6ZTogMzAlO1xuICAgIC8qIGJvcG9tb2ZvICovXG4gICAgLW1vei1taW4tZm9udC1zaXplLXJhdGlvOiAzMCU7XG59XG5cbnJ0Yz5ydCB7XG4gICAgZm9udC1zaXplOiB1bnNldDtcbn1cblxucnVieSxcbnJiLFxucnQsXG5ydGMge1xuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcbn1cblxuLyogU2hhZG93IERPTSB2MVxuICAqIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtc2NvcGluZy8jc2xvdHMtaW4tc2hhZG93LXRyZWUgKi9cbnNsb3Qge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4vKiBVbi1pbnZlcnQgaW1hZ2VzIGFuZCB2aWRlb3MgZm9yIHVzZXJzIHVzaW5nIGludmVydGVkIGNvbG9ycy5cbiAgKiBcIlVzZXIgYWdlbnRzIG11c3QgYWRkIHRoZSBmb2xsb3dpbmcgcnVsZSB0byB0aGVpciBVQSBzdHlsZSBzaGVldFwiXG4gICogaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy01LyNpbnZlcnRlZFxuICAqL1xuQG1lZGlhIChpbnZlcnRlZC1jb2xvcnMpIHtcblxuICAgIGltZzpub3QocGljdHVyZSA+IGltZyksXG4gICAgcGljdHVyZSxcbiAgICB2aWRlbyB7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgIH1cbn1cblxuLyogSGlkZSBub3NjcmlwdCBlbGVtZW50cyBpZiBzY3JpcHRpbmcgaXMgZW5hYmxlZCAqL1xuQG1lZGlhIChzY3JpcHRpbmcpIHtcbiAgICBub3NjcmlwdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBwcmludCB7XG5cbiAgICBpbnB1dCxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3QsXG4gICAgYnV0dG9uLFxuICAgIGRldGFpbHMge1xuICAgICAgICAtbW96LXVzZXItaW5wdXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi8qIFBvcG92ZXIgVUEgc3R5bGUsIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2Zsb3ctY29udGVudC0zICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWEtcXVlcnktbm8taW52YWxpZCAqL1xuQG1lZGlhICgtbW96LWJvb2wtcHJlZjogXCJkb20uZWxlbWVudC5wb3BvdmVyLmVuYWJsZWRcIikge1xuICAgIFtwb3BvdmVyXTpub3QoOnBvcG92ZXItb3Blbik6bm90KGRpYWxvZ1tvcGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIGRpYWxvZzpwb3BvdmVyLW9wZW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBbcG9wb3Zlcl0ge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgcGFkZGluZzogMC4yNWVtO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgY29sb3I6IENhbnZhc1RleHQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IENhbnZhcztcbiAgICB9XG5cbiAgICA6cG9wb3Zlci1vcGVuIHtcbiAgICAgICAgLW1vei10b3AtbGF5ZXI6IHRvcDtcbiAgICB9XG5cbiAgICA6cG9wb3Zlci1vcGVuOjpiYWNrZHJvcCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuXG5cblxuXG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcblxuXG59XG5cbi5oZWFkZXJQYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCAyNTAsIDYxLCAwLjc5OSk7XG4gICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgLyogZm9udC1zaXplOiAycmVtOyAqL1xuICAgIC8qIHBhZGRpbmc6IDAuMnJlbSAwOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbZmlyc3RdIDM1JSBbc2Vjb25kXSA2NSUgW2VuZF07XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDYzM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cblxuXG4ubGVmdFNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuXG59XG5cbi5yaWdodFNlY3Rpb24ge1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbn1cblxuXG4ucHJvamVjdHMge1xuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAxNTAsIDEyMiwgMC4yOCk7XG4gICAgcGFkZGluZzogNXB4IDNweCAxNXB4IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG5cbiNwcm9qZWN0c0hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNzU2KTtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG5cbiNwcm9qZWN0c1RpdGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcblxufVxuXG4jc3RhcnRQcm9qZWN0QnV0dG9uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxMik7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDkwJTtcbn1cblxuXG4jc3RhcnRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC44OTQpO1xufVxuXG4jaW5wdXRQcm9qZWN0IHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xufVxuXG5cbi50YXNrc1VuaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDI0NCwgMTI5KTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4udGl0bGVUYXNrIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjM3LCAxOTIpO1xufVxuXG4udGFza0RhdGVQcmlvcml0eSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4udGFza0RhdGUge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xufVxuXG4udGFza1ByaW9yaXR5IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuXG5cblxuLnRhc2tVbml0SW1wb3J0YW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgxLCAyMzgsIDEzMik7XG59XG5cbi50YXNrVW5pdFVyZ2VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCAyNTUsIDApO1xufVxuXG5cblxuLnByb2plY3RzVW5pdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmJ1dHRvblByb2plY3RzLFxuLmFjdGl2ZVByb2plY3Qge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA1O1xuICAgIHBsYWNlLXNlbGY6IHN0cmV0Y2g7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG4uYnV0dG9uUHJvamVjdHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN5YW47XG59XG5cbi5idXR0b25Qcm9qZWN0czpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAyMDcsIDIwNyk7XG59XG5cblxuXG5cblxuLnJlbW92ZVByb2plY3RzIHtcbiAgICBncmlkLWNvbHVtbjogNyAvIDg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbn1cblxuLmFjdGl2ZVByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcyMDQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWN0aXZlUHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDIwOCwgMzApO1xufVxuXG5cblxuI2xpc3RQcm9qZWN0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5oaWRlUmVtb3ZlQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cblxuXG4jYWRkUHJvamVjdERpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTUxLCAyMjIpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDFyZW07XG4gICAgdG9wOiAxcmVtO1xufVxuXG4vKiByaWdodCBzaWRlICovXG5cbi50YXNrcyB7XG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDc0LCAxNik7XG59XG5cbiN0YXNrc1RpdGxlIHtcbiAgICBtYXJnaW46IDNweDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFkZFRhc2sge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE2KTtcbn1cblxuXG4uYWRkVGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgMjQ4LCA2NCwgMC40MTQpO1xufVxuXG5cbi50YXNrQ29udGFpbmVyRmlyc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY2xlYXI6IHJpZ2h0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbn1cblxuLnRhc2tDb250YWluZXJGaXJzdD5kaXYge1xuICAgIG1hcmdpbjogNXB4O1xuXG59XG5cblxuI2VkaXRUYXNrRGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiA0LjJyZW07XG4gICAgbWluLXdpZHRoOiAzODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW5cbn1cblxuI2FkZFRhc2tEaXYge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0NSU7XG4gICAgdG9wOiA0cmVtO1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbiNlZGl0VGFza0Zvcm0ge1xuICAgIG1hcmdpbjogOHB4O1xufVxuXG4jYWRkVGFza0Zvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBwYWRkaW5nOiA3cHg7XG59XG5cbmxhYmVsW2Zvcj1cIm5ld1Rhc2tcIl0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDAuNHJlbSAwIDEuNHJlbSAwO1xufVxuXG4jYWRkUHJvamVjdEZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbiNsYWJlbFByb2plY3Qge1xuICAgIG1hcmdpbjogLjRyZW0gMS41cmVtO1xufVxuXG4jYnV0dG9uUHJvamVjdEZvcm0ge1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTk5LCAxMTMpXG59XG5cbiNidXR0b25Qcm9qZWN0Rm9ybTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjA2LCAxMDMpXG59XG5cblxuc3BhbiB7XG4gICAgbWFyZ2luOiA1cHggMzBweDtcbn1cblxuXG5cbi5sYWJlbFByaW9yaXR5IHtcbiAgICAvKiBkaXNwbGF5OiA7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cblxubGFiZWxbZm9yPVwidGV4dEFyZWFUYXNrXCJdIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jZGF0ZURpdixcbiNwcmlvcml0eURpdixcbiNub3Rlc0RpdiB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4jcHJpb3JpdHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubXlOb3RlcyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDgwLCAyNTUpO1xuICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICBtYXJnaW46IDVweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGFza1NldHRpbmdzIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwLjVyZW0gYXV0bztcbn1cblxuLnRhc2tTZXR0aW5ncz5idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4wNzEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhc2tTZXR0aW5ncz5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuLnRhc2tTZXR0aW5ncz4ucmVtb3ZlVGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMTIsIDEyKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG4udGFza0NvbXBsZXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbn1cblxuLnRhc2tDb21wbGV0ZWQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xufVxuXG4udGFza0NvbXBsZXRlZCAuYnV0dG9uRWRpdFRhc2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOytEQUMrRDtBQUMvRDs7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBLFdBQVc7O0FBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsaUJBQWlCO0lB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Q0ksZ0JBQWdCO0FBQ3BCOzs7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7Ozs7O0FBS0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTs7O0lBR0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7Ozs7QUFJQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOzs7O0FBSUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBXZSBuZWVkIHRoZSBcXFwiYmRvOi1tb3otaGFzLWRpci1hdHRyXFxcIiBiaXQgYmVjYXVzZSBcXFwiYmRvXFxcIiBoYXMgbG93ZXJcXG4gICAgc3BlY2lmaWNpdHkgdGhhbiB0aGUgXFxcIjotbW96LWhhcy1kaXItYXR0clxcXCIgc2VsZWN0b3IgYWJvdmUuICovXFxuYmRvLFxcbmJkbzotbW96LWhhcy1kaXItYXR0ciB7XFxuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZS1vdmVycmlkZTtcXG59XFxuXFxudGV4dGFyZWE6LW1vei1kaXItYXR0ci1saWtlLWF1dG8sXFxucHJlOi1tb3otZGlyLWF0dHItbGlrZS1hdXRvIHtcXG4gICAgdW5pY29kZS1iaWRpOiBwbGFpbnRleHQ7XFxufVxcblxcbi8qIGJsb2NrcyAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5kaXYsXFxuZHQsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuZm9ybSxcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbmh0bWwsXFxubWFpbixcXG5uYXYsXFxuc2VhcmNoLFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMFxcbn1cXG5cXG5wLFxcbmRsLFxcbm11bHRpY29sIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxufVxcblxcbmRkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDQwcHg7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxuZmlndXJlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDQwcHg7XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA0MHB4O1xcbn1cXG5cXG5hZGRyZXNzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuY2VudGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IC1tb3otY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLjY3ZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IC42N2VtO1xcbn1cXG5cXG5oMixcXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLjgzZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IC44M2VtO1xcbn1cXG5cXG5oMyxcXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4xN2VtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG59XFxuXFxuaDQsXFxuOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxLjAwZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuMzNlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMS4zM2VtO1xcbn1cXG5cXG5oNSxcXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgaDEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAwLjgzZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEuNjdlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMS42N2VtO1xcbn1cXG5cXG5oNixcXG46aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIDppcyhhcnRpY2xlLCBhc2lkZSwgbmF2LCBzZWN0aW9uKSA6aXMoYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbikgOmlzKGFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24pIGgxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMC42N2VtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAyLjMzZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDIuMzNlbTtcXG59XFxuXFxubGlzdGluZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LWZhbWlseTogLW1vei1maXhlZDtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxufVxcblxcbnhtcCxcXG5wcmUsXFxucGxhaW50ZXh0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAtbW96LWZpeGVkO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcbn1cXG5cXG4vKiB0YWJsZXMgKi9cXG5cXG50YWJsZSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgICAvKiBYWFhsZGIgZG8gd2Ugd2FudCB0aGlzIGlmIHdlJ3JlIGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZSA/ICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtaW5kZW50OiAwO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwibGVmdFxcXCJdIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbnRhYmxlW2FsaWduPVxcXCJyaWdodFxcXCJdIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuXFxuLyogYm9yZGVyIGNvbGxhcHNlIHJ1bGVzICovXFxuXFxuLyogU2V0IGhpZGRlbiBpZiB3ZSBoYXZlICdmcmFtZScgb3IgJ3J1bGVzJyBhdHRyaWJ1dGUuXFxuICAgICAgU2V0IGl0IG9uIGFsbCBzaWRlcyB3aGVuIHdlIGRvIHNvIHRoZXJlJ3MgbW9yZSBjb25zaXN0ZW5jeVxcbiAgICAgIGluIHdoYXQgYXV0aG9ycyBzaG91bGQgZXhwZWN0ICovXFxuXFxuLyogUHV0IHRoaXMgZmlyc3Qgc28gJ2JvcmRlcicgYW5kICdmcmFtZScgcnVsZXMgY2FuIG92ZXJyaWRlIGl0LiAqL1xcbnRhYmxlW3J1bGVzXSB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XFxufVxcblxcbi8qICdib3JkZXInIGJlZm9yZSAnZnJhbWUnIHNvICdmcmFtZScgb3ZlcnJpZGVzXFxuICAgICAgIEEgYm9yZGVyIHdpdGggYSBnaXZlbiB2YWx1ZSBzaG91bGQsIG9mIGNvdXJzZSwgcGFzcyB0aGF0IHZhbHVlXFxuICAgICAgIGFzIHRoZSBib3JkZXItd2lkdGggaW4gcGl4ZWxzIC0+IGF0dHIgbWFwcGluZyAqL1xcblxcbi8qIDotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvIGlzIGxpa2UgW2JvcmRlcl06bm90KFtib3JkZXI9XFxcIjBcXFwiXSkgZXhjZXB0IGl0XFxuICAgICAgYWxzbyBjaGVja3MgZm9yIG90aGVyIHplcm8tbGlrZSB2YWx1ZXMgYWNjb3JkaW5nIHRvIEhUTUwgYXR0cmlidXRlXFxuICAgICAgcGFyc2luZyBydWxlcyAqL1xcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8ge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xcbn1cXG5cXG50YWJsZVtmcmFtZV0ge1xcbiAgICBib3JkZXI6IHRoaW4gaGlkZGVuO1xcbn1cXG5cXG4vKiBzcGVjaWZpY2l0eSBtdXN0IGJlYXQgdGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybyBydWxlIGFib3ZlICovXFxudGFibGVbZnJhbWU9XFxcInZvaWRcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwiYWJvdmVcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0IGhpZGRlbiBoaWRkZW4gaGlkZGVuO1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwiYmVsb3dcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuIGhpZGRlbiBvdXRzZXQgaGlkZGVuO1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwibGhzXFxcIl0ge1xcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbiBoaWRkZW4gaGlkZGVuIG91dHNldDtcXG59XFxuXFxudGFibGVbZnJhbWU9XFxcInJoc1xcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gb3V0c2V0IGhpZGRlbiBoaWRkZW47XFxufVxcblxcbnRhYmxlW2ZyYW1lPVxcXCJoc2lkZXNcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0IGhpZGRlbjtcXG59XFxuXFxudGFibGVbZnJhbWU9XFxcInZzaWRlc1xcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW4gb3V0c2V0O1xcbn1cXG5cXG50YWJsZVtmcmFtZT1cXFwiYm94XFxcIl0sXFxudGFibGVbZnJhbWU9XFxcImJvcmRlclxcXCJdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XFxufVxcblxcblxcbi8qIEludGVybmFsIFRhYmxlIEJvcmRlcnMgKi9cXG5cXG4vKiAnYm9yZGVyJyBjZWxsIGJvcmRlcnMgZmlyc3QgKi9cXG5cXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dHI+dGQsXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz4qPnRyPnRoLFxcbnRhYmxlOi1tb3otdGFibGUtYm9yZGVyLW5vbnplcm8+Kj50ZCxcXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPio+dGgsXFxudGFibGU6LW1vei10YWJsZS1ib3JkZXItbm9uemVybz50ZCxcXG50YWJsZTotbW96LXRhYmxlLWJvcmRlci1ub256ZXJvPnRoIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcbn1cXG5cXG4vKiBjb2xsYXBzZSBvbmx5IGlmIHJ1bGVzIGFyZSByZWFsbHkgc3BlY2lmaWVkICovXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIm5vbmVcXFwiXSwgW3J1bGVzPVxcXCJcXFwiXSkge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4vKiBvbmx5IHNwZWNpZmllZCBydWxlcyBvdmVycmlkZSAnYm9yZGVyJyBzZXR0aW5nc1xcbiAgIChpbmNyZWFzZWQgc3BlY2lmaWNpdHkgdG8gYWNoaWV2ZSB0aGlzKSAqL1xcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVxcXCJcXFwiXSk+dHI+dGQsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT4qPnRyPnRkLFxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVxcXCJcXFwiXSk+dHI+dGgsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT4qPnRyPnRoLFxcbnRhYmxlW3J1bGVzXTpub3QoW3J1bGVzPVxcXCJcXFwiXSk+dGQsXFxudGFibGVbcnVsZXNdOm5vdChbcnVsZXM9XFxcIlxcXCJdKT50aCB7XFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcIm5vbmVcXFwiXT4qPnRyPnRkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPnRyPnRoLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwibm9uZVxcXCJdPio+dHI+dGgsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJub25lXFxcIl0+dGgge1xcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJhbGxcXFwiXT50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPio+dHI+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJhbGxcXFwiXT50cj50aCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPio+dHI+dGgsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJhbGxcXFwiXT50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImFsbFxcXCJdPnRoIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50YWJsZVtydWxlc11bcnVsZXM9XFxcInJvd3NcXFwiXT50cixcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcInJvd3NcXFwiXT4qPnRyIHtcXG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItYmxvY2stZW5kLXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItYmxvY2stZW5kLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJjb2xzXFxcIl0+dHI+dGQsXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJjb2xzXFxcIl0+Kj50cj50ZCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImNvbHNcXFwiXT50cj50aCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImNvbHNcXFwiXT4qPnRyPnRoIHtcXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWlubGluZS1lbmQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1pbmxpbmUtc3RhcnQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItaW5saW5lLWVuZC1zdHlsZTogc29saWQ7XFxufVxcblxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiZ3JvdXBzXFxcIl0+Y29sZ3JvdXAge1xcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOiB0aGluO1xcbiAgICBib3JkZXItaW5saW5lLWVuZC13aWR0aDogdGhpbjtcXG4gICAgYm9yZGVyLWlubGluZS1zdGFydC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1pbmxpbmUtZW5kLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGFibGVbcnVsZXNdW3J1bGVzPVxcXCJncm91cHNcXFwiXT50Zm9vdCxcXG50YWJsZVtydWxlc11bcnVsZXM9XFxcImdyb3Vwc1xcXCJdPnRoZWFkLFxcbnRhYmxlW3J1bGVzXVtydWxlcz1cXFwiZ3JvdXBzXFxcIl0+dGJvZHkge1xcbiAgICBib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1ibG9jay1lbmQtd2lkdGg6IHRoaW47XFxuICAgIGJvcmRlci1ibG9jay1zdGFydC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1ibG9jay1lbmQtc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG5cXG4vKiBjYXB0aW9uIGluaGVyaXRzIGZyb20gdGFibGUgbm90IHRhYmxlLW91dGVyICovXFxuY2FwdGlvbiB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudGFibGVbYWxpZ249XFxcImNlbnRlclxcXCJdPmNhcHRpb24ge1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcXG59XFxuXFxudGFibGVbYWxpZ249XFxcImNlbnRlclxcXCJdPmNhcHRpb25bYWxpZ249XFxcImxlZnRcXFwiXTpkaXIobHRyKSB7XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvblthbGlnbj1cXFwibGVmdFxcXCJdOmRpcihydGwpIHtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcXG59XFxuXFxudGFibGVbYWxpZ249XFxcImNlbnRlclxcXCJdPmNhcHRpb25bYWxpZ249XFxcInJpZ2h0XFxcIl06ZGlyKGx0cikge1xcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG50YWJsZVthbGlnbj1cXFwiY2VudGVyXFxcIl0+Y2FwdGlvblthbGlnbj1cXFwicmlnaHRcXFwiXTpkaXIocnRsKSB7XFxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xcbn1cXG5cXG50ciB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcXG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XFxufVxcblxcbmNvbCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNvbHVtbjtcXG59XFxuXFxuY29sZ3JvdXAge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jb2x1bW4tZ3JvdXA7XFxufVxcblxcbnRib2R5IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50aGVhZCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxudGZvb3Qge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1mb290ZXItZ3JvdXA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qIGZvciBYSFRNTCB0YWJsZXMgd2l0aG91dCB0Ym9keSAqL1xcbnRhYmxlPnRyIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxudGQge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogdW5zZXQ7XFxuICAgIHBhZGRpbmc6IDFweDtcXG59XFxuXFxudGgge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gICAgdGV4dC1hbGlnbjogLW1vei1jZW50ZXItb3ItaW5oZXJpdDtcXG59XFxuXFxuOmlzKHRyLCB0Ym9keSwgdGhlYWQsIHRmb290LCB0YWJsZSk+Zm9ybTotbW96LWlzLWh0bWwge1xcbiAgICAvKiBJbXBvcnRhbnQ6IGRvbid0IHNob3cgdGhlc2UgZm9ybXMgaW4gSFRNTCAqL1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbnRhYmxlW2JvcmRlcmNvbG9yXT50Ym9keSxcXG50YWJsZVtib3JkZXJjb2xvcl0+dGhlYWQsXFxudGFibGVbYm9yZGVyY29sb3JdPnRmb290LFxcbnRhYmxlW2JvcmRlcmNvbG9yXT5jb2wsXFxudGFibGVbYm9yZGVyY29sb3JdPmNvbGdyb3VwLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT50cixcXG50YWJsZVtib3JkZXJjb2xvcl0+Kj50cixcXG50YWJsZVtib3JkZXJjb2xvcl0+dHI+dGQsXFxudGFibGVbYm9yZGVyY29sb3JdPio+dHI+dGQsXFxudGFibGVbYm9yZGVyY29sb3JdPnRyPnRoLFxcbnRhYmxlW2JvcmRlcmNvbG9yXT4qPnRyPnRoIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBpbmxpbmVzICovXFxuXFxucTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBvcGVuLXF1b3RlO1xcbn1cXG5cXG5xOmFmdGVyIHtcXG4gICAgY29udGVudDogY2xvc2UtcXVvdGU7XFxufVxcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuaSxcXG5jaXRlLFxcbmVtLFxcbnZhcixcXG5kZm4ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbnR0LFxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogLW1vei1maXhlZDtcXG59XFxuXFxudSxcXG5pbnMge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxucyxcXG5zdHJpa2UsXFxuZGVsIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbmJpZyB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG59XFxuXFxuc3ViIHtcXG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG5zdXAge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG59XFxuXFxubm9iciB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbm1hcmsge1xcbiAgICBiYWNrZ3JvdW5kOiBNYXJrO1xcbiAgICBjb2xvcjogTWFya1RleHQ7XFxufVxcblxcbi8qIHRpdGxlcyAqL1xcbmFiYnJbdGl0bGVdLFxcbmFjcm9ueW1bdGl0bGVdIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBkb3R0ZWQgdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBsaXN0cyAqL1xcblxcbnVsLFxcbm1lbnUsXFxuZGlyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XFxufVxcblxcbnVsLFxcbm9sLFxcbm1lbnUge1xcbiAgICBjb3VudGVyLXJlc2V0OiBsaXN0LWl0ZW07XFxufVxcblxcbm9sIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgICB0ZXh0LWFsaWduOiBtYXRjaC1wYXJlbnQ7XFxufVxcblxcbi8qIG5lc3RlZCBsaXN0cyBoYXZlIG5vIHRvcC9ib3R0b20gbWFyZ2lucyAqL1xcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIHVsLFxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIG9sLFxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIGRpcixcXG46aXModWwsIG9sLCBkaXIsIG1lbnUsIGRsKSBtZW51LFxcbjppcyh1bCwgb2wsIGRpciwgbWVudSwgZGwpIGRsIHtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbn1cXG5cXG4vKiAyIGRlZXAgdW5vcmRlcmVkIGxpc3RzIHVzZSBhIGNpcmNsZSAqL1xcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgdWwsXFxuOmlzKG9sLCB1bCwgbWVudSwgZGlyKSBtZW51LFxcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgZGlyIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxufVxcblxcbi8qIDMgZGVlcCAob3IgbW9yZSkgdW5vcmRlcmVkIGxpc3RzIHVzZSBhIHNxdWFyZSAqL1xcbjppcyhvbCwgdWwsIG1lbnUsIGRpcikgOmlzKG9sLCB1bCwgbWVudSwgZGlyKSB1bCxcXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgbWVudSxcXG46aXMob2wsIHVsLCBtZW51LCBkaXIpIDppcyhvbCwgdWwsIG1lbnUsIGRpcikgZGlyIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XFxufVxcblxcblxcbi8qIGxlYWZzICovXFxuXFxuLyogPGhyPiBub3NoYWRlIGFuZCBjb2xvciBhdHRyaWJ1dGVzIGFyZSBoYW5kbGVkIGNvbXBsZXRlbHkgYnlcXG4gICogSFRNTEhSRWxlbWVudDo6TWFwQXR0cmlidXRlc0ludG9SdWxlLlxcbiAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyN0aGUtaHItZWxlbWVudC0yXFxuICAqL1xcbmhyIHtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwLjVlbTtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIC8qIEZJWE1FOiBUaGlzIGlzIG5vdCByZWFsbHkgcGVyIHNwZWMgKi9cXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmhyW3NpemU9XFxcIjFcXFwiXSB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZSBub25lIG5vbmU7XFxufVxcblxcbi8qIE5vdGUgdGhhdCB3ZSBvbmx5IGludGVuZCBmb3IgdGhlIGFsdCBjb250ZW50IHRvIHNob3cgdXAgaWYgdGhlIGltYWdlIGlzXFxuICAqIGJyb2tlbi4gQnV0IG5vbi1icm9rZW4gaW1hZ2VzL2lucHV0cyB3aWxsIGhhdmUgYSByZXBsYWNlZCBib3gsIGFuZCB0aHVzIHdlXFxuICAqIHdvbid0IHdlIGRvbid0IGdlbmVyYXRlIHRoZSBwc2V1ZG8tZWxlbWVudCBhbnl3YXlzLiBUaGlzIHByZXZlbnRzXFxuICAqIHVubmVjZXNzYXJ5IHJlZnJhbWluZyB3aGVuIGltYWdlcyBiZWNvbWUgYnJva2VuIC8gbm9uLWJyb2tlbi4gKi9cXG5pbnB1dFt0eXBlPWltYWdlXTo6YmVmb3JlLFxcbmltZzo6YmVmb3JlIHtcXG4gICAgY29udGVudDogLW1vei1hbHQtY29udGVudCAhaW1wb3J0YW50O1xcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGU7XFxufVxcblxcbmltZ1t1c2VtYXBdLFxcbm9iamVjdFt1c2VtYXBdIHtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcbmZyYW1lc2V0IHtcXG4gICAgZGlzcGxheTogYmxvY2sgISBpbXBvcnRhbnQ7XFxuICAgIG92ZXJmbG93OiBjbGlwO1xcbiAgICBwb3NpdGlvbjogc3RhdGljICEgaW1wb3J0YW50O1xcbiAgICBmbG9hdDogbm9uZSAhIGltcG9ydGFudDtcXG4gICAgYm9yZGVyOiBub25lICEgaW1wb3J0YW50O1xcbn1cXG5cXG5mcmFtZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgISBpbXBvcnRhbnQ7XFxufVxcblxcbmlmcmFtZSB7XFxuICAgIGJvcmRlcjogMnB4IGluc2V0O1xcbn1cXG5cXG5zcGFjZXIge1xcbiAgICBwb3NpdGlvbjogc3RhdGljICEgaW1wb3J0YW50O1xcbiAgICBmbG9hdDogbm9uZSAhIGltcG9ydGFudDtcXG59XFxuXFxuY2FudmFzIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmlmcmFtZTpmb2N1cy12aXNpYmxlLFxcbmJvZHk6Zm9jdXMtdmlzaWJsZSxcXG5odG1sOmZvY3VzLXZpc2libGUge1xcbiAgICAvKiBUaGVzZSBlbGVtZW50cyBoaXN0b3JpY2FsbHkgZG9uJ3Qgc2hvdyBvdXRsaW5lcyB3aGVuIGZvY3VzZWQgYnkgZGVmYXVsdC5cXG4gICAgKiBXZSBjb3VsZCBjb25zaWRlciBjaGFuZ2luZyB0aGF0IGlmIG5lZWRlZC4gKi9cXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogaGlkZGVuIGVsZW1lbnRzOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNoaWRkZW4tZWxlbWVudHNcXG4gICpcXG4gICogRXhjZXB0aW9uczpcXG4gICpcXG4gICogICogYXJlYSBkZWNsYXJhdGlvbiBuZWVkcyB0byBiZSAhaW1wb3J0YW50LCBzZWUgYmVsb3cgLyBidWcgMTM1MDQwLiAgVGhhdCdzXFxuICAqICAgIGhhY2t5IGFuZCBicm9rZW4uXFxuICAqXFxuICAqICAqIFtoaWRkZW5dIGlzIGltcGxlbWVudGVkIGFzIGEgcHJlc2VudGF0aW9uIGF0dHJpYnV0ZSB0byBhdm9pZCBhIGdsb2JhbFxcbiAgKiAgICBzZWxlY3RvciBpbiBhIFVBIHNoZWV0LlxcbiAgKi9cXG5iYXNlLFxcbmJhc2Vmb250LFxcbmRhdGFsaXN0LFxcbmhlYWQsXFxubGluayxcXG5tZXRhLFxcbm5vZW1iZWQsXFxubm9mcmFtZXMsXFxucGFyYW0sXFxucnAsXFxuc2NyaXB0LFxcbnN0eWxlLFxcbnRlbXBsYXRlLFxcbnRpdGxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYXJlYSB7XFxuICAgIC8qIERvbid0IGdpdmUgaXQgZnJhbWVzIG90aGVyIHRoYW4gaXRzIGltYWdlZnJhbWUgKi9cXG4gICAgZGlzcGxheTogbm9uZSAhIGltcG9ydGFudDtcXG59XFxuXFxuaWZyYW1lOmZ1bGxzY3JlZW4ge1xcbiAgICAvKiBpZnJhbWVzIGluIGZ1bGwtc2NyZWVuIG1vZGUgZG9uJ3Qgc2hvdyBhIGJvcmRlci4gKi9cXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIERldGFpbHMgYW5kIHN1bW1hcnlcXG4gICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jdGhlLWRldGFpbHMtYW5kLXN1bW1hcnktZWxlbWVudHNcXG4gICpcXG4gICogTm90ZSB0aGF0IHRoZXNlIHJ1bGVzIG5lZWQgdG8gYmUgZHVwbGljYXRlZCBpbiBkZXRhaWxzLmNzcyBmb3IgdGhlIGFub255bW91c1xcbiAgKiBzdW1tYXJ5LCB3aGljaCB3b3VsZG4ndCBtYXRjaCBvdGhlcndpc2UuXFxuICAqXFxuICAqIFRoZSBzcGVjIGhlcmUgc2F5cyBzb21ldGhpbmcgZGlmZmVyZW50LCBzZWVcXG4gICogaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy84NjEwXFxuICAqL1xcbmRldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlIHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgICBjb3VudGVyLWluY3JlbWVudDogbGlzdC1pdGVtIDA7XFxuICAgIGxpc3Qtc3R5bGU6IGRpc2Nsb3N1cmUtY2xvc2VkIGluc2lkZTtcXG59XFxuXFxuZGV0YWlsc1tvcGVuXT5zdW1tYXJ5OmZpcnN0LW9mLXR5cGUge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2Nsb3N1cmUtb3BlbjtcXG59XFxuXFxuLyogbWVkaWEgZWxlbWVudHMgKi9cXG52aWRlbyB7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbnZpZGVvPmltZzotbW96LW5hdGl2ZS1hbm9ueW1vdXMge1xcbiAgICAvKiBWaWRlbyBwb3N0ZXIgaW1hZ2VzIHNob3VsZCByZW5kZXIgd2l0aCB0aGUgdmlkZW8gZWxlbWVudCdzIFxcXCJvYmplY3QtZml0XFxcIiAmXFxuICAgICAgXFxcIm9iamVjdC1wb3NpdGlvblxcXCIgcHJvcGVydGllcyAqL1xcbiAgICBvYmplY3QtZml0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xcbn1cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmF1ZGlvW2NvbnRyb2xzXSB7XFxuICAgIC8qIFRoaXMgZW5zdXJlcyB0aGF0IGludHJpbnNpYyBzaXppbmcgY2FuIHJlbGlhYmx5IHNocmlua3dyYXAgb3VyXFxuICAgICAgIGNvbnRyb2xzICh3aGljaCBhcmUgYWxzbyBhbHdheXMgaG9yaXpvbnRhbCkgYW5kIHByb2R1Y2UgYVxcbiAgICAgICByZWFzb25hYmxlIGludHJpbnNpYyBzaXplIGZyb20gdGhlbS4gKi9cXG4gICAgd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7XFxufVxcblxcbip8Kjo6LW1vei1odG1sLWNhbnZhcy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gICAgLyogd2Ugd2FudCB0byBiZSBhbiBhYnNvbHV0ZSBhbmQgZml4ZWQgY29udGFpbmVyICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApICFpbXBvcnRhbnQ7XFxufVxcblxcbnZpZGVvPi5jYXB0aW9uLWJveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyoqXFxuICAqIFRoZSBwc2V1ZG8gZWxlbWVudCB3b24ndCBpbmhlcml0IENTUyBzdHlsZXMgZnJvbSBpdHMgZGlyZWN0IHBhcmVudCwgYDo6Y3VlYFxcbiAgKiB3b3VsZCBhY3R1YWxseSBpbmhlcml0IHN0eWxlcyBmcm9tIHZpZGVvIGJlY2F1c2UgaXQncyB2aWRlbydzIHBzZXVkbyBlbGVtZW50LlxcbiAgKiBUaGVyZWZvcmUsIHdlIGhhdmUgdG8gZXhwbGljaXRseSBzZXQgc29tZSBzdHlsZXMgd2hpY2ggYXJlIGFscmVhZHkgZGVmaW5lZFxcbiAgKiBpbiBpdHMgcGFyZW50IGVsZW1lbnQgaW4gdnR0LmpzbS5cXG4gICovXFxuOjpjdWUge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1jdWUtZm9udC1zaXplKTtcXG4gICAgd3JpdGluZy1tb2RlOiB2YXIoLS1jdWUtd3JpdGluZy1tb2RlLCBpbmhlcml0KTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgLyogVE9ETyA6IGVuYWJsZSB1bmljb2RlLWJpZGksIHJpZ2h0IG5vdyBlbmFibGUgaXQgd291bGQgY2F1c2UgaW5jb3JyZWN0XFxuICAgICAgICAgICAgIGRpc3BsYXkgZGlyZWN0aW9uLCBtYXliZSByZWxhdGVkIHdpdGggYnVnIDE1NTg0MzEuICovXFxufVxcblxcbi8qIDxkaWFsb2c+IGVsZW1lbnQgc3R5bGVzICovXFxuXFxuZGlhbG9nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAwO1xcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlci13aWR0aDogaW5pdGlhbDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzO1xcbiAgICBjb2xvcjogQ2FudmFzVGV4dDtcXG4gICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG59XFxuXFxuZGlhbG9nOm5vdChbb3Blbl0pIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGlhbG9nOm1vZGFsIHtcXG4gICAgLW1vei10b3AtbGF5ZXI6IHRvcCAhaW1wb3J0YW50O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBpbnNldC1ibG9jay1zdGFydDogMDtcXG4gICAgaW5zZXQtYmxvY2stZW5kOiAwO1xcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDZweCAtIDJlbSk7XFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDZweCAtIDJlbSk7XFxufVxcblxcbi8qIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2Zsb3ctY29udGVudC0zICovXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxubWFycXVlZSB7XFxuICAgIGlubGluZS1zaXplOiAtbW96LWF2YWlsYWJsZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5tYXJxdWVlOmlzKFtkaXJlY3Rpb249XFxcInVwXFxcIl0sIFtkaXJlY3Rpb249XFxcImRvd25cXFwiXSkge1xcbiAgICBibG9jay1zaXplOiAyMDBweDtcXG59XFxuXFxuLyogUnVieSAqL1xcblxcbnJ1Ynkge1xcbiAgICBkaXNwbGF5OiBydWJ5O1xcbn1cXG5cXG5yYiB7XFxuICAgIGRpc3BsYXk6IHJ1YnktYmFzZTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxucnQge1xcbiAgICBkaXNwbGF5OiBydWJ5LXRleHQ7XFxufVxcblxcbnJ0YyB7XFxuICAgIGRpc3BsYXk6IHJ1YnktdGV4dC1jb250YWluZXI7XFxufVxcblxcbnJ0YyxcXG5ydCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgICAtbW96LW1pbi1mb250LXNpemUtcmF0aW86IDUwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbkBtZWRpYSBub3QgKC1tb3otcGxhdGZvcm06IHdpbmRvd3MpIHtcXG5cXG4gICAgcnRjLFxcbiAgICBydCB7XFxuICAgICAgICAvKiBUaGUgd2lkZWx5LXVzZWQgV2luZG93cyBmb250IE1laXJ5byBkb2Vzbid0IHdvcmsgZmluZSB3aXRoIHRoaXNcXG4gICAgICogc2V0dGluZywgc28gZGlzYWJsZSB0aGlzIG9uIFdpbmRvd3MuIFdlIHNob3VsZCByZS1lbmFibGUgaXQgb25jZVxcbiAgICAgKiBNaWNyb3NvZnQgZml4ZXMgdGhpcyBpc3N1ZS4gU2VlIGJ1ZyAxMTY0Mjc5LiAqL1xcbiAgICAgICAgZm9udC12YXJpYW50LWVhc3QtYXNpYW46IHJ1Ynk7XFxuICAgIH1cXG59XFxuXFxucnRjLFxcbnJ0IHtcXG4gICAgdGV4dC1lbXBoYXNpczogbm9uZTtcXG59XFxuXFxucnRjOmxhbmcoemgpLFxcbnJ0OmxhbmcoemgpIHtcXG4gICAgcnVieS1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5ydGM6bGFuZyh6aC1UVyksXFxucnQ6bGFuZyh6aC1UVykge1xcbiAgICBmb250LXNpemU6IDMwJTtcXG4gICAgLyogYm9wb21vZm8gKi9cXG4gICAgLW1vei1taW4tZm9udC1zaXplLXJhdGlvOiAzMCU7XFxufVxcblxcbnJ0Yz5ydCB7XFxuICAgIGZvbnQtc2l6ZTogdW5zZXQ7XFxufVxcblxcbnJ1YnksXFxucmIsXFxucnQsXFxucnRjIHtcXG4gICAgdW5pY29kZS1iaWRpOiBpc29sYXRlO1xcbn1cXG5cXG4vKiBTaGFkb3cgRE9NIHYxXFxuICAqIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtc2NvcGluZy8jc2xvdHMtaW4tc2hhZG93LXRyZWUgKi9cXG5zbG90IHtcXG4gICAgZGlzcGxheTogY29udGVudHM7XFxufVxcblxcbi8qIFVuLWludmVydCBpbWFnZXMgYW5kIHZpZGVvcyBmb3IgdXNlcnMgdXNpbmcgaW52ZXJ0ZWQgY29sb3JzLlxcbiAgKiBcXFwiVXNlciBhZ2VudHMgbXVzdCBhZGQgdGhlIGZvbGxvd2luZyBydWxlIHRvIHRoZWlyIFVBIHN0eWxlIHNoZWV0XFxcIlxcbiAgKiBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTUvI2ludmVydGVkXFxuICAqL1xcbkBtZWRpYSAoaW52ZXJ0ZWQtY29sb3JzKSB7XFxuXFxuICAgIGltZzpub3QocGljdHVyZSA+IGltZyksXFxuICAgIHBpY3R1cmUsXFxuICAgIHZpZGVvIHtcXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbiAgICB9XFxufVxcblxcbi8qIEhpZGUgbm9zY3JpcHQgZWxlbWVudHMgaWYgc2NyaXB0aW5nIGlzIGVuYWJsZWQgKi9cXG5AbWVkaWEgKHNjcmlwdGluZykge1xcbiAgICBub3NjcmlwdCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHByaW50IHtcXG5cXG4gICAgaW5wdXQsXFxuICAgIHRleHRhcmVhLFxcbiAgICBzZWxlY3QsXFxuICAgIGJ1dHRvbixcXG4gICAgZGV0YWlscyB7XFxuICAgICAgICAtbW96LXVzZXItaW5wdXQ6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG59XFxuXFxuLyogUG9wb3ZlciBVQSBzdHlsZSwgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jZmxvdy1jb250ZW50LTMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWEtcXVlcnktbm8taW52YWxpZCAqL1xcbkBtZWRpYSAoLW1vei1ib29sLXByZWY6IFxcXCJkb20uZWxlbWVudC5wb3BvdmVyLmVuYWJsZWRcXFwiKSB7XFxuICAgIFtwb3BvdmVyXTpub3QoOnBvcG92ZXItb3Blbik6bm90KGRpYWxvZ1tvcGVuXSkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBkaWFsb2c6cG9wb3Zlci1vcGVuIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIFtwb3BvdmVyXSB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBpbnNldDogMDtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBib3JkZXI6IHNvbGlkO1xcbiAgICAgICAgcGFkZGluZzogMC4yNWVtO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBjb2xvcjogQ2FudmFzVGV4dDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IENhbnZhcztcXG4gICAgfVxcblxcbiAgICA6cG9wb3Zlci1vcGVuIHtcXG4gICAgICAgIC1tb3otdG9wLWxheWVyOiB0b3A7XFxuICAgIH1cXG5cXG4gICAgOnBvcG92ZXItb3Blbjo6YmFja2Ryb3Age1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgaW5zZXQ6IDA7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG5cXG5cXG59XFxuXFxuLmhlYWRlclBhZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCAyNTAsIDYxLCAwLjc5OSk7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICAvKiBmb250LXNpemU6IDJyZW07ICovXFxuICAgIC8qIHBhZGRpbmc6IDAuMnJlbSAwOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtmaXJzdF0gMzUlIFtzZWNvbmRdIDY1JSBbZW5kXTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiA2MzNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuXFxuXFxuLmxlZnRTZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxuXFxufVxcblxcbi5yaWdodFNlY3Rpb24ge1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW46IDVyZW0gYXV0bztcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMTUwLCAxMjIsIDAuMjgpO1xcbiAgICBwYWRkaW5nOiA1cHggM3B4IDE1cHggM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcblxcbiNwcm9qZWN0c0hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjc1Nik7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG59XFxuXFxuI3Byb2plY3RzVGl0bGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xcblxcbn1cXG5cXG4jc3RhcnRQcm9qZWN0QnV0dG9uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxMik7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOTAlO1xcbn1cXG5cXG5cXG4jc3RhcnRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuODk0KTtcXG59XFxuXFxuI2lucHV0UHJvamVjdCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xcbn1cXG5cXG5cXG4udGFza3NVbml0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjQ0LCAxMjkpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udGl0bGVUYXNrIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzcsIDE5Mik7XFxufVxcblxcbi50YXNrRGF0ZVByaW9yaXR5IHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnRhc2tEYXRlIHtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGFza1ByaW9yaXR5IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuXFxuXFxuXFxuLnRhc2tVbml0SW1wb3J0YW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MSwgMjM4LCAxMzIpO1xcbn1cXG5cXG4udGFza1VuaXRVcmdlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEsIDI1NSwgMCk7XFxufVxcblxcblxcblxcbi5wcm9qZWN0c1VuaXQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uYnV0dG9uUHJvamVjdHMsXFxuLmFjdGl2ZVByb2plY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNTtcXG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmJ1dHRvblByb2plY3RzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcXG59XFxuXFxuLmJ1dHRvblByb2plY3RzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAyMDcsIDIwNyk7XFxufVxcblxcblxcblxcblxcblxcbi5yZW1vdmVQcm9qZWN0cyB7XFxuICAgIGdyaWQtY29sdW1uOiA3IC8gODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG59XFxuXFxuLmFjdGl2ZVByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MjA0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hY3RpdmVQcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDIwOCwgMzApO1xcbn1cXG5cXG5cXG5cXG4jbGlzdFByb2plY3RzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4uaGlkZVJlbW92ZUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblxcblxcbiNhZGRQcm9qZWN0RGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MSwgMTUxLCAyMjIpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDFyZW07XFxuICAgIHRvcDogMXJlbTtcXG59XFxuXFxuLyogcmlnaHQgc2lkZSAqL1xcblxcbi50YXNrcyB7XFxuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCA3NCwgMTYpO1xcbn1cXG5cXG4jdGFza3NUaXRsZSB7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmFkZFRhc2sge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE2KTtcXG59XFxuXFxuXFxuLmFkZFRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAyNDgsIDY0LCAwLjQxNCk7XFxufVxcblxcblxcbi50YXNrQ29udGFpbmVyRmlyc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjbGVhcjogcmlnaHQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxufVxcblxcbi50YXNrQ29udGFpbmVyRmlyc3Q+ZGl2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuXFxufVxcblxcblxcbiNlZGl0VGFza0RpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB0b3A6IDQuMnJlbTtcXG4gICAgbWluLXdpZHRoOiAzODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuXFxufVxcblxcbiNhZGRUYXNrRGl2IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDUlO1xcbiAgICB0b3A6IDRyZW07XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbiNlZGl0VGFza0Zvcm0ge1xcbiAgICBtYXJnaW46IDhweDtcXG59XFxuXFxuI2FkZFRhc2tGb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcbiAgICBtYXJnaW46IDhweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcIm5ld1Rhc2tcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMC40cmVtIDAgMS40cmVtIDA7XFxufVxcblxcbiNhZGRQcm9qZWN0Rm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuI2xhYmVsUHJvamVjdCB7XFxuICAgIG1hcmdpbjogLjRyZW0gMS41cmVtO1xcbn1cXG5cXG4jYnV0dG9uUHJvamVjdEZvcm0ge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTk5LCAxMTMpXFxufVxcblxcbiNidXR0b25Qcm9qZWN0Rm9ybTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIwNiwgMTAzKVxcbn1cXG5cXG5cXG5zcGFuIHtcXG4gICAgbWFyZ2luOiA1cHggMzBweDtcXG59XFxuXFxuXFxuXFxuLmxhYmVsUHJpb3JpdHkge1xcbiAgICAvKiBkaXNwbGF5OiA7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5cXG5cXG5sYWJlbFtmb3I9XFxcInRleHRBcmVhVGFza1xcXCJdIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNkYXRlRGl2LFxcbiNwcmlvcml0eURpdixcXG4jbm90ZXNEaXYge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNwcmlvcml0eSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm15Tm90ZXMge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDgwLCAyNTUpO1xcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4udGFza1NldHRpbmdzIHtcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG8gMC41cmVtIGF1dG87XFxufVxcblxcbi50YXNrU2V0dGluZ3M+YnV0dG9uIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMDcxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFza1NldHRpbmdzPmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuLnRhc2tTZXR0aW5ncz4ucmVtb3ZlVGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDEyLCAxMik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuLnRhc2tDb21wbGV0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG59XFxuXFxuLnRhc2tDb21wbGV0ZWQgLmJ1dHRvbkVkaXRUYXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFjdGl2ZVByb2plY3QsIGNob3NlblRhc2ssIHNob3dUYXNrcyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBnZXRGb3JtRGF0YVRhc2sgfSBmcm9tIFwiLi90YXNrQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5mdW5jdGlvbiBzdWJtaXRFZGl0VGFzaygpIHtcbiAgLy8gcnVucyB3aGVuIHRoZSBmb3JtIGlzIHN1YlxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vIEVkaXRlZCBkYXRhICh0aGUgZGF0YSB0aGF0IHdlIHN1Ym1pdCBhcyBjb3JyZWN0aW9ucylcbiAgY29uc3QgZm9ybUVkaXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tGb3JtXCIpO1xuICBjb25zdCB0YXNrRGF0YUVkaXQgPSBnZXRGb3JtRGF0YVRhc2soZm9ybUVkaXRlZCk7XG5cbiAgLy8gTW9kaWZ5IHRoZSBkYXRhXG4gIGFjdGl2ZVByb2plY3QubW9kaWZ5VGFzayhjaG9zZW5UYXNrLCB0YXNrRGF0YUVkaXRbMF0pO1xuXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGlkUHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShhY3RpdmVQcm9qZWN0KSk7XG4gIH1cblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRGl2XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgc2hvd1Rhc2tzKGFjdGl2ZVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFza0Zvcm0oKSB7XG4gIC8vIFRoZSBmb3JtIGlzIGFkZGVkIGluIHRoZSBpbmRleC5qc1xuXG4gIGNvbnN0IGNvbnRhaW5lckVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXJFZGl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFRhc2tEaXZcIik7XG5cbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAvLyBOYW1lIHRoZSBUYXNrXG4gIGNvbnN0IGVsZW1lbnROYW1lVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxhYmVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICBsYWJlbFRhc2suc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdFRhc2tcIik7XG5cbiAgY29uc3QgbmFtZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFRhc2tcIik7XG4gIG5hbWVUYXNrLnZhbHVlID0gXCJOYW1lIHRoZSB0YXNrXCI7XG4gIG5hbWVUYXNrLnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZVRhc2submFtZSA9IFwibmFtZVwiO1xuXG4gIGVsZW1lbnROYW1lVGFzay5hcHBlbmRDaGlsZChsYWJlbFRhc2spO1xuICBlbGVtZW50TmFtZVRhc2suYXBwZW5kQ2hpbGQobmFtZVRhc2spO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlbGVtZW50TmFtZVRhc2spO1xuXG4gIC8vIER1ZSBEYXRlXG4gIGNvbnN0IGVsZW1lbnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxlbWVudERhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlRGl2XCIpO1xuXG4gIGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxEYXRlLnRleHRDb250ZW50ID0gXCJEYXRlOiBcIjtcbiAgbGFiZWxEYXRlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZURhdGVFZGl0XCIpO1xuXG4gIGNvbnN0IGlucHV0RGF0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0RGF0ZVRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlRWRpdFwiKTtcbiAgaW5wdXREYXRlVGFzay50eXBlID0gXCJkYXRlXCI7XG4gIGlucHV0RGF0ZVRhc2submFtZSA9IFwiZGF0ZVwiO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChsYWJlbERhdGUpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dERhdGVUYXNrKTtcblxuICBlbGVtZW50RGF0ZS5hcHBlbmRDaGlsZChsYWJlbERhdGUpO1xuICBlbGVtZW50RGF0ZS5hcHBlbmRDaGlsZChpbnB1dERhdGVUYXNrKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudERhdGUpO1xuXG4gIC8vIFByaW9yaXR5XG5cbiAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlEaXZFZGl0XCIpO1xuXG4gIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5RWRpdFwiKTtcblxuICAvLyBISUdIXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlFZGl0XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZ2hQcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSElHSFwiKTtcblxuICBpbnB1dFByaW9yaXR5SGlnaC50eXBlID0gXCJyYWRpb1wiO1xuICBpbnB1dFByaW9yaXR5SGlnaC5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9IFwiSElHSFwiO1xuICBsYWJlbFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsUHJpb3JpdHlFZGl0XCIpO1xuICBsYWJlbFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoUHJpb3JpdHlFZGl0XCIpO1xuXG4gIC8vIE1FRElVTVxuICBjb25zdCBpbnB1dFByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZWRpdW1Qcmlvcml0eUVkaXRcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNRURJVU1cIik7XG5cbiAgaW5wdXRQcmlvcml0eU1lZGl1bS50eXBlID0gXCJyYWRpb1wiO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS50ZXh0Q29udGVudCA9IFwiTUVESVVNXCI7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5RWRpdFwiKTtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZWRpdW1Qcmlvcml0eUVkaXRcIik7XG5cbiAgLy8gTE9XXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0UHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvd1ByaW9yaXR5RWRpdFwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkxPV1wiKTtcblxuICBpbnB1dFByaW9yaXR5TG93LnR5cGUgPSBcInJhZGlvXCI7XG4gIGlucHV0UHJpb3JpdHlMb3cubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFByaW9yaXR5TG93LnRleHRDb250ZW50ID0gXCJMT1dcIjtcbiAgbGFiZWxQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxhYmVsUHJpb3JpdHlFZGl0XCIpO1xuICBsYWJlbFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvd1ByaW9yaXR5RWRpdFwiKTtcblxuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZSk7XG5cbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eU1lZGl1bSk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5TG93KTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlMb3cpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUVsZW1lbnQpO1xuXG4gIC8vIE5vdGVzXG5cbiAgY29uc3Qgbm90ZXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90ZXNFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNEaXZcIik7XG5cbiAgY29uc3Qgbm90ZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbm90ZXNUaXRsZS50ZXh0Q29udGVudCA9IFwiTm90ZXNcIjtcbiAgbm90ZXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0ZXh0QXJlYVRhc2tFZGl0XCIpO1xuICBjb25zdCB0YXNrVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRleHRBcmVhVGFza0VkaXRcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNVwiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCI1MFwiKTtcbiAgdGFza1RleHRBcmVhLm5hbWUgPSBcInRleHRBcmVhVGFza1wiO1xuXG4gIG5vdGVzRWxlbWVudC5hcHBlbmRDaGlsZChub3Rlc1RpdGxlKTtcbiAgbm90ZXNFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tUZXh0QXJlYSk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKG5vdGVzRWxlbWVudCk7XG5cbiAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0VGFza0Zvcm1cIik7XG4gIGNvbnRhaW5lckVkaXQuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gIC8vIEJ1dHRvbiBFZGl0XG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uRWRpdFRhc2tcIik7XG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVESVRcIjtcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0RWRpdFRhc2ssIGZhbHNlKTtcblxuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyRWRpdDtcbn1cblxuZXhwb3J0IHsgZWRpdFRhc2tGb3JtIH07XG4iLCJpbXBvcnQgeyBlbGVtZW50UHJvamVjdCwgZG9tU2hvd1Rhc2tzIH0gZnJvbSBcIi4vcHJvamVjdHNEb20uanNcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmxldCBhY3RpdmVQcm9qZWN0O1xubGV0IGNob3NlblRhc2s7XG5cbmZ1bmN0aW9uIHNldENob3NlblRhc2sodGFzaykge1xuICBjaG9zZW5UYXNrID0gdGFzaztcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChzZXRQcm9qZWN0KSB7XG4gIGxldCBwcm9qZWN0SWQ7XG4gIGxldCBlbGVtZW50SWQ7XG4gIC8vIFdlIHNldCB0aGUgYWN0aXZlIHByb2plY3QgYW5kIGNoYW5nZSB0aGUgY29sb3Igb2YgdGhlIGJ1dHRvblxuICBpZiAoYWN0aXZlUHJvamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvamVjdElkID0gYWN0aXZlUHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3RJZCk7XG4gIH1cblxuICBpZiAoZWxlbWVudElkICE9PSBudWxsICYmIGVsZW1lbnRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudElkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVQcm9qZWN0XCIpO1xuICB9XG5cbiAgYWN0aXZlUHJvamVjdCA9IHNldFByb2plY3Q7XG5cbiAgbGV0IG5ld19wcm9qZWN0SWQgPSBzZXRQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICBsZXQgbmV3X2VsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld19wcm9qZWN0SWQpO1xuICBpZiAobmV3X2VsZW1lbnRJZCAhPSBudWxsKSB7XG4gICAgbmV3X2VsZW1lbnRJZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUHJvamVjdFwiKTtcbiAgfVxuXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpICYmIG5ld19wcm9qZWN0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQWN0aXZlUHJvamVjdFwiLCBuZXdfcHJvamVjdElkKTtcbiAgfVxufVxuXG4vLyBBbGwgdGhlIHByb2plY3RzIG5hbWVzXG5jb25zdCBteVByb2plY3RzID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICByZXR1cm4geyBuYW1lLCB0YXNrTGlzdDoge30sIGlkOiBcInByb2plY3RcIiArIGFzc2lnblByb2plY3RJZCgpIH07XG59XG5cbi8vIFRoZSBhcmd1bWVudCB3aWxsIGJlIHRoZSBpbnN0YW50aWF0aW9uIG9mIGNyZWF0ZVByb2plY3RcbmZ1bmN0aW9uIG15UHJvamVjdE1ldGhvZHMobXlQcm9qZWN0KSB7XG4gIHJldHVybiB7XG4gICAgLi4ubXlQcm9qZWN0LFxuICAgIGdldFByb2plY3RJZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfSxcbiAgICBnZXRUYXNrSWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tJZDtcbiAgICB9LFxuICAgIGdldFByb2plY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0UHJvamVjdE5hbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfSxcbiAgICBnZXRUYXNrTGlzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XG4gICAgfSxcbiAgICBlbmRUYXNrOiBmdW5jdGlvbiAodGFza0luUXVlc3Rpb24sIGlzQ29tcGxldGVkKSB7XG4gICAgICAvLyBJdCBjaGFuZ2VzIG9ubHkgdGhlIHZpc3VhbCBhc3BlY3Qgb2YgdGhlIHRhc2tcbiAgICAgIHRhc2tJblF1ZXN0aW9uW1wiY29tcGxldGVkXCJdID0gaXNDb21wbGV0ZWQ7XG4gICAgICBsZXQgbXlFbGVtZW50VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNob3NlblRhc2tbXCJuYW1lSWRcIl0pO1xuICAgICAgaWYgKGlzQ29tcGxldGVkKSB7XG4gICAgICAgIG15RWxlbWVudFRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tDb21wbGV0ZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBteUVsZW1lbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrQ29tcGxldGVkXCIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlVGFzazogZnVuY3Rpb24gKG9ic29sZXRlVGFzaykge1xuICAgICAgbGV0IGlkVGFzayA9IG9ic29sZXRlVGFza1tcIm5hbWVJZFwiXTtcbiAgICAgIGRlbGV0ZSB0aGlzLnRhc2tMaXN0W2lkVGFza107XG5cbiAgICAgIGNvbnN0IG15VGFza3MgPSBPYmplY3QudmFsdWVzKHRoaXMudGFza0xpc3QpO1xuICAgICAgZG9tU2hvd1Rhc2tzKG15VGFza3MpO1xuICAgIH0sXG4gICAgbW9kaWZ5VGFzazogZnVuY3Rpb24gKG9sZFRhc2ssIG5ld1Rhc2spIHtcbiAgICAgIGxldCBpZFRhc2sgPSBvbGRUYXNrW1wibmFtZUlkXCJdO1xuICAgICAgdGhpcy50YXNrTGlzdFtpZFRhc2tdID0gbmV3VGFzaztcbiAgICAgIHRoaXMudGFza0xpc3RbaWRUYXNrXVtcIm5hbWVJZFwiXSA9IGlkVGFzaztcbiAgICB9LFxuICAgIGFkZFRhc2s6IGZ1bmN0aW9uIChuYW1lLCBkYXRlID0gXCIwMi9tbS95eVwiLCBwcmlvcml0eSA9IFwiTE9XXCIsIG5vdGVzID0gXCJcIikge1xuICAgICAgbGV0IHRhc2tJZCA9IGFzc2lnblRhc2tJZCgpO1xuXG4gICAgICBsZXQgbmFtZUlkVGFzayA9IFwidGFza1wiICsgdGFza0lkO1xuICAgICAgbGV0IGludGVybmFsVGFzayA9IHt9O1xuXG4gICAgICBpbnRlcm5hbFRhc2tbXCJuYW1lSWRcIl0gPSBuYW1lSWRUYXNrO1xuICAgICAgaW50ZXJuYWxUYXNrW1wibmFtZVwiXSA9IG5hbWU7XG4gICAgICBpbnRlcm5hbFRhc2tbXCJkYXRlXCJdID0gZGF0ZTtcbiAgICAgIGludGVybmFsVGFza1tcInByaW9yaXR5XCJdID0gcHJpb3JpdHk7XG4gICAgICBpbnRlcm5hbFRhc2tbXCJub3Rlc1wiXSA9IG5vdGVzO1xuICAgICAgaW50ZXJuYWxUYXNrW1wiY29tcGxldGVkXCJdID0gZmFsc2U7XG5cbiAgICAgIC8vIEV2ZXJ5IHRhc2sgaXMgYSB2YWx1ZSB3aG9zZSBrZXkgaXMgbmFtZUlkVGFza1xuICAgICAgdGhpcy50YXNrTGlzdFtuYW1lSWRUYXNrXSA9IGludGVybmFsVGFzaztcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBzaG93VGFza3MocHJvamVjdEwpIHtcbiAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0TCk7XG5cbiAgbGV0IG15UHJvdG9UYXNrcyA9IG51bGw7XG4gIG15UHJvdG9UYXNrcyA9IHByb2plY3RMLmdldFRhc2tMaXN0KCk7XG5cbiAgY29uc3QgbXlUYXNrcyA9IE9iamVjdC52YWx1ZXMobXlQcm90b1Rhc2tzKTtcblxuICBkb21TaG93VGFza3MobXlUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQWRkUHJvamVjdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdERpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdEZvcm1cIik7XG5cbiAgY29uc3QgbmV3VGl0bGUgPSBteUZvcm1bXCJuYW1lXCJdLnZhbHVlO1xuICBpZiAobmV3VGl0bGUgIT09IFwiXCIpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0RW1wdHkgPSBjcmVhdGVQcm9qZWN0KG5ld1RpdGxlKTtcblxuICAgIGxldCBuZXdQcm9qZWN0ID0gbXlQcm9qZWN0TWV0aG9kcyhuZXdQcm9qZWN0RW1wdHkpO1xuXG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgIGxldCBwcm9qZWN0SWQgPSBuZXdQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdElkLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0RW1wdHkpKTtcbiAgICAgIGxldCBhbGxTdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICAgIGxldCBwYXJzZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UoYWxsU3RvcmVkUHJvamVjdHMpO1xuICAgICAgcGFyc2VkUHJvamVjdHMuYWxsUHJvamVjdHMucHVzaChwcm9qZWN0SWQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFByb2plY3RzKSk7XG4gICAgfVxuXG4gICAgYXBwZW5kUHJvamVjdChuZXdUaXRsZSwgbmV3UHJvamVjdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGFkZEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRFbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkUHJvamVjdERpdlwiKTtcblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFByb2plY3RGb3JtXCIpO1xuICBhZGRFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuICBjb25zdCBsYWJlbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJvamVjdC50ZXh0Q29udGVudCA9IFwiUGxlYXNlLCBhZGQgcHJvamVjdCdzIG5hbWU6XCI7XG4gIGxhYmVsUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxhYmVsUHJvamVjdFwiKTtcblxuICBjb25zdCBuYW1lUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZVByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbnB1dFByb2plY3RcIik7XG4gIG5hbWVQcm9qZWN0LnR5cGUgPSBcInRleHRcIjtcbiAgbmFtZVByb2plY3QubmFtZSA9IFwibmFtZVwiO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChsYWJlbFByb2plY3QpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lUHJvamVjdCk7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uUHJvamVjdEZvcm1cIik7XG4gIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT0tcIjtcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0FkZFByb2plY3QsIGZhbHNlKTtcblxuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICByZXR1cm4gYWRkRWxlbWVudENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdEZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3REaXZcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFByb2plY3RcIikucGxhY2Vob2xkZXIgPVxuICAgIFwiTm8gcHJvamVjdCB3aXRob3V0IGEgbmFtZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0UHJvamVjdFwiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmNvbnN0IGNyZWF0ZU5ld0lkID0gKCkgPT4ge1xuICBsZXQgaWRQcm9qZWN0ID0gMDtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsZXQgbG9jYWxJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdElkXCIpO1xuXG4gICAgaWYgKGxvY2FsSWQgIT09IG51bGwpIHtcbiAgICAgIGlkUHJvamVjdCA9IGxvY2FsSWQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZFByb2plY3QrKztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhc3RJZFwiLCBpZFByb2plY3QpO1xuICAgIHJldHVybiBpZFByb2plY3Q7XG4gIH07XG59O1xuXG5jb25zdCBhc3NpZ25Qcm9qZWN0SWQgPSBjcmVhdGVOZXdJZCgpO1xuY29uc3QgYXNzaWduVGFza0lkID0gY3JlYXRlTmV3SWQoKTtcblxuZnVuY3Rpb24gYXBwZW5kUHJvamVjdChuZXdQcm9qZWN0VGl0bGUsIGtleVByb2plY3QpIHtcbiAgY29uc3QgbGlzdFByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0UHJvamVjdHNcIik7XG4gIGNvbnN0IHRpdGxlUHJvamVjdCA9IGVsZW1lbnRQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSwga2V5UHJvamVjdCk7XG5cbiAgc2hvd1Rhc2tzKGtleVByb2plY3QpO1xuICBsaXN0UHJvamVjdHMuYXBwZW5kQ2hpbGQodGl0bGVQcm9qZWN0KTtcbiAgc2V0QWN0aXZlUHJvamVjdChrZXlQcm9qZWN0KTtcbn1cblxuZXhwb3J0IHtcbiAgYWRkUHJvamVjdEZ1bmN0aW9uLFxuICBhZGRQcm9qZWN0Rm9ybSxcbiAgc2hvd1Rhc2tzLFxuICBjcmVhdGVQcm9qZWN0LFxuICBteVByb2plY3RNZXRob2RzLFxuICBteVByb2plY3RzLFxuICBhY3RpdmVQcm9qZWN0LFxuICBzZXRDaG9zZW5UYXNrLFxuICBzZXRBY3RpdmVQcm9qZWN0LFxuICBjcmVhdGVOZXdJZCxcbiAgY2hvc2VuVGFzayxcbn07XG4iLCJpbXBvcnQge1xuICBhZGRQcm9qZWN0RnVuY3Rpb24sXG4gIGFkZFByb2plY3RGb3JtLFxuICBzaG93VGFza3MsXG4gIGFjdGl2ZVByb2plY3QsXG4gIGNob3NlblRhc2ssXG4gIHNldENob3NlblRhc2ssXG59IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBjbGlja0VkaXRUYXNrIH0gZnJvbSBcIi4vdGFza0NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGxvY2FsUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsUHJvamVjdHNcIik7XG4gICAgbGV0IHBhcnNlZExvY2FsVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsUHJvamVjdHMpO1xuICAgIGxldCBwcm9qZWN0SWQgPSBwcm9qZWN0LmZpcnN0Q2hpbGQuaWQ7XG4gICAgbGV0IHByb2plY3RzQXJyYXkgPSBwYXJzZWRMb2NhbFRhc2tzLmFsbFByb2plY3RzO1xuXG4gICAgY29uc3QgYXJyYXlXaXRob3V0UmVtb3ZlZFByb2plY3QgPSBwcm9qZWN0c0FycmF5LmZpbHRlcihmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgcmV0dXJuIHByb2plY3QgIT09IHByb2plY3RJZDtcbiAgICB9KTtcbiAgICBsZXQgYWxsTG9jYWxQcm9qZWN0cyA9IHsgYWxsUHJvamVjdHM6IGFycmF5V2l0aG91dFJlbW92ZWRQcm9qZWN0IH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsTG9jYWxQcm9qZWN0cykpO1xuXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIik7XG4gICAgaWYgKGFjdGl2ZVByb2plY3QgPT0gcHJvamVjdElkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIiwgXCJqdXN0RGVsZXRlZFwiKTtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0SWQpO1xuICB9XG5cbiAgcHJvamVjdC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tSZW1vdmVUYXNrKGV2ZW50KSB7XG4gIHNldENob3NlblRhc2soZXZlbnQpO1xuICBhY3RpdmVQcm9qZWN0LmRlbGV0ZVRhc2soY2hvc2VuVGFzayk7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbGV0IGlkUHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0UHJvamVjdElkKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeShhY3RpdmVQcm9qZWN0KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q29tcGxldGVkKGV2ZW50LCBidXR0b25Db21wbGV0aW9uKSB7XG4gIHNldENob3NlblRhc2soZXZlbnQpO1xuXG4gIGxldCB7IGNvbXBsZXRlZCB9ID0gZXZlbnQ7XG4gIGNvbXBsZXRlZCA9ICFjb21wbGV0ZWQ7XG4gIGlmIChjb21wbGV0ZWQgPT0gZmFsc2UpIHtcbiAgICBidXR0b25Db21wbGV0aW9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuICB9IGVsc2Uge1xuICAgIGJ1dHRvbkNvbXBsZXRpb24udGV4dENvbnRlbnQgPSBcIk9wZW5cIjtcbiAgfVxuXG4gIGFjdGl2ZVByb2plY3QuZW5kVGFzayhjaG9zZW5UYXNrLCBjb21wbGV0ZWQpO1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGxldCBpZFByb2plY3QgPSBhY3RpdmVQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkUHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoYWN0aXZlUHJvamVjdCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRQcm9qZWN0KG5hbWVQcm9qZWN0RG9tLCBrZXlQcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1VuaXRcIik7XG5cbiAgLy8gVGhlIHByb2plY3RcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcImJ1dHRvblByb2plY3RzXCIpO1xuICBsZXQgcHJvamVjdElkID0ga2V5UHJvamVjdC5nZXRQcm9qZWN0SWQoKTtcbiAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0SWQpO1xuXG4gIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBuYW1lUHJvamVjdERvbTtcblxuICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2hvd1Rhc2tzKGtleVByb2plY3QpO1xuICB9KTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICAvLyBUaGUgb3B0aW9uIHRvIHJlbW92ZSBpdFxuICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGJ1dHRvblJlbW92ZURpc3BsYXkgPSBwcm9qZWN0SWQgKyBcIkJ1dHRvblwiO1xuXG4gIHJlbW92ZVByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9uUmVtb3ZlRGlzcGxheSk7XG4gIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZVByb2plY3RzXCIsIFwiaGlkZVJlbW92ZUJ1dHRvblwiKTtcbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICByZW1vdmVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0RGl2KTtcbiAgfSk7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ1dHRvbik7XG5cbiAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwibW91c2VvdmVyXCIsXG4gICAgKCkgPT4ge1xuICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVJlbW92ZUJ1dHRvblwiKTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG5cbiAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwibW91c2VvdXRcIixcbiAgICAoKSA9PiB7XG4gICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRlUmVtb3ZlQnV0dG9uXCIpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcblxuICByZXR1cm4gcHJvamVjdERpdjtcbn1cblxuZnVuY3Rpb24gZG9tU2hvd1Rhc2tzKG15VGFza3MpIHtcbiAgY29uc3QgbXlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tDb250YWluZXJJZFwiKTtcbiAgaWYgKG15Q29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgbXlDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGVhY2hUYXNrIG9mIG15VGFza3MpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc1VuaXRcIik7XG4gICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlYWNoVGFza1tcIm5hbWVJZFwiXSk7XG4gICAgbXlDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG5cbiAgICAvLyBOZXcgdGl0bGVcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gZWFjaFRhc2submFtZTtcbiAgICBuZXdUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVUYXNrXCIpO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuXG4gICAgLy8gTmV3IGV4dHJhcyAoZGF0ZSwgcHJpb3JpdHkpXG4gICAgY29uc3QgbmV3RXh0cmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdFeHRyYXMuY2xhc3NMaXN0LmFkZChcInRhc2tEYXRlUHJpb3JpdHlcIik7XG4gICAgLy8gTmV3IGRhdGVcbiAgICBpZiAoZWFjaFRhc2suZGF0ZSAhPT0gXCJcIikge1xuICAgICAgY29uc3QgbmV3RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgbmV3RHVlRGF0ZS50ZXh0Q29udGVudCA9IGVhY2hUYXNrLmRhdGU7XG4gICAgICBuZXdEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGF0ZVwiKTtcbiAgICAgIG5ld0V4dHJhcy5hcHBlbmRDaGlsZChuZXdEdWVEYXRlKTtcbiAgICB9XG5cbiAgICAvLyBOZXcgcHJpb3JpdHlcbiAgICBjb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG5ld1ByaW9yaXR5LnRleHRDb250ZW50ID0gYHByaW9yaXR5OiAke2VhY2hUYXNrLnByaW9yaXR5fWA7XG4gICAgbmV3UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2tQcmlvcml0eVwiKTtcbiAgICBuZXdFeHRyYXMuYXBwZW5kQ2hpbGQobmV3UHJpb3JpdHkpO1xuXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdFeHRyYXMpO1xuXG4gICAgaWYgKGVhY2hUYXNrLnByaW9yaXR5ID09IFwiSElHSFwiKSB7XG4gICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVW5pdFVyZ2VudFwiKTtcbiAgICB9XG4gICAgaWYgKGVhY2hUYXNrLnByaW9yaXR5ID09IFwiTUVESVVNXCIpIHtcbiAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tVbml0SW1wb3J0YW50XCIpO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIG5vdGVzXG4gICAgaWYgKGVhY2hUYXNrLm5vdGVzICE9PSBcIlwiKSB7XG4gICAgICBjb25zdCBzZXROb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzZXROb3Rlcy50ZXh0Q29udGVudCA9IGVhY2hUYXNrLm5vdGVzO1xuICAgICAgc2V0Tm90ZXMuY2xhc3NMaXN0LmFkZChcIm15Tm90ZXNcIik7XG4gICAgICBjb25zdCBpZE5vdGUgPSBcIlwiO1xuICAgICAgc2V0Tm90ZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWROb3RlKTtcbiAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoc2V0Tm90ZXMpO1xuICAgIH1cblxuICAgIC8vIE5ldyB0YXNrIHNldHRpbmdcbiAgICBjb25zdCBuZXdTZXR0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdTZXR0aW5nLmNsYXNzTGlzdC5hZGQoXCJ0YXNrU2V0dGluZ3NcIik7XG5cbiAgICAvLyBDb21wbGV0ZWRcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlZC50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcbiAgICBjb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgc2V0Q29tcGxldGVkKGVhY2hUYXNrLCBjb21wbGV0ZWQpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBpZiAoZWFjaFRhc2tbXCJjb21wbGV0ZWRcIl0pIHtcbiAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tDb21wbGV0ZWRcIik7XG4gICAgICBjb21wbGV0ZWQudGV4dENvbnRlbnQgPSBcIk9wZW5cIjtcbiAgICB9XG5cbiAgICBuZXdTZXR0aW5nLmFwcGVuZENoaWxkKGNvbXBsZXRlZCk7XG5cbiAgICAvLyBOZXcgZWRpdFxuICAgIGNvbnN0IG5ld0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5ld0VkaXQuY2xhc3NMaXN0LmFkZChcImJ1dHRvbkVkaXRUYXNrXCIpO1xuICAgIG5ld0VkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBuZXdFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNsaWNrRWRpdFRhc2soZWFjaFRhc2spO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIG5ld1NldHRpbmcuYXBwZW5kQ2hpbGQobmV3RWRpdCk7XG5cbiAgICAvLyBSZW1vdmUgdGFza1xuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbW92ZVRhc2suY2xhc3NMaXN0LmFkZChcInJlbW92ZVRhc2tcIik7XG4gICAgcmVtb3ZlVGFzay50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgcmVtb3ZlVGFzay5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjbGlja1JlbW92ZVRhc2soZWFjaFRhc2spO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIG5ld1NldHRpbmcuYXBwZW5kQ2hpbGQocmVtb3ZlVGFzayk7XG5cbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1NldHRpbmcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICBjb25zdCBteVByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbXlQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG5cbiAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSgpKTtcblxuICBjb25zdCBteVByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBteVByb2plY3RzSGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHNIZWFkZXJcIik7XG4gIG15UHJvamVjdHMuYXBwZW5kQ2hpbGQobXlQcm9qZWN0c0hlYWRlcik7XG5cbiAgY29uc3QgbXlQcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG15UHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcblxuICBteVByb2plY3RzVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0c1RpdGxlXCIpO1xuXG4gIG15UHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQobXlQcm9qZWN0c1RpdGxlKTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0YXJ0UHJvamVjdEJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdC5pbm5lclRleHQgPSBcIitcIjtcbiAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdEZ1bmN0aW9uKTtcbiAgbXlQcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcblxuICBjb25zdCBsaXN0UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaXN0UHJvamVjdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0UHJvamVjdHNcIik7XG5cbiAgbXlQcm9qZWN0cy5hcHBlbmRDaGlsZChsaXN0UHJvamVjdHMpO1xuXG4gIHJldHVybiBteVByb2plY3RzO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0cywgZWxlbWVudFByb2plY3QsIGRvbVNob3dUYXNrcyB9O1xuIiwiZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfTtcbiIsImltcG9ydCB7IGFjdGl2ZVByb2plY3QsIHNldENob3NlblRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgZWRpdFRhc2tGb3JtIH0gZnJvbSBcIi4vZm9ybXMuanNcIjtcbmltcG9ydCB7IGRvbVNob3dUYXNrcyB9IGZyb20gXCIuL3Byb2plY3RzRG9tLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5mdW5jdGlvbiBjbGlja0VkaXRUYXNrKGV2ZW50KSB7XG4gIC8vIGl0IGRpc3BsYXlzIHRoZSBmb3JtIGZvciBlZGl0aW5nXG5cbiAgc2V0Q2hvc2VuVGFzayhldmVudCk7XG5cbiAgY29uc3QgZWRpdFRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRUYXNrRGl2XCIpO1xuICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tGb3JtXCIpO1xuXG4gIGNvbnN0IHsgbmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzIH0gPSBldmVudDtcblxuICAvLyBDaGFuZ2UgdGhlIGxhYmVsc1xuXG4gIGxldCBvbGRUYXNrID0gZWRpdEZvcm0uZWxlbWVudHNbXCJlZGl0VGFza1wiXTtcbiAgbGV0IG9sZERhdGUgPSBlZGl0Rm9ybS5lbGVtZW50c1tcImR1ZURhdGVFZGl0XCJdO1xuXG4gIG9sZFRhc2sudmFsdWUgPSBuYW1lO1xuICBvbGREYXRlLnZhbHVlID0gZGF0ZTtcblxuICBsZXQgb2xkTm90ZXMgPSBlZGl0Rm9ybS5lbGVtZW50c1tcInRleHRBcmVhVGFza0VkaXRcIl07XG4gIG9sZE5vdGVzLnZhbHVlID0gbm90ZXM7XG5cbiAgbGV0IG9sZFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9XCIgKyBcInByaW9yaXR5XCIgKyBcIl1cIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkUHJpb3JpdHkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob2xkUHJpb3JpdHlbaV0udmFsdWUgPT09IHByaW9yaXR5KSB7XG4gICAgICBvbGRQcmlvcml0eVtpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBlZGl0VGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBjbGlja0FkZFRhc2soKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0RpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tcIikucGxhY2Vob2xkZXIgPSBcIk5vIHRhc2sgd2l0aG91dCBhIG5hbWVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrXCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZm9ybUFkZFRhc2tNZXRob2QoKSB7XG4gIC8vIEFkZHMgdGhlIHRhc2sgdG8gdGhlIHByb2plY3RcbiAgY29uc3QgbXlGb3JtVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIik7XG4gIGNvbnN0IHRhc2tEYXRhID0gZ2V0Rm9ybURhdGFUYXNrKG15Rm9ybVRhc2spO1xuXG4gIGNvbnN0IFt7IG5hbWUsIGRhdGUsIHByaW9yaXR5LCBub3RlcyB9XSA9IHRhc2tEYXRhO1xuXG4gIC8vIFdlIGRvbid0IHdhbnQgdGFza3Mgd2l0aG91dCBhICduYW1lJyAoZGVzY3JpcHRpb24pXG4gIGlmIChuYW1lID09IFwiXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBhY3RpdmVQcm9qZWN0LmFkZFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcblxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGxldCBpZFByb2plY3QgPSBhY3RpdmVQcm9qZWN0LmdldFByb2plY3RJZCgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkUHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoYWN0aXZlUHJvamVjdCkpO1xuICB9XG5cbiAgbGV0IG15UHJvdG9UYXNrcyA9IG51bGw7XG4gIG15UHJvdG9UYXNrcyA9IGFjdGl2ZVByb2plY3QuZ2V0VGFza0xpc3QoKTtcbiAgY29uc3QgbXlUYXNrcyA9IE9iamVjdC52YWx1ZXMobXlQcm90b1Rhc2tzKTtcbiAgZG9tU2hvd1Rhc2tzKG15VGFza3MpO1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtRGF0YVRhc2sod2hpY2hGb3JtKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0RpdlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IG15Rm9ybVRhc2sgPSB3aGljaEZvcm07XG4gIGNvbnN0IG5ld1Rhc2sgPSBteUZvcm1UYXNrW1wibmFtZVwiXS52YWx1ZTtcbiAgY29uc3QgbmV3RGF0ZSA9IG15Rm9ybVRhc2tbXCJkYXRlXCJdLnZhbHVlO1xuICBsZXQgbmV3SW1wb3J0YW5jZSA9IG15Rm9ybVRhc2tbXCJwcmlvcml0eVwiXS52YWx1ZTtcbiAgY29uc3QgbmV3Tm90ZXMgPSBteUZvcm1UYXNrW1widGV4dEFyZWFUYXNrXCJdLnZhbHVlO1xuXG4gIGNvbnN0IHRhc2tTZXQgPSBbXG4gICAgeyBuYW1lOiBuZXdUYXNrLCBkYXRlOiBuZXdEYXRlLCBwcmlvcml0eTogbmV3SW1wb3J0YW5jZSwgbm90ZXM6IG5ld05vdGVzIH0sXG4gIF07XG5cbiAgcmV0dXJuIHRhc2tTZXQ7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tGb3JtKCkge1xuICBjb25zdCBhZGRFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkRWxlbWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRhc2tEaXZcIik7XG5cbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRUYXNrRm9ybVwiKTtcblxuICAvLyBOYW1lIHRoZSBUYXNrXG4gIGNvbnN0IGVsZW1lbnROYW1lVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxhYmVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxUYXNrLnRleHRDb250ZW50ID0gXCJQbGVhc2UsIGFkZCBhIG5ldyB0YXNrOlwiO1xuICBsYWJlbFRhc2suc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3VGFza1wiKTtcblxuICBjb25zdCBuYW1lVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZVRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdUYXNrXCIpO1xuICAvLyBuYW1lVGFzay52YWx1ZSA9IFwiTmFtZSB0aGUgdGFza1wiO1xuICBuYW1lVGFzay50eXBlID0gXCJ0ZXh0XCI7XG4gIG5hbWVUYXNrLm5hbWUgPSBcIm5hbWVcIjtcblxuICBlbGVtZW50TmFtZVRhc2suYXBwZW5kQ2hpbGQobGFiZWxUYXNrKTtcbiAgZWxlbWVudE5hbWVUYXNrLmFwcGVuZENoaWxkKG5hbWVUYXNrKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWVUYXNrKTtcblxuICAvLyBEdWUgRGF0ZVxuICBjb25zdCBlbGVtZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnREYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZURpdlwiKTtcblxuICBjb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsRGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZTogXCI7XG4gIGxhYmVsRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVEYXRlXCIpO1xuXG4gIGNvbnN0IGlucHV0RGF0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0RGF0ZVRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpO1xuICBpbnB1dERhdGVUYXNrLnR5cGUgPSBcImRhdGVcIjtcbiAgaW5wdXREYXRlVGFzay5uYW1lID0gXCJkYXRlXCI7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGlucHV0RGF0ZVRhc2spO1xuXG4gIGVsZW1lbnREYXRlLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gIGVsZW1lbnREYXRlLmFwcGVuZENoaWxkKGlucHV0RGF0ZVRhc2spO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlbGVtZW50RGF0ZSk7XG5cbiAgLy8gUHJpb3JpdHlcblxuICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eURpdlwiKTtcblxuICBjb25zdCBwcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gIHByaW9yaXR5VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcblxuICAvLyBISUdIXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlcIik7XG4gIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlnaFByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhJR0hcIik7XG5cbiAgaW5wdXRQcmlvcml0eUhpZ2gudHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eUhpZ2gubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBsYWJlbFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eUhpZ2gudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcbiAgbGFiZWxQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5XCIpO1xuICBsYWJlbFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoUHJpb3JpdHlcIik7XG5cbiAgLy8gTUVESVVNXG4gIGNvbnN0IGlucHV0UHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVkaXVtUHJpb3JpdHlcIik7XG4gIGlucHV0UHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNRURJVU1cIik7XG5cbiAgaW5wdXRQcmlvcml0eU1lZGl1bS50eXBlID0gXCJyYWRpb1wiO1xuICBpbnB1dFByaW9yaXR5TWVkaXVtLm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgY29uc3QgbGFiZWxQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcmlvcml0eU1lZGl1bS50ZXh0Q29udGVudCA9IFwiTUVESVVNXCI7XG4gIGxhYmVsUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYWJlbFByaW9yaXR5XCIpO1xuICBsYWJlbFByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lZGl1bVByaW9yaXR5XCIpO1xuXG4gIC8vIExPV1xuICBjb25zdCBpbnB1dFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eVwiKTtcbiAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvd1ByaW9yaXR5XCIpO1xuICBpbnB1dFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTE9XXCIpO1xuICBpbnB1dFByaW9yaXR5TG93LmNoZWNrZWQgPSB0cnVlO1xuXG4gIGlucHV0UHJpb3JpdHlMb3cudHlwZSA9IFwicmFkaW9cIjtcbiAgaW5wdXRQcmlvcml0eUxvdy5uYW1lID0gXCJwcmlvcml0eVwiO1xuXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxPV1wiO1xuICBsYWJlbFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFiZWxQcmlvcml0eVwiKTtcbiAgbGFiZWxQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsb3dQcmlvcml0eVwiKTtcblxuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZSk7XG5cbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlIaWdoKTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHlNZWRpdW0pO1xuICBwcmlvcml0eUVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eU1lZGl1bSk7XG4gIHByaW9yaXR5RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5TG93KTtcbiAgcHJpb3JpdHlFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHlMb3cpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUVsZW1lbnQpO1xuXG4gIC8vIE5vdGVzXG5cbiAgY29uc3Qgbm90ZXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90ZXNFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNEaXZcIik7XG5cbiAgY29uc3Qgbm90ZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbm90ZXNUaXRsZS50ZXh0Q29udGVudCA9IFwiTm90ZXNcIjtcbiAgbm90ZXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0ZXh0QXJlYVRhc2tcIik7XG4gIGNvbnN0IHRhc2tUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGFza1RleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGV4dEFyZWFUYXNrXCIpO1xuICB0YXNrVGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIik7XG4gIHRhc2tUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiNTBcIik7XG4gIHRhc2tUZXh0QXJlYS5uYW1lID0gXCJ0ZXh0QXJlYVRhc2tcIjtcblxuICBub3Rlc0VsZW1lbnQuYXBwZW5kQ2hpbGQobm90ZXNUaXRsZSk7XG4gIG5vdGVzRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrVGV4dEFyZWEpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChub3Rlc0VsZW1lbnQpO1xuXG4gIGFkZEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvblRhc2tGb3JtXCIpO1xuICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERFwiO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZvcm1BZGRUYXNrTWV0aG9kLCBmYWxzZSk7XG5cbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICByZXR1cm4gYWRkRWxlbWVudENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHtcbiAgY2xpY2tBZGRUYXNrLFxuICBhZGRUYXNrRm9ybSxcbiAgZWRpdFRhc2tGb3JtLFxuICBnZXRGb3JtRGF0YVRhc2ssXG4gIGNsaWNrRWRpdFRhc2ssXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCBlbGVtZW50UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzRG9tLmpzXCI7XG5pbXBvcnQge1xuICBzaG93VGFza3MsXG4gIGNyZWF0ZVByb2plY3QsXG4gIHNldEFjdGl2ZVByb2plY3QsXG4gIGFjdGl2ZVByb2plY3QsXG4gIG15UHJvamVjdE1ldGhvZHMsXG59IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBjbGlja0FkZFRhc2ssIGFkZFRhc2tGb3JtIH0gZnJvbSBcIi4vdGFza0NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgZWRpdFRhc2tGb3JtIH0gZnJvbSBcIi4vZm9ybXMuanNcIjtcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmxldCBzdGF0ZVVzZXI7XG5cbi8vIENyZWF0ZSB0aGUgc2FtcGxlIHByb2plY3RzIHRoYXQgd2lsbCBhZGQgYXQgdGhlIGVuZFxuXG5sZXQgc2FtcGxlUHJvamVjdDtcblxubGV0IHNhbXBsZVByb2plY3RPbmU7XG5sZXQgc2FtcGxlUHJvamVjdFR3bztcbmxldCBuYW1lUHJvamVjdFNhbXBsZU9uZTtcbmxldCBuYW1lUHJvamVjdFNhbXBsZVR3bztcbmxldCBjcmVhdGVFbGVtZW50U2FtcGxlT25lO1xubGV0IGNyZWF0ZUVsZW1lbnRTYW1wbGVUd287XG5cbi8vIFByb2plY3Qgb25lIChpbml0aWFsIHByb2plY3QpXG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIHN0YXRlVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RhdGVBcHBsaWNhdGlvblwiKTtcblxuICBpZiAoc3RhdGVVc2VyID09IG51bGwpIHtcbiAgICBzYW1wbGVQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcInByb2plY3QxXCIpO1xuICAgIGxldCBhbGxMb2NhbFByb2plY3RzID0geyBhbGxQcm9qZWN0czogW10gfTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsTG9jYWxQcm9qZWN0cykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdDFcIiwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlUHJvamVjdCkpO1xuICAgIGxldCBsb2NhbFByb2plY3QxID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0MVwiKTtcbiAgICBzYW1wbGVQcm9qZWN0T25lID0gbXlQcm9qZWN0TWV0aG9kcyhKU09OLnBhcnNlKGxvY2FsUHJvamVjdDEpKTtcblxuICAgIC8vIFB1c2ggdGhlIHByb2plY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBsZXQgYWxsU3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsUHJvamVjdHNcIik7XG4gICAgbGV0IHBhcnNlZFByb2plY3RzID0gSlNPTi5wYXJzZShhbGxTdG9yZWRQcm9qZWN0cyk7XG4gICAgbGV0IGZpcnN0UHJvamVjdElkID0gc2FtcGxlUHJvamVjdE9uZS5nZXRQcm9qZWN0SWQoKTtcbiAgICBwYXJzZWRQcm9qZWN0cy5hbGxQcm9qZWN0cy5wdXNoKGZpcnN0UHJvamVjdElkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocGFyc2VkUHJvamVjdHMpKTtcbiAgfVxufVxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIHNhbXBsZVByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwicHJvamVjdDFcIik7XG4gIHNhbXBsZVByb2plY3RPbmUgPSBteVByb2plY3RNZXRob2RzKHNhbXBsZVByb2plY3QpO1xufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgfCAoc3RhdGVVc2VyID09IG51bGwpKSB7XG4gIHNhbXBsZVByb2plY3RPbmUuYWRkVGFzayhcIlJlYWQgYSA5MCBib29rXCIsIFwiMy8zLzIwMjRcIiwgXCJMT1dcIiwgXCJzc1wiKTtcbiAgc2FtcGxlUHJvamVjdE9uZS5hZGRUYXNrKFwiUmVhZCBBbiBFbXB0eSAwIEhvdXNlXCIpO1xufVxuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSAmJiBzdGF0ZVVzZXIgPT0gbnVsbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3QxXCIsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3RPbmUpKTtcbn1cblxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpIHwgKHN0YXRlVXNlciA9PSBudWxsKSkge1xuICBzZXRBY3RpdmVQcm9qZWN0KHNhbXBsZVByb2plY3RPbmUpO1xufVxuXG4vLyBQcm9qZWN0IHR3b1xubGV0IHNhbXBsZVByb2plY3ROZXh0O1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBpZiAoc3RhdGVVc2VyID09IG51bGwpIHtcbiAgICBzYW1wbGVQcm9qZWN0TmV4dCA9IGNyZWF0ZVByb2plY3QoXCJwcm9qZWN0MlwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3QyXCIsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3ROZXh0KSk7XG4gICAgbGV0IGxvY2FsUHJvamVjdDIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3QyXCIpO1xuICAgIHNhbXBsZVByb2plY3RUd28gPSBteVByb2plY3RNZXRob2RzKEpTT04ucGFyc2UobG9jYWxQcm9qZWN0MikpO1xuXG4gICAgLy8gUHVzaCB0aGUgcHJvamVjdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIGxldCBhbGxTdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKTtcbiAgICBsZXQgc2Vjb25kUHJvamVjdElkID0gc2FtcGxlUHJvamVjdFR3by5nZXRQcm9qZWN0SWQoKTtcbiAgICBsZXQgcGFyc2VkUHJvamVjdHMgPSBKU09OLnBhcnNlKGFsbFN0b3JlZFByb2plY3RzKTtcbiAgICBwYXJzZWRQcm9qZWN0cy5hbGxQcm9qZWN0cy5wdXNoKHNlY29uZFByb2plY3RJZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFByb2plY3RzKSk7XG4gIH1cbn1cblxuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gIHNhbXBsZVByb2plY3ROZXh0ID0gY3JlYXRlUHJvamVjdChcInByb2plY3QyXCIpO1xuICBzYW1wbGVQcm9qZWN0VHdvID0gbXlQcm9qZWN0TWV0aG9kcyhzYW1wbGVQcm9qZWN0TmV4dCk7XG4gIG5hbWVQcm9qZWN0U2FtcGxlVHdvID0gc2FtcGxlUHJvamVjdFR3by5nZXRQcm9qZWN0TmFtZSgpO1xufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgfCAoc3RhdGVVc2VyID09IG51bGwpKSB7XG4gIHNhbXBsZVByb2plY3RUd28uYWRkVGFzayhcIlJlYWQgYSBncmVhdCBib29rXCIsIFwiM2QzXCIsIFwiSElHSFwiLCBcInNhc1wiKTtcbn1cblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikgJiYgc3RhdGVVc2VyID09IG51bGwpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0MlwiLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0VHdvKSk7XG59XG5cbmlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSB8IChzdGF0ZVVzZXIgPT0gbnVsbCkpIHtcbiAgbmFtZVByb2plY3RTYW1wbGVPbmUgPSBzYW1wbGVQcm9qZWN0T25lLmdldFByb2plY3ROYW1lKCk7XG4gIG5hbWVQcm9qZWN0U2FtcGxlVHdvID0gc2FtcGxlUHJvamVjdFR3by5nZXRQcm9qZWN0TmFtZSgpO1xuXG4gIGNyZWF0ZUVsZW1lbnRTYW1wbGVPbmUgPSBlbGVtZW50UHJvamVjdChcbiAgICBuYW1lUHJvamVjdFNhbXBsZU9uZSxcbiAgICBzYW1wbGVQcm9qZWN0T25lXG4gICk7XG5cbiAgY3JlYXRlRWxlbWVudFNhbXBsZVR3byA9IGVsZW1lbnRQcm9qZWN0KFxuICAgIG5hbWVQcm9qZWN0U2FtcGxlVHdvLFxuICAgIHNhbXBsZVByb2plY3RUd29cbiAgKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vXG4vLy9cbi8vXG5cbi8vIENyZWF0ZSBhbmQgYWRkIGRvbSBlbGVtZW50c1xuXG5mdW5jdGlvbiBteUhlYWRlcigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyUGFnZVwiKTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiVE8gRE8gTElTVFwiO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG15SGVhZGVyKCkpO1xuXG5jb25zdCBjb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW4uY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuLy8gTGVmdCBTaWRlXG5cbmNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoXCJsZWZ0U2VjdGlvblwiKTtcbmxlZnRTaWRlLmFwcGVuZENoaWxkKHJlbmRlclByb2plY3RzKCkpO1xuXG5jb250YWluLmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcblxuLy8gUmlnaHQgc2lkZVxuXG5jb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJyaWdodFNlY3Rpb25cIik7XG5cbi8vIFBhcmVudCB0YXNrIGVsZW1lbnRcbmNvbnN0IG15VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubXlUYXNrcy5jbGFzc0xpc3QuYWRkKFwidGFza3NcIik7XG5teVRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlUYXNrc0lEXCIpO1xuXG5jb25zdCBteVRhc2tzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbm15VGFza3NUaXRsZS5pbm5lclRleHQgPSBcIlRBU0tTXCI7XG5teVRhc2tzVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrc1RpdGxlXCIpO1xuXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmFkZFRhc2suY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIik7XG5hZGRUYXNrLmlubmVyVGV4dCA9IFwiK1wiO1xuXG5hZGRUYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkU3RhcnRUYXNrQnV0dG9uXCIpO1xuYWRkVGFzay5pbm5lclRleHQgPSBcIitcIjtcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xpY2tBZGRUYXNrKCk7XG59KTtcbmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0FkZFRhc2spO1xuXG5yaWdodFNpZGUuYXBwZW5kQ2hpbGQobXlUYXNrcyk7XG5teVRhc2tzLmFwcGVuZENoaWxkKG15VGFza3NUaXRsZSk7XG5teVRhc2tzLmFwcGVuZENoaWxkKGFkZFRhc2spO1xubXlUYXNrcy5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSgpKTtcbm15VGFza3MuYXBwZW5kQ2hpbGQoZWRpdFRhc2tGb3JtKCkpO1xuXG4vLyBDaGlsZCB0YXNrIGVsZW1lbnQgKHRhc2sgY29udGFpbmVyKVxuY29uc3QgaG9tZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaG9tZVRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJGaXJzdFwiKTtcbmhvbWVUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0NvbnRhaW5lcklkXCIpO1xuXG5teVRhc2tzLmFwcGVuZENoaWxkKGhvbWVUYXNrQ29udGFpbmVyKTtcblxuLy8gU3VtIGl0IHVwXG5jb250YWluLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW4pO1xuXG4vL1xuY29uc3QgbGlzdE9mUHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RQcm9qZWN0c1wiKTtcblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgLy8gSXMgaXQgdGhlIGZpcnN0IHRpbWUgd2UgcnVuIHRoZSBhcHBsaWNhdGlvbj9cblxuICBpZiAoc3RhdGVVc2VyICE9PSBudWxsKSB7XG4gICAgLy8gVXBkYXRlIHRoZSB2YWx1ZVxuICAgIGxldCBteUxvY2FsUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsUHJvamVjdHNcIik7XG4gICAgbGV0IG9iamVjdExvY2FsUHJvamVjdHMgPSBKU09OLnBhcnNlKG15TG9jYWxQcm9qZWN0cyk7XG5cbiAgICBsZXQgbnVtYmVyTG9jYWxQcm9qZWN0cyA9IG9iamVjdExvY2FsUHJvamVjdHMuYWxsUHJvamVjdHMubGVuZ3RoO1xuXG4gICAgaWYgKG51bWJlckxvY2FsUHJvamVjdHMgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlckxvY2FsUHJvamVjdHM7IGkrKykge1xuICAgICAgICBsZXQgcHJvamVjdElkID0gb2JqZWN0TG9jYWxQcm9qZWN0cy5hbGxQcm9qZWN0c1tpXTtcbiAgICAgICAgbGV0IG15UHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RJZCk7XG4gICAgICAgIGxldCBteVByb2plY3RQYXJzZWQgPSBKU09OLnBhcnNlKG15UHJvamVjdCk7XG5cbiAgICAgICAgbGV0IHByb2plY3RPYmplY3QgPSBteVByb2plY3RNZXRob2RzKG15UHJvamVjdFBhcnNlZCk7XG4gICAgICAgIGxldCBuYW1lUHJvamVjdCA9IHByb2plY3RPYmplY3QuZ2V0UHJvamVjdE5hbWUoKTtcblxuICAgICAgICBsZXQgY3JlYXRlRWxlbWVudCA9IGVsZW1lbnRQcm9qZWN0KG5hbWVQcm9qZWN0LCBwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRmlyc3QgdGltZSB1c2VyXG4gIGlmIChzdGF0ZVVzZXIgPT0gbnVsbCkge1xuICAgIHN0YXRlVXNlciA9IFwiZGVmYXVsdFwiO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhdGVBcHBsaWNhdGlvblwiLCBzdGF0ZVVzZXIpO1xuICAgIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRTYW1wbGVPbmUpO1xuICAgIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRTYW1wbGVUd28pO1xuICAgIHNob3dUYXNrcyhzYW1wbGVQcm9qZWN0T25lKTtcbiAgfVxufVxuXG5pZiAoIXN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudFNhbXBsZU9uZSk7XG4gIGxpc3RPZlByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRTYW1wbGVUd28pO1xuICBzaG93VGFza3Moc2FtcGxlUHJvamVjdE9uZSk7XG59XG5cbi8vIFdoYXQgaGFwcGVucyB3aGVuIHlvdSByZWZyZXNoIHRoZSBwYWdlXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICBsZXQgYWN0aXZlUHJvamVjdE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFjdGl2ZVByb2plY3RcIik7XG5cbiAgaWYgKGFjdGl2ZVByb2plY3ROYW1lICE9PSBudWxsICYmIGFjdGl2ZVByb2plY3ROYW1lICE9PSBcImp1c3REZWxldGVkXCIpIHtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFjdGl2ZVByb2plY3ROYW1lKTtcblxuICAgIC8vIFRvIHVzZSB0aGUgb2JqZWN0J3MgbWV0aG9kc1xuICAgIGxldCBwYXJzZWRBY3RpdmUgPSBKU09OLnBhcnNlKGFjdGl2ZVByb2plY3QpO1xuICAgIGxldCBhY3RpdmVQcm9qZWN0T2JqZWN0ID0gbXlQcm9qZWN0TWV0aG9kcyhwYXJzZWRBY3RpdmUpO1xuXG4gICAgc2V0QWN0aXZlUHJvamVjdChhY3RpdmVQcm9qZWN0T2JqZWN0KTtcbiAgICBsZXQgYWN0aXZlUHJvamVjdFRhc2tzID0gYWN0aXZlUHJvamVjdE9iamVjdC5nZXRUYXNrTGlzdCgpO1xuXG4gICAgaWYgKFxuICAgICAgYWN0aXZlUHJvamVjdCAhPT0gbnVsbCAmJlxuICAgICAgYWN0aXZlUHJvamVjdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBhY3RpdmVQcm9qZWN0VGFza3MgIT09IHt9ICYmXG4gICAgICBhY3RpdmVQcm9qZWN0TmFtZSAhPT0gXCJqdXN0RGVsZXRlZFwiXG4gICAgKSB7XG4gICAgICBzaG93VGFza3MoYWN0aXZlUHJvamVjdE9iamVjdCk7XG4gICAgfVxuICB9XG59XG5cbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xpY2tBZGRUYXNrKGFjdGl2ZVByb2plY3QpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=