export declare class RatingComponent {
    private readonly MAX_NUMBER_OF_STARS;
    rating: number;
    private get numberOfFullStars();
    private get numberOfEmptyStars();
    get fullStars(): any[];
    get emptyStars(): any[];
    get hasAnHalfStar(): boolean;
}
