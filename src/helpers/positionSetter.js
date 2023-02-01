const positionSetter = (positions) => {
    if (!positions) {
      return {
        top: 0,
        left: 0,
      };
    } else {
      const { textPositionHorizontal = 'left', textPositionVertical = 'bottom' } = positions;
      switch (true) {
        case textPositionHorizontal === 'left' && textPositionVertical === 'middle':
          return {
            transform: 'translateY(-50%)',
            top: '50%',
            left: 0,
          };
        case textPositionHorizontal === 'center' && textPositionVertical === 'middle':
          return {
            transform: 'translate(-50%,-50%)',
            top: '50%',
            left: '50%',
          };
        case textPositionHorizontal === 'right' && textPositionVertical === 'middle':
          return {
            transform: 'translateY(-50%)',
            top: '50%',
            right: 0,
          };
        case textPositionHorizontal === 'left' && textPositionVertical === 'top':
          return {
            top: 0,
            left: 0,
          };
        case textPositionHorizontal === 'center' && textPositionVertical === 'top':
          return {
            transform: 'translateX(-50%)',
            top: 0,
            left: '50%',
          };
        case textPositionHorizontal === 'right' && textPositionVertical === 'top':
          return {
            top: 0,
            right: 0,
          };
        case textPositionHorizontal === 'left' && textPositionVertical === 'bottom':
          return {
            bottom: 0,
            left: 0,
          };
        case textPositionHorizontal === 'center' && textPositionVertical === 'bottom':
          return {
            transform: 'translateX(-50%)',
            bottom: 0,
            left: '50%',
          };
        case textPositionHorizontal === 'right' && textPositionVertical === 'bottom':
          return {
            right: 0,
            bottom: 0,
          };
  
        default:
          return {
            top: 0,
            left: 0,
          };
      }
    }
  };
  export default positionSetter;
  