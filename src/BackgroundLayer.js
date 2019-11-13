import React from "react";
import { Layer, Image } from "react-konva";

const getMapAsset = () => require(`./assets/Erangel_Main.jpg`);

class BackgroundLayer extends React.Component {
  state = { image: null };

  componentDidMount() {
    const image = new window.Image();
    image.src = getMapAsset();
    image.onload = () => {
      this.setState({ image });
    };
  }

  render() {
    return (
      <Layer>
        <Image image={this.state.image} height={this.props.mapSize} width={this.props.mapSize} />
      </Layer>
    );
  }
}

export default BackgroundLayer;
