import { BLACK } from "@/constants/colors";
// eslint-disable-next-line import/namespace
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: ${BLACK};
    }
`;
