import axios from "axios";
import styles from "./CatImage.module.css";
import { useEffect, useState } from "react";

export default function CatImage() {
  const [catImage, setCatImage] = useState("");

  const fetchCatImage = async () => {
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/images/search");
      setCatImage(response.data[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Random Cat</h1>
        {catImage && <img className={styles.image} src={catImage} alt="Random Cat" />}
        <button className={styles.btn} onClick={fetchCatImage}>
          Load Image
        </button>
      </div>
    </>
  );
}
