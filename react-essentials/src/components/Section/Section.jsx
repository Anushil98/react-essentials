export default function Section({ title, children, ...props }) {
  return (
    // by doing ...props we can send all other props like id class etc. Used in creating Wrapper components
    // This is called prop forwarding
    <section {...props}>
      {title ? <h1>{title}</h1> : null}
      {children}
    </section>
  );
}
