import AppWelcome from "./components/AppWelcome";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <hr />
      <AppWelcome headTitle="SWU" isShow={true} />
    </>
  );
}
