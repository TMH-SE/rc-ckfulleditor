/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CloudinaryUnsigned } from 'puff-puff/CKEditor'

const CloudinaryUploadImagePlugin = editor => {
  const cloudinaryConfig = editor?.config?.get("cloudinary")
  editor.plugins.get('FileRepository').createUploadAdapter = loader => {
    return new CloudinaryUnsigned(
      loader,
      cloudinaryConfig?.cloudName || '',
      cloudinaryConfig?.uploadPreset || '',
      [160, 500, 1000, 1052]
    )
  }
}

export default CloudinaryUploadImagePlugin
