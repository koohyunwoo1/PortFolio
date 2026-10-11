import styles from "./Button.module.css";

// variant: primary | secondary | dark | light,  size: md | sm
const Button = ({ href, external = false, variant = "primary", size = "md", className = "", children, ...rest }) => {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
