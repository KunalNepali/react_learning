function Bag({ bag }) {
  return (
    <div>
      <Icon bag={bag} />
      <a href={bag.url}>
        <h3>{bag.title}</h3>
        <p>{bag.description}</p>
      </a>
      <LikeButton bag={bag} />
    </div>
  );
}