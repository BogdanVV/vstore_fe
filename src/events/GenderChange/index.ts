import { EventEnum } from "../enums/event.enum";
import { GenderEnum } from "../enums/gender.enum";

const genderEventHandler = (gender: GenderEnum) => {
    return new CustomEvent(EventEnum.GENDER_CHANGE_REQUEST, {
        detail: {
            sex: gender
        }
    });
};

export default genderEventHandler;