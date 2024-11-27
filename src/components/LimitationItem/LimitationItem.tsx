import "./style.css";
import { cardItemProps } from "../../models/interface";
function LimitationItem({
  description,
  image,
  title,
  setAosDelay,
}: cardItemProps) {
  return (
    <div
      className="limitationItem"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-delay={setAosDelay}
    >
      <div className="limitationHeader">
        <img src={image} alt={`image ${title}`} />
        <h4 className="heading-sm">{title}</h4>
      </div>
      <p className="body-text">{description}</p>
    </div>
  );
}

export default LimitationItem;
