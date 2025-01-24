import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { LinkAppearanceButton } from "@/components/button/link-appearance-button";
import { CardDotted } from "@/components/cards/cardDotted";
import { AdsenseHorizontalComponent } from "@/components/google/AdsenseComponent";
import { BreadcrumbComponent } from "@/components/iteraction/breadcrumb";
import { RecommendedProjects } from "@/components/iteraction/recommendedProjects";
import { SideShowAds } from "@/components/side/sideShowAds";
import { Mdx } from "@/components/structure/mdx-components";
import { JsonLd } from "@/components/structure/schema-org";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Article } from "schema-dts";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/");
  const page = allProjects.find((proj) => proj.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: "article",
      url: `https://andresinho20049.com.br/projects/${page.slug
        .split("/")
        .pop()}`,
      title: page.title,
      description: page.description,
      siteName: "Project | Andresinho20049",
      images: [
        {
          url: page.imgSrc.trim(),
          type: "image/png",
          alt: page.description,
          width: 1200,
          height: 1800,
        },
        {
          url: "/og-Image.jpg",
          type: "image/jpg",
          alt: "Logo | Andresinho20049",
          width: 1200,
          height: 630,
        },
        {
          url: "/og-Image-2.jpg",
          type: "image/jpg",
          alt: "Logo | Andresinho20049",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allProjects.map((proj) => ({
    slug: proj.slugAsParams.split("/"),
  }));
}

export default async function PageProject({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  const structuredData = JsonLd<Article>({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: page.title,
    description: page.description,
    author: [
      {
        "@type": "Person",
        name: "Andresinho20049",
        url: "https://github.com/andresinho20049",
      },
    ],
    image: page.imgSrc.trim(),
    datePublished: page.date,
    keywords: page.tags.split("|"),
  });

  return (
    <article>
      <BreadcrumbComponent text={page.title} />
      <div className="flex justify-center">
        <SideShowAds adsTypes={["square", "vertical"]} device="xl" />

        <div className="lg:flex-1 flex flex-col justify-start items-center">
          <div className="w-4/5 prose-sm md:prose lg:prose-lg xl:prose-xl dark:prose-invert">
            <h1>{page.title}</h1>
            {page.description && (
              <h3 className="text-lg md:text-xl font-light">
                {page.description}
              </h3>
            )}
            <div>
              <p className="font-light text-sm text-gray-500 dark:text-gray-300 opacity-25">
                <strong>Publicated: </strong>
                {page.date.substring(0, 10)}
              </p>
            </div>
            <hr />
            <Image alt="Modelo" src={page.imgSrc} width={1080} height={1920} />

            {page.linkPreview && (
              <div>
                <LinkAppearanceButton href={page.linkPreview} isBlank>
                  Visit
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </LinkAppearanceButton>
              </div>
            )}
            <Mdx code={page.body.code} />
            <AdsenseHorizontalComponent />
          </div>
          <div className="w-5/6">
            <RecommendedProjects exclusion={page.title} qtde={2} />
          </div>
        </div>
        <SideShowAds device="lg" adsTypes={["square-fixed"]}>
          <CardDotted
            titleCard="About"
            titleContent={page.title}
            summary={page.description}
            imgCard={page.imgSrc}
            tags={page.tags.split("|")}
          />
        </SideShowAds>
      </div>
      {structuredData}
    </article>
  );
}
