// Descripciones para cada categoría con encabezados
const descriptions = {
  masks: `<h4>"The Devils"</h4>
        <p>This project takes me back to my childhood. The first time I encountered the Yare Devil masks was at the Roque Pinto Technical School in Los Teques. My grandmother would leave me in cultural courses offered by the local council while she received treatment at the hospital.</p>
        <p>In my reinterpretation, I like to imagine that these Devils serve to mediate and make peace with the evil surrounding us. They offered me a refuge from adversity and a way to learn alongside people from all walks of life.</p>`,

  sculptures: `<h4>"Ausencias"</h4>
        <p>This is an exploration of how absence and emptiness can become forms of presence. Through handmade high-temperature ceramic sculptures and vases, this project captures how the things we lack often shape us more deeply than what we have.</p>
        <p>Each piece is crafted as a reflection of how absences can create new meanings, inviting us to embrace the voids as essential parts of who we are.</p>`,

  collages: "",

  performance: `<h4>"Red"</h4>
        <p>Red is the colour of my skin.
Red is the color of the path.
From blood and ashes I was born.
In this unsettling force, crimson sky land.

Red is the color of my dreams.
Red is the color of my past.
Wounds become vermillion.
and the sorrow, dyed my big brown eyes.
.
Red is the color of my faith
Red is the color of my hate
Ruby dreams, of new places venture 
Finding new rules, in no one’s affection

Red is the color of regrets
Red is the color of the pride
Flaming pact between two worlds
Inside this neglected human life 

I might forget sometimes the path
I might regret sometimes the red
But I always will come back to you 
To see it all
To feel It all 
Reborn again 
In red

</p>`,
};

export default function updateDescription(filter, descriptionContainer) {
  const cleanedFilter = filter.replace(".", ""); // Elimina el punto si existe
  if (cleanedFilter !== "*" && descriptions[cleanedFilter]) {
    descriptionContainer.innerHTML = descriptions[cleanedFilter];
    descriptionContainer.classList.remove("hidden");
  } else {
    descriptionContainer.innerHTML = "";
    descriptionContainer.classList.add("hidden");
  }
}
