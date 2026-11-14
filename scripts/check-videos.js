import fs from 'fs';

// Check if we can inspect video dimensions or check file sizes
const stat1 = fs.statSync('public/videos/tezz-video-1.mp4');
const stat2 = fs.statSync('public/videos/tezz-video-2.mp4');
console.log('Video 1 size:', stat1.size);
console.log('Video 2 size:', stat2.size);
