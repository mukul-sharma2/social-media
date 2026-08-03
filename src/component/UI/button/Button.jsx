import "./Button.css";

function Button({ text, onClick, variant ='' ,type = "button" , children}) {
   console.log("Button rendered", children);

  return (
    <button className={`btn ${variant}`} onClick={onClick}  type={type}>
     {children || text}
    

    </button>
  );
}

export default Button;