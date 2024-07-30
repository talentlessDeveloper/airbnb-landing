import Landing from "~/components/landing";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const category = searchParams?.category as string;
  const region = searchParams?.region as string;
  return (
    <>
      {/* <div className="bg-primary text-primary-foreground">
        <p>primary and foreground</p>
      </div>
      <div className="bg-background text-foreground">
        <p>background and forground</p>
      </div>
      <div className="bg-secondary text-secondary-foreground">
        <p>secondary and forgtound</p>
      </div> */}
      <Landing category={category} region={region} />
    </>
  );
}
