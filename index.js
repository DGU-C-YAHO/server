const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});
const uploader = multer({storage:storage});

//기본 GET 페이지
router.get('/', (req, res, next) => {
  res.render('mainchoice.html')
});

//업로드 페이지
router.post('mainfile.html', uploader.single('videofile'), (req, res, next) =>{
  console.log(req.file);
  console.log('파일 업로드')
  res.redirect('/');
});

module.exports = router;