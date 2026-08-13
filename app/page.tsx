import { ActionButtons } from "@/components/ActionButtons";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LocationCard } from "@/components/LocationCard";
import { SellerProfile } from "@/components/SellerProfile";
import { ShareButton } from "@/components/ShareButton";
import { sellerData } from "@/data/sellerData";

export default function Home() {
  return (
    <main className="app-shell relative isolate min-h-svh overflow-x-hidden bg-slate-950 shadow-[0_0_80px_rgba(0,0,0,0.55)] sm:my-[clamp(1rem,3vw,2.5rem)] sm:rounded-[clamp(1.5rem,3vw,2.75rem)]">
      <div className="pointer-events-none absolute inset-x-0 top-[30svh] h-96 bg-[radial-gradient(circle_at_center,rgba(0,132,255,0.12),transparent_65%)]" />
      <Hero
        backgroundImage={sellerData.motorcycleImage}
        logo={sellerData.logo}
        dealerName={sellerData.dealerName}
        slogan={sellerData.slogan}
      />
      <div className="relative z-10">
        <SellerProfile
          name={sellerData.name}
          role={sellerData.role}
          photo={sellerData.photo}
          message={sellerData.profileMessage}
        />
        <ActionButtons actions={sellerData.actions} />
        <LocationCard
          title={sellerData.locationTitle}
          dealerName={sellerData.dealerName}
          address={sellerData.address}
          latitude={sellerData.latitude}
          longitude={sellerData.longitude}
          buttonLabel={sellerData.mapsButtonLabel}
        />
        <ShareButton
          label={sellerData.shareButtonLabel}
          shareTitle={sellerData.shareTitle}
          shareText={sellerData.shareText}
          fallbackUrl={sellerData.pageUrl}
          shareSuccessMessage={sellerData.shareSuccessMessage}
          copySuccessMessage={sellerData.copySuccessMessage}
          errorMessage={sellerData.shareErrorMessage}
        />
        <Footer
          dealerName={sellerData.dealerName}
          qrCodeLabel={sellerData.qrCodeLabel}
          qrCodeUrl={sellerData.qrCodeUrl}
        />
      </div>
    </main>
  );
}
