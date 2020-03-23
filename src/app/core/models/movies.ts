export interface Movies {
    id: number;
    name: string;
    img: string;
    description: string;
    year: number;
    genres: string[];
    director: string;
    starring: string[];
    onFav?: boolean;
}
