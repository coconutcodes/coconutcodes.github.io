
<html lang="en">
<head>
  <meta charset="utf-8">
  <script src="https://cesium.com/downloads/cesiumjs/releases/1.65/Build/Cesium/Cesium.js"></script>
  <link href="https://cesium.com/downloads/cesiumjs/releases/1.65/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
</head>
<body>
  <div id="cesiumContainer" style="width: 700px; height:400px"></div>
  <script>
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YjI1ZDlkNi01YTAwLTRjZGUtYmMxMi1mZDM0ZWQ2ZTUxYjAiLCJpZCI6MjE2OTQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODAzMjU5ODl9.Q9uhPf1xCh8R4tBsIGlWwbBdhalj9Vzr-GNjdr2OYTI';
    var viewer = new Cesium.Viewer('cesiumContainer');
  </script>
</body>
</html>