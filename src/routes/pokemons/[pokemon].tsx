// src/routes/pokemons/[pokemon].tsx
import type { JSX } from "react";
import type { TuonoProps } from "tuono";
import { Link } from "tuono";

import PokemonView from "../../components/PokemonView";

interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
}

export default function PokemonPage({
  isLoading,
  data,
}: TuonoProps<Pokemon>): JSX.Element {
  return (
    <div>
      <Link href="/">Back</Link>

      {isLoading && (
        <>
          <div>Loading...</div>
        </>
      )}

      {data?.id && (
        <>
          <PokemonView pokemon={data} />
        </>
      )}
    </div>
  );
}
