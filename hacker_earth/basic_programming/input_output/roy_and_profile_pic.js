function royPic(l,w,h) {
  if(w < l || h < l) {
    console.log('UPLOAD ANOTHER');
  } else if(w >= l && h >= l) {
    if(w === h) {
      console.log('ACCEPTED');
    } else {
      console.log('CROP IT');
    }
  }
}

royPic(180, 400, 400);
