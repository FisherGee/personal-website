const schools = [
  {
    year: 2022,
    name: "Lorne Park Highschool",
    degree: "Honours",
  },
  {
    year: 2023,
    name: "Carleton University",
    degree: "Computer Science",
  },
  {
    year: 2027,
    name: "Western University",
    degree: "BMos Finance",
  },
];

export default function Education() {
  return (
    <section>
      {schools.map((school) => (
        <p>
          {school.year} - <span className="text-accent2">{school.name}</span>
          <span className="text-accent"> - {school.degree}</span>
        </p>
      ))}
    </section>
  );
}
