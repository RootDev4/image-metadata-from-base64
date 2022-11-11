# image-metadata-from-base64
A simple Node.js module for reading metadata from a base64-encoded image string.

## Installation
```
npm install image-metadata-from-base64
```

## Usage example
```javascript
const readData = require('image-metadata-from-base64');

(async () => {
    // Then/Catch
    readData('data:image/jpeg;base64,/9j/4QDeRXhpZgAATU0AKgAAAAgACAE...NGdm7n/2Q==')
    .then(res => console.log(res))
    .catch(err => console.log(err))

    // Await
    const data = await readData('data:image/jpeg;base64,/9j/4QDeRXhpZgAATU0AKgAAAAgACAE...NGdm7n/2Q==')
    console.log(data)
})()
```

## JSON output
Note: image size is specified in kilobytes.
```javascript
{ format: 'jpeg', size: 204.3671875, width: 1280, height: 720 }
```

## License
[MIT](../blob/master/LICENSE)