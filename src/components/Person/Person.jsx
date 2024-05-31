export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age !== undefined && (
      <p className="Person__age">{`I am ${person.age}`}</p>
    )}
    {person.isMarried && person.sex === 'm' ? (
      <p className="Person__partner">{`${person.partnerName} is my wife`}</p>
    ) : null}
    {person.isMarried && person.sex === 'f' ? (
      <p className="Person__partner">{`${person.partnerName} is my husband`}</p>
    ) : null}
    {person.isMarried === false ? (
      <p className="Person__partner">I am not married</p>
    ) : null}
  </section>
);
