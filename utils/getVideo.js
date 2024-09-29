// src/utils/getVideo.js

const videoAssets = {
  HEAD: require('@assets/videos/HEAD.mp4'),
  BODY: require('@assets/videos/HEAD.mp4'),
  ARM: require('@assets/videos/ARM.mp4'),
  LEG: require('@assets/videos/HEAD.mp4'),
  Neck: require('@assets/videos/Neck.mp4'),
  Ear: require('@assets/videos/Ear.mp4'),
  Nose: require('@assets/videos/Nose.mp4'),
  Eyes: require('@assets/videos/Eyes.mp4'),
  Mouth: require('@assets/videos/Mouth.mp4'),
  Cheeks: require('@assets/videos/Cheeks.mp4'),
  Hair: require('@assets/videos/Hair.mp4'),
  Eyebrow: require('@assets/videos/Eyebrow.mp4'),
  Tongue: require('@assets/videos/Tongue.mp4'),
  Chin: require('@assets/videos/Chin.mp4'),
  Forehead: require('@assets/videos/Forehead.mp4'),
  Hip: require('@assets/videos/Hip.mp4'),
  Lip: require('@assets/videos/Lip.mp4'),
  Shoulders: require('@assets/videos/Shoulders.mp4'),
  Chest: require('@assets/videos/Chest.mp4'),
  Stomach: require('@assets/videos/Stomach.mp4'),
  Back: require('@assets/videos/Back.mp4'),
  Palm: require('@assets/videos/Palm.mp4'),
  Finger: require('@assets/videos/Finger.mp4'),
  Nails: require('@assets/videos/Nails.mp4'),
  Elbow: require('@assets/videos/Elbow.mp4'),
  Armpit: require('@assets/videos/Armpit.mp4'),
  Wrist: require('@assets/videos/Wrist.mp4'),
  Knee: require('@assets/videos/Knee.mp4'),
  Ankle: require('@assets/videos/Ankle.mp4'),
  Toe: require('@assets/videos/Toe.mp4'),
  Heel: require('@assets/videos/Heel.mp4'),
};

export const getVideoLocal = params => {
  return videoAssets[params] || null; // Return the video or null if not found
};
