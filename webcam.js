// Triangel side length
const text = document.getElementById('message')
const right = document.createElement('canvas')
const left = document.createElement('canvas')

window.videoCanvas = {left: left, right: right}

const placeImage = (canvas, dWidth) => {
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

  vc.scale(dWidth, 1)
  vc.translate(-canvas.width / 2, -canvas.height / 2)
  vc.drawImage(ve,
    // Center image over clip
     -(ve.videoWidth - s) / 2,
     -(ve.videoHeight - s) / 2)
  setTimeout(() => { placeImage(canvas, dWidth) }, 33)
}

const ve = document.createElement('video')
if (navigator.mediaDevices) {
  text.innerHTML = 'If you allow access for the webcam you can enjoy something that I created. No data is shared or stored.'
  navigator.mediaDevices.getUserMedia({video: {width: {ideal: 1280, facingMode: {ideal: 'environment'}}, height: { ideal: 720 }}}).then((stream) => {
    text.innerHTML = ''

    ve.src = window.URL.createObjectURL(stream)
    ve.play()
    placeImage(left, 1, 1)
    placeImage(right, -1, 1)
  })
} else {
  text.innerHTML = 'For a bonus, try visiting this page in Firefox or Chrome.'
}
// else säg byt browser
