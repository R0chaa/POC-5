import styles from "./ImageConnector.module.css";

export default function ImageConnector({ title, image1, image2, lineColor }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.imagesContainer}>
        <img src={image1} alt="Image 1" className={styles.image} />
        <div
          className={styles.line}
          style={{ backgroundColor: lineColor }}
        ></div>
        <img src={image2} alt="Image 2" className={styles.image} />
      </div>
    </div>
  );
}
