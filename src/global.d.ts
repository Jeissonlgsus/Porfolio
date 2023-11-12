declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
  }
  declare module '*.json' {
    const value: any;
    export default value;
  }
  
  declare module NodeJS  {
    interface Global {
      require: any;
    }
  }
  
  
  declare module "*.png";
  declare module "*.svg";
  declare module "*.gif";
  declare module "*.jpg"