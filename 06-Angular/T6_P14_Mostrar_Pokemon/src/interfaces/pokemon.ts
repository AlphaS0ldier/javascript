export interface Ability {
  name: string;
  is_hidden: boolean;
  slot: number;
}

export interface Stat {
  name: string;
  base_stat: number;
  effort: number;
}

export interface Type {
  slot: number;
  name: string;
}

export interface Pokemon {
  id: number;
  name: string;
  abilities: Ability[];
  stats: Stat[];
  types: Type[];
  sprites: {
    front_default: string;
    back_default: string;
  };
}
