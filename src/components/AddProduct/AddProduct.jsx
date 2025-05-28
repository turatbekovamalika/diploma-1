import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { productCollection, uploadProductPhoto } from "../../firebase";
import { addDoc } from "firebase/firestore";
import "./AddProduct.css";

export default function AddProduct({ category }) {
  const { user } = useContext(AppContext);
  const [name, setName] = useState("");

  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");

  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangeColor(event) {
    setColor(event.target.value);
  }
  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  function onChangePrice(event) {
    setPrice(event.target.value);
  }
  function onChangePicture(event) {
    const file = event.target.files[0];
    setPicture(file);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    if (!picture) {
      alert("Please upload an picture");
      return;
    }

    setIsSubmitting(true);

    uploadProductPhoto(picture)
      .then((pictureUrl) =>
        addDoc(productCollection, {
          category: category.id,
          name: name,
          color: color,
          price: Number(price),
          picture: pictureUrl,
          path: name.replaceAll(" ", "-").toLowerCase(),
        })
      )
      .then(() => {
        setName("");
        setColor("");
        setDescription("");
        setPrice(0);
        setPicture(null);
      })
      .catch((error) => {
        console.log("Failed to add product:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="AddProduct">
      <form onSubmit={onFormSubmit}>
        <h3>Create a new product</h3>
        <label>
          <p className="Name"> Name:</p>
          <input
            type="text"
            value={name}
            name="name"
            onChange={onChangeName}
            required
          />
        </label>

        <label>
          <p className="Name"> Color:</p>
          <input
            type="text"
            value={color}
            name="name"
            onChange={onChangeColor}
            required
          />
        </label>

        <label>
          <p className="Name"> Description:</p>
          <textarea
            type="text"
            value={description}
            name="name"
            onChange={onChangeDescription}
            required
          />
        </label>

        <label>
          <p className="Name"> Price:</p>
          <input
            type="number"
            value={price}
            name="price"
            onChange={onChangePrice}
            min={0}
            required
          />
        </label>
        <label>
          <p className="Picture"> Picture:</p>
          <input
            className="Input_picture"
            type="file"
            name="picture"
            onChange={onChangePicture}
            required
          />
        </label>
        <button className="Button_submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submiting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
