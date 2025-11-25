import Introduction from "../components/layout/Introduction";
import { information, aboutMe } from "./content";

export default async function Home() {
  const introduction = aboutMe.subsections?.[0];

  return (
    <div className="h-screen overflow-hidden pb-[10rem]">
      <main className="h-full">
        <Introduction information={information} introduction={introduction} />
      </main>
    </div>
  );
}
