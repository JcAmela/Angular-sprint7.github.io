import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WebService {

    constructor() { }

    calculateCost(pages: number, languages: number): number {
        if (pages > 0 && languages > 0) {
            return pages * languages * 30;
        } else if (pages > 0) {
            return pages * 30;
        } else if (languages > 0) {
            return languages * 30;
        } else {
            return 0;
        }
    }


}

