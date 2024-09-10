export type Massacre = {
    name: string;
    location: string;
    date: {
        start: string; // e.g., "1999-03-31"
        end: string;   // e.g., "1999-03-31"
    };
    description: string;
    perpetrators: string;
    victims: {
        total: number;
        unarmed_civilians: {
            total: number;
            demographics: {
                gender?: {
                    male: number;
                    female: number;
                };
                age: {
                    minors?: number;
                    adults?: number;
                    over_65?: number;
                };
                ethnicity: Record<string, number>;
            };
        };
    };
    demographics: {
        age_range: {
            youngest: number;
            oldest: number;
        };
    };
    notes: string[];
    sources: (Record<string, string[]> | string)[];
    image?: string; // Optional, if you have an image field
}
