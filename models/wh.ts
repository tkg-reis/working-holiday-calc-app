import mongoose, { Schema, model } from "mongoose";

interface WorkingHolidayList {
    age: number,
    money: number,
    time: number,
    school: boolean,
    coutries: string,
    english_level: boolean,
    parttimeWork: boolean,
}

const WorkingHolidayListSchema = new Schema<WorkingHolidayList>({
    age :{
        type: "Number",
        required: [true, ""],
        max: 100,
        min: 0,
    },
    money: {
        type: Number,
        required: [true, ""],
        min: [1, ""]
    },
    school: {
        type: Boolean,
        required: [true, ""]
    },
    coutries: {
        type: String,
        required: [true, ""]
    },
    english_level: {
        type: Boolean,
        required: [true, ""]
    },
    parttimeWork: {
        type: Boolean,
        required: [true, ""]
    }
})

export default model("WorkingHoliday", WorkingHolidayListSchema);