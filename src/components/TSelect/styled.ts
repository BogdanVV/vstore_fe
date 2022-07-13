import { CSSObjectWithLabel } from 'react-select';
import styled from "styled-components";

export const selectControlStyles = (base: CSSObjectWithLabel) => {
    return {
        ...base,
        paddingLeft: 7,
        border: '1px solid #8A8A8A',
        borderRadius: 0,
        boxShadow: 'none !important',
        fontWeight: 600,
        fontSize: 12,
        width: 105,
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 5,
        '&:hover': {
            border: '1px solid #8A8A8A',
        }
    }
};

export const selectOptionStyles = (base: CSSObjectWithLabel, { isSelected }: { isSelected: boolean }) => {
    return {
        ...base,
        backgroundColor: isSelected ? '#bdbdbd' : 'white',
        boxShadow: 'none',
        color: 'black',
        '&:hover': {
            backgroundColor: '#d2d2d2'
        },
    }
};

export const selectIndicatorContainerStyles = (base: CSSObjectWithLabel) => {
    return {
        ...base,
        padding: '0 !important',
    }
};

export const ValueContainer = styled.div`
  position: absolute;
  left: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
`