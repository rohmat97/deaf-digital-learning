export const getImageLocal = params => {
  switch (params) {
    case 'hair':
      return require('@assets/img/hair.jpg');
    case 'face':
      return require('@assets/img/face.jpg');
    default:
      break;
  }
};
