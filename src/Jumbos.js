export function User() {
  const user = {
    firsName: "César",
    lastName: "Medina",
  };
  return (
    <div>
      <h3>
        {user.firsName} {user.lastName}
      </h3>
      <br />
    </div>
  );
}

export function Footer() {
  return (
    <section className="footer">
      <ul className="footlist">
        <li className="footlink">GROUP ARCH</li>
        <li className="footlink">Instagram</li>
        <li className="footlink">Contact</li>
      </ul>
    </section>
  );
}
