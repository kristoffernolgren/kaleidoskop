let images = []
const c = document.getElementById('scope')
const cc = c.getContext('2d')
c.width = window.innerWidth
c.height = window.innerHeight

const place6 = (pos) => {
  let i
  for (i = 0; i < 6; ++i) {
    const dir = (i % 2 === 0) ? 'right' : 'left'
    images.push({pos: pos, dir: dir, rotation: i})
  }
}

place6({x: c.width / 2, y: c.height / 2})
place6({x: c.width / 2, y: c.height / 2 - window.base * 2})
place6({x: c.width / 2, y: c.height / 2 + window.base * 2})
place6({x: c.width / 2 - window.side * 1.5, y: c.height / 2 - window.base})
place6({x: c.width / 2 + window.side * 1.5, y: c.height / 2 - window.base})
place6({x: c.width / 2 - window.side * 1.5, y: c.height / 2 + window.base})
place6({x: c.width / 2 + window.side * 1.5, y: c.height / 2 + window.base})

const loop = () => {
  images.forEach((image) => {
    cc.save()
    cc.translate(image.pos.x, image.pos.y)
    cc.rotate((Math.PI / 3) * image.rotation)
    cc.drawImage(window.videoCanvas[image.dir], -window.side / 2, 0)
    cc.restore()
  })
  setTimeout(loop, 1000 / 60)
}
loop()

