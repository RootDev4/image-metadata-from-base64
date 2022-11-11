const { loadImage } = require('canvas')

module.exports = base64Str => {
    return new Promise(async (resolve, reject) => {
        try {
            const str = base64Str.toLowerCase().trim()
            const regex = /data:image\/([a-z]{2,4});base64,([A-Za-z0-9\/+=]{1,})/i

            if (!regex.test(str)) reject('Invalid base64 encoded image string.')

            const info = str.match(regex)
            const size = Buffer.from(info[2], 'base64').length / 1024 // returns kilobytes
            const image = await loadImage(base64Str)

            resolve({ format: info[1], size, width: image.width, height: image.height })
        } catch (error) {
            reject(error)
        }
    })
}