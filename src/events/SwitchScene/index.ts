import { EventEnum } from "../enums/event.enum";

const switchSceneEventHandler = (scene: string) => {
    return new CustomEvent(EventEnum.SWITCH_SCENE_REQUEST, {
        detail: {
            scene
        }
    });
};

export default switchSceneEventHandler;