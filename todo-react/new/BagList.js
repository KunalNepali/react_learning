function BagList({ bags, emptyHeading }) {
  const count = bags.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = count + ' ' + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {bags.map(video =>
        <Bags key={video.id} video={video} />
      )}
    </section>
  );
}