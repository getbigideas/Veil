import {
  AllAbout,
  Exchange,
  RecentTransaction,
  SupportedCrypto,
  LastestUpdate,
  TrackOrder,
} from "./main";

export function Body() {
  return (
    <>
      <section className="flex flex-col bg-[#16161c] w-full items-center">
        <AllAbout />
        <Exchange />
        <RecentTransaction />
        <SupportedCrypto />
        <LastestUpdate />
        <TrackOrder />
      </section>
    </>
  );
}
