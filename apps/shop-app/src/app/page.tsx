import type { Metadata } from "next";
import { PackageSearch } from "lucide-react";
import { CategoryBar } from "../components/home/category-bar";
import { SortTabs } from "../components/home/sort-tabs";
import { ProductCard } from "../components/product/product-card";
import { EmptyState } from "../components/shared/empty-state";
import type { SortOption } from "@/types";
import { categories, getProducts } from "@/lib/mock-data";
export const metadata: Metadata = {
  title: "Trang chủ",
};

interface HomePageProps {
  searchParams: Promise<{ category?: string; sort?: string }>;
}

const validSorts: SortOption[] = ["newest", "price-asc", "price-desc"];

function parseSort(value: string | undefined): SortOption {
  return validSorts.find((option) => option === value) ?? "newest";
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const activeCategory = categories.find((c) => c.id === params.category)?.id;
  const sort = parseSort(params.sort);
  const items = getProducts({ category: activeCategory, sort });
  const activeLabel = categories.find((c) => c.id === activeCategory)?.label;

  return (
    <div className="space-y-4">
      <CategoryBar categories={categories} activeCategory={activeCategory} sort={sort} />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h1 className="text-lg font-bold text-slate-900">
            {activeLabel ?? "Tin đăng mới nhất"}
          </h1>
          <p className="text-sm text-slate-500">{items.length} sản phẩm</p>
        </div>
        <SortTabs activeSort={sort} category={activeCategory} />
      </div>

      {items.length === 0 ? (
        <EmptyState
          icon={PackageSearch}
          title="Chưa có sản phẩm nào"
          description="Danh mục này hiện chưa có tin đăng. Hãy xem các danh mục khác hoặc quay lại sau."
          actionLabel="Xem tất cả sản phẩm"
          actionHref="/"
        />
      ) : (
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {items.map((product, index) => (
            <li key={product.id}>
              <ProductCard product={product} priority={index < 4} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}