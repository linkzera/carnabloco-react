import { ChevronDown } from "../assets/chevron-down"
import { HeaderLeft } from "../assets/HeaderLeft"
import { HeaderRight } from "../assets/HeaderRight"
import { LocationIcon } from "../assets/location"
import { SearchIcon } from "../assets/SearchIcon"
import "./Header.css"

export const Header = () => {
  return <div className="container__header">
    <HeaderLeft className="header__left" />
    <HeaderRight className="header__right" />

    <h2 className="header__find">find your block</h2>
    <h1 className="header__title">Encontre os <span>melhores blocos</span><br /> de carnaval de 2023</h1>

    <div className="header__searchContainer">
      <label className="header__searchContainer__name">
        <SearchIcon />
        <input type="text" placeholder="Pesquise por nome" />
      </label>
      <label className="header__searchContainer__city">
        <LocationIcon className="header__magnifyingGlass__city" />
        <input type="text" placeholder="Selecione uma cidade" />
        <ChevronDown className="header__chevron__city"/>
      </label>
      <button className="header__searchButton">Buscar agora</button>
    </div>
  </div>
}