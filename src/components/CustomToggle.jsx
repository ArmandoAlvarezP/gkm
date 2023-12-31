import { useAccordionButton } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log(eventKey),
    );
    
    return (
        <>
            <i
            className="accordion-toogle"
            type="button"
            onClick={decoratedOnClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5ca500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
                </svg>
            </i>
            {children}
        </>
    );
}
