import Image from "next/image";
import { BadgeCheck, Clock, MapPin, Star } from "lucide-react";
import type { Merchant } from "@/types/merchant";
import { ShareStoreButton } from "@/components/merchant/share-store-button";

interface MerchantProfileHeaderProps {
  merchant: Merchant;
}

export function MerchantProfileHeader({ merchant }: MerchantProfileHeaderProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="relative h-36 w-full bg-slate-200 sm:h-52">
        <Image
          src={merchant.banner}
          alt={`Ảnh bìa của ${merchant.name}`}
          fill
          priority
          sizes="(min-width: 1280px) 960px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="px-4 pb-5 sm:px-6">
        <div className="-mt-10 flex items-end justify-between gap-3 sm:-mt-12">
          <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-slate-100 ring-4 ring-white sm:size-24">
            <Image
              src={merchant.avatar}
              alt={`Ảnh đại diện của ${merchant.name}`}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <ShareStoreButton handle={merchant.handle} />
        </div>

        <div className="mt-3 flex items-center gap-1.5">
          <h1 className="text-xl font-semibold text-slate-900">{merchant.name}</h1>
          {merchant.verified && (
            <BadgeCheck className="size-5 text-emerald-600" aria-label="Đã xác minh" />
          )}
        </div>
        <p className="text-sm text-slate-500">{merchant.handle}</p>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-700">{merchant.bio}</p>

        <dl className="mt-4 grid grid-cols-3 gap-2 sm:max-w-md">
          <div className="rounded-md border border-slate-200 px-3 py-2">
            <dt className="flex items-center gap-1 text-xs text-slate-500">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              Đánh giá
            </dt>
            <dd className="text-sm font-semibold text-slate-900">
              {merchant.rating} ({merchant.reviewCount})
            </dd>
          </div>
          <div className="rounded-md border border-slate-200 px-3 py-2">
            <dt className="text-xs text-slate-500">Đã bán</dt>
            <dd className="text-sm font-semibold text-slate-900">
              {merchant.totalSales.toLocaleString("vi-VN")}
            </dd>
          </div>
          <div className="rounded-md border border-slate-200 px-3 py-2">
            <dt className="text-xs text-slate-500">Tham gia</dt>
            <dd className="text-sm font-semibold text-slate-900">{merchant.joinedAt}</dd>
          </div>
        </dl>

        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5" />
            {merchant.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {merchant.responseTime}
          </span>
        </p>
      </div>
    </section>
  );
}