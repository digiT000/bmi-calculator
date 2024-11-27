import "./style.css";
import { cardItemProps } from "../../models/interface";

function BenefitItem({
  description,
  image,
  title,
  setAosDelay,
}: cardItemProps) {
  return (
    <div
      className="benefitItem "
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-delay={setAosDelay}
    >
      <img src={image} alt={`image ${title}`} />
      <div className="benefitContent">
        <h3 className="heading-md">{title}</h3>
        <p className="body-text">{description}</p>
      </div>
    </div>
  );
}

export default BenefitItem;
