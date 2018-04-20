

import Card from "/.components/Card";
import memorycards from "./memorycards.json";



render () {
    {this.state.memorycards.map(cards=>(
        <Card
        id={cards.id}
        image={cards.image}
        />
    )}
