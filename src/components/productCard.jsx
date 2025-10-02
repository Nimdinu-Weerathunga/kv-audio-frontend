import "./productCard.css";

export default function ProductCard(props) {
    console.log(props);
  return (
    
    <div className="product-card">
      <img src={props.imagURL} alt={props.name} />
      <span>{props.name}</span>
      <span>{props.price}</span>
      <p>{props.description}</p>
    </div>
  );
}
