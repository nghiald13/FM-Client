import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import type { MerchantProfile } from "@/types/onboard";
import { ShareStoreButton } from "@/components/merchant/share-store-button";

interface MerchantProfileHeaderProps {
  merchant: MerchantProfile;
}

function toHandle(shopName: string): string {
  const slug = shopName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/^\.+|\.+$/g, "");
  return `@${slug || "store"}`;
}

export function MerchantProfileHeader({ merchant }: MerchantProfileHeaderProps) {
  const handle = toHandle(merchant.shopName);

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="relative h-36 w-full bg-slate-200 sm:h-52">
        {merchant.bannerUrl && (
          <Image
            src={merchant.bannerUrl}
            alt={`Ảnh bìa của ${merchant.shopName}`}
            fill
            priority
            unoptimized
            sizes="(min-width: 1280px) 960px, 100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="px-4 pb-5 sm:px-6">
        <div className="-mt-10 flex items-end justify-between gap-3 sm:-mt-12">
          <div className="relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-100 text-2xl font-semibold text-emerald-700 ring-4 ring-white sm:size-24">
            {merchant.logoUrl ? (
              <Image
                src={merchant.logoUrl}
                alt={`Ảnh đại diện của ${merchant.shopName}`}
                fill
                unoptimized
                sizes="96px"
                className="object-cover"
              />
            ) : (
              <span aria-hidden="true">{merchant.shopName.charAt(0).toUpperCase()}</span>
            )}
          </div>
          <ShareStoreButton handle={handle} />
        </div>

        <h1 className="mt-3 text-xl font-semibold text-slate-900">{merchant.shopName}</h1>
        <p className="text-sm text-slate-500">{handle}</p>
        {merchant.description && (
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-700">{merchant.description}</p>
        )}

        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
          {merchant.contactEmail && (
            <span className="flex items-center gap-1">
              <Mail className="size-3.5" aria-hidden="true" />
              {merchant.contactEmail}
            </span>
          )}
          {merchant.contactPhone && (
            <span className="flex items-center gap-1">
              <Phone className="size-3.5" aria-hidden="true" />
              {merchant.contactPhone}
            </span>
          )}
        </p>
      </div>
    </section>
  );
}