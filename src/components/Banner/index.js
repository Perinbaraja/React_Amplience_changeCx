const Banner = ({ bannerText, strapline, background = {}, link = {} }) => {
  console.log(bannerText);
  return (
    <section className="banner">
      <header>
        <h1>{bannerText?.header}</h1>
        <h>{bannerText?.description}</h>
      </header>
      <img src={background.image?.url().build()} alt={background.alt} />
      <a href={link.url}>{link.title}</a>
    </section>
  );
};

export default Banner;
