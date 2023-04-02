import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Section from "./components/Section";
import "./styles.css";

const gamesListData = [
  {
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },

  {
    href: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },

  {
    href: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },

  {
    href: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];

const channelistData = [
  {
    href: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito",
  },

  {
    href: "https://github.com/Isaac20042012",
    imageUrl:
      "https://github.com/isaac20042012.png",
    alt: "Imagem de isaac20042012",
  },

  {
    href: "https://github.com/diego3g",
    imageUrl:
      "https://github.com/diego3g.png",
    alt: "Imagemd de diego3g",
  },
];
export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                href={item.href}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {channelistData.map(function (item) {
            return (
              <ListItem
                href={item.href}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })}
        </Section>
      </main>
    </div>
  );
}
