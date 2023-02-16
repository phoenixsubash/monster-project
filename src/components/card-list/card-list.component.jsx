import React from "react";
import { Card } from "../card/card.components";
import "./card-list.styles.css"

export const Cardlist = props => {
    return <div className="card-list">
          {props.monsters.map((monsters) => (
          <Card key={monsters.id} monster = {monsters}/>
          ))}
        </div>
}