import React from "react";

import { IOption } from "../../types";
import { IExtendedSubCategory } from "../../../../temp/types";

export type NestedFilterCategoryProps = {
    nestedArrayFieldName: string;
    option: IOption;
    setSubCategory: (subCategory: IExtendedSubCategory | null) => void;
    subCategory: IExtendedSubCategory | null;
}