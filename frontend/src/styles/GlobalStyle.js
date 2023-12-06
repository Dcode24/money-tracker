import { createGlobalStyle } from "styled-components";

// Define global styles
export const GlobalStyle = createGlobalStyle`
/* Reset default styles for all elements */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    /* Define custom CSS variables */
    :root{
        --primary-color: #952260;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)';
        --color-green: #42AD00;
        --color-red: #880808
        --color-grey: #aaa;
        --color-grey: #F56692;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }

    /* Apply styles to the entire body */
    body{
        font-family: 'Nunito', sans-serif; /* Set the font family */
        font-size: clamps(1rem, 1.5vw, 1.2rem); /* Responsive font size */
        overflow: hidden; /* Hide any content that overflows */
        color: rgba(34, 34, 96, .6) /* Set the default text color */
    }

    /* Apply styles to headings */
    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color); /* Set color using custom variable */
    }
    /* Styling for elements with class "error" */
    .error{
        color: red; /* Set text color to red for error messages */
        animation: shake 0.5s ease-in-out; /* Apply animation */

        /* Keyframes for the shake animation */
        @keyframes shake {
            0%{
                transform: translateX(0); /* Initial position */
            }
            25%{
                transform: translateX(10px); /* Move right */
            }
            50%{
                transform: translateX(-10px); /* Move left */
            }
            75%{
                transform: translateX(10px); /* Move right */
            }
            100%{
                transform: translateX(0); /* Return to initial position */
            }
        }
    }
`;
