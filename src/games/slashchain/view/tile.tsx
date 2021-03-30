import React from "react";
import square from "../images/square.png";
import arrow from "../images/arrow.png";
import pin from "../images/pin.png";
import cross from "../images/cross.png";
import power from "../images/power.png";
import parallel from "../images/parallel.png";
import { NamedTile, Tile } from "../components";
import { tileParser } from "../tiles";

const tileImages: { [key: string]: string } = {
  square,
  arrow,
  pin,
  cross,
  power,
  parallel,
};

export interface TileProps {
  tile: Tile;
  dir?: number;
}

const TileImageComponent: React.FC<{ tile: NamedTile; imageUrl: string }> = ({
  tile,
  imageUrl,
}) => {
  const style: { [key: string]: string } = {
    transform: `rotate(${90 * tile.dir}deg)`,
  };
  return <img src={imageUrl} style={style} alt={tile.name} />;
};

const NamedTileComponent: React.FC<{ tile: NamedTile }> = ({ tile }) => {
  const imageUrl = tileImages[tile.name];
  if (imageUrl == null) {
    return (
      <div>
        Unknown (${tile.name}:${tile.dir})
      </div>
    );
  }
  return TileImageComponent({ tile, imageUrl });
};

export const TileComponent: React.FC<TileProps> = (props) => {
  const tile = tileParser.parse(props.tile);
  if (tile == null) {
    return <div>Unknown ({props.tile.toString(16)})</div>;
  }
  return NamedTileComponent({
    tile: {
      name: tile.name,
      dir: props.dir ?? tile.dir,
    },
  });
};
