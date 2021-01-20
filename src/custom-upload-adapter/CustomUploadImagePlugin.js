/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CustomUpload } from 'puff-puff/CKEditor'

const CustomUploadImagePlugin = editor => {
  const customUploadConfig = editor?.config?.get('customUpload')
  editor.plugins.get('FileRepository').createUploadAdapter = loader => {
    return new CustomUpload(customUploadConfig?.url || "", loader)
  }
}

export default CustomUploadImagePlugin
