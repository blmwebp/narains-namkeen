export const metadata = { title: "Image Credits" };
const photos = [
  ["Sev", "Vidhyasha", "Sev.jpg", "3.0"],
  ["Mixture", "Nithyasrm", "Mixture.JPG", "4.0"],
  ["Masala chai", "Nandhiniraji", "Masala_chai.jpg", "4.0"],
  ["Bhel puri", "foam", "Indian_cuisine-Chaat-Bhelpuri-07.jpg", "2.0"],
];
export default function Page() {
  return (
    <section className="reading section">
      <h1>Image credits</h1>
      <p>
        Photography is illustrative and does not depict actual Narain’s
        products. Images are resized and cropped for display; photographic
        derivatives retain their source licences. Concept packaging is a web
        layout placeholder, not an approved retail pack.
      </p>
      {photos.map(([title, author, file, version]) => (
        <div key={file}>
          <h2>{title}</h2>
          <p>
            By {author} ·{" "}
            <a href={"https://commons.wikimedia.org/wiki/File:" + file}>
              Original on Wikimedia Commons
            </a>{" "}
            ·{" "}
            <a
              href={
                "https://creativecommons.org/licenses/by-sa/" + version + "/"
              }
            >
              CC BY-SA {version}
            </a>
          </p>
        </div>
      ))}
      <p>
        Narain’s Namkeen logo supplied by the user; all brand rights remain with
        their owner.
      </p>
    </section>
  );
}
