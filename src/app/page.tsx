import Banner from "@/components/shared/Banner";
import NewCard from "@/components/shared/NewCard";

export default function Home() {
  return (
    <div className="py-12">
      <Banner />

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div>
          <NewCard />
        </div>
      </div>
    </div>
  );
}
