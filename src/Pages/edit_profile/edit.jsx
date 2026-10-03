import "./edit.css";
import Button from "../../component/UI/button/Button";
function Edit_profile({ onClose, handleSubmit }) {
  return (
    <div className="Edit_profile">
      <form className="editMenue" onSubmit={handleSubmit}>
        <Button text="X" variant="cross" type="submit" onClick={onClose} />
        <input type="file" name="profile" id="profile" accept="image/*" />
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="text" name="bio" id="bio" placeholder="Bio" />
        <Button text="Save" variant="save" type="submit" />

      </form>
    </div>
  );
}
export default Edit_profile;
    