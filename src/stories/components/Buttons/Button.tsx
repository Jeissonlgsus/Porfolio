import './button.css';

interface ButtonProps {
  primary?: boolean;
  secondary?:boolean;
  tertiary?:boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button = ({
  primary = false,
  secondary = false,
  tertiary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  let mode = null;

  if (primary){
    mode = 'storybook-button--primary'
  } else if (secondary){
    mode = 'storybook-button--secondary'
  } else if (tertiary){
    mode = 'storybook-button--tertiary'
  } else{
    mode = null
  }
  
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button