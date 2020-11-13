import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import light from "./light.jpg"

export default createGlobalStyle`
   ${reset};
   @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
   *{
       box-sizing: border-box;
   }
   body {
       background-image:url(${light});
       background-size:cover;
       background-repeat:no-repeat;
       font-size: 14px;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
       padding-top: 140px;
   }
   a {
       color:${props => props.theme.blueColor};
       text-decoration: none;
   }
   input:focus {
       outline:none;
   }
   
   `;