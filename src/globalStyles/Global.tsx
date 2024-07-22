import { BLACK } from "@/constants/colors";
// eslint-disable-next-line import/namespace
import { createGlobalStyle } from "styled-components";
import Regular from "@/assets/fonts/LexendDeca-Regular.ttf";
import Bold from "@/assets/fonts/LexendDeca-Bold.ttf";
import Meduim from "@/assets/fonts/LexendDeca-Medium.ttf";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: ${BLACK};

        @font-face {
            font-family: 'LexendDeca-Regular';
            font-style: normal;
            font-weight: 400;
            src: url(${Regular}) format('truetype');
        }
        @font-face {
            font-family: 'LexendDeca-Bold';
            font-style: normal;
            font-weight: 700;
            src: url(${Bold}) format('truetype');
        }
        @font-face {
            font-family: 'LexendDeca-Meduim';
            font-style: normal;
            font-weight: 500;
            src: url(${Meduim}) format('truetype');
        }
        font-family: 'LexendDeca-Regular', 'LexendDeca-Bold', 'LexendDeca-Medium';
    }
`;
