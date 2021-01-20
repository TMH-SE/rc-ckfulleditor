# CKEditor 5 - Easy to integrate CKEditor 5 for React

## Thanks to [CKEditor Team](https://www.npmjs.com/~ckeditor) and [Opeoluwa Iyi-Kuyoro](https://www.npmjs.com/~iyikuyoro).

[![npm version](https://badge.fury.io/js/rc-ckfulleditor.svg)](https://badge.fury.io/js/rc-ckfulleditor)

The customize CKEditor 5 component to easily integrate for React.

![CKEditor 5 screenshot](https://res.cloudinary.com/hieuhutieu/image/upload/v1611128047/Screenshot_mjmjmn.png)

# Documentation

## Quick start

### First, install the build from npm:

```bash
npm install --save rc-ckfulleditor
```

### And use it in your ReactJS application:

```js
import React from 'react'
import CKFullEditor from 'rc-ckfulleditor'

const index = () => {
  return <CKFullEditor />
}

export default index
```

### Config upload image via Cloudinary (use **CloudinaryUnsigned** of [puff-puff](https://www.npmjs.com/package/puff-puff#cloudinary-uploads))

```js
import React from 'react'
import CKFullEditor from 'rc-ckfulleditor'

const index = () => {
  return (
    <CKFullEditor
      config={{
        // ...Ckeditor config
        cloudinary: {
          cloudName: YOUR_CLOUDINARY_NAME,
          uploadPreset: YOUR_UNSIGNED_UPLOAD_PRESET_NAME
        }
      }}
    />
  )
}

export default index
```

### OR config upload image via your Upload Server  (use **CustomUpload** of [puff-puff](https://www.npmjs.com/package/puff-puff#custom-uploads))

```js
import React from 'react'
import CKFullEditor from 'rc-ckfulleditor'

const index = () => {
  return (
    <CKFullEditor
      config={{
        // ...Ckeditor config
        customUpload: {
          url: YOUR_UPLOAD_URL
        }
      }}
    />
  )
}

export default index
```

See:

- [Installation](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installation.html) for how to install this package and what it contains.
- [Basic API](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html) for how to create an editor and interact with it.
- [Configuration](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html) for how to configure the editor.
- [Creating custom builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html) for how to customize the build (configure and rebuild the editor bundle).
- [Puff-Puff Document](https://www.npmjs.com/package/puff-puff) for how to customize upload image adapter

**Note:** If you are planning to integrate CKEditor 5 deep into your application, it is actually more convenient and recommended to install and import the source modules directly (like it happens in `ckeditor.js`). Read more in the [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html).

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).
