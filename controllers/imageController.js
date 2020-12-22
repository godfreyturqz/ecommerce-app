const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

module.exports.uploadImage = (req, res) => {
    try {
        const image = req.files.image
        cloudinary.uploader.upload(image.tempFilePath, { folder: 'PremiumBikes' }, (error, result) => {
            if (error) throw error
            res.json({secure_url: result.secure_url})
        })

    } catch (error) {
        res.status(500).json(error)
    }
}
