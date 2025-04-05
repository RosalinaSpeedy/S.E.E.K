export const checkImageURL = (url) => {
    console.log(url)
    if (url == null || !url) {
        console.log("no image found")
        return false
    }
    else {
        console.log("valid url found")
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        console.log(pattern.test(url));
        return true;
    }
};