import * as i0 from "@angular/core";
export declare class RatingComponent {
    private readonly MAX_NUMBER_OF_STARS;
    rating: number;
    private get numberOfFullStars();
    private get numberOfEmptyStars();
    get fullStars(): any[];
    get emptyStars(): any[];
    get hasAnHalfStar(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<RatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RatingComponent, "lib-rating", never, { "rating": "rating"; }, {}, never, never>;
}
