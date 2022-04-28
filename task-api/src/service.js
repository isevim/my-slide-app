let playList = [
  {
    url: "https://file-examples.com/storage/fe69f82402626533c98f608/2017/04/file_example_MP4_640_3MG.mp4",
    type: "video/mp4",
    duration: 5,
  },
  {
    url: "https://picsum.photos/536/354",
    type: "image/jpg",
    duration: 5,
  },
];
exports.add = function (content) {
  playList.push(content);
};
exports.get = function () {
  return playList;
};
