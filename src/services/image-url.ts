import noImg from '../assets/no-image-placeholder.webp';

const getCroppedImg = (url: string) => {
    if (!url) return noImg;
    const index = url.indexOf('media/') + 'media/'.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index, url.length);
};

export default getCroppedImg;
