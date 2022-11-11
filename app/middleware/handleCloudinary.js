const asyncHandler = require('express-async-handler');
const { cloudinary } = require('../config');

const handleCloudinary = asyncHandler(async (req,res,next) => {

  const { success } = res.val_results;

  if(!success) {
    next();
  }

  const { title, book, photo: fileStr } = req.body

  const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: 'dev_setup',
    eager: [
      {
        width: 300, 
        height: 300, 
        crop: 'fill'
      },
      {
        color: '#ffffff',
        gravity: 'south_east',
        overlay: {
          font_family: 'Roboto',
          font_size: 10,
          text: '%C2%A9%20Brian%20Moneypenny'
        },
        x: 8,
        y: 8
      },
      {
        width: 800
      }     
    ]
  });

  const { 
    width, 
    height,
    secure_url,
    eager
  } = uploadedResponse;

  const thumbnail = eager[0];
  const copyright = eager[1];
  const w800 = eager[2];

  res.results = {
    title,
    book,
    width,
    height,
    url_original: secure_url,
    url_w800: w800.secure_url,
    url_thumbnail: thumbnail.secure_url,
    url_copyright: copyright.secure_url
  }

  next();

});

module.exports = handleCloudinary;