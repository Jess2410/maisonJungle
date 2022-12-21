import CareScale from "./CareScale";

type PlantProps = {
  id: string;
  cover: string;
  name: string;
  water: string;
  light: number;
};

function PlantItem<Props>({ id, cover, name, water, light }: PlantProps) {
  function handleClick(e: any) {
    console.log("✨ Ceci est mon event :", e);
  }
  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
