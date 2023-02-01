const ImageFormat = {
    WEBP :'webp',
    JPEG : 'jpeg',
    PNG : 'png',
    GIF : 'gif',
    DEFAULT : 'default',
  }

 export const getURL = (image) => {
    const getImageHost = (host) => {
      if (host === 'i1.adis.ws') {
        return 'cdn.media.amplience.net';
      }
      return host;
    };
   return typeof image === 'string'
    ? image
    : `https://${getImageHost(image.defaultHost)}/i/${encodeURIComponent(image.endpoint)}/${encodeURIComponent(
        image.name,
      )}`;
  }
  export const  getImageURL = (image, transformations) => {
    const {
      seoFileName,
      format,
      width,
      height,
      poi,
      scaleMode,
      scaleFit,
      aspectRatio,
      upscale,
      fliph,
      flipv,
      rot,
      hue,
      sat,
      bri,
      crop,
      templates,
      strip,
      quality,
    } = transformations;
  
   
    let url =getURL(image)
      
  
    if (seoFileName) {
      url += `/${encodeURIComponent(seoFileName)}`;
    }
  
    if (format && format !== ImageFormat.DEFAULT) {
      url += `.${format}`;
    }
  
    const query = [];
  
    const params = {
      w: width,
      h: height,
      sm: scaleMode,
      scaleFit: scaleFit,
      aspect: aspectRatio,
      upscale: upscale,
      fliph: fliph,
      flipv: flipv,
      rotate: rot,
      hue: hue,
      sat: sat,
      bri: bri,
      strip: strip,
      qlt: quality,
    };
  
    for (let param of Object.keys(params)) {
      const value = params[param];
      if (value !== undefined && value !== null && value != 0) {
        query.push(`${param}=${value}`);
      }
    }
  
    if (poi && poi.x !== -1 && poi.y !== -1) {
      query.push(`poi=${poi.x},${poi.y},0.01,0.01`);
    }
  
    if (crop && crop.length === 4 && crop.filter((x) => x !== 0).length > 0) {
      query.push(`crop=${crop[0]},${crop[1]},${crop[2]},${crop[3]}`);
    }
  
    if (templates) {
      for (let template of templates) {
        query.push(`$${template}$`);
      }
    }
  
    if (query.length > 0) {
      url += `?${query.join('&')}`;
    }
  
    return url;
  }
  