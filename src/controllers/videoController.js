import Video from '../models/Video';

export const home = (req, res) => {
  console.log('Start');
  Video.find({}, (error, videos) => {
    console.log('Finished');
    return res.render('home', { pageTitle: 'Home', videos });
  });
  console.log('I finished first');
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

export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect('/');
};
