import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div id="pokedex">
        <div className="left-panel">
          <div className="top-left">
            <div className="top-buttons">
              <div className="big-button-border">
                <div className="big-button">
                  <div className="big-button-dot"></div>
                </div>
              </div>
              <div className="small-lights-container">
                <div className="small-light red">
                  <div className="dot light-red"></div>
                </div>
                <div className="small-light yellow">
                  <div className="dot light-yellow"></div>
                </div>
                <div className="small-light green">
                  <div className="dot light-green"></div>
                </div>
              </div>
            </div>
            <svg height="100" width="225" className="left-svg">
              <polyline
                points="0,75 70,75 90,38 224,38"
                style={{ fill: "none", stroke: "black", strokeWidth: 3 }}
              ></polyline>
            </svg>
          </div>
          <div className="center-left">
            <div className="pokedex-main-screen">
              <p>POKEMON</p>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
                alt="pikachu"
              />
              <div className="small-light red">
                <div className="dot light-red"></div>
              </div>
            </div>
          </div>
          <div className="bottom-left"></div>
        </div>
        <div className="right-panel">
          <div className="top-right">
            <div className="right-panel-svg "></div>
          </div>
          <div className="middle-right"></div>
          <div className="bottom-right"></div>
        </div>
      </div>
    </main>
  );
}
