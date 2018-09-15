const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getvideo() {
	navigator.mediaDevices.getUserMedia({video:true, audio:false})
	.then(localMediaStream => {
		console.log(localMediaStream);
		// video.src = window.URL.createObjectURL(localMediaStream);
		video.srcObject = localMediaStream
		video.play()
	})
	.catch(err => {
		console.err('OH NO!!!', err);
	})
}

function paintToCanvas() {
	const width = video.videoWidth
	const height = video.videoHeight
	canvas.width = width;
	canvas.height = height;

	return setInterval(() => {
		ctx.drawImage(video,0,0,width,height)

		// getImageData(x,y,width,height)
		// (x,y) 絕對座標 (width,height)將要複製的矩形區域長寬
		let pixels = ctx.getImageData(0, 0, width, height);
		// console.log(pixels)
		//輸入debugger可以把網頁動作停下來
		// debugger;
	    pixels = rgbSplit(pixels);
	    // ctx.globalAlpha = 0.8;

	    // pixels = greenScreen(pixels);
	    // put them back
	    ctx.putImageData(pixels, 0, 0);
	},16)
}

function redEffect(pixels) {
	//i += 4 是因為每四個為一個循環 red -> green -> blue -> alpha
  for(let i = 0; i < pixels.data.length; i+=4) {
  	//每個像素點的紅綠藍分配
  	//這個是每個像素點的紅色的顏色深度，console.log(pxels)可以看見每個像素點的分配
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    //這個是每個像素點的綠色的顏色深度
    pixels.data[i + 1] = pixels.data[i + 1] - 200; // GREEN
    //這個是每個像素點的藍色的顏色深度
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 550] = pixels.data[i + 0]; // RED
    pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

function takePhoto() {
//音檔來源好像掛了
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a')
  link.href = data;
  link.setAttribute('download','handsome')
  //<img alt>當圖片失效時，會顯示的文字 
  //<img title> 當滑鼠移動到圖片上會出現的說明文字
  link.innerHTML = `<img src="${data}" alt="Handsome man" />`
  //把最新的照片插入第一個：firstChild
  strip.insertBefore(link, strip.firstChild)
}

getvideo();

video.addEventListener('canplay', paintToCanvas)