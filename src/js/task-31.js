// Задача на обои
function getWallpaperQuantity(length, width, heigth, widthWallpaper, lengthWallpaper) {
    let TwoWallLength = length * heigth * 2;
    let TwoWallWidth = width * heigth * 2;
    let square = TwoWallLength + TwoWallWidth + (length * width)
    let windowDoor = square * 0.15;
    let cleanSquare = square - windowDoor;
    let reducedWidthWallpaper = widthWallpaper / 1000;
    let reducelengthWallpaper = lengthWallpaper / 1000; 
    let squareWallpaper = reducedWidthWallpaper * reducelengthWallpaper;
    let cuttings = squareWallpaper * 0.1;
    let cleanSquareWallpaper = squareWallpaper - cuttings;
    let quantityWallpaper = cleanSquare / cleanSquareWallpaper;
    return Math.round(quantityWallpaper)
 

    
}
console.log(getWallpaperQuantity(3,5,3,400,5000))

