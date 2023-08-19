import styles from "./App.module.scss";
import Card from "./components/Card";
import { IProduct } from "./interfaces";

const App = () => {
  const products: IProduct[] = [
    {
      id: 1,
      image: "/assets/images/product-1.png",
      name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      listPrice: 2813,
      bestPrice: 2599,
      numberInstallments: 10,
      installmentsPrice: 259.9,
    },
    {
      id: 2,
      image: "/assets/images/product-2.png",
      name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      listPrice: 2813,
      bestPrice: 2599,
      numberInstallments: 10,
      installmentsPrice: 259.9,
    },
  ];

  return (
    <div className={styles["app"]}>
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default App;
