import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import FullEditor from './ckeditor'
import {
  CloudinaryUploadImagePlugin,
  CustomUploadImagePlugin
} from './custom-upload-adapter'

type CKError = {
  phase: 'initialization' | 'runtime'
  willEditorRestart: boolean
}

type CloudinaryConfig = {
  cloudinary?: {
    /**
     * The cloudinary name for uploading image
     */
    cloudName: string
    /**
     * The upload preset name for uploading image
     * \*_*NOTE:*_ Upload preset mode is **unsigned**
     */
    uploadPreset: string
  }
}

type CustomConfig = {
  customUpload?: {
    /**
     * The endpoint of upload server
     */
    url: string
  }
}

type CustomUploadConfig = CloudinaryConfig & CustomConfig

type CKEditorProps = {
  /**
   * The initial data for the created editor.
   * See the {@link https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html#interacting-with-the-editor|Basic API} guide.
   * */
  data?: string
  /**
   * The editor configuration. See the {@link https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html|Configuration} guide.
   * And custom image upload config for a rich text editor (use {@link https://www.npmjs.com/package/puff-puff|puff-puff} package), 2 ways to easily uploading:
   * 1. Via {@link https://cloudinary.com|Cloudinary}
   * config={{ //...ckeditor_config, cloudinary: { cloudName: <YOUR_CLOUDINARY_NAME>, uploadPreset: <YOUR_UNSIGNED_UPLOAD_PRESET_NAME> } }}
   * 2. Via your custom upload server
   * config={{ //...ckeditor_config, customUpload: { url: <UPLOAD_URL> } }}
   * */
  config?: & CustomUploadConfig
  /**
   * The editor ID. When this property changes, the component restarts the editor with new data instead of setting it on an initialized editor.
   */
  id?: string
  /**
   *  A Boolean value. The editor is being switched to read-only mode if the property is set to true.
   */
  disabled?: boolean
  /**
   * A function called when the editor is ready with an editor instance.
   * This callback is also called after the reinitialization of the component if an error occurred.
   */
  onReady?: (editor) => void
  /**
   * A function called when the editor has crashed during the initialization or during the runtime. It receives two arguments: the error instance and the error details.
   * Error details is an object that contains two properties:
   * @param {String} phase: 'initialization'|'runtime' – Informs when the error has occurred (during the editor or context initialization, or after the initialization).
   * @param {Boolean} willEditorRestart – When true, it means that the editor component will restart itself.
   */
  onError?: (instance, errorDetails: CKError) => void
  /**
   * A function called when the editor data has changed.
   * See the {@link https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_document-Document.html#event-change:data|editor.model.document#change:data} event.
   */
  onChange?: (event, editor) => void
  /**
   * A function called when the editor was blurred.
   * See the {@link https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:blur|editor.editing.view.document#blur} event.
   */
  onBlur?: (event, editor) => void
  /**
   * A function called when the editor was focused.
   * See the {@link https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:focus|editor.editing.view.document#focus} event.
   */
  onFocus?: (event, editor) => void
}

const CKFullEditor: React.FC<CKEditorProps> = (props: CKEditorProps) => {
  const { config } = props
  return (
    <CKEditor
      editor={FullEditor}
      {...props}
      config={{
        ...config,
        extraPlugins: [
          config?.cloudinary
            ? CloudinaryUploadImagePlugin
            : config?.customUpload
            ? CustomUploadImagePlugin
            : null
        ].filter(Boolean)
      }}
    />
  )
}

export default CKFullEditor
