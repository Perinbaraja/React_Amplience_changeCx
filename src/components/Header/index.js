import React from "react";
import { getURL } from "../../helpers/getImageURL";


const Header = ({data}) => {
  const { heading } = data;
 

  return (
    <div className="fixed-screen-width lg:relative-width bg-white">
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-full border-b border-gray-200 px-6 lg:px-8"
        >
          <div>
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <img
            src={getURL(data.logo)}
            layout="fill"
            alt=""
            className="h-10 w-10 object-cover"
           
          />
       <p className=" text-2xl text-orange-400"> {heading}</p>
       <p></p>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
// import { getImageURL } from "../../helpers/getImageURL";
// import positionSetter from "../../helpers/positionSetter";


// const Banner = ({ data }) => {
//   const isAmpBreakPoint =true;
//   const { bannerText, ctaSettings, textPositioning: positions, opacity: bgOpacity } = data;
//   const bannerImage = data.image?.img?.image;
//   const background = bannerImage.image;
//   const imageURL = getImageURL(background, bannerImage);
// console.log(imageURL)
//   const bannerTextPosition = positionSetter(positions);
//   return (
//     <>
//       {isAmpBreakPoint ? (
//         <div className="relative my-2 w-full ">
//           <div className="w-full">
//             <img
//               src={imageURL}
//               layout="fill"
//               alt=""
//               className="w-full min-h-[300px] max-h-[600px] object-cover"
//             />
//           </div>

        
//           {bannerText && (
//             <div
//               className="absolute px-14 py-10"
//               style={{ ...bannerTextPosition, backgroundColor: `rgba(255,255,255,${bgOpacity})` }}
//             >
//               <p className="text-4xl uppercase  text-[#666666]">{bannerText?.header}</p>
//               <p className="text-xs">{bannerText?.subheader}</p>
//               <p className="my-5 text-sm">{bannerText?.description}</p>
//               <a href={ctaSettings?.linkUrl} className="cursor-pointer rounded bg-black px-6 py-1.5 text-lg text-white">
//                 {ctaSettings?.buttonText}
//               </a>
//             </div>
//           )}
//         </div>
//       ) : (
//         <>
//           <img
//             src={`https://${background.defaultHost}/i/${background.endpoint}/${background.name}`}
//             layout="fill"
//             alt=""
//             className="h-full w-full  object-cover"
//           />
//           {bannerText && (
//             <div
//               className="px-14 py-10"
//             >
//               <p className="text-4xl uppercase  text-[#666666]">{bannerText.header}</p>
//               <p className="text-xs">{bannerText.subheader}</p>
//               <p className="my-5 text-sm">{bannerText.description}</p>
//               <a href={ctaSettings.linkUrl} className="cursor-pointer rounded bg-black px-6 py-1.5 text-lg text-white">
//                 {ctaSettings.buttonText}
//               </a>
//             </div>
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default Banner;
