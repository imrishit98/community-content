const { getStrapiImage } = require("utils/images");

const LargeVideo = ({ data }) => {
  return (
    <section className="container flex flex-col align-middle text-center">
      <h2 className="title mt-8 mb-6">{data.title}</h2>
      <p className="text-lg mb-10">{data.description}</p>
      {/* Video wrapper */}
      <div className="w-full lg:w-9/12 mx-auto overflow-hidden shadow-2xl">
        <video
          className="w-full max-h-full"
          poster={getStrapiImage(data.poster.url)}
          controls
        >
          <source src={getStrapiImage(data.video.url)} type={data.video.mime} />
        </video>
      </div>
    </section>
  );
};

export default LargeVideo;