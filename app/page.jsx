import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero harum
        impedit voluptates, sint animi atque odit sit ipsum excepturi cum!
        Dignissimos aperiam quas magnam commodi dolorum id illum, velit iure
        quae exercitationem. Repellendus consectetur nisi tenetur aperiam
        temporibus officiis voluptate.
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
      <h2>Company Updates</h2>
      <div className="card">
        <h3>New member of the web Dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore
          delectus cupiditate? Voluptatem numquam reiciendis laboriosam odio
          laudantium doloribus libero ipsum molestiae placeat. Nostrum neque
          voluptates, facilis possimus consectetur ullam repellendus ex porro ab
          blanditiis eligendi ipsam, molestias vel hic tempore veritatis error
          quia saepe illo voluptas sint eaque alias?
        </p>
      </div>
      <div className="card">
        <h3>New Website Live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore
          delectus cupiditate? Voluptatem numquam reiciendis laboriosam odio
          laudantium doloribus libero ipsum molestiae placeat. Nostrum neque
          voluptates, facilis possimus consectetur ullam repellendus ex porro ab
          blanditiis eligendi ipsam, molestias vel hic tempore veritatis error
          quia saepe illo voluptas sint eaque alias?
        </p>
      </div>
    </main>
  );
}
