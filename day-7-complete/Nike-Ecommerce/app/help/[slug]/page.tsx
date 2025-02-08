import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { HelpType } from '@/types/help';

interface ProductPageProps {
  params: Promise<{ slug: string }>; 
}

async function getProduct(slug: string): Promise<HelpType | null> {
  return client.fetch(
    groq`*[_type == "help" && slug.current == $slug][0]{
      _id,
      _type,
      name,
    //   image,
      subtitle,
      description
    }`,
    { slug }
  );
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params; // Resolve the promise to get slug
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mt-10 mx-auto px-4 h-full mb-10 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Details Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
            {product.name}
          </h1>
          <h2 className="text-xl font-semibold text-gray-600">
            {product.subtitle}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            {product.description}
          </p>

        </div>
      </div>
    </div>
  );
}
