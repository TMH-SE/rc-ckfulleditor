/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import Indent from '@ckeditor/ckeditor5-indent/src/indent'
import Link from '@ckeditor/ckeditor5-link/src/link'
import List from '@ckeditor/ckeditor5-list/src/list'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation'

// addition
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard'
import Font from '@ckeditor/ckeditor5-font/src/font'
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight'
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline'
import Mention from '@ckeditor/ckeditor5-mention/src/mention'
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak'
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat'
import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode'
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock'
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters'
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials'
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'
import ImageTextAlternative from '@ckeditor/ckeditor5-image/src/imagetextalternative'
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter'
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties'
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties'
// import RestrictedEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmode'

export default class FullEditor extends ClassicEditorBase {}

// Plugins to include in the build.
FullEditor.builtinPlugins = [
  Essentials,
  UploadAdapter,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  Alignment,
  Autosave,
  Underline,
  Strikethrough,
  Code,
  Subscript,
  Superscript,
  Clipboard,
  Font,
  Highlight,
  HorizontalLine,
  Mention,
  PageBreak,
  RemoveFormat,
  StandardEditingMode,
  CodeBlock,
  SpecialCharacters,
  SpecialCharactersEssentials,
  WordCount,
  ImageResize,
  ImageTextAlternative,
  SimpleUploadAdapter,
  TableProperties,
  TableCellProperties
]

// Editor configuration.
FullEditor.defaultConfig = {
  toolbar: {
    items: [
      'removeFormat',
      '|',
      'heading',
      '|',
      'fontSize',
      'fontFamily',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'code',
      'subscript',
      'superscript',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'alignment',
      'indent',
      'outdent',
      '|',
      'link',
      'insertTable',
      'specialCharacters',
      'imageUpload',
      'mediaEmbed',
      '|',
      'highlight',
      'blockQuote',
      'horizontalLine',
      'pageBreak',
      '|',
      'restrictedEditingException',
      '|',
      'undo',
      'redo'
    ]
  },
  blockToolbar: [
    'heading',
    'fontSize',
    'fontColor',
    'fontBackgroundColor',
    'alignment',
    '|',
    'bulletedList',
    'numberedList',
    '|',
    'blockQuote',
    'imageUpload'
  ],
  fontSize: {
    options: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28]
  },
  image: {
    toolbar: [
      'imageStyle:alignLeft',
      'imageStyle:full',
      'imageStyle:alignRight',
      '|',
      'imageTextAlternative'
    ],
    styles: ['full', 'side', 'alignLeft', 'alignCenter', 'alignRight']
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties'
    ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
}
