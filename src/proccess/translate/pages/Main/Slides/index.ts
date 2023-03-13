import { Array, Number, Record, Static, String } from "runtypes";

export const slidesTranslate = Record({
    slides: Array(Record({
        id: Number,
        desc: String,
        button: String
    }))
})

export type SlidesTranslate = Static<typeof slidesTranslate>
