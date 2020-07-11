/// <reference types="react-scripts" />

//Prevents false-positive error when importing *.png files in src
declare module "*.png" {
  const value: any;
  export default value;
}
