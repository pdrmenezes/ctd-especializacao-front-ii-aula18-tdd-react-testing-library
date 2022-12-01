import { FC } from "react";
import { Character } from "../../types/character.types";

export type CardProps = {
  character: Character;
};

export const Card: FC<CardProps> = ({ character }: CardProps) => {
  return (
    <div>
      <h1>{character.name}</h1>
      {character.image !== null ? (
        <>
          <img src={character.image} alt={character.name} /> <p>{character.followers} followers</p>
        </>
      ) : (
        <p>No followers yet</p>
      )}
    </div>
  );
};
