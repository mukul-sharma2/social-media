import './input.css'
function Input({ type, ...props }) {
  if (type === "textarea") {
    return <textarea {...props}></textarea>;
  }

  return <input type={type} {...props} />;
}

export default Input;