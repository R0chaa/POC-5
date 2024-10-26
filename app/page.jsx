import ImageConnector from "./components/ImageConnector";

export default function Page() {
  return (
    <div>
      <ImageConnector
        title="Buzz e Woody Conectados"
        image1="/imgs/buzz.jpeg"
        image2="/imgs/woody.jpeg"
        lineColor="red" /* Cor da linha */
      />
      <ImageConnector
        title="Woody e Buzz Conectados"
        image1="/imgs/woody.jpeg"
        image2="/imgs/buzz.jpeg"
        lineColor="red" /* Cor da linha */
      />
    </div>
  );
}
