<html>
<head>
  <script src="http://livejs.com/live.js"></script>
</head>
  <body style="margin:0">
    <canvas id="scope" height="1000" width="1000" ></canvas>
  </body>
  <script> 
    window.side = Math.max(window.innerWidth/4, window.innerHeight/4)
    window.base = Math.sqrt(3)/2 * window.side
    window.videoCanvas = {}
  </script>
  <script src="webcam.js"></script>
  <script src="fill.js"></script>
</html>
//testa i mobilen