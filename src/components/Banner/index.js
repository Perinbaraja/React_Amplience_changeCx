const Banner = ({ bannerText, image, background = {}, link = {} }) => {
  console.log(bannerText);
  return (
    <section className="banner px-28">
      <header>
        <h1 className="text-red-700">{bannerText?.header}</h1>
        <h>{bannerText?.description}</h>
      </header>
      <div className="grid" >
     <div> <img src={image?.img?.image?.image?.url().build()} alt={background.alt} className="aspect-[2]"/></div>
      </div>
      <a href={link.url}>{link.title}</a>
    </section>
  );
};

export default Banner;
