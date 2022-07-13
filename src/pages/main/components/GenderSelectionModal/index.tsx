import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import genderEventHandler from "../../../../events/GenderChange";

import {
    GenderItemsWrapper,
    GenderItemWrapper, GenderItemWrapperLabel,
    GenderSelectionModalContent,
    GenderSelectionModalHeader,
    GenderSelectionModalWrapper
} from "./styled";
import { GenderEnum } from "../../../../events/enums/gender.enum";
import { contentWindow } from "../../../../App";
import { changeGender } from "../../../../store/slices/mainPageSlice";
import { IRootState } from "../../../../store/types";

import Female from '../../../../assets/images/female.svg';
import Male from '../../../../assets/images/male.svg';

const GenderSelectionModal = () => {
    const { gender } = useSelector((state: IRootState) => state.mainPage);

    const dispatch = useDispatch();

    const [selectedGender, setSelectedGender] = useState<GenderEnum>(GenderEnum.WOMAN);

    const handleApplyGender = () => {
        const genderChangeEvent = genderEventHandler(selectedGender);

        contentWindow?.dispatchEvent(genderChangeEvent);

        dispatch(changeGender({ gender: selectedGender }));
    }

    return <Modal
        isVisible={!gender}
        backgroundColor={'rgba(0, 0, 0, 0.77)'}
    >
        <GenderSelectionModalWrapper>
            <GenderSelectionModalHeader>
                AVENBECK
            </GenderSelectionModalHeader>
        </GenderSelectionModalWrapper>
        <GenderSelectionModalContent>
            <GenderItemsWrapper>
                <GenderItemWrapper
                    onClick={() => {
                        setSelectedGender(GenderEnum.MAN);
                    }}
                    backgroundImage={Male}
                    isActive={selectedGender === GenderEnum.MAN}
                >
                    <GenderItemWrapperLabel>
                        MALE
                    </GenderItemWrapperLabel>
                </GenderItemWrapper>
                <GenderItemWrapper
                    onClick={() => {
                        setSelectedGender(GenderEnum.WOMAN);
                    }}
                    backgroundImage={Female}
                    isActive={selectedGender === GenderEnum.WOMAN}
                >
                    <GenderItemWrapperLabel>
                        FEMALE
                    </GenderItemWrapperLabel>
                </GenderItemWrapper>
            </GenderItemsWrapper>
            <Button
                color={'#000000'}
                backgroundColor={'#FFFFFF'}
                fontSize={'18px'}
                lineHeight={'27px'}
                height={'56px'}
                width={'250px'}
                borderRadius={'2px'}
                onClick={handleApplyGender}
            >APPLY</Button>
        </GenderSelectionModalContent>
    </Modal>
};

export default GenderSelectionModal;