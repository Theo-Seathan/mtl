export interface ProductAdjuster {
    name: string;
    step: number;
    min: number;
    max: number;
    /**
     * ไว้เก็บค่าปัจจุบันที่กดทิ้งไว้
     */
    value: number;
}
