function doGet() {
  return HtmlService.createHtmlOutputFromFile('hosting/index.html')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('YouTube サムネイル画像');
}