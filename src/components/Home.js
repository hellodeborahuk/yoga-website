import Hero from "./Hero";
import Info from "./Info";
import ClassInfo from "./ClassInfo";
import MailingList from "./MailingList";
import LatestBlog from "./LatestBlog";
import Gallery from "./Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <ClassInfo />
      <MailingList />
      <LatestBlog />
      <Gallery />
    </>
  );
}
