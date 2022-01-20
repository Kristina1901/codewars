// Задача на обои
function getWallpaperQuantity(length, width, heigth, widthWallpaper, lengthWallpaper) {
    let TwoWallLength = length * heigth * 2;
    let TwoWallWidth = width * heigth * 2;
    let square = TwoWallLength + TwoWallWidth + (length * width)
    let windowDoor = square * 0.15;
    let cleansquare = square - windowDoor;
    let reducedWidthWallpaper = widthWallpaper / 1000;
    let reducelengthWallpaper = lengthWallpaper / 1000; 
    let squareWallpaper = reducedWidthWallpaper * reducelengthWallpaper;
    let cuttings = squareWallpaper * 0.1;
    let cleansquareWallpaper = squareWallpaper - cuttings;
    let quantityWallpaper = cleansquare / cleansquareWallpaper;
    return Math.round(quantityWallpaper)
 

    
}
console.log(getWallpaperQuantity(3,5,3,400, 5000))