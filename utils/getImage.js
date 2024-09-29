export const getImageHomeLocal = params => {
  switch (params) {
    case 'head':
      return require('@assets/img/home/head.jpg');
    case 'body':
      return require('@assets/img/home/body.jpg');
    case 'arm':
      return require('@assets/img/home/arm.jpg');
    case 'leg':
      return require('@assets/img/home/leg.jpg');
    default:
      break;
  }
};
const imagePaths = {
  neck: require('@assets/img/category/neck.jpg'),
  ear: require('@assets/img/category/ear.jpg'),
  nose: require('@assets/img/category/nose.jpg'),
  eyes: require('@assets/img/category/eyes.jpg'),
  mouth: require('@assets/img/category/mouth.jpg'),
  cheeks: require('@assets/img/category/cheeks.jpg'),
  hair: require('@assets/img/category/hair.jpg'),
  eyebrow: require('@assets/img/category/eyebrow.jpg'),
  tongue: require('@assets/img/category/tongue.jpg'),
  chin: require('@assets/img/category/chin.jpg'),
  forehead: require('@assets/img/category/forehead.jpg'),
  hip: require('@assets/img/category/hip.jpg'),
  lip: require('@assets/img/category/lip.jpg'),
  shoulders: require('@assets/img/category/shoulders.jpg'),
  chest: require('@assets/img/category/chest.jpg'),
  stomach: require('@assets/img/category/stomach.jpg'),
  back: require('@assets/img/category/back.png'),
  palm: require('@assets/img/category/palm.jpg'),
  finger: require('@assets/img/category/finger.jpg'),
  nails: require('@assets/img/category/nails.jpg'),
  elbow: require('@assets/img/category/elbow.jpg'),
  armpit: require('@assets/img/category/armpit.jpg'),
  wrist: require('@assets/img/category/wrist.jpg'),
  knee: require('@assets/img/category/knee.jpg'),
  ankle: require('@assets/img/category/ankle.jpg'),
  toe: require('@assets/img/category/toe.jpg'),
  heel: require('@assets/img/category/heel.jpg'),
};

export const getImageCategoryLocal = imageUrl => {
  return imagePaths[imageUrl] || null; // Return the image if it exists, otherwise return null
};
