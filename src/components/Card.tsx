import { LocationIcon } from "../assets/location"
import "./Card.css"

export interface ICard {
  id: number;
  name: string;
  description: string;
  image: string;
  location: {
    city: string;
    state: string;
  };
}

interface ICardProps {
  bloco: ICard;
}

export const Card = ({ bloco }: ICardProps) => {
  const { name, description, image, location } = bloco;
  const { city, state } = location;
  return <div className="container__card">
    <div className="card__image">
      <img
        src={image}
        alt="Imagem do bloco"
      />
    </div>
    <div className="card__info">
      <h1 className="card__info__title">{name}</h1>
      <p className="card__info__description">{description}</p>
      <div className="card__info__footer__location">
        <LocationIcon />
        <p className="card__info__footer__location__city">{city} - {state}</p>
      </div>
    </div>
  </div>
}
