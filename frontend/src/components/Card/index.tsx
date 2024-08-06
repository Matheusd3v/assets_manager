import { Link } from "react-router-dom";
import { IEntity } from "../../types";
import { CardStyle } from "./style";
import { FaArrowCircleRight, FaTrash } from "react-icons/fa";

interface ICardProps {
  entity: IEntity;
  path: string;
  callback: () => void;
  descriptionType: "sensor" | "collection";
}

export const Card = (props: ICardProps) => {
  const { entity, path, callback, descriptionType } = props;

  return (
    <>
      <CardStyle>
        <section>
          <h3 className="ellipsis">{entity.name}</h3>
          <button onClick={callback} className="trash-button">
            <FaTrash className="card-icon" />
          </button>
        </section>

        <section>
          <p>
            {entity.totalRelation}{" "}
            {descriptionType === "collection" ? "Coletas" : "Sensores"}
          </p>

          <Link to={path}>
            <FaArrowCircleRight className="card-icon" />
          </Link>
        </section>
      </CardStyle>
    </>
  );
};
