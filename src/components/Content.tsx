import { blocos } from "../db/blocos"
import { Card, ICard } from "./Card"
import "./Content.css"

export const Content = () => {
  return <div className="container__content">
    <div className="content__header">
      <h1>Blocos recomendados</h1>
      <div className="button__group">

      <button className="button__active">Lista</button>
      <button className="button_secondary">Mapa</button>
      </div>
    </div>

    <div className="content__card">
      {blocos.map((bloco) => {
        return <Card key={bloco.id} bloco={bloco} />
      })}
    
    </div>
  </div>
}