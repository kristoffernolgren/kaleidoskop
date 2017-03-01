// Triangel side length
const right = document.createElement('canvas')
const left = document.createElement('canvas')

window.videoCanvas = {left: left, right: right}

const placeImage = (canvas, dWidth, dHeight) => {
  const vc = canvas.getContext('2d')
  // Proportions
  const s = window.side
  const b = window.base
  canvas.width = s + 1
  canvas.height = b + 1

  // Fill the path

  vc.beginPath()
  vc.moveTo(0, b)
  vc.lineTo(s / 2, 0)
  vc.lineTo(s, b)
  vc.closePath()
  vc.clip()
  vc.translate(canvas.width / 2, canvas.height / 2)

  vc.scale(dWidth, dHeight)
  vc.translate(-canvas.width / 2, -canvas.height / 2)
  vc.drawImage(ve,
    // Center image over clip
     -(ve.videoWidth - s) / 2,
     -(ve.videoHeight - s) / 2)
  setTimeout(() => { placeImage(canvas, dWidth, dHeight) }, 33)
}

const ve = document.createElement('video')
navigator.mediaDevices.getUserMedia({video: {width: {ideal: 1280}, height: { ideal: 720 }}}).then((stream) => {
  ve.src = window.URL.createObjectURL(stream)
  ve.play()
  placeImage(left, 1, 1)
  placeImage(right, -1, 1)
  document.body.appendChild(right)
  document.body.appendChild(left)


})
