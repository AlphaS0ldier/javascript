import { Movie } from "./Movies";

export interface MoviesResponse{
    status:boolean;
    message:string;
    timestamp:number;
    data: Movie[];
}