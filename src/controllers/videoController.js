import Video from '../models/Video';

/* 
console.log("start")
video.find({}, (error, videos) => {
  return res.render("home", {pageTitle: "Home", videos})
})
console.log("finished")
*/

export const home = async (req, res) => {
  const videos = await video.find({});
  return res.render('home', { pageTitle: 'Home', videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  res.render('watch', { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('edit', { pageTitle: `Editing ` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (res, req) => {
  return res.render('upload', { pageTitle: 'Upload video' });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  await Video.create({
    title: title,
    description: description,
    createdAt: Date.now(),
    hashtags: hashtags.split(',').map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  console.log(video);
  return res.redirect('/');
};
