import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.querySelector('#root') as HTMLElement;
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        
    </StrictMode>
)